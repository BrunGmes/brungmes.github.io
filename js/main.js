// ── MAIN INIT ──
document.addEventListener('DOMContentLoaded', () => {
  // Initialize year in footer
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Initialize modules
  ThemeManager.init();
  LanguageManager.init();
  NavigationManager.initScroll();
  UIManager.initReveal();
  ProjectManager.init();

  // Counter animation
  initCounters();

  // Setup event listeners
  setupEventListeners();
});

// ── COUNTER ANIMATION ──
const initCounters = () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;

      const el = e.target;
      const target = parseInt(el.dataset.count);
      if (!target) return;

      // Prevent double animation
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';

      let start = 0;
      const duration = 2000; // 2 segundos
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * easeProgress);
        
        el.textContent = current + (current >= target ? '' : '+');
        
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + '+';
        }
      };

      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: .5 });

  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
};

// ── EVENT LISTENERS ──
const setupEventListeners = () => {
  // Theme toggle
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', ThemeManager.toggleTheme);
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.querySelector('i').className = 'fas fa-bars';
    };
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  // Form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', UIManager.submitForm);
  }

  // Tab navigation
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      UIManager.switchTab(this.dataset.tab);
    });
  });

  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      UIManager.filterProjects(this.dataset.filter || 'all');
    });
  });

  // Page navigation links
  document.querySelectorAll('a[onclick*="showPage"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const match = this.getAttribute('onclick').match(/'([^']+)'/);
      if (match) {
        e.preventDefault();
        NavigationManager.showPage(match[1]);
      }
    });
  });
};

console.log('Portfolio site initialized ✓');
