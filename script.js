// ==========================================================================
// LIVING FOUNTAINS FARM — Shared Site Behavior & Interactions
// ==========================================================================

(function () {
  'use strict';

  // 1. Mobile Navigation Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close menu when a navigation link is tapped
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });

    // Close when clicking outside of menu
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  }

  // 2. Tabs Switcher
  const tabButtons = document.querySelectorAll('.tab-btn');
  if (tabButtons.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        if (!target) return;

        // Scoped tab group selection
        const container = btn.closest('.container') || document;
        container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const panel = document.getElementById(target);
        if (panel) {
          panel.classList.add('active');
          // Re-trigger search filter on tab switch if search input exists
          applyProduceFilter();
        }
      });
    });
  }

  // 3. Product Live Search & Filter (our-products.html)
  const searchInput = document.getElementById('produceSearch');
  const clearBtn = document.getElementById('clearSearchBtn');
  const countBadge = document.getElementById('productCountBadge');

  function applyProduceFilter() {
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();
    const activePanel = document.querySelector('.tab-panel.active') || document;
    const cards = activePanel.querySelectorAll('.produce-card');
    let matchedCount = 0;

    cards.forEach(card => {
      const localName = (card.querySelector('.produce-local-name')?.textContent || '').toLowerCase();
      const engName = (card.querySelector('.produce-eng-name')?.textContent || '').toLowerCase();

      if (!query || localName.includes(query) || engName.includes(query)) {
        card.style.display = '';
        matchedCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Toggle clear button visibility
    if (clearBtn) {
      clearBtn.style.display = query ? 'flex' : 'none';
    }

    // Update count badge
    if (countBadge) {
      if (query) {
        countBadge.innerHTML = `<i class="fas fa-magnifying-glass"></i> Found ${matchedCount} item${matchedCount === 1 ? '' : 's'}`;
      } else {
        countBadge.innerHTML = `<i class="fas fa-leaf"></i> ${cards.length} items in category`;
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyProduceFilter);

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        applyProduceFilter();
      });
    }

    // Initialize badge count on load
    applyProduceFilter();
  }

  // 4. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  if (faqQuestions.length) {
    faqQuestions.forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        // Close siblings
        item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  // 5. Interactive WhatsApp Widget Enhancement
  const rawFloat = document.querySelector('.whatsapp-float');
  if (rawFloat && !rawFloat.closest('.whatsapp-float-wrap')) {
    const wrap = document.createElement('div');
    wrap.className = 'whatsapp-float-wrap';

    const menu = document.createElement('div');
    menu.className = 'whatsapp-menu-popup';
    menu.innerHTML = `
      <div class="whatsapp-menu-header">
        <i class="fab fa-whatsapp"></i>
        <div>
          <strong>Living Fountains Farm</strong>
          <span>Kwale County, Kenya</span>
        </div>
      </div>
      <a href="https://wa.me/254114114131" class="whatsapp-menu-link" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-comment-dots"></i>
        <span>Chat with our Farm Team</span>
      </a>
      <a href="https://wa.me/c/236344030818365" class="whatsapp-menu-link" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-basket-shopping"></i>
        <span>WhatsApp Shop</span>
      </a>
    `;

    rawFloat.parentNode.insertBefore(wrap, rawFloat);
    wrap.appendChild(menu);
    wrap.appendChild(rawFloat);

    // Toggle menu on click for mobile devices
    rawFloat.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        // Toggle popup on mobile touch
        if (!wrap.classList.contains('active')) {
          e.preventDefault();
          wrap.classList.add('active');
        }
      }
    });

    // Close when tapping elsewhere
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('active');
      }
    });
  }

  // 6. Header Scroll Effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 6px 20px -8px rgba(12, 43, 34, 0.15)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

})();
