-- Update (or insert) the admin user with a bcrypt-hashed password.
-- Replace 'YOUR_PASSWORD_HERE' with the actual password before running.
-- pgcrypto is enabled by default on Supabase.

INSERT INTO manager_users (email, password_hash, name, role)
VALUES (
  'aquatrekhikka@gmail.com',
  crypt('YOUR_PASSWORD_HERE', gen_salt('bf', 10)),
  'Admin',
  'admin'
)
ON CONFLICT (email) DO UPDATE
  SET password_hash = crypt('YOUR_PASSWORD_HERE', gen_salt('bf', 10));
