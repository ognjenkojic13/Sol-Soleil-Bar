<img width="1677" height="947" alt="Screenshot 2026-04-02 at 19 11 00" src="https://github.com/user-attachments/assets/38786b3c-c858-4952-beb9-36dc22f035d4" />

# Sel & Soleil — Beach Bar Landing Page

A fully custom-designed, animated landing page for **Sel & Soleil**, a luxury beach bar located in Antibes, France. Built from scratch with a strong focus on visual identity, motion design, and polished UX — no templates, no UI kits.

**Live demo:** [ognjenkojic13.github.io/Sol-Soleil-Bar](https://ognjenkojic13.github.io/Sol-Soleil-Bar/)

---

## Overview

This project was designed and built entirely by hand — from layout and typography to animations and color palette. The goal was to create a high-end, immersive web experience that feels like the real website of a premium French Riviera bar, with fluid scroll, character-level animations, and a strong visual atmosphere.

---

## Features

- **Full-screen hero** with wave-in character animation on page load
- **Animated stamp** ("open every day") styled in French flag colors with continuous GSAP rotation loop
- **Scroll-triggered text animations** on all section headings
- **Interactive menu** with 7 categories and animated tab switching — horizontal scroll on mobile
- **Image slideshow** with auto-play and manual dot navigation
- **French flag hover animation** — letters on the logo reveal in blue, white, and red from left to right with staggered CSS transitions
- **"Book a table" section** with contact details and full-bleed background
- **"Open mostly" section** with atmospheric background image
- **Footer** with character-split logo and matching French flag hover animation
- **Fully responsive layout** — adapted for desktop and mobile with custom breakpoints
- **Google Analytics** integration for visitor tracking
- **GSAP ScrollTrigger** for all scroll-based reveals
- **Deployed via GitHub Pages** with Vite production build

---

## Design Decisions

- **Color palette** — Deep navy `#111184`, electric blue `#3d7bf6`, warm grey `#e4e4e4`, golden hover `#F5C430`, French flag red `#EF4135` and blue `#002395`
- **Typography** — Bebas Neue for display headings, Barlow Condensed for body and menu — both sourced from Google Fonts
- **French identity** — The bar's name, address (Antibes), Instagram handle, tricolore stamp, and hover animations all reinforce the French Riviera concept
- **No UI framework** — Every component, layout, and animation was written from scratch

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Animation | GSAP + ScrollTrigger |
| Styling | Custom CSS (no Tailwind, no CSS framework) |
| Fonts | Google Fonts (Bebas Neue, Barlow Condensed) |
| Analytics | Google Analytics (GA4) |
| Deployment | GitHub Pages |
| Images | AI-generated (Google Gemini) |

---

## Project Structure

```
src/
  App.jsx          — all components and data
  styles.css       — all custom styles and animations
  main.jsx         — React entry point
public/
  images/
    hero.png       — hero section background
    footer.png     — footer background
    jobs.png       — book a table section background
    hours.png      — open mostly section background
    gallery/       — gallery section images
    slideshow/     — slideshow images
    snacks/        — snacks menu image
```

---

## Local Setup

```bash
git clone https://github.com/ognjenkojic13/Sol-Soleil-Bar.git
cd Sol-Soleil-Bar
npm install
npm run dev
```

---

## Deployment

Built with Vite and deployed to GitHub Pages from the `/docs` folder on the `main` branch.

```bash
npm run build
git add .
git commit -m "deploy"
git push origin main
```

---

## Author

Designed and developed by **Ognjen Kojic**

---
