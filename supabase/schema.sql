-- DokumentenLotse: Wartelisten-Tabelle
-- In Supabase: SQL Editor → New query → ausführen

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  document_interest text,
  letter_frequency text,
  payment_willingness text,
  source text,
  created_at timestamptz not null default now()
);

-- Index für schnelle Abfragen nach Datum
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

-- Row Level Security aktivieren (API nutzt Service Role Key serverseitig)
alter table public.waitlist enable row level security;

-- Keine öffentlichen Policies: Zugriff nur über Service Role Key in der API
-- (Kein direkter Client-Zugriff von außen)

comment on table public.waitlist is 'Warteliste für DokumentenLotse MVP';
