# Requirements Document

## Introduction

A premium, modern, highly animated 3D dental clinic website for **World Class Dental Clinic — Pune**, led by Dr. Priyanka Saokar Navale (BDS, MDS Orthodontics). The website serves as the clinic's primary digital presence, combining immersive 3D visuals, smooth animations, and comprehensive service information to attract and convert prospective patients.

The site is built with Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Three.js / React Three Fiber, and @react-three/drei. It is Vercel-ready and SEO-optimised with LocalBusiness structured data.

---

## Glossary

- **Website**: The complete Next.js 14 application for World Class Dental Clinic.
- **Intro Overlay**: A full-screen animated welcome screen shown on first visit using a `localStorage` flag.
- **Navbar**: The sticky, glassmorphic top navigation bar present on all pages.
- **Hero Section**: The first full-viewport section on the homepage, featuring an interactive 3D dental scene.
- **Trust Bar**: A horizontally scrolling animated statistics strip below the Hero Section.
- **Services Grid**: A responsive grid displaying all 16 offered dental services.
- **Service Modal**: An in-page modal dialog providing detailed information for a single service.
- **Service Detail Page**: A dedicated route (`/services/[slug]`) for a single service.
- **Braces Comparison**: A section comparing different brace types (metal, ceramic, self-ligating, lingual).
- **Invisalign Section**: A dedicated section highlighting clear aligner treatments.
- **Why Choose Us**: A feature grid section listing the clinic's key differentiators.
- **Awards Strip**: A horizontally auto-scrolling awards and accreditations banner.
- **Testimonials Carousel**: An animated carousel of patient reviews.
- **Gallery**: A page (`/gallery`) containing a before/after image grid with lightbox.
- **Lightbox**: A full-screen modal for viewing gallery images.
- **FAQ Accordion**: An expandable accordion of frequently asked questions (`/faq`).
- **Contact Form**: A form on `/contact` that submits patient enquiries via a Next.js API route.
- **API Route**: `/api/contact` — a Next.js server-side route processing contact form submissions.
- **Mobile Action Bar**: A sticky bottom bar visible only on mobile devices for quick call/WhatsApp/book actions.
- **3D Scene**: A Three.js / React Three Fiber canvas rendering 3D dental models.
- **GLTF Model**: A 3D model in `.glb` or `.gltf` format stored under `/public/models/`.
- **Graceful Fallback**: A static SVG or image shown when WebGL / 3D rendering is unavailable.
- **Dynamic Import**: A Next.js `dynamic()` import with `ssr: false` used to defer 3D component loading.
- **Reduced Motion**: The `prefers-reduced-motion` CSS media query / React hook used to disable animations.
- **LocalBusiness Schema**: JSON-LD structured data following Schema.org `LocalBusiness` / `Dentist` type.
- **OG Tags**: Open Graph `<meta>` tags for rich social media previews.
- **Sitemap**: A `sitemap.xml` file listing all public routes.
- **robots.txt**: A file instructing search engine crawlers.
- **SMTP Config**: Email sending credentials stored as environment variables and consumed by Nodemailer or Resend.
- **`.env.example`**: A version-controlled example file listing required environment variable keys without values.
- **Vercel**: The target deployment platform for the Website.

---

## Requirements

### Requirement 1 — Intro Overlay (Welcome Animation)

**User Story:** As a first-time visitor, I want to see a stunning animated welcome screen, so that I immediately understand the clinic's premium brand before entering the main site.

#### Acceptance Criteria

1. WHEN a visitor loads the Website and the `introSeen` key is absent from `localStorage`, THE Website SHALL display the Intro Overlay full-screen before any other content.
2. WHEN the Intro Overlay is active, THE Website SHALL render an animated 3D tooth model (GLTF Model) centred in the viewport.
3. WHEN the Intro Overlay is active, THE Website SHALL display the clinic name "World Class Dental Clinic", the city "Pune", and the tagline "Your Smile, Our Passion" in animated typography.
4. WHEN the Intro Overlay is active, THE Website SHALL display a clickable "Enter" button that dismisses the overlay.
5. WHEN the visitor clicks the "Enter" button, THE Website SHALL set `introSeen = "true"` in `localStorage` and transition to the homepage with a smooth fade-out animation (duration ≤ 800 ms).
6. WHEN a returning visitor loads the Website and `introSeen` is `"true"` in `localStorage`, THE Website SHALL skip the Intro Overlay and render the homepage directly.
7. WHERE the visitor has enabled Reduced Motion, THE Website SHALL replace all keyframe animations in the Intro Overlay with a simple opacity transition of ≤ 400 ms.
8. IF the GLTF Model fails to load, THEN THE Website SHALL display a fallback static SVG tooth illustration in its place within the Intro Overlay.

---

### Requirement 2 — Sticky Glassmorphic Navbar

**User Story:** As a visitor navigating the site, I want a persistent, visually distinct navigation bar, so that I can reach any section or page quickly from anywhere on the site.

#### Acceptance Criteria

1. THE Navbar SHALL be fixed to the top of the viewport on every page and every route.
2. THE Navbar SHALL apply a glassmorphism style (`backdrop-filter: blur`, semi-transparent background) at all scroll positions.
3. THE Navbar SHALL contain anchor links for homepage sections: Hero, About, Doctor, Services, Why Choose Us, Testimonials, Contact.
4. THE Navbar SHALL contain route links to `/about`, `/doctor`, `/services`, `/gallery`, `/faq`, `/contact`.
5. WHEN the viewport width is less than 768 px, THE Navbar SHALL collapse navigation links behind a hamburger icon button.
6. WHEN the visitor clicks the hamburger icon, THE Navbar SHALL reveal a full-screen or slide-in mobile menu with all navigation links.
7. WHEN a navigation link is clicked, THE Navbar SHALL close the mobile menu and smoothly scroll to or navigate to the target.
8. WHEN the visitor scrolls past 80 px from the top of the page, THE Navbar SHALL increase background opacity to ≥ 0.85 for improved legibility.
9. THE Navbar SHALL display the clinic logo / wordmark on the left side.
10. THE Navbar SHALL include a prominent "Book Appointment" call-to-action button that links to the `/contact` page.
11. WHEN keyboard focus moves into the Navbar, THE Navbar SHALL expose all interactive elements in logical tab order and show visible focus rings.

---

### Requirement 3 — Hero Section

**User Story:** As a visitor landing on the homepage, I want a visually impressive hero section, so that I feel confident I have arrived at a premium dental clinic.

#### Acceptance Criteria

1. THE Hero Section SHALL occupy 100 vh on initial load and be the first visible section below the Navbar.
2. THE Hero Section SHALL render a 3D Scene (Three.js / React Three Fiber canvas) via a Dynamic Import with `ssr: false`.
3. WHEN the visitor moves the cursor across the Hero Section on a pointer device, THE 3D Scene SHALL respond with a subtle parallax rotation of the dental model (rotation magnitude ≤ 15°).
4. THE Hero Section SHALL display the headline "World Class Dental Clinic", the sub-headline "Specialist Orthodontic & Dental Care in Pune", and a "Book Appointment" CTA button.
5. THE Hero Section SHALL animate heading text and CTA button into view on mount using Framer Motion (stagger delay 150 ms per element).
6. IF WebGL is unavailable in the visitor's browser, THEN THE 3D Scene SHALL be replaced by a high-quality static dental illustration image rendered with `next/image`.
7. WHERE the visitor has enabled Reduced Motion, THE Hero Section SHALL disable parallax mouse tracking and mount animations.
8. THE "Book Appointment" CTA button SHALL navigate the visitor to the `/contact` page when clicked.

---

### Requirement 4 — Trust Bar (Animated Statistics)

**User Story:** As a visitor evaluating the clinic, I want to see key statistics at a glance, so that I can quickly gauge the clinic's experience and patient volume.

#### Acceptance Criteria

1. THE Trust Bar SHALL appear immediately below the Hero Section on the homepage.
2. THE Trust Bar SHALL display at minimum the following statistics: "10,000+ Happy Patients", "15+ Years Experience", "20+ Treatments", "98% Success Rate".
3. WHEN the Trust Bar enters the browser viewport, THE Website SHALL animate each statistic counter from 0 to its final value over 2 seconds using an easing curve.
4. THE Trust Bar SHALL use an `IntersectionObserver` (or equivalent Framer Motion `whileInView`) to trigger the count-up animation only once per page load.
5. WHERE the visitor has enabled Reduced Motion, THE Trust Bar SHALL display final values immediately without count-up animation.

---

### Requirement 5 — About Section

**User Story:** As a prospective patient, I want to learn about the clinic's background and values, so that I can decide whether this clinic is right for me.

#### Acceptance Criteria

1. THE About Section SHALL be present on the homepage as an anchor-linked section (`#about`).
2. THE About Section SHALL include a descriptive text about the clinic's history, philosophy, and facilities.
3. THE About Section SHALL display clinic imagery using `next/image` with `loading="lazy"` and explicit `width`/`height` attributes.
4. WHEN the About Section enters the viewport, THE Website SHALL animate text blocks and images in using Framer Motion `whileInView` with a slide-up effect (translateY: 40 px → 0).
5. THE About Section SHALL contain a "Learn More" link that navigates to the `/about` route for expanded content.

---

### Requirement 6 — Doctor Profile Section

**User Story:** As a visitor, I want to read about the treating dentist's qualifications, so that I trust the clinical expertise available at the clinic.

#### Acceptance Criteria

1. THE Doctor Profile Section SHALL be present on the homepage as an anchor-linked section (`#doctor`) and on the dedicated `/doctor` route.
2. THE Doctor Profile Section SHALL display the name "Dr. Priyanka Saokar Navale", credentials "BDS, MDS (Orthodontics)", a biographical summary, areas of specialisation, and a professional photograph rendered via `next/image`.
3. THE Doctor Profile Section SHALL list Dr. Navale's educational qualifications, professional memberships, and years of experience.
4. WHEN the Doctor Profile Section enters the viewport, THE Website SHALL animate the doctor's photo with a scale-in effect (scale: 0.9 → 1.0) and text with a fade-in effect using Framer Motion `whileInView`.
5. THE `/doctor` page SHALL include full-length content with additional achievements and a patient message from Dr. Navale.

---

### Requirement 7 — Services Grid

**User Story:** As a prospective patient, I want to browse all available dental treatments, so that I can find the service relevant to my needs.

#### Acceptance Criteria

1. THE Services Grid SHALL be present on the homepage as an anchor-linked section (`#services`) and on the dedicated `/services` route.
2. THE Services Grid SHALL display exactly 16 service cards covering: Metal Braces, Ceramic Braces, Self-Ligating Braces, Lingual Braces, Invisalign / Clear Aligners, Retainers, Teeth Whitening, Dental Implants, Root Canal Treatment, Dental Crowns & Bridges, Tooth Extraction, Dental Fillings, Scaling & Polishing, Paediatric Dentistry, Smile Makeover, and Jaw / TMJ Treatment.
3. EACH service card SHALL display a Lucide React icon, a service name, and a one-sentence description.
4. WHEN a visitor clicks a service card, THE Website SHALL navigate to `/services/[slug]` for that service, where `[slug]` is the kebab-case service name.
5. THE `/services/[slug]` page SHALL display the service name, a detailed description (≥ 150 words), a list of benefits, a process overview, and a "Book This Treatment" CTA linking to `/contact`.
6. WHEN the Services Grid enters the viewport, THE Website SHALL animate cards in with a staggered fade-up effect (50 ms stagger per card) using Framer Motion.
7. IF a `slug` parameter does not match any known service, THEN THE Website SHALL render the custom 404 page.

---

### Requirement 8 — Braces Comparison Section

**User Story:** As a visitor interested in orthodontic treatment, I want to compare brace types side-by-side, so that I can make an informed choice before consulting the doctor.

#### Acceptance Criteria

1. THE Braces Comparison Section SHALL be present on the homepage and SHALL compare Metal Braces, Ceramic Braces, Self-Ligating Braces, and Lingual Braces.
2. THE Braces Comparison Section SHALL present each brace type with an image or icon, a name, key pros, key cons, and approximate cost range.
3. WHEN the visitor clicks a brace type card, THE Website SHALL either scroll to or navigate to the relevant `/services/[slug]` page.
4. WHEN the Braces Comparison Section enters the viewport, THE Website SHALL animate each comparison card with a slide-in-from-left stagger using Framer Motion.

---

### Requirement 9 — Invisalign / Clear Aligners Section

**User Story:** As a visitor curious about clear aligner therapy, I want a dedicated section explaining Invisalign, so that I understand how it works and whether I am a candidate.

#### Acceptance Criteria

1. THE Invisalign Section SHALL be present on the homepage as a standalone full-width section.
2. THE Invisalign Section SHALL include a headline, benefit list, a step-by-step process overview (≥ 3 steps), a before/after comparison image, and a "Get a Free Consultation" CTA button linking to `/contact`.
3. WHEN the visitor clicks "Get a Free Consultation", THE Website SHALL navigate to the `/contact` page.
4. WHEN the Invisalign Section enters the viewport, THE Website SHALL animate content blocks with Framer Motion `whileInView` entrance effects.

---

### Requirement 10 — Why Choose Us Grid

**User Story:** As a visitor comparing dental clinics, I want to see differentiating features of World Class Dental Clinic, so that I understand why it is the best choice.

#### Acceptance Criteria

1. THE Why Choose Us Grid SHALL be present on the homepage as an anchor-linked section.
2. THE Why Choose Us Grid SHALL display at minimum 8 differentiators, each with a Lucide React icon, a title, and a supporting sentence.
3. WHEN each card in the Why Choose Us Grid enters the viewport, THE Website SHALL animate the card with a fade-up and scale-in effect using Framer Motion `whileInView` (stagger 60 ms per card).

---

### Requirement 11 — Awards Horizontal Scroll Strip

**User Story:** As a visitor, I want to see the clinic's accolades displayed prominently, so that I feel reassured about the clinic's credibility.

#### Acceptance Criteria

1. THE Awards Strip SHALL auto-scroll horizontally on a continuous loop without user interaction.
2. THE Awards Strip SHALL pause auto-scroll WHEN the visitor hovers over it.
3. THE Awards Strip SHALL display logos or badge images for awards and accreditations.
4. THE Awards Strip SHALL duplicate its content to create a seamless infinite scroll effect using CSS `animation` or Framer Motion.

---

### Requirement 12 — Testimonials Carousel

**User Story:** As a visitor, I want to read verified patient reviews, so that I feel confident choosing this clinic.

#### Acceptance Criteria

1. THE Testimonials Carousel SHALL display at minimum 6 patient testimonials, each with a patient name, star rating (1–5 stars rendered as Lucide `Star` icons), review text, and treatment type.
2. THE Testimonials Carousel SHALL support auto-play advancing one testimonial every 5 seconds.
3. THE Testimonials Carousel SHALL provide previous / next navigation buttons accessible by keyboard.
4. WHEN auto-play is active and the visitor focuses on or hovers the carousel, THE Testimonials Carousel SHALL pause auto-play.
5. WHEN the visitor clicks a navigation button, THE Testimonials Carousel SHALL animate the transition between testimonials using Framer Motion `AnimatePresence`.
6. WHERE the visitor has enabled Reduced Motion, THE Testimonials Carousel SHALL disable slide animations and show instant transitions.

---

### Requirement 13 — Before / After Gallery

**User Story:** As a prospective patient, I want to view real treatment outcome photographs, so that I can set expectations and be inspired to book.

#### Acceptance Criteria

1. THE Gallery SHALL be available at the `/gallery` route and SHALL contain a grid of before/after image pairs.
2. THE Gallery SHALL display at minimum 8 before/after image pairs, each labelled with the treatment type.
3. WHEN a visitor clicks a gallery image, THE Website SHALL open the Lightbox displaying the full-size image with a close button, previous, and next navigation.
4. WHEN the Lightbox is open, THE Website SHALL trap keyboard focus within the Lightbox and enable closure via the `Escape` key.
5. THE Gallery grid SHALL use `next/image` with `loading="lazy"` for all images.
6. WHEN the gallery images enter the viewport, THE Website SHALL animate them with a staggered fade-in using Framer Motion.
7. THE Lightbox SHALL be accessible with ARIA `role="dialog"`, `aria-modal="true"`, and a descriptive `aria-label`.

---

### Requirement 14 — FAQ Accordion

**User Story:** As a visitor with questions about treatment, I want quick answers, so that I can decide whether to book an appointment.

#### Acceptance Criteria

1. THE FAQ Accordion SHALL be available on the `/faq` route and as a section on the homepage.
2. THE FAQ Accordion SHALL contain at minimum 10 question-and-answer pairs relevant to orthodontics and general dental care.
3. WHEN a visitor clicks a question, THE Website SHALL expand the answer panel with a smooth height animation using Framer Motion `AnimatePresence`.
4. WHEN a question panel is expanded and the visitor clicks the same question, THE Website SHALL collapse the panel.
5. THE FAQ Accordion SHALL permit only one panel to be expanded at a time.
6. THE FAQ Accordion SHALL be keyboard navigable using `Enter` / `Space` to toggle and arrow keys to move between questions.
7. EACH FAQ item SHALL use `<details>` / `<summary>` semantics or ARIA `role="button"`, `aria-expanded`, and `aria-controls` attributes for accessibility.

---

### Requirement 15 — Contact Form and Map

**User Story:** As a prospective patient, I want to submit an enquiry and find the clinic's location, so that I can book an appointment and know how to get there.

#### Acceptance Criteria

1. THE Contact Form SHALL be available at the `/contact` route.
2. THE Contact Form SHALL collect: full name (required), phone number (required, 10-digit Indian mobile format validated), email address (required, RFC 5322 format validated), preferred appointment date (optional, date picker), service of interest (optional, dropdown listing all 16 services), and message (optional, ≤ 500 characters).
3. WHEN the visitor submits the Contact Form, THE Website SHALL send an HTTP POST request to the `/api/contact` API Route.
4. THE API Route SHALL validate all required fields server-side and SHALL return HTTP 422 with error details if validation fails.
5. WHEN all required fields are valid, THE API Route SHALL send a notification email to the clinic using SMTP credentials from environment variables (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CLINIC_EMAIL`).
6. WHEN email delivery succeeds, THE API Route SHALL return HTTP 200 with a success message, and THE Contact Form SHALL display a success confirmation message to the visitor.
7. IF email delivery fails, THEN THE API Route SHALL return HTTP 500, and THE Contact Form SHALL display a user-friendly error message advising the visitor to call the clinic.
8. THE Contact Form SHALL display inline validation errors adjacent to each field before submission.
9. WHILE the Contact Form submission is in progress, THE Website SHALL display a loading spinner on the submit button and disable the button.
10. THE Contact Page SHALL embed a Google Maps `<iframe>` showing the clinic's location in Pune.
11. THE Contact Page SHALL display the clinic's phone number, WhatsApp number, email address, and physical address in a structured layout.

---

### Requirement 16 — Footer

**User Story:** As a visitor at the bottom of any page, I want quick access to key links and clinic information, so that I can navigate further without scrolling back to the top.

#### Acceptance Criteria

1. THE Footer SHALL be present on all pages and routes.
2. THE Footer SHALL display: clinic name and logo, tagline, contact details (phone, email, address), navigation links to all main routes, links to social media profiles (Instagram, Facebook, Google Maps), and a copyright notice with the current year.
3. THE Footer SHALL include a link to a Privacy Policy page or section.
4. WHEN the visitor clicks a social media link, THE Website SHALL open it in a new browser tab with `rel="noopener noreferrer"`.
5. THE Footer SHALL render the current year dynamically using JavaScript `new Date().getFullYear()`.

---

### Requirement 17 — Mobile Sticky Action Bar

**User Story:** As a visitor browsing on a mobile device, I want one-tap access to call, WhatsApp, and book appointment, so that I can take action immediately without hunting for contact details.

#### Acceptance Criteria

1. THE Mobile Action Bar SHALL be visible only when the viewport width is less than 768 px.
2. THE Mobile Action Bar SHALL be fixed to the bottom of the viewport.
3. THE Mobile Action Bar SHALL contain three action buttons: "Call" (tel: link), "WhatsApp" (wa.me link), and "Book" (links to `/contact`).
4. EACH action button SHALL display a Lucide React icon and a short label.
5. THE Mobile Action Bar SHALL not overlap or obscure the Footer content when the visitor scrolls to the bottom of the page.

---

### Requirement 18 — 3D Scene System

**User Story:** As a developer and visitor, I want 3D visuals to load efficiently and degrade gracefully, so that the site performs well across devices.

#### Acceptance Criteria

1. THE Website SHALL load all Three.js / React Three Fiber components via Dynamic Import (`next/dynamic` with `ssr: false`).
2. THE Website SHALL store all GLTF / GLB model files under `/public/models/` using CC0-licensed placeholder models.
3. WHEN a GLTF Model is loading, THE Website SHALL display a loading skeleton or spinner.
4. IF the browser does not support WebGL, THEN THE Website SHALL display the Graceful Fallback (static image or SVG) in place of every 3D Scene.
5. THE 3D Scene SHALL implement an error boundary (`React.ErrorBoundary`) that catches render errors and renders the Graceful Fallback.
6. WHERE the visitor has enabled Reduced Motion, THE 3D Scene SHALL disable continuous rotation and auto-animation.

---

### Requirement 19 — SEO and Structured Data

**User Story:** As the clinic owner, I want the website to rank well on search engines and appear with rich results, so that new patients can find the clinic easily.

#### Acceptance Criteria

1. THE Website SHALL include a `<script type="application/ld+json">` block on every page containing LocalBusiness structured data with the `Dentist` `@type`, clinic name, address, telephone, URL, and `openingHoursSpecification`.
2. THE Website SHALL include Open Graph `<meta>` tags on every page: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`.
3. THE Website SHALL include a `sitemap.xml` at the root, listing all public routes with `<loc>` and `<lastmod>` entries.
4. THE Website SHALL include a `robots.txt` at the root permitting all crawlers and referencing the sitemap URL.
5. THE Website SHALL use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) throughout.
6. EACH page SHALL have a unique `<title>` and `<meta name="description">` tag generated via Next.js `generateMetadata`.
7. EACH image rendered via `next/image` SHALL include a meaningful non-empty `alt` attribute.

---

### Requirement 20 — Accessibility

**User Story:** As a visitor with a disability, I want to navigate and use the website effectively, so that I am not excluded from accessing dental care information.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse Accessibility score of ≥ 90 on all primary pages.
2. THE Website SHALL ensure all interactive elements have a visible focus indicator with a contrast ratio ≥ 3:1 against the surrounding background.
3. THE Website SHALL use ARIA landmark roles (`role="banner"`, `role="navigation"`, `role="main"`, `role="contentinfo"`) where native semantic equivalents are absent.
4. WHEN a modal or Lightbox is open, THE Website SHALL trap keyboard focus inside the dialog and restore focus to the triggering element on close.
5. THE Website SHALL support full keyboard navigation: all interactive elements reachable by `Tab`/`Shift+Tab`, actionable by `Enter`/`Space`.
6. WHERE the visitor has enabled Reduced Motion (`prefers-reduced-motion: reduce`), THE Website SHALL replace or disable all non-essential animations across all components.
7. THE Website SHALL maintain a colour contrast ratio of ≥ 4.5:1 for normal text and ≥ 3:1 for large text throughout.

---

### Requirement 21 — Performance

**User Story:** As a visitor on a mid-range device or slower network, I want the site to load quickly, so that I do not abandon it before seeing the content.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse Performance score of ≥ 80 on the homepage on a simulated 4G connection.
2. THE Website SHALL use `next/image` for all photographs and decorative raster images, enabling automatic format optimisation (WebP/AVIF) and lazy loading.
3. THE Website SHALL load all Three.js / React Three Fiber components via Dynamic Import to prevent them from blocking the initial page render.
4. THE Website SHALL not import any 3D model or heavy asset in the synchronous module graph.
5. THE Website SHALL use Next.js route-based code splitting so that each page bundle contains only the code required for that page.

---

### Requirement 22 — Custom 404 Page

**User Story:** As a visitor who reaches a broken or non-existent URL, I want a friendly error page, so that I can find my way back to useful content.

#### Acceptance Criteria

1. THE Website SHALL render a custom 404 page at the Next.js `not-found` route.
2. THE 404 Page SHALL display a friendly message, a dental-themed illustration or icon, and navigation links back to the homepage and `/contact`.
3. THE 404 Page SHALL maintain the same Navbar and Footer as all other pages.

---

### Requirement 23 — Environment Configuration and Deployment

**User Story:** As a developer deploying the site, I want clear environment variable guidance and a Vercel-ready configuration, so that I can deploy without guessing.

#### Acceptance Criteria

1. THE Website repository SHALL include a `.env.example` file listing all required environment variable keys: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CLINIC_EMAIL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`.
2. THE API Route SHALL read SMTP credentials exclusively from environment variables and SHALL NOT hard-code any credentials.
3. THE Website repository SHALL include a `README.md` with setup instructions, required environment variables, local development commands, and deployment steps.
4. THE Website SHALL be deployable to Vercel by connecting the repository with no additional build configuration beyond setting environment variables.
5. THE Website SHALL include a `next.config.js` (or `next.config.ts`) that configures `images.domains` or `images.remotePatterns` for any external image sources.

---

### Requirement 24 — Dedicated Route Pages

**User Story:** As a visitor seeking deep information, I want dedicated pages for About, Doctor, Services, Gallery, FAQ, and Contact, so that I can explore each topic fully.

#### Acceptance Criteria

1. THE Website SHALL implement the following routes: `/`, `/about`, `/doctor`, `/services`, `/services/[slug]`, `/gallery`, `/faq`, `/contact`.
2. EACH route page SHALL include the Navbar and Footer components.
3. THE `/about` page SHALL contain full clinic history, philosophy, team, and facilities information.
4. THE `/doctor` page SHALL contain the full profile of Dr. Priyanka Saokar Navale including qualifications, publications if any, and a patient message.
5. THE `/services` page SHALL display the complete Services Grid with links to all `/services/[slug]` pages.
6. THE `/gallery` page SHALL contain the full Gallery with the Lightbox feature.
7. THE `/faq` page SHALL contain the full FAQ Accordion.
8. THE `/contact` page SHALL contain the Contact Form, Google Map embed, and clinic contact details.
9. EACH page SHALL export a `generateMetadata` function providing a unique title and description per Next.js App Router conventions.
