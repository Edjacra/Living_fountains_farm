# Image optimization workflow by folder

This repo has a few clear image groups. Each one should be optimized differently depending on how it is used.

## 1) `Other Photos/`
This is the biggest performance risk because the files are large JPEGs.

Workflow:
1. Open each photo in a browser-based optimizer or a tool like ImageOptim, TinyPNG, or Photoshop "Save for Web".
2. Resize to a maximum width of 1200px for hero or large feature use.
3. For profile/team portraits, resize to 600–800px wide.
4. Export at quality 60–75.
5. Prefer WebP for the web, then use JPG only if the source is already a photo and browser support is a concern.
6. Replace the original file in the same folder with the optimized version.
7. Update the HTML to use the compressed file and add `loading="lazy"` for non-hero images.

Recommended targets:
- Hero/feature photo: 150–500 KB
- Team portrait: 40–120 KB
- Background/farm image: 150–350 KB

Files to prioritize:
- `Other Photos/Bahati-kwa-kunde.JPG`
- `Other Photos/Dominic.JPG`
- `Other Photos/Kamanda.JPG`
- `Other Photos/Maria-na-kunde.JPG`
- `Other Photos/Sheei-malenge.JPG`

## 2) `assets/farm/`
This folder contains produce images that are likely displayed in cards and product listings.

Workflow:
1. Resize every image to a max width of 800px.
2. Export from each source with quality around 65–75.
3. Keep the file names consistent and kebab-case.
4. Convert to WebP when possible for product cards.
5. Use `loading="lazy"` and explicit width/height attributes in the HTML.

Recommended targets:
- Fruit/veg cards: 60–180 KB
- Farm gallery items: 120–250 KB

Best fit:
- WebP for product cards
- JPG only if the source file is already a photo and you need a quick compatibility fallback

## 3) `assets/factory/`
This folder is for processed products and working-factory imagery. These should be crisp but not oversized.

Workflow:
1. Resize to 900–1200px max for featured factory imagery.
2. Use 500–800px for product thumbnails.
3. Compress with quality around 65–75.
4. Apply `loading="lazy"` for gallery or product listings.
5. Use a consistent naming system: `product-name.jpg` or `product-name.webp`.

Recommended targets:
- Product photos: 60–220 KB
- Factory scene/feature images: 150–400 KB

## 4) `assets/`
This folder also contains branding files (`logo.png`, `favicon.png`), which are small and should stay as-is.

Workflow:
- Keep PNG files small and optimized.
- Use the logo at its real display size; avoid giant upload dimensions.
- Ensure the favicon stays tiny and crisp.

## 5) General rules for every folder
- Use `srcset` and `sizes` on important marketing images.
- Always include `width` and `height` attributes.
- Use `loading="lazy"` for all below-the-fold images.
- Use `fetchpriority="high"` only on the hero image.
- Keep a single optimized copy per image, not multiple oversized originals.

## 6) Suggested optimization order
Priority order for this repo:
1. `Other Photos/`
2. `assets/farm/`
3. `assets/factory/`
4. Branding assets (`assets/logo.png`, `assets/favicon.png`)

This will give the biggest speed gain with the least effort.
