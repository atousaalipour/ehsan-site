EHSAN ALIPOUR — ARCHITECTURE PORTFOLIO
======================================

Files
- index.html : page structure and content (EN / FA / AR via data-en, data-fa, data-ar)
- style.css  : dark theme, glowing frame, orbit animation, responsive layout
- script.js  : mobile menu, scroll reveal, current year, "full work history" toggle
- renovation.html, supervision.html, interior-design.html, facade.html : the four service pages
- project.html : one template page for every project gallery (project.html?p=<slug>)
- projects.js  : list of categories and projects (names in EN / FA / AR)
- gallery.js   : project cards, gallery grid and lightbox (close, zoom, previous / next)
- pages.css    : styles of the service / project pages
- language.js: language switcher (EN / FA / AR); the chosen language is remembered
- assets/    : ehsan-alipour.png + the four service photos (interior-design,
               building-facade, renovation, supervision)

Preview
Open index.html in a browser. Only Google Fonts needs internet; no build step.

Publishing
Upload index.html, style.css, script.js, language.js and the whole assets folder
to the same directory. Do not upload only index.html.

To do before publishing
- Telegram: replace href="#" in the .telegram-placeholder link in index.html.
- Check names, places and Solar Hijri years in the work history.
  The "Year" label is shown as "Year (Solar Hijri)" in EN.
- Arabic: project locations / client names are not translated and remain in
  English (only job titles are translated through the dictionary).

Cleanup done
- Removed ~5.7 MB of unused images (old hero images, CV page scans, reference file).
- Removed the hidden blueprint SVG and its dead CSS / keyframes.
- Removed duplicate and obsolete hero-image CSS.
- Added favicon and Open Graph tags (og:image uses assets/building-facade.jpg;
  for a full link preview, replace with an absolute URL after publishing).
- Fixed Persian client names showing in the English version.
- Language choice now persists after reload.


ADDING PHOTOS TO A PROJECT (automatic, no code)
-----------------------------------------------
Each project has its own folder:  assets/projects/<category>/<slug>/
  Renovation page:
    assets/projects/renovation/moshtagh-2/   -> Residential Property Supervision — Moshtagh 2nd Street, Isfahan
    assets/projects/renovation/keshvari/     -> Residential Complex Supervision — Keshvari, Isfahan
    assets/projects/renovation/mulla-sadra/  -> Facade & Interior Supervision — Mulla Sadra, Isfahan

Put the files inside that folder:
  cover.jpg                 image shown on the project box (optional; if absent, 1.jpg is used)
  1.jpg, 2.jpg, 3.jpg ...   gallery photos, numbered in order with NO missing numbers
Allowed extensions (lowercase): jpg, jpeg, png, webp. Upload the folder to the host and it works.
Tip: resize photos to ~1800 px on the long side (under 500 KB each) so the gallery loads fast.

ADDING A NEW PROJECT
Copy one block inside "projects" in projects.js, change slug / category / titles / folder,
then create the folder and add photos. The box appears on the category page by itself.
Categories: renovation, supervision, interior, facade.
