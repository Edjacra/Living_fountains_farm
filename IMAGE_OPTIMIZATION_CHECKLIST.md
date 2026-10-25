/* -----------------------------------------------------------
   Living Fountains Farm — Refined homepage design
   ----------------------------------------------------------- */

@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Work+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

:root {
  --lf-teal-dark: #0a261e;
  --lf-teal: #144c3d;
  --lf-teal-deep: #061913;
  --lf-green-leaf: #217346;
  --lf-green-vibrant: #27ae60;
  --lf-gold: #f5a623;
  --lf-gold-dark: #d48810;
  --lf-clay: #b9622a;
  --lf-cream: #f8f5f0;
  --lf-cream-deep: #efe7dc;
  --lf-ink: #122018;
  --lf-mist: #586c62;
  --lf-border: #e3ddd1;
  --lf-whatsapp: #25d366;
  --lf-shadow: rgba(10, 38, 30, 0.14);
  --container-max: 1180px;
  --container-padding: 24px;
  --radius: 22px;
  --radius-sm: 14px;
  --shadow-soft: 0 18px 50px -22px rgba(10, 38, 30, 0.22);
  --shadow-elevated: 0 28px 60px -30px rgba(10, 38, 30, 0.28);
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Work Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(39, 174, 96, 0.08), transparent 28%),
    radial-gradient(circle at bottom right, rgba(245, 166, 35, 0.08), transparent 22%),
    var(--lf-cream);
  color: var(--lf-ink);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
  height: auto;
  content-visibility: auto;
}

img[loading="lazy"] {
  content-visibility: auto;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.2s ease;
}

p {
  margin: 0 0 1em;
  color: inherit;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

h1, h2, h3, h4 {
  margin: 0 0 0.6em;
  color: var(--lf-teal-dark);
  font-family: var(--font-display);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

h1 { font-size: clamp(2.6rem, 5vw, 4.2rem); }
h2 { font-size: clamp(2rem, 3.2vw, 2.8rem); }
h3 { font-size: clamp(1.3rem, 2vw, 1.9rem); }
h4 { font-size: 1.18rem; }

.eyebrow,
.eyebrow-badge,
.trust-chip,
.stat-label,
.tabs,
.partner-chip {
  font-family: var(--font-mono);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--lf-gold-dark);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 600;
}

.eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(245, 166, 35, 0.18);
  border: 1px solid rgba(245, 166, 35, 0.35);
  color: #f6b529;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 18px;
  backdrop-filter: blur(8px);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 26px;
  border-radius: 999px;
  border: 2px solid transparent;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--lf-gold) 0%, #f3ba4d 100%);
  color: var(--lf-teal-dark);
  box-shadow: 0 14px 24px -16px rgba(245, 166, 35, 0.75);
}

.btn-whatsapp,
.btn-whatsapp-nav {
  background: linear-gradient(135deg, var(--lf-whatsapp) 0%, #1ea952 100%);
  color: white;
  box-shadow: 0 14px 24px -16px rgba(37, 211, 102, 0.75);
}

.btn-outline {
  border-color: rgba(20, 76, 61, 0.7);
  background: rgba(255, 255, 255, 0.08);
  color: var(--lf-teal-dark);
}

.btn-outline:hover {
  background: var(--lf-teal);
  color: white;
  border-color: var(--lf-teal);
}

.btn-small {
  padding: 10px 18px;
  font-size: 0.86rem;
}

.header {
  position: sticky;
  top: 0;
  z-index: 120;
  background: rgba(248, 245, 240, 0.9);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(10, 38, 30, 0.08);
}

.navbar {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 14px var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo-link {
  display: inline-flex;
  align-items: center;
}

.logo-link img {
  height: 52px;
  width: auto;
}

.nav-menu-wrap {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.95rem;
  font-weight: 500;
}

.nav-links a {
  color: var(--lf-ink);
  padding: 6px 0;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--lf-green-leaf);
  border-color: var(--lf-gold);
}

.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a261e 0%, #104a3d 46%, #0d3128 100%);
}

.animated-hero-main {
  position: relative;
  overflow: hidden;
  color: white;
}

.hero-bg-zoom {
  position: absolute;
  inset: -10%;
  background-size: cover;
  background-position: center;
  transform: scale(1.04);
  filter: saturate(1.15) brightness(0.82);
  animation: kenBurns 18s ease-in-out infinite alternate;
}

.hero-green-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(8, 30, 24, 0.88), rgba(17, 61, 49, 0.72), rgba(19, 77, 64, 0.55));
}

.hero-content-relative {
  position: relative;
  z-index: 2;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 48px;
  padding: 72px 0 96px;
}

.hero-copy {
  max-width: 640px;
}

.hero-copy h1,
.hero-copy p,
.page-hero h1,
.page-hero p {
  color: white;
}

.hero-copy h1 {
  margin-bottom: 18px;
  text-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.hero-copy .accent {
  color: #f6c55c;
  font-style: italic;
}

.hero-description {
  max-width: 560px;
  font-size: 1.08rem;
  color: #e8f2ec;
  line-height: 1.7;
  margin-bottom: 20px;
}

.hero-trust-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 16px 0 22px;
}

.trust-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  color: #eff7f3;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}

.trust-chip i { color: var(--lf-gold); }

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 18px 0 10px;
}

.hero-note {
  max-width: 520px;
  color: #dfece6;
  font-size: 0.9rem;
  line-height: 1.6;
  border-left: 3px solid var(--lf-gold);
  padding-left: 14px;
}

.hero-image-wrap {
  position: relative;
  width: 100%;
}

.hero-image {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: var(--shadow-elevated);
  background: #dfe9e5;
  aspect-ratio: 4 / 5;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.hero-image:hover img {
  transform: scale(1.04);
}

.floating-badge-bottom {
  position: absolute;
  left: 20px;
  bottom: -20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(10, 38, 30, 0.9);
  border: 1px solid rgba(245, 166, 35, 0.4);
  border-radius: 16px;
  padding: 12px 16px;
  color: white;
  box-shadow: 0 22px 32px -18px rgba(0, 0, 0, 0.42);
}

.floating-badge-bottom i {
  font-size: 1.35rem;
  color: var(--lf-gold);
}

.floating-badge-bottom strong {
  display: block;
  font-size: 0.9rem;
}

.floating-badge-bottom span {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #dfece6;
}

.wave-divider {
  position: relative;
  line-height: 0;
  transform: translateY(1px);
}

.wave-divider svg {
  display: block;
  width: 100%;
  height: 66px;
}

.stats-strip {
  background: linear-gradient(180deg, #0d2b24 0%, #0a261e 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 38px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  text-align: center;
}

.stat-num {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 2.9rem);
  color: var(--lf-gold);
  font-weight: 600;
  line-height: 1.1;
}

.stat-label {
  margin-top: 8px;
  color: #dfeae4;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section {
  padding: 84px 0;
}

.section-alt {
  background: var(--lf-cream-deep);
}

.section-teal {
  background: linear-gradient(180deg, var(--lf-teal) 0%, #0f3f35 100%);
  color: white;
}

.section-teal h2,
.section-teal h3,
.section-teal .eyebrow {
  color: white;
}

.section-teal p {
  color: #dfeae4;
}

.section-head {
  max-width: 660px;
  margin-bottom: 34px;
}

.section-head.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 52px;
}

.two-col img {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
}

.check-list li {
  position: relative;
  padding-left: 32px;
  margin-bottom: 14px;
  color: var(--lf-ink);
}

.check-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--lf-gold), #f6c55c);
  box-shadow: 0 8px 18px -10px rgba(245, 166, 35, 0.7);
}

.check-list li::after {
  content: "✓";
  position: absolute;
  left: 5px;
  top: 4px;
  font-size: 0.72rem;
  color: var(--lf-teal-dark);
  font-weight: 700;
}

.card-grid,
.value-grid {
  display: grid;
  gap: 28px;
}

.card-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card,
.value-tile,
.testimonial,
.product-filter-bar {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(10, 38, 30, 0.08);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
}

.card {
  padding: 28px 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover,
.value-tile:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-elevated);
}

.card img {
  width: 100%;
  max-width: 110px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(245, 166, 35, 0.8);
  margin: 0 auto 16px;
}

.card .eyebrow {
  margin-bottom: 10px;
}

.value-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.value-tile {
  padding: 28px 24px;
  border-left: 5px solid var(--lf-teal);
  background: #fff;
}

.value-tile.gold { border-left-color: var(--lf-gold); }
.value-tile.clay { border-left-color: var(--lf-clay); }

.value-num {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--lf-teal-dark);
  margin-bottom: 8px;
}

.testimonial {
  padding: 42px 38px;
  position: relative;
}

.testimonial blockquote {
  margin: 0 0 18px;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2vw, 1.8rem);
  line-height: 1.4;
  color: var(--lf-teal-dark);
  font-style: italic;
}

.testimonial cite {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--lf-mist);
  font-style: normal;
}

.partners-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 22px;
}

.partner-chip {
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(13, 44, 37, 0.08);
  color: var(--lf-teal-dark);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}

.order-cta-highlight {
  background: linear-gradient(180deg, rgba(245, 166, 35, 0.08), rgba(255, 255, 255, 0.5));
}

.footer {
  background: #0d2c25;
  color: #dfeae4;
  padding-top: 34px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1.1fr;
  gap: 26px;
  padding: 18px 0 26px;
}

.footer-col h4 {
  color: white;
  margin-bottom: 16px;
  font-size: 1.1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li + li,
.footer-contact-item + .footer-contact-item {
  margin-top: 10px;
}

.footer-links a,
.footer-contact-item a,
.footer-bottom a {
  color: #dfeae4;
}

.footer-links a:hover,
.footer-contact-item a:hover,
.footer-bottom a:hover {
  color: white;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-contact-item i {
  color: var(--lf-gold);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 22px 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.94rem;
}

.social-row {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.social-row a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.whatsapp-float {
  position: fixed;
  right: 20px;
  bottom: 24px;
  width: 58px;
  height: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--lf-whatsapp), #1ea952);
  color: white;
  box-shadow: 0 18px 28px -16px rgba(37, 211, 102, 0.8);
  z-index: 130;
}

.whatsapp-float:hover {
  transform: translateY(-2px);
}

.page-hero {
  position: relative;
  padding: 74px 0 54px;
  background: linear-gradient(135deg, #0a261e 0%, #123f33 100%);
  color: white;
  text-align: center;
  overflow: hidden;
}

.page-hero .hero-green-overlay {
  background: linear-gradient(135deg, rgba(8, 30, 24, 0.84), rgba(17, 61, 49, 0.76), rgba(27, 94, 76, 0.58));
}

.page-hero .container {
  position: relative;
  z-index: 2;
}

.page-hero h1,
.page-hero p {
  color: white;
}

.rotating-farm-seal {
  position: absolute;
  right: 8%;
  top: 20px;
  width: 150px;
  height: 150px;
  z-index: 2;
  opacity: 0.9;
  animation: spinSlow 30s linear infinite;
}

.rotating-farm-seal svg {
  width: 100%;
  height: 100%;
}

.rotating-farm-seal text {
  fill: #f5a623;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 600;
}

.seal-icon {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: white;
  font-size: 1.65rem;
}

@keyframes kenBurns {
  0% { transform: scale(1.06) translate3d(0, 0, 0); }
  100% { transform: scale(1.12) translate3d(-1.2%, 1.5%, 0); }
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 980px) {
  .nav-links {
    gap: 16px;
    font-size: 0.8rem;
  }

  .hero-grid,
  .two-col,
  .footer-grid,
  .card-grid,
  .value-grid {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    padding-top: 52px;
  }

  .floating-badge-bottom {
    position: static;
    margin-top: 18px;
    width: fit-content;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .navbar {
    flex-wrap: wrap;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .nav-menu-wrap {
    width: 100%;
    justify-content: space-between;
  }

  .nav-links {
    overflow-x: auto;
    width: 100%;
    padding-bottom: 6px;
  }

  .hero-copy {
    text-align: center;
  }

  .hero-ctas {
    justify-content: center;
  }

  .hero-note {
    margin-left: auto;
    margin-right: auto;
  }

  .section {
    padding: 68px 0;
  }
}

@media (max-width: 560px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .rotating-farm-seal {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
