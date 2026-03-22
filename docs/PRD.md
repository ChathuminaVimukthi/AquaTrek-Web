# PRD: AquaTrek Next.js Migration + Booking System + Manager Portal

## 1. Project Overview

**Business:** AquaTrek Hikkaduwa — family-run kayaking tour operator at Rathgama Lake, Hikkaduwa, Sri Lanka.

**Current site:** React 19 + Vite + TypeScript SPA deployed to GitHub Pages at https://aquatrekhikkaduwa.com

**Migration goal:** React/Vite SPA → Next.js 15 App Router deployed on Vercel

**Three workstreams:**
1. **UI Migration** — identical visual output on Next.js with Metadata API, next/image, next/font
2. **Booking System** — public booking form replacing WhatsApp redirect CTAs
3. **Manager Portal** — calendar-based booking management + income & expense tracking

---

## 2. Tech Stack

| Concern | Target |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Auth | NextAuth.js v5 (credentials provider) |
| Email | Resend (booking confirmations + contact form) |
| WhatsApp | Twilio WhatsApp Business API |
| ORM | Supabase JS client (no extra ORM) |
| Blog | MDX via next-mdx-remote + gray-matter |
| Images | next/image |
| Fonts | next/font/local (Gilroy Light + Extrabold) |
| Analytics | next/script → Google Analytics AW-17649202233 |
| Calendar UI | react-big-calendar |
| Charts | recharts |
| Deployment | Vercel |

---

## 3. App Router File Structure

```
app/
├── layout.tsx                        # Root: Navbar, Footer, GA, fonts
├── page.tsx                          # Home
├── about/page.tsx
├── contact/page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── tour/
│   └── [tourId]/page.tsx
├── celebration/page.tsx
├── amenities/page.tsx
├── vision/page.tsx
├── booking/page.tsx                  # NEW: Public booking form
├── not-found.tsx
├── sitemap.ts
├── robots.ts
│
├── manager/                          # NEW: Manager portal (protected)
│   ├── layout.tsx                    # Auth guard + manager sidebar nav
│   ├── login/page.tsx                # Login form
│   ├── dashboard/page.tsx            # Overview stats
│   ├── bookings/page.tsx             # Calendar + list view
│   └── finance/page.tsx             # Income & expenses
│
└── api/
    ├── contact/route.ts              # Contact form → Resend
    ├── booking/route.ts              # POST: create public booking
    └── manager/
        ├── bookings/route.ts         # GET all, POST new
        ├── bookings/[id]/route.ts    # PUT update, DELETE
        ├── expenses/route.ts         # GET all, POST new
        └── expenses/[id]/route.ts   # PUT update, DELETE
```

---

## 4. Database Schema (Supabase PostgreSQL)

### `bookings` table

```sql
id               uuid PRIMARY KEY DEFAULT gen_random_uuid()
created_at       timestamptz DEFAULT now()
name             text NOT NULL
contact_value    text NOT NULL        -- email address OR WhatsApp phone number
contact_type     text NOT NULL        -- 'email' | 'whatsapp'
tour_type        text NOT NULL        -- 'sunset-banyan-tree' | 'sunrise-wildlife' | 'celebration'
tour_date        date NOT NULL
group_size       int NOT NULL
special_requests text
status           text DEFAULT 'pending'  -- 'pending' | 'confirmed' | 'cancelled'
total_amount     numeric              -- calculated: group_size × tour price
notes            text                 -- manager-only internal notes
```

### `expenses` table

```sql
id          uuid PRIMARY KEY DEFAULT gen_random_uuid()
created_at  timestamptz DEFAULT now()
date        date NOT NULL
category    text NOT NULL  -- 'equipment' | 'fuel' | 'staff' | 'marketing' | 'maintenance' | 'other'
amount      numeric NOT NULL  -- LKR
note        text
```

### Row Level Security

| Table | Public | Authenticated (manager) |
|---|---|---|
| `bookings` | INSERT only | SELECT, UPDATE, DELETE |
| `expenses` | — | SELECT, INSERT, UPDATE, DELETE |

---

## 5. Authentication (Manager Portal)

- **Library:** NextAuth.js v5 (beta) with App Router
- **Provider:** Credentials (email + password)
- **Password hashing:** bcryptjs
- **Session:** JWT stored in HTTP-only cookie
- **Manager accounts:** Single manager via env vars (`MANAGER_EMAIL`, `MANAGER_PASSWORD_HASH`)
- **Route protection:** `middleware.ts` redirects unauthenticated users away from `/manager/*` (except `/manager/login`)
- **API protection:** `getServerSession()` checked in all manager API routes

---

## 6. Public Booking Form (`/booking`)

### Fields

| Field | Type | Notes |
|---|---|---|
| Full Name | text | required |
| Email or WhatsApp Number | text | required — either pattern valid |
| Tour Type | select | Sunset & Banyan Tree / Sunrise & Wildlife / Celebration Package |
| Tour Date | date picker | disable past dates |
| Group Size | number | min 2, max 35 |
| Special Requests | textarea | optional |
| Terms & Conditions | checkbox | required |

### Submission Flow

1. POST to `/api/booking`
2. API validates input, detects contact type (email vs phone)
3. Calculates `total_amount` based on tour type + group size
4. Inserts row into `bookings` with `status = 'pending'`
5. Sends customer confirmation via Resend (email) or Twilio (WhatsApp)
6. Sends manager notification email to aquatrekhikk@gmail.com via Resend
7. Shows inline success confirmation

### Pricing Logic

| Option | Price |
|---|---|
| Standard 1hr kayak | Rs 1,000 / person |
| Full Lake Adventure 3hr (sunset/sunrise) | Rs 3,000 / person |
| Optional guide add-on | Rs 1,500 / tour |
| Celebration Package | Quote required — no auto-calculation |

### UI Design

- Full-page form with hero image background (matching brand style of contact page)
- Primary teal (`#1FA7B8`) CTA button
- Mobile-friendly, large touch targets
- Pre-selectable tour type via query param: `/booking?tour=sunset-banyan-tree`

---

## 7. Manager Portal

### 7a. Login Page (`/manager/login`)

- Email + password form
- Brand-styled (navy + teal)
- Error message on invalid credentials
- Redirects to `/manager/bookings` on success

### 7b. Dashboard (`/manager/dashboard`)

**Stats cards:**
- Total bookings (current month)
- Confirmed bookings
- Pending bookings
- Monthly revenue (LKR)

**Additional sections:**
- Quick links: View all bookings, Add booking, Finance tracker
- Recent bookings: Last 5 entries (name, tour, date, status)

**UI:** White cards on light gray background, teal accents

### 7c. Bookings Page (`/manager/bookings`)

**Two views (tab toggle):**

#### Calendar View (react-big-calendar)
- Month / Week / Day views
- Bookings as colored events: green=confirmed, yellow=pending, red=cancelled
- Click event → booking detail modal (edit status, add notes)
- Click empty slot → quick add booking modal

#### List / Table View
| Column | Sortable/Filterable |
|---|---|
| Date | Sort |
| Name | — |
| Contact | — |
| Tour | Filter |
| Group Size | — |
| Total (LKR) | — |
| Status | Filter |
| Actions | — |

Filter by: status, tour type, date range. Sort by date.

**Actions:** Confirm, Cancel, Edit, Delete (with confirmation dialog)

#### Add Booking (manager manual entry)
- Same fields as public booking form
- No customer notification sent (manager is adding on their behalf)
- Accessible from calendar empty slot click or top button

#### Edit Booking
- Edit any field
- Change status: pending → confirmed → cancelled
- Add internal notes
- When status set to confirmed: trigger customer confirmation notification

#### Delete Booking
- Hard delete for MVP
- Confirmation modal before deletion

### 7d. Finance Page (`/manager/finance`)

**Summary bar (top):**
- Total Income (confirmed bookings, current month/year toggle)
- Total Expenses (current period)
- Net Profit = Income − Expenses
- Cards in teal/green/navy brand colors

**Income Section:**
- Auto-populated from `bookings` where `status = 'confirmed'`
- Grouped by month
- Table: Date, Customer Name, Tour, Group Size, Amount (LKR)
- Period total at bottom

**Expense Section:**
- Table: Date, Category, Amount (LKR), Note, Actions
- "Add Expense" button → modal form: Date, Category (dropdown), Amount, Note
- Edit via modal, delete with confirmation

**Charts (recharts):**
- Bar chart: Monthly income vs expenses (last 6 months)
- Pie chart: Expense breakdown by category
- Line chart: Revenue trend

**Export (nice-to-have):** Expenses table as CSV

---

## 8. Contact Field Logic

The booking form has a **single contact field** — customer enters either an email address or a WhatsApp phone number.

**Detection logic (API side):**

```ts
const isEmail = (value: string) => value.includes('@')
const isPhone = (value: string) => /^\+?\d[\d\s\-]{7,}$/.test(value)
```

**Routing:**
- Email provided → confirmation via Resend
- Phone provided → confirmation via Twilio WhatsApp API

**Field UI:**
- Label: "Email or WhatsApp Number"
- Placeholder: `your@email.com or +94 77 336 6171`
- Validation: must match either pattern

**Stored in DB:** `contact_value` (text) + `contact_type` ('email' | 'whatsapp')

---

## 9. Notifications

### Customer Notifications

#### 1. Booking Received (immediate, on form submit)

**Email (Resend):**
- Subject: "Your AquaTrek booking request is received!"
- Body: tour details, "we'll confirm within 24hrs"

**WhatsApp (Twilio):**
> Hi [Name]! 🛶 We've received your AquaTrek booking request for [Tour] on [Date] for [N] people. We'll confirm shortly. Questions? Reply here!

#### 2. Booking Confirmed (triggered when manager sets status → confirmed)

**Email (Resend):**
- Subject: "Your AquaTrek booking is confirmed! 🛶"
- Body: full details, what to bring, meeting point, WhatsApp link

**WhatsApp (Twilio):**
> Hi [Name]! ✅ Your AquaTrek [Tour] on [Date] is CONFIRMED for [N] people. Meeting point: Dodanduwa Rd, Hikkaduwa. Arrive 15 mins early. What to bring: sunscreen, water shoes, camera. See you there! 🌊

#### 3. Booking Cancelled

**Email (Resend):**
- Subject: "AquaTrek booking update"
- Body: apology, invite to rebook

**WhatsApp (Twilio):**
> Hi [Name], unfortunately we need to cancel your booking on [Date]. We're sorry for the inconvenience. Please reach out to reschedule: wa.me/message/NJJEXSOX3ABGM1

### Manager Notifications (always email → aquatrekhikk@gmail.com)

#### 4. New Booking Alert (on public form submit)
- Subject: "New booking request — [Name] on [Date]"
- Body: all booking details + direct link to manager portal

#### 5. Contact Form Submission
- Existing Resend integration (unchanged)

### Twilio WhatsApp Setup
- Business sender: +94 77 336 6171
- Message content: informational only (WhatsApp Business policy)
- Twilio sandbox for dev/testing → Meta Business verification required for production sender

---

## 10. UI Migration (Existing Pages)

### Component Classification

**Client components** (add `'use client'`):**
- Navbar, HeroSection, ToursSection, FAQSection, ScrollToTop, ReviewsSection

**Server components** (no change needed):
- Footer, FeaturesSection, PricingSection, TourDetailsSection, ServiceGuaranteeSection, WaveDivider

### Migration Changes

- Replace all `<img>` with `<Image>` from `next/image`
- Remove `OptimizedImage.tsx` (replaced by next/image)
- Remove `SEO.tsx` (replaced by Metadata API)
- Add `WhatsAppButton.tsx` — floating sticky button on all public pages
- All "Book Now" buttons → `/booking?tour=[tour-id]` (replaces WhatsApp redirects)

---

## 11. SEO (Next.js Metadata API)

- Root `layout.tsx`: default metadata, title template `%s | AquaTrek Hikkaduwa`
- Per-page `export const metadata` with title, description, openGraph, twitter
- Dynamic: `generateMetadata()` for tour pages and blog slugs
- Structured data (JSON-LD):
  - `LocalBusiness` — Footer
  - `TouristAttraction` — tour pages
  - `BreadcrumbList` — inner pages
  - `BlogPosting` — blog articles
- `app/sitemap.ts` — auto-generates sitemap including blog slugs
- `app/robots.ts` — disallows `/manager/*`
- Canonical URLs per page
- OpenGraph images per page

---

## 12. Blog (MDX)

### File Structure

```
content/blog/
├── kayaking-beginners-guide.mdx
├── rathgama-lake-wildlife.mdx
├── best-time-kayak-hikkaduwa.mdx
├── mangrove-ecosystem-guide.mdx
├── sunrise-vs-sunset-tour.mdx
└── family-kayaking-tips.mdx
```

### Frontmatter Schema

```yaml
title: ""
date: "2025-01-15"
excerpt: ""
tags: ["wildlife", "nature"]
author: "AquaTrek Team"
coverImage: "/images/blog/cover.jpg"
slug: "post-slug"
```

### Lib Utilities (`lib/blog.ts`)

- `getAllPosts()` — reads all MDX frontmatter, returns sorted list
- `getPostBySlug(slug)` — returns frontmatter + compiled MDX content
- Blog list page: ISR with `revalidate = 3600`

---

## 13. Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=https://aquatrekhikkaduwa.com

# Manager credentials (single-manager setup)
MANAGER_EMAIL=
MANAGER_PASSWORD_HASH=        # bcrypt hash of password

# Resend (email)
RESEND_API_KEY=
RESEND_FROM_EMAIL=bookings@aquatrekhikkaduwa.com

# Twilio (WhatsApp Business)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_WHATSAPP_FROM=whatsapp:+94773366171

# Analytics
NEXT_PUBLIC_GA_ID=AW-17649202233

# Site
NEXT_PUBLIC_SITE_URL=https://aquatrekhikkaduwa.com
```

---

## 14. Dependencies

### Add

```
next@15
@supabase/supabase-js
next-auth@beta
bcryptjs + @types/bcryptjs
resend
twilio
next-mdx-remote
gray-matter
react-big-calendar + @types/react-big-calendar
date-fns
recharts
yet-another-react-lightbox
```

### Remove

```
react-router-dom
vite + @vitejs/plugin-react
react-helmet-async
vite-plugin-sitemap + vite-plugin-static-copy
@reduxjs/toolkit + react-redux
```

---

## 15. UI Improvements (Beyond Migration)

1. **Floating WhatsApp button** — bottom-right, all public pages, links to wa.me
2. **"Book Now" → `/booking`** — replaces all WhatsApp CTA redirects, with `?tour=` param
3. **Custom 404 page** — brand-styled with nav back to home
4. **Breadcrumbs** on inner pages (also adds BreadcrumbList JSON-LD)
5. **Tour image lightbox** — click to expand gallery (yet-another-react-lightbox)
6. **Contact form feedback** — loading spinner + success/error toast
7. **Booking form success screen** — confirmation summary after submission
8. **Page fade-in** — subtle CSS animation on route change

---

## 16. Vercel Deployment

- Zero-config Next.js detection
- All env vars set in Vercel dashboard (Production + Preview environments)
- Custom domain: DNS updated from GitHub Pages CNAME → Vercel nameservers
- `/manager/*` routes protected by middleware (no static caching)
- ISR for blog pages: `revalidate = 3600`
- Static generation for all marketing pages

---

## 17. Implementation Order

### Phase 1 — Next.js Scaffolding
1. `npx create-next-app@latest` with TypeScript + Tailwind + App Router
2. Copy `/public/fonts/`, `/public/images/` unchanged
3. Install all dependencies
4. Configure `next.config.ts`, `tailwind.config.ts` (copy color tokens)
5. Set up `next/font/local` for Gilroy in root layout

### Phase 2 — UI Migration
6. Migrate all components (add `'use client'`, swap `img` → `Image`)
7. Create all 9 existing pages with Metadata API
8. Set up Google Analytics client component
9. Add WhatsAppButton, not-found, sitemap.ts, robots.ts

### Phase 3 — Blog
10. Create `lib/blog.ts` utilities
11. Create MDX infrastructure (next-mdx-remote setup)
12. Migrate 6 posts to MDX files with frontmatter
13. Build blog listing + article pages

### Phase 4 — Contact Form
14. Create `/api/contact/route.ts` with Resend

### Phase 5 — Booking System
15. Set up Supabase project + run SQL migrations
16. Create public booking form (`/booking/page.tsx`)
17. Create `/api/booking/route.ts`
18. Set up Resend + Twilio notification templates (5 templates)

### Phase 6 — Manager Portal
19. Configure NextAuth.js v5 with credentials provider
20. Create `middleware.ts` for route protection
21. Build manager layout + login page
22. Build bookings page (calendar + list view + CRUD)
23. Build finance page (income table + expense CRUD + charts)
24. Create all manager API routes

### Phase 7 — Polish + Deploy
25. Test all routes, forms, auth flows
26. Lighthouse audit (target 90+ on all public pages)
27. Deploy to Vercel, set env vars, connect domain

---

## 18. Verification Checklist

- [ ] All 9 public pages render identically to current site
- [ ] Mobile responsive on all pages
- [ ] "Book Now" buttons → `/booking` with correct tour pre-selected
- [ ] Booking form submits → row in Supabase + customer notification + manager alert
- [ ] Email contact → Resend confirmation sent
- [ ] WhatsApp contact → Twilio message sent
- [ ] Manager login works, redirects to `/manager/bookings`
- [ ] Unauthenticated access to `/manager/*` redirects to login
- [ ] Calendar shows bookings with correct colors by status
- [ ] Click booking event → detail/edit modal
- [ ] Click empty calendar slot → add booking modal
- [ ] List view filters and sorts work correctly
- [ ] Confirming booking triggers customer confirmation notification
- [ ] Finance page shows correct income from confirmed bookings
- [ ] Expense CRUD (add, edit, delete) works
- [ ] Finance charts render with correct data
- [ ] Blog MDX posts render with correct styling
- [ ] Contact form sends email to aquatrekhikk@gmail.com
- [ ] Lighthouse scores 90+ on all public pages
- [ ] GA events firing in production
- [ ] Sitemap accessible at /sitemap.xml
- [ ] `/manager/*` blocked in robots.txt
- [ ] All env vars set in Vercel Production environment
