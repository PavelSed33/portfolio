const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu(restoreFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  navigation.classList.remove('is-open');
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a,button')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
matchMedia('(min-width:961px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const dialog = document.querySelector('#detail-dialog');
const dialogContent = document.querySelector('#dialog-content');
let lastTrigger;
function openDialog(content, trigger) {
  lastTrigger = trigger;
  dialogContent.replaceChildren(content);
  dialog.showModal();
  document.body.classList.add('modal-open');
}
function contentFrom(html) { const template = document.createElement('template'); template.innerHTML = html; return template.content; }
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); if (lastTrigger?.isConnected) lastTrigger.focus(); });
const projects = [
  { title: 'Workhub office Webflow Design', image: 'project-1.png' },
  { title: 'Unisaas Website Design', image: 'project-2.png' },
  { title: 'Church Website Design', image: 'project-3.png' }
];
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projects[Number(button.dataset.project)];
  openDialog(contentFrom(`<img src="assets/${p.image}" alt="${p.title}"><h2 id="dialog-title">${p.title}</h2><p>Project preview from the original Finsweet design template.</p><p>This is a portfolio reproduction. A live client website is not linked in the supplied home page.</p>`), button);
}));
document.querySelector('[data-gallery]').addEventListener('click', event => {
  openDialog(contentFrom(`<h2 id="dialog-title">Our projects</h2><div class="dialog-gallery">${projects.map(p => `<article><h3>${p.title}</h3><img src="assets/${p.image}" alt="${p.title}"></article>`).join('')}</div>`), event.currentTarget);
});
document.querySelectorAll('[data-blog]').forEach(button => button.addEventListener('click', () => {
  const article = button.closest('article');
  const body = document.createDocumentFragment();
  body.append(article.querySelector('.blog-image').cloneNode());
  const heading = document.createElement('h2'); heading.id = 'dialog-title'; heading.textContent = article.querySelector('h3').textContent; body.append(heading);
  body.append(article.querySelector('p').cloneNode(true));
  const note = document.createElement('p'); note.textContent = 'Article preview from the design template. The full article is not included in this home-page demo.'; body.append(note);
  openDialog(body, button);
}));
document.querySelectorAll('[data-pricing]').forEach(button => button.addEventListener('click', () => {
  openDialog(contentFrom('<h2 id="dialog-title">Let’s talk about your project</h2><p>Pricing depends on the number of pages, functionality and design requirements.</p><p>This home-page template does not include a price list. Prepare a project inquiry below.</p><a class="button" href="#contact" data-dialog-contact>Send an inquiry</a>'), button);
  dialog.querySelector('[data-dialog-contact]').addEventListener('click', () => { dialog.close(); requestAnimationFrame(() => document.querySelector('#name').focus({ preventScroll: true })); });
}));
document.querySelectorAll('.faq-list details').forEach(item => item.addEventListener('toggle', () => {
  if (item.open) document.querySelectorAll('.faq-list details').forEach(other => { if (other !== item) other.open = false; });
}));
document.querySelector('#inquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('.form-status');
  status.textContent = 'Your details are valid. This is a portfolio demo: no inquiry has been sent or stored.';
});
document.querySelector('#inquiry-form').addEventListener('input', () => { document.querySelector('.form-status').textContent = ''; });
