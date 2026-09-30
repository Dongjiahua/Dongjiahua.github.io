# Jiahua Dong — Academic Homepage

Personal academic website: https://dongjiahua.github.io/

A responsive, accessible static site built with HTML and CSS. No build tools or JavaScript are required. `.nojekyll` disables the previous Jekyll theme.

## Editing

- `index.html`: biography, selected and additional publications, experience, education, and contact information.
- `styles.css`: responsive layout, typography, and colors.
- `assets/`: research figures and favicon. Paper figures come from the corresponding authors' project/code repositories.

Preview locally using `python -m http.server 8765 --bind 127.0.0.1` from this directory.

## Publication websites

Existing project sites are deployed independently from their own repositories:

- `/CVESC/` → `Dongjiahua/CVESC`
- `/VICA-NeRF/` → `Dongjiahua/VICA-NeRF`

The homepage links to these project paths. Do not add folders with those names to this repository or change their deployment settings when updating the homepage. To add another project website, enable GitHub Pages on its project repository and link its published URL here.

## Content

Biography, education, and experience are based on the author's CV. Publication titles, authors, venues, and links are checked against public paper records. The homepage includes publicly available research. SCas4D uses TMLR 2025 as stated in its accepted paper; SimC3D uses its published arXiv title.
