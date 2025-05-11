# Интернет-магазин одежды (LB_12)

Одностраничное приложение (SPA) на **Vue 3** с тёмной темой, разработанное для лабораторной работы №12. Проект реализован с использованием **Vue Router**, **Pinia**, **Tailwind CSS (CDN)** и **Vite**, с интеграцией внешних API для отображения каталога товаров и отправки сообщений.

## 🔗 Ссылка на репозиторий

[GitHub – ArtemBerdnikov3234/lB_11](https://github.com/ArtemBerdnikov3234/lB_11)

---

## 📄 Описание

Приложение включает три страницы:

- **Главная** (`/`) — информация о магазине.
- **Каталог** (`/catalog`) — список товаров из [FakeStoreAPI](https://fakestoreapi.com).
- **Контакты** (`/contact`) — форма для отправки сообщений с POST-запросом на [JSONPlaceholder](https://jsonplaceholder.typicode.com). Отображаются отправленные данные и история сообщений.

### 🎨 Дизайн

- Тёмная тема:
  - чёрный фон
  - тёмно-серая шапка и подвал
  - белые кнопки

## 💻 Рекомендуемое окружение разработки

- [Visual Studio Code](https://code.visualstudio.com/)
- Расширение **Volar** (отключите Vetur для полной поддержки Vue 3)

---

## 🚀 Использование

- Перейдите на **главную страницу** (`/`) — ознакомьтесь с информацией о магазине.
- Откройте **/catalog**, чтобы просмотреть список товаров (название, цена, категория, изображение).
- Перейдите на **/contact**, чтобы отправить сообщение. Отправленные данные и история отображаются на той же странице.

---

## 🧰 Технологии

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS (CDN)](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [FakeStoreAPI](https://fakestoreapi.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## 🛠 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск проекта в режиме разработки
npm run dev

# Сборка для продакшна
npm run build

# Линтинг кода
npm run lint
```
