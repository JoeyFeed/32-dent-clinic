@echo off
title Frontend Server - 32 Дент
echo ====================================
echo Запуск Frontend сервера
echo ====================================
echo.
cd frontend
echo Текущая директория: %CD%
echo.
echo Проверка зависимостей...
if not exist "node_modules" (
    echo Установка зависимостей...
    call npm install
)
echo.
echo Запуск сервера...
echo Frontend будет доступен на http://localhost:5173
echo.
echo Нажмите Ctrl+C для остановки
echo.
npm run dev
pause

