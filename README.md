# Hussein Fouani · Portfolio

Personal portfolio website: **https://hussein-fouani.github.io/Portfolio/**

.NET backend developer (C#, ASP.NET Core, SQL Server) building hospital information systems at Synapse, expanding into AI/ML engineering.

## How it works

The site is a single, self-contained page in [`site/index.html`](site/index.html): plain HTML, CSS and a little JavaScript, with no framework, build step or external assets. It loads in about 37 KB, supports dark and light mode, works on mobile, and respects reduced-motion settings.

## Run locally

```bash
npm run start   # serves the site folder
```

## Deploy

GitHub Pages serves the `gh-pages` branch. To publish changes to `site/index.html`:

```bash
npm install
npm run deploy  # pushes the site folder to gh-pages
```

