# Как запустить серверы (решение проблемы EPERM)

## Проблема
Ошибка `Error: spawn EPERM` возникает из-за проблем с `concurrently` на Windows.

## Решение: Запуск в отдельных терминалах

### Вариант 1: Два терминала (рекомендуется)

**Терминал 1 - Backend:**
```powershell
cd backend
npm run dev
```

**Терминал 2 - Frontend:**
```powershell
cd frontend
npm run dev
```

### Вариант 2: Использовать готовые скрипты

Создайте два файла:

**start-backend.bat:**
```batch
@echo off
cd backend
npm run dev
pause
```

**start-frontend.bat:**
```batch
@echo off
cd frontend
npm run dev
pause
```

Запустите оба файла двойным кликом.

---

## Альтернативное решение: Исправить concurrently

Если хотите использовать `npm run dev`, попробуйте:

### 1. Обновить concurrently

```powershell
npm install concurrently@latest --save-dev
```

### 2. Изменить package.json

Замените скрипт `dev` на:

```json
"dev": "concurrently --kill-others-on-fail \"npm run dev:frontend\" \"npm run dev:backend\""
```

Или используйте `&` вместо concurrently:

```json
"dev": "start cmd /k \"cd frontend && npm run dev\" & start cmd /k \"cd backend && npm run dev\""
```

---

## Быстрый запуск (Windows)

Создайте файл `start-all.bat` в корне проекта:

```batch
@echo off
echo Запуск Backend...
start "Backend Server" cmd /k "cd backend && npm run dev"
timeout /t 2 /nobreak >nul
echo Запуск Frontend...
start "Frontend Server" cmd /k "cd frontend && npm run dev"
echo.
echo Серверы запущены в отдельных окнах!
echo Backend: http://localhost:3000
echo Frontend: http://localhost:5173
pause
```

Запустите двойным кликом.

---

## Проверка

После запуска откройте в браузере:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/health

