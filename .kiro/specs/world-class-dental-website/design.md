# Design Document — World Class Dental Clinic Website

## Overview

A premium, fully animated 3D dental clinic website for **World Class Dental Clinic — Pune**, led by Dr. Priyanka Saokar Navale (BDS, MDS Orthodontics). Built with Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and React Three Fiber.

The architecture prioritises:

- **Performance**: Dynamic imports for all 3D/heavy components; route-based code splitting; `next/image` for all rasters.
- **Accessibility**: ARIA semantics, focus trapping, reduced-motion support throughout.
- **SEO**: Per-page `generateMetadata`, JSON-LD structured data, sitemap, robots.txt.
- **Graceful degradation**: WebGL ErrorBoundary + fallback images; localStorage-guarded intro overlay.

---

## 1. File and Folder Structure

```
/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout — Navbar, Footer, IntroOverlay, MobileActionBar
│   ├── page.tsx                  # Homepage (single-page scroll)
│   ├── about/
│   │   └── page.tsx
│   ├── doctor/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx              # /services — full services grid
│   │   └── [slug]/
│   │       └── page.tsx          # /services/[slug] — service detail
│   ├── gallery/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # POST /api/contact — Nodemailer
│   ├── not-found.tsx             # Custom 404
│   └── sitemap.ts                # Next.js sitemap generator
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileActionBar.tsx
│   ├── intro/
│   │   └── IntroOverlay.tsx      # localStorage-gated welcome screen
│   ├── sections/                 # Homepage section components
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── AboutSection.tsx
│   │   ├── DoctorSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── BracesComparison.tsx
│   │   ├── InvisalignSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── AwardsStrip.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   └── FaqSection.tsx        # Abridged FAQ on homepage
│   ├── three/
│   │   ├── HeroCanvas.tsx        # R3F canvas — Hero 3D scene
│   │   ├── IntroToothModel.tsx   # R3F canvas — Intro overlay model
│   │   ├── WebGLFallback.tsx     # Static SVG / image fallback
│   │   └── ThreeErrorBoundary.tsx
│   ├── ui/
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceModal.tsx      # (kept for modal-mode on /services)
│   │   ├── BraceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── Lightbox.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── ContactForm.tsx
│   │   ├── CounterStat.tsx
│   │   ├── AnimatedSection.tsx   # Reusable whileInView wrapper
│   │   └── LoadingSpinner.tsx
│   └── seo/
│       └── JsonLd.tsx            # Renders <script type="application/ld+json">
│
├── lib/
│   ├── data/
│   │   ├── services.ts           # Service data + slug map (16 entries)
│   │   ├── testimonials.ts
│   │   ├── faqs.ts
│   │   ├── braces.ts
│   │   ├── awards.ts
│   │   └── whyChooseUs.ts
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   ├── useMouseParallax.ts
│   │   ├── useIntersectionCounter.ts
│   │   └── useIntroOverlay.ts    # localStorage read/write logic
│   ├── utils/
│   │   ├── slugify.ts
│   │   └── validators.ts         # Phone / email validation (pure functions)
│   └── metadata.ts               # Shared metadata helpers
│
├── public/
│   ├── models/                   # CC0 GLTF/GLB files
│   │   ├── tooth.glb
│   │   └── dental-scene.glb
│   ├── images/                   # Static images
│   │   ├── og-image.jpg
│   │   ├── doctor.jpg
│   │   └── gallery/
│   │       ├── before-01.jpg … (16 images)
│   │       └── after-01.jpg …
│   └── fallbacks/
│       ├── tooth-fallback.svg
│       └── hero-fallback.jpg
│
├── styles/
│   └── globals.css               # Tailwind base + custom CSS animations
│
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 2. Component Hierarchy and Data Flow

### Root Layout (`app/layout.tsx`)

```
RootLayout
├── JsonLd (LocalBusiness schema)
├── IntroOverlay          ← client component, reads/writes localStorage
├── Navbar                ← client component (scroll + hamburger state)
├── {children}            ← page content
├── Footer
└── MobileActionBar       ← client, md:hidden
```

**Data flow:**

- `IntroOverlay` owns its own `shown` state via `useIntroOverlay` hook; no prop drilling needed.
- `Navbar` reads scroll position via `useEffect` + `window.scrollY`; no global state needed.
- All service/testimonial/FAQ data is imported from `lib/data/` as plain TypeScript objects (no API calls at runtime for static content).

### Homepage (`app/page.tsx`)

```
HomePage
├── HeroSection          → uses dynamic import for HeroCanvas
├── TrustBar             → uses useIntersectionCounter
├── AboutSection
├── DoctorSection
├── ServicesGrid         → maps over services data
├── BracesComparison     → maps over braces data
├── InvisalignSection
├── WhyChooseUs          → maps over differentiators data
├── AwardsStrip
├── TestimonialsCarousel
└── FaqSection           (first 5 FAQs abridged)
```

### Service Data Flow

```
lib/data/services.ts
  └─ ServiceItem[]
       ├─ ServicesGrid (renders ServiceCard for each)
       ├─ app/services/page.tsx (full grid)
       └─ app/services/[slug]/page.tsx
            └─ generateStaticParams() iterates ServiceItem[]
            └─ generateMetadata() reads ServiceItem by slug
```

### Contact Form / API Flow

```
ContactForm (client component)
  │  POST /api/contact  { name, phone, email, date?, service?, message? }
  │
  └─ app/api/contact/route.ts (server)
       ├─ Parse JSON body
       ├─ Server-side validation (required fields, phone regex, email regex)
       ├─ Return 422 + errors on failure
       ├─ Nodemailer.createTransport({ host, port, auth }) from process.env
       ├─ transporter.sendMail()
       ├─ Return 200 on success
       └─ Return 500 on SMTP error
```

---

## 3. Animation System

### Framer Motion Variant Library (`lib/animations.ts`)

```typescript
// Shared animation variants used across all components

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const staggerContainer = (staggerMs: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerMs / 1000 } },
})

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
```

### `AnimatedSection` Wrapper

A reusable component that wraps any section in a `motion.div` with `whileInView` and `viewport={{ once: true }}`. Accepts a `variants` prop. Used by every section to avoid boilerplate.

```typescript
// components/ui/AnimatedSection.tsx
interface Props {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
}
```

### `useReducedMotion` Hook

```typescript
// lib/hooks/useReducedMotion.ts
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}
```

All animated components call `useReducedMotion()` and pass `transition={{ duration: 0 }}` or skip `AnimatePresence` when `true`.

### Stagger Timings

| Section              | Stagger (ms) | Animation         |
|----------------------|-------------|-------------------|
| Hero headline/CTA    | 150         | fadeUp            |
| Services Grid cards  | 50          | fadeUp            |
| Why Choose Us cards  | 60          | fadeUp + scaleIn  |
| Braces cards         | 80          | slideInLeft       |
| Gallery images       | 40          | fadeIn            |
| Trust Bar stats      | 100         | fadeUp            |

---

## 4. 3D System (React Three Fiber)

### Loading Strategy

All R3F components are loaded with:

```typescript
const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})
```

This prevents Three.js from entering the server bundle and allows the page to render immediately.

### WebGL Detection and Fallback

```typescript
// components/three/ThreeErrorBoundary.tsx
class ThreeErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) return <WebGLFallback />
    return this.props.children
  }
}
```

Runtime WebGL check (used before rendering R3F canvas):

```typescript
function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}
```

### HeroCanvas Component

```typescript
// components/three/HeroCanvas.tsx
// Uses @react-three/fiber Canvas + @react-three/drei useGLTF, OrbitControls (limited)
// Mouse parallax: useMouseParallax hook returns { rx, ry } clamped to ±15°
// Rotation applied to the model mesh ref via useFrame
// Reduced motion: disables useFrame rotation when useReducedMotion() returns true
```

### GLTF Model Structure

```
/public/models/
├── tooth.glb          # Used in IntroOverlay (CC0 placeholder)
└── dental-scene.glb   # Used in Hero Section (CC0 placeholder)
```

Both files are CC0-licensed placeholders. Production swap: replace files without changing import paths.

### `useMouseParallax` Hook

```typescript
// lib/hooks/useMouseParallax.ts
// Returns { rx: number, ry: number } in degrees, clamped to [-15, 15]
// Listens on mousemove relative to the canvas bounding box
// Returns { rx: 0, ry: 0 } when useReducedMotion() is true
```

---

## 5. Theme and Design Tokens (`tailwind.config.ts`)

```typescript
theme: {
  extend: {
    colors: {
      primary:   { DEFAULT: '#0EA5E9', light: '#38BDF8', dark: '#0284C7' },
      accent:    { DEFAULT: '#8B5CF6', light: '#A78BFA' },
      gold:      { DEFAULT: '#F59E0B', light: '#FCD34D' },
      neutral: {
        50:  '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0',
        800: '#1E293B', 900: '#0F172A', 950: '#020617',
      },
    },
    fontFamily: {
      sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      display: ['var(--font-playfair)', 'Georgia', 'serif'],
    },
    fontSize: {
      'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
    },
    backdropBlur: { xs: '2px' },
    keyframes: {
      marquee:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      fadeSlideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
    },
    animation: {
      marquee: 'marquee 30s linear infinite',
      'fade-slide-up': 'fadeSlideUp 0.6s ease-out forwards',
    },
  },
}
```

### Typography Scale

- **Display / Hero headlines**: `font-display` (Playfair Display), `text-display-xl`
- **Section headings**: `font-display text-4xl`
- **Body / UI text**: `font-sans text-base`
- **Captions / labels**: `font-sans text-sm tracking-wide uppercase`

### Glassmorphism Utility Classes (`globals.css`)

```css
.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.glass-dark {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

---

## 6. Contact API Route Architecture

### Route: `app/api/contact/route.ts`

```typescript
// POST /api/contact
interface ContactPayload {
  name: string
  phone: string
  email: string
  date?: string        // ISO date string
  service?: string     // Service name string
  message?: string     // ≤ 500 characters
}

interface ApiError {
  field: string
  message: string
}

// Validation rules (server-side):
// - name: required, non-empty after trim
// - phone: required, matches /^[6-9]\d{9}$/ (10-digit Indian mobile)
// - email: required, matches RFC 5322 simplified regex
// - message: if present, length ≤ 500

// Success: HTTP 200 { success: true, message: 'Enquiry received.' }
// Validation failure: HTTP 422 { success: false, errors: ApiError[] }
// SMTP failure: HTTP 500 { success: false, message: 'Email delivery failed.' }
```

### Email Template

Plain-text + HTML multipart email sent to `process.env.CLINIC_EMAIL`:

```
Subject: New Patient Enquiry — World Class Dental Clinic
From: Website Contact Form <process.env.SMTP_USER>
To: process.env.CLINIC_EMAIL

Name:    {name}
Phone:   {phone}
Email:   {email}
Date:    {date || 'Not specified'}
Service: {service || 'Not specified'}

Message:
{message || '(none)'}
```

### Environment Variables (`.env.example`)

```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CLINIC_EMAIL=
NEXT_PUBLIC_SITE_URL=https://worldclassdental.in
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=
```

---

## 7. SEO Metadata Strategy

### Shared Metadata Helper (`lib/metadata.ts`)

```typescript
interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
}

export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://worldclassdental.in'
  return {
    title: `${title} | World Class Dental Clinic, Pune`,
    description,
    openGraph: {
      title,
      description,
      url: `${base}${path}`,
      siteName: 'World Class Dental Clinic',
      images: [{ url: image ?? `${base}/images/og-image.jpg`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${base}${path}` },
  }
}
```

### Per-Page `generateMetadata` Examples

| Route                  | Title                                              | Description                                             |
|------------------------|----------------------------------------------------|---------------------------------------------------------|
| `/`                    | Home                                               | Premium orthodontic & dental care in Pune               |
| `/about`               | About Us                                           | Clinic history, values, and state-of-the-art facilities |
| `/doctor`              | Dr. Priyanka Saokar Navale                         | BDS, MDS Orthodontics specialist profile                |
| `/services`            | Dental Services                                    | 16 specialist treatments available                      |
| `/services/[slug]`     | {service.name}                                     | {service.shortDescription}                              |
| `/gallery`             | Patient Gallery                                    | Before & after treatment results                        |
| `/faq`                 | FAQs                                               | Answers to common dental & orthodontic questions        |
| `/contact`             | Book an Appointment                                | Get in touch with our team in Pune                      |

### LocalBusiness JSON-LD (`components/seo/JsonLd.tsx`)

```typescript
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'World Class Dental Clinic',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  telephone: '+91-XXXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '...',
    addressLocality: 'Pune',
    addressRegion: 'MH',
    postalCode: '411XXX',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '20:00' },
  ],
  priceRange: '₹₹',
}
```

### `app/sitemap.ts`

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL
  const staticRoutes = ['/', '/about', '/doctor', '/services', '/gallery', '/faq', '/contact']
  const serviceRoutes = services.map(s => `/services/${s.slug}`)
  return [...staticRoutes, ...serviceRoutes].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1.0 : 0.8,
  }))
}
```

---

## 8. Intro Overlay State Management

### `useIntroOverlay` Hook

```typescript
// lib/hooks/useIntroOverlay.ts
export function useIntroOverlay() {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    // Only runs client-side
    const seen = localStorage.getItem('introSeen')
    setShouldShow(seen !== 'true')
  }, [])

  const dismiss = useCallback(() => {
    localStorage.setItem('introSeen', 'true')
    setShouldShow(false)
  }, [])

  return { shouldShow, dismiss }
}
```

**State transitions:**

```
[Page load]
    │
    ├─ introSeen === 'true'  → shouldShow = false → render homepage directly
    │
    └─ introSeen absent      → shouldShow = true  → render IntroOverlay
                                    │
                                    └─ user clicks Enter
                                          │
                                          ├─ localStorage.setItem('introSeen', 'true')
                                          ├─ shouldShow = false
                                          └─ Framer Motion exit animation (800 ms)
```

`IntroOverlay` is placed in `app/layout.tsx` so it appears on the very first load regardless of which route the user landed on. It renders `position: fixed; z-index: 9999` and unmounts via `AnimatePresence`.

---

## 9. Service Data Model

### `ServiceItem` Interface (`lib/data/services.ts`)

```typescript
export interface ServiceItem {
  id: number
  slug: string             // kebab-case, e.g. 'metal-braces'
  name: string             // Display name, e.g. 'Metal Braces'
  icon: LucideIconName     // Lucide icon identifier
  shortDescription: string // One sentence (≤ 120 chars) for card
  description: string      // Full description (≥ 150 words) for detail page
  benefits: string[]       // 4–6 bullet points
  process: ProcessStep[]   // 3–5 steps
  costRange: string        // e.g. '₹15,000 – ₹25,000'
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}
```

### 16 Services + Slugs

| # | Name                         | Slug                      |
|---|------------------------------|---------------------------|
| 1 | Metal Braces                 | `metal-braces`            |
| 2 | Ceramic Braces               | `ceramic-braces`          |
| 3 | Self-Ligating Braces         | `self-ligating-braces`    |
| 4 | Lingual Braces               | `lingual-braces`          |
| 5 | Invisalign / Clear Aligners  | `invisalign-clear-aligners` |
| 6 | Retainers                    | `retainers`               |
| 7 | Teeth Whitening              | `teeth-whitening`         |
| 8 | Dental Implants              | `dental-implants`         |
| 9 | Root Canal Treatment         | `root-canal-treatment`    |
| 10| Dental Crowns & Bridges      | `dental-crowns-bridges`   |
| 11| Tooth Extraction             | `tooth-extraction`        |
| 12| Dental Fillings              | `dental-fillings`         |
| 13| Scaling & Polishing          | `scaling-polishing`       |
| 14| Paediatric Dentistry         | `paediatric-dentistry`    |
| 15| Smile Makeover               | `smile-makeover`          |
| 16| Jaw / TMJ Treatment          | `jaw-tmj-treatment`       |

### Slug Utility (`lib/utils/slugify.ts`)

```typescript
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
```

---

## 10. Gallery and Lightbox State Management

### Data Model (`lib/data/gallery.ts`)

```typescript
export interface GalleryItem {
  id: number
  treatment: string
  beforeSrc: string   // /images/gallery/before-XX.jpg
  afterSrc: string    // /images/gallery/after-XX.jpg
  beforeAlt: string
  afterAlt: string
}
```

### Lightbox State (in `GalleryGrid`)

```typescript
interface LightboxState {
  isOpen: boolean
  currentIndex: number   // Index into GalleryItem[]
  viewingSide: 'before' | 'after'
}
```

Managed with `useReducer` for predictable transitions:

```
OPEN_LIGHTBOX  { index, side }  → isOpen: true, currentIndex, viewingSide
CLOSE_LIGHTBOX                  → isOpen: false
NEXT                            → currentIndex = (currentIndex + 1) % total
PREV                            → currentIndex = (currentIndex - 1 + total) % total
```

Focus trapping implemented with a `useFocusTrap` hook that queries `button, [href], input, [tabindex]` inside the dialog ref and clamps Tab/Shift+Tab cycling.

---

## 11. Mobile Action Bar

```typescript
// components/layout/MobileActionBar.tsx
// Tailwind: fixed bottom-0 left-0 right-0 z-40 flex md:hidden
// Three buttons: tel:, https://wa.me/{number}, /contact
// Padding-bottom: env(safe-area-inset-bottom) for iOS notch safety
// Hides when footer is in viewport via IntersectionObserver on footer element
```

Implementation note: an `IntersectionObserver` watches the `<footer>` element. When the footer is ≥ 10 % visible, the bar fades out using `opacity-0 pointer-events-none` to avoid overlapping.

---

## 12. Validators (`lib/utils/validators.ts`)

```typescript
// Indian mobile: 10 digits starting with 6–9
export const PHONE_REGEX = /^[6-9]\d{9}$/

// Simplified RFC 5322 email regex
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validatePhone(value: string): boolean {
  return PHONE_REGEX.test(value.trim())
}

export function validateEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim())
}
```

These same functions are imported in both the client-side `ContactForm` (inline validation) and the server-side `/api/contact/route.ts` (authoritative validation).

---

## 13. Awards Strip Implementation

```typescript
// components/sections/AwardsStrip.tsx
// Render items twice (duplicate list) inside a single flex row.
// Apply CSS animation: marquee 30s linear infinite on the inner div.
// onMouseEnter → animation-play-state: paused
// onMouseLeave → animation-play-state: running
// Reduced motion: animation-play-state: paused always
```

---

## 14. Testimonials Carousel Implementation

```typescript
// components/sections/TestimonialsCarousel.tsx
// State: { activeIndex: number, isPaused: boolean }
// useEffect: setInterval 5000 ms when !isPaused
// onFocus / onMouseEnter → isPaused = true
// onBlur / onMouseLeave  → isPaused = false
// AnimatePresence with mode="wait" wraps the active testimonial card
// Prev/Next buttons: aria-label, keyboard Enter/Space
// Reduced motion: no AnimatePresence transitions (instant show)
```

---

## 15. FAQ Accordion Implementation

```typescript
// components/ui/FaqAccordion.tsx
// State: openIndex: number | null (only one panel at a time)
// Each item: <div role="button" aria-expanded aria-controls>
// Answer panel wrapped in <AnimatePresence> with motion.div height 0→auto
// Keyboard: onKeyDown handles Enter/Space (toggle), ArrowDown/ArrowUp (move focus)
// Each answer div: id matching aria-controls
```

---

## 16. `next.config.ts`

```typescript
import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'maps.googleapis.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default config
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

---

### Property 1: Intro Overlay Visibility Invariant

*For any* page load, the Intro Overlay is visible if and only if `localStorage.getItem('introSeen')` is not equal to `"true"`. After the visitor dismisses the overlay (clicks Enter), `localStorage.getItem('introSeen')` must equal `"true"` and the overlay must no longer be rendered in the DOM.

**Validates: Requirements 1.1, 1.5, 1.6**

---

### Property 2: Phone Validation Rejects Non-Indian-Mobile Strings

*For any* string that does not match the pattern `/^[6-9]\d{9}$/` (i.e., it is not a 10-digit Indian mobile number starting with 6–9), `validatePhone(string)` must return `false`. Equivalently, for any string that does match the pattern, `validatePhone(string)` must return `true`.

**Validates: Requirements 15.2**

---

### Property 3: Email Validation Rejects Malformed Addresses

*For any* string that does not contain exactly one `@` with non-empty local and domain parts and a dot in the domain, `validateEmail(string)` must return `false`. For any well-formed email address string, `validateEmail(string)` must return `true`.

**Validates: Requirements 15.2**

---

### Property 4: API Route Rejects Incomplete Payloads

*For any* HTTP POST request to `/api/contact` whose body is missing one or more required fields (`name`, `phone`, `email`), or whose `phone` does not match the Indian mobile pattern, or whose `email` is malformed, the route must respond with HTTP status `422` and a non-empty `errors` array. It must never return `200` for an invalid payload.

**Validates: Requirements 15.4**

---

### Property 5: Slugify Round-Trip Consistency

*For any* service name string in the services data array, `slugify(service.name)` must equal `service.slug` as defined in `lib/data/services.ts`. Equivalently, the slug stored in the data and the slug computed dynamically from the service name must always agree, ensuring that navigation links and `generateStaticParams` produce identical paths.

**Validates: Requirements 7.4**

---

### Property 6: Unknown Service Slug Returns 404

*For any* string that is not present in the `slug` field of any `ServiceItem` in `lib/data/services.ts`, a request to `/services/{string}` must render the custom 404 `not-found` page and must not render any service detail content.

**Validates: Requirements 7.7**

---

### Property 7: FAQ Single-Panel Invariant

*For any* sequence of user interactions (clicks or keyboard events) on the FAQ Accordion, the count of simultaneously expanded (open) panels must never exceed 1. Opening a panel when another is already open must close the previously open panel.

**Validates: Requirements 14.5**

---

### Property 8: Hero Parallax Rotation Magnitude Constraint

*For any* cursor position within the Hero Section viewport bounds, the computed rotation values `rx` and `ry` returned by `useMouseParallax` must each satisfy `|rx| ≤ 15` and `|ry| ≤ 15` (in degrees). No mouse position may produce a rotation magnitude exceeding 15° on either axis.

**Validates: Requirements 3.3**

---

### Property 9: SEO Metadata Uniqueness Across Routes

*For any* two distinct routes in the application (e.g., `/` and `/about`, or `/services/metal-braces` and `/services/ceramic-braces`), the `title` and `description` values returned by their respective `generateMetadata` functions must be different strings. No two pages may share identical title and description pairs.

**Validates: Requirements 19.6, 24.9**

---

### Property 10: All Pages Include LocalBusiness JSON-LD

*For any* route listed in `app/sitemap.ts`, the server-rendered HTML must contain a `<script type="application/ld+json">` element whose parsed JSON includes `"@type": "Dentist"` and a non-empty `name`, `address`, and `telephone` field.

**Validates: Requirements 19.1**

---

### Property 11: Slugify Produces URL-Safe Strings

*For any* non-empty input string, `slugify(input)` must return a string that contains only lowercase ASCII letters (`a-z`), digits (`0-9`), and hyphens (`-`), with no leading, trailing, or consecutive hyphens.

**Validates: Requirements 7.4**

---
