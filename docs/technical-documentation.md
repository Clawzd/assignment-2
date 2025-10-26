# Technical Documentation

## Overview
Portfolio built with Vite + React + Tailwind v4.
Key features: animated space background (dark mode), theme toggle with persistence, projects filtering, contact form.

## Build & Run
npm install
npm run dev
# Production
npm run build
npm run preview

Node ≥ 18 recommended.

## Theme Architecture
- Truth: localStorage("theme") (default: dark)
- Layout.jsx:
  - Applies body styles and data-theme
  - Dispatches app-theme-change custom event with the theme value
- useTheme() (in src/utils/useTheme.js) subscribes and returns { theme, isDark }

Reasoning: Simple, dependency-free global sync across routes without a state library.

## Animated Background
- Rendered only in dark mode.
- CSS keyframes:
  - twinkle (stars)
  - shooting-star
  - nebula-float
- Stars and durations are randomized; shooting stars use staggered delays.

Performance tips: Limit star count (~100), avoid heavy shadows, prefer transforms.

## Pages

### Landing
- Time-based greeting + optional personalized name (localStorage: portfolioUserName)
- Profile circle with rotating border
- Centered bio paragraph
- Two circular CTAs to /projects?category=recent and /projects?category=upcoming

### Projects
- Category via query param (recent|upcoming)
- Data from src/data/projectsData.js
- Filtering:
  - Search title/description (case-insensitive)
  - Sort by date/title
  - Tag chips (toggle)
- Read-only cards for visitors

### Contact
- Name, email, message (basic validation)
- Stores submissions in localStorage: messages
- Success banner with animation

## Data & Assets
- src/data/projectsData.js contains project entries.
- Local images are imported at the top and referenced via variables, e.g.:
  import flyingImg from "@/assets/image.png";

## UI Components
- components/ui: minimal primitives (Button, Input, Textarea, Badge, Select).
- Tailwind utility classes, variants for both themes.

## Styling
- Tailwind v4 via:
  @import "tailwindcss";
- Global helpers in src/index.css:
  - .gradient-purple, .glow-purple, .tech-grid
  - Optional global scale: html { transform: scale(1.25); transform-origin: top center; }

## Accessibility
- Semantic labels and alt attributes
- Keyboard focus states
- High-contrast colors for dark/light, including native <select>

## Known Limitations / Next Steps
- Contact form uses localStorage (no backend)
- No admin UI for editing projects (intentional for now)
- Consider deployment to Vercel/Netlify and adding SEO meta tags
