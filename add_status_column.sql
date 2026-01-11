ALTER TABLE appointments 
ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending';

-- Optional: Add a check constraint to ensure valid status values
-- ALTER TABLE appointments ADD CONSTRAINT status_check CHECK (status IN ('pending', 'confirmed', 'rejected'));
