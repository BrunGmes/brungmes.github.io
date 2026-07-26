// ── EVENT DELEGATOR ──
// Centraliza todos os event listeners usando data attributes
// Remove duplicação de inline onclick handlers

const EventDelegator = (() => {
  const setup = () => {
    delegateNavigation();
    delegateLanguageSelector();
    delegateThemeToggle();
    delegateFormSubmission();
    delegateTabsAndFilters();
  };

  /**
   * Navigation delegation - data-page attribute
   * Example: <a href="#" data-page="home">Home</a>
   */
  const delegateNavigation = () => {
    document.querySelectorAll('[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.currentTarget.dataset.page;
        if (page) {
          NavigationManager.showPage(page);
        }
      });
    });
  };

  /**
   * Language selector delegation - data-lang attribute
   * Example: <button data-lang="pt">PT</button>
   */
  const delegateLanguageSelector = () => {
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.currentTarget.dataset.lang;
        if (lang) {
          LanguageManager.setLanguage(lang);
        }
      });
    });
  };

  /**
   * Theme toggle - id attribute
   * Example: <button id="theme-btn">🌙</button>
   */
  const delegateThemeToggle = () => {
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', ThemeManager.toggleTheme);
    }
  };

  /**
   * Form submission - id attribute
   * Example: <form id="contact-form"></form>
   */
  const delegateFormSubmission = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', UIManager.submitForm);
    }
  };

  /**
   * Tabs and filters delegation
   * Tabs: data-tab attribute
   * Filters: data-filter attribute
   */
  const delegateTabsAndFilters = () => {
    // Tab buttons
    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = e.currentTarget.dataset.tab;
        if (tab) {
          UIManager.switchTab(tab);
        }
      });
    });

    // Filter buttons
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.currentTarget.dataset.filter || 'all';
        UIManager.filterProjects(filter);
      });
    });
  };

  return { setup };
})();
