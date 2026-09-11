-- ============================================================
-- MIGRATION: Fixes for role-based access control & ticket IDs
-- Run this against your existing event_platform database.
-- ============================================================

-- FIX #1: Add a role column to users (defaults existing users to 'customer')
ALTER TABLE users
  ADD COLUMN role ENUM('admin', 'customer') NOT NULL DEFAULT 'customer';

-- Promote at least one existing account to admin so you can log in and test
-- admin-only routes. Replace the email with your own test account.
-- UPDATE users SET role = 'admin' WHERE email = 'your_admin_email@example.com';

-- FIX #2: Add a real ticket_code column to registrations (was missing entirely)
ALTER TABLE registrations
  ADD COLUMN ticket_code VARCHAR(50) UNIQUE NULL;

-- Track which user made a registration (previously only stored name/email as free text,
-- with no link back to the users table)
ALTER TABLE registrations
  ADD COLUMN user_id INT NULL,
  ADD CONSTRAINT fk_registration_user FOREIGN KEY (user_id) REFERENCES users(id);

-- Track which admin created an event (previously no ownership tracking at all)
ALTER TABLE events
  ADD COLUMN created_by INT NULL,
  ADD CONSTRAINT fk_event_creator FOREIGN KEY (created_by) REFERENCES users(id);
