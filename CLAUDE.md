# Sports Beyond Borders — Website

Static nonprofit website built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies.

## Preview
python -m http.server 8000
Then open http://localhost:8000

## File Structure
- `index.html` — entire page structure and content
- `styles.css` — all styling and responsive layout
- `script.js` — mobile menu toggle, contact form handler, scroll animations

## Color Palette
- Primary blue: #2196f3
- Dark blue: #1565c0
- Light blue tint: #bbdefb
- Pale blue background: #e3f2fd
- Dark navy: #0d2137
- White: #ffffff
- Body text / muted: #475569

## Font
Inter — loaded from Google Fonts in index.html

## Sections (in order)
1. Sticky nav bar — logo, links, hamburger menu for mobile
2. Hero — gradient banner, headline, subtext, two CTA buttons
3. Stats strip — 4 stats on navy background
4. About — mission story, three core values
5. Programs — 3 cards: Gear Drive, Community Courts (featured), Athlete Pathways
6. Impact — 3 testimonial cards with author avatars
7. CTA banner — blue gradient, two buttons
8. Contact — info panel + form with success message
9. Footer — brand blurb, 3 link columns, copyright

## Organization Details
- Name: Sports Beyond Borders
- Mission: Providing underprivileged communities with sports equipment
- Address: 123 Champions Way, Chicago, IL 60601
- Email: hello@sportsbeyondborders.org
- Phone: (312) 555-0198
- Founded: 2015
- Status: 501(c)(3) Nonprofit

## JavaScript Behavior
- Hamburger button toggles `.open` class on `#mobileMenu`
- Clicking outside the mobile menu closes it
- Contact form prevents default submit, shows `#formSuccess` div, resets after 6 seconds
- IntersectionObserver animates `.program-card`, `.testimonial-card`, `.stat-item` on scroll

## Responsive Breakpoints
- 1024px: about section goes single column, image placeholder hides
- 768px: hamburger menu shows, programs/testimonials stack, contact goes single column
- 480px: hero buttons stack vertically

## Design Rules
- Card border-radius: 16px, small elements: 8px
- Pill tags and buttons: border-radius 50px
- Card hover: translateY(-4px) with box-shadow
- Button hover: slight translateY(-1px) or color shift
- Smooth scroll on html element

## Branch
claude/nonprofit-website-IqJAz
