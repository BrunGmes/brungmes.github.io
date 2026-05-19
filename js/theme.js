// ── THEME MANAGER ──
const ThemeManager = (() => {
  const STORAGE_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === DARK ? LIGHT : DARK;
    setTheme(next);
  };

  const setTheme = (theme) => {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');

    html.setAttribute('data-theme', theme);
    icon.className = theme === DARK ? 'fas fa-sun' : 'fas fa-moon';

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch(_) {}
  };

  const init = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setTheme(saved);
      }
    } catch(_) {}
  };

  return { toggleTheme, init };
})();
