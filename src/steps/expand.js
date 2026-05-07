import $RefParser from '@apidevtools/json-schema-ref-parser'
import { toClassName } from '../utils.js'

export async function expandSchemas(file) {
  const parsed = file.schema

  // OpenAPI 3.x
  if (parsed.openapi && parsed.components?.schemas) {
    const derefed = await $RefParser.dereference(file.filePath)
    return Object.entries(derefed.components.schemas).map(([name, schema]) => ({
      name: toClassName(name),
      filePath: file.filePath,
      schema,
    }))
  }

  // Swagger 2.0
  if (parsed.swagger && parsed.definitions) {
    const derefed = await $RefParser.dereference(file.filePath)
    return Object.entries(derefed.definitions).map(([name, schema]) => ({
      name: toClassName(name),
      filePath: file.filePath,
      schema,
    }))
  }

  // Plain JSON Schema — dereference handles any external $ref files too
  const derefed = await $RefParser.dereference(file.filePath)
  return [{ name: file.name, filePath: file.filePath, schema: derefed }]
}
