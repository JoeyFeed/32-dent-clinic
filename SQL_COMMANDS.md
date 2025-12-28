# SQL команды для создания базы данных

## Инструкция для pgAdmin

### Шаг 1: Создайте базу данных через GUI

1. В pgAdmin нажмите правой кнопкой на **Databases**
2. Выберите **Create → Database**
3. В поле **Database** введите: `dent_clinic`
4. Нажмите **Save**

Или используйте SQL (в Query Tool на базе `postgres`):

```sql
CREATE DATABASE dent_clinic
WITH
OWNER = postgres
ENCODING = 'UTF8'
LOCALE_PROVIDER = 'libc'
CONNECTION LIMIT = -1
IS_TEMPLATE = False;
```

---

### Шаг 2: Подключитесь к базе `dent_clinic`

1. В Object Explorer найдите базу данных `dent_clinic`
2. Разверните её
3. Правой кнопкой на **dent_clinic** → **Query Tool**

---

### Шаг 3: Выполните SQL скрипт

Скопируйте и вставьте весь код ниже в Query Tool и нажмите **Execute (F5)**:

```sql
-- ============================================
-- СОЗДАНИЕ ТАБЛИЦ
-- ============================================

-- Таблица пользователей
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица врачей
CREATE TABLE IF NOT EXISTS doctors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  specialty VARCHAR(100) NOT NULL,
  experience INTEGER NOT NULL,
  photo_url TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица услуг
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT,
  price_from DECIMAL(10, 2),
  price_to DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица записей на приём
CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  doctor_id INTEGER REFERENCES doctors(id) ON DELETE SET NULL,
  service_id INTEGER REFERENCES services(id) ON DELETE SET NULL,
  date DATE,
  time TIME,
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица отзывов
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  user_name VARCHAR(100),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица обратной связи
CREATE TABLE IF NOT EXISTS feedback (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица настроек
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  phone VARCHAR(20),
  address TEXT,
  hours VARCHAR(100),
  social_links JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT settings_single_row CHECK (id = 1)
);

-- ============================================
-- СОЗДАНИЕ ИНДЕКСОВ
-- ============================================

CREATE INDEX IF NOT EXISTS idx_appointments_user_id ON appointments(user_id);
CREATE INDEX IF NOT EXISTS idx_appointments_doctor_id ON appointments(doctor_id);
CREATE INDEX IF NOT EXISTS idx_appointments_service_id ON appointments(service_id);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_reviews_user_id ON reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);

-- ============================================
-- ЗАПОЛНЕНИЕ ТЕСТОВЫМИ ДАННЫМИ
-- ============================================

-- Врачи
INSERT INTO doctors (name, specialty, experience, bio) VALUES
('Иванов Иван Иванович', 'Стоматолог-терапевт', 16, 'Опытный стоматолог-терапевт с многолетним стажем'),
('Петрова Мария Сергеевна', 'Ортодонт', 12, 'Специалист по исправлению прикуса'),
('Сидоров Петр Александрович', 'Хирург-имплантолог', 20, 'Врач высшей категории, специалист по имплантации'),
('Козлова Анна Викторовна', 'Детский стоматолог', 10, 'Добрый и внимательный детский стоматолог')
ON CONFLICT DO NOTHING;

-- Услуги
INSERT INTO services (name, category, description, price_from, price_to) VALUES
('Лечение кариеса', 'therapy', 'Лечение кариеса любой сложности', 5000, NULL),
('Лечение пульпита', 'therapy', 'Эндодонтическое лечение', 8000, 12000),
('Лечение периодонтита', 'therapy', 'Лечение периодонтита', 10000, 15000),
('Установка брекетов', 'orthodontics', 'Установка брекет-системы', 50000, NULL),
('Элайнеры', 'orthodontics', 'Прозрачные элайнеры для выравнивания зубов', 80000, 120000),
('Удаление зуба', 'surgery', 'Простое удаление зуба', 3000, NULL),
('Сложное удаление', 'surgery', 'Удаление зуба с осложнениями', 5000, 8000),
('Профессиональная чистка', 'hygiene', 'Гигиеническая чистка зубов', 4000, NULL),
('Отбеливание', 'hygiene', 'Профессиональное отбеливание зубов', 15000, 25000),
('Рентген снимок', 'radiology', 'Прицельный рентгеновский снимок', 500, NULL),
('Панорамный снимок', 'radiology', 'Ортопантомограмма', 1500, NULL),
('Коронка металлокерамическая', 'prosthetics', 'Изготовление и установка коронки', 15000, NULL),
('Коронка циркониевая', 'prosthetics', 'Изготовление и установка циркониевой коронки', 25000, NULL),
('Имплант с установкой', 'implantation', 'Установка зубного импланта', 36000, NULL),
('Коронка на имплант', 'implantation', 'Изготовление и установка коронки на имплант', 20000, NULL)
ON CONFLICT DO NOTHING;

-- Отзывы
INSERT INTO reviews (user_name, rating, comment) VALUES
('Анна С.', 5, 'Отличная клиника! Врачи профессионалы, все объясняют, лечение безболезненное. Очень довольна результатом.'),
('Михаил П.', 5, 'Делал имплантацию. Все прошло отлично, без осложнений. Персонал вежливый, клиника современная.'),
('Елена В.', 5, 'Лечила зубы, очень довольна. Врач внимательный, все аккуратно сделал. Рекомендую!')
ON CONFLICT DO NOTHING;
```

---

## Проверка

После выполнения скрипта проверьте, что всё создано:

```sql
-- Проверка таблиц
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';

-- Проверка врачей
SELECT * FROM doctors;

-- Проверка услуг
SELECT * FROM services;

-- Проверка отзывов
SELECT * FROM reviews;
```

---

## Готово!

Теперь база данных готова к использованию. Можно запускать backend сервер!


