# AquaTrek Website — Full Redesign PRD v3
**Site:** aquatrekhikkaduwa.com
**Stack:** Next.js (confirm App Router vs Pages Router before starting)
**Scope:** Full redesign — all existing pages + 3 new pages
**Design Direction:** Earthy & Natural — elevated eco-tourism aesthetic
**Theme Architecture:** CSS custom properties token system for easy future theming

---

## 1. Theme Architecture

The entire site is driven by a single theme token file. To change the look of the site later, only this file needs to be edited — no hunting through component files.

### 1.1 Token File

Create `/styles/theme.css` and import it at the top of `globals.css`.

```css
/* ============================================================
   AQUATREK THEME TOKENS
   Edit this file to restyle the entire site.
   ============================================================ */

:root {

  /* ----------------------------------------------------------
     BRAND COLOURS
  ---------------------------------------------------------- */

  /* Primary — Forest greens */
  --brand-primary:          #1C3A2B;   /* Deep forest — nav bg, dark sections, headings */
  --brand-primary-hover:    #152D21;   /* Hover on primary */
  --brand-primary-light:    #4A7C59;   /* Mid sage — icons, secondary accents */
  --brand-primary-muted:    #7BAE7F;   /* Pale moss — subtle tints */
  --brand-primary-subtle:   #EBF2EC;   /* Near-white green — light tinted backgrounds */

  /* Accent — Terracotta */
  --brand-accent:           #C4623A;   /* CTA buttons, badges, links */
  --brand-accent-hover:     #B05530;   /* Hover on accent */
  --brand-accent-light:     #E8956D;   /* Soft warm highlight */
  --brand-accent-subtle:    #FAF0EB;   /* Very light tint for accent sections */

  /* ----------------------------------------------------------
     NEUTRAL PALETTE
  ---------------------------------------------------------- */
  --neutral-50:   #FDFCF9;   /* Near-white, cleanest bg */
  --neutral-100:  #F5F0E8;   /* Cream — primary page background */
  --neutral-200:  #EDE5D4;   /* Sand — card backgrounds, alt sections */
  --neutral-300:  #DDD0B8;   /* Bark — borders, dividers */
  --neutral-400:  #BFB49A;   /* Warm grey — disabled, placeholder */
  --neutral-500:  #8C8070;   /* Stone — captions, secondary text */
  --neutral-600:  #5C5248;   /* Dark stone — body text secondary */
  --neutral-700:  #3D342A;   /* Near-black brown — body text primary */
  --neutral-900:  #1A1208;   /* True dark — maximum contrast text */

  /* ----------------------------------------------------------
     SEMANTIC COLOURS
  ---------------------------------------------------------- */
  --color-success:        #3A7D44;
  --color-success-bg:     #EBF5ED;
  --color-error:          #C0392B;
  --color-error-bg:       #FBEAEA;
  --color-warning:        #D97706;
  --color-warning-bg:     #FEF3C7;
  --color-info:           #2563EB;
  --color-info-bg:        #EFF6FF;

  /* ----------------------------------------------------------
     SURFACE COLOURS
     Used for backgrounds at different elevation levels
  ---------------------------------------------------------- */
  --surface-page:         var(--neutral-100);   /* Page background */
  --surface-base:         var(--neutral-50);    /* Cards, modals, inputs */
  --surface-raised:       #FFFFFF;              /* Elevated cards */
  --surface-overlay:      var(--neutral-200);   /* Hover states, alt sections */
  --surface-inverse:      var(--brand-primary); /* Dark sections */
  --surface-accent:       var(--brand-accent-subtle); /* Accent tinted sections */

  /* ----------------------------------------------------------
     TEXT COLOURS
  ---------------------------------------------------------- */
  --text-primary:         var(--neutral-700);   /* Main body text */
  --text-secondary:       var(--neutral-500);   /* Captions, meta, secondary */
  --text-tertiary:        var(--neutral-400);   /* Placeholders, disabled */
  --text-inverse:         #FFFFFF;              /* Text on dark backgrounds */
  --text-inverse-muted:   rgba(255,255,255,0.7);/* Secondary text on dark */
  --text-accent:          var(--brand-accent);  /* Links, highlights */
  --text-heading:         var(--brand-primary); /* All headings */

  /* ----------------------------------------------------------
     BORDER COLOURS
  ---------------------------------------------------------- */
  --border-subtle:        var(--neutral-200);   /* Hairline dividers */
  --border-default:       var(--neutral-300);   /* Card borders, inputs */
  --border-strong:        var(--neutral-400);   /* Emphasis borders */
  --border-inverse:       rgba(255,255,255,0.15); /* Borders on dark bg */
  --border-accent:        var(--brand-accent);  /* Focused inputs, highlights */

  /* ----------------------------------------------------------
     TYPOGRAPHY
  ---------------------------------------------------------- */

  /* Font families */
  --font-display:   'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-body:      'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono:      'JetBrains Mono', 'Fira Code', monospace;

  /* Font weights */
  --font-light:     300;
  --font-regular:   400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
  --font-extrabold: 800;

  /* Type scale — fluid sizing using clamp() */
  --text-xs:    0.75rem;                          /* 12px — micro labels */
  --text-sm:    0.875rem;                         /* 14px — small text */
  --text-base:  1rem;                             /* 16px — body */
  --text-lg:    1.125rem;                         /* 18px — large body */
  --text-xl:    clamp(1.25rem, 2vw, 1.375rem);   /* 20–22px — h4 */
  --text-2xl:   clamp(1.4rem, 2.5vw, 1.75rem);  /* 22–28px — h3 */
  --text-3xl:   clamp(1.75rem, 3vw, 2.25rem);   /* 28–36px — h2 */
  --text-4xl:   clamp(2rem, 4vw, 3rem);         /* 32–48px — h1 */
  --text-5xl:   clamp(2.5rem, 5vw, 4rem);       /* 40–64px — hero h1 */
  --text-6xl:   clamp(3rem, 7vw, 5.5rem);       /* 48–88px — display hero */

  /* Line heights */
  --leading-tight:   1.15;   /* Large display headings */
  --leading-snug:    1.3;    /* Section headings */
  --leading-normal:  1.6;    /* Subheadings */
  --leading-relaxed: 1.75;   /* Body copy */
  --leading-loose:   2;      /* Small text, captions */

  /* Letter spacing */
  --tracking-tight:   -0.02em;  /* Large headings */
  --tracking-normal:  0;
  --tracking-wide:    0.04em;   /* Eyebrow labels */
  --tracking-wider:   0.08em;   /* Uppercase badges */

  /* ----------------------------------------------------------
     SPACING SCALE
  ---------------------------------------------------------- */
  --space-1:    0.25rem;   /*  4px */
  --space-2:    0.5rem;    /*  8px */
  --space-3:    0.75rem;   /* 12px */
  --space-4:    1rem;      /* 16px */
  --space-5:    1.25rem;   /* 20px */
  --space-6:    1.5rem;    /* 24px */
  --space-8:    2rem;      /* 32px */
  --space-10:   2.5rem;    /* 40px */
  --space-12:   3rem;      /* 48px */
  --space-16:   4rem;      /* 64px */
  --space-20:   5rem;      /* 80px */
  --space-24:   6rem;      /* 96px */
  --space-32:   8rem;      /* 128px */

  /* Section vertical padding */
  --section-padding-y:  clamp(4rem, 8vw, 8rem);
  --section-padding-sm: clamp(2.5rem, 5vw, 5rem);

  /* ----------------------------------------------------------
     LAYOUT
  ---------------------------------------------------------- */
  --container-max:       1200px;
  --container-padding:   clamp(1rem, 5vw, 3rem);
  --grid-gap:            clamp(1rem, 2vw, 1.5rem);

  /* ----------------------------------------------------------
     BORDER RADIUS
  ---------------------------------------------------------- */
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-3xl:  32px;
  --radius-pill: 9999px;
  --radius-card: var(--radius-xl);   /* Default card radius — change once to update all cards */

  /* ----------------------------------------------------------
     SHADOWS
  ---------------------------------------------------------- */
  --shadow-xs:  0 1px 2px rgba(28, 58, 43, 0.06);
  --shadow-sm:  0 2px 8px rgba(28, 58, 43, 0.08);
  --shadow-md:  0 4px 16px rgba(28, 58, 43, 0.10);
  --shadow-lg:  0 8px 32px rgba(28, 58, 43, 0.12);
  --shadow-xl:  0 16px 48px rgba(28, 58, 43, 0.15);
  --shadow-card: var(--shadow-md);
  --shadow-card-hover: var(--shadow-xl);

  /* ----------------------------------------------------------
     TRANSITIONS
  ---------------------------------------------------------- */
  --transition-fast:    150ms ease;
  --transition-base:    200ms ease;
  --transition-slow:    300ms ease;
  --transition-spring:  300ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ----------------------------------------------------------
     Z-INDEX SCALE
  ---------------------------------------------------------- */
  --z-below:    -1;
  --z-base:      0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  300;
  --z-modal:    400;
  --z-toast:    500;

  /* ----------------------------------------------------------
     COMPONENT TOKENS
     These reference the primitives above.
     Change these to restyle specific components.
  ---------------------------------------------------------- */

  /* Buttons */
  --btn-radius:             var(--radius-pill);
  --btn-padding-x:          1.75rem;
  --btn-padding-y:          0.75rem;
  --btn-font-size:          var(--text-sm);
  --btn-font-weight:        var(--font-semibold);
  --btn-letter-spacing:     var(--tracking-wide);
  --btn-transition:         var(--transition-base);

  --btn-primary-bg:         var(--brand-accent);
  --btn-primary-bg-hover:   var(--brand-accent-hover);
  --btn-primary-text:       #FFFFFF;

  --btn-secondary-bg:       transparent;
  --btn-secondary-border:   var(--brand-primary);
  --btn-secondary-text:     var(--brand-primary);
  --btn-secondary-bg-hover: var(--brand-primary);
  --btn-secondary-text-hover: #FFFFFF;

  --btn-ghost-bg:           rgba(255,255,255,0.15);
  --btn-ghost-border:       rgba(255,255,255,0.5);
  --btn-ghost-text:         #FFFFFF;
  --btn-ghost-bg-hover:     rgba(255,255,255,0.25);

  /* Cards */
  --card-bg:                var(--surface-raised);
  --card-border:            1px solid var(--border-subtle);
  --card-radius:            var(--radius-card);
  --card-shadow:            var(--shadow-card);
  --card-shadow-hover:      var(--shadow-card-hover);
  --card-transform-hover:   translateY(-4px);

  /* Inputs */
  --input-bg:               var(--surface-overlay);
  --input-border:           1px solid var(--border-default);
  --input-border-focus:     var(--brand-primary);
  --input-radius:           var(--radius-lg);
  --input-padding:          0.75rem 1rem;
  --input-font-size:        var(--text-base);
  --input-focus-ring:       0 0 0 3px rgba(28, 58, 43, 0.15);

  /* Navigation */
  --nav-height:             72px;
  --nav-bg:                 rgba(253, 252, 249, 0.92);
  --nav-bg-scrolled:        rgba(253, 252, 249, 0.97);
  --nav-border-scrolled:    1px solid var(--border-subtle);
  --nav-blur:               blur(12px);
  --nav-link-color:         var(--neutral-700);
  --nav-link-hover:         var(--brand-primary);
  --nav-link-active:        var(--brand-primary);

  /* Badges */
  --badge-radius:           var(--radius-pill);
  --badge-padding:          0.25rem 0.625rem;
  --badge-font-size:        var(--text-xs);
  --badge-font-weight:      var(--font-semibold);
  --badge-letter-spacing:   var(--tracking-wider);

  /* Section */
  --section-eyebrow-color:  var(--brand-primary-light);
  --section-heading-color:  var(--text-heading);
}

/* ----------------------------------------------------------
   REDUCED MOTION — Accessibility
   All animations are disabled for users who prefer it.
---------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### 1.2 Global CSS Setup

In `globals.css`, after importing theme.css:

```css
@import './theme.css';

/* Google Font: Playfair Display */
/* Add to Next.js layout via next/font/google — see Section 2.1 */

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-relaxed);
  color: var(--text-primary);
  background-color: var(--surface-page);
}

/* Display headings — Playfair Display */
h1, h2, h3,
.font-display {
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-heading);
}

h4, h5, h6 {
  font-family: var(--font-body);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--text-heading);
}

h1 { font-size: var(--text-5xl); }
h2 { font-size: var(--text-4xl); }
h3 { font-size: var(--text-3xl); }
h4 { font-size: var(--text-2xl); }
h5 { font-size: var(--text-xl); }
h6 { font-size: var(--text-lg); }

p {
  max-width: 68ch;  /* Optimal reading line length */
  line-height: var(--leading-relaxed);
}

/* Container utility */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

/* Section utility */
.section {
  padding-block: var(--section-padding-y);
}
.section-sm {
  padding-block: var(--section-padding-sm);
}

/* Eyebrow label utility */
.eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--section-eyebrow-color);
}

/* Focus styles — keyboard accessibility */
:focus-visible {
  outline: 2px solid var(--brand-accent);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```

---

### 1.3 Tailwind Config Update

If using Tailwind, extend `tailwind.config.js` to expose all tokens:

```js
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest:     'var(--brand-primary)',
        sage:       'var(--brand-primary-light)',
        moss:       'var(--brand-primary-muted)',
        terracotta: 'var(--brand-accent)',
        sunrise:    'var(--brand-accent-light)',
        cream:      'var(--neutral-100)',
        sand:       'var(--neutral-200)',
        bark:       'var(--neutral-300)',
        ink:        'var(--neutral-700)',
        stone:      'var(--neutral-500)',
        mist:       'var(--neutral-400)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card:       'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
}
```

---

## 2. Font Setup

### 2.1 Font Loading in Next.js Layout

In `app/layout.tsx` (App Router) or `pages/_app.tsx` (Pages Router):

```tsx
// App Router — app/layout.tsx
import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

// Google Font — Playfair Display
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display-loaded',
  display: 'swap',
})

// Local Font — Gilroy (already in project)
// Confirm the path to your existing Gilroy font files
const gilroy = localFont({
  src: [
    { path: '../public/fonts/Gilroy-Regular.woff2',   weight: '400', style: 'normal' },
    { path: '../public/fonts/Gilroy-Medium.woff2',    weight: '500', style: 'normal' },
    { path: '../public/fonts/Gilroy-SemiBold.woff2',  weight: '600', style: 'normal' },
    { path: '../public/fonts/Gilroy-Bold.woff2',      weight: '700', style: 'normal' },
    { path: '../public/fonts/Gilroy-ExtraBold.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-body-loaded',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${gilroy.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

Then in `theme.css`, update font families to reference the loaded variables:
```css
--font-display: var(--font-display-loaded), Georgia, serif;
--font-body:    var(--font-body-loaded), -apple-system, sans-serif;
```

**Note for Claude Code:** Check `/public/fonts/` for existing Gilroy font files and confirm filenames before writing the `localFont` config. If filenames differ, adjust accordingly.

### 2.2 Font Usage Rules

```
Playfair Display  →  h1, h2, h3, pull quotes, hero text, .font-display
Gilroy Regular    →  body copy, paragraphs, descriptions
Gilroy Medium     →  nav links, card subtitles, secondary labels
Gilroy SemiBold   →  buttons, form labels, eyebrow text
Gilroy Bold       →  h4, h5, h6, stat numbers, prices
Gilroy ExtraBold  →  NOT used (reserve for future special callouts only)
```

---

## 3. Reusable Component Library

Create these components before building any pages. All pages import from here.

### 3.1 Button (`components/ui/Button.tsx`)

```tsx
// Variants: 'primary' | 'secondary' | 'ghost' | 'link'
// Sizes: 'sm' | 'md' | 'lg'
// Props: variant, size, href (renders <a> if provided), onClick, disabled, className, children

// CSS applied via tokens — no hardcoded colours
// Primary:   --btn-primary-bg, --btn-primary-text
// Secondary: --btn-secondary-bg, --btn-secondary-border, --btn-secondary-text
// Ghost:     --btn-ghost-bg, --btn-ghost-border, --btn-ghost-text
// Link:      no bg, text in --brand-accent, underline on hover

// Hover: primary/secondary get translateY(-1px) + shadow-sm
// Active: scale(0.98)
// Disabled: opacity 0.5, cursor not-allowed
// Loading: spinner replaces children, disabled state
```

### 3.2 Badge (`components/ui/Badge.tsx`)

```tsx
// Variants: 'coming-soon' | 'category' | 'featured' | 'new'
// coming-soon: --brand-accent bg, white text
// category:    --neutral-200 bg, --brand-primary text
// featured:    --brand-primary bg, white text
// new:         --color-success bg, white text
```

### 3.3 SectionHeader (`components/ui/SectionHeader.tsx`)

```tsx
// Props: eyebrow (optional), heading, subtext (optional), align ('left'|'center'), maxWidth
// eyebrow: <p class="eyebrow"> — uppercase, sage, tracked
// heading: <h2> — Playfair Display
// subtext: <p> — Gilroy Regular, --text-secondary, max-width 60ch

// Usage:
// <SectionHeader
//   eyebrow="Our Tours"
//   heading="Choose Your Adventure"
//   subtext="Two routes. Endless wonder."
//   align="center"
// />
```

### 3.4 Card (`components/ui/Card.tsx`)

```tsx
// Variants: 'default' | 'flat' | 'ghost'
// default: white bg, border, shadow, hover lift
// flat:    --surface-overlay bg, no shadow
// ghost:   transparent, border only

// All use --card-* tokens
// Hover effect: --card-transform-hover + --card-shadow-hover
// transition: var(--transition-slow)
```

### 3.5 InfoGrid (`components/ui/InfoGrid.tsx`)

```tsx
// Renders a 2-col or 3-col grid of icon + label + value items
// Used on: tour pages, hostel page, amenities page
// Props: items: Array<{ icon: ReactNode, label: string, value: string }>, cols: 2|3|4

// Each item:
// - Icon: 40x40 circle, --brand-primary-subtle bg, --brand-primary icon
// - Label: Gilroy Medium, --text-secondary, text-sm, uppercase
// - Value: Gilroy SemiBold, --text-primary, text-base
```

### 3.6 TrustBar (`components/ui/TrustBar.tsx`)

```tsx
// A horizontal strip of trust signals
// Items: TripAdvisor rating, Google rating, review count, key accolade
// Background: --brand-primary (dark) or --surface-overlay (light)
// Separator: small dot between items
// Used on: homepage (below hero), hostel page
```

### 3.7 WaitlistForm (`components/WaitlistForm.tsx`)

```tsx
// Props: category: 'hostel' | 'coworking' | 'rooftop', placeholder?: string
// Fields: Name (required), Email (required), Message (optional)
// Submits to Formspree — TODO: replace YOUR_FORM_ID
// Success state: sage bg card, ✓ icon, "You're on the list!"
// Error state: show WhatsApp fallback link
// All inputs use --input-* tokens
// Submit button: full-width, 'primary' variant
```

### 3.8 ImageWithOverlay (`components/ui/ImageWithOverlay.tsx`)

```tsx
// Wraps Next.js <Image> with a configurable gradient overlay
// Props: src, alt, overlayColor, overlayOpacity, children (rendered over image)
// Default overlay: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(28,58,43,0.55))
// Used on: all hero sections, dark image sections
```

---

## 4. Global Component Redesigns

### 4.1 Navigation

**Desktop (≥ 1024px):**
```
[Logo — left]    [Nav links — centre]    [Phone + CTA — right]
```

- Height: `var(--nav-height)` = 72px
- Background: `var(--nav-bg)` with `backdrop-filter: var(--nav-blur)`
- On scroll > 80px: transition to `var(--nav-bg-scrolled)` + `var(--nav-border-scrolled)`
- transition: `background 0.3s ease, box-shadow 0.3s ease`

Nav links: `Gilroy Medium`, 14px, `var(--nav-link-color)`
Active/hover: `var(--nav-link-active)` with 2px underline dot (not full underline)

**"Coming Soon" dropdown:**
- Trigger: text link with a small 🌿 emoji and chevron
- Dropdown panel:
  ```css
  background: var(--surface-raised);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  padding: var(--space-3);
  min-width: 220px;
  ```
- Each item: icon dot (terracotta) + label + "Soon" micro-badge
- Animation: `opacity 0→1` + `translateY(-4px→0)`, 200ms ease

**Mobile (< 1024px):**
- Hamburger icon, right side
- Full-screen drawer, slides in from right
- Background: `var(--brand-primary)`
- All nav links: white, `Gilroy SemiBold`, 1.25rem, 56px touch target min
- "Coming Soon" section: separator label + 3 links with terracotta dots
- Bottom: social icons + phone number

### 4.2 Footer

4-column grid. Background: `var(--brand-primary)`.

```
[Column 1: Brand]    [Column 2: Explore]    [Column 3: Coming Soon]    [Column 4: Contact]
```

**Column 1:**
- Logo (white version)
- Tagline: `"Guided kayak & canoe tours on Rathgama Lake, Hikkaduwa, Sri Lanka"`
- Text: `var(--text-inverse-muted)`, 14px
- Social icons: Facebook, Instagram, YouTube
  - Each: 36x36 circle, `rgba(255,255,255,0.1)` bg, white icon
  - Hover: `rgba(255,255,255,0.2)` bg

**Column 2 — Explore:**
- Home, About Us, Our Vision, Blog, Amenities & Tips

**Column 3 — Coming Soon:**
- Lake House Hostel
- AquaHub Cowork & Café
- Rooftop Deck
- Each link: small terracotta dot prefix

**Column 4 — Contact:**
- Address (map pin icon)
- aquatrekhikk@gmail.com (mail icon)
- +94 77 336 6171 (phone icon)
- WhatsApp button: full-width, green pill
- Icons: `var(--brand-primary-light)` colour

**Bottom bar:**
```css
border-top: 1px solid var(--border-inverse);
padding-top: var(--space-6);
display: flex;
justify-content: space-between;
```
- Left: `© 2026 AquaTrek. All Rights Reserved.`
- Right: `Terms of Service · Privacy Policy`
- Text: `var(--text-inverse-muted)`, 13px

**FIX:** Remove the two duplicate "Others" columns from the current footer.

---

## 5. Page-by-Page Specifications

### 5.1 Homepage — FULL LAYOUT REDESIGN

#### Section 1: Hero
- Full viewport height (`100svh` — safer than `100vh` on mobile)
- Image carousel: crossfade transition (not slide), 5s auto-advance, pause on hover
- Overlay: `linear-gradient(160deg, rgba(0,0,0,0.15) 0%, rgba(28,58,43,0.65) 100%)`
- Content: left-aligned, bottom-third of viewport

```
[.eyebrow — sage, white text version]
Rathgama Lake · Hikkaduwa · Sri Lanka

[h1 — Playfair Display, white, --text-6xl]
"Explore Hidden
Waters"

[p — Gilroy Regular, rgba(255,255,255,0.85), max-width 520px]
Guided kayak & canoe tours through Sri Lanka's most serene lagoon.
Wildlife, mangroves, and golden sunrises await.

[Two buttons, gap 12px]
<Button variant="primary">Book a Tour</Button>
<Button variant="ghost">Watch the Experience ▶</Button>
```

- Carousel dots: bottom-centre, small white pills (active = filled, inactive = outlined)
- Scroll indicator: animated bouncing arrow, bottom-centre, fades after 3s

#### Section 2: Trust Bar (NEW)
- Immediately below hero
- Background: `var(--brand-primary)`
- Height: 64px
- Items separated by `·`:
  - ⭐ **5.0** on TripAdvisor
  - 🗺️ **100+** Happy Adventurers
  - 📍 Rathgama Lake, Hikkaduwa
  - 🌿 Family-Run Since 2023
- Font: `Gilroy Medium`, 14px, `var(--text-inverse-muted)`
- Numbers/highlights: `white`, `Gilroy SemiBold`
- On mobile: horizontal scroll, no wrap

#### Section 3: Welcome
- Background: `var(--surface-page)` (cream)
- Max-width 680px, centred
- `.eyebrow` → "About AquaTrek"
- `h2` → "A family's love for the lake, shared with the world."
- Body copy (existing)
- No extra elements — keep this section clean and spacious

#### Section 4: Tours — LAYOUT CHANGE
- Background: `var(--surface-raised)` (white)
- `<SectionHeader eyebrow="Our Experiences" heading="Choose Your Adventure" align="center" />`

**3-column card grid** (stack to 1-column on mobile):
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: var(--grid-gap);
```

Each card (using `<Card>` component):
- Image top: 4:3 ratio, `object-fit: cover`, zoom on hover (`scale(1.04)`)
- Route badge: top-left of image, `variant="category"`
- Card body padding: `var(--space-6)`
- Title: `h3`, Playfair Display
- Description: Gilroy Regular, `--text-secondary`, 2 lines
- Distance pill: small, `--surface-overlay` bg, `--brand-primary` text, `--radius-pill`
- Two buttons: primary (Book Now) + secondary outline (Learn More)
- Hover: full card lifts via `--card-transform-hover`

**NOTE:** Remove the existing horizontal swipe carousel. Show all 3 cards in a grid.

#### Section 5: Before You Paddle
- Background: `var(--brand-primary)` (dark)
- 2-column layout: image left (rounded corners), content right
- `--text-inverse` for all text
- Amenity items: icon (`var(--brand-primary-light)`) + text
- CTA: `<Button variant="ghost">See All Amenities →</Button>`

#### Section 6: Pricing — LAYOUT CHANGE
- Background: `var(--surface-page)` (cream)
- `<SectionHeader eyebrow="Reserve Your Adventure" heading="Transparent, Flexible Pricing" subtext="Choose the option that works best for you." align="center" />`

Cards: **centred 2-column**, max-width 860px, `margin: 0 auto`

Standard Package card:
```css
background: var(--surface-raised);
border: var(--card-border);
border-radius: var(--radius-card);
padding: var(--space-8);
```

Full Lake Adventure card:
```css
/* Same as above PLUS: */
border: 2px solid var(--brand-accent);
position: relative; /* for "Most Popular" badge */
```
"Most Popular" badge: `position: absolute; top: -12px; left: 50%; transform: translateX(-50%)`
Badge: `variant="featured"` (terracotta bg, white text)

Price: `Playfair Display`, `--text-4xl`, `var(--brand-primary)`
Checklist: `✓` in `var(--brand-primary-light)`, `Gilroy Medium`
CTAs: two buttons per card — WhatsApp (primary) + Call (secondary)

Add below cards:
```
[p, centred, --text-secondary, text-sm]
Need more time? Rs 500 per extra hour.
We can accommodate up to 35 people — perfect for groups and events.
```

#### Section 7: Coming Soon Teaser (NEW)
- Background: `var(--neutral-200)` (sand)
- `<SectionHeader eyebrow="What's Coming" heading="More Than Just Kayaking" subtext="We're growing. Here's what's coming to AquaTrek." align="center" />`

3-column card grid:
Each card:
- Top: square icon block, `var(--brand-primary)` bg, 48px white icon, `border-radius: var(--radius-lg) var(--radius-lg) 0 0`
- `<Badge variant="coming-soon">Opening 2025</Badge>` below icon block
- Title: `h3`, Playfair Display
- Description: Gilroy Regular
- "Learn More →" text link: `var(--brand-accent)`

#### Section 8: Testimonials
- Background: `var(--surface-raised)` (white)
- `<SectionHeader eyebrow="Guest Stories" heading="Words from Fellow Adventurers" align="center" />`
- **Desktop:** 3-column grid
- **Mobile:** horizontal scroll snap

Each review card (`<Card variant="flat">`):
```
[Large " — Playfair Display, --text-4xl, --brand-primary-muted]
[Review text — Gilroy Regular, --text-primary]
[5 gold stars]
[Name — Gilroy SemiBold] [Flag emoji]
[Source — Gilroy Regular, --text-tertiary, text-xs] "via TripAdvisor"
```

#### Section 9: Final CTA
- Full-bleed lake image
- Overlay: `rgba(28,58,43,0.7)`
- Centred white content
- `h2`: "Ready to explore Rathgama Lake?"
- Body: "Contact us and we'll take care of the rest."
- 2 buttons: WhatsApp (primary) + Call Us (ghost)

---

### 5.2 About Page — RESTYLE ONLY
Layout unchanged. Apply token-based restyling:
- Hero: `<ImageWithOverlay>`, Playfair Display heading
- "Locally Grown, Family-Run": add pull-quote in Playfair italic
- "Our Approach": `var(--brand-primary)` bg, white text
- "The Soul of Rathgama": `var(--surface-page)` bg

---

### 5.3 Vision Page — MINIMAL CHANGES
- Replace remaining navy with `var(--brand-primary)`
- Update all headings to Playfair Display
- Replace teal buttons with terracotta `<Button variant="primary">`
- "We Are Not" section: add `var(--neutral-200)` bg to differentiate it
- All copy stays exactly as-is

---

### 5.4 Blog Index — MINOR LAYOUT ADDITION
Layout unchanged. Add:

**Category filter bar** (new, above grid):
```tsx
// State: activeCategory ('all' | 'nature' | 'culture' | 'knowledge' | 'wildlife' | 'birds')
// Client-side filtering — no API call
// Filter by data-category attribute on each post card
```

Filter pill styling:
```css
/* Inactive */
background: var(--surface-overlay);
color: var(--text-secondary);
border: 1px solid var(--border-default);

/* Active */
background: var(--brand-primary);
color: white;
border-color: var(--brand-primary);
```

Card redesign:
- Image: zoom on hover (`overflow: hidden`, `img { transition: transform 0.4s ease; } :hover img { transform: scale(1.04); }`)
- Category badges: `<Badge variant="category">`
- Title: Playfair Display
- Description: `-webkit-line-clamp: 2`
- Date: `var(--text-tertiary)`
- "Read More →": `var(--brand-accent)`, appears on hover

---

### 5.5 Blog Post Page — RESTYLE ONLY
- Article: max-width 680px, centred
- `h2, h3` in article: Playfair Display
- Body: Gilroy Regular, 1.1rem, `var(--leading-loose)`
- Pull quotes:
  ```css
  border-left: 3px solid var(--brand-accent);
  padding-left: var(--space-6);
  font-family: var(--font-display);
  font-style: italic;
  color: var(--brand-primary);
  font-size: var(--text-xl);
  ```
- Add "Related Posts" section at bottom: 2-card grid, same card style as blog index

---

### 5.6 Tour Pages — RESTYLE ONLY (both tours same template)

Hero: `<ImageWithOverlay>`, Playfair Display H1

Tour info grid — replace current dark section layout with `<InfoGrid>` component:
```tsx
<InfoGrid cols={4} items={[
  { icon: <MapPin />, label: "Distance",    value: "4.5 km"          },
  { icon: <Clock />,  label: "Duration",    value: "2–3 Hours"       },
  { icon: <Users />,  label: "Group Size",  value: "2–35 People"     },
  { icon: <Star />,   label: "Difficulty",  value: "Beginner"        },
  { icon: <Calendar/>,label: "Season",      value: "All Year"        },
  { icon: <Timer />,  label: "Time",        value: "6:00–9:00 AM"    },
  { icon: <Child />,  label: "Ages",        value: "All Ages"        },
  { icon: <Pin />,    label: "Location",    value: "Rathgama Lake"   },
]} />
```

Schedule: vertical timeline
```css
.timeline {
  position: relative;
  padding-left: var(--space-8);
}
.timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 0; bottom: 0;
  width: 2px;
  background: var(--brand-primary-muted);
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -33px;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: var(--brand-primary);
  border: 3px solid var(--surface-page);
}
```

Mobile sticky booking bar:
```css
/* Shows only on mobile */
@media (max-width: 768px) {
  .sticky-booking-bar {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: var(--surface-raised);
    border-top: 1px solid var(--border-subtle);
    padding: var(--space-4);
    z-index: var(--z-sticky);
    display: flex;
    gap: var(--space-3);
  }
}
```

---

### 5.7 Celebration Page — RESTYLE + CONTENT FIX
- Hero: keep fireworks image, restyle text + button
- Fix: replace all 3 package card images with distinct placeholders:
  - Card 1: `background: var(--brand-primary-subtle)` + "🎂 Birthday Celebrations" centred text
  - Card 2: `background: var(--brand-accent-subtle)` + "💑 Anniversary Specials" centred text
  - Card 3: `background: var(--neutral-200)` + "🎉 Group Events" centred text
- Celebration Info: `<InfoGrid cols={2}>`

---

### 5.8 Amenities Page — RESTYLE ONLY
- 6 amenity tiles: `<Card variant="flat">` with `var(--brand-primary)` icon circle
- Checklist `✓`: `var(--brand-primary-light)`
- Tips cards: white bg, `border-left: 3px solid var(--brand-accent)`
- FAQ accordion:
  ```css
  /* Item */
  border-bottom: 1px solid var(--border-subtle);
  
  /* Question button */
  padding: var(--space-5) 0;
  font-family: var(--font-body);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  
  /* Toggle icon */
  color: var(--brand-accent);
  transition: transform var(--transition-base);
  /* Rotate 45deg when open */
  
  /* Answer */
  background: var(--surface-page);
  padding: var(--space-4) var(--space-6);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  ```

---

### 5.9 Booking Page — RESTYLE ONLY
- Section bg: `var(--surface-page)`
- Form card: `var(--surface-raised)`, `var(--radius-2xl)`, `var(--shadow-md)`
- Inputs: use `--input-*` tokens
- Toggle (Email/WhatsApp): inactive = `var(--surface-overlay)`, active = `var(--brand-primary)` white text
- Price box: `var(--neutral-200)` bg, `Playfair Display` for price value
- Submit: `<Button variant="primary">` full width

---

### 5.10 Contact Page — RESTYLE ONLY
- Map: `border-radius: var(--radius-2xl)` on container
- Form: same restyle as booking
- Contact items: icon circle `var(--surface-overlay)` bg, `var(--brand-primary)` icon
- WhatsApp CTA: full-width green pill

---

## 6. New Pages

### 6.1 `/hostel` — AquaTrek Lake House
*(Full content from PRD v1 Section 5, apply v3 design system)*
- Hero: `<ImageWithOverlay>`, Playfair H1, two buttons
- "Who It's For": 3 `<Card variant="flat">` tiles, icon circles
- Pricing: 4 cards, terracotta border on "Lake View Private" as featured
- Amenities: `<InfoGrid cols={2}>`
- Waitlist: `var(--brand-primary)` bg section, `<WaitlistForm category="hostel" />`

### 6.2 `/aquahub` — Coworking Café
*(Full content from PRD v1 Section 6, apply v3 design system)*
- Hero: large Playfair tagline `"Work with a lake view. Paddle on your lunch break."`
- Floor breakdown: stacked alternating sections (cream / white / sand)
- Pricing: 5 cards, Monthly Hot Desk featured with terracotta border + badge
- "Why AquaHub": `var(--brand-primary)` bg, white text, bullet list
- Waitlist: `<WaitlistForm category="coworking" />`

### 6.3 `/rooftop` — Rooftop Sunset Deck
*(Full content from PRD v1 Section 7, apply v3 design system)*
- Hero: sunset/dusk image overlay
- Events: 2x2 `<Card>` grid
- Space details: `<InfoGrid cols={2}>`
- Enquiry: `<WaitlistForm category="rooftop" placeholder="Tell us about your event — date, type, number of guests" />`

---

## 7. Animations

All use CSS only — no animation libraries.

```css
/* Fade up — for section reveals */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Fade in — for overlays */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Scroll-triggered reveal — use Intersection Observer */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.reveal-children > *:nth-child(1) { transition-delay: 0ms;   }
.reveal-children > *:nth-child(2) { transition-delay: 100ms; }
.reveal-children > *:nth-child(3) { transition-delay: 200ms; }
.reveal-children > *:nth-child(4) { transition-delay: 300ms; }
```

Intersection Observer setup (create `hooks/useReveal.ts`):
```ts
// Adds .visible class to elements with .reveal when they enter viewport
// threshold: 0.1, rootMargin: '0px 0px -50px 0px'
```

---

## 8. Implementation Order

```
Step 1:  Install Playfair Display via next/font/google
Step 2:  Create /styles/theme.css with all tokens
Step 3:  Update globals.css — import theme, set base styles
Step 4:  Update tailwind.config.js — expose tokens
Step 5:  Build UI components: Button, Badge, Card, SectionHeader,
         InfoGrid, TrustBar, ImageWithOverlay, WaitlistForm
Step 6:  Build hooks/useReveal.ts (Intersection Observer)
Step 7:  Rebuild Navbar component
Step 8:  Rebuild Footer component (fix duplicate columns bug)
Step 9:  Homepage — full layout redesign
Step 10: Tour pages (sunset + sunrise — same template)
Step 11: About page — restyle
Step 12: Vision page — minimal changes
Step 13: Blog index — restyle + add filter
Step 14: Blog post — restyle
Step 15: Celebration page — restyle + fix images
Step 16: Amenities, Booking, Contact — restyle
Step 17: New pages: /hostel, /aquahub, /rooftop
Step 18: Final pass — check all pages at 375px, 768px, 1280px
```

---

## 9. File Manifest

### New files:
```
styles/theme.css
hooks/useReveal.ts
components/ui/Button.tsx
components/ui/Badge.tsx
components/ui/Card.tsx
components/ui/SectionHeader.tsx
components/ui/InfoGrid.tsx
components/ui/TrustBar.tsx
components/ui/ImageWithOverlay.tsx
components/WaitlistForm.tsx
app/hostel/page.tsx
app/aquahub/page.tsx
app/rooftop/page.tsx
public/images/coming-soon/hostel.webp      ← placeholder
public/images/coming-soon/aquahub.webp     ← placeholder
public/images/coming-soon/rooftop.webp     ← placeholder
```

### Modified files:
```
app/layout.tsx                    ← add font loading
app/globals.css                   ← import theme, base styles
tailwind.config.js                ← expose token aliases
components/Navbar.tsx             ← full redesign
components/Footer.tsx             ← full redesign + bug fix
app/page.tsx                      ← full layout redesign
app/about/page.tsx                ← restyle
app/vision/page.tsx               ← minimal update
app/blog/page.tsx                 ← add filter + restyle
app/blog/[slug]/page.tsx          ← restyle
app/tour/sunset-banyan-tree/page.tsx  ← restyle
app/tour/sunrise-wildlife/page.tsx    ← restyle
app/celebration/page.tsx          ← restyle + fix images
app/amenities/page.tsx            ← restyle
app/booking/page.tsx              ← restyle
app/contact/page.tsx              ← restyle
```

---

## 10. Acceptance Criteria

### Theme System
- [ ] `/styles/theme.css` exists and contains all tokens
- [ ] No hardcoded colour hex values in any component file
- [ ] No hardcoded font names in any component file — all reference `var(--font-display)` or `var(--font-body)`
- [ ] Changing a single token in `theme.css` visibly updates all instances sitewide

### Typography
- [ ] All h1/h2/h3 render in Playfair Display
- [ ] All body text, buttons, nav, and UI elements render in Gilroy
- [ ] Gilroy loads from local font files (not CDN)
- [ ] Playfair Display loads via `next/font/google`
- [ ] No FOUT (flash of unstyled text) — `display: swap` set

### Layout
- [ ] Homepage hero is left-aligned with two buttons
- [ ] Trust bar is visible below the hero
- [ ] Tour cards are a 3-column grid (not a carousel) on desktop
- [ ] Pricing cards are centred 2-column with "Most Popular" badge on featured
- [ ] "Coming Soon" teaser section exists on homepage with 3 cards
- [ ] Footer has 4 correctly labelled columns — no duplicate "Others"

### Components
- [ ] All 8 UI components exist and are used across pages
- [ ] Card hover lift works on all card instances
- [ ] WaitlistForm submits correctly with Formspree TODO comment visible

### New Pages
- [ ] `/hostel`, `/aquahub`, `/rooftop` render with correct content and design
- [ ] All 3 have `Opening 2025` badge in hero
- [ ] All 3 have correct meta tags

### Technical
- [ ] `prefers-reduced-motion` disables all transitions and animations
- [ ] `useReveal` hook adds scroll-triggered fade-up on all major sections
- [ ] All images use Next.js `<Image>` component
- [ ] Mobile responsive at 375px, 768px, 1024px, 1280px
- [ ] No TypeScript errors
- [ ] No broken links
- [ ] Existing page functionality (forms, booking, maps) unaffected

---

## 11. Out of Scope
- Backend / API changes
- Booking system logic
- Payment integration
- CMS / content changes
- Copy / text edits on existing pages
- Analytics or tracking setup
