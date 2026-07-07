# Sports Beyond Borders — Website

Static nonprofit website built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. Design direction: **Sport Editorial, light** — white & baby-blue logo palette, oversized condensed headlines, marquee ticker, count-up stats, scroll reveals, split-headline intro, magnetic CTAs, card tilt, parallax court lines, inline SVG icons (no emojis).

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

## Color Palette (CSS variables in :root) — white & baby blue, from the logo
- White: #FFFFFF (page background)
- Ice tint: #E3F2FD (`--ice`) / Baby blue: #BBDEFB (`--baby`) / Sky: #90CAF9
- Brand blue: #2196F3 (`--blue`)
- Deep blue (buttons/links/accents): #1565C0 (`--blue-deep`)
- Gradient sections/buttons: `--grad-blue` (#0D3B70 → #1565C0 → #1E88E5), `--grad-btn`
- Navy text: #0D2137 (`--navy`) / muted: #44586C
- Note: `.btn-flame` / `.text-flame` class names are legacy — they now render blue gradient (primary CTA / accent word), not orange

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
- Court-line SVG backgrounds (`.hero-court`) with scroll parallax (JS translate3d)
- Floating blurred baby-blue blobs on heroes (`.hero::before/::after`, CSS `float` keyframes)
- Split-headline intro: JS wraps hero h1 words/chars in `.w > .c` spans, staggered rise-in; styled spans (gradient `.text-flame`) rise as one unit
- Magnetic pull on primary hero/CTA buttons (JS mousemove, fine pointers only)
- 3D tilt on program/story/way cards (JS mousemove, ±5deg)
- Marquee ticker (`.ticker`, baby blue) — CSS animation, duplicated track
- Count-up stats: `.count` elements with `data-target`, animated by IntersectionObserver
- Numbered program cards (01/02/03) with outlined numerals, baby-blue borders → blue on hover
- Transparency bars on donate page: `.bar-fill` with `data-width`
- Reveal animation: `.reveal` + optional `--d` delay custom property
- All motion gated behind `prefers-reduced-motion` (and pointer checks where relevant)

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
- Border radius: 10px cards (`--radius`), 50px pill buttons
- Buttons/headings: Barlow Condensed uppercase with letter-spacing
- Card hover: tilt + shadow + border shifts baby blue → brand blue
- Kicker labels: blue dash + uppercase condensed text
- Shadows are blue-tinted (rgba of #1565C0), never grey
- Micro-interactions: 250ms `cubic-bezier(0.22, 1, 0.36, 1)`

## Branch
claude/sports-beyond-borders-redesign-f2wd31
