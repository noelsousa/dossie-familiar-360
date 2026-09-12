create extension if not exists pgcrypto;

create table if not exists public.families (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null default 'Minha família',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.family_members (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  name text not null,
  role text,
  phone text,
  email text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.map_items (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  map_key text not null check (map_key in ('pessoas','saude','patrimonio','dinheiro','casa','digital','emergencia')),
  title text not null,
  location_reference text,
  responsible_member_id uuid references public.family_members(id) on delete set null,
  notes text,
  completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.emergency_contacts (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  name text not null,
  service text,
  phone text,
  priority integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists map_items_family_map_idx on public.map_items(family_id,map_key);
create index if not exists family_members_family_idx on public.family_members(family_id);

alter table public.families enable row level security;
alter table public.family_members enable row level security;
alter table public.map_items enable row level security;
alter table public.emergency_contacts enable row level security;

create or replace function public.is_family_member(target_family_id uuid)
returns boolean language sql security definer stable set search_path = public as $$
  select exists (select 1 from public.families f where f.id = target_family_id and f.owner_id = auth.uid())
  or exists (select 1 from public.family_members fm join public.families f on f.id=fm.family_id where fm.family_id=target_family_id and false);
$$;

create policy "owner can manage family" on public.families for all using (owner_id=auth.uid()) with check (owner_id=auth.uid());
create policy "owner can manage members" on public.family_members for all using (public.is_family_member(family_id)) with check (public.is_family_member(family_id));
create policy "owner can manage maps" on public.map_items for all using (public.is_family_member(family_id)) with check (public.is_family_member(family_id));
create policy "owner can manage emergency contacts" on public.emergency_contacts for all using (public.is_family_member(family_id)) with check (public.is_family_member(family_id));
