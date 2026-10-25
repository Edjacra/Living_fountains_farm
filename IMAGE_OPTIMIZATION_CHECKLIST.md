# Quick page audit for remaining pages

This is a fast review of the other pages beyond the homepage so the remaining issues can be fixed quickly.

## 1) `about.html`
Status: needs portrait photo optimization
- Team images are large local portraits from `Other Photos/`.
- These should be resized to 600–800px and compressed.
- Add `loading="lazy"` and `decoding="async"` to each portrait.
- Consider using consistent square crop sizes for the cards.

## 2) `careers.html`
Status: needs a compressed page hero image
- The hero background uses a large local photo from `Other Photos/Dominic.JPG`.
- Resize to ~1200px wide and compress to 150–350 KB.
- Use a `srcset` or a web-optimized replacement file if possible.

## 3) `contact.html`
Status: needs page hero optimization
- The contact page hero uses a large local photo (`Other Photos/Sheei-malenge.JPG`).
- Same optimization pattern as the careers page.

## 4) `partner-with-us.html`
Status: needs page hero optimization
- The partner-with-us page uses a large local photo from `Other Photos/Maria-na-kunde.JPG`.
- Compress and resize before publishing.

## 5) `our-farm.html`
Status: product card images should be lighter
- Most images in the farm product grid are product or crop images used in cards.
- Resize each to ~700–900px max and compress to ~80–200 KB.
- Add `loading="lazy"` and `decoding="async"` to product cards.

## 6) `our-factory.html`
Status: product card images should be lighter
- Same pattern as `our-farm.html`.
- Reduce heavy factory-product image sizes and use lazy loading.

## 7) `our-products.html`
Status: card-heavy page with performance risk
- This page likely has many images in product tabs.
- Use a single optimized size per product image.
- Prefer `WebP` or compressed JPG and smaller display dimensions.

## 8) `faqs.html`, `privacy-policy.html`, `index.html`
Status: generally okay but still benefit from image optimization checks
- These pages use hero backgrounds or support images.
- Keep the hero image strictly optimized and avoid giant local files.
- If using marketing photos, keep the `srcset` and `sizes` explicit.

## 9) Recommended order of fixes
1. `Other Photos/` optimization
2. `about.html` team portraits
3. `careers.html`, `contact.html`, `partner-with-us.html`
4. `our-farm.html` and `our-factory.html`
5. `our-products.html`
6. Final QA on mobile data

## 10) Final QA checklist
- Open the site on mobile data.
- Check LCP (largest contentful paint) for the homepage.
- Confirm all non-hero images use `loading="lazy"`.
- Confirm all large homes and page hero images are compressed.
- Remove any duplicate oversized originals after replacement.

