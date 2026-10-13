# Alejandro Guerra — Portfolio / CV

Single-page personal portfolio for junior software roles (Spain / Europe), built with **Astro** and vanilla CSS.

## Stack

- Astro (static page)
- Vanilla CSS (no Tailwind, React, Vue, or other UI frameworks)
- Editable content in `src/data/cv.ts`

## Run locally

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4327
```

Then open [http://127.0.0.1:4327](http://127.0.0.1:4327).

Other commands:

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm run build`   | Production build to `./dist/`   |
| `npm run preview` | Preview the production build    |

## Edit your CV content

1. Update **`src/data/cv.ts`** — name, about text, timeline entries, technologies, and links.
2. Replace every `[PLACEHOLDER: …]` string with real information (or remove unused entries).
3. Replace **`public/cv.pdf`** with your actual CV PDF (same filename so `/cv.pdf` keeps working).

## Page structure

| Section        | Anchor           | Source                         |
| -------------- | ---------------- | ------------------------------ |
| About me       | `#about`         | `src/components/About.astro`   |
| My story       | `#story`         | `src/components/Timeline.astro`|
| Technologies   | `#technologies`  | `src/components/Technologies.astro` |
| Contact        | `#contact`       | `src/components/Contact.astro` |

Global styles live in `src/styles/global.css`. Section styles are scoped in each component.

## Notes

- Primary language: English.
- No inventing of personal facts — placeholders are intentional until you fill them in.
- Deployment, domains, and CI are out of scope for this project slice.
