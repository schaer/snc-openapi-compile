import $RefParser from '@apidevtools/json-schema-ref-parser'
import path from 'path'
import { toClassName } from '../utils.js'

/**
 * Reads and parses a JSON or YAML schema file.
 * Parsing is delegated to $RefParser so both formats are supported without
 * an extra dependency.
 */
export async function readSchema(filePath) {
  const schema = await $RefParser.parse(filePath)
  const basename = path.parse(filePath).name
  const name = toClassName(schema.title ?? basename)
  return { name, filePath, schema }
}
