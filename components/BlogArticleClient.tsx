import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BackButton from '@/components/BackButton'
import type { PostMeta } from '@/lib/blog'

const tagColors: { [key: string]: string } = {
  Nature: 'bg-secondary text-white',
  Birds: 'bg-primary text-white',
  Knowledge: 'bg-brand-navy text-white',
  Culture: 'bg-accent-offer text-white',
  Wildlife: 'bg-secondary text-white',
}

export default function BlogArticleClient({
  post,
  source,
}: {
  post: PostMeta
  source: string
}) {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Hero Image Section with Title Overlay at Bottom */}
      <div className="w-full h-screen relative">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <BackButton />
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs font-semibold ${tagColors[tag] || 'bg-gray-500 text-white'}`}
                  style={{ fontFamily: '"Asap", Sans-serif' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              {post.title}
            </h1>
            <p className="text-white text-sm md:text-base" style={{ fontFamily: '"Asap", Sans-serif' }}>
              {post.date}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-primary-bg py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-white px-8 md:px-16 py-12">
          <div className="prose prose-lg max-w-none blog-content" style={{ fontFamily: '"Asap", Sans-serif' }}>
            <MDXRemote source={source} />
          </div>
        </div>
      </div>

      <style>{`
        .blog-content h2 {
          font-family: "Gilroy", Sans-serif;
          font-weight: 800;
          font-size: 2rem;
          color: #072D48;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          font-family: "Asap", Sans-serif;
          color: #4B5563;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  )
}
