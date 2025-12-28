# Перемещение проекта в папку без кириллицы

## Рекомендуемый путь

Создайте папку в удобном месте, например:
- `C:\Projects\32-dent-clinic`
- `C:\dev\32-dent-clinic`
- `D:\Projects\32-dent-clinic`

## Шаги

### 1. Создайте новую папку

```powershell
# Например:
mkdir C:\Projects\32-dent-clinic
```

### 2. Скопируйте весь проект

Скопируйте всю папку `Стоматология 32 Дент` в новое место.

**Важно:** Скопируйте ВСЁ содержимое, включая:
- frontend/
- backend/
- package.json
- все остальные файлы

### 3. Откройте проект в новом месте

```powershell
cd C:\Projects\32-dent-clinic
```

### 4. Переустановите зависимости (рекомендуется)

```powershell
# Удалите старые node_modules
rm -r node_modules -ErrorAction SilentlyContinue
rm -r frontend\node_modules -ErrorAction SilentlyContinue
rm -r backend\node_modules -ErrorAction SilentlyContinue

# Установите заново
npm run install:all
```

### 5. Проверьте файл .env

Убедитесь, что файл `backend\.env` существует и содержит правильные настройки.

### 6. Запустите проект

```powershell
# Вариант 1: Отдельные терминалы
# Терминал 1:
cd backend
npm run dev

# Терминал 2:
cd frontend
npm run dev

# Вариант 2: Используйте батники
start-all.bat
```

---

## После перемещения

После перемещения проекта в папку без кириллицы:
- ✅ Vite/esbuild будет работать корректно
- ✅ concurrently будет работать без ошибок EPERM
- ✅ Все пути будут обрабатываться правильно

---

## Быстрая команда для копирования

Если хотите скопировать через PowerShell:

```powershell
# Создать папку
New-Item -ItemType Directory -Path "C:\Projects\32-dent-clinic" -Force

# Скопировать всё содержимое
Copy-Item -Path "C:\Users\zaxer\OneDrive\Рабочий стол\Стоматология 32 Дент\*" -Destination "C:\Projects\32-dent-clinic" -Recurse -Force
```

---

## Готово!

После перемещения все должно работать без проблем с путями.

