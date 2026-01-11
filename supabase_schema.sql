-- 1. Create the table
create table appointments (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  patient_name text not null,
  patient_phone text not null,
  appointment_date date not null,
  appointment_time time not null,
  status text default 'pending'
);

-- 2. Enable Row Level Security (Security best practice)
alter table appointments enable row level security;

-- 3. Create a policy to allow ANYONE (anon) to INSERT bookings
create policy "Allow public inserts"
on appointments for insert
to anon
with check (true);

-- 4. Create a policy to allow only authenticated users (admins) to SELECT/VIEW bookings
-- (This prevents visitors from seeing other people's appointments)
create policy "Allow auth users to view"
on appointments for select
to authenticated
using (true);
