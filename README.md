# Personal Portfolio Website

A minimalist, responsive portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** and **Lucide icons**. It is fully static, so it deploys to Vercel with no backend and loads fast.

**Pages**

| Route | Content |
| --- | --- |
| `/` | Hero, about & skills, featured projects, quick links |
| `/education` | Education timeline |
| `/experience` | Experience timeline with responsibilities, highlights and tools |
| `/projects` | Project cards with category filter |
| `/projects/[slug]` | One page per project (e.g. `/projects/repair-report`) |
| `/achievements` | Awards, certifications, competitions, organizations (filterable) |

Also included: SEO metadata, `sitemap.xml`, `robots.txt`, generated social-share image, 404 page, skip link and reduced-motion support.

---

## 1. Run locally

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Other commands:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

---

## 2. Make it yours (no UI code changes)

All content lives in `src/data/`. **Everything currently there is placeholder content.**

| File | What to edit |
| --- | --- |
| `profile.ts` | Name, title, intro, about text, email, social links, stats, skills, avatar and CV paths |
| `education.ts` | Education entries |
| `experience.ts` | Jobs: role, company, period, responsibilities, highlights, technologies |
| `projects.ts` | Projects (see below) |
| `achievements.ts` | Awards, certifications, competitions, organizations |
| `site.ts` | Navigation, site name/description/keywords for SEO |

Search the data files for `your-username`, `example.com` and `Medan, Indonesia` to find the placeholder links.

### Images and CV

* **Profile photo** — put your photo in `public/images/` (for example `profile.jpg`, about 800×1000) and set `avatar` in `profile.ts`. Update `avatarAlt` too.
* **CV** — replace `public/resume.pdf` with your own file (keep the name, or change `resume` in `profile.ts`).
* **Favicon** — edit or replace `src/app/icon.svg` (you can also drop in an `icon.png`).
* **Colors and fonts** — change the color tokens in `tailwind.config.ts` (`canvas`, `ink`, `accent`, ...) and the fonts in `src/app/layout.tsx`.

### Adding or editing a project

1. Open `src/data/projects.ts` and copy an existing entry.
2. Change `slug`. It becomes the URL: `slug: "my-project"` gives `/projects/my-project`.
3. Put screenshots in `public/images/projects/my-project/`. Use `.png`, `.jpg` or `.webp` at roughly 1600×1000 (16:10). Next.js optimizes them automatically.
4. Update `thumbnail`, `gallery`, `technologies`, `github`, `demo` and the detail text.
5. Remove `github` or `demo` if you don't have them — the buttons then disappear.

The card, category filter, detail page, "previous/next project" navigation and sitemap all update automatically. Set `featured: true` to show a project on the home page (first three are used).

The included project screenshots are generated SVG mock-ups; replace them with real screenshots.

---

## 3. Deploy to Vercel

The project needs no special configuration: Vercel detects Next.js automatically.

### a) Put the code on GitHub

1. Create an empty repository on <https://github.com/new> (no README, no `.gitignore`).
2. In this folder run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next` and local env files.

### b) Import into Vercel

1. Sign in at <https://vercel.com> (choose **Continue with GitHub**).
2. Click **Add New → Project** and import your repository.
3. Leave the defaults (Framework: Next.js, build command `next build`, output auto-detected).
4. Optional: add the environment variable `NEXT_PUBLIC_SITE_URL` (see `.env.example`) with your final URL, for example `https://your-domain.com`. It is used for SEO links, the sitemap and social previews. If unset, the Vercel URL is used.
5. Click **Deploy**. In about a minute the site is live at `https://<project>.vercel.app`.

### c) Custom domain

1. In Vercel open your project → **Settings → Domains** → **Add**, and enter your domain (for example `yourname.com`).
2. Vercel shows the DNS records to create at your domain registrar:
   * Apex/root domain (`yourname.com`): an **A** record pointing to the IP address Vercel shows.
   * `www` subdomain: a **CNAME** record pointing to the value Vercel shows (usually `cname.vercel-dns.com`).
   * Alternatively, switch your domain's nameservers to Vercel and it manages DNS for you.
3. Wait for DNS to propagate (minutes to a few hours). HTTPS certificates are issued automatically.
4. Set `NEXT_PUBLIC_SITE_URL` to the new domain under **Settings → Environment Variables**, then redeploy so the sitemap and metadata use it.

### d) Updating the site after deployment

Every push to GitHub redeploys automatically:

```bash
# edit files in src/data/ or public/
git add .
git commit -m "Update projects"
git push
```

* Pushes to `main` update the production site.
* Pushes to other branches or pull requests get a **Preview URL**, which is handy for checking changes before they go live.
* A bad release can be undone in Vercel under **Deployments → ⋯ → Promote to Production** on an earlier deployment.

Tip: run `npm run build` locally before pushing to catch errors early.

---

## Project structure

```
public/
  images/                 avatar and project screenshots
  resume.pdf              downloadable CV (placeholder)
src/
  app/                    routes (App Router), layout, SEO files
    projects/[slug]/      dynamic project detail pages
  components/
    layout/               header, footer
    home/                 landing page sections
    projects/             card, filterable grid, gallery
    education/ experience/ achievements/
    ui/                   reusable primitives (Badge, ButtonLink, Timeline, Reveal, ...)
  data/                   all editable content
  lib/                    small utilities
  types/                  TypeScript types for the content files
```

## Notes

* GitHub and LinkedIn logos are inlined SVGs because `lucide-react` no longer ships brand icons.
* Scroll animations respect the visitor's reduced-motion setting and the content is visible without JavaScript.
* Google Fonts (Inter, Fraunces) are downloaded at build time and self-hosted by `next/font`, so visitors make no requests to Google.
