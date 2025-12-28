# Стоматологическая клиника "32 Дент"

Современный веб-сайт стоматологической клиники с полным функционалом записи на приём, просмотра услуг и врачей.

## Технологии

- **Frontend**: React 18, Vite, React Router
- **Backend**: Node.js, Express, PostgreSQL
- **Стили**: CSS Modules, CSS Variables

## Установка

### Предварительные требования

- Node.js 18+
- PostgreSQL 14+
- npm или yarn

### Установка зависимостей

```bash
npm run install:all
```

### Настройка базы данных

1. Создайте базу данных PostgreSQL:
```sql
с;
```

2. Скопируйте `.env.example` в `.env` в папке backend и настройте переменные окружения.

### Запуск в режиме разработки

```bash
npm run dev
```

Frontend будет доступен на http://localhost:5173
Backend API будет доступен на http://localhost:3000

### Сборка для продакшена

```bash
npm run build
```

## Структура проекта

```
32-dent-clinic/
├── frontend/          # React приложение
├── backend/           # Express API сервер
└── README.md
```

## API Endpoints

- `POST /api/appointments` - создать запись на приём
- `POST /api/feedback` - отправить форму обратной связи
- `GET /api/doctors` - список врачей
- `GET /api/services` - список услуг и цены
- `GET /api/reviews` - отзывы пациентов

