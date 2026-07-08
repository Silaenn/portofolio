<div align="center">
  <br />
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build" />
  <br />
  <br />
</div>

# PORTO — Neubrutalism Portfolio Template

> A bold, single-page developer portfolio built with React 18, Sass, and GSAP.  
> Drop in your data, deploy, and ship.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Author](#author)

## About

PORTO is a production-ready portfolio template crafted for developers and designers who want a distinctive online presence without starting from scratch. Instead of another generic Bootstrap or Tailwind portfolio, PORTO leans into **neubrutalism** — hard shadows, thick borders, monospace typography, and a single bold accent color.

Everything is driven by a single config file (`src/config/portfolio.config.js`), so you can replace all content — name, bio, skills, projects, work history, testimonials — without touching a single component.

## Features

- **Neubrutalism design** — heavy shadows, 3px borders, monospace vibe, orange accent
- **Scroll-triggered animations** — every section reveals with a smooth GSAP fade-in
- **Full-page stagger** — hero timeline animates label, name, role, buttons, and photo in sequence
- **Filterable portfolio** — 24 projects across 4 categories with animated grid transitions
- **Terminal-style contact** — dual-pane layout with `$ contact_info` and `$ send_message` headers
- **Floating hamburger menu** — animated slide-in drawer with dark overlay
- **Mobile-first responsive** — single column on small screens, two columns on desktop
- **Local avatar** — no external CDN dependency; serves from `public/assets/`
- **SEO-ready** — Open Graph, Twitter Card, meta description, inline SVG favicon
- **Single-source config** — edit one file to update everything

## Tech Stack

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white&style=for-the-badge)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white&style=for-the-badge)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?logo=react&logoColor=white&style=for-the-badge)

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework (Create React App) |
| **Sass** | CSS preprocessor with variables & mixins |
| **CSS Modules** | Scoped component styles |
| **GSAP + ScrollTrigger** | Declarative scroll animations |
| **react-icons** | Skill icon grid (Simple Icons set) |
| **JetBrains Mono** | Primary typeface (Google Fonts) |

## Screenshots
<img width="1920" height="964" alt="Aaron-Hanson-Fullstack-Developer" src="https://github.com/user-attachments/assets/df72337b-ff0c-4cfb-a1be-9ede4f6dd670" />



## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
git clone https://github.com/Silaenn/portofolio.git
cd porto
npm install
```

## Usage

### Development

```bash
npm start
```

Opens at `http://localhost:3000`. Hot-reload is enabled.

### Production Build

```bash
npm run build
```

Outputs an optimized bundle to `build/`. Serve with any static host:

```bash
npx serve -s build
```

## Project Structure

```
src/
├── config/
│   └── portfolio.config.js      # single source of truth for all content
├── hooks/
│   └── useScrollReveal.js        # GSAP + Intersection fade-in hook
├── styles/
│   ├── _variables.scss           # colors, fonts, breakpoints, mixins
│   ├── _reset.scss               # CSS reset
│   ├── _typography.scss          # base type styles
│   └── global.scss               # imports all partials
├── components/
│   ├── Hero/                     # full-viewport intro with stagger animation
│   ├── About/                    # bio + avatar side-by-side
│   ├── Portfolio/                # filterable project grid (24 items)
│   ├── Works/                    # timeline work history
│   ├── Skills/                   # icon grid (12 skills)
│   ├── Testimonials/             # 6 testimonials with featured cards
│   ├── Contact/                  # terminal-style form + info
│   ├── Topbar/                   # fixed navbar with hamburger
│   ├── Menu/                     # slide-in drawer with dark overlay
│   └── shared/                   # BrutalButton, SectionTitle, Divider
└── App.jsx                       # root layout, hash-scroll fix
```

## Customization

To make this portfolio your own, edit **one file**:

```bash
src/config/portfolio.config.js
```

| Field | What it controls |
|-------|-----------------|
| `name` | Navbar logo, hero heading, page title |
| `role` | Hero subheading (accent color) |
| `tagline` | Hero description |
| `email` / `phone` | Contact info blocks |
| `avatar` | Path to your photo (put in `public/assets/`) |
| `about` | Bio paragraph |
| `skills` | Array of skill names + icon keys |
| `portfolio` | 24 projects (6 per category) |
| `works` | Work timeline entries |
| `testimonials` | Client / colleague quotes |
| `social` | GitHub / LinkedIn URLs |
| `accentColor` | Changes the accent color everywhere |

For deeper changes (layout, animations, color palette), edit the corresponding `.module.scss` or `.jsx` file in `src/components/`.

## Deployment

PORTO builds fully static HTML / CSS / JS. Deploy anywhere:

- **Vercel** — `vercel --prod` (zero config)
- **Netlify** — drag `build/` or connect Git repo
- **GitHub Pages** — set `"homepage"` in `package.json`, run `npm run build`, push to `gh-pages`
- **Any static host** — upload contents of `build/`

```bash
npm run build
# upload build/ to your server
```

## Author

**Project:** [Silaenn/portofolio](https://github.com/Silaenn/portofolio)  
**Template by:** Aaron Hanson (dummy data)

---

<p align="center">
  <sub>Built with React, Sass & GSAP. Licensed under MIT.</sub>
</p>
