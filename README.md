# ByteSpace — Modern Tech Education & Course Platform

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Frontend Assessment Project for **Jr. Software Engineer (Frontend)**  
> **Candidate Tracking ID**: `58baefd3-b9a7-45a5-a820-226111ff73ee`  
> **Figma Design Reference**: [ByteSpace New Check website](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)  
> **Live Deployment**: *[Deploy to Vercel]*

---

## 🌟 Executive Overview

**ByteSpace** is a high-performance, modern online learning platform interface engineered from the ground up to match the Figma design system down to the pixel. Built with modern React 19, Vite, and modular CSS custom properties, it delivers rich aesthetics, glassmorphism blur effects, micro-animations, theme toggling, and seamless responsive design across all devices.

---

## ✨ Features Implemented

### 1. Landing Page (Required)
- **Sticky Glassmorphism Header**:
  - Custom ByteSpace brand logo & emblem
  - Navigation links with active status indicators
  - Live search input with instant query routing
  - Light/Dark mode theme switch toggle with local persistence
  - Interactive Wishlist indicator with dynamic badge count
  - Responsive mobile drawer menu with smooth open/close transitions
- **Hero Section**:
  - Eyebrow badge: *"Next-Gen Tech Learning Platform 2026"*
  - High-impact typography with brand gradient text
  - Live search bar with category selector dropdown
  - Social proof with student avatar stack, star ratings, and metrics
  - Floating animated stat cards (*500+ Verified Courses*, *96% Career Placement*)
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
- **Instructor Partner Banner**:
  - Creator callout with key benefits (85% revenue share, sandbox tooling) and CTA
- **Community Testimonials**:
  - Authenticated student reviews with star ratings, avatars, and company roles
- **Pricing & Subscription Plans**:
  - Monthly / Annual billing toggle with animated switch and *"Save 20%"* badge
  - Starter (Free), Pro Learner (Most Popular), and Enterprise tiers
- **Frequently Asked Questions (FAQ)**:
  - Accordion interaction with animated chevrons
- **Bottom Call-to-Action (CTA)**:
  - High-converting conversion banner with instant enrollment buttons
- **Comprehensive Footer**:
  - Brand mission, learning tracks, resources, company links, and live newsletter subscription form with validation

### 2. Bonus Pages & Extra Features (Extra Credit)
- **Login Page (`#login`)**:
  - Clean card layout with Google and GitHub OAuth options
  - Email/password validation, show/hide password toggle, and remember-me checkbox
- **Signup Page (`#signup`)**:
  - Learner vs. Instructor role switcher tabs
  - Full name, email, password strength, and Terms of Service consent
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
  - Feedback for enrollment, wishlist updates, newsletter subscriptions, and authentication actions

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 (Hooks, Context API, Components) |
| **Build Tool** | Vite 8.3 (Blazing fast HMR and sub-second builds) |
| **Styling** | Vanilla CSS with Design Tokens & CSS Custom Properties |
| **Typography** | Plus Jakarta Sans & Inter (Google Fonts) |
| **Iconography** | Lucide React & Custom SVG Brand Icons |
| **Version Control**| Git with Feature Branching (`feature/bytespace-redesign`) |
| **Deployment** | Vercel (Production-ready static deployment) |

---

## 📂 Project Architecture

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx          # Sticky header & responsive menu
│   │   ├── Footer.jsx          # Footer & newsletter form
│   │   ├── BrandIcons.jsx      # Social & provider SVG icons
│   │   └── Toast.jsx           # Global notification toast
│   ├── home/
│   │   ├── Hero.jsx            # Hero section & search
│   │   ├── PartnerLogos.jsx    # Company logos marquee
│   │   ├── Categories.jsx      # Learning path cards
│   │   ├── FeaturedCourses.jsx # Course grid with tabs
│   │   ├── CourseCard.jsx      # Reusable course card
│   │   ├── WhyUs.jsx           # Value proposition
│   │   ├── HowItWorks.jsx      # 4-step roadmap
│   │   ├── InstructorBanner.jsx# Creator recruitment banner
│   │   ├── Testimonials.jsx    # Student success reviews
│   │   ├── Pricing.jsx         # Subscription tiers & toggle
│   │   ├── FAQ.jsx             # Expandable accordion
│   │   └── CTASection.jsx      # Bottom conversion banner
│   ├── courses/
│   │   ├── CourseDetailModal.jsx # Preview & syllabus modal
│   │   └── CoursesView.jsx     # Full catalog with multi-filters
│   └── auth/
│       ├── LoginPage.jsx       # Login view
│       └── SignupPage.jsx      # Registration view
├── context/
│   └── AppContext.jsx          # State, navigation, auth, theme, wishlist
├── data/
│   └── coursesData.js          # Structured course & review data
├── styles/
│   ├── index.css               # Design tokens, reset, typography
│   ├── navbar.css              # Header styles
│   ├── hero.css                # Hero section styles
│   ├── categories.css          # Categories grid styles
│   ├── courses.css             # Course cards styles
│   ├── sections.css            # Content section styles
│   ├── modal.css               # Course modal preview styles
│   ├── auth.css                # Auth card & form styles
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
   git clone <repository-url>
   cd "DoinTech Task"
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
- **Pull Request**: Created from `feature/bytespace-redesign` into `main` for code review.

---

## 📄 License

This project is licensed under the MIT License.
