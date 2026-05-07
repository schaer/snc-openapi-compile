import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import prettier from 'prettier'
import { readSchema } from './steps/read.js'
import { expandSchemas } from './steps/expand.js'
import { generateStandaloneCode } from './steps/ajvStandalone.js'
import { generateScriptInclude } from './steps/servicenow.js'

export async function run(filePath, outputDir) {
  const file = await readSchema(filePath)
  const schemas = await expandSchemas(file)

  // Strip any extension (.json / .yaml / .yml) so the output folder name is clean
  const sourceName = path.parse(filePath).name
  const schemaOutputDir = path.join(outputDir, sourceName)
  await mkdir(schemaOutputDir, { recursive: true })

  // Resolve Prettier config once for this run (reads .prettierrc if present)
  const prettierConfig = (await prettier.resolveConfig(filePath)) ?? {}

  const outPaths = []
  for (const schemaItem of schemas) {
    const base = `${schemaItem.name}Validator`

    // Write the dereferenced JSON Schema
    const schemaPath = path.join(schemaOutputDir, `${base}.schema.json`)
    await writeFile(schemaPath, JSON.stringify(schemaItem.schema, null, 2), 'utf-8')
    outPaths.push(schemaPath)

    const withStandalone = await generateStandaloneCode(schemaItem)
    await writeFile(path.join(schemaOutputDir, `${base}.ajv.js`), withStandalone.standaloneCode, 'utf-8')

    const withScriptInclude = generateScriptInclude(withStandalone)
    const formatted = await prettier.format(withScriptInclude.scriptInclude, {
      ...prettierConfig,
      parser: 'babel',
    })
    const finalPath = path.join(schemaOutputDir, `${base}.js`)
    await writeFile(finalPath, formatted, 'utf-8')

    outPaths.push(finalPath)
  }

  return outPaths
}
