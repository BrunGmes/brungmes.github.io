// ── NAVIGATION MANAGER ──
const NavigationManager = (() => {
  let isTransitioning = false;

  const showPage = (name) => {
    // Previne múltiplas transições simultâneas
    if (isTransitioning) return;
    isTransitioning = true;

    // Fade out página atual
    const currentPage = document.querySelector('.page.active');
    if (currentPage) {
      currentPage.style.opacity = '0';
      currentPage.style.transition = 'opacity 0.3s var(--ease-out)';

      // Após fade out, muda página
      setTimeout(() => {
        document.querySelectorAll('.page').forEach(p => {
          p.classList.remove('active');
          p.style.display = 'none';
        });
        const newPage = document.getElementById('page-' + name);
        newPage.classList.add('active');
        newPage.style.display = 'block';
        newPage.style.opacity = '0';
        newPage.style.transition = 'opacity 0.4s var(--ease-out)';

        // Força reflow
        void newPage.offsetWidth;
        newPage.style.opacity = '1';
      }, 300);
    } else {
      // Primeira página
      const newPage = document.getElementById('page-' + name);
      newPage.classList.add('active');
      newPage.style.display = 'block';
    }

    // Atualiza navegação
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const link = document.getElementById('nav-' + name);
    if (link) link.classList.add('active');

    // Scroll suave para topo
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reinicializa animações e efeitos
    setTimeout(() => {
      UIManager.initReveal();
      if (name === 'about') {
        setTimeout(UIManager.animateSkillBars, 100);
      }
      isTransitioning = false;
    }, 400);
  };

  const initScroll = () => {
    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('scrolled', scrollY > 8);
    }, { passive: true });
  };

  return { showPage, initScroll };
})();
