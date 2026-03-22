# AquaTrek — Implementation Plan

> Migrating from React 19 + Vite SPA (GitHub Pages) to Next.js 15 App Router (Vercel).
> Phases 1–6 are **complete**. Phase 7 is pending.

---

## Legend

- ✅ Complete
- 🚧 Placeholder / scaffold only
- ⬜ Not started

---

## Phase 1 — Next.js Scaffolding ✅

| Task | File | Status |
|---|---|---|
| Rewrite `package.json` (Next.js scripts + deps, remove Vite/Router) | `package.json` | ✅ |
| Create `next.config.ts` | `next.config.ts` | ✅ |
| Rewrite `tsconfig.json` for Next.js App Router | `tsconfig.json` | ✅ |
| Create `tailwind.config.ts` (same color tokens, new content paths) | `tailwind.config.ts` | ✅ |
| Create `app/globals.css` (Tailwind directives + Gilroy @font-face) | `app/globals.css` | ✅ |
| Create `app/layout.tsx` (Navbar, Footer, GA, fonts, ScrollToTop, WhatsApp) | `app/layout.tsx` | ✅ |
| Create `.env.local` with all env var stubs | `.env.local` | ✅ |
| Delete old Vite files (`src/`, `vite.config.ts`, `index.html`, `tailwind.config.js`) | — | ✅ |

---

## Phase 2 — UI Migration ✅

### New Utility Components

| Component | File | Status |
|---|---|---|
| Floating WhatsApp button (fixed bottom-right) | `components/WhatsAppButton.tsx` | ✅ |
| Google Analytics (next/script, afterInteractive) | `components/GoogleAnalytics.tsx` | ✅ |

### Migrated Components

| Component | File | Notes | Status |
|---|---|---|---|
| Navbar | `components/Navbar.tsx` | `'use client'`, next/link, next/image logo | ✅ |
| Footer | `components/Footer.tsx` | Server, next/link, JSON-LD via dangerouslySetInnerHTML | ✅ |
| HeroSection | `components/HeroSection.tsx` | `'use client'`, carousel, `new window.Image()` preload | ✅ |
| ToursSection | `components/ToursSection.tsx` | `'use client'`, next/link, next/image | ✅ |
| FeaturesSection | `components/FeaturesSection.tsx` | Server component | ✅ |
| PricingSection | `components/PricingSection.tsx` | Server component | ✅ |
| TourDetailsSection | `components/TourDetailsSection.tsx` | Server component, next/image | ✅ |
| ServiceGuaranteeSection | `components/ServiceGuaranteeSection.tsx` | Server component, next/image | ✅ |
| ReviewsSection | `components/ReviewsSection.tsx` | `'use client'`, next/script for Elfsight | ✅ |
| FAQSection | `components/FAQSection.tsx` | `'use client'`, self-contained state (no props) | ✅ |
| ScrollToTop | `components/ScrollToTop.tsx` | `'use client'`, bottom-24 right-8 | ✅ |
| WaveDivider | `components/WaveDivider.tsx` | Server, pure SVG | ✅ |
| ContactForm | `components/ContactForm.tsx` | `'use client'`, form state (API wired in Phase 4) | ✅ |
| TourDetailsClient | `components/TourDetailsClient.tsx` | `'use client'`, tour data, carousel, useRouter | ✅ |
| BlogArticleClient | `components/BlogArticleClient.tsx` | `'use client'`, blog data, useRouter | ✅ |
| CelebrationPackageClient | `components/CelebrationPackageClient.tsx` | `'use client'`, useRouter | ✅ |

### Migrated Pages

| Page | File | Status |
|---|---|---|
| Home | `app/page.tsx` | ✅ |
| About Us | `app/about/page.tsx` | ✅ |
| Contact Us | `app/contact/page.tsx` | ✅ |
| Blog listing | `app/blog/page.tsx` | ✅ |
| Blog article | `app/blog/[slug]/page.tsx` | ✅ |
| Tour details | `app/tour/[tourId]/page.tsx` | ✅ |
| Celebration package | `app/celebration/page.tsx` | ✅ |
| Amenities & Tips | `app/amenities/page.tsx` | ✅ |
| Future Vision | `app/vision/page.tsx` | ✅ |
| Booking (placeholder) | `app/booking/page.tsx` | 🚧 |
| Manager login (placeholder) | `app/manager/login/page.tsx` | 🚧 |
| Manager layout (pass-through) | `app/manager/layout.tsx` | 🚧 |
| 404 page | `app/not-found.tsx` | ✅ |
| Sitemap | `app/sitemap.ts` | ✅ |
| Robots | `app/robots.ts` | ✅ |

### Pending: `npm install`

Node/npm is not available in the current shell environment. Run this manually:

```bash
npm install
npm run dev
```

---

## Phase 3 — Blog (MDX) ✅

| Task | File | Status |
|---|---|---|
| Create `lib/blog.ts` — `getAllPosts()`, `getPostBySlug()` | `lib/blog.ts` | ✅ |
| Set up next-mdx-remote in blog article page | `app/blog/[slug]/page.tsx` | ✅ |
| Migrate 6 static blog posts to MDX files with frontmatter | `content/blog/*.mdx` | ✅ |
| Update blog listing page to use `getAllPosts()` with ISR | `app/blog/page.tsx` | ✅ |
| Update `app/sitemap.ts` to include blog slugs | `app/sitemap.ts` | ✅ |

**MDX post slugs to create:**
- `discovering-the-mangrove-ecosystem`
- `bird-watching-guide-rathgamas-feathered-friends`
- `the-best-time-to-visit-rathgama-lake`
- `traditional-fishing-communities-of-rathgama`
- `island-hermitage-a-spiritual-sanctuary`
- `wildlife-encounters-beyond-the-birds`

---

## Phase 4 — Contact Form API ✅

| Task | File | Status |
|---|---|---|
| Create `/api/contact/route.ts` — POST → Resend email | `app/api/contact/route.ts` | ✅ |
| Wire `ContactForm.tsx` submit to `/api/contact` | `components/ContactForm.tsx` | ✅ |
| Add loading state + success/error feedback to contact form | `components/ContactForm.tsx` | ✅ |

---

## Phase 5 — Booking System ✅

### Database

| Task | Status |
|---|---|
| Create Supabase project | ✅ |
| Run `bookings` table SQL migration | ✅ |
| Configure Row Level Security (INSERT public, full access authenticated) | ✅ |

### Booking Form & API

| Task | File | Status |
|---|---|---|
| Build full public booking form | `app/booking/page.tsx` | ✅ |
| Create `/api/booking/route.ts` (validate → insert → notify) | `app/api/booking/route.ts` | ✅ |
| Email confirmation template (Resend) | `app/api/booking/route.ts` | ✅ |
| WhatsApp confirmation template (Twilio) | `app/api/booking/route.ts` | ✅ |
| Manager new-booking alert email (Resend) | `app/api/booking/route.ts` | ✅ |

**Booking form fields:** Name, Email or WhatsApp, Tour Type, Date, Group Size, Special Requests, Terms checkbox
**Pricing:** Rs 1,000 (1hr standard) / Rs 3,000 (3hr sunset/sunrise) / Rs 1,500 (guide add-on) / Celebration = quote

---

## Phase 6 — Manager Portal ✅

### Auth

| Task | File | Status |
|---|---|---|
| Configure NextAuth.js v5 credentials provider | `auth.ts` | ✅ |
| Create `middleware.ts` — protect `/manager/*` except `/manager/login` | `middleware.ts` | ✅ |
| Build manager login form with error handling | `app/manager/login/page.tsx` | ✅ |
| Update manager layout with sidebar nav + auth guard | `app/manager/layout.tsx` | ✅ |

### Manager Pages

| Page | File | Status |
|---|---|---|
| Dashboard — stats cards + recent bookings | `app/manager/dashboard/page.tsx` | ✅ |
| Bookings — calendar view (react-big-calendar) | `app/manager/bookings/page.tsx` | ✅ |
| Bookings — list/table view + filters | `app/manager/bookings/page.tsx` | ✅ |
| Finance — income table + expense CRUD + charts (recharts) | `app/manager/finance/page.tsx` | ✅ |

### Manager API Routes

| Route | File | Status |
|---|---|---|
| `GET/POST /api/manager/bookings` | `app/api/manager/bookings/route.ts` | ✅ |
| `PUT/DELETE /api/manager/bookings/[id]` | `app/api/manager/bookings/[id]/route.ts` | ✅ |
| `GET/POST /api/manager/expenses` | `app/api/manager/expenses/route.ts` | ✅ |
| `PUT/DELETE /api/manager/expenses/[id]` | `app/api/manager/expenses/[id]/route.ts` | ✅ |

### Notifications on Status Change

| Trigger | Method | Status |
|---|---|---|
| Booking confirmed → customer confirmation | Resend / Twilio | ✅ |
| Booking cancelled → customer notice | Resend / Twilio | ✅ |

---

## Phase 7 — Polish + Deploy ⬜

| Task | Status |
|---|---|
| `npm install` and `npm run dev` — verify all routes render | ⬜ |
| Lighthouse audit — target 90+ on all public pages | ⬜ |
| Set all env vars in Vercel dashboard | ⬜ |
| Deploy to Vercel, update DNS from GitHub Pages to Vercel | ⬜ |
| Verify `/sitemap.xml` and `/robots.txt` accessible | ⬜ |
| Smoke test all forms (contact, booking) in production | ⬜ |
| Verify GA events firing | ⬜ |

---

## Database Schema Reference

### `bookings`
```sql
id               uuid PRIMARY KEY DEFAULT gen_random_uuid()
created_at       timestamptz DEFAULT now()
name             text NOT NULL
contact_value    text NOT NULL   -- email or WhatsApp number
contact_type     text NOT NULL   -- 'email' | 'whatsapp'
tour_type        text NOT NULL   -- 'sunset-banyan-tree' | 'sunrise-wildlife' | 'celebration'
tour_date        date NOT NULL
group_size       int NOT NULL
special_requests text
status           text DEFAULT 'pending'  -- 'pending' | 'confirmed' | 'cancelled'
total_amount     numeric
notes            text
```

### `expenses`
```sql
id          uuid PRIMARY KEY DEFAULT gen_random_uuid()
created_at  timestamptz DEFAULT now()
date        date NOT NULL
category    text NOT NULL  -- 'equipment' | 'fuel' | 'staff' | 'marketing' | 'maintenance' | 'other'
amount      numeric NOT NULL
note        text
```

---

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=https://aquatrekhikkaduwa.com
MANAGER_EMAIL=
MANAGER_PASSWORD_HASH=
RESEND_API_KEY=
RESEND_FROM_EMAIL=bookings@aquatrekhikkaduwa.com
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_WHATSAPP_FROM=whatsapp:+94773366171
NEXT_PUBLIC_GA_ID=AW-17649202233
NEXT_PUBLIC_SITE_URL=https://aquatrekhikkaduwa.com
```
