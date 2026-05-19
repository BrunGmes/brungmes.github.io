// ── UTILITIES ──
const Utils = (() => {
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  const observeElement = (element, callback, options = {}) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry);
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(element);
    return observer;
  };

  const smoothScroll = (target, duration = 1000) => {
    const element = typeof target === 'string'
      ? document.querySelector(target)
      : target;

    if (!element) return;

    const start = window.pageYOffset;
    const end = element.offsetTop;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animation = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copiado para clipboard!');
    }).catch(err => {
      console.error('Erro ao copiar:', err);
    });
  };

  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  const setQueryParam = (param, value) => {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);
  };

  const addClass = (element, className) => {
    element.classList.add(className);
  };

  const removeClass = (element, className) => {
    element.classList.remove(className);
  };

  const toggleClass = (element, className) => {
    element.classList.toggle(className);
  };

  const hasClass = (element, className) => {
    return element.classList.contains(className);
  };

  return {
    debounce,
    throttle,
    observeElement,
    smoothScroll,
    copyToClipboard,
    getQueryParam,
    setQueryParam,
    addClass,
    removeClass,
    toggleClass,
    hasClass
  };
})();
