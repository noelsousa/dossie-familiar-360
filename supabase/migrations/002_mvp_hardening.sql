alter table public.family_members add column if not exists user_id uuid references auth.users(id) on delete cascade;
alter table public.family_members add column if not exists is_responsible boolean not null default false;
alter table public.emergency_contacts add column if not exists notes text;

create index if not exists family_members_user_idx on public.family_members(user_id);

create or replace function public.is_family_member(target_family_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (select 1 from public.families f where f.id = target_family_id and f.owner_id = auth.uid())
  or exists (select 1 from public.family_members fm where fm.family_id = target_family_id and fm.user_id = auth.uid());
$$;

drop policy if exists "owner can manage family" on public.families;
drop policy if exists "owner can manage members" on public.family_members;
drop policy if exists "owner can manage maps" on public.map_items;
drop policy if exists "owner can manage emergency contacts" on public.emergency_contacts;
drop policy if exists "family members can read family" on public.families;
drop policy if exists "owners can insert family" on public.families;
drop policy if exists "owners can update family" on public.families;
drop policy if exists "owners can delete family" on public.families;
drop policy if exists "family members can read members" on public.family_members;
drop policy if exists "owners can manage members" on public.family_members;
drop policy if exists "family members can read maps" on public.map_items;
drop policy if exists "family members can insert maps" on public.map_items;
drop policy if exists "family members can update maps" on public.map_items;
drop policy if exists "family members can delete maps" on public.map_items;
drop policy if exists "family members can read emergency contacts" on public.emergency_contacts;
drop policy if exists "family members can insert emergency contacts" on public.emergency_contacts;
drop policy if exists "family members can update emergency contacts" on public.emergency_contacts;
drop policy if exists "family members can delete emergency contacts" on public.emergency_contacts;

create policy "family members can read family" on public.families for select using (public.is_family_member(id));
create policy "owners can insert family" on public.families for insert with check (owner_id=auth.uid());
create policy "owners can update family" on public.families for update using (owner_id=auth.uid()) with check (owner_id=auth.uid());
create policy "owners can delete family" on public.families for delete using (owner_id=auth.uid());

create policy "family members can read members" on public.family_members for select using (public.is_family_member(family_id));
create policy "owners can manage members" on public.family_members for all using (exists (select 1 from public.families f where f.id=family_id and f.owner_id=auth.uid())) with check (exists (select 1 from public.families f where f.id=family_id and f.owner_id=auth.uid()));

create policy "family members can read maps" on public.map_items for select using (public.is_family_member(family_id));
create policy "family members can insert maps" on public.map_items for insert with check (public.is_family_member(family_id));
create policy "family members can update maps" on public.map_items for update using (public.is_family_member(family_id)) with check (public.is_family_member(family_id));
create policy "family members can delete maps" on public.map_items for delete using (public.is_family_member(family_id));

create policy "family members can read emergency contacts" on public.emergency_contacts for select using (public.is_family_member(family_id));
create policy "family members can insert emergency contacts" on public.emergency_contacts for insert with check (public.is_family_member(family_id));
create policy "family members can update emergency contacts" on public.emergency_contacts for update using (public.is_family_member(family_id)) with check (public.is_family_member(family_id));
create policy "family members can delete emergency contacts" on public.emergency_contacts for delete using (public.is_family_member(family_id));
