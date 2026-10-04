import {ArrowDown, ArrowUpRight, Code2, Layers, Monitor, Smartphone, Send, Mail} from 'lucide-react';
import './home.css';

type Props = {lang: 'ru' | 'en'};
const base = import.meta.env.BASE_URL;
const asset = (name: string) => `${base}projects/shopco/src/assets/${name}`;
const copy = {
  ru: {
    name: 'Павел Седых', role: 'Независимый frontend-разработчик',
    title: 'Ваш следующий', accent: 'сайт начинается здесь.',
    intro: 'Разрабатываю сайты для бизнеса: от верстки по макету до готового интерфейса. С вниманием к деталям, скорости и удобству на каждом экране.',
    talk: 'Обсудить проект', work: 'Смотреть работы', available: 'Открыт к новым проектам', since: 'В разработке с 2021', remote: 'Работаю удалённо',
    preview: 'Открыть демонстрацию SHOP.CO', previewNote: 'SHOP.CO / проект для портфолио',
    serviceLabel: '02 / ЧЕМ МОГУ ПОМОЧЬ', serviceTitle: 'От идеи до сайта,', serviceAccent: 'которым удобно пользоваться.',
    services: [
      ['Лендинг', 'Для продукта, услуги или запуска. Выстроим понятную страницу с акцентом на ваше предложение.', 'Структура · Верстка · Запуск'],
      ['Многостраничный сайт', 'Для бизнеса, которому нужно больше пространства: услуги, проекты, информация о компании и контакты.', 'Страницы · Навигация · Компоненты'],
      ['Верстка по Figma', 'Перенесу ваш готовый дизайн в код: сохраню характер макета и продуманные взаимодействия.', 'HTML / CSS · JavaScript · React'],
      ['Доработка сайта', 'Исправлю проблемы верстки, адаптирую страницы для телефона и приведу интерфейс к единому стилю.', 'Адаптивность · Интерфейс · Проверка'],
    ],
    processLabel: '03 / КАК РАБОТАЕМ', processTitle: 'Понятный процесс.', processIntro: 'Обсуждаем решения вместе. Вы знаете, что происходит с проектом на каждом этапе.',
    steps: [
      ['Знакомимся с задачей', 'Обсуждаем ваш бизнес, аудиторию, материалы и примеры сайтов.'],
      ['Согласуем объём', 'Фиксируем страницы, функциональность, стоимость и сроки до начала разработки.'],
      ['Разрабатываем', 'Собираю интерфейс и показываю промежуточный результат, чтобы вовремя учесть обратную связь.'],
      ['Проверяем и запускаем', 'Проверяю страницы на разных экранах, помогаю с публикацией и передаю исходный код.'],
    ],
    ctaLabel: 'ЕСТЬ ИДЕЯ?', ctaTitle: 'Давайте сделаем', ctaAccent: 'её настоящей.', ctaText: 'Напишите, какой сайт вам нужен. Обсудим задачу и подходящий объём работы.', telegram: 'Написать в Telegram', email: 'Написать на почту',
  },
  en: {
    name: 'Pavel Sedykh', role: 'Independent frontend developer', title: 'Your next website', accent: 'starts here.',
    intro: 'I build websites for businesses, from design files to working interfaces. With care for the details, performance and usability on every screen.',
    talk: 'Let’s talk', work: 'Explore my work', available: 'Open to new projects', since: 'Developing since 2021', remote: 'Working remotely',
    preview: 'Open the SHOP.CO demo', previewNote: 'SHOP.CO / portfolio project',
    serviceLabel: '02 / WHAT I CAN HELP WITH', serviceTitle: 'From an idea to a website', serviceAccent: 'that feels easy to use.',
    services: [
      ['Landing pages', 'For a product, service or launch. A clear page built around what you have to offer.', 'Structure · Development · Launch'],
      ['Multipage websites', 'Room for your business: services, projects, company information and contact details.', 'Pages · Navigation · Components'],
      ['Figma to code', 'Turn your finished design into code, preserving its visual character and considered interactions.', 'HTML / CSS · JavaScript · React'],
      ['Website improvements', 'Fix layout issues, adapt pages for phones and bring consistency to your interface.', 'Responsive layouts · UI · Verification'],
    ],
    processLabel: '03 / THE PROCESS', processTitle: 'Clear steps. Shared direction.', processIntro: 'We make decisions together. You know where the project stands at every stage.',
    steps: [
      ['Understand the task', 'Discuss your business, audience, materials and reference websites.'],
      ['Agree on the scope', 'Define pages, functionality, budget and timing before development begins.'],
      ['Build and review', 'Develop the interface and share progress so your feedback arrives at the right time.'],
      ['Verify and launch', 'Check pages across screen sizes, help with publishing and hand over the source code.'],
    ],
    ctaLabel: 'HAVE AN IDEA?', ctaTitle: 'Let’s make', ctaAccent: 'it real.', ctaText: 'Tell me what website you need. We’ll discuss the task and find the right scope.', telegram: 'Message on Telegram', email: 'Send an email',
  },
};

export function HomeIntro({lang}: Props) {
  const t = copy[lang];
  return <>
    <section id="top" className="studio-hero wrap">
      <div className="studio-hero-copy">
        <p className="eyebrow"><span className="status-dot"/>{t.available}</p>
        <h1>{t.title}<br/><em>{t.accent}</em></h1>
        <p className="studio-intro">{t.intro}</p>
        <div className="actions"><a className="button primary" href="https://t.me/Peresvetovec" target="_blank" rel="noreferrer">{t.talk}<ArrowUpRight size={19}/></a><a className="button secondary" href="#projects">{t.work}<ArrowDown size={18}/></a></div>
        <div className="studio-person"><img src="https://github.com/PavelSed33.png?size=128" width="48" height="48" alt=""/><div><strong>{t.name}</strong><span>{t.role}</span></div></div>
      </div>
      <div className="studio-stage">
        <span className="stage-grid" aria-hidden="true"/>
        <a className="studio-preview" href={`${base}projects/shopco/`} target="_blank" rel="noreferrer" aria-label={t.preview}>
          <div className="studio-window" aria-hidden="true">
            <div className="studio-window-bar"><span>● ● ●</span><span>shop.co</span><ArrowUpRight size={13}/></div>
            <div className="studio-shop-nav"><img src={asset('type/logo.svg')} width="160" height="22" alt=""/><span>New arrivals　 Brands</span></div>
            <div className="studio-shop-hero"><div><img src={asset('type/hero-desktop.svg')} width="577" height="173" alt=""/><span className="studio-shop-button">Shop now ↗</span></div><img className="studio-model" src={asset('hero.webp')} width="1200" height="1800" alt="" fetchPriority="high"/><span className="studio-spark">✦</span></div>
            <div className="studio-shop-products">{['tape-tee','skinny-jeans','checkered-shirt'].map(n=><img key={n} src={asset(`${n}.webp`)} width="1000" height="1500" alt=""/>)}</div>
          </div>
          <div className="studio-phone" aria-hidden="true"><span className="phone-speaker"/><img className="phone-logo" src={asset('type/logo.svg')} width="160" height="22" alt=""/><img className="phone-product" src={asset('tape-tee.webp')} width="1000" height="1500" alt=""/><strong>FIND YOUR<br/>EVERYDAY.</strong><span className="phone-cart">SHOP.CO ↗</span></div>
          <span className="studio-preview-caption">{t.previewNote}<ArrowUpRight size={16}/></span>
        </a>
        <div className="stage-note"><Code2 size={16}/><span>DESIGN → DEVELOPMENT</span></div>
      </div>
      <div className="studio-hero-bottom"><span>{t.since}</span><span>{t.remote}</span><span>HTML / CSS / JAVASCRIPT / REACT</span></div>
    </section>
    <div className="studio-divider" aria-hidden="true"><div className="wrap"><span>THOUGHTFUL DESIGN</span><i>✳</i><span>RESPONSIVE DEVELOPMENT</span><i>✳</i><span>HUMAN DETAILS</span></div></div>
  </>;
}

export function HomeSections({lang}: Props) {
  const t = copy[lang];
  const icons = [Monitor, Layers, Code2, Smartphone];
  return <>
    <section id="services" className="section wrap studio-services">
      <div className="section-heading" data-reveal><p className="eyebrow">{t.serviceLabel}</p><h2>{t.serviceTitle}<br/><em>{t.serviceAccent}</em></h2></div>
      <div className="service-grid">{t.services.map(([title,description,detail],i)=>{const Icon=icons[i];return <article className="service-card" key={title} data-reveal><div className="service-top"><Icon size={26}/><span>0{i+1}</span></div><h3>{title}</h3><p>{description}</p><small>{detail}</small></article>;})}</div>
    </section>
    <section id="process" className="section wrap studio-process">
      <div className="section-heading" data-reveal><p className="eyebrow">{t.processLabel}</p><h2>{t.processTitle}</h2><p className="process-intro">{t.processIntro}</p></div>
      <ol className="process-list">{t.steps.map(([title,description],i)=><li key={title} data-reveal><span className="process-number">0{i+1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={23} aria-hidden="true"/></li>)}</ol>
    </section>
    <section className="wrap studio-cta" aria-labelledby="cta-title" data-reveal><span className="cta-orbit" aria-hidden="true">✳</span><p className="eyebrow">{t.ctaLabel}</p><h2 id="cta-title">{t.ctaTitle}<br/><em>{t.ctaAccent}</em></h2><p className="cta-text">{t.ctaText}</p><div className="actions"><a className="button primary" href="https://t.me/Peresvetovec" target="_blank" rel="noreferrer"><Send size={18}/>{t.telegram}<ArrowUpRight size={18}/></a><a className="button secondary" href="mailto:Peresvetovec@gmail.com"><Mail size={18}/>{t.email}</a></div></section>
  </>;
}
