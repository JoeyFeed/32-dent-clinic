# Исправление ошибки подключения к базе данных

## Проблема
Ошибка: `password authentication failed for user "joeyfeed"`

Это означает, что в файле `.env` указан неправильный пользователь или пароль PostgreSQL.

## Решение

### Шаг 1: Найдите файл .env

Откройте папку:
```
c:\Users\zaxer\OneDrive\Рабочий стол\Стоматология 32 Дент\backend
```

### Шаг 2: Создайте или отредактируйте файл .env

**Если файла нет:**
1. Создайте новый текстовый файл
2. Назовите его `.env` (начинается с точки!)

**Если файл есть:**
1. Откройте его в блокноте или редакторе

### Шаг 3: Вставьте правильные настройки

Скопируйте и вставьте это содержимое:

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dent_clinic
DB_USER=postgres
DB_PASSWORD=ваш_пароль_postgres
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Шаг 4: Укажите правильный пароль

**Важно:** Замените `ваш_пароль_postgres` на реальный пароль вашего пользователя PostgreSQL.

#### Как узнать пароль PostgreSQL:

1. **Если вы помните пароль** - используйте его
2. **Если забыли пароль:**
   - Откройте pgAdmin
   - Попробуйте подключиться к серверу PostgreSQL
   - Пароль, который работает в pgAdmin - это и есть ваш пароль
3. **Если пароль не установлен** (пустой):
   ```
   DB_PASSWORD=
   ```
   (оставьте пустым)

#### Как узнать имя пользователя:

1. Откройте pgAdmin
2. Посмотрите, под каким пользователем вы подключаетесь к серверу
3. Обычно это `postgres`, но может быть и другое имя (например, `joeyfeed`)

### Шаг 5: Если ваш пользователь НЕ "postgres"

Если в pgAdmin вы подключаетесь как пользователь `joeyfeed`, то в `.env` укажите:

```
DB_USER=joeyfeed
DB_PASSWORD=пароль_для_joeyfeed
```

### Шаг 6: Сохраните файл

Сохраните файл `.env` и закройте редактор.

### Шаг 7: Попробуйте снова

```bash
cd backend
npm run migrate
```

---

## Примеры правильных .env файлов

### Вариант 1: Пользователь postgres, пароль postgres
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dent_clinic
DB_USER=postgres
DB_PASSWORD=postgres
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Вариант 2: Пользователь joeyfeed, пароль нужно указать
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dent_clinic
DB_USER=joeyfeed
DB_PASSWORD=ваш_пароль
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Вариант 3: Пользователь postgres, без пароля
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dent_clinic
DB_USER=postgres
DB_PASSWORD=
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

---

## Проверка

После исправления `.env`, проверьте подключение:

```bash
cd backend
npm run migrate
```

Если всё правильно, вы увидите:
```
Running migration: 001_create_tables.sql
✓ Migration 001_create_tables.sql completed
Running migration: 002_seed_data.sql
✓ Migration 002_seed_data.sql completed
All migrations completed successfully!
```

