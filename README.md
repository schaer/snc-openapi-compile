# ServiceNow AJV Compile

Compiles JSON Schema files and OpenAPI specs into ServiceNow Script Includes.

## How it works

Each input schema goes through two pipeline stages:

```
JSON Schema / OpenAPI spec
        │
        ▼
  1. AJV Standalone     — compiles the schema into a standalone JS validation function
        │
        ▼
  2. ServiceNow wrap    — wraps it in a Class.create() Script Include
```

## Getting started

```bash
git clone <repo-url>
cd servicenow-ajv-compile
npm install
```

Drop your JSON Schema or OpenAPI spec files (`.json`, `.yaml`, or `.yml`) into the `input/` directory, then run:

```bash
npm start
```

Compiled Script Includes are written to `output/`.

## Input formats

### Plain JSON Schema

Any file following the JSON Schema specification (draft-07 or later):

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ChangeRequest",
  "type": "object",
  "required": ["number", "state"],
  "properties": {
    "number": { "type": "string", "pattern": "^CHG[0-9]{7}$" },
    "state":  { "type": "string", "enum": ["-5", "1", "2", "3", "4", "-1"] }
  }
}
```

Produces one Script Include named after the schema's `title` (or the filename if no title is set).

### OpenAPI 3.x / Swagger 2.0

A full API spec file. Every schema defined under `components/schemas` (OpenAPI 3.x) or `definitions` (Swagger 2.0) produces its own Script Include. Cross-schema `$ref` references are fully resolved before compilation, so each output file is self-contained.

## Output structure

```
output/
  <source-filename>/
    <Name>Validator.schema.json  ← dereferenced JSON Schema (one per component)
    <Name>Validator.ajv.js       ← Step 1: raw AJV standalone code
    <Name>Validator.js           ← Step 2: ServiceNow Script Include (paste-ready)
```

Example for `input/openapi_petstore.json`:

```
output/
  openapi_petstore/
    PetValidator.schema.json
    PetValidator.ajv.js
    PetValidator.js
    CategoryValidator.schema.json
    CategoryValidator.ajv.js
    ...
```

## Using the Script Include in ServiceNow

1. Copy the contents of `<Name>Validator.js` into a new Script Include in ServiceNow.
2. Set the **Name** field to match the class name (e.g. `PetValidator`).
3. Call it from any server-side script:

```javascript
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    // validate
	var validation_result = new global.TroubleTicketCreateValidator().validate(request.body.data);

  // return error if validation failed
	if(!validation_result.valid) {
		response.setStatus('400');
		return validation_result.errors;
	}

	// continue - validation result as sample payload
	return validation_result;

})(request, response);
```

`validate(data)` always returns `{ valid: boolean, errors: array }`.

## Configuration

| Environment variable | Default     | Description                        |
|----------------------|-------------|------------------------------------|
| `INPUT_DIR`          | `./input`   | Directory to read schema files from |
| `OUTPUT_DIR`         | `./output`  | Directory to write results to       |

```bash
INPUT_DIR=/schemas OUTPUT_DIR=/dist npm start
```

## Pipeline internals

| File | Role |
|------|------|
| `src/steps/read.js` | Reads and parses the input file |
| `src/steps/expand.js` | Detects OpenAPI/Swagger specs and expands each schema entry into a separate pipeline item; dereferences all `$ref`s |
| `src/steps/ajvStandalone.js` | Compiles the schema with AJV and generates standalone validation code |
| `src/steps/servicenow.js` | Wraps the standalone code in a `Class.create()` ServiceNow Script Include |
| `src/pipeline.js` | Orchestrates the steps and writes output files per schema |
| `src/index.js` | Entry point — scans `input/`, runs the pipeline for each file |

## Configuration

Output formatting is controlled by a `.prettierrc` file in the project root. The default settings are:

```json
{ "printWidth": 100, "singleQuote": true, "semi": true }
```

## Dependencies

| Package | Purpose |
|---------|---------|
| `ajv` | JSON Schema compilation and standalone code generation |
| `ajv-formats` | Standard format validators (`date-time`, `email`, `uri`, etc.) |
| `@apidevtools/json-schema-ref-parser` | Resolves and inlines `$ref` references; parses JSON and YAML natively |

### Dev dependencies

| Package | Purpose |
|---------|---------|
| `prettier` | Formats the generated Script Include output |
