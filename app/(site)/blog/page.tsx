import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog - Nature, Wildlife & Kayaking Stories',
  description:
    'Read our blog about kayaking adventures, wildlife encounters, birdwatching tips, and the natural beauty of Rathgama Lake in Hikkaduwa, Sri Lanka. Learn about mangroves, local culture, and eco-tourism.',
  openGraph: {
    title: 'Blog | AquaTrek Hikkaduwa',
    description:
      'Read our blog about kayaking adventures, wildlife encounters, and the natural beauty of Rathgama Lake.',
    url: 'https://aquatrekhikkaduwa.com/blog',
  },
}

const tagColors: { [key: string]: string } = {
  Nature: 'bg-secondary text-white',
  Birds: 'bg-primary text-white',
  Knowledge: 'bg-brand-navy text-white',
  Culture: 'bg-accent-offer text-white',
  Wildlife: 'bg-secondary text-white',
}

export default function BlogPage() {
  const blogPosts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <div className="w-full h-screen relative">
        <Image
          src="/images/main-carousel/carousel7.webp"
          alt="Rathgama Lake Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-white text-center px-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Blog
          </h1>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Blog Image */}
                <div className="w-full h-64 overflow-hidden relative">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 text-left">
                  {/* Tags */}
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

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <h3
                      className="text-xl md:text-2xl font-bold text-brand-navy mb-3 hover:text-primary transition-colors duration-200 cursor-pointer text-left"
                      style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                    >
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p
                    className="text-gray-700 text-sm leading-relaxed mb-4 text-left"
                    style={{ fontFamily: '"Asap", Sans-serif' }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Date */}
                  <p
                    className="text-gray-500 text-xs text-left"
                    style={{ fontFamily: '"Asap", Sans-serif' }}
                  >
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
