// ── CONFIGURATION & CONSTANTS ──
const CONFIG = {
  // Site
  siteName: 'Bruno Gomes',
  siteTitle: 'Designer Gráfico & Desenvolvedor Web',
  siteDescription: 'Portfolio profissional de Bruno Gomes',
  siteUrl: 'https://brungomes.com', // Update with your domain

  // Contact
  email: 'bhsgomes@hotmail.com',
  phone: '+351 XXX XXX XXX', // Optional
  location: 'Torres Vedras, Portugal',

  // Social
  social: {
    github: 'https://github.com/BrunGmes',
    linkedin: 'https://linkedin.com/in/brungmes',
    behance: 'https://behance.net/brungmes',
    twitter: '', // Optional
    instagram: '' // Optional
  },

  // Features
  features: {
    darkMode: true,
    analytics: false,
    comments: false
  },

  // API endpoints (if needed)
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000
  },

  // Cache
  cache: {
    duration: 3600 // 1 hour in seconds
  },

  // Analytics (if using)
  gtag: '', // Google Analytics ID

  // Other
  version: '1.0.0',
  environment: 'production' // development | staging | production
};

// Logging utility
const Logger = (() => {
  const isDev = CONFIG.environment === 'development';

  return {
    log: (...args) => {
      if (isDev) console.log(...args);
    },
    warn: (...args) => {
      if (isDev) console.warn(...args);
    },
    error: (...args) => {
      console.error(...args);
    }
  };
})();
