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
