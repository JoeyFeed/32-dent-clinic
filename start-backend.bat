@echo off
title Backend Server - 32 Дент
echo ====================================
echo Запуск Backend сервера
echo ====================================
echo.
cd backend
echo Текущая директория: %CD%
echo.
echo Проверка зависимостей...
if not exist "node_modules" (
    echo Установка зависимостей...
    call npm install
)
echo.
echo Запуск сервера...
echo Backend будет доступен на http://localhost:3000
echo.
echo Нажмите Ctrl+C для остановки
echo.
npm run dev
pause

