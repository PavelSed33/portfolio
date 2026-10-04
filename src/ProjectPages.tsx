import React from 'react';

const PAGE_SIZE = 8;

export function ProjectPages({children, enabled, lang}: {children: React.ReactNode; enabled: boolean; lang: 'ru' | 'en'}) {
  const projects = React.Children.toArray(children);
  if (!enabled) return <>{projects}</>;
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const requested = Number(new URLSearchParams(window.location.search).get('page') || 1);
  const current = Math.min(totalPages, Math.max(1, Number.isSafeInteger(requested) ? requested : 1));
  const first = (current - 1) * PAGE_SIZE;
  const pageHref = (page: number) => {
    const url = new URL(window.location.href);
    if (page === 1) url.searchParams.delete('page');
    else url.searchParams.set('page', String(page));
    return `${url.pathname}${url.search}#projects`;
  };
  return <>
    {projects.slice(first, first + PAGE_SIZE)}
    <nav className="project-pagination" aria-label={lang === 'ru' ? 'Страницы проектов' : 'Project pages'}>
      <p>{lang === 'ru' ? 'Проекты' : 'Projects'} {projects.length ? first + 1 : 0}–{Math.min(first + PAGE_SIZE, projects.length)} {lang === 'ru' ? 'из' : 'of'} {projects.length}</p>
      <div className="project-pagination-links">
        {Array.from({length: totalPages}, (_, i) => i + 1).map(page => <a key={page} href={pageHref(page)} aria-current={page === current ? 'page' : undefined} aria-label={lang === 'ru' ? `Страница ${page}` : `Page ${page}`}>{page}</a>)}
      </div>
    </nav>
  </>;
}
