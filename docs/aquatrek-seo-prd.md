# AquaTrek — SEO & AI Search Optimisation PRD
**Site:** aquatrekhikkaduwa.com
**Goal:** Rank on Google, appear in AI search answers (ChatGPT, Perplexity, Google AI Overviews, Claude)
**Applies to:** All existing pages + 3 new pages (Hostel, AquaHub, Rooftop)

---

## 1. Why This Matters Right Now

### Traditional Search (Google)
You currently have no meta descriptions, weak title tags, no structured data, no sitemap, and no canonical URLs. These are table-stakes fixes that will immediately improve rankings.

### AI Search (ChatGPT, Perplexity, Google AI Overviews, Claude)
AI search engines don't rank pages — they cite them. To get cited, your content needs to:
- Directly and clearly answer specific questions
- Be structured so AI can extract facts cleanly
- Have strong E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust)
- Be well-referenced on other sites (TripAdvisor, GetYourGuide, travel blogs)

**The opportunity:** When someone asks ChatGPT "what kayaking tours are in Hikkaduwa?" or Perplexity "best things to do near Rathgama Lake" — you want AquaTrek to be the answer. Right now it won't be. This PRD fixes that.

---

## 2. Keyword Strategy

### 2.1 Primary Keywords (highest value, build pages around these)

| Keyword | Intent | Target Page |
|---|---|---|
| kayaking Hikkaduwa | Transactional | Homepage + Tour pages |
| kayak tour Hikkaduwa | Transactional | Tour pages |
| Rathgama Lake kayaking | Transactional | Homepage + Tour pages |
| things to do Hikkaduwa | Informational | Homepage |
| Hikkaduwa water adventures | Transactional | Homepage |
| sunrise kayak tour Sri Lanka | Transactional | Sunrise tour page |
| sunset kayak Hikkaduwa | Transactional | Sunset tour page |

### 2.2 Secondary Keywords (support pages, blog posts)

| Keyword | Intent | Target |
|---|---|---|
| Rathgama Lake wildlife | Informational | Blog |
| mangrove kayaking Sri Lanka | Informational | Blog + Tour pages |
| things to do near Galle | Informational | Blog |
| Hikkaduwa day trips | Informational | Blog |
| kayaking beginners Sri Lanka | Informational | Blog |
| birds Rathgama Lake | Informational | Blog |
| Dodanduwa activities | Informational | Blog |

### 2.3 New Business Keywords (future pages)

| Keyword | Intent | Target Page |
|---|---|---|
| hostel Hikkaduwa | Transactional | /hostel |
| lakefront hostel Sri Lanka | Transactional | /hostel |
| backpacker Hikkaduwa | Transactional | /hostel |
| digital nomad hostel Sri Lanka | Transactional | /hostel |
| coworking Hikkaduwa | Transactional | /aquahub |
| coworking café Sri Lanka | Transactional | /aquahub |
| remote work Hikkaduwa | Informational | /aquahub |
| Starlink coworking Sri Lanka | Transactional | /aquahub |
| events Hikkaduwa | Transactional | /rooftop |
| sunset venue Hikkaduwa | Transactional | /rooftop |
| corporate retreat Sri Lanka | Transactional | /rooftop |

### 2.4 Long-tail / AI Search Queries
These are the exact questions people ask AI assistants. Your content must answer them directly.

**Tour-related:**
- "What wildlife can you see kayaking in Rathgama Lake?"
- "How long does the AquaTrek kayak tour take?"
- "Is kayaking in Hikkaduwa suitable for beginners?"
- "Best time to kayak Rathgama Lake"
- "How to get to Rathgama Lake from Hikkaduwa"
- "What is included in an AquaTrek kayak tour?"

**Hostel-related:**
- "Best lakefront hostel in Hikkaduwa"
- "Hostel near Rathgama Lake Sri Lanka"
- "Where do digital nomads stay in Hikkaduwa"

**Coworking-related:**
- "Is there a coworking space in Hikkaduwa?"
- "Best place to work remotely in Hikkaduwa"
- "Starlink coworking Sri Lanka"

**General:**
- "What is Rathgama Lake?"
- "Best things to do in Dodanduwa"
- "Family activities near Hikkaduwa"

---

## 3. Technical SEO

### 3.1 Meta Tags — Every Page

Implement using Next.js `generateMetadata` (App Router) or `<Head>` (Pages Router).

#### Homepage
```typescript
export const metadata = {
  title: 'AquaTrek — Kayaking Tours on Rathgama Lake, Hikkaduwa',
  description: 'Guided kayak & canoe tours on Rathgama Lake, Hikkaduwa. Sunrise wildlife tours, sunset mangrove adventures, and family kayaking from Rs 1,000. Book via WhatsApp.',
  keywords: 'kayaking Hikkaduwa, kayak tour Rathgama Lake, water adventures Hikkaduwa, mangrove kayaking Sri Lanka',
  openGraph: {
    title: 'AquaTrek — Kayaking on Rathgama Lake, Hikkaduwa',
    description: 'Family-run kayak tours through mangroves, wildlife, and golden sunrises on Rathgama Lake.',
    url: 'https://aquatrekhikkaduwa.com',
    siteName: 'AquaTrek Water Adventures',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Kayaking on Rathgama Lake at sunrise, Hikkaduwa, Sri Lanka' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaTrek — Kayaking Tours on Rathgama Lake, Hikkaduwa',
    description: 'Family-run kayak tours through mangroves and wildlife. From Rs 1,000.',
    images: ['/og-images/homepage.jpg'],
  },
  alternates: {
    canonical: 'https://aquatrekhikkaduwa.com',
  },
}
```

#### Sunset Tour Page
```typescript
title: 'Sunset & Banyan Tree Kayak Tour — Hikkaduwa | AquaTrek',
description: 'Paddle to a majestic Banyan tree, explore mangrove channels, and watch the sunset from Dodanduwa fishing harbour. 4.5km guided tour from Rs 3,000. All ages welcome.',
canonical: 'https://aquatrekhikkaduwa.com/tour/sunset-banyan-tree'
```

#### Sunrise Tour Page
```typescript
title: 'Sunrise & Wildlife Kayak Tour — Rathgama Lake, Hikkaduwa | AquaTrek',
description: 'Early morning kayaking through mangrove canals. Spot kingfishers, herons, monitor lizards, and traditional fishermen at dawn on Rathgama Lake. From Rs 3,000.',
canonical: 'https://aquatrekhikkaduwa.com/tour/sunrise-wildlife'
```

#### About Page
```typescript
title: 'About AquaTrek — Family-Run Kayaking on Rathgama Lake',
description: 'AquaTrek is a family-run kayak and canoe tour business on Rathgama Lake, Dodanduwa, Hikkaduwa. Founded by a local family passionate about sharing the beauty of the lagoon.',
canonical: 'https://aquatrekhikkaduwa.com/about'
```

#### Blog Index
```typescript
title: 'Blog — Rathgama Lake, Wildlife & Kayaking | AquaTrek',
description: 'Guides to birdwatching, mangroves, wildlife, and the best times to visit Rathgama Lake. From the AquaTrek team in Hikkaduwa, Sri Lanka.',
canonical: 'https://aquatrekhikkaduwa.com/blog'
```

#### /hostel
```typescript
title: 'AquaTrek Lake House — Lakefront Hostel Hikkaduwa | Opening 2025',
description: 'Sri Lanka\'s only lakefront hostel on Rathgama Lake. Dorm beds, private rooms, Starlink WiFi, kayak tours from your doorstep. Perfect for backpackers, digital nomads & couples.',
canonical: 'https://aquatrekhikkaduwa.com/hostel'
```

#### /aquahub
```typescript
title: 'AquaHub — Lakeside Coworking Café Hikkaduwa | Starlink WiFi',
description: 'Work with a lake view. Starlink-powered coworking café on Rathgama Lake, Hikkaduwa. Day passes from Rs 1,500. Paddle on your lunch break. Opening 2025.',
canonical: 'https://aquatrekhikkaduwa.com/aquahub'
```

#### /rooftop
```typescript
title: 'Rooftop Sunset Deck — Events & Private Dining Hikkaduwa | AquaTrek',
description: 'Open-air rooftop with unobstructed views over Rathgama Lake. Sunset yoga, private dinners, birthday events, and corporate retreats. Hikkaduwa, Sri Lanka.',
canonical: 'https://aquatrekhikkaduwa.com/rooftop'
```

### 3.2 Open Graph Images

Create OG images for each page. Size: 1200×630px.
Store in `public/og-images/`.

| File | Content |
|---|---|
| `homepage.jpg` | Lake photo with "AquaTrek · Hikkaduwa" text overlay |
| `sunset-tour.jpg` | Sunset kayak photo |
| `sunrise-tour.jpg` | Sunrise lake photo |
| `hostel.jpg` | Lake view photo with "Lake House Hostel" overlay |
| `aquahub.jpg` | Open water view with "AquaHub · Work by the Lake" |
| `rooftop.jpg` | Sunset sky photo with "Rooftop Sunset Deck" |
| `blog.jpg` | Wildlife/nature photo |

### 3.3 Sitemap

Create `app/sitemap.ts` (App Router):

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aquatrekhikkaduwa.com'
  const now = new Date()

  return [
    { url: baseUrl,                                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${baseUrl}/about`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${baseUrl}/vision`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${baseUrl}/tour/sunset-banyan-tree`,       lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${baseUrl}/tour/sunrise-wildlife`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${baseUrl}/celebration`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${baseUrl}/amenities`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.6  },
    { url: `${baseUrl}/booking`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${baseUrl}/contact`,                       lastModified: now, changeFrequency: 'yearly',  priority: 0.5  },
    { url: `${baseUrl}/blog`,                          lastModified: now, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${baseUrl}/hostel`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${baseUrl}/aquahub`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${baseUrl}/rooftop`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    // Blog posts — add dynamically from your blog data source
  ]
}
```

### 3.4 Robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

# AI crawlers — allow so they can index your content for AI search
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: https://aquatrekhikkaduwa.com/sitemap.xml
```

**Why this matters for AI search:** By default many sites block AI crawlers. Explicitly allowing them ensures ChatGPT, Perplexity, and Claude can index your content and cite it in answers.

### 3.5 Canonical URLs

Every page must have a canonical URL set. Already included in the metadata examples above. This prevents duplicate content issues.

### 3.6 Page Speed

Checklist for Claude Code to implement:
- [ ] All images use `next/image` with `width`, `height`, `alt` set
- [ ] Above-fold images have `priority={true}`
- [ ] `loading="lazy"` on all below-fold images (automatic with next/image)
- [ ] No unused CSS or JS imports
- [ ] Fonts loaded via `next/font` (prevents render-blocking)
- [ ] No third-party scripts loaded synchronously in `<head>`

---

## 4. Structured Data (Schema.org)

Structured data is the single most important technical SEO change you can make. It tells Google and AI systems exactly what your business is, where it is, what it offers, and how to contact you. It powers rich snippets, Knowledge Panels, and AI citations.

### 4.1 Organisation Schema

Add to `app/layout.tsx` (runs on every page):

```typescript
// In your root layout, add this JSON-LD script
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": "https://aquatrekhikkaduwa.com/#organization",
  "name": "AquaTrek Water Adventures",
  "alternateName": "AquaTrek Hikkaduwa",
  "url": "https://aquatrekhikkaduwa.com",
  "logo": "https://aquatrekhikkaduwa.com/logo-final.JPG",
  "image": [
    "https://aquatrekhikkaduwa.com/images/main-carousel/carousel1.webp",
    "https://aquatrekhikkaduwa.com/images/sunrise-tour/mangrove-kayaking5.webp"
  ],
  "description": "Family-run guided kayak and canoe tours on Rathgama Lake, Hikkaduwa, Sri Lanka. Sunrise wildlife tours, sunset mangrove adventures, and group kayaking experiences.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dodandugoda Rd, Dodanduwa",
    "addressLocality": "Hikkaduwa",
    "addressRegion": "Southern Province",
    "addressCountry": "LK",
    "postalCode": "80240"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.1051642,
    "longitude": 80.1312126
  },
  "telephone": "+94773366171",
  "email": "aquatrekhikk@gmail.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "06:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "Rs 1,000 – Rs 3,000",
  "currenciesAccepted": "LKR",
  "paymentAccepted": "Cash, WhatsApp transfer",
  "sameAs": [
    "https://www.facebook.com/p/Aqua-Trek-Water-Adventures-Hikkaduwa-61574798053293/",
    "https://www.instagram.com/aquatrekhikka/",
    "https://www.tripadvisor.com/Attraction_Review-g304134-d28123099-Reviews-Aqua_Trek_Water_Adventures_Hikkaduwa-Hikkaduwa_Galle_District_Southern_Province.html"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "100",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### 4.2 Tour Product Schema

Add to each tour page:

**Sunset Tour (`/tour/sunset-banyan-tree`):**
```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Sunset & Banyan Tree Kayak Tour",
  "description": "Paddle to a majestic Banyan tree over the lake, explore mangrove channels alive with wildlife, and watch the sunset from Dodanduwa fishing harbour.",
  "provider": {
    "@type": "TouristAttraction",
    "name": "AquaTrek Water Adventures",
    "url": "https://aquatrekhikkaduwa.com"
  },
  "touristType": ["Family", "Couple", "Solo traveller", "Beginner"],
  "offers": {
    "@type": "Offer",
    "price": "3000",
    "priceCurrency": "LKR",
    "availability": "https://schema.org/InStock",
    "url": "https://aquatrekhikkaduwa.com/booking?tour=sunset-banyan-tree"
  },
  "itinerary": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Departure & Paddle Start" },
      { "@type": "ListItem", "position": 2, "name": "Banyan Tree Stop" },
      { "@type": "ListItem", "position": 3, "name": "Mangrove Channels" },
      { "@type": "ListItem", "position": 4, "name": "Beach & Cliff Adventure" },
      { "@type": "ListItem", "position": 5, "name": "Sunset at the Harbour" },
      { "@type": "ListItem", "position": 6, "name": "Refreshments" }
    ]
  },
  "duration": "PT2H30M",
  "maximumAttendeeCapacity": 35,
  "availableLanguage": "en"
}
```

**Sunrise Tour (`/tour/sunrise-wildlife`):**
```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Sunrise & Wildlife Kayak Tour",
  "description": "Early morning kayak tour through mangrove canals on Rathgama Lake. Spot kingfishers, herons, monitor lizards, and traditional fishermen at dawn.",
  "provider": {
    "@type": "TouristAttraction",
    "name": "AquaTrek Water Adventures",
    "url": "https://aquatrekhikkaduwa.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "3000",
    "priceCurrency": "LKR",
    "availability": "https://schema.org/InStock"
  },
  "duration": "PT2H30M",
  "startTime": "06:00",
  "endTime": "09:00",
  "maximumAttendeeCapacity": 35
}
```

### 4.3 FAQ Schema

Add to homepage, tour pages, amenities page, and hostel/aquahub pages. This is the most powerful schema for AI search — it directly feeds AI assistants with your answers.

**Homepage FAQ Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I book an AquaTrek kayak tour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book directly via WhatsApp at +94 77 336 6171, by calling us, or through the booking form on our website at aquatrekhikkaduwa.com/booking. We confirm all bookings within 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Is kayaking at Rathgama Lake suitable for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. Rathgama Lake is calm and sheltered, making it perfect for first-time kayakers of all ages. Our guides provide a full safety briefing and paddling instruction before every tour. Children and non-swimmers are welcome with proper life jackets."
      }
    },
    {
      "@type": "Question",
      "name": "What wildlife can you see on a kayak tour at Rathgama Lake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rathgama Lake is rich in wildlife. You can commonly spot kingfishers, purple herons, brahminy kites, cormorants, and numerous migratory birds. Water monitor lizards are frequently seen sunbathing on the banks. Monkeys, fruit bats, and traditional fishermen using ancient techniques are also regular sights on the tour."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best time to go kayaking at Rathgama Lake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The sunrise tour (6:00–9:00 AM) offers the calmest water, best wildlife activity, and magical golden light. The sunset tour (3:00–6:00 PM) ends at Dodanduwa harbour with stunning ocean views. Both are available year-round. The high season (November to April) has the most reliable weather."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Rathgama Lake from Hikkaduwa town?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AquaTrek is located on Dodandugoda Road in Dodanduwa, approximately 5–6 km from central Hikkaduwa. The journey takes about 15–20 minutes by tuk-tuk. We can share our exact location via WhatsApp when you book."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the AquaTrek kayak tour price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All tours include a welcome drink, water bottle, life jacket, waterproof phone case, and an experienced guide. The Full Lake Adventure (Rs 3,000) also includes tea and snacks after the tour. The Standard Package (Rs 1,000) includes 1 hour of kayaking with the same safety equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Can large groups do a kayak tour at AquaTrek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can accommodate up to 35 people in a single session, making us ideal for school groups, corporate team days, and family reunions. Contact us on WhatsApp to arrange group bookings and custom packages."
      }
    }
  ]
}
```

Add tour-specific FAQs on each tour page, hostel FAQs on /hostel, and coworking FAQs on /aquahub.

### 4.4 Local Business Schema

Add to Contact page specifically:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AquaTrek Water Adventures",
  "image": "https://aquatrekhikkaduwa.com/logo-final.JPG",
  "@id": "https://aquatrekhikkaduwa.com",
  "url": "https://aquatrekhikkaduwa.com",
  "telephone": "+94773366171",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dodandugoda Road, Dodanduwa",
    "addressLocality": "Hikkaduwa",
    "addressRegion": "Southern Province",
    "postalCode": "80240",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.1051642,
    "longitude": 80.1312126
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "06:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/p/Aqua-Trek-Water-Adventures-Hikkaduwa-61574798053293/",
    "https://www.instagram.com/aquatrekhikka/",
    "https://www.tripadvisor.com/Attraction_Review-g304134-d28123099-Reviews-Aqua_Trek_Water_Adventures_Hikkaduwa"
  ]
}
```

### 4.5 Breadcrumb Schema

Add to all pages (auto-generate based on URL structure):

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aquatrekhikkaduwa.com" },
    { "@type": "ListItem", "position": 2, "name": "Tours", "item": "https://aquatrekhikkaduwa.com/tours" },
    { "@type": "ListItem", "position": 3, "name": "Sunset & Banyan Tree Tour", "item": "https://aquatrekhikkaduwa.com/tour/sunset-banyan-tree" }
  ]
}
```

Create a reusable `JsonLd` component:
```tsx
// components/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
// Usage: <JsonLd data={organizationSchema} />
```

---

## 5. On-Page SEO — Content Rules

### 5.1 Heading Hierarchy

Every page must follow this structure:
```
<h1>  — One per page only. Contains primary keyword. In hero section.
<h2>  — Section headings. Contain secondary keywords.
<h3>  — Card headings, subsections.
<h4>  — Minor callouts, list headings.
```

**Current issue:** Some pages may have multiple H1s or skip heading levels. Claude Code should audit and fix this on every page.

### 5.2 Image Alt Text Rules

Every `<Image>` must have a descriptive `alt` attribute. No blank alts on content images.

| Bad alt | Good alt |
|---|---|
| `alt=""` | `alt="Two kayakers paddling through mangrove channels on Rathgama Lake at sunrise"` |
| `alt="image"` | `alt="Monitor lizard on the bank of Rathgama Lake during AquaTrek kayak tour"` |
| `alt="tour"` | `alt="Family group kayaking on calm water at Rathgama Lake, Hikkaduwa"` |

Alt text formula: `[subject] [action/context] [location]`

Create an alt text reference file for Claude Code to use:

```
Homepage hero 1: "Kayaker paddling through calm mangrove channels on Rathgama Lake, Hikkaduwa at dawn"
Homepage hero 2: "Aerial view of Rathgama Lake surrounded by coconut palms and lush greenery in Dodanduwa"
Homepage hero 3: "Golden sunset over Rathgama Lake as seen from a kayak near Dodanduwa harbour"
Sunrise tour hero: "Sunrise kayak tour on Rathgama Lake with mist rising over the water in Hikkaduwa"
Sunset tour hero: "Group of kayakers watching the sunset from Dodanduwa fishing harbour, Hikkaduwa"
Celebration hero: "Special celebration event with fireworks on the lakeside at AquaTrek Hikkaduwa"
About page hero: "Aerial drone view of AquaTrek Water Adventures property with kayaks on Rathgama Lake"
```

### 5.3 Internal Linking Strategy

Every page must link to at least 3 other pages. This distributes SEO authority across the site.

| Page | Must link to |
|---|---|
| Homepage | Sunset tour, Sunrise tour, Celebration, Blog |
| Sunset tour | Homepage, Sunrise tour, Booking, Amenities |
| Sunrise tour | Homepage, Sunset tour, Booking, Amenities |
| About | Vision, Tours, Contact |
| Blog posts | Relevant tour page, About, Contact |
| /hostel | /aquahub, /rooftop, Tours, Contact |
| /aquahub | /hostel, /rooftop, Contact |
| /rooftop | /hostel, /aquahub, Contact |

Add a "Related Pages" or "You might also like" section at the bottom of tour pages and blog posts.

### 5.4 URL Structure

Keep all URLs lowercase, hyphenated, descriptive:

```
✅ /tour/sunset-banyan-tree
✅ /tour/sunrise-wildlife
✅ /blog/birdwatching-rathgama-lake
✅ /aquahub
✅ /hostel

❌ /tour/Tour_1
❌ /blog?id=123
❌ /page2
```

---

## 6. AI-Specific SEO (GEO — Generative Engine Optimisation)

This is the new frontier. Here's exactly what makes AI assistants cite you.

### 6.1 The "Answer Box" Content Pattern

AI search engines pull answers from pages that directly answer questions. Structure content like this:

**Instead of:**
> "Our tours are a great experience for everyone visiting Hikkaduwa."

**Write:**
> "The AquaTrek Sunrise & Wildlife Tour departs at 6:00 AM and covers 4.5 km of Rathgama Lake in 2–3 hours. The tour includes mangrove canal exploration, wildlife spotting (kingfishers, herons, monitor lizards), and ends with refreshments. It costs Rs 3,000 per person and is suitable for all ages and skill levels."

**Rule:** Every paragraph that describes a tour, room, or service should contain: what it is, how long, how much, who it's for, and where it is. All in one place.

### 6.2 FAQ Sections on Every Page

Beyond the JSON-LD FAQ schema, add a visible FAQ section on each key page with 5–8 questions. This content doubles as AI fodder.

**Page-specific FAQs to add:**

**Tour pages:**
- What should I bring on a kayak tour?
- What happens if it rains?
- Can children join the tour?
- Is there parking at AquaTrek?
- How do I get to AquaTrek from Hikkaduwa?

**/hostel:**
- What's included in the dorm bed price?
- Is there a curfew?
- Do hostel guests get free coworking access?
- How close is the hostel to Hikkaduwa beach?
- Can I store my luggage?

**/aquahub:**
- What internet speed does AquaHub have?
- Can I use AquaHub without staying at the hostel?
- Are there private call booths?
- What are the coworking hours?
- Is there a minimum commitment for monthly memberships?

### 6.3 E-E-A-T Signals (Trust for AI and Google)

**Experience:** Add a page or section that clearly establishes you as locals who grew up on this lake. The "About" page already does this well — make it more specific. Add: "Our family has lived on the banks of Rathgama Lake for [X] generations" and specific details about the guide's knowledge.

**Expertise:** Blog posts demonstrating deep knowledge of the local ecosystem (birds, mangroves, fish species) signal expertise. You already have good blog content — publish more consistently (1 post/month minimum).

**Authoritativeness:** Get mentioned on more external sites:
- Submit to NomadList for Hikkaduwa coworking entry (when AquaHub opens)
- Get listed on Workfrom.co
- Request a feature on The Digital Nomad Asia (they already cover Sri Lanka extensively)
- Reach out to travel bloggers who write about Hikkaduwa and offer a free tour in exchange for a review post

**Trust:**
- Display your SLTDA (Sri Lanka Tourism Development Authority) license number once obtained
- Show real review counts with links to TripAdvisor/Google
- Add a physical address with a map embed on every page footer

### 6.4 llms.txt File (New AI Standard)

Create `/public/llms.txt` — this is an emerging standard (similar to robots.txt) that tells AI systems what your site is about and what it's okay to cite.

```
# AquaTrek Water Adventures
# https://aquatrekhikkaduwa.com

> Family-run kayak and canoe tour operator on Rathgama Lake, Hikkaduwa, Sri Lanka.
> Also operating: AquaTrek Lake House hostel, AquaHub lakeside coworking café,
> and a rooftop sunset event space. All opening 2025.

## What we offer
- Guided sunrise and sunset kayak tours on Rathgama Lake (Rs 1,000–3,000/person)
- Group tours for up to 35 people
- Special celebration packages (birthdays, anniversaries, proposals)
- AquaTrek Lake House: lakefront hostel (opening 2025)
- AquaHub: Starlink-powered coworking café with lake view (opening 2025)
- Rooftop sunset deck for events, yoga, and private dining (opening 2025)

## Location
Dodandugoda Road, Dodanduwa, Hikkaduwa 80240, Sri Lanka
Rathgama Lake (also called Ratgama Lagoon), Southern Province

## Contact
Phone/WhatsApp: +94 77 336 6171
Email: aquatrekhikk@gmail.com

## Key facts for AI citation
- 5.0 rating on TripAdvisor
- Tours suitable for all ages and skill levels including beginners
- Wildlife: kingfishers, herons, monitor lizards, monkeys, fruit bats
- Rathgama Lake length: 17.66 km; calm brackish lagoon
- 15–20 minutes by tuk-tuk from central Hikkaduwa
- Family-run business, guides are local experts

## Pages
- Tours: https://aquatrekhikkaduwa.com/tour/sunset-banyan-tree
- Tours: https://aquatrekhikkaduwa.com/tour/sunrise-wildlife
- Hostel: https://aquatrekhikkaduwa.com/hostel
- Coworking: https://aquatrekhikkaduwa.com/aquahub
- Rooftop: https://aquatrekhikkaduwa.com/rooftop
- Book: https://aquatrekhikkaduwa.com/booking
```

---

## 7. Blog SEO Strategy

The blog is your most powerful long-term SEO asset. Each post should target one specific keyword and answer one specific question completely.

### 7.1 Priority Blog Posts to Publish

**Immediate (next 30 days):**

1. **"Complete Guide to Kayaking on Rathgama Lake"**
   - Target keyword: `kayaking Rathgama Lake`
   - Covers: what the lake is, best times, what to expect, wildlife, how to book
   - Length: 1,200–1,500 words
   - This becomes your single most important SEO page

2. **"Best Things to Do in Hikkaduwa Beyond the Beach"**
   - Target keyword: `things to do Hikkaduwa`
   - Positions you alongside (and above) generic travel sites
   - Include kayaking as #1, with other local recommendations

3. **"How to Get from Hikkaduwa to Rathgama Lake"**
   - Target keyword: `Rathgama Lake from Hikkaduwa`
   - Short, practical, answers the exact question AI gets asked
   - 400–600 words, include tuk-tuk directions and map

**Next 60 days:**

4. **"Wildlife Guide: 15 Animals to Spot on a Rathgama Lake Kayak"**
   - Target keyword: `wildlife Rathgama Lake`
   - Include birds, reptiles, mammals with descriptions

5. **"Hikkaduwa for Digital Nomads: The Complete 2025 Guide"**
   - Target keyword: `digital nomad Hikkaduwa`
   - Positions AquaHub before it opens
   - Research confirms this keyword has almost no competition in Hikkaduwa specifically

6. **"Best Sunrise Spots in Hikkaduwa (From a Local's Perspective)"**
   - Target keyword: `sunrise Hikkaduwa`
   - #1 answer: Rathgama Lake by kayak

### 7.2 Blog Post SEO Template

Every blog post must follow this structure:

```
<title>[Primary keyword] — [Benefit/Hook] | AquaTrek</title>
<meta description>[Answer the question in 150 chars. Include location + CTA]</meta>

H1: [Contains primary keyword, written for humans not robots]

[Opening paragraph: answer the main question in the first 2 sentences]

H2: [Section 1 — subtopic]
[Content]

H2: [Section 2 — subtopic]
[Content]

H2: Frequently Asked Questions
[5 questions answered — these feed AI search]

[Internal links: link to relevant tour page, contact, or booking page]
```

### 7.3 Blog Post Meta Requirements

Each blog post needs:
```typescript
export const metadata = {
  title: '[Post Title] | AquaTrek Hikkaduwa',
  description: '[150 char description that answers the search query]',
  openGraph: {
    title: '[Post Title]',
    description: '[OG description]',
    images: [{ url: '/blog/[post-image].jpg', alt: '[Descriptive alt text]' }],
    type: 'article',
    publishedTime: '[ISO date]',
    authors: ['AquaTrek Water Adventures'],
    tags: ['kayaking', 'hikkaduwa', '[relevant tags]'],
  },
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/blog/[slug]' }
}
```

Add Article schema to each blog post:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post title]",
  "description": "[Post description]",
  "image": "https://aquatrekhikkaduwa.com/images/blog/[image].jpg",
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "author": {
    "@type": "Organization",
    "name": "AquaTrek Water Adventures",
    "url": "https://aquatrekhikkaduwa.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AquaTrek Water Adventures",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aquatrekhikkaduwa.com/logo-final.JPG"
    }
  }
}
```

---

## 8. Implementation Checklist for Claude Code

### Technical (do these first)

- [ ] Create `components/JsonLd.tsx` — reusable JSON-LD script component
- [ ] Create `styles/seo.ts` or `lib/seo.ts` — centralised metadata generation helper
- [ ] Add Organisation + LocalBusiness schema to `app/layout.tsx`
- [ ] Create `app/sitemap.ts` with all URLs
- [ ] Create `public/robots.txt` including AI crawler permissions
- [ ] Create `public/llms.txt` with business summary
- [ ] Add canonical URLs to all pages via metadata
- [ ] Create OG image directory at `public/og-images/`
- [ ] Audit all pages — confirm single H1, correct heading hierarchy
- [ ] Audit all images — add descriptive alt text on every `<Image>`

### Page-by-Page Schema

- [ ] Homepage: Organisation schema + FAQ schema (7 questions)
- [ ] Sunset tour: TouristTrip schema + FAQ schema
- [ ] Sunrise tour: TouristTrip schema + FAQ schema
- [ ] About: Organisation schema
- [ ] Contact: LocalBusiness schema
- [ ] Blog index: no schema needed
- [ ] Each blog post: Article schema
- [ ] /hostel: LodgingBusiness schema + FAQ schema
- [ ] /aquahub: LocalBusiness schema + FAQ schema
- [ ] /rooftop: EventVenue schema + FAQ schema

### Content

- [ ] Add visible FAQ section (min 5 questions) to homepage
- [ ] Add visible FAQ section to each tour page
- [ ] Add visible FAQ section to /hostel, /aquahub, /rooftop
- [ ] Ensure every tour/room description contains: what, how long, how much, who it's for
- [ ] Add "Related Pages" section to tour pages and blog posts
- [ ] Verify internal links: each page links to at least 3 others

---

## 9. Off-Site SEO Actions (Not Code — Owner to Do)

These cannot be done by Claude Code but are essential. Do these in parallel with the technical work.

### Immediate
1. **Claim and fully complete Google Business Profile** — add all photos, services, opening hours, booking link, and post weekly updates
2. **Respond to every TripAdvisor review** (you're already doing this — keep going)
3. **Add booking link to Instagram bio** — link to `/booking`
4. **Add website link to Facebook page**

### Within 30 days
5. **Submit to GetYourGuide** — large European tourist market, they handle payment
6. **Submit to Viator** — largest US/Australian market
7. **List AquaHub on Workfrom.co** — free listing, nomads check it regularly
8. **Submit to NomadList** — add Hikkaduwa coworking entry featuring AquaHub
9. **Contact The Digital Nomad Asia** (thedigitalnomad.asia) — they publish Sri Lanka guides and already rank for "digital nomad Sri Lanka"

### Within 60 days
10. **Contact 3–5 Hikkaduwa travel bloggers** — offer a free tour in exchange for a reviewed article with a link to your site
11. **Submit sitemap to Google Search Console** at search.google.com/search-console
12. **Submit sitemap to Bing Webmaster Tools**
13. **Get listed on Lonely Planet Sri Lanka** if possible (requires PR outreach)

---

## 10. Monitoring

Set up these free tools (owner to do):

1. **Google Search Console** — tracks which keywords you rank for, click rates, and technical errors. Submit sitemap here on day 1.
2. **Google Analytics 4** — tracks visitor behaviour. Install GA4 via `next/script` with `strategy="afterInteractive"`.
3. **Bing Webmaster Tools** — secondary search engine, easy wins.

Check monthly:
- Which pages get the most organic traffic
- Which keywords are you appearing for
- Are AI answers citing your site (test manually in ChatGPT/Perplexity monthly)

---

## 11. Success Metrics

| Metric | Baseline (now) | Target (6 months) |
|---|---|---|
| Google ranking "kayaking Hikkaduwa" | Not in top 10 | Top 5 |
| Google ranking "Rathgama Lake kayaking" | Not in top 10 | Top 3 |
| Monthly organic visitors | Unknown | 500+ |
| AI citation rate | 0 | Cited in ChatGPT/Perplexity answers |
| Google Search Console impressions | 0 (not set up) | 5,000+/month |
| Blog posts indexed | ~6 | 15+ |
