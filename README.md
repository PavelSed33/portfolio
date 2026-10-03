# Портфолио Павла Седых

React, TypeScript и Vite. Локальный запуск: `npm ci` и `npm run dev`. Сборка: `npm run build`.

## SHOP.CO

Демонстрация находится в `public/projects/shopco/` и доступна после публикации по адресу `/portfolio/projects/shopco/`. Карточка в портфолио содержит ссылки на демонстрацию и отдельный репозиторий исходного проекта.

Дизайн: E-commerce Website Template (Freebie), Hamza Naeem.
https://www.figma.com/community/file/1273571982885059508/e-commerce-website-template-freebie

Исходники: https://github.com/PavelSed33/shopco-ecommerce

Демо использует JavaScript и localStorage для корзины, поиска, фильтров и сортировки. Реальная оплата и подписка не подключены. Для обновления демо скопируйте `index.html` и `src/` из репозитория SHOP.CO в `public/projects/shopco/` и выполните сборку.

## Публикация

В Settings → Pages выберите GitHub Actions. Workflow `.github/workflows/pages.yml` соберёт проект и опубликует `dist/` после изменения main. Первую публикацию можно запустить вручную во вкладке Actions → Deploy portfolio → Run workflow.

## Интерфейс портфолио

- Адаптивные сетки от 320 px до широких мониторов; отдельный режим для низких экранов в альбомной ориентации.
- Русская и английская версии, сохранение выбора языка, обновление заголовка страницы и `lang`.
- Меню с Escape и управлением фокусом, активный раздел, ссылка пропуска навигации и заметный фокус клавиатуры.
- Анимации учитывают `prefers-reduced-motion`. Контент виден при недоступном IntersectionObserver.
- Лёгкое превью SHOP.CO из локальных изображений вместо iframe. Это композиция для представления проекта; актуальный сайт открывается по кнопке.
- Контактная форма подготавливает письмо в почтовой программе и ничего не отправляет автоматически. Email также можно скопировать.
- Локальные шрифты, favicon и Open Graph изображение для публикации ссылки.

## Проверка адаптивности

Workflow проверяет сборку и запускает Chromium: ширины 320, 390, 768, 1440 и 1920 px, телефон в альбомной ориентации, горизонтальное переполнение, язык, меню и reduced motion. Скриншоты сохраняются в артефакт `responsive-screenshots` в GitHub Actions. Это эмуляция размеров экрана; проверка на реальных iOS/Android устройствах остаётся полезной.

Локальный запуск проверок (после сборки): `npm install --no-save --package-lock=false playwright@1.62.1`, `npx playwright install chromium`, `node scripts/check-responsive.mjs`.
