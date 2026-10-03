import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, ArrowDown, ArrowUp, Check, Copy, Code2, ExternalLink, Globe2, Menu, Send, X} from 'lucide-react';
import './style.css';

type Lang = 'ru' | 'en';
const base = import.meta.env.BASE_URL;
const demo = `${base}projects/shopco/`;
const asset = (name: string) => `${demo}src/assets/${name}`;
const email = 'Peresvetovec@gmail.com';
const sections = ['projects', 'about', 'skills', 'contact'];
const cleanPath = (path: string) => path.split('/').filter(Boolean).join('/');
const pagePath = () => {
  const path = window.location.pathname.startsWith(base) ? window.location.pathname.slice(base.length) : window.location.pathname;
  return cleanPath(path) || 'home';
};
const pageHref = (page = '') => base + (page ? cleanPath(page) + '/' : '');
const text = {
  ru: {
    name: 'Павел Седых', first: 'Павел', last: 'Седых', nav: ['Проект', 'Обо мне', 'Навыки', 'Контакты'], skip: 'Перейти к содержимому',
    role: 'FRONTEND РАЗРАБОТЧИК', available: 'Открыт к сотрудничеству', hero: 'Идеи становятся', accent: 'интерфейсами.',
    intro: 'Создаю сайты, которые приятно смотреть и удобно использовать. От первого экрана до последнего взаимодействия.',
    view: 'Смотреть проект', contact: 'Обсудить задачу', since: 'В разработке с 2021', location: 'Работаю удалённо', scroll: 'Дальше — моя работа',
    projectLabel: '01 / ИЗБРАННЫЕ ПРОЕКТЫ', projectTitle: 'Дизайн в действии.', projectKind: 'Интернет-магазин · Проект для портфолио',
    projectIntro: 'От макета — к магазину, которым можно пользоваться.',
    projectDescription: 'Реализация SHOP.CO по дизайну Hamza Naeem. Главная страница, каталог, карточка товара и корзина объединены в работающий пользовательский сценарий.',
    taskTitle: 'Задача', task: 'Перенести визуальный стиль макета в адаптивный интерфейс и связать страницы магазина.',
    solutionTitle: 'Реализация', solution: 'Поиск, фильтрация и сортировка товаров, выбор варианта, галерея и корзина с сохранением между посещениями.',
    features: ['4 страницы магазина', 'Поиск и фильтры', 'Корзина в localStorage'], live: 'Открыть SHOP.CO', code: 'Исходный код', design: 'Дизайн: Hamza Naeem', demoNote: 'Учебный проект. Оплата и отправка заказов не подключены.', preview: 'Открыть демонстрацию SHOP.CO',
    aboutLabel: '02 / ОБО МНЕ', aboutTitle: 'Внимание к деталям.', aboutAccent: 'На каждом экране.',
    about1: 'Я Павел, frontend-разработчик. Занимаюсь веб-разработкой с 2021 года и работаю на фрилансе. Превращаю дизайн в понятные, живые интерфейсы.',
    about2: 'Мне важны аккуратная верстка, доступность и предсказуемое поведение сайта — с мышью, клавиатурой или касанием.',
    approach: ['Сначала структура и сценарии', 'Затем детали и адаптивность', 'Проверка перед публикацией'], experience: 'Начало работы', format: 'Формат', freelance: 'Фриланс',
    skillsLabel: '03 / ИНСТРУМЕНТЫ', skillsTitle: 'Технологии под задачу.',
    skills: ['Семантика и доступность', 'Сетки, адаптивность, анимации', 'Логика и взаимодействия', 'Компоненты и типизация', 'Данные и интеграции', 'История изменений и публикация'],
    contactLabel: '04 / КОНТАКТЫ', contactTitle: 'Давайте сделаем', contactAccent: 'что-то хорошее.', contactText: 'Расскажите о задаче или просто напишите. Открыт к проектам и предложениям по frontend-разработке.',
    telegram: 'Написать в Telegram', copy: 'Скопировать email', copied: 'Email скопирован', copyError: 'Не удалось скопировать. Email можно выделить вручную.',
    formName: 'Ваше имя', formEmail: 'Ваш email', formMessage: 'О задаче', placeholder: 'Что хотите сделать? Сроки, идея, ссылка на макет…', send: 'Подготовить письмо', formHint: 'Кнопка откроет вашу почтовую программу с готовым текстом.', formStatus: 'Письмо подготовлено. Если почтовая программа не открылась, напишите в Telegram или скопируйте email.',
    top: 'Наверх', menu: 'Открыть меню', close: 'Закрыть меню', language: 'Switch to English', footer: 'Сделано с вниманием к деталям.',
    description: 'Павел Седых — frontend-разработчик. Адаптивные сайты, React, TypeScript и JavaScript. Избранный проект SHOP.CO.'
  },
  en: {
    name: 'Pavel Sedykh', first: 'Pavel', last: 'Sedykh', nav: ['Project', 'About', 'Skills', 'Contact'], skip: 'Skip to content',
    role: 'FRONTEND DEVELOPER', available: 'Open to collaboration', hero: 'Turning ideas into', accent: 'interfaces.',
    intro: 'I build websites that look considered and feel easy to use. From the first screen to the final interaction.',
    view: 'Explore my work', contact: 'Let’s talk', since: 'Developing since 2021', location: 'Working remotely', scroll: 'Discover my work',
    projectLabel: '01 / SELECTED PROJECTS', projectTitle: 'Design, brought to life.', projectKind: 'E-commerce · Portfolio project',
    projectIntro: 'From a design file to an interactive storefront.',
    projectDescription: 'SHOP.CO, based on a design by Hamza Naeem. A homepage, catalogue, product page and cart connected into a working shopping experience.',
    taskTitle: 'The task', task: 'Translate the visual identity into a responsive interface and connect the storefront pages.',
    solutionTitle: 'The implementation', solution: 'Product search, filtering and sorting, variant selection, image gallery and a cart that persists between visits.',
    features: ['4 storefront pages', 'Search and filters', 'Cart in localStorage'], live: 'Explore SHOP.CO', code: 'Source code', design: 'Design: Hamza Naeem', demoNote: 'Portfolio demo. Payments and order submission are not connected.', preview: 'Open the SHOP.CO demo',
    aboutLabel: '02 / ABOUT ME', aboutTitle: 'Considered details.', aboutAccent: 'On every screen.',
    about1: 'I’m Pavel, a frontend developer working on the web since 2021. As a freelancer, I turn designs into clear, interactive experiences.',
    about2: 'I care about precise layouts, accessibility and predictable behaviour — with a mouse, keyboard or touch.',
    approach: ['Structure and user journeys first', 'Details and responsive layouts next', 'Verification before publishing'], experience: 'Started developing', format: 'Work format', freelance: 'Freelance',
    skillsLabel: '03 / TOOLKIT', skillsTitle: 'The tools for the task.',
    skills: ['Semantics and accessibility', 'Layouts, responsiveness and motion', 'Logic and interactions', 'Components and type safety', 'Data and integrations', 'Version control and publishing'],
    contactLabel: '04 / CONTACT', contactTitle: 'Let’s build', contactAccent: 'something good.', contactText: 'Tell me about your idea, or just say hello. Available for projects and frontend development opportunities.',
    telegram: 'Message on Telegram', copy: 'Copy email', copied: 'Email copied', copyError: 'Could not copy. You can select the email address manually.',
    formName: 'Your name', formEmail: 'Your email', formMessage: 'Your idea', placeholder: 'What would you like to build? An idea, timeframe, design link…', send: 'Prepare an email', formHint: 'This opens your email application with a prepared message.', formStatus: 'Your email is ready. If your email app did not open, use Telegram or copy the email address.',
    top: 'Back to top', menu: 'Open menu', close: 'Close menu', language: 'Переключить на русский', footer: 'Built with care for the details.',
    description: 'Pavel Sedykh — frontend developer. Responsive websites, React, TypeScript and JavaScript. Featured project: SHOP.CO.'
  }
};

function App() {
  const [lang, setLang] = React.useState<Lang>(() => { try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'ru'; } catch { return 'ru'; } });
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('');
  const [notice, setNotice] = React.useState('');
  const [prepared, setPrepared] = React.useState(false);
  const menuButton = React.useRef<HTMLButtonElement>(null);
  const navigation = React.useRef<HTMLElement>(null);
  const progress = React.useRef<HTMLDivElement>(null);
  const t = text[lang];
  const route = pagePath();
  const isHome = route === 'home';
  const projectRoute = route.startsWith('work/');
  const navActive = (id: string) => id === 'projects' ? (route === 'projects' || projectRoute) : route === id;

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `${t.name} — Frontend Developer`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
    try { localStorage.setItem('portfolio-language', lang); } catch { /* Storage is optional. */ }
    setNotice(''); setPrepared(false);
  }, [lang, t.name, t.description]);

  React.useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    let observer: IntersectionObserver | undefined;
    if (!reduced && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer?.unobserve(entry.target); }
      }), {threshold: 0.08});
      targets.forEach(el => { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('reveal-pending'); observer!.observe(el); } });
    }
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.current?.style.setProperty('transform', `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`);
      let current = '';
      sections.forEach(id => { if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= innerHeight * 0.35) current = id; });
      setActive(current); frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    addEventListener('scroll', onScroll, {passive:true}); addEventListener('resize', onScroll); update();
    return () => { observer?.disconnect(); targets.forEach(el => el.classList.remove('reveal-pending')); removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); cancelAnimationFrame(frame); };
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const links = navigation.current?.querySelectorAll<HTMLAnchorElement>('a');
    links?.[0]?.focus();
    const close = () => { setOpen(false); menuButton.current?.focus(); };
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key === 'Tab' && links?.length) {
        const first = links[0], last = menuButton.current;
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        else if (!event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); last?.focus(); }
        else if (event.shiftKey && document.activeElement === last) { event.preventDefault(); links[links.length - 1].focus(); }
      }
    };
    const resize = () => { if (innerWidth > 760) setOpen(false); };
    addEventListener('keydown', keydown); addEventListener('resize', resize);
    return () => { removeEventListener('keydown', keydown); removeEventListener('resize', resize); };
  }, [open]);

  const jump = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(id)?.focus({preventScroll:true}));
  };
  const copyEmail = async () => { try { await navigator.clipboard.writeText(email); setNotice(t.copied); } catch { setNotice(t.copyError); } };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio — ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`);
    setPrepared(true); location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <div className="reading-progress" ref={progress} aria-hidden="true"/>
    <header className="site-header">
      <div className="header-inner wrap">
        <a className="logo" href={pageHref()} aria-label={t.name} onClick={() => setOpen(false)}>PS<span>.</span></a>
        <nav id="navigation" ref={navigation} className={open ? 'navigation is-open' : 'navigation'} aria-label={lang === 'ru' ? 'Основная навигация' : 'Main navigation'}>
          {sections.map((id, i) => <a key={id} href={pageHref(id)} aria-current={navActive(id) ? 'page' : undefined} onClick={() => setOpen(false)}>{t.nav[i]}<span>0{i + 1}</span></a>)}
        </nav>
        <div className="header-actions">
          <button className="language" aria-label={t.language} onClick={() => { setLang(lang === 'ru' ? 'en' : 'ru'); setOpen(false); }}><Globe2 size={16}/>{lang === 'ru' ? 'EN' : 'RU'}</button>
          <a className="header-github" href="https://github.com/PavelSed33" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={20}/></a>
          <button className="menu-button" ref={menuButton} aria-label={open ? t.close : t.menu} aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </header>
    {open && <div className="menu-backdrop" onClick={() => { setOpen(false); menuButton.current?.focus(); }} aria-hidden="true"/>}
    <main id="main" tabIndex={-1} className={projectRoute ? 'case-route' : route === 'projects' ? 'projects-route' : isHome ? 'home-route' : ''}>
      {isHome && <><section id="top" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot"/>{t.role}</p>
          <p className="hero-name">{t.name}</p>
          <h1>{t.hero}<br/><em>{t.accent}</em></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="actions"><a className="button primary" href={pageHref('projects')}>{t.view}<ArrowDown size={18}/></a><a className="button secondary" href={pageHref('contact')}>{t.contact}<ArrowUpRight size={18}/></a></div>
          <div className="hero-meta"><span>{t.since}</span><span>{t.location}</span></div>
        </div>
        <div className="portrait-scene">
          <span className="portrait-index" aria-hidden="true">01 — FRONTEND</span>
          <div className="portrait-frame"><img src="https://github.com/PavelSed33.png?size=640" width="640" height="640" alt={t.name} fetchPriority="high"/><div className="portrait-caption"><span>{t.first}<br/>{t.last}</span><ArrowUpRight size={30}/></div></div>
          <div className="code-badge" aria-hidden="true"><Code2 size={22}/><span>design → code</span></div>
          <div className="availability"><span className="status-dot"/>{t.available}</div>
        </div>
        <a className="hero-scroll" href={pageHref('projects')}><span>{t.scroll}</span><ArrowDown size={16}/></a>
      </section>
      <div className="tech-strip" aria-hidden="true"><div className="wrap"><span>HTML & CSS</span><i>✳</i><span>JAVASCRIPT</span><i>✳</i><span>REACT</span><i>✳</i><span>RESPONSIVE UI</span><i>✳</i><span>TYPESCRIPT</span></div></div></>}
      {(isHome || route === 'projects' || projectRoute) && <section id="projects" tabIndex={-1} className="section wrap">
        <div className="section-heading" data-reveal><p className="eyebrow">{t.projectLabel}</p><h2>{t.projectTitle}</h2></div>
        {(!projectRoute || route === 'work/shopco') && <article className="featured-project" data-reveal>
          <a className="project-visual" href={demo} target="_blank" rel="noreferrer" aria-label={t.preview}>
            <div className="browser-bar" aria-hidden="true"><span className="browser-dots">● ● ●</span><span>shop.co / collection</span><ArrowUpRight size={16}/></div>
            <div className="store-preview" aria-hidden="true">
              <div className="store-nav"><img src={asset('type/logo.svg')} width="160" height="22" alt=""/><span>Shop　 New Arrivals　 Brands</span><span>⌕　♡</span></div>
              <div className="store-hero"><div className="store-copy"><img src={asset('type/hero-desktop.svg')} width="577" height="173" alt=""/><p>Find your next everyday favourite.</p><span className="store-button">Shop Now →</span><div className="store-stats"><b>200+<small>Brands</small></b><b>2,000+<small>Products</small></b></div></div><img className="store-model" src={asset('hero.webp')} width="1200" height="1800" alt="" loading="lazy"/><span className="store-spark">✦</span></div>
              <div className="store-brands">{['versace','zara','gucci','prada','calvin-klein'].map(n => <img key={n} src={asset(`brands/${n}.svg`)} alt="" loading="lazy"/>)}</div>
              <div className="store-products">{['tape-tee','skinny-jeans','checkered-shirt','striped-tee'].map(n => <img key={n} src={asset(`${n}.webp`)} alt="" width="1000" height="1500" loading="lazy"/>)}</div>
            </div>
            <span className="visual-open"><ArrowUpRight size={24}/></span>
          </a>
          <div className="project-info"><div><p className="eyebrow">{t.projectKind}</p><h3><a href={pageHref('work/shopco')}>SHOP.CO</a></h3><p className="project-lead">{t.projectIntro}</p></div><div><p className="muted">{t.projectDescription}</p><div className="tags">{['HTML','CSS','JavaScript','localStorage'].map(s => <span key={s}>{s}</span>)}</div><div className="actions"><a className="button primary" href={demo} target="_blank" rel="noreferrer">{t.live}<ExternalLink size={17}/></a><a className="button secondary" href="https://github.com/PavelSed33/portfolio/tree/main/public/projects/shopco" target="_blank" rel="noreferrer"><Code2 size={17}/>{t.code}</a></div></div></div>
          <div className="project-details"><div><h4>{t.taskTitle}</h4><p>{t.task}</p></div><div><h4>{t.solutionTitle}</h4><p>{t.solution}</p></div><ul>{t.features.map(f => <li key={f}><Check size={17}/>{f}</li>)}</ul></div>
          <div className="project-footnote"><a href="https://www.figma.com/community/file/1273571982885059508/e-commerce-website-template-freebie" target="_blank" rel="noreferrer">{t.design}<ArrowUpRight size={14}/></a><span>{t.demoNote}</span></div>
        </article>}
        {(!projectRoute || route === 'work/evklid') && <article className="featured-project evklid-project" data-reveal>
          <a className="project-visual evklid-visual" href="https://pavelsed33.github.io/Evklid/" target="_blank" rel="noreferrer" aria-label={lang === 'ru' ? 'Открыть сайт Евклид' : 'Open the Evklid website'}>
            <img src={`${base}evklid-preview.webp`} width="1440" height="900" alt={lang === 'ru' ? 'Первый экран сайта Евклид' : 'Evklid website homepage'} loading="lazy"/>
            <span className="visual-open"><ArrowUpRight size={24}/></span>
          </a>
          <div className="project-info">
            <div><p className="eyebrow">{lang === 'ru' ? 'Проектные решения · Учебный проект' : 'Project solutions · Portfolio project'}</p><h3><a href={pageHref('work/evklid')}>{lang === 'ru' ? 'Евклид' : 'Evklid'}</a></h3><p className="project-lead">{lang === 'ru' ? 'Адаптивный сайт с работающими взаимодействиями.' : 'A responsive website with working interactions.'}</p></div>
            <div><p className="muted">{lang === 'ru' ? 'Сайт компании по проектным решениям. Сохранён исходный дизайн, доработаны адаптивность, поиск по странице, этапы работы, FAQ и форма заявки.' : 'A project solutions company website. The original design is preserved, with improved responsive layouts, page search, work stages, FAQ and application form.'}</p><div className="tags">{['HTML','CSS','JavaScript','Swiper'].map(s => <span key={s}>{s}</span>)}</div><div className="actions"><a className="button primary" href="https://pavelsed33.github.io/Evklid/" target="_blank" rel="noreferrer">{lang === 'ru' ? 'Открыть Евклид' : 'Explore Evklid'}<ExternalLink size={17}/></a><a className="button secondary" href="https://github.com/PavelSed33/Evklid" target="_blank" rel="noreferrer"><Code2 size={17}/>{t.code}</a></div></div>
          </div>
          <div className="project-details">
            <div><h4>{t.taskTitle}</h4><p>{lang === 'ru' ? 'Сохранить визуальный стиль и сделать интерфейс удобным на компьютере, планшете и телефоне.' : 'Preserve the visual style and make the interface usable on desktop, tablet and phone.'}</p></div>
            <div><h4>{t.solutionTitle}</h4><p>{lang === 'ru' ? 'Меню с клавиатурной навигацией, поиск по разделам, доступные вкладки и FAQ, проверка полей формы.' : 'Keyboard accessible navigation, section search, accessible tabs and FAQ, and form validation.'}</p></div>
            <ul>{(lang === 'ru' ? ['Проверен на 8 размерах', 'Телефон в двух ориентациях', 'Управление с клавиатуры'] : ['Checked at 8 viewport sizes', 'Portrait and landscape', 'Keyboard navigation']).map(f => <li key={f}><Check size={17}/>{f}</li>)}</ul>
          </div>
          <div className="project-footnote"><span>{lang === 'ru' ? 'Оригинальный дизайн сохранён.' : 'Original design preserved.'}</span><span>{lang === 'ru' ? 'Учебная версия: форма проверяет данные, заявки не отправляются.' : 'Portfolio demo: form data is validated, applications are not submitted.'}</span></div>
        </article>}
        {(!projectRoute || route === 'work/roasted-coffee') && <article className="featured-project coffee-project" data-reveal>
          <a className="project-visual coffee-visual" href={`${base}projects/roasted-coffee/`} target="_blank" rel="noreferrer" aria-label={lang === 'ru' ? 'Открыть Roasted Coffee' : 'Open Roasted Coffee'}>
            <img src={`${base}coffee-preview.webp`} width="1440" height="800" alt={lang === 'ru' ? 'Кофе и кофейные зёрна — Roasted Coffee' : 'Coffee and coffee beans — Roasted Coffee'} loading="lazy"/>
            <span className="coffee-preview-title" aria-hidden="true">Roasted coffee<br/>best choice</span>
            <span className="visual-open"><ArrowUpRight size={24}/></span>
          </a>
          <div className="project-info">
            <div><p className="eyebrow">{lang === 'ru' ? 'Кофейный магазин · Учебный проект' : 'Coffee storefront · Portfolio project'}</p><h3><a href={pageHref('work/roasted-coffee')}>Roasted Coffee</a></h3><p className="project-lead">{lang === 'ru' ? 'Тёмный интерфейс кофейного магазина.' : 'A dark coffee storefront interface.'}</p></div>
            <div><p className="muted">{lang === 'ru' ? 'Статичная HTML/CSS-верстка трёх страниц: главной с каталогом, карточки кофе и корзины. Акцент на визуальной подаче продукта, фотографиях и типографике.' : 'Static HTML/CSS layouts for three pages: a homepage with a catalogue, a coffee product page and a cart. Focused on product presentation, photography and typography.'}</p><div className="tags">{['HTML','CSS','Multi-page'].map(s => <span key={s}>{s}</span>)}</div><div className="actions"><a className="button primary" href={`${base}projects/roasted-coffee/`} target="_blank" rel="noreferrer">{lang === 'ru' ? 'Открыть сайт' : 'Explore the site'}<ExternalLink size={17}/></a><a className="button secondary" href="https://github.com/PavelSed33/Roasted-coffee" target="_blank" rel="noreferrer"><Code2 size={17}/>{t.code}</a></div></div>
          </div>
          <div className="project-details">
            <div><h4>{t.taskTitle}</h4><p>{lang === 'ru' ? 'Сверстать страницы кофейного магазина в едином визуальном стиле.' : 'Build coffee storefront pages with a consistent visual style.'}</p></div>
            <div><h4>{t.solutionTitle}</h4><p>{lang === 'ru' ? 'Главная с каталогом и информационными блоками, описание продукта и макет корзины.' : 'A homepage with a catalogue and information sections, a product description and a cart layout.'}</p></div>
            <ul>{(lang === 'ru' ? ['3 HTML-страницы', 'Каталог и карточка кофе', 'Единые стили CSS'] : ['3 HTML pages', 'Catalogue and product page', 'Shared CSS styles']).map(f => <li key={f}><Check size={17}/>{f}</li>)}</ul>
          </div>
          <div className="project-footnote"><span>Roasted Coffee · HTML / CSS</span><span>{lang === 'ru' ? 'Статичная демонстрация. Добавление в корзину и оплата не подключены.' : 'Static demo. Cart updates and payments are not connected.'}</span></div>
        </article>}
        {(!projectRoute || route === 'work/tea') && <article className="featured-project tea-project" data-reveal>
          <a className="project-visual coffee-visual" href={`${base}projects/tea/`} target="_blank" rel="noreferrer" aria-label={lang === 'ru' ? 'Открыть Tea — TealuxE' : 'Open Tea — TealuxE'}>
            <img src={`${base}projects/tea/images/top-bg.jpeg`} width="1599" height="500" alt={lang === 'ru' ? 'Зелёные чайные плантации — TealuxE' : 'Green tea plantations — TealuxE'} loading="lazy"/>
            <span className="coffee-preview-title" aria-hidden="true">TealuxE</span>
            <span className="visual-open"><ArrowUpRight size={24}/></span>
          </a>
          <div className="project-info">
            <div><p className="eyebrow">{lang === 'ru' ? 'Чайный магазин · Учебный проект' : 'Tea storefront · Portfolio project'}</p><h3><a href={pageHref('work/tea')}>Tea — TealuxE</a></h3><p className="project-lead">{lang === 'ru' ? 'Светлый лендинг о чае и маленьких паузах.' : 'A light landing page about tea and moments of calm.'}</p></div>
            <div><p className="muted">{lang === 'ru' ? 'Верстка главной страницы чайного магазина: коллекции чая, отзывы, блог и блок подписки. Природные фотографии, спокойная палитра и выразительная типографика.' : 'A tea storefront homepage with tea collections, testimonials, a blog and a newsletter layout. Nature photography, a calm palette and expressive typography.'}</p><div className="tags">{['HTML','CSS','JavaScript'].map(s => <span key={s}>{s}</span>)}</div><div className="actions"><a className="button primary" href={`${base}projects/tea/`} target="_blank" rel="noreferrer">{lang === 'ru' ? 'Открыть сайт' : 'Explore the site'}<ExternalLink size={17}/></a><a className="button secondary" href="https://github.com/PavelSed33/tea" target="_blank" rel="noreferrer"><Code2 size={17}/>{t.code}</a></div></div>
          </div>
          <div className="project-footnote"><span>TealuxE · HTML / CSS / JavaScript</span><span>{lang === 'ru' ? 'Демонстрация верстки. Покупки, поиск и рассылка не подключены.' : 'Layout demo. Shopping, search and newsletter delivery are not connected.'}</span></div>
        </article>}
        {(!projectRoute || route === 'work/elegance-shop') && <article className="featured-project elegance-project" data-reveal>
          <a className="project-visual coffee-visual" href={`${base}projects/elegance-shop/`} target="_blank" rel="noreferrer" aria-label={lang === 'ru' ? 'Открыть EleganceShop' : 'Open EleganceShop'}>
            <img src={`${base}projects/elegance-shop/img/header/photo.jpg`} width="670" height="737" alt={lang === 'ru' ? 'Летняя коллекция одежды — EleganceShop' : 'Summer clothing collection — EleganceShop'} loading="lazy"/>
            <span className="coffee-preview-title" aria-hidden="true">Elegance</span>
            <span className="visual-open"><ArrowUpRight size={24}/></span>
          </a>
          <div className="project-info">
            <div><p className="eyebrow">{lang === 'ru' ? 'Магазин одежды · Учебный проект' : 'Fashion storefront · Portfolio project'}</p><h3><a href={pageHref('work/elegance-shop')}>EleganceShop</a></h3><p className="project-lead">{lang === 'ru' ? 'Витрина летней коллекции одежды.' : 'A showcase for a summer clothing collection.'}</p></div>
            <div><p className="muted">{lang === 'ru' ? 'Статичная HTML/CSS-верстка главной страницы: новинки, избранные товары, промоблоки, блог и форма подписки. Светлая палитра и крупная типографика по учебному макету WebCademy.' : 'A static HTML/CSS homepage with new arrivals, featured products, promotional sections, a blog and a newsletter layout. A light palette and large typography based on a WebCademy learning template.'}</p><div className="tags">{['HTML','CSS'].map(s => <span key={s}>{s}</span>)}</div><div className="actions"><a className="button primary" href={`${base}projects/elegance-shop/`} target="_blank" rel="noreferrer">{lang === 'ru' ? 'Открыть сайт' : 'Explore the site'}<ExternalLink size={17}/></a><a className="button secondary" href="https://github.com/PavelSed33/EleganceShop" target="_blank" rel="noreferrer"><Code2 size={17}/>{t.code}</a></div></div>
          </div>
          <div className="project-footnote"><span>{lang === 'ru' ? 'Макет: WebCademy · HTML / CSS' : 'Design: WebCademy · HTML / CSS'}</span><span>{lang === 'ru' ? 'Статичная демонстрация для ПК. Корзина и рассылка не подключены.' : 'Static desktop demo. Cart updates and newsletter delivery are not connected.'}</span></div>
        </article>}
      </section>}
      {route === 'about' && <section id="about" tabIndex={-1} className="section wrap about-section">
        <div data-reveal><p className="eyebrow">{t.aboutLabel}</p><h2>{t.aboutTitle}<br/><em>{t.aboutAccent}</em></h2><div className="about-stats"><div><b>2021</b><span>{t.experience}</span></div><div><b>{t.freelance}</b><span>{t.format}</span></div></div></div>
        <div className="about-copy" data-reveal><p>{t.about1}</p><p className="muted">{t.about2}</p><ol className="approach">{t.approach.map((item,i) => <li key={item}><span>0{i+1}</span>{item}</li>)}</ol></div>
      </section>}
      {route === 'skills' && <section id="skills" tabIndex={-1} className="section wrap"><div className="section-heading" data-reveal><p className="eyebrow">{t.skillsLabel}</p><h2>{t.skillsTitle}</h2></div><div className="skills-grid">{['HTML5','CSS3 / SCSS','JavaScript','React / TypeScript','REST API','Git / GitHub'].map((name,i) => <div className="skill" key={name} data-reveal><span className="skill-number">0{i+1}</span><h3>{name}</h3><p>{t.skills[i]}</p><ArrowUpRight className="skill-arrow" size={22}/></div>)}</div></section>}
      {route === 'contact' && <section id="contact" tabIndex={-1} className="section wrap contact-section"><div data-reveal><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}<br/><em>{t.contactAccent}</em></h2><p className="contact-intro muted">{t.contactText}</p><a className="text-link" href="https://t.me/Peresvetovec" target="_blank" rel="noreferrer"><Send size={20}/>{t.telegram}<ArrowUpRight size={17}/></a><div className="email-row"><a href={`mailto:${email}`}>{email}</a><button className="icon-button" onClick={copyEmail} aria-label={t.copy}><Copy size={18}/></button></div><p className="status-message" role="status">{notice}</p></div><form onSubmit={submit} data-reveal><label htmlFor="name">{t.formName}</label><input id="name" name="name" autoComplete="name" required maxLength={100}/><label htmlFor="email">{t.formEmail}</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254}/><label htmlFor="message">{t.formMessage}</label><textarea id="message" name="message" rows={4} required maxLength={3000} placeholder={t.placeholder}/><button className="button primary" type="submit">{t.send}<ArrowUpRight size={18}/></button><p className="form-hint">{t.formHint}</p><p className="status-message" role="status">{prepared ? t.formStatus : ''}</p></form></section>}
    </main>
    <footer className="wrap site-footer"><a className="logo" href={pageHref()} aria-label={t.top}>PS<span>.</span></a><div><span>© {new Date().getFullYear()} {t.name}</span><small>{t.footer}</small></div><div className="footer-links"><a href="https://github.com/PavelSed33" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.8 7c-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.6 1.2a12.2 12.2 0 0 1 6.5 0c2.5-1.5 3.6-1.2 3.6-1.2.7 1.7.3 3 .1 3.3a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.9 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"/></svg></a><a href="https://t.me/Peresvetovec" target="_blank" rel="noreferrer" aria-label="Telegram" title="Telegram"><svg className="telegram-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.7 3.4 18.5 19c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.4-.1-.6-.6-.2L6 12.8l-4.8-1.5c-1-.3-1.1-1 .2-1.5L20.2 2.6c.9-.3 1.7.2 1.5.8Z"/></svg></a><a href={isHome ? '#top' : pageHref()} aria-label={t.top}><ArrowUp size={20}/></a></div></footer>
  </>;
}
createRoot(document.getElementById('root')!).render(<App/>);
