// ── PROJECTS DATA ──
// Adiciona/edita projetos aqui. `description` separa parágrafos por linha em branco (\n).
// `image`, `link` e `github` são opcionais (strings vazias = oculto).
const PROJECTS = [
  {
    id: 'portfolio-web',
    icon: 'fa-code',
    category: 'web',
    year: '2024',
    title: { pt: 'Portfolio Web', en: 'Portfolio Website' },
    summary: {
      pt: 'Site responsivo moderno com animações CSS avançadas e design minimalista.',
      en: 'Modern responsive website with advanced CSS animations and a minimalist design.'
    },
    description: {
      pt: 'Site pessoal construído como vitrine de design e desenvolvimento.\n\nFoca em semântica, acessibilidade e performance, com tema claro/escuro, conteúdo bilíngue e navegação fluida entre páginas.\n\nTudo em HTML, CSS e JavaScript puro — sem dependências de frameworks.',
      en: 'Personal website built as a showcase of design and development.\n\nIt focuses on semantics, accessibility and performance, with light/dark theme, bilingual content and smooth page navigation.\n\nEverything in plain HTML, CSS and JavaScript — no framework dependencies.'
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    link: '',
    github: 'https://github.com/BrunGmes'
  },
  {
    id: 'identidade-visual',
    icon: 'fa-palette',
    category: 'design',
    year: '2024',
    title: { pt: 'Identidade Visual', en: 'Visual Identity' },
    summary: {
      pt: 'Criação de logo, paleta de cores e guia de estilos para startup de tech.',
      en: 'Logo, color palette and style guide creation for a tech startup.'
    },
    description: {
      pt: 'Projeto de branding completo para uma startup de tecnologia.\n\nInclui pesquisa de referências, desenvolvimento de logo, sistema de cores, tipografia e um guia de estilo com aplicações práticas.\n\nO objetivo foi criar uma identidade moderna e escalável, fácil de aplicar em produto e marketing.',
      en: 'A complete branding project for a tech startup.\n\nIncludes reference research, logo development, color system, typography and a style guide with practical applications.\n\nThe goal was to create a modern, scalable identity that is easy to apply across product and marketing.'
    },
    stack: ['Branding', 'Design'],
    image: '',
    link: '',
    github: ''
  },
  {
    id: 'ecommerce-platform',
    icon: 'fa-rocket',
    category: 'web',
    year: '2023',
    title: { pt: 'E-commerce Platform', en: 'E-commerce Platform' },
    summary: {
      pt: 'Plataforma de e-commerce com carrinho, pagamento e painel administrativo.',
      en: 'E-commerce platform with cart, payment and admin dashboard.'
    },
    description: {
      pt: 'Plataforma de e-commerce completa, do catálogo ao checkout.\n\nInclui carrinho de compras, integração de pagamento e um painel administrativo para gestão de produtos e encomendas.\n\nStack em JavaScript de ponta a ponta, com API REST e base de dados NoSQL.',
      en: 'A full e-commerce platform, from catalogue to checkout.\n\nIncludes shopping cart, payment integration and an admin dashboard to manage products and orders.\n\nFull-stack JavaScript, with a REST API and NoSQL database.'
    },
    stack: ['React', 'Node.js', 'MongoDB'],
    image: '',
    link: '',
    github: ''
  },
  {
    id: 'aplicativo-fitness',
    icon: 'fa-mobile-alt',
    category: 'app',
    year: '2023',
    title: { pt: 'Aplicativo Fitness', en: 'Fitness App' },
    summary: {
      pt: 'App mobile para treinos personalizados com tracking de progresso.',
      en: 'Mobile app for personalised workouts with progress tracking.'
    },
    description: {
      pt: 'Aplicativo mobile para treinos personalizados.\n\nPermite criar planos de treino, seguir progresso ao longo do tempo e receber lembretes.\n\nConstruído com React Native e Firebase, com foco em simplicidade e usabilidade.',
      en: 'A mobile app for personalised workouts.\n\nLets you create workout plans, track progress over time and receive reminders.\n\nBuilt with React Native and Firebase, focused on simplicity and usability.'
    },
    stack: ['React Native', 'Firebase'],
    image: '',
    link: '',
    github: ''
  }
];

// ── PROJECT MANAGER ──
const ProjectManager = (() => {
  let currentId = null;

  const lang = () => document.documentElement.lang || 'pt';
  const t = (obj) => (obj[lang()] || obj.pt);
  const i18n = (key) => LanguageManager.get(lang(), key);

  const coverMarkup = (p, alt) => {
    if (p.image) return `<img src="${p.image}" alt="${alt}" loading="lazy">`;
    return `<i class="fas ${p.icon}" aria-hidden="true"></i>`;
  };

  const renderGrid = () => {
    const el = document.getElementById('projects-grid');
    if (!el) return;
    el.innerHTML = PROJECTS.map(p => `
      <article class="project-card stagger-item">
        <div class="project-image">${coverMarkup(p, t(p.title))}</div>
        <div class="project-content">
          <h3 class="project-title">${t(p.title)}</h3>
          <p class="project-description">${t(p.summary)}</p>
          <div class="project-tags">${p.stack.map(s => `<span class="project-tag">${s}</span>`).join('')}</div>
        </div>
        <div class="project-footer">
          <button class="project-link" onclick="ProjectManager.open('${p.id}')">
            ${i18n('project.view')}
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </article>
    `).join('');
  };

  const renderDetail = (p) => {
    currentId = p.id;
    const el = document.getElementById('project-content');
    if (!el) return;
    const l = lang();
    const category = i18n('project.category.' + p.category) || p.category;
    const paragraphs = t(p.description).split('\n')
      .map(x => x.trim())
      .filter(Boolean)
      .map(x => `<p>${x}</p>`)
      .join('');

    const links = [];
    if (p.link) {
      links.push(`<a class="btn btn-primary" href="${p.link}" target="_blank" rel="noopener">${i18n('project.links.live')} <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>`);
    }
    if (p.github) {
      links.push(`<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> ${i18n('project.links.repo')}</a>`);
    }

    el.innerHTML = `
      <div class="page-hero">
        <div class="page-hero-inner">
          <span class="page-tag"><i class="fas fa-briefcase"></i> ${category}</span>
          <h1 class="page-title">${t(p.title)}</h1>
          <p class="page-subtitle">${t(p.summary)}</p>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <a class="btn btn-ghost project-detail-back" href="#" onclick="NavigationManager.showPage('portfolio'); return false;">
            <i class="fas fa-arrow-left" aria-hidden="true"></i> ${i18n('project.back')}
          </a>
          <div class="project-detail-cover reveal">${coverMarkup(p, t(p.title))}</div>
          <div class="project-detail-body reveal">${paragraphs}</div>
          <div class="project-detail-meta reveal">
            <div class="meta-item">
              <span class="meta-label">${i18n('project.year')}</span>
              <strong>${p.year}</strong>
            </div>
            <div class="meta-item">
              <span class="meta-label">${i18n('project.category')}</span>
              <strong>${category}</strong>
            </div>
            <div class="meta-item meta-stack">
              <span class="meta-label">${i18n('project.stack')}</span>
              <div class="project-tags">${p.stack.map(s => `<span class="project-tag">${s}</span>`).join('')}</div>
            </div>
          </div>
          ${links.length ? `<div class="project-detail-links">${links.join('')}</div>` : ''}
        </div>
      </div>
    `;
  };

  const open = (id) => {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    renderDetail(p);
    NavigationManager.showPage('project');
    // showPage clears all nav active classes; re-mark portfolio after the call
    const navPort = document.getElementById('nav-portfolio');
    if (navPort) navPort.classList.add('active');
  };

  const onLangChange = () => {
    const page = document.getElementById('page-project');
    if (page && page.classList.contains('active') && currentId) {
      const p = PROJECTS.find(x => x.id === currentId);
      if (p) {
        renderDetail(p);
        UIManager.initReveal();
      }
    }
  };

  const init = () => {
    renderGrid();
    document.addEventListener('lang:changed', onLangChange);
  };

  return { init, open };
})();
