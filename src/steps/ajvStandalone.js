import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import standaloneCode from 'ajv/dist/standalone/index.js'

export async function generateStandaloneCode(file) {
  // strict: false ignores OpenAPI-specific keywords (xml, example, x-*, etc.)
  // allErrors: true collects all validation errors instead of stopping at the first
  const ajv = new Ajv({ code: { lines: true, source: true }, strict: false, allErrors: true })

  // Register all standard formats unconditionally. AJV standalone only emits
  // require() calls for formats that are actually referenced in the schema, so
  // registering unused ones has no effect on the generated code.
  addFormats(ajv)

  const validate = ajv.compile(file.schema)
  const code = standaloneCode(ajv, validate)
  return { ...file, standaloneCode: code }
}
