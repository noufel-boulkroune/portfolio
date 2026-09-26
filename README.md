# Nawfel Boulkroune — Portfolio

Personal portfolio of a Flutter mobile developer: experience, shipped apps, and two case studies.

**Live:** [noufelboulkroune.vercel.app](https://noufelboulkroune.vercel.app/)

## What's inside

- **Experience** — scroll-driven timeline of six roles, most recent first.
- **Professional projects** — apps shipped to the Play Store and App Store, each with a screenshot carousel and a full-screen, zoomable viewer.
- **Case studies** — Sofa (phone, tablet and Android TV from one Flutter codebase) and Amaya AG (visit-report redesign, before and after).
- **Side projects** and a **contact form** (EmailJS).

## Stack

React 19 (Create React App) · Tailwind CSS · Framer Motion · Vercel Analytics

## Notes on performance

- Screenshots are served as resized WebP (the originals were ~120 MB; what the site loads is ~6 MB, and only on demand).
- Below-the-fold images load lazily; the hero photo is preloaded with high priority.
- Looping motion is kept to CSS transforms, and all animation respects `prefers-reduced-motion`.

## Running locally

```bash
npm install
npm start          # http://localhost:3000
npm test           # smoke tests
npm run build      # production build in ./build
```

The contact form needs three EmailJS keys in `.env`:

```
REACT_APP_EMAILJS_USER_ID=...
REACT_APP_EMAILJS_SERVICE_ID=...
REACT_APP_EMAILJS_TEMPLATE_ID=...
```

## Structure

```
src/
  components/        page sections (Hero, Experience, Projects, case studies, Contact)
  components/ui/     shared pieces (SectionHeader, WordReveal)
  hooks/             useSpotlight (cursor light on cards)
  data/              projectsData.js — project content lives here
public/
  images/            WebP screenshots, og-image.jpg for link previews
  Doc/               resume PDF
```
