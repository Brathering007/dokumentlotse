-- Migration 003: Zahlungsbereitschaft
alter table public.waitlist add column if not exists payment_willingness text;
