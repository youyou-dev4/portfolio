# Younes Matoub — Developer Portfolio

A modern, responsive personal portfolio built with **React + Vite**, featuring a dark/light theme toggle, FR/EN language switching, and a clean component architecture with separated styles and translation files.

---

## Features

- **Dark / Light mode** — smooth transition, persists via React state
- **FR / EN language switch** — fully translated UI using dedicated translation files
- **Responsive design** — mobile-first, adapts from 320px to 4K
- **Project showcase** — 5 projects with image, tech stack, highlights and GitHub links
- **Image fallback** — placeholder with colored gradient + emoji if project image is missing
- **Smooth scroll navigation** — sticky navbar with blur effect on scroll
- **Downloadable CV** — direct PDF download from the navbar and contact section

---

## Project Structure

```
portfolio/
├── public/
│   ├── cv.pdf                  # Your resume (PDF)
│   ├── photo-profil.jpg        # Your profile photo
│   └── projects/
│       ├── tmdb.jpg
│       ├── covoiturage.jpg
│       ├── velos.jpg
│       ├── autoecole.jpg
│       └── amazighe.jpg
└── src/
    ├── Portfolio.jsx           # Main component + ProjectCard sub-component
    ├── portfolio.css           # All styles (CSS variables, animations, responsive)
    ├── fr.js                   # French translations & project data
    ├── en.js                   # English translations & project data
    ├── App.jsx                 # App entry — simply renders <Portfolio />
    └── main.jsx                # Vite entry point
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/youyou-dev4/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite |
| Styling | Plain CSS with CSS custom properties |
| Icons | Lucide React |
| Fonts | Syne (display) + Space Mono (code) via Google Fonts |
| Deployment | Vercel / Netlify / GitHub Pages |

---

## Key Files Explained

| File | Role |
|---|---|
| `Portfolio.jsx` | All layout logic, state (theme/lang/scroll), renders all sections |
| `portfolio.css` | Every CSS rule — variables, animations, components, responsive breakpoints |
| `fr.js` | French copy: nav labels, hero text, all 5 projects, skills, education, contact |
| `en.js` | English copy: same structure as `fr.js` |

---

## Contact

**Younes Matoub** — L3 Computer Science, University of Lille

- [matoub.youness@gmail.com](mailto:matoub.youness@gmail.com)
- [linkedin.com/in/younes-matoub](https://linkedin.com/in/younes-matoub)
- [github.com/youyou-dev4](https://github.com/youyou-dev4)

---

*Looking for a +3-month internship from April 2026, followed by a work-study Master's degree.*