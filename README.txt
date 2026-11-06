EHSAN ALIPOUR — ARCHITECTURE PORTFOLIO
======================================

PUBLISHING ON GITHUB PAGES  (IMPORTANT)
- Upload EVERYTHING in this zip to the ROOT of the repository, including the whole
  "assets" folder. If "assets" is missing, every image on the site is broken.
- Do not delete the existing CNAME file of the repository (custom domain).
- pages.css is now an empty file (all styles are in style.css). It must stay uploaded.
- File and folder names are case sensitive: keep them lowercase exactly as they are.

FILES
- index.html : home page (EN / FA / AR via data-en, data-fa, data-ar)
- renovation.html, supervision.html, interior-design.html, facade.html : service pages
- project.html : one template for every project gallery (project.html?p=<slug>)
- projects.js  : categories and projects (names in EN / FA / AR)
- gallery.js   : project boxes, gallery grid and lightbox (close, zoom, previous / next)
- style.css    : the whole visual design (home + inner pages)
- script.js, language.js : menu, reveal animations, language switcher
- assets/      : ehsan-alipour.jpg, 4 service photos, assets/projects/...

ADDING PHOTOS TO A PROJECT  (automatic, no code)
Every project has its own folder  assets/projects/<category>/<slug>/ . Put inside it:
  cover.jpg                 image shown on the project box (optional; else 1.jpg is used)
  1.jpg, 2.jpg, 3.jpg ...   gallery photos, numbered in order with NO missing numbers
Allowed extensions (lowercase): jpg, jpeg, png, webp.
Tip: ~1800 px on the long side and under 500 KB per photo keeps the gallery fast.

PROJECT FOLDERS
[SUPERVISION]
  assets/projects/supervision/moshtagh-2/   -> Residential Property Supervision — Moshtagh 2nd Street, Isfahan
  assets/projects/supervision/keshvari/   -> Residential Complex Supervision — Keshvari, Isfahan
  assets/projects/supervision/mulla-sadra/   -> Facade & Interior Supervision — Mulla Sadra, Isfahan

[RENOVATION]
  assets/projects/renovation/elevator-hasht-behesht/   -> Elevator Installation — Hasht Behesht, Isfahan
  assets/projects/renovation/garden-villa-goldasht/   -> Garden & Villa Renovation — Goldasht, Isfahan
  assets/projects/renovation/interior-goldasht/   -> Interior Renovation — Goldasht, Isfahan
  assets/projects/renovation/interior-chaharbagh/   -> Interior Renovation — Chaharbagh, Isfahan
  assets/projects/renovation/interior-mardavij/   -> Interior Renovation — Mardavij, Isfahan
  assets/projects/renovation/interior-moshtagh-1/   -> Interior Renovation — Moshtagh 1st, Isfahan
  assets/projects/renovation/decoration-villa-fooladshahr/   -> Interior Decoration & Villa Renovation — Fooladshahr, Isfahan
  assets/projects/renovation/landscape-goldasht/   -> Landscape Renovation — Goldasht, Isfahan
  assets/projects/renovation/landscape-chishir/   -> Landscape Renovation — Chishir, Isfahan
  assets/projects/renovation/facade-goldasht/   -> Facade Renovation — Goldasht, Isfahan
  assets/projects/renovation/facade-interior-pol-hotel/   -> Facade & Interior Renovation — Pol Hotel, Isfahan
  assets/projects/renovation/facade-interior-ferdowsi/   -> Facade & Interior Renovation — Ferdowsi, Isfahan
  assets/projects/renovation/facade-villa-fooladshahr/   -> Facade & Villa Renovation — Fooladshahr, Isfahan
  assets/projects/renovation/modern-facade-hasht-behesht/   -> Modern Building Facade Renovation — Hasht Behesht, Isfahan

[FACADE]
  assets/projects/facade/classic-najafabad/   -> Classic Building Facade — Najafabad, Isfahan
  assets/projects/facade/classic-robat/   -> Classic Building Facade — Robat, Isfahan
  assets/projects/facade/classic-orgol/   -> Classic Building Facade — Orgol, Tehran
  assets/projects/facade/classic-araj/   -> Classic Building Facade — Araj, Tehran
  assets/projects/facade/roman-robat-2/   -> Roman Building Facade — Robat 2, Isfahan
  assets/projects/facade/modern-rudaki/   -> Modern Building Facade — Rudaki, Isfahan
  assets/projects/facade/modern-robat-1/   -> Modern Building Facade — Robat 1, Isfahan
  assets/projects/facade/modern-robat/   -> Modern Building Facade — Robat, Isfahan
  assets/projects/facade/modern-khaneh-esfahan/   -> Modern Building Facade — Khaneh Esfahan
  assets/projects/facade/modern-abadan-2/   -> Modern Building Facade — Abadan 2, Isfahan
  assets/projects/facade/modern-hasht-behesht/   -> Modern Building Facade — Hasht Behesht, Isfahan
  assets/projects/facade/modern-pol-hotel/   -> Modern Building Facade — Pol Hotel, Isfahan
  assets/projects/facade/modern-malek-shahr/   -> Modern Building Facade — Malek Shahr, Isfahan
  assets/projects/facade/modern-kohandezh/   -> Modern Building Facade — Kohandezh, Isfahan
  assets/projects/facade/modern-sheikh-sadough/   -> Modern Building Facade — Sheikh Sadough North, Isfahan
  assets/projects/facade/modern-haft-dast/   -> Modern Building Facade — Haft Dast, Isfahan

ADDING A NEW PROJECT
Copy one block inside "projects" in projects.js, change slug / category / titles / folder,
create the folder and add photos. Categories: renovation, supervision, interior, facade.

INTERIOR DESIGN GALLERY — READY TO USE
Add photos for the first Interior Design project here:
  assets/projects/interior/interior-project-01/

Put these files directly in that folder:
  cover.jpg  (optional thumbnail; if omitted, 1.jpg is used)
  1.jpg, 2.jpg, 3.jpg ... (gallery photos, numbered in order without gaps)

Allowed formats: jpg, jpeg, png, webp (lowercase extensions).
The project is already registered in projects.js and will appear on interior-design.html.
No further code changes are needed when adding or replacing its photos.

TO DO
- Telegram: replace href="#" in the .telegram-placeholder links (index.html and the 5 inner pages).
