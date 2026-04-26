import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const GUIDES_DIR = path.join(process.cwd(), 'content/guides')

export interface GuideMeta {
  title: string
  date: string
  excerpt: string
  category: string
  coverImage: string
  slug: string
  readTime: string
}

export interface Guide extends GuideMeta {
  content: string
}

export function getAllGuides(): GuideMeta[] {
  if (!fs.existsSync(GUIDES_DIR)) return []
  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith('.mdx'))
  const guides = files.map((filename) => {
    const filePath = path.join(GUIDES_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(raw)
    return data as GuideMeta
  })
  return guides.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(GUIDES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { ...(data as GuideMeta), content }
}
