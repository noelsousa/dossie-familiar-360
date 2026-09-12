import { supabase } from './supabase';

export type Family = { id: string; owner_id: string; name: string };
export type MapItem = { id: string; family_id: string; map_key: string; title: string; location_reference: string | null; responsible_member_id: string | null; notes: string | null; completed: boolean };

export async function getOrCreateFamily(userId: string): Promise<Family> {
  if (!supabase) throw new Error('Supabase não configurado.');
  const { data: existing, error } = await supabase.from('families').select('id,owner_id,name').eq('owner_id', userId).limit(1).maybeSingle();
  if (error) throw error;
  if (existing) return existing;
  const { data, error: insertError } = await supabase.from('families').insert({ owner_id: userId, name: 'Minha família' }).select('id,owner_id,name').single();
  if (insertError) throw insertError;
  return data;
}

export async function listMapItems(familyId: string) {
  if (!supabase) throw new Error('Supabase não configurado.');
  const { data, error } = await supabase.from('map_items').select('*').eq('family_id', familyId).order('created_at');
  if (error) throw error;
  return (data ?? []) as MapItem[];
}

export async function saveMapItem(familyId: string, mapKey: string, values: Pick<MapItem,'title'|'location_reference'|'notes'|'completed'> & { responsible_member_id?: string | null }) {
  if (!supabase) throw new Error('Supabase não configurado.');
  const { data, error } = await supabase.from('map_items').insert({ family_id: familyId, map_key: mapKey, ...values }).select('*').single();
  if (error) throw error;
  return data as MapItem;
}

export async function listMembers(familyId: string) {
  if (!supabase) throw new Error('Supabase não configurado.');
  const { data, error } = await supabase.from('family_members').select('*').eq('family_id', familyId).order('name');
  if (error) throw error;
  return data ?? [];
}
