# sumitrashid.com

Personal editorial website, built with Astro and hosted free on GitHub Pages.
Every time you save a change on GitHub, the site rebuilds itself in 1-2 minutes.

## Change basic information
Open `src/data/site.ts` → click the pencil icon → edit the text between quotation marks (name, tagline, intro, email, Instagram, LinkedIn, homepage photos) → Commit changes.

## Publish a new article
1. Open the folder for the section: `src/content/perspectives`, `journal`, `travel`, `photography` or `culture`.
2. Click Add file → Create new file.
3. Name it with lowercase words and dashes, ending in `.md` (example: `my-first-essay.md`).
4. Paste the top block from an existing sample file in that folder, change the details, then write your text underneath.
5. Commit changes. The article appears on the site in 1-2 minutes.

To hide an article without deleting it, change `draft: false` to `draft: true`.

## Replace a photograph
Open `public/images` → Add file → Upload files → upload your image using the SAME file name as the one you want to replace.
To add a new photo, upload it there, then refer to it as `/images/your-file-name.jpg` in an article or in `src/data/site.ts`.

## Edit the About and Professional Work pages
Open `src/pages/about.md` or `src/pages/work.md`, click the pencil icon, edit the text, commit.
