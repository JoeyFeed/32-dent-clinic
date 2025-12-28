@echo off
title Запуск всех серверов - 32 Дент
echo ====================================
echo Запуск проекта "32 Дент"
echo ====================================
echo.
echo Запуск Backend сервера...
start "Backend Server - 32 Дент" cmd /k "cd /d %~dp0backend && npm run dev"
timeout /t 3 /nobreak >nul
echo.
echo Запуск Frontend сервера...
start "Frontend Server - 32 Дент" cmd /k "cd /d %~dp0frontend && npm run dev"
timeout /t 2 /nobreak >nul
echo.
echo ====================================
echo Серверы запущены!
echo ====================================
echo.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:5173
echo.
echo Оба сервера запущены в отдельных окнах.
echo Закройте окна для остановки серверов.
echo.
pause

