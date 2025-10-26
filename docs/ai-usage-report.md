# AI Usage Report

This document explains how AI tools were used during development, what was edited, and what was learned.

## Tools Used
- ChatGPT (GPT-based assistant)
- Occasional inline suggestions (e.g., Copilot-like completions)
- MDN/React docs for API references (non-AI)

## Use Cases

1. Project scaffolding & structure
   - Prompt (summary): “Create a Vite + React portfolio with landing, projects, contact, theme toggle, Tailwind v4, framer-motion.”
   - AI Output: Suggested file layout and component roles.
   - Edits: Implemented an event-based theme bus (app-theme-change) with a useTheme hook, reorganized UI primitives, tuned styling to match the space theme.

2. Animated space background
   - Prompt (summary): “Starry background with twinkling stars, occasional shooting stars, and soft nebulas using CSS and React.”
   - AI Output: Base CSS animations and structure.
   - Edits: Randomized counts/durations/positions, dark-mode only, re-mount on theme change via key={theme}, performance tuning.

3. Projects page filters
   - Prompt (summary): “Add search, sort (date/title), and tag filters for projects.”
   - AI Output: Typical state + useMemo filtering/sorting.
   - Edits: Integrated with projectsData.js, query param category (recent|upcoming), a11y for <select>, dark-mode styles, removed “Add Project” for visitors.

4. Contact form
   - Prompt (summary): “Simple contact form with validation and success message.”
   - AI Output: Basic controlled form with validation idea.
   - Edits: Better validation messages, noValidate, success banner with Framer Motion, localStorage persistence.

5. Tailwind v4
   - Prompt (summary): “Use Tailwind v4 with @import "tailwindcss" and updated PostCSS.”
   - AI Output: Minimal steps.
   - Edits: Cleaned index.css, added utilities, ensured correct PostCSS plugin.

## Modifications & Understanding
- Rebuilt UI atoms (Button/Input/Badge/Select) to be predictable and theme-aware.
- Event-driven theme architecture to propagate instantly between routes.
- Dark-mode <select> styling with visible focus rings.
- Centralized project data and local image imports.
- Added accessibility: labels, alt text, focus states.

## Challenges
- Tailwind v4 PostCSS plugin change.
- Balancing animation richness vs performance.
- Keeping theme consistent across route changes.

## Ethics
- AI used for brainstorming and snippets, not as a replacement for understanding.
- All generated code was reviewed, adapted, and documented.
- No private data shared with AI tools.

## Learning Outcomes
- Event-based global theme propagation.
- Tailwind v4 setup & PostCSS configuration.
- Efficient filtering/sorting with useMemo.
- CSS animation performance considerations.
