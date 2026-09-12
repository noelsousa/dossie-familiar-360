import { FormEvent, useState } from 'react';
import { supabase, hasSupabaseConfig } from './lib/supabase';

export function Auth({ onAuthed }: { onAuthed: () => void }) {
  const [mode, setMode] = useState<'login'|'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault(); setError(''); setLoading(true);
    if (!supabase) { setError('O ambiente ainda não está conectado ao Supabase. Configure as variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.'); setLoading(false); return; }
    const result = mode === 'login'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
    if (result.error) setError(result.error.message);
    else onAuthed();
    setLoading(false);
  }

  return <div className="auth-shell"><div className="auth-card"><div className="brand auth-brand"><div className="brand-mark">D</div><div><strong>Dossiê Familiar</strong><span>360™</span></div></div><span className="pill">ORGANIZAÇÃO FAMILIAR</span><h1>{mode === 'login' ? 'Bem-vindo de volta.' : 'Crie seu espaço familiar.'}</h1><p className="auth-copy">Guarde referências importantes em um único lugar, com acesso protegido.</p>{!hasSupabaseConfig() && <div className="warning">Modo de configuração: conecte o Supabase para ativar o acesso real.</div>}<form onSubmit={submit}>{mode==='signup' && <label>Seu nome<input value={name} onChange={e=>setName(e.target.value)} placeholder="Como a família chama você?" required/></label>}<label>E-mail<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="voce@email.com" required/></label><label>Senha<input type="password" minLength={6} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mínimo de 6 caracteres" required/></label>{error && <div className="error">{error}</div>}<button className="btn primary full" disabled={loading}>{loading?'Aguarde…':mode==='login'?'Entrar no meu dossiê':'Criar meu dossiê'}</button></form><button className="link-btn" onClick={()=>{setMode(mode==='login'?'signup':'login');setError('')}}>{mode==='login'?'Ainda não tenho uma conta':'Já tenho uma conta'}</button></div></div>;
}
