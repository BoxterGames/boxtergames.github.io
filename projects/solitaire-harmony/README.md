# Solitaire Harmony

Изолированная презентация первого проекта. Внешние зависимости и сборка не нужны.

- `style.css` — вся тема проекта: цвета, типографика, композиция, анимация и адаптивная вёрстка. Правила ограничены `.sh-*` и `body[data-project="solitaire-harmony"]`, поэтому не меняют остальные кейсы.
- `project.js` — тексты, разметка и переключатель пяти пасьянсов. Регистрирует проект в `window.PortfolioProjects`. Общая навигация передаёт метод открытия изображения.
- `assets/` — локальная иконка и шесть официальных скриншотов из Google Play. Изображения перекодированы в WebP без потери качества и изменения размеров (с 4,7 до 2 МБ суммарно); телефон и декоративные карты оформлены средствами CSS.

Маршрут: `#project/solitaire-harmony`. Старый адрес `#project/orbit` перенаправляет на него. Открывайте через корневой `index.html`, чтобы сохранить навигацию портфолио.

Для нового проекта можно создать соседнюю папку, собственные стили и объект с `id`, `name`, `short`, `icon`, `category`, `custom: true`, `mount(container, api)`. Подключить его CSS/JS в корневой HTML и добавить объект в массив проектов в `app.js`.

## Источники

Страница: https://play.google.com/store/apps/details?id=com.boxtergames.solitaireHarmony

Проверено 29 октября 2026 года. Google Play подтверждает пять вариантов (Klondike, Spider, FreeCell, Pyramid, TriPeaks), игру без таймеров, офлайн-режим и усиления. Не заявляем неподтверждённые показатели, технологии разработки и распределение ролей.

Соответствие скриншотов: `01` — FreeCell, `02` — TriPeaks, `03` — Pyramid, `04` — темы, `05` — Spider, `06` — Klondike.

Источник файлов: `play-lh.googleusercontent.com`, ссылки из страницы Google Play. `icon.webp` загружен в размере w512, скриншоты — w1200. URL идентификаторы:

- icon: `vFLnP1IiePMaHhMTYWPdupjwIiYk76AQrz02bjN_M8iMzuqeCyVpLDKWEfhFW7hbZ9xmjdTIUnNat69e-HS9eA`
- 01: `h8GkbvJW4sWT8eS8DEJ4SDWdH0H3Ysq03uQPBStiSTGhNIyvwzO4o02W7nqbXQU9eeYLrT7hwFxXXYSEd3_C`
- 02: `il0EQU34PNUEntoQAwQP3PJCsQtAWk0KhnJFxX9xxeqvd_9H8LQ4zOWHLrcsyeYOJcgDpTsPpf8XCnmUqzgRUXQ`
- 03: `EKBZvB1y_Kxuor6orJErfO0epPtvPjGeIm4ggpC1VTG98zpNzqPj_2-0bxtQpXIWTpCoidzWujcVuECiDFZI`
- 04: `94wac1FHtYXztPztNXzJNiGzl7jn6-l0nWCAImWaCWZOr6Fei-V9leYREKsmOwhV9urcOSaRQmoENBrqBMntBg`
- 05: `2jOBGvliAk_UQDhH1PfvBpY3zy7CcGDUgYEfdlE8IIZ5iXR6_tq1sUbY80QPEX78HDAXMEvpZi1LpZCCuRbM7g`
- 06: `k3Zh4ezRQYRUewYn1b0rb04mvVWnaONUERTOUA_ZvPA0lILqS9UfU0pBnXlb8FCeRQHdwM2o7SL3LQ3o57Azm4I`
