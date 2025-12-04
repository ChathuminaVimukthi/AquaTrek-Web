import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  tags: string[];
  slug: string;
}

const Blog: React.FC = () => {
  // Sample blog data - replace with actual data from your backend/CMS
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Discovering the Mangrove Ecosystem",
      excerpt: "Explore the fascinating world of mangroves at Rathgama Lake and learn about their crucial role in protecting our coastline and supporting diverse wildlife.",
      image: "/images/sunrise-tour/mangrove-kayaking1.JPEG",
      date: "November 28, 2024",
      tags: ["Nature", "Knowledge"],
      slug: "discovering-the-mangrove-ecosystem"
    },
    {
      id: 2,
      title: "Bird Watching Guide: Rathgama's Feathered Friends",
      excerpt: "From kingfishers to herons, discover the incredible variety of bird species that call Rathgama Lake their home throughout the seasons.",
      image: "/images/sunrise-tour/bird1.JPG",
      date: "November 20, 2024",
      tags: ["Birds", "Nature"],
      slug: "bird-watching-guide-rathgamas-feathered-friends"
    },
    {
      id: 3,
      title: "The Best Time to Visit Rathgama Lake",
      excerpt: "Learn about the optimal seasons and times of day to experience the magic of Rathgama Lake, from sunrise paddles to golden hour reflections.",
      image: "/images/sunrise-tour/sunrise2.JPG",
      date: "November 15, 2024",
      tags: ["Knowledge"],
      slug: "the-best-time-to-visit-rathgama-lake"
    },
    {
      id: 4,
      title: "Traditional Fishing Communities of Rathgama",
      excerpt: "Meet the local fishing families whose lives have been intertwined with the lake for generations and discover their sustainable practices.",
      image: "/images/others/local-fisherman.JPG",
      date: "November 10, 2024",
      tags: ["Culture", "Knowledge"],
      slug: "traditional-fishing-communities-of-rathgama"
    },
    {
      id: 5,
      title: "Island Hermitage: A Spiritual Sanctuary",
      excerpt: "Journey to the historic Buddhist hermitage founded in 1911, a peaceful retreat that has attracted spiritual seekers from around the world.",
      image: "/images/others/island-hermitage.JPG",
      date: "November 5, 2024",
      tags: ["Culture", "Knowledge"],
      slug: "island-hermitage-a-spiritual-sanctuary"
    },
    {
      id: 6,
      title: "Wildlife Encounters: Beyond the Birds",
      excerpt: "Discover the rich aquatic life, monitor lizards, and other fascinating creatures that inhabit the diverse ecosystem of Rathgama Lake.",
      image: "/images/sunrise-tour/watermonitor1.JPG",
      date: "October 30, 2024",
      tags: ["Nature", "Wildlife"],
      slug: "wildlife-encounters-beyond-the-birds"
    }
  ];

  const getTagColor = (tag: string): string => {
    const tagColors: { [key: string]: string } = {
      'Nature': 'bg-secondary text-white',
      'Birds': 'bg-primary text-white',
      'Knowledge': 'bg-brand-navy text-white',
      'Culture': 'bg-accent-offer text-white',
      'Wildlife': 'bg-secondary text-white'
    };
    return tagColors[tag] || 'bg-gray-500 text-white';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Blog - Nature, Wildlife & Kayaking Stories"
        description="Read our blog about kayaking adventures, wildlife encounters, birdwatching tips, and the natural beauty of Rathgama Lake in Hikkaduwa, Sri Lanka. Learn about mangroves, local culture, and eco-tourism."
        keywords="kayaking blog, Rathgama Lake wildlife, Sri Lanka nature blog, birdwatching guides, mangrove ecosystem, eco tourism stories"
        canonical="https://aquatrekhikkaduwa.com/blog"
      />
      {/* Hero Image Section - Full Width and Height */}
      <div className="w-full h-screen relative">
        <img 
          src="/images/main-carousel/carousel7.jpg" 
          alt="Rathgama Lake Blog" 
          className="w-full h-full object-cover"
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
                key={post.id} 
                className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Blog Image */}
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 text-left">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 text-xs font-semibold ${getTagColor(tag)}`}
                        style={{ fontFamily: '"Asap", Sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${post.slug}`}>
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

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
