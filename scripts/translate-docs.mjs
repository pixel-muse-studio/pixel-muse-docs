import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'

const root = process.cwd()
const sourceRoot = join(root, 'docs', 'ko')
const outputRoot = join(root, 'docs')
const cachePath = join(root, '.cache', 'translations.json')
const token = process.env.GITHUB_TOKEN
const model = process.env.TRANSLATION_MODEL || 'openai/gpt-4o-mini'
const promptVersion = 'pm-docs-ko-en-v1'

if (!token) throw new Error('GITHUB_TOKEN is required to generate English documentation.')

const protectedTerms = [
  'Pixel Muse Studio', 'PMdurability', 'CraftEngine', 'Paper', 'Nexo',
  'PlaceholderAPI', 'Skript', 'Java', 'YAML', 'JSON', 'PDC', 'HEX', 'Tint',
  'UUID', 'Mending', 'Unbreaking', 'Unbreakable', 'Minecraft', 'max_damage'
]

async function markdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...await markdownFiles(path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function protectMarkdown(markdown) {
  const values = []
  const protect = (value) => {
    const id = `PMXPROTECTED${String(values.length).padStart(4, '0')}XPM`
    values.push(value)
    return id
  }
  let text = markdown.replace(/```[\s\S]*?```/g, protect)
  text = text.replace(/`[^`\n]+`/g, protect)
  text = text.replace(/https?:\/\/[^\s)"']+/g, protect)
  return { text, restore: (translated) => values.reduce((result, value, index) => result.replaceAll(`PMXPROTECTED${String(index).padStart(4, '0')}XPM`, value), translated) }
}

async function translate(markdown, fileName) {
  const { text, restore } = protectMarkdown(markdown)
  const response = await fetch('https://models.github.ai/inference/chat/completions', {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2026-03-10'
    },
    body: JSON.stringify({
      model,
      temperature: 0.1,
      messages: [
        {
          role: 'system',
          content: `Translate Korean technical documentation into natural, concise English. Preserve Markdown, YAML frontmatter, HTML tags, links, placeholders, indentation, heading levels, tables, and every PMXPROTECTED token exactly. Never translate or transliterate these terms: ${protectedTerms.join(', ')}. Never translate namespaced IDs, commands, permission nodes, file paths, file names, configuration keys, placeholders, or values such as <PMdurability>. Do not add explanations, claims, sections, or code fences. Return only the complete translated Markdown.`
        },
        { role: 'user', content: `File: ${fileName}\n\n${text}` }
      ]
    })
  })
  if (!response.ok) throw new Error(`Translation request failed (${response.status}): ${await response.text()}`)
  const payload = await response.json()
  let content = payload.choices?.[0]?.message?.content?.trim()
  if (!content) throw new Error(`Translation returned no content for ${fileName}`)
  if (content.startsWith('```markdown') && content.endsWith('```')) content = content.slice(11, -3).trim()
  const restored = restore(content).replaceAll('/ko/', '/')
  return `<!-- AUTO-GENERATED FROM docs/ko/${fileName}. DO NOT EDIT. -->\n\n${restored}\n`
}

await mkdir(dirname(cachePath), { recursive: true })
let cache = {}
try { cache = JSON.parse(await readFile(cachePath, 'utf8')) } catch {}

for (const sourcePath of await markdownFiles(sourceRoot)) {
  const fileName = relative(sourceRoot, sourcePath).replaceAll('\\', '/')
  const outputPath = join(outputRoot, fileName)
  const source = await readFile(sourcePath, 'utf8')
  const hash = createHash('sha256').update(`${promptVersion}\n${model}\n${source}`).digest('hex')
  let english = cache[hash]
  if (!english) {
    english = await translate(source, fileName)
    cache[hash] = english
  }
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, english, 'utf8')
  process.stdout.write(`Translated ${fileName}\n`)
}

await writeFile(cachePath, JSON.stringify(cache, null, 2), 'utf8')
