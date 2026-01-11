-- 1. Удаляем дубликаты (оставляем только самую новую заявку для каждого времени)
DELETE FROM appointments
WHERE id IN (
  SELECT id
  FROM (
    SELECT id,
    ROW_NUMBER() OVER (partition BY appointment_date, appointment_time ORDER BY created_at DESC) AS rnum
    FROM appointments
  ) t
  WHERE t.rnum > 1
);

-- 2. Теперь спокойно добавляем защиту от двойных записей
ALTER TABLE appointments
ADD CONSTRAINT unique_appointment_slot UNIQUE (appointment_date, appointment_time);
