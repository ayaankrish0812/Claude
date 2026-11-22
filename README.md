# Sports Beyond Borders — Website

Static website (plain HTML, CSS, JavaScript — no build step) for Sports Beyond Borders, a 501(c)(3) nonprofit
getting sports equipment, courts, and coaching to underprivileged communities.

**Pages:** `index.html` · `programs.html` · `impact.html` · `donate.html` · `contact.html` · `404.html`

## Run it locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy
The repository root *is* the website — no build needed.

- **Hostinger:** hPanel → Websites → Manage → Advanced → Git, add this repository and branch, set the install path to `public_html`, and deploy. Re-deploy after each push.
- **GitHub Pages:** Settings → Pages → deploy from the default branch, root folder. The `CNAME` file sets the custom domain.

## Contact form
Messages go to the team inbox through [FormSubmit](https://formsubmit.co). After the first live submission, click the one-time activation link FormSubmit emails to the inbox.

## Editing
See `CLAUDE.md` for the design system, file structure, and conventions.
