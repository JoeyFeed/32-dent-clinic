
-- Add a unique constraint to prevent duplicate bookings for the same date and time
ALTER TABLE appointments
ADD CONSTRAINT unique_appointment_slot UNIQUE (appointment_date, appointment_time);
