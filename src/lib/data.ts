import { supabase } from './supabase';

export type Family = { id: string; owner_id: string; name: string; created_at?: string; updated_at?: string };
export type FamilyMember = { id: string; family_id: string; user_id?: string | null; name: string; role: string | null; phone: string | null; email: string | null; notes?: string | null; is_responsible?: boolean };
export type MapItem = { id: string; family_id: string; map_key: string; title: string; location_reference: string | null; responsible_member_id: string | null; notes: string | null; completed: boolean; created_at?: string; updated_at?: string };
export type EmergencyContact = { id: string; family_id: string; name: string; service: string | null; phone: string | null; priority: number };

function db() { if (!supabase) throw new Error('Supabase não configurado.'); return supabase; }

export async function getOrCreateFamily(userId: string): Promise<Family> {
  const client = db();
  const { data: existing, error } = await client.from('families').select('*').eq('owner_id', userId).limit(1).maybeSingle();
  if (error) throw error;
  if (existing) return existing;
  const { data, error: insertError } = await client.from('families').insert({ owner_id: userId, name: 'Minha família' }).select('*').single();
  if (insertError) throw insertError;
  return data;
}

export async function updateFamily(familyId: string, name: string) {
  const { data, error } = await db().from('families').update({ name: name.trim(), updated_at: new Date().toISOString() }).eq('id', familyId).select('*').single();
  if (error) throw error; return data as Family;
}

export async function listMapItems(familyId: string): Promise<MapItem[]> {
  const { data, error } = await db().from('map_items').select('*').eq('family_id', familyId).order('created_at');
  if (error) throw error; return (data ?? []) as MapItem[];
}

export async function saveMapItem(familyId: string, mapKey: string, values: Pick<MapItem,'title'|'location_reference'|'notes'|'completed'> & { responsible_member_id?: string | null }) {
  const { data, error } = await db().from('map_items').insert({ family_id: familyId, map_key: mapKey, ...values }).select('*').single();
  if (error) throw error; return data as MapItem;
}

export async function updateMapItem(id: string, values: Partial<Pick<MapItem,'title'|'location_reference'|'notes'|'completed'|'responsible_member_id'>>) {
  const { data, error } = await db().from('map_items').update({ ...values, updated_at: new Date().toISOString() }).eq('id', id).select('*').single();
  if (error) throw error; return data as MapItem;
}

export async function deleteMapItem(id: string) {
  const { error } = await db().from('map_items').delete().eq('id', id); if (error) throw error;
}

export async function listMembers(familyId: string): Promise<FamilyMember[]> {
  const { data, error } = await db().from('family_members').select('*').eq('family_id', familyId).order('name');
  if (error) throw error; return (data ?? []) as FamilyMember[];
}

export async function saveMember(familyId: string, values: Pick<FamilyMember,'name'|'role'|'phone'|'email'|'notes'|'is_responsible'>) {
  const { data, error } = await db().from('family_members').insert({ family_id: familyId, ...values }).select('*').single();
  if (error) throw error; return data as FamilyMember;
}

export async function deleteMember(id: string) { const { error } = await db().from('family_members').delete().eq('id', id); if (error) throw error; }

export async function listEmergencyContacts(familyId: string): Promise<EmergencyContact[]> {
  const { data, error } = await db().from('emergency_contacts').select('*').eq('family_id', familyId).order('priority').order('name');
  if (error) throw error; return (data ?? []) as EmergencyContact[];
}

export async function saveEmergencyContact(familyId: string, values: Omit<EmergencyContact,'id'|'family_id'>) {
  const { data, error } = await db().from('emergency_contacts').insert({ family_id: familyId, ...values }).select('*').single();
  if (error) throw error; return data as EmergencyContact;
}

export async function deleteEmergencyContact(id: string) { const { error } = await db().from('emergency_contacts').delete().eq('id', id); if (error) throw error; }
