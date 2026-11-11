# Svetozar Bozilovic, portfolio

Personal portfolio of a frontend developer with five years of experience in React and TypeScript. The site tells the story of my work: a video surveillance platform at Anteklab (Aylook), web pages at Zerox, freelance work, and the first steps at Laba Innovations and WebFax.

## What the site contains

- **Hero:** a short introduction with a live technology showcase.
- **Experience:** every job as a block, with a sticky timeline that follows the scroll. The Anteklab job is split into projects (the desktop app, the diagnostics dashboard, the warehouse view and other tools), each with text, facts, technology chips and media.
- **Education:** skills, courses and certificates.
- **Contact:** email, profile links and a validated contact form.
- **Details:** dark and light theme (saved in the browser), full-screen viewer for images and videos, draggable sliders, a mobile menu and reduced-motion support.

## Tech stack

| Area       | Choice                                                       |
| ---------- | ------------------------------------------------------------ |
| Framework  | React 19, functional components only                         |
| Language   | TypeScript                                                   |
| Build tool | Vite                                                         |
| Styling    | Tailwind CSS v3 with semantic color tokens for both themes   |
| Forms      | React Hook Form with Zod validation                          |
| Carousels  | Embla Carousel                                               |
| Quality    | Oxlint and Prettier (with the Tailwind class sorting plugin) |
| Fonts      | Archivo and IBM Plex Sans, self-hosted through Fontsource    |

## Code structure

```text
src/
  components/   Reusable UI pieces: Button, ChipList, Ledger, MediaCarousel, Lightbox...
  sections/     Page sections: Hero, Experience, Education, Contact
  data/         All page content as typed data (jobs, projects, skills, site settings)
  types/        TypeScript types for the content
  hooks/        Custom hooks: useTheme, useInView, useLocalStorage, useCountUp...
  context/      The shared full-screen viewer (LightboxProvider)
  services/     The contact message sender
  utils/        Small helpers
```

## About the media

The screenshots, videos, logos and certificates that appear on the live site are **not included in this repository**. Most of them show the Aylook platform and client environments, so they cannot be published in git repository. The `public/media/` folder is excluded through `.gitignore` on purpose.

Because of that, a local copy of the project runs correctly, but images and videos appear as missing. To see the finished site with all the material, visit the live version or ask me for a walkthrough.

## Run locally

```bash
npm install
npm run dev
```

## Contact

- Email: svetozar95@gmail.com
- LinkedIn: https://www.linkedin.com/in/svetozar-bo%C5%BEilovi%C4%87-668aa0129/
