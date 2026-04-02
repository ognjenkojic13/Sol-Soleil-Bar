# Sel & Soleil — Beach Bar Landing Page

A fully custom-designed, animated landing page for **Sel & Soleil**, a fictional luxury beach bar located in Antibes, France. Built from scratch with a strong focus on visual identity, motion design, and polished UX — no templates, no UI kits.

**Live demo:** [ognjenkojic13.github.io/Sol-Soleil-Bar](https://ognjenkojic13.github.io/Sol-Soleil-Bar/)

---

## Overview

This project was designed and built entirely by hand — from layout and typography to animations and color palette. The goal was to create a high-end, immersive web experience that feels like the real website of a premium French Riviera bar, with fluid scroll, character-level animations, and a strong visual atmosphere.

---

## Features

- **Full-screen hero** with wave-in character animation on page load
- **Animated stamp** with continuous rotation loop (GSAP)
- **Scroll-triggered text animations** on all section headings
- **Interactive menu** with 8 categories and animated tab switching
- **Image slideshow** with auto-play and manual dot navigation
- **"Book a table" section** with full-bleed background image
- **"Open mostly" section** with atmospheric background
- **Custom French flag color animation** on hover — letters reveal left to right with staggered delay
- **Footer** with character-split logo and matching hover animation
- **Responsive layout** across desktop and mobile
- **GSAP ScrollTrigger** for all scroll-based reveals
- **Deployed via GitHub Pages** with Vite production build

---

## Design Decisions

- **Color palette** — Deep navy `#111184`, electric blue `#3d7bf6`, warm grey `#e4e4e4`, and golden hover `#F5C430`
- **Typography** — Bebas Neue for display headings, Barlow Condensed for body and menu — both sourced from Google Fonts
- **French identity** — The bar's name, address (Antibes), Instagram handle, and the tricolore hover animation all reinforce the French Riviera concept
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
| Deployment | GitHub Pages |
| Images | AI-generated (Google Gemini) |

---

## Project Structure

```
src/
  App.jsx        — all components and data
  styles.css     — all custom styles and animations
  main.jsx       — React entry point
public/
  hero.png       — hero section background
  footer.png     — footer background
  jobs.png       — book a table section background
  hours.png      — open mostly section background
  gallery*.png   — gallery images
  menu/          — slideshow images
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

> "Sun, salt & good wine."
