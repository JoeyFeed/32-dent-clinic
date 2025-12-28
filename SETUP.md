# Инструкция по запуску проекта "32 Дент"

## Предварительные требования

1. **Node.js** версии 18 или выше
2. **PostgreSQL** версии 14 или выше
3. **npm** или **yarn**

## Установка

### 1. Установка зависимостей

```bash
# Из корневой директории проекта
npm run install:all
```

Или установите зависимости для каждого проекта отдельно:

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2. Настройка базы данных

1. Создайте базу данных PostgreSQL:

```sql
CREATE DATABASE dent_clinic;
```

2. Настройте переменные окружения:

Скопируйте `backend/.env.example` в `backend/.env` и заполните:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dent_clinic
DB_USER=postgres
DB_PASSWORD=ваш_пароль

PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

3. Запустите миграции:

```bash
cd backend
npm run migrate
```

Это создаст все необходимые таблицы и заполнит их тестовыми данными.

### 3. Настройка Яндекс.Карт (опционально)

Для работы карты в секции контактов:

1. Получите API ключ на https://developer.tech.yandex.ru/
2. Обновите файл `frontend/src/components/Contact/YandexMap.jsx`:
   - Замените `YOUR_API_KEY` на ваш реальный ключ
   - При необходимости обновите координаты клиники

## Запуск проекта

### Режим разработки

Из корневой директории:

```bash
npm run dev
```

Это запустит:
- Frontend на http://localhost:5173
- Backend API на http://localhost:3000

Или запустите отдельно:

```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev
```

### Сборка для продакшена

```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm start
```

## Структура проекта

```
32-dent-clinic/
├── frontend/              # React приложение
│   ├── src/
│   │   ├── components/   # React компоненты
│   │   ├── styles/       # CSS стили
│   │   ├── utils/        # Утилиты (API клиент)
│   │   └── hooks/        # React хуки
│   └── public/           # Статические файлы
├── backend/              # Express API сервер
│   ├── models/           # Модели данных
│   ├── routes/           # API маршруты
│   ├── controllers/      # Контроллеры
│   ├── middleware/       # Middleware
│   ├── migrations/       # SQL миграции
│   └── config/           # Конфигурация
└── README.md
```

## API Endpoints

- `GET /api/health` - Проверка работы API
- `POST /api/appointments` - Создать запись на приём
- `GET /api/doctors` - Список врачей
- `GET /api/services` - Список услуг
- `GET /api/reviews` - Отзывы пациентов
- `POST /api/reviews` - Создать отзыв
- `POST /api/feedback` - Отправить форму обратной связи

## Основные функции

✅ Полностью адаптивный дизайн (mobile, tablet, desktop)
✅ Запись на приём через форму
✅ Просмотр услуг и цен
✅ Информация о врачах
✅ Отзывы пациентов
✅ Интеграция с Яндекс.Картами
✅ SEO оптимизация
✅ Валидация форм на клиенте и сервере
✅ Анимации и плавные переходы

## Технологии

- **Frontend**: React 18, Vite, React Router, React Icons, Axios
- **Backend**: Node.js, Express, PostgreSQL
- **Стили**: CSS Variables, CSS Modules
- **База данных**: PostgreSQL

## Дополнительные настройки

### Email уведомления

Для отправки email уведомлений о новых записях:

1. Добавьте в `backend/.env`:
```env
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=ваш_ключ
```

2. Реализуйте отправку в соответствующих контроллерах.

### Социальные сети

Обновите ссылки в компоненте `Footer`:
- ВКонтакте
- Яндекс.Карты
- 2GIS
- ПроДокторов

### Реквизиты клиники

Заполните реквизиты в компоненте `Footer`:
- ОГРН
- ИНН
- КПП
- Руководитель
- Лицензия

## Поддержка

При возникновении проблем проверьте:
1. Запущена ли база данных PostgreSQL
2. Правильно ли настроены переменные окружения
3. Выполнены ли миграции базы данных
4. Установлены ли все зависимости

