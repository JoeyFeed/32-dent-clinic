# Быстрый старт - Как посмотреть результат

## Вариант 1: Быстрый запуск (только Frontend, без базы данных)

Если вы хотите просто посмотреть интерфейс без подключения к базе данных:

### Шаг 1: Установите зависимости

```bash
cd frontend
npm install
```

### Шаг 2: Запустите frontend

```bash
npm run dev
```

Откройте браузер: **http://localhost:5173**

> Примечание: Формы будут показывать ошибки при отправке, но интерфейс будет полностью виден.

---

## Вариант 2: Полный запуск (Frontend + Backend + База данных)

### Шаг 1: Установите PostgreSQL

Если у вас нет PostgreSQL:
- Скачайте с https://www.postgresql.org/download/
- Или используйте Docker: `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres`

### Шаг 2: Создайте базу данных

Откройте PostgreSQL и выполните:

```sql
CREATE DATABASE dent_clinic;
```

### Шаг 3: Установите зависимости

Из корневой директории проекта:

```bash
npm run install:all
```

Или по отдельности:

```bash
# Корневая директория
npm install

# Frontend
cd frontend
npm install
cd ..

# Backend
cd backend
npm install
cd ..
```

### Шаг 4: Настройте переменные окружения

Создайте файл `backend/.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dent_clinic
DB_USER=postgres
DB_PASSWORD=postgres
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

> Замените `postgres` на ваши реальные данные PostgreSQL

### Шаг 5: Запустите миграции базы данных

```bash
cd backend
npm run migrate
```

Вы должны увидеть:
```
Running migration: 001_create_tables.sql
✓ Migration 001_create_tables.sql completed
Running migration: 002_seed_data.sql
✓ Migration 002_seed_data.sql completed
All migrations completed successfully!
```

### Шаг 6: Запустите серверы

**Вариант A: Одной командой (из корневой директории)**

```bash
npm run dev
```

**Вариант B: В двух терминалах**

Терминал 1 (Backend):
```bash
cd backend
npm run dev
```

Терминал 2 (Frontend):
```bash
cd frontend
npm run dev
```

### Шаг 7: Откройте в браузере

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/health

---

## Проверка работы

### Проверка Backend

Откройте в браузере: http://localhost:3000/api/health

Должен вернуться JSON:
```json
{"status":"ok","message":"API is running"}
```

### Проверка Frontend

Откройте: http://localhost:5173

Вы должны увидеть:
- ✅ Шапку сайта с логотипом "32 Дент"
- ✅ Hero секцию с заголовком
- ✅ Секцию услуг
- ✅ Таблицу цен
- ✅ Карточки врачей
- ✅ Отзывы
- ✅ Преимущества
- ✅ Форму записи
- ✅ Контакты
- ✅ Футер

---

## Решение проблем

### Ошибка: "Cannot find module"

```bash
# Удалите node_modules и установите заново
rm -rf node_modules frontend/node_modules backend/node_modules
npm run install:all
```

### Ошибка: "Port 3000 already in use"

Измените порт в `backend/.env`:
```env
PORT=3001
```

И обновите `frontend/vite.config.js`:
```js
proxy: {
  '/api': {
    target: 'http://localhost:3001',
    ...
  }
}
```

### Ошибка подключения к базе данных

1. Проверьте, что PostgreSQL запущен
2. Проверьте данные в `backend/.env`
3. Проверьте, что база данных `dent_clinic` создана

### Frontend не подключается к Backend

1. Убедитесь, что оба сервера запущены
2. Проверьте CORS настройки в `backend/server.js`
3. Проверьте прокси в `frontend/vite.config.js`

---

## Команды для разработки

```bash
# Установить все зависимости
npm run install:all

# Запустить оба сервера
npm run dev

# Только frontend
cd frontend && npm run dev

# Только backend
cd backend && npm run dev

# Собрать frontend для продакшена
cd frontend && npm run build

# Запустить миграции
cd backend && npm run migrate
```

---

## Что дальше?

После успешного запуска вы можете:
1. Заполнить реальные данные врачей и услуг в базе данных
2. Настроить Яндекс.Карты (получить API ключ)
3. Добавить реальные фотографии врачей
4. Настроить отправку email уведомлений
5. Заполнить реквизиты клиники в Footer


