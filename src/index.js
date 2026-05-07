import { readdir, mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { run } from './pipeline.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const INPUT_DIR = process.env.INPUT_DIR ?? path.join(ROOT, 'input')
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? path.join(ROOT, 'output')

await mkdir(OUTPUT_DIR, { recursive: true })

const entries = await readdir(INPUT_DIR)
const schemaFiles = entries.filter(f => /\.(json|ya?ml)$/.test(f))

if (schemaFiles.length === 0) {
  console.log('No JSON / YAML files found in', INPUT_DIR)
  process.exit(0)
}

let failed = 0
for (const filename of schemaFiles) {
  const filePath = path.join(INPUT_DIR, filename)
  console.log(`Processing: ${filename}`)
  try {
    const outPaths = await run(filePath, OUTPUT_DIR)
    for (const p of outPaths) {
      console.log(`  -> ${path.relative(ROOT, p)}`)
    }
  } catch (err) {
    console.error(`  Failed: ${err.message}`)
    failed++
  }
}

if (failed > 0) process.exit(1)
