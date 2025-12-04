import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  tags: string[];
}

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Sample blog data - replace with actual data from your backend/CMS
  const blogPosts: { [key: string]: BlogPost } = {
    'discovering-the-mangrove-ecosystem': {
      id: 1,
      title: "Discovering the Mangrove Ecosystem",
      content: `
        <p>Rathgama Lake's mangrove ecosystem is one of the most biodiverse habitats along Sri Lanka's southern coast. These remarkable trees, adapted to thrive where land meets sea, create a unique environment that supports countless species and protects our coastline from erosion and storms.</p>

        <h2>The Mangrove Forest</h2>
        <p>Over twenty species of mangrove plants call Rathgama Lake home, each playing a vital role in maintaining the delicate balance of this brackish ecosystem. Their intricate root systems provide shelter for fish, crabs, and other marine life, while their dense canopy offers nesting sites for numerous bird species.</p>

        <p>Walking through the mangrove channels by kayak or canoe, you'll notice the distinctive prop roots and pneumatophores that allow these trees to breathe in the waterlogged soil. These adaptations are millions of years in the making, showcasing nature's incredible ingenuity.</p>

        <h2>Ecological Importance</h2>
        <p>Mangroves are often called the "nurseries of the sea" because they provide critical habitat for juvenile fish and crustaceans. Many of the fish that eventually populate coral reefs and open ocean waters spend their early life protected among the mangrove roots.</p>

        <p>Beyond supporting marine life, mangroves are powerful carbon sinks, absorbing and storing significant amounts of carbon dioxide. They also act as natural water filters, improving water quality by trapping sediments and absorbing pollutants.</p>

        <h2>Conservation Efforts</h2>
        <p>At Aqua Trek, we're committed to educating visitors about the importance of mangrove conservation. Through our guided tours, we share knowledge about these ecosystems and promote sustainable tourism practices that help protect them for future generations.</p>

        <p>Join us on a journey through Rathgama's mangrove forests and discover the hidden world that exists where freshwater meets the sea.</p>
      `,
      image: "/images/sunrise-tour/mangrove-kayaking1.JPEG",
      date: "November 28, 2024",
      tags: ["Nature", "Knowledge"]
    },
    'bird-watching-guide-rathgamas-feathered-friends': {
      id: 2,
      title: "Bird Watching Guide: Rathgama's Feathered Friends",
      content: `
        <p>Rathgama Lake is a paradise for bird enthusiasts, hosting an impressive variety of resident and migratory species throughout the year. Whether you're an experienced birder or just beginning to appreciate our feathered friends, the lake offers unforgettable encounters.</p>

        <h2>Resident Species</h2>
        <p>The lake's permanent residents include the stunning White-breasted Kingfisher, often seen perched on branches overhanging the water, waiting to dive for small fish. Purple Herons wade through shallow waters, while Little Cormorants dive beneath the surface in search of prey.</p>

        <p>Keep your eyes skyward for the magnificent Brahminy Kite, circling above with its distinctive rust-colored plumage. These raptors are a common sight, especially during the early morning hours.</p>

        <h2>Migratory Visitors</h2>
        <p>Between November and March, Rathgama Lake welcomes numerous migratory species from as far as Siberia. These long-distance travelers stop here to rest and feed before continuing their journey, making winter the best time for bird watching.</p>

        <p>Look for various species of sandpipers, plovers, and waders along the lake's edges. The air fills with their calls, creating a symphony of sounds that changes with the seasons.</p>

        <h2>Best Viewing Times</h2>
        <p>Early morning is prime time for bird watching at Rathgama Lake. As the sun rises, birds are most active, feeding and calling to establish territories. The golden light also creates perfect conditions for photography.</p>

        <p>Our guided tours are timed to maximize your chances of spotting a wide variety of species, and our local guides can identify birds by sight and sound, enriching your experience with fascinating insights into their behaviors and habitats.</p>
      `,
      image: "/images/sunrise-tour/bird1.jpg",
      date: "November 20, 2024",
      tags: ["Birds", "Nature"]
    },
    'the-best-time-to-visit-rathgama-lake': {
      id: 3,
      title: "The Best Time to Visit Rathgama Lake",
      content: `
        <p>Planning your visit to Rathgama Lake? Understanding the seasonal variations and daily rhythms of the lake will help you make the most of your experience. Each season and time of day offers something unique.</p>

        <h2>Seasonal Considerations</h2>
        <p>The dry season from December to March is ideal for kayaking and wildlife spotting. Water levels are stable, weather is predictable, and migratory birds arrive from northern regions, adding to the lake's biodiversity.</p>

        <p>The southwest monsoon (May to September) brings rain and lush greenery. While water levels rise and currents strengthen, this season offers its own beauty with dramatic skies and vibrant vegetation.</p>

        <h2>Time of Day</h2>
        <p>Sunrise tours are magical. The lake awakens as mist rises from the water's surface, and birds begin their morning routines. The soft golden light creates perfect conditions for photography and peaceful paddling.</p>

        <p>Late afternoon and sunset tours offer different rewards. As the day cools, wildlife becomes active again. The changing colors of the sky reflected in the calm water create breathtaking scenes that stay with you long after your visit.</p>

        <h2>Weather and Comfort</h2>
        <p>Sri Lanka's tropical climate means warm temperatures year-round. Morning tours are generally cooler and more comfortable, while afternoon tours benefit from the golden hour light but can be warmer.</p>

        <p>We recommend bringing sun protection regardless of when you visit—a hat, sunscreen, and sunglasses are essential. Light, breathable clothing that can get wet is ideal for kayaking.</p>

        <h2>Our Recommendation</h2>
        <p>For first-time visitors, we suggest the dry season months of January or February, with an early morning tour. You'll experience optimal weather, abundant wildlife, and the serene beauty of dawn on the lake.</p>
      `,
      image: "/images/sunrise-tour/sunrise2.JPG",
      date: "November 15, 2024",
      tags: ["Knowledge"]
    },
    'traditional-fishing-communities-of-rathgama': {
      id: 4,
      title: "Traditional Fishing Communities of Rathgama",
      content: `
        <p>The story of Rathgama Lake is deeply intertwined with the lives of local fishing families who have depended on these waters for generations. Their traditional knowledge and sustainable practices offer valuable lessons in living harmoniously with nature.</p>

        <h2>Heritage and Tradition</h2>
        <p>Fishing at Rathgama Lake dates back centuries, with techniques and knowledge passed down through families. Traditional fishing methods like cast netting and line fishing continue to be practiced, adapted over time to maintain fish populations while supporting livelihoods.</p>

        <p>These communities possess intimate knowledge of the lake's rhythms—they know when fish spawn, where they feed, and how the tides and seasons affect their movements. This wisdom comes from generations of careful observation and respect for the ecosystem.</p>

        <h2>Sustainable Practices</h2>
        <p>Local fishers have long understood the importance of sustainable harvesting. They follow seasonal patterns, avoid overfishing breeding grounds, and use selective gear that minimizes bycatch. These practices, developed over centuries, align closely with modern conservation principles.</p>

        <p>The brackish nature of Rathgama Lake supports species like mullet, prawns, and crabs, which thrive in the mix of freshwater and saltwater. Fishers have learned to work with this unique environment rather than against it.</p>

        <h2>Community Life</h2>
        <p>Fishing is more than an occupation here—it's a way of life that shapes community identity and culture. Early morning markets buzz with activity as the night's catch is sold, and evenings see families mending nets and preparing for the next day.</p>

        <p>When you visit Rathgama Lake with Aqua Trek, you're not just touring a beautiful natural area—you're connecting with a living culture that has maintained its traditions while adapting to modern times.</p>

        <h2>Supporting Local Communities</h2>
        <p>We work closely with local fishing families, ensuring that tourism benefits the community while respecting their way of life. Our guides often come from these families, sharing their knowledge and providing additional income that helps sustain traditional practices.</p>
      `,
      image: "/images/others/local-fisherman.JPG",
      date: "November 10, 2024",
      tags: ["Culture", "Knowledge"]
    },
    'island-hermitage-a-spiritual-sanctuary': {
      id: 5,
      title: "Island Hermitage: A Spiritual Sanctuary",
      content: `
        <p>Among Rathgama Lake's peaceful islands lies a place of profound spiritual significance—the Island Hermitage, founded in 1911 by German-born Buddhist monk Ven. Nyanatiloka Mahathera. For over a century, this secluded monastery has served as a sanctuary for meditation and Buddhist practice.</p>

        <h2>Historical Background</h2>
        <p>The Island Hermitage represents an important chapter in Buddhist history, particularly in the revival of Theravada Buddhism and its spread to the West. Ven. Nyanatiloka was among the first Europeans to ordain as a Buddhist monk, and he chose this remote island for its tranquility and natural beauty.</p>

        <p>The hermitage attracted monks and scholars from around the world, becoming a center for Buddhist studies and practice. Many Western monks who later played significant roles in spreading Buddhism internationally spent time here in training and meditation.</p>

        <h2>Life on the Island</h2>
        <p>The island's isolation creates ideal conditions for intensive meditation practice. Monks live simply, following the traditional Vinaya rules, waking before dawn for meditation, studying Buddhist texts, and maintaining the grounds.</p>

        <p>The only sounds breaking the silence are bird calls, rustling leaves, and the gentle lap of water against the shore. This atmosphere of peace has been carefully preserved, making the hermitage a unique spiritual refuge in Sri Lanka.</p>

        <h2>Visiting the Hermitage</h2>
        <p>While the Island Hermitage is primarily a monastic residence, it welcomes respectful visitors during certain hours. Those interested in Buddhism, meditation, or simply experiencing the profound peace of this sacred place can arrange visits through proper channels.</p>

        <p>When paddling past the island during our tours, we maintain a respectful distance and speak quietly, honoring the monks' practice. The sight of the simple buildings among the trees, with their white walls glimpsed through greenery, adds a contemplative dimension to the natural beauty of the lake.</p>

        <h2>A Living Tradition</h2>
        <p>The Island Hermitage continues its mission today, carrying forward the vision of its founder. It stands as a testament to the possibility of preserving spiritual traditions while coexisting harmoniously with the natural environment and local community.</p>
      `,
      image: "/images/others/island-hermitage.JPG",
      date: "November 5, 2024",
      tags: ["Culture", "Knowledge"]
    },
    'wildlife-encounters-beyond-the-birds': {
      id: 6,
      title: "Wildlife Encounters: Beyond the Birds",
      content: `
        <p>While Rathgama Lake is renowned for its birdlife, the ecosystem supports a fascinating array of other creatures. From the water's depths to the mangrove canopy, diverse wildlife calls this brackish lagoon home.</p>

        <h2>Aquatic Life</h2>
        <p>The lake's unique brackish environment—where freshwater meets saltwater—creates perfect conditions for various fish species. Mullet school in large numbers, their silvery bodies flashing beneath the surface. Prawns hide among mangrove roots, while crabs scuttle along muddy banks.</p>

        <p>Look carefully, and you might spot mudskippers—amphibious fish that "walk" on their fins across exposed mudflats at low tide. These remarkable creatures have adapted to life in both water and air, demonstrating evolution's creativity.</p>

        <h2>Reptiles and Amphibians</h2>
        <p>Monitor lizards are among the lake's most impressive residents. These large reptiles can grow over a meter long and are often seen basking on branches or swimming with surprising grace. Despite their prehistoric appearance, they're generally shy and will slip into the water if approached.</p>

        <p>Water snakes glide through the shallows, hunting for fish and frogs. Most are harmless, playing important roles in the ecosystem's balance. Our guides can help identify species and share interesting facts about their behaviors.</p>

        <h2>Small Mammals</h2>
        <p>Though less commonly seen, small mammals inhabit the areas around the lake. Fishing cats, rare and specialized felines that swim and hunt fish, have been recorded in the region, though sightings are exceptional.</p>

        <p>More frequently spotted are various species of bats emerging at dusk to feed on insects above the water. Their acrobatic flight patterns create mesmerizing displays against the evening sky.</p>

        <h2>Invertebrate Diversity</h2>
        <p>The real biodiversity lies in creatures often overlooked. Countless species of crustaceans, mollusks, and insects form the foundation of the food web. Colorful dragonflies patrol the water's edge, while butterflies visit flowering mangroves.</p>

        <p>During our tours, we encourage guests to observe these smaller inhabitants—they're often the most fascinating once you start paying attention. Each plays a crucial role in maintaining the ecosystem's health.</p>

        <h2>Responsible Wildlife Watching</h2>
        <p>At Aqua Trek, we practice and promote responsible wildlife observation. We maintain respectful distances, never feed or disturb animals, and teach guests to be patient observers. The most rewarding encounters come when wildlife goes about its natural behaviors, unaffected by our presence.</p>
      `,
      image: "/images/sunrise-tour/watermonitor1.JPG",
      date: "October 30, 2024",
      tags: ["Nature", "Wildlife"]
    }
  };

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

  const post = slug ? blogPosts[slug] : null;

  // Generate structured data for article
  const getArticleStructuredData = () => {
    if (!post) return {};
    
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": `https://aquatrekhikkaduwa.com${post.image}`,
      "datePublished": new Date(post.date).toISOString(),
      "author": {
        "@type": "Organization",
        "name": "AquaTrek Hikkaduwa"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AquaTrek Hikkaduwa",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aquatrekhikkaduwa.com/logo.png"
        }
      },
      "keywords": post.tags.join(", ")
    };
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 
            className="text-4xl font-bold text-brand-navy mb-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Blog Post Not Found
          </h1>
          <a 
            href="/blog" 
            className="text-primary hover:text-primary-hover"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Return to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-bg">
      <SEO
        title={post.title}
        description={post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...'}
        keywords={post.tags.join(', ') + ', Rathgama Lake, Hikkaduwa, kayaking blog'}
        canonical={`https://aquatrekhikkaduwa.com/blog/${slug}`}
        ogType="article"
        ogImage={`https://aquatrekhikkaduwa.com${post.image}`}
        article={{
          publishedTime: new Date(post.date).toISOString(),
          tags: post.tags,
          author: "AquaTrek Hikkaduwa"
        }}
        structuredData={getArticleStructuredData()}
      />
      {/* Hero Image Section with Title Overlay at Bottom */}
      <div className="w-full h-screen relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Title, Date, and Tags at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-primary transition-colors mb-4"
              style={{ fontFamily: '"Asap", Sans-serif' }}
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Back</span>
            </button>

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
            <h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              {post.title}
            </h1>

            {/* Date */}
            <p 
              className="text-white text-sm md:text-base"
              style={{ fontFamily: '"Asap", Sans-serif' }}
            >
              {post.date}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section with Primary-bg Sides */}
      <div className="w-full bg-primary-bg py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-white px-8 md:px-16 py-12">
          <div 
            className="prose prose-lg max-w-none"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="blog-content"
            />
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

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogArticle;
