# Ulivu Foundation

Website for Ulivu Foundation — a Centre for Symbiocene working across Bengaluru
and Shivamogga on conservation, research, and community-rooted environmental
action.

Built with React (Vite), Tailwind CSS v4, Framer Motion, and Lenis for smooth
scrolling.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Structure

- `src/components/` — one component per section (Hero, About, Programs, Campaign, Gallery, Partners, Involved, Contact, Footer, plus Navbar/Preloader/scroll helpers)
- `src/data/content.js` — copy and data arrays (programs, stats, partners, campaign) in one place for easy editing
- `src/assets/images/` — photography: real Ulivu event photos (Instagram) plus licensed nature photography (Unsplash / Wikimedia Commons) used for section backdrops
- `_legacy-static/` — the previous plain HTML/CSS/JS version of the site, kept for reference only; not part of the build

## Notes for the next edit

- Section backgrounds are gradients declared per-section (see each component's inline `style`) tuned so one section's bottom colour matches the next section's top colour — that's what makes the page feel seamless. If you reorder sections or change a colour, check the neighbouring seam.
- The contact form (`Contact.jsx`) is front-end only — wire it to a service like Formspree, or a real backend, before relying on it to receive messages.
