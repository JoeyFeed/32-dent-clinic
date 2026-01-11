-- Включаем RLS
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- 1. РАЗРЕШИТЬ ВСЕМ добавлять записи (Запись на прием)
DROP POLICY IF EXISTS "Enable insert for all users" ON appointments;
CREATE POLICY "Enable insert for all users" ON appointments FOR INSERT 
WITH CHECK (true);

-- 2. РАЗРЕШИТЬ ВСЕМ просматривать записи (Чтобы знать, какое время занято)
DROP POLICY IF EXISTS "Enable select for all users" ON appointments;
CREATE POLICY "Enable select for all users" ON appointments FOR SELECT 
USING (true);

-- 3. РАЗРЕШИТЬ ТОЛЬКО АДМИНАМ удалять записи
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON appointments;
CREATE POLICY "Enable delete for authenticated users only" ON appointments FOR DELETE 
TO authenticated 
USING (true);

-- 4. РАЗРЕШИТЬ ТОЛЬКО АДМИНАМ обновлять/изменять записи
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON appointments;
CREATE POLICY "Enable update for authenticated users only" ON appointments FOR UPDATE 
TO authenticated 
USING (true);
