// ── UI MANAGER ──
const UIManager = (() => {
  const switchTab = (id) => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelector('[data-tab="' + id + '"]').classList.add('active');
    document.getElementById('tab-' + id).classList.add('active');

    if (id === 'skills') {
      setTimeout(animateSkillBars, 100);
    }
  };

  const animateSkillBars = () => {
    document.querySelectorAll('.skill-progress').forEach(bar => {
      const w = bar.style.width;
      bar.style.width = '0';
      bar.style.transition = 'width 1s var(--ease-out)';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bar.style.width = w;
        });
      });
    });
  };

  const filterProjects = (cat) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector('.filter-btn[data-filter="' + cat + '"]');
    if (activeBtn) activeBtn.classList.add('active');

    document.querySelectorAll('.proj-card').forEach(card => {
      const match = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('hidden-card', !match);

      if (match) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.transition = 'opacity .35s ease, transform .35s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 20);
      }
    });
  };

  const initReveal = () => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    const currentPageId = document.querySelector('.page.active')?.id || 'page-home';
    // Observe both standard reveals and stagger items within the active page
    document.querySelectorAll('#' + currentPageId + ' .reveal:not(.visible), #' + currentPageId + ' .stagger-item:not(.visible)').forEach(el => {
      obs.observe(el);
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const fb = document.getElementById('form-feedback');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    setTimeout(() => {
      fb.style.color = 'var(--success)';
      fb.textContent = 'Mensagem enviada com sucesso! Responderei em breve.';
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensagem';
      document.getElementById('contact-form').reset();
      setTimeout(() => { fb.textContent = ''; }, 6000);
    }, 1500);
  };

  return {
    switchTab,
    animateSkillBars,
    filterProjects,
    initReveal,
    submitForm
  };
})();
