/*
  Living Fountains Farm — final polish layer
  Adds editable text behavior, stronger mobile clarity, and consistency.
*/

[contenteditable="true"] {
  outline: none;
  border-radius: 8px;
  transition: background 0.18s ease, box-shadow 0.18s ease;
}

[contenteditable="true"]:focus {
  background: rgba(255, 255, 255, 0.42);
  box-shadow: 0 0 0 2px rgba(39, 174, 96, 0.25);
  outline: 2px dashed rgba(39, 174, 96, 0.45);
  outline-offset: 2px;
}

[contenteditable="true"]::selection {
  background: rgba(245, 166, 35, 0.26);
}

.hero-copy h1,
.hero-copy p,
.page-hero h1,
.page-hero p,
.testimonial blockquote,
.footer-brand-desc,
.value-num,
.stat-num {
  caret-color: var(--lf-gold-dark);
}

@media (max-width: 760px) {
  .hero-ctas {
    gap: 12px;
  }

  .hero-ctas .btn {
    min-width: 100%;
  }
}
