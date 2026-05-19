// ── I18N / Language Manager ──
const LanguageManager = (() => {
  const STORAGE_KEY = 'lang';
  const SUPPORTED = ['pt', 'en'];
  const DEFAULT = (navigator.language && navigator.language.startsWith('en')) ? 'en' : 'pt';

  const translations = {
    pt: {
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.portfolio': 'Portfólio',
      'nav.contact': 'Contato',
      'hero.role': 'Designer Gráfico & Desenvolvedor Web',
      'hero.cta_work': 'Ver Meu Trabalho',
      'hero.cta_contact': 'Contato',
      'cta.title': 'Tem um projeto em mente?',
      'cta.desc': 'Estou disponível para novos projetos. Fale comigo — responderei em 24 horas.',
      'cta.button_contact': 'Falar Comigo',
      'about.tag': 'Sobre Mim',
      'about.title': 'Olá, sou o <em>Bruno</em>',
      'about.subtitle': 'Designer gráfico e desenvolvedor web apaixonado por criar experiências digitais que unem estética e funcionalidade.',
      'profile.role': 'Designer & Desenvolvedor Web',
      'profile.bio': 'Sou Bruno Gomes — designer e desenvolvedor front‑end especializado em construir interfaces acessíveis, performáticas e escaláveis. Trabalho com HTML5, CSS moderno (Flexbox, Grid, custom properties), JavaScript (ES6+), React, e bundlers como Vite; tenho experiência em Node.js/Express, APIs REST e deploy em Vercel/Netlify. Abordo cada projeto com foco em semântica, otimização (critical CSS, lazy-loading, code-splitting) e testes, priorizando a experiência do utilizador e a manutenção do código.',
      'profile.badges.title': 'Tecnologias',
      'profile.actions.contact': 'Falar Comigo',
      'profile.actions.cv': 'Download CV',
      'skills.title': 'Competências',
      'skill.design': 'Design',
      'skill.design.desc': 'Criação de identidades visuais, interfaces atraentes e experiências digitais intuitivas.',
      'skill.frontend': 'Frontend',
      'skill.frontend.desc': 'HTML5, CSS moderno, JavaScript ES6+, React e Vite com foco em performance e acessibilidade.',
      'skill.backend': 'Backend',
      'skill.backend.desc': 'Node.js, Express, APIs REST, MongoDB e integração com serviços cloud.',
      'skill.tools': 'Ferramentas',
      'skill.tools.desc': 'Figma, Adobe Creative Suite, Git, VS Code, DevTools e metodologias ágeis.',
      'timeline.title': 'Trajetória',
      'timeline.year.1': '2024 — Presente',
      'timeline.title.1': 'Freelancer Full-Stack',
      'timeline.desc.1': 'Desenvolvendo projetos web completos, desde design até deploy. Trabalhando com startups e pequenas empresas.',
      'timeline.year.2': '2023 — 2024',
      'timeline.title.2': 'Desenvolvedor Frontend',
      'timeline.desc.2': 'Criação de interfaces responsivas e performáticas. Foco em acessibilidade e otimização.',
      'timeline.year.3': '2022 — 2023',
      'timeline.title.3': 'Designer Gráfico',
      'timeline.desc.3': 'Identidades visuais, branding e design editorial para diversos clientes.',
      'timeline.year.4': '2020 — 2022',
      'timeline.title.4': 'Aprendizado Contínuo',
      'timeline.desc.4': 'Curssos online, projetos pessoais e desenvolvimento de skills em web design e programação.',
      'services.title': 'Serviços',
      'service.web-design': 'Web Design',
      'service.web-design.desc': 'Websites modernos, responsivos e otimizados para conversão.',
      'service.app-dev': 'Desenvolvimento de Apps',
      'service.app-dev.desc': 'Aplicações web e mobile com tecnologias atuais.',
      'service.branding': 'Branding',
      'service.branding.desc': 'Identidades visuais, logos e guias de estilo.',
      'service.seo': 'SEO & Performance',
      'service.seo.desc': 'Otimização para motores de busca e performance web.',
      'testimonials.title': 'Depoimentos',
      'testimonial.name.1': 'João Pedro',
      'testimonial.role.1': 'CEO, TechStart',
      'testimonial.text.1': '"Bruno transformou completamente a presença online da nossa startup. Trabalho profissional, entrega rápida e excelente comunicação."',
      'testimonial.name.2': 'Maria Clara',
      'testimonial.role.2': 'Designer, Creative Co.',
      'testimonial.text.2': '"Fantástico colaborador. Compreende design e código. Recomendo vivamente para qualquer projeto web."',
      'testimonial.name.3': 'Alexandre Juntos',
      'testimonial.role.3': 'Entrepreneur, E-commerce',
      'testimonial.text.3': '"Entregou um site de e-commerce impecável. Performance excelente, design moderno. Superou expectativas!"',
      'numbers.experience': 'Anos de Experiência',
      'numbers.projects': 'Projetos Entregues',
      'numbers.print': 'Imprimir — Arte Final',
      'numbers.languages': 'Idiomas',
      'portfolio.tag': 'Trabalho',
      'portfolio.title': 'Meus <em>Projetos</em>',
      'portfolio.subtitle': 'Uma seleção de trabalhos em desenvolvimento web, design gráfico e identidade visual.',
      'card.dev': 'Desenvolvimento',
      'card.design': 'Design Gráfico',
      'card.complete': 'Completo',
      'card.mobile': 'App Mobile',
      'card.view': 'Ver →',
      'contact.tag': 'Contato',
      'contact.title': 'Vamos <em>trabalhar</em> juntos',
      'contact.subtitle': 'Estou disponível para novos projetos. Fale comigo — responderei em 24 horas.',
      'footer.copy': '&copy; <span id="yr"></span> Bruno Gomes — Todos os direitos reservados.',
      'footer.sub': 'Designer Gráfico & Desenvolvedor Web',
      'skip.link': 'Saltar para o conteúdo principal'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      'hero.role': 'Graphic Designer & Web Developer',
      'hero.cta_work': 'See my work',
      'hero.cta_contact': 'Contact',
      'cta.title': 'Got a project in mind?',
      'cta.desc': 'I am available for new projects. Reach out — I’ll reply within 24 hours.',
      'cta.button_contact': 'Get in touch',
      'about.tag': 'About',
      'about.title': 'Hi, I\'m <em>Bruno</em>',
      'about.subtitle': 'Graphic designer and web developer passionate about creating digital experiences that unite aesthetics and functionality.',
      'profile.role': 'Designer & Web Developer',
      'profile.bio': 'I\'m Bruno Gomes — a front-end designer and developer specializing in building accessible, performant, and scalable interfaces. I work with HTML5, modern CSS (Flexbox, Grid, custom properties), JavaScript (ES6+), React and bundlers like Vite; experienced with Node.js/Express, REST APIs and deployments to Vercel/Netlify. I approach projects focusing on semantics, optimization (critical CSS, lazy-loading, code-splitting) and testing, prioritizing user experience and maintainable code.',
      'profile.badges.title': 'Technologies',
      'profile.actions.contact': 'Get in touch',
      'profile.actions.cv': 'Download CV',
      'skills.title': 'Skills',
      'skill.design': 'Design',
      'skill.design.desc': 'Creating visual identities, attractive interfaces and intuitive digital experiences.',
      'skill.frontend': 'Frontend',
      'skill.frontend.desc': 'HTML5, modern CSS, JavaScript ES6+, React and Vite with focus on performance and accessibility.',
      'skill.backend': 'Backend',
      'skill.backend.desc': 'Node.js, Express, REST APIs, MongoDB and cloud service integrations.',
      'skill.tools': 'Tools',
      'skill.tools.desc': 'Figma, Adobe Creative Suite, Git, VS Code, DevTools and agile methodologies.',
      'timeline.title': 'Journey',
      'timeline.year.1': '2024 — Present',
      'timeline.title.1': 'Full-Stack Freelancer',
      'timeline.desc.1': 'Developing complete web projects, from design to deployment. Working with startups and small businesses.',
      'timeline.year.2': '2023 — 2024',
      'timeline.title.2': 'Frontend Developer',
      'timeline.desc.2': 'Creating responsive and performant interfaces. Focus on accessibility and optimization.',
      'timeline.year.3': '2022 — 2023',
      'timeline.title.3': 'Graphic Designer',
      'timeline.desc.3': 'Visual identities, branding and editorial design for various clients.',
      'timeline.year.4': '2020 — 2022',
      'timeline.title.4': 'Continuous Learning',
      'timeline.desc.4': 'Online courses, personal projects and skill development in web design and programming.',
      'services.title': 'Services',
      'service.web-design': 'Web Design',
      'service.web-design.desc': 'Modern, responsive websites optimized for conversion.',
      'service.app-dev': 'App Development',
      'service.app-dev.desc': 'Web and mobile applications with current technologies.',
      'service.branding': 'Branding',
      'service.branding.desc': 'Visual identities, logos and style guides.',
      'service.seo': 'SEO & Performance',
      'service.seo.desc': 'Search engine optimization and web performance.',
      'testimonials.title': 'Testimonials',
      'testimonial.name.1': 'John Peters',
      'testimonial.role.1': 'CEO, TechStart',
      'testimonial.text.1': '"Bruno completely transformed our startup\'s online presence. Professional work, quick delivery and excellent communication."',
      'testimonial.name.2': 'Mary Clare',
      'testimonial.role.2': 'Designer, Creative Co.',
      'testimonial.text.2': '"Outstanding collaborator. Understands both design and code. Highly recommend for any web project."',
      'testimonial.name.3': 'Alexander Together',
      'testimonial.role.3': 'Entrepreneur, E-commerce',
      'testimonial.text.3': '"Delivered a flawless e-commerce site. Excellent performance, modern design. Exceeded expectations!"',
      'numbers.experience': 'Years of Experience',
      'numbers.projects': 'Projects Delivered',
      'numbers.print': 'Print — Final Artwork',
      'numbers.languages': 'Languages',
      'portfolio.tag': 'Work',
      'portfolio.title': 'My <em>Projects</em>',
      'portfolio.subtitle': 'A selection of work in web development, graphic design and visual identity.',
      'card.dev': 'Development',
      'card.design': 'Graphic Design',
      'card.complete': 'Completed',
      'card.mobile': 'Mobile App',
      'card.view': 'View →',
      'contact.tag': 'Contact',
      'contact.title': 'Let\'s <em>work</em> together',
      'contact.subtitle': 'I am available for new projects. Reach out — I’ll reply within 24 hours.',
      'footer.copy': '&copy; <span id="yr"></span> Bruno Gomes — All rights reserved.',
      'footer.sub': 'Graphic Designer & Web Developer',
      'skip.link': 'Skip to main content'
    }
  };

  const get = (lang, key) => (translations[lang] && translations[lang][key]) || '';

  const setTextPreserve = (el, text, allowHtml = false) => {
    if (!el) return;
    if (allowHtml) {
      el.innerHTML = text;
      return;
    }
    // If element doesn't have element children, set textContent
    const hasElementChildren = Array.from(el.childNodes).some(n => n.nodeType === 1);
    if (!hasElementChildren) {
      el.textContent = text;
      return;
    }
    // Try to find an existing text node
    const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
    if (textNode) {
      textNode.nodeValue = text;
      return;
    }
    // Fallback: insert text before the first element child
    const firstEl = Array.from(el.childNodes).find(n => n.nodeType === 1);
    if (firstEl) {
      el.insertBefore(document.createTextNode(text + ' '), firstEl);
    } else {
      el.textContent = text;
    }
  };

  const apply = (lang) => {
    document.documentElement.lang = lang;

    // Nav
    setTextPreserve(document.getElementById('nav-home'), get(lang, 'nav.home'));
    setTextPreserve(document.getElementById('nav-about'), get(lang, 'nav.about'));
    setTextPreserve(document.getElementById('nav-portfolio'), get(lang, 'nav.portfolio'));
    setTextPreserve(document.getElementById('nav-contact'), get(lang, 'nav.contact'));

    // Skip link
    setTextPreserve(document.querySelector('.skip-link'), get(lang, 'skip.link'));

    // Hero
    setTextPreserve(document.querySelector('.hero .hero-role'), get(lang, 'hero.role'));
    // hero primary/secondary buttons (preserve svg)
    const heroPrimary = document.querySelector('.hero .hero-ctas .btn.btn-primary');
    if (heroPrimary) setTextPreserve(heroPrimary, get(lang, 'hero.cta_work'));
    const heroGhost = document.querySelector('.hero .hero-ctas .btn.btn-ghost');
    if (heroGhost) setTextPreserve(heroGhost, get(lang, 'hero.cta_contact'));

    // Numbers (ordered)
    const nums = document.querySelectorAll('.num-lbl');
    const numKeys = ['numbers.experience', 'numbers.projects', 'numbers.print', 'numbers.languages'];
    nums.forEach((el, i) => setTextPreserve(el, get(lang, numKeys[i] || '')));

    // CTA strip
    setTextPreserve(document.querySelector('.cta-strip .cta-title'), get(lang, 'cta.title'));
    setTextPreserve(document.querySelector('.cta-strip .cta-desc'), get(lang, 'cta.desc'));
    const ctaBtn = document.querySelector('.cta-strip .btn.btn-primary');
    if (ctaBtn) setTextPreserve(ctaBtn, get(lang, 'cta.button_contact'));

    // About page
    const aboutTag = document.querySelector('#page-about .page-tag');
    if (aboutTag) setTextPreserve(aboutTag, get(lang, 'about.tag'));
    const aboutTitle = document.querySelector('#page-about .page-title');
    if (aboutTitle) setTextPreserve(aboutTitle, get(lang, 'about.title'), true);
    setTextPreserve(document.querySelector('#page-about .page-subtitle'), get(lang, 'about.subtitle'));
    setTextPreserve(document.querySelector('#page-about .profile-role'), get(lang, 'profile.role'));
    setTextPreserve(document.querySelector('#page-about .profile-bio'), get(lang, 'profile.bio'));
    const badgesTitle = document.querySelector('#page-about .profile-badges-title');
    if (badgesTitle) setTextPreserve(badgesTitle, get(lang, 'profile.badges.title'));
    const aboutContactBtn = document.querySelector('#page-about .profile-actions .btn.btn-primary');
    if (aboutContactBtn) setTextPreserve(aboutContactBtn, get(lang, 'profile.actions.contact'));
    const aboutCv = document.querySelector('#page-about .profile-actions .btn.btn-ghost');
    if (aboutCv) setTextPreserve(aboutCv, get(lang, 'profile.actions.cv'));

    // Skills section
    const skillsTitle = document.querySelector('#skills-title');
    if (skillsTitle) setTextPreserve(skillsTitle, get(lang, 'skills.title'));
    const skillNames = document.querySelectorAll('#page-about .skill-name');
    const skillKeys = ['skill.design', 'skill.frontend', 'skill.backend', 'skill.tools'];
    skillNames.forEach((el, i) => setTextPreserve(el, get(lang, skillKeys[i] || '')));
    const skillDescs = document.querySelectorAll('#page-about .skill-desc');
    const skillDescKeys = ['skill.design.desc', 'skill.frontend.desc', 'skill.backend.desc', 'skill.tools.desc'];
    skillDescs.forEach((el, i) => setTextPreserve(el, get(lang, skillDescKeys[i] || '')));

    // Timeline section
    const timelineTitle = document.querySelector('#timeline-title');
    if (timelineTitle) setTextPreserve(timelineTitle, get(lang, 'timeline.title'));
    const timelineYears = document.querySelectorAll('#page-about .timeline-year');
    const timelineYearKeys = ['timeline.year.1', 'timeline.year.2', 'timeline.year.3', 'timeline.year.4'];
    timelineYears.forEach((el, i) => setTextPreserve(el, get(lang, timelineYearKeys[i] || '')));
    const timelineTitles = document.querySelectorAll('#page-about .timeline-title');
    const timelineTitleKeys = ['timeline.title.1', 'timeline.title.2', 'timeline.title.3', 'timeline.title.4'];
    timelineTitles.forEach((el, i) => setTextPreserve(el, get(lang, timelineTitleKeys[i] || '')));
    const timelineDescs = document.querySelectorAll('#page-about .timeline-desc');
    const timelineDescKeys = ['timeline.desc.1', 'timeline.desc.2', 'timeline.desc.3', 'timeline.desc.4'];
    timelineDescs.forEach((el, i) => setTextPreserve(el, get(lang, timelineDescKeys[i] || '')));

    // Services section
    const servicesTitle = document.querySelector('#services-title');
    if (servicesTitle) setTextPreserve(servicesTitle, get(lang, 'services.title'));
    const serviceTitles = document.querySelectorAll('#page-about .service-title');
    const serviceKeys = ['service.web-design', 'service.app-dev', 'service.branding', 'service.seo'];
    serviceTitles.forEach((el, i) => setTextPreserve(el, get(lang, serviceKeys[i] || '')));
    const serviceDescs = document.querySelectorAll('#page-about .service-desc');
    const serviceDescKeys = ['service.web-design.desc', 'service.app-dev.desc', 'service.branding.desc', 'service.seo.desc'];
    serviceDescs.forEach((el, i) => setTextPreserve(el, get(lang, serviceDescKeys[i] || '')));

    // Testimonials section
    const testimonialsTitle = document.querySelector('#testimonials-title');
    if (testimonialsTitle) setTextPreserve(testimonialsTitle, get(lang, 'testimonials.title'));
    const testimonialNames = document.querySelectorAll('#page-about .testimonial-name');
    const testimonialNameKeys = ['testimonial.name.1', 'testimonial.name.2', 'testimonial.name.3'];
    testimonialNames.forEach((el, i) => setTextPreserve(el, get(lang, testimonialNameKeys[i] || '')));
    const testimonialRoles = document.querySelectorAll('#page-about .testimonial-role');
    const testimonialRoleKeys = ['testimonial.role.1', 'testimonial.role.2', 'testimonial.role.3'];
    testimonialRoles.forEach((el, i) => setTextPreserve(el, get(lang, testimonialRoleKeys[i] || '')));
    const testimonialTexts = document.querySelectorAll('#page-about .testimonial-text');
    const testimonialTextKeys = ['testimonial.text.1', 'testimonial.text.2', 'testimonial.text.3'];
    testimonialTexts.forEach((el, i) => setTextPreserve(el, get(lang, testimonialTextKeys[i] || '')));

    // Portfolio page
    const portTag = document.querySelector('#page-portfolio .page-tag');
    if (portTag) setTextPreserve(portTag, get(lang, 'portfolio.tag'));
    const portTitle = document.querySelector('#page-portfolio .page-title');
    if (portTitle) setTextPreserve(portTitle, get(lang, 'portfolio.title'), true);
    setTextPreserve(document.querySelector('#page-portfolio .page-subtitle'), get(lang, 'portfolio.subtitle'));

    // Card badges and view links (order-sensitive: matches visible cards)
    const cardBadgeKeys = ['card.dev','card.design','card.complete','card.mobile'];
    const badges = document.querySelectorAll('.grid .card .badge');
    badges.forEach((b, i) => setTextPreserve(b, get(lang, cardBadgeKeys[i] || '')));

    const viewLinks = document.querySelectorAll('.grid .card .card-footer a');
    viewLinks.forEach((a) => setTextPreserve(a, get(lang, 'card.view')));

    // Contact page
    const contactTag = document.querySelector('#page-contact .page-tag');
    if (contactTag) setTextPreserve(contactTag, get(lang, 'contact.tag'));
    const contactTitle = document.querySelector('#page-contact .page-title');
    if (contactTitle) setTextPreserve(contactTitle, get(lang, 'contact.title'), true);
    setTextPreserve(document.querySelector('#page-contact .page-subtitle'), get(lang, 'contact.subtitle'));

    // Footer
    const footerCopy = document.querySelector('.footer-copy');
    if (footerCopy) footerCopy.innerHTML = get(lang, 'footer.copy');
    setTextPreserve(document.querySelector('.footer-sub'), get(lang, 'footer.sub'));

    // Update lang icon
    const langIcon = document.getElementById('lang-icon');
    if (langIcon) langIcon.textContent = lang.toUpperCase();
  };

  const setLanguage = (lang) => {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(_) {}
    apply(lang);
  };

  const toggleLanguage = () => {
    const current = document.documentElement.lang || DEFAULT;
    const next = current === 'pt' ? 'en' : 'pt';
    setLanguage(next);
  };

  const init = () => {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch(_) {}
    const initial = saved || DEFAULT;
    setLanguage(initial);

    // Wire up simple toggle button if present
    const btn = document.getElementById('lang-btn');
    if (btn) btn.addEventListener('click', toggleLanguage);

    // Wire up selector options
    const opts = document.querySelectorAll('.lang-option');
    opts.forEach(o => o.addEventListener('click', () => {
      const l = o.dataset.lang;
      setLanguage(l);
      // update aria-pressed
      opts.forEach(x => x.setAttribute('aria-pressed', x === o ? 'true' : 'false'));
    }));
  };

  return { init, setLanguage, toggleLanguage };
})();
