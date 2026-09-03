# Implementation Plan: World Class Dental Clinic Website

## Overview

Build a premium, modern, highly animated 3D dental clinic website for **World Class Dental Clinic — Pune**, Dr. Priyanka Saokar Navale (BDS, MDS Orthodontics). The stack is Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Three Fiber, and @react-three/drei. Tasks progress from project scaffolding → data layer → core UI components → page assembly → API route → SEO/accessibility hardening → final wiring.

---

## Tasks

- [x] 1. Scaffold project structure, configuration, and global styles
  - Initialise a Next.js 14 App Router project with TypeScript, Tailwind CSS, and the required dependencies (`framer-motion`, `lucide-react`, `@react-three/fiber`, `@react-three/drei`, `three`, `nodemailer`)
  - Create `tailwind.config.ts` with the full design-token extension: `primary`, `accent`, `gold`, `neutral` colours; `font-sans`/`font-display`; `display-xl`/`display-lg` font sizes; `marquee` and `fade-slide-up` keyframe animations
  - Create `styles/globals.css` with Tailwind base directives plus `.glass` and `.glass-dark` utility classes
  - Create `next.config.ts` with `images.remotePatterns` for `maps.googleapis.com`, `formats: ['image/avif','image/webp']`, and `optimizePackageImports` for `lucide-react` and `framer-motion`
  - Create `tsconfig.json` with path alias `@/` pointing to the project root
  - Create `.env.example` with all seven required keys: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CLINIC_EMAIL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`
  - Add placeholder GLTF/GLB files under `/public/models/tooth.glb` and `/public/models/dental-scene.glb`, placeholder images under `/public/images/` and `/public/fallbacks/`
  - _Requirements: 18.2, 21.5, 23.1, 23.4, 23.5_

- [ ] 2. Implement data layer and utility modules
  - [x] 2.1 Create `lib/data/services.ts` with the `ServiceItem` and `ProcessStep` interfaces, and all 16 service entries with `id`, `slug`, `name`, `icon`, `shortDescription`, `description` (≥ 150 words each), `benefits`, `process`, and `costRange`
    - _Requirements: 7.1, 7.2, 7.5_

  - [x] 2.2 Create `lib/data/testimonials.ts` with ≥ 6 testimonial entries (name, rating, text, treatment)
    - _Requirements: 12.1_

  - [x] 2.3 Create `lib/data/faqs.ts` with ≥ 10 FAQ entries (question, answer) covering orthodontics and general dental care
    - _Requirements: 14.2_

  - [x] 2.4 Create `lib/data/braces.ts` with entries for Metal, Ceramic, Self-Ligating, and Lingual braces (name, image/icon, pros, cons, costRange, slug)
    - _Requirements: 8.1, 8.2_

  - [x] 2.5 Create `lib/data/awards.ts`, `lib/data/whyChooseUs.ts` (≥ 8 differentiators with icon, title, sentence), and `lib/data/gallery.ts` (≥ 8 `GalleryItem` entries)
    - _Requirements: 10.2, 11.3, 13.2_

  - [ ] 2.6 Create `lib/utils/slugify.ts` implementing the `slugify` function, and `lib/utils/validators.ts` with `validatePhone` (`/^[6-9]\d{9}$/`) and `validateEmail` pure functions
    - _Requirements: 7.4, 15.2_

  - [ ]* 2.7 Write property test for `slugify` — Property 5 (round-trip consistency) and Property 11 (URL-safe output)
    - **Property 5: Slugify Round-Trip Consistency** — for every entry in `services.ts`, `slugify(service.name)` === `service.slug`
    - **Property 11: Slugify Produces URL-Safe Strings** — for any non-empty input, output contains only `[a-z0-9-]` with no leading/trailing/consecutive hyphens
    - **Validates: Requirements 7.4**

  - [ ]* 2.8 Write property tests for validators — Property 2 (phone) and Property 3 (email)
    - **Property 2: Phone Validation Rejects Non-Indian-Mobile Strings**
    - **Property 3: Email Validation Rejects Malformed Addresses**
    - **Validates: Requirements 15.2**

  - [x] 2.9 Create `lib/metadata.ts` with the `buildMetadata` helper function and `lib/animations.ts` with `fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`, and `slideInLeft` Framer Motion variant objects
    - _Requirements: 19.2, 19.6_

- [x] 3. Implement custom hooks
  - [x] 3.1 Create `lib/hooks/useReducedMotion.ts` — listens to `prefers-reduced-motion` media query and returns a boolean
    - _Requirements: 1.7, 3.7, 4.5, 12.6, 20.6_

  - [x] 3.2 Create `lib/hooks/useIntroOverlay.ts` — reads/writes `localStorage` key `introSeen`, returns `{ shouldShow, dismiss }`
    - _Requirements: 1.1, 1.5, 1.6_

  - [x] 3.3 Create `lib/hooks/useMouseParallax.ts` — returns `{ rx, ry }` clamped to ±15°, returns `{ rx: 0, ry: 0 }` when reduced motion is active
    - _Requirements: 3.3, 3.7_

  - [x] 3.4 Create `lib/hooks/useIntersectionCounter.ts` — triggers a count-up animation using `IntersectionObserver`, fires once per page load, skips animation when reduced motion is active
    - _Requirements: 4.3, 4.4, 4.5_

  - [ ]* 3.5 Write property test for `useMouseParallax` — Property 8 (rotation magnitude ≤ 15°)
    - **Property 8: Hero Parallax Rotation Magnitude Constraint** — for any cursor position, `|rx| ≤ 15` and `|ry| ≤ 15`
    - **Validates: Requirements 3.3**

- [x] 4. Implement shared UI components
  - [x] 4.1 Create `components/ui/AnimatedSection.tsx` — reusable `motion.div` wrapper with `whileInView`, `viewport={{ once: true }}`, and `variants` prop; reads `useReducedMotion` to disable transitions
    - _Requirements: 5.4, 6.4, 7.6, 8.4_

  - [x] 4.2 Create `components/ui/CounterStat.tsx` — animated count-up using `useIntersectionCounter`; displays final value immediately when reduced motion is active
    - _Requirements: 4.2, 4.3, 4.5_

  - [x] 4.3 Create `components/ui/LoadingSpinner.tsx` — accessible spinner used as Dynamic Import loading fallback
    - _Requirements: 18.3_

  - [x] 4.4 Create `components/ui/FaqAccordion.tsx` — single-open-panel accordion with `AnimatePresence` height animation, `role="button"`, `aria-expanded`, `aria-controls`; keyboard `Enter`/`Space` toggle and `ArrowDown`/`ArrowUp` navigation
    - _Requirements: 14.3, 14.4, 14.5, 14.6, 14.7_

  - [ ]* 4.5 Write property test for `FaqAccordion` — Property 7 (single-panel invariant)
    - **Property 7: FAQ Single-Panel Invariant** — for any sequence of click/keyboard interactions, open panel count never exceeds 1
    - **Validates: Requirements 14.5**

  - [x] 4.6 Create `components/ui/ServiceCard.tsx` — displays Lucide icon, service name, one-sentence description; navigates to `/services/[slug]` on click
    - _Requirements: 7.3, 7.4_

  - [x] 4.7 Create `components/ui/BraceCard.tsx` — displays brace type image/icon, name, pros, cons, cost range; links to `/services/[slug]`
    - _Requirements: 8.2, 8.3_

  - [x] 4.8 Create `components/ui/TestimonialCard.tsx` — displays patient name, star rating (Lucide `Star` icons), review text, treatment type
    - _Requirements: 12.1_

  - [x] 4.9 Create `components/ui/Lightbox.tsx` — full-screen dialog with `role="dialog"`, `aria-modal="true"`, focus trap (`useFocusTrap`), `Escape` key close, previous/next navigation, and `aria-label`
    - _Requirements: 13.3, 13.4, 13.7, 20.4_

  - [x] 4.10 Create `components/ui/GalleryGrid.tsx` — responsive before/after image grid using `next/image` with `loading="lazy"`; manages `LightboxState` via `useReducer`; staggered Framer Motion `fadeIn` entrance
    - _Requirements: 13.1, 13.2, 13.5, 13.6_

  - [x] 4.11 Create `components/ui/ContactForm.tsx` — controlled form with inline validation (phone regex, email regex), loading spinner on submit button, POST to `/api/contact`, success/error message display
    - _Requirements: 15.2, 15.3, 15.8, 15.9_

  - [x] 4.12 Create `components/seo/JsonLd.tsx` — renders `<script type="application/ld+json">` with the full `Dentist` LocalBusiness schema including address, telephone, URL, and `openingHoursSpecification`
    - _Requirements: 19.1_

- [x] 5. Implement 3D / Three.js components
  - [x] 5.1 Create `components/three/ThreeErrorBoundary.tsx` — `React.Component` error boundary that catches render errors and renders `WebGLFallback`; includes the `isWebGLSupported()` utility function
    - _Requirements: 18.4, 18.5_

  - [x] 5.2 Create `components/three/WebGLFallback.tsx` — static SVG tooth illustration or high-quality `next/image` fallback rendered when WebGL is unavailable
    - _Requirements: 1.8, 3.6, 18.4_

  - [x] 5.3 Create `components/three/IntroToothModel.tsx` — R3F `Canvas` loading `tooth.glb` via `useGLTF`; centred in viewport; error boundary wrapping `WebGLFallback`; reduced motion disables auto-rotation
    - _Requirements: 1.2, 1.8, 18.1, 18.6_

  - [x] 5.4 Create `components/three/HeroCanvas.tsx` — R3F `Canvas` loading `dental-scene.glb`; mouse parallax via `useMouseParallax` applied to model mesh ref via `useFrame`; error boundary wrapping `WebGLFallback`; reduced motion disables parallax and `useFrame` rotation
    - _Requirements: 3.2, 3.3, 3.6, 3.7_

- [x] 6. Implement layout components
  - [x] 6.1 Create `components/layout/Navbar.tsx` — fixed glassmorphic navbar with logo, anchor links, route links, "Book Appointment" CTA; hamburger icon for mobile (\< 768 px) triggering full-screen/slide-in menu; scroll-based opacity increase at 80 px; logical tab order and visible focus rings
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11_

  - [x] 6.2 Create `components/layout/Footer.tsx` — clinic name/logo, tagline, contact details, nav links, social media links (open in new tab with `rel="noopener noreferrer"`), privacy policy link, dynamic copyright year
    - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5_

  - [x] 6.3 Create `components/layout/MobileActionBar.tsx` — fixed bottom bar visible only on mobile (`md:hidden`); Call, WhatsApp, and Book buttons with Lucide icons; iOS safe-area inset padding; hides when footer is ≥ 10% visible via `IntersectionObserver`
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5_

- [x] 7. Implement homepage sections
  - [x] 7.1 Create `components/intro/IntroOverlay.tsx` — `position: fixed; z-index: 9999`; uses `useIntroOverlay`; Dynamic Import for `IntroToothModel`; clinic name, city, tagline in animated typography; "Enter" button; Framer Motion `AnimatePresence` exit animation (≤ 800 ms); reduced motion: ≤ 400 ms opacity transition
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8_

  - [ ]* 7.2 Write property test for intro overlay visibility — Property 1
    - **Property 1: Intro Overlay Visibility Invariant** — overlay shown iff `localStorage.getItem('introSeen') !== 'true'`; after dismiss, `introSeen === 'true'` and overlay not in DOM
    - **Validates: Requirements 1.1, 1.5, 1.6**

  - [x] 7.3 Create `components/sections/HeroSection.tsx` — 100 vh section with Dynamic Import (`ssr: false`) for `HeroCanvas`; `ThreeErrorBoundary` + `WebGLFallback`; headline, sub-headline, CTA button with Framer Motion stagger (150 ms per element); reduced motion disables mount animations and parallax
    - _Requirements: 3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 3.8_

  - [x] 7.4 Create `components/sections/TrustBar.tsx` — animated statistics strip with ≥ 4 stats using `CounterStat`; Framer Motion `whileInView` trigger; reduced motion shows final values immediately
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 7.5 Create `components/sections/AboutSection.tsx` — `#about` anchor; descriptive clinic text; `next/image` with `loading="lazy"`; Framer Motion `whileInView` slide-up (translateY 40→0); "Learn More" link to `/about`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 7.6 Create `components/sections/DoctorSection.tsx` — `#doctor` anchor; Dr. Priyanka Saokar Navale name, credentials, biography, specialisations, professional photo via `next/image`; scale-in photo + fade-in text via Framer Motion `whileInView`
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 7.7 Create `components/sections/ServicesGrid.tsx` — `#services` anchor; 16 `ServiceCard` components in a responsive grid; Framer Motion stagger fade-up (50 ms per card)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.6_

  - [x] 7.8 Create `components/sections/BracesComparison.tsx` — 4 `BraceCard` components; slide-in-from-left stagger (80 ms); links to relevant `/services/[slug]` pages
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 7.9 Create `components/sections/InvisalignSection.tsx` — full-width section; headline, benefit list, ≥ 3-step process overview, before/after comparison image, "Get a Free Consultation" CTA to `/contact`; Framer Motion `whileInView` entrance effects
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 7.10 Create `components/sections/WhyChooseUs.tsx` — `#why-choose-us` anchor; ≥ 8 differentiator cards using data from `lib/data/whyChooseUs.ts`; fade-up + scale-in stagger (60 ms per card)
    - _Requirements: 10.1, 10.2, 10.3_

  - [x] 7.11 Create `components/sections/AwardsStrip.tsx` — duplicated content list for seamless CSS `marquee` animation; `onMouseEnter` pauses animation, `onMouseLeave` resumes; reduced motion keeps animation paused
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

  - [x] 7.12 Create `components/sections/TestimonialsCarousel.tsx` — ≥ 6 testimonials using `TestimonialCard`; 5-second auto-play; pause on focus/hover; prev/next keyboard-accessible buttons; Framer Motion `AnimatePresence` with `mode="wait"`; reduced motion uses instant transitions
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6_

  - [ ] 7.13 Create `components/sections/FaqSection.tsx` — abridged homepage FAQ showing first 5 entries using `FaqAccordion`; links to `/faq` for full list
    - _Requirements: 14.1_

- [ ] 8. Checkpoint — Wire homepage and verify core sections
  - Assemble `app/page.tsx` composing all sections in order: `HeroSection`, `TrustBar`, `AboutSection`, `DoctorSection`, `ServicesGrid`, `BracesComparison`, `InvisalignSection`, `WhyChooseUs`, `AwardsStrip`, `TestimonialsCarousel`, `FaqSection`
  - Assemble `app/layout.tsx` composing `JsonLd`, `IntroOverlay`, `Navbar`, `{children}`, `Footer`, `MobileActionBar`
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Implement dedicated route pages
  - [ ] 9.1 Create `app/about/page.tsx` — full clinic history, philosophy, team, facilities; `next/image` images; `AnimatedSection` entrances; `generateMetadata` using `buildMetadata`
    - _Requirements: 24.1, 24.3, 24.9_

  - [ ] 9.2 Create `app/doctor/page.tsx` — full Dr. Navale profile: qualifications, professional memberships, years of experience, achievements, patient message; `generateMetadata`
    - _Requirements: 6.1, 6.5, 24.4, 24.9_

  - [ ] 9.3 Create `app/services/page.tsx` — full `ServicesGrid` (all 16 cards) with links to `/services/[slug]`; `generateMetadata`
    - _Requirements: 7.1, 24.5, 24.9_

  - [ ] 9.4 Create `app/services/[slug]/page.tsx` — service detail page with `generateStaticParams` iterating all 16 slugs; service name, ≥ 150-word description, benefits list, process overview, "Book This Treatment" CTA to `/contact`; `generateMetadata`; renders custom 404 for unknown slugs
    - _Requirements: 7.4, 7.5, 7.7, 24.9_

  - [ ] 9.5 Create `app/gallery/page.tsx` — full `GalleryGrid` with `Lightbox`; `generateMetadata`
    - _Requirements: 13.1, 24.6, 24.9_

  - [ ] 9.6 Create `app/faq/page.tsx` — full `FaqAccordion` with all ≥ 10 FAQ items; `generateMetadata`
    - _Requirements: 14.1, 24.7, 24.9_

  - [ ] 9.7 Create `app/contact/page.tsx` — `ContactForm`, Google Maps `<iframe>` embed, structured contact details (phone, WhatsApp, email, address); `generateMetadata`
    - _Requirements: 15.1, 15.10, 15.11, 24.8, 24.9_

  - [ ] 9.8 Create `app/not-found.tsx` — friendly 404 page with dental-themed illustration/icon, "Back to Home" and "/contact" links; uses shared `Navbar` and `Footer`
    - _Requirements: 22.1, 22.2, 22.3_

- [ ] 10. Implement the Contact API route
  - [ ] 10.1 Create `app/api/contact/route.ts` — parse JSON body; server-side validation (required fields, phone regex, email regex); return HTTP 422 with `errors` array on failure; initialise Nodemailer transport from `process.env`; send multipart HTML+plain-text email to `CLINIC_EMAIL`; return HTTP 200 on success; return HTTP 500 on SMTP error
    - _Requirements: 15.3, 15.4, 15.5, 15.6, 15.7, 23.2_

  - [ ]* 10.2 Write property test for the API route — Property 4 (rejects incomplete payloads)
    - **Property 4: API Route Rejects Incomplete Payloads** — any POST missing `name`, `phone`, or `email`, or with invalid phone/email, must return HTTP 422 with non-empty `errors`; never returns 200 for invalid payload
    - **Validates: Requirements 15.4**

- [ ] 11. Implement SEO, sitemap, and robots.txt
  - [ ] 11.1 Add `generateMetadata` calls using `buildMetadata` to every page that does not yet have it; verify each page has a unique `title` + `description` combination
    - _Requirements: 19.6, 24.9_

  - [ ]* 11.2 Write property test for metadata uniqueness — Property 9
    - **Property 9: SEO Metadata Uniqueness Across Routes** — for any two distinct routes, their `generateMetadata` title+description pairs must differ
    - **Validates: Requirements 19.6, 24.9**

  - [ ] 11.3 Create `app/sitemap.ts` — Next.js `MetadataRoute.Sitemap` generator listing all static routes and all 16 service slug routes with `lastModified`, `changeFrequency`, and `priority`
    - _Requirements: 19.3_

  - [ ] 11.4 Create `public/robots.txt` — permits all crawlers and references the sitemap URL
    - _Requirements: 19.4_

  - [ ]* 11.5 Write property test for JSON-LD presence — Property 10
    - **Property 10: All Pages Include LocalBusiness JSON-LD** — for every route in the sitemap, rendered HTML must contain `<script type="application/ld+json">` with `"@type":"Dentist"`, non-empty `name`, `address`, and `telephone`
    - **Validates: Requirements 19.1**

- [ ] 12. Accessibility and semantic HTML audit
  - [ ] 12.1 Audit all pages for correct semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`); add ARIA landmark roles where native equivalents are absent
    - _Requirements: 19.5, 20.3_

  - [ ] 12.2 Verify all `next/image` calls include a non-empty, meaningful `alt` attribute; add or fix any missing `alt` values
    - _Requirements: 19.7_

  - [ ] 12.3 Verify all interactive elements have visible focus indicators with ≥ 3:1 contrast; confirm modal/Lightbox focus trapping and focus restoration; confirm `Escape` key dismissal
    - _Requirements: 20.2, 20.4, 20.5_

  - [ ] 12.4 Audit colour contrast for all text: ≥ 4.5:1 for normal text, ≥ 3:1 for large text; fix any failing combinations in Tailwind classes or `globals.css`
    - _Requirements: 20.7_

- [ ] 13. Performance and bundle optimisation
  - [ ] 13.1 Confirm all R3F/Three.js components use `next/dynamic` with `ssr: false`; verify no heavy 3D assets appear in the synchronous module graph by checking the build output
    - _Requirements: 18.1, 21.3, 21.4_

  - [ ] 13.2 Confirm all raster images use `next/image` with explicit `width`, `height`, and `loading="lazy"` where appropriate; confirm `next.config.ts` enables AVIF/WebP formats
    - _Requirements: 21.2_

- [ ] 14. Create `README.md` and wire environment configuration
  - Write `README.md` with: project overview, prerequisites, environment variable list and descriptions, local development commands (`npm install`, `npm run dev`), build command (`npm run build`), and Vercel deployment instructions
    - _Requirements: 23.3_

- [ ] 15. Final checkpoint — End-to-end integration and all tests pass
  - Run `npm run build` and resolve any TypeScript errors, missing imports, or build warnings
  - Verify all `generateStaticParams` and `generateMetadata` functions work for all 16 service slugs
  - Confirm `IntroOverlay` mounts on first visit and is skipped on subsequent visits via `localStorage`
  - Confirm contact form POSTs to `/api/contact` and returns correct HTTP status codes
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP build
- Each task references specific requirements for full traceability
- Property tests use the correctness properties defined in the design document — a property-based testing library such as `fast-check` is recommended
- The design uses TypeScript/Next.js throughout — no language selection is required
- GLTF/GLB files under `/public/models/` are CC0-licensed placeholders; swap in production assets without changing import paths
- Checkpoints (Tasks 8 and 15) ensure incremental validation at key milestones

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.9"] },
    { "id": 1, "tasks": ["2.7", "2.8", "3.1", "3.2", "3.3", "3.4"] },
    { "id": 2, "tasks": ["3.5", "4.1", "4.2", "4.3"] },
    { "id": 3, "tasks": ["4.4", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11", "4.12", "5.1", "5.2"] },
    { "id": 4, "tasks": ["4.5", "5.3", "5.4", "6.1", "6.2", "6.3"] },
    { "id": 5, "tasks": ["7.1", "7.3", "7.4", "7.5", "7.6", "7.7", "7.8", "7.9", "7.10", "7.11", "7.12", "7.13", "10.1"] },
    { "id": 6, "tasks": ["7.2", "9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7", "9.8", "10.2"] },
    { "id": 7, "tasks": ["11.1", "11.3", "11.4", "12.1", "12.2", "12.3", "12.4", "13.1", "13.2"] },
    { "id": 8, "tasks": ["11.2", "11.5"] }
  ]
}
```
