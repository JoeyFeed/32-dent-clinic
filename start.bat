@echo off
echo ====================================
echo Запуск проекта "32 Дент"
echo ====================================
echo.

echo Проверка зависимостей...
if not exist "node_modules" (
    echo Установка зависимостей корневого проекта...
    call npm install
)

if not exist "frontend\node_modules" (
    echo Установка зависимостей frontend...
    cd frontend
    call npm install
    cd ..
)

if not exist "backend\node_modules" (
    echo Установка зависимостей backend...
    cd backend
    call npm install
    cd ..
)

echo.
echo Проверка файла .env...
if not exist "backend\.env" (
    echo ВНИМАНИЕ: Файл backend\.env не найден!
    echo Создайте его на основе backend\.env.example
    echo.
    pause
)

echo.
echo Запуск серверов...
echo Frontend будет доступен на http://localhost:5173
echo Backend будет доступен на http://localhost:3000
echo.
echo Нажмите Ctrl+C для остановки
echo.

call npm run dev


