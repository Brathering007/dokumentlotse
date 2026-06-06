-- Migration für bestehende Supabase-Projekte (nach schema.sql)
-- Im SQL Editor ausführen, falls waitlist bereits existiert:

alter table public.waitlist add column if not exists letter_frequency text;
alter table public.waitlist add column if not exists source text;
