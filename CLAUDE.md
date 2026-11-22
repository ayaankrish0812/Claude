# Sports Beyond Borders — Website

Static nonprofit website built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. Design direction: **Sport Editorial, light** — white & baby-blue logo palette, oversized condensed headlines, marquee ticker, count-up stats, scroll reveals, split-headline intro, magnetic CTAs, card tilt, parallax court lines, inline SVG icons (no emojis).

## Preview
python -m http.server 8000
Then open http://localhost:8000

## File Structure (multi-page)
- `index.html` — home: hero + ticker, stats, story (photo), values, program teasers, photo mosaic, belief statement, CTA
- `programs.html` — how-it-fits strip, then Gear Drive (core, with cleats photo), Free Day Camps, Partnered Sports Refurbishing
- `impact.html` — stats, Livermore giveback (photos), countries reached, two community quotes (Girls Soccer Worldwide; a gear-recipient mom — lightly polished from the supplied wording), dated timeline May 2024 → Nov 2026, belief statement
- `donate.html` — ways to give (gear/volunteer/partner), accepted-gear lists, "where it goes" steps
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
- Self-hosted: latin woff2 files in `fonts/`, `@font-face` rules at the top of `styles.css`; key weights preloaded in each page head (no Google Fonts requests)

## Brand Assets (`images/`)
- Logo is a basketball with orbit ring and sparkles; the supplied source was pale baby blue (#ADDFF0) on white, so transparent variants were extracted:
  - `logo-brand.png` / `logo-brand-sm.png` — brand blue #1E88E5, for light backgrounds (header, footer, hero)
  - `logo-light.png` — original pale blue, only readable on dark blue sections
  - `logo-white.png` — white, for icons/dark sections
  - `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png` — white logo on blue rounded square
- `og-image.png` (1200x630) — social share card; re-render if the headline or logo changes
- `images/photos/` — real photos as WebP in two widths each (srcset): `cleats` (40+ pairs, garage-door area cropped out), `livermore-a`, `livermore-b` (Livermore clothes giveback), `donation-pickup` (license plate blurred before publishing), `donation-bags` (bags of cleats in a trunk). Use the `<figure class="photo">` markup; `.mosaic` is the home gallery grid
- Still welcome: Shoes for Senegal partnership photos

## Contact Form & Email
- `contact.html` form posts to FormSubmit (formsubmit.co) which emails sportsbeyondborders@gmail.com; JS uses the `/ajax/` endpoint in `data-endpoint`, the plain `action` is the no-JS fallback (redirects back with `?sent=1`)
- First live submission triggers a one-time FormSubmit activation email to the Gmail inbox that must be clicked
- Hidden `_honey` field is the spam honeypot; failure state shows a mailto fallback
- Public contact email everywhere on the site: sportsbeyondborders@gmail.com

## Production / Hosting
- Repo root is deployable as-is to Hostinger `public_html` (also GitHub Pages)
- `.htaccess` (HTTPS redirect, gzip, caching, security headers), `404.html`, `robots.txt`, `sitemap.xml`
- Canonical/OG URLs and sitemap use https://sportsbeyondborders.org — change in all pages if the primary domain differs
- `404.html` uses root-absolute paths (`/styles.css`); regenerate from `contact.html` if the header/footer change

## Shared Page Anatomy
1. Skip link + scroll progress bar
2. Sticky white header — logo image + wordmark, nav links with blue underline on hover/current, gradient "Get Involved" button, hamburger on mobile. Home hero also shows a large floating logo (`.hero-logo`, hidden under 1100px). Footer: student-founded · San Ramon, California
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
- Mission: Getting sports gear (cleats, shoes, apparel) to kids who can't afford it
- Founded: April 2024 in San Ramon, California, by high schoolers with a sports background; no physical headquarters/street address
- Email: sportsbeyondborders@gmail.com
- Phone: (925) 967-1721 (temporary)
- NOT a verified 501(c)(3): never claim tax-exempt/501(c)(3) status
- Programs: Gear Drive (core, running: 3 drives so far); Free Day Camps = PLANNED (3–4 sports stations, 1 hour each, equipment + water + snacks provided, free); Partnered Sports Refurbishing = IN PLANNING since Nov 2026 (recycling tennis balls, rackets, other equipment into donation-ready gear). Partner: Shoes for Senegal (since June 2026). Never describe camps/refurbishing as already running
- Timeline: May 2024 founded · Sept 2024 club at California High · Nov 2024 first drive · May 2025 first outreach (Paraguay) · July 2025 second drive · Dec 2025 third drive · March 2026 Livermore giveback · June 2026 Shoes for Senegal · Nov 2026 planning refurbishing
- Founding month confirmed: May 2024. Quotes approved; mom is attributed as "Livermore Giveback mom"; school is California High School; "about 5 countries" confirmed
- Instagram: @sports.beyond.borders (no X/Twitter account)
- Verified numbers only: $12K+ equipment donated; ~5 countries (named: Senegal, Paraguay, Nicaragua); 40+ pairs of cleats in the photo; founded 2024. Do not invent other stats, quotes, dates, or financials

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
