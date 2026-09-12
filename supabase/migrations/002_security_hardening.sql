-- Security hardening for the MVP: only the family owner can access family data.
-- Collaborator access will be added later with a dedicated access table,
-- keeping contact records separate from authentication/authorization.

create or replace function public.is_family_member(target_family_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1
    from public.families f
    where f.id = target_family_id
      and f.owner_id = auth.uid()
  );
$$;

revoke all on function public.is_family_member(uuid) from public;
grant execute on function public.is_family_member(uuid) to authenticated;

create index if not exists families_owner_idx on public.families(owner_id);
create index if not exists emergency_contacts_family_priority_idx on public.emergency_contacts(family_id, priority desc);

alter table public.map_items drop constraint if exists map_items_title_check;
alter table public.map_items add constraint map_items_title_check check (length(trim(title)) between 1 and 180);
