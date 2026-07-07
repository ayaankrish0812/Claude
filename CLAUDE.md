# Sports Beyond Borders — Website

Static nonprofit website built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. Design direction: **Sport Editorial** — oversized condensed headlines, navy/blue brand palette with a warm orange action accent, marquee ticker, count-up stats, scroll reveals, inline SVG icons (no emojis).

## Preview
python -m http.server 8000
Then open http://localhost:8000

## File Structure (multi-page)
- `index.html` — home: hero + ticker, stats, story, values, program teasers, pull quote, CTA
- `programs.html` — Gear Drive, Community Courts (core), Athlete Pathways in detail
- `impact.html` — count-up stats, testimonial story cards, timeline (2015–2026), pull quote
- `donate.html` — ways to give (gear/volunteer/partner), accepted-gear lists, transparency bars
- `contact.html` — contact details + form with success message
- `styles.css` — full design system (tokens in `:root`) and responsive layout
- `script.js` — mobile menu, scroll progress bar, reveal observer, count-up stats, transparency bars, form handler

## Color Palette (CSS variables in :root)
- Navy 900 (page dark): #071120
- Navy 800: #0A1B2E
- Brand blue: #1E88E5 (`--blue`)
- Deep blue (buttons/links on light): #1257A8 (`--blue-deep`)
- Sky: #7CC3FF
- Ice background: #EAF3FC / paper: #F8FBFE
- Flame accent (Donate/primary CTA): #F97316 (`--flame`)
- Ink text: #0B1623 / muted: #46586C

## Fonts
- Headings: Barlow Condensed (uppercase, 500–800)
- Body: Barlow (400–700)
- Loaded from Google Fonts in each page head

## Shared Page Anatomy
1. Skip link + scroll progress bar
2. Sticky navy header — logo (SVG mark), nav links with orange underline on hover/current, flame "Get Involved" button, hamburger on mobile
3. Page content (home has full hero + ticker; subpages use `.page-hero`)
4. CTA banner (navy, court-line SVG background)
5. Footer — giant outlined "Beyond Borders" wordmark, 4 columns, copyright

## Signature Elements
- Court-line SVG backgrounds (`.hero-court`) on dark sections
- Marquee ticker (`.ticker`) — CSS animation, duplicated track, paused via reduced motion
- Count-up stats: `.count` elements with `data-target`, animated by IntersectionObserver
- Numbered program cards (01/02/03) with outlined numerals; cards invert to navy on hover
- Transparency bars on donate page: `.bar-fill` with `data-width`
- Reveal animation: `.reveal` + optional `--d` delay custom property

## JavaScript Behavior (script.js)
- Hamburger toggles `.open` on `#mobileMenu`, syncs `aria-expanded`, closes on outside click and Escape
- Scroll progress bar width via rAF-throttled scroll listener
- IntersectionObserver adds `.is-visible` to `.reveal` elements (one-shot)
- Count-up animation (ease-out cubic, 1.4s, locale-formatted); jumps to final value when `prefers-reduced-motion`
- Transparency bars animate to `data-width` when visible
- Contact form (`#contactForm`) prevents default, validates, shows `#formSuccess`, resets after 6s

## Accessibility & SEO
- Skip links, `aria-current="page"` nav states, `aria-label`s, visible focus styles
- `prefers-reduced-motion` disables ticker/reveals/count-up easing
- Meta description, Open Graph tags, theme-color, inline SVG favicon on every page

## Organization Details
- Name: Sports Beyond Borders
- Mission: Providing underprivileged communities with sports equipment
- Address: 123 Champions Way, Chicago, IL 60601
- Email: hello@sportsbeyondborders.org
- Phone: (312) 555-0198
- Founded: 2015
- Status: 501(c)(3) Nonprofit

## Responsive Breakpoints
- 1024px: story goes single column; values stack; program details single column; 2-col grids
- 768px: hamburger menu; stats 2-col; cards stack; contact single column
- 480px: hero/CTA buttons stack; stats single column

## Design Rules
- Border radius: 6px (`--radius`) — editorial, sharp
- Buttons/headings: Barlow Condensed uppercase with letter-spacing
- Card hover: translateY(-6px) + shadow; program cards invert to navy
- Kicker labels: orange dash + uppercase condensed text
- Micro-interactions: 250ms `cubic-bezier(0.22, 1, 0.36, 1)`

## Branch
claude/sports-beyond-borders-redesign-f2wd31
