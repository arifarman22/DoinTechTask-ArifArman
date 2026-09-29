# ByteSpace — Modern Tech Education & Course Platform

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Frontend Assessment Project for **Jr. Software Engineer (Frontend)**  
> **Candidate Tracking ID**: `58baefd3-b9a7-45a5-a820-226111ff73ee`  
> **GitHub Repository**: [arifarman22/DoinTechTask-ArifArman](https://github.com/arifarman22/DoinTechTask-ArifArman)  
> **Figma Design Reference**: [ByteSpace New Check website](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)  
> **Pull Request**: [View PR on GitHub](https://github.com/arifarman22/DoinTechTask-ArifArman/pull/new/feature/bytespace-redesign)

---

## 🌟 Executive Overview

**ByteSpace** is a high-performance, modern online learning platform interface engineered from the ground up to match the Figma design system down to the pixel. Built with modern React 19, Vite, and modular CSS custom properties, it delivers rich aesthetics, glassmorphism blur effects, micro-animations, theme toggling, and seamless responsive design across all devices.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Core Framework** | **React 19** (`v19.2.8`) | Modern component architecture, React hooks (`useState`, `useEffect`, `useMemo`, `useCallback`) |
| **Build Tool & Bundler** | **Vite 8** (`v8.3.0`) | Lightning-fast development server with instant Hot Module Replacement (HMR) and optimized rollup production bundles |
| **Styling** | **Modular Vanilla CSS3** | Component-scoped CSS with CSS Custom Properties (tokens), CSS Grid, Flexbox, glassmorphism (`backdrop-filter`), keyframe animations, and blueprint overlay grids |
| **Typography** | **Google Fonts** | **Outfit** (hero titles, headings, badges) and **Inter** (body copy, form labels, and UI controls) |
| **Iconography** | **Lucide React** (`v1.48.0`) & Custom SVGs | Clean, accessible vector icons plus custom inline SVG geometry for Figma 3D ornaments and brand logos (Google, Meta, Spotify, Stripe, Apple) |
| **State & Persistence** | **React Context + LocalStorage** | Zero-dependency reactive state management with client-side persistence for auth session, dark/light theme, and wishlist |
| **Linter & Code Quality** | **Oxlint** (`v1.81.0`) | High-speed static analysis and linting |
| **Deployment** | **Vercel** | Production deployment configuration with [`vercel.json`](./vercel.json) client-side rewrite rules |

---

## ✨ Features Implemented

### 1. Pixel-Perfect Figma Landing Page
- **Persian Blue Blueprint Grid Header & Navbar**:
  - Exact `#003BE2` brand background with 40px subtle blueprint grid
  - 3-part layout: Left brand emblem & wordmark, center pill menu with active state indicator, and right action pills (Login, Get Started)
  - Responsive mobile drawer menu with smooth open/close transitions
  - User session state indicator with avatar, display name, and quick logout
- **Figma Hero Section (`Hero_Frame`)**:
  - Eyebrow pill badge: *"Next-Gen Tech Learning Platform 2026"*
  - High-impact typography with brand gradient text and live category search pill
  - **Figma Visual Cutout Stage**:
    - Neon lime (`#D4FF00`) backdrop circle with ambient glow
    - Transparent student cutout photograph
    - Floating animated stat cards (*500+ Verified Courses*, *96% Career Placement*)
    - Custom Figma 3D geometric ornaments (floating green prism, orange cylinder, purple torus, 3D stars)
- **Trusted Partners Bar**:
  - Partner showcase featuring Google, Microsoft, Amazon, Meta, Spotify, and Stripe
- **Popular Categories Explorer**:
  - 8 distinct tech discipline paths (Web Development, UI/UX, Data Science & AI, Cloud & DevOps, Mobile App Dev, Cyber Security, Growth Marketing, Blockchain)
  - Color-coded icons, course count badges, and direct filter navigation
- **Featured Courses & Programs**:
  - Filter tabs (*All Courses*, *Web Development*, *UI/UX*, *Data Science*, *Cloud*)
  - Comprehensive course cards featuring bestseller badges, ratings, lesson counts, duration, and prices
  - Interactive Wishlist heart toggle with instant toast notification
  - Direct "Enroll Now" and "Quick Preview" modal triggers
- **Why Choose ByteSpace**:
  - 4 key pillars: Industry-Led Curriculum, Real Production Projects, 1-on-1 Code Reviews, and Verified Certificates
- **How It Works (4-Step Learning Roadmap)**:
  - Step-by-step progression from track selection to career placement
- **Persian Blue Creator Stripe Banner**:
  - Creator callout with key benefits (85% revenue share, sandbox tooling) and CTA
- **Figma Community Testimonials**:
  - Authenticated student reviews with star ratings, avatars, and company roles
- **Figma Footer Matching Screenshot**:
  - Persian Blue blueprint grid canvas with 3D star ornament, brand mission, learning tracks, resources, company links, and live newsletter subscription form with validation

### 2. Figma Split-Screen Authentication Views
- **Visual Left Panel (`AuthVisualPanel`)**:
  - Persian Blue (`#003BE2`) blueprint canvas with 3D geometric ornaments
  - Circular avatar stack with glowing badges
  - Floating course pill cards (*Fullstack Development*, *UI/UX Design Masterclass*)
- **Login View (`#login`)**:
  - Floating white card with rounded borders (32px radius) and elevation shadow
  - Email and password inputs with custom toggle for password visibility
  - Neon lime pill button: *"Log in"*
  - Social OAuth buttons (Google, Apple, Facebook)
- **Signup View (`#signup`)**:
  - Floating white card with Name, Email, Password, and Confirm Password fields
  - Neon lime pill button: *"Sign up"*
  - Seamless toggle link to switch back to Login

### 3. Bonus Pages & Extra Features
- **Dedicated Courses Catalog (`#courses`)**:
  - Real-time text search across course titles, topics, and instructors
  - Multi-attribute filtering (Category, Difficulty Level, Sorting by price/rating)
  - "My Courses" and "Wishlist" filter views with empty-state illustrations
- **Course Detail Modal (`CourseDetailModal`)**:
  - Complete curriculum syllabus checklist
  - Video trailer preview placeholder with play button
  - Course instructor bio and credentials
  - Quick enrollment and wishlist toggle
- **Theme Switcher**:
  - Dark Mode and Light Mode support with tailored HSL/hex palettes saved to `localStorage`
- **Global Toast Notification System**:
  - Instant visual feedback for enrollment, wishlist updates, newsletter subscriptions, and authentication actions

---

## 📂 Project Architecture

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx          # Sticky Persian Blue header & responsive drawer
│   │   ├── Footer.jsx          # Figma Persian Blue footer & newsletter
│   │   ├── BrandIcons.jsx      # Social, provider & Figma 3D SVG ornaments
│   │   └── Toast.jsx           # Global notification toast
│   ├── home/
│   │   ├── Hero.jsx            # Figma Hero frame with lime backdrop & cutout
│   │   ├── PartnerLogos.jsx    # Company logos marquee
│   │   ├── Categories.jsx      # Learning path cards
│   │   ├── FeaturedCourses.jsx # Course grid with category tabs
│   │   ├── CourseCard.jsx      # Reusable course card
│   │   ├── WhyUs.jsx           # Value proposition
│   │   ├── HowItWorks.jsx      # 4-step roadmap
│   │   ├── InstructorBanner.jsx# Creator recruitment banner
│   │   ├── Testimonials.jsx    # Student success reviews
│   │   └── CTASection.jsx      # Bottom conversion banner
│   ├── courses/
│   │   ├── CourseDetailModal.jsx # Preview & syllabus modal
│   │   └── CoursesView.jsx     # Full catalog with multi-filters
│   └── auth/
│       ├── AuthVisualPanel.jsx # Left Persian Blue 3D visual showcase
│       ├── LoginPage.jsx       # Figma white card login view
│       └── SignupPage.jsx      # Figma white card signup view
├── context/
│   └── AppContext.jsx          # Global state (auth, navigation, theme, wishlist)
├── data/
│   └── coursesData.js          # Course data, categories, and reviews
├── styles/
│   ├── index.css               # Design tokens, reset, typography, utilities
│   ├── navbar.css              # Header & drawer styles
│   ├── hero.css                # Figma hero frame, lime backdrop & 3D ornaments
│   ├── categories.css          # Categories grid styles
│   ├── courses.css             # Course cards styles
│   ├── sections.css            # Content section styles & blueprint backgrounds
│   ├── modal.css               # Course modal preview styles
│   ├── auth.css                # Split-screen auth layout & white card forms
│   └── footer.css              # Footer styles
├── App.jsx                     # Root application view coordinator
└── main.jsx                    # Application entrypoint
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `18.x` or higher
- npm `9.x` or higher

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arifarman22/DoinTechTask-ArifArman.git
   cd DoinTechTask-ArifArman
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🌿 Git Branching Workflow

As instructed in the assessment criteria, development is carried out on a dedicated branch:
- **Default Branch**: `main`
- **Feature Branch**: `feature/bytespace-redesign`
- **Pull Request**: Created from `feature/bytespace-redesign` into `main` for code review:
  👉 [Create / View Pull Request](https://github.com/arifarman22/DoinTechTask-ArifArman/pull/new/feature/bytespace-redesign)

---

## 📄 License

This project is licensed under the MIT License.
