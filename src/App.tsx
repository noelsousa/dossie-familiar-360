import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AlertTriangle, ArrowRight, CheckCircle2, ClipboardList, FileText, HeartPulse, Home, LayoutDashboard, LogOut, Menu, Shield, Smartphone, Users, WalletCards, X } from 'lucide-react';

const maps = [
  {id:'pessoas',label:'Pessoas',icon:Users,desc:'Quem faz o quê na família?'},
  {id:'saude',label:'Saúde',icon:HeartPulse,desc:'Informações essenciais de saúde.'},
  {id:'patrimonio',label:'Patrimônio',icon:Home,desc:'Bens, seguros e documentos.'},
  {id:'dinheiro',label:'Dinheiro',icon:WalletCards,desc:'Contas, compromissos e referências.'},
  {id:'casa',label:'Casa & Rotina',icon:ClipboardList,desc:'Contas e tarefas que não podem parar.'},
  {id:'digital',label:'Vida Digital',icon:Smartphone,desc:'Onde encontrar acessos, sem guardar senhas.'},
  {id:'emergencia',label:'Emergência',icon:AlertTriangle,desc:'O que fazer quando algo acontece.'},
];

function Layout({children}:{children:React.ReactNode}) {
 const [open,setOpen]=useState(false);
 return <div className="app-shell"><aside className={open?'sidebar open':'sidebar'}><div className="brand"><div className="brand-mark">D</div><div><strong>Dossiê Familiar</strong><span>360™</span></div><button className="icon-btn mobile-only" onClick={()=>setOpen(false)} aria-label="Fechar menu"><X size={22}/></button></div><nav><NavLink to="/" end onClick={()=>setOpen(false)}><LayoutDashboard size={19}/>Visão geral</NavLink>{maps.map(m=><NavLink key={m.id} to={'/mapa/'+m.id} onClick={()=>setOpen(false)}><m.icon size={19}/>{m.label}</NavLink>)}</nav><div className="sidebar-bottom"><NavLink to="/seguranca"><Shield size={19}/>Segurança e privacidade</NavLink><button className="logout"><LogOut size={19}/>Sair</button></div></aside><main className="main"><header className="topbar"><button className="icon-btn mobile-menu" onClick={()=>setOpen(true)} aria-label="Abrir menu"><Menu size={23}/></button><div><p className="eyebrow">MINHA FAMÍLIA</p><h1>Visão geral</h1></div><div className="user-badge">MF</div></header>{children}</main></div>
}

function Dashboard(){return <div className="content"><section className="welcome"><div><span className="pill">● EM ORGANIZAÇÃO</span><h2>Sua família mais preparada, um mapa por vez.</h2><p>Organize as informações importantes e deixe claro onde está cada coisa e quem pode ajudar.</p></div><div className="progress-ring"><strong>14%</strong><span>concluído</span></div></section><section className="section-head"><div><h3>Os 7 mapas da família</h3><p>Comece pelo que hoje está mais espalhado.</p></div></section><div className="map-grid">{maps.map((m,i)=><NavLink className="map-card" key={m.id} to={'/mapa/'+m.id}><div className="map-icon"><m.icon size={23}/></div><div><span className="map-number">MAPA {i+1}</span><h4>{m.label}</h4><p>{m.desc}</p></div><ArrowRight size={19} className="arrow"/></NavLink>)}</div><section className="security-note"><Shield size={22}/><div><strong>Privacidade primeiro</strong><p>O Dossiê organiza referências. Nunca informe aqui senhas, PINs, tokens ou códigos de autenticação.</p></div></section></div>}

function MapPage({id}:{id:string}){const map=maps.find(m=>m.id===id)??maps[0]; const [saved,setSaved]=useState(false); return <div className="content"><div className="breadcrumb">Visão geral / {map.label}</div><section className="page-intro"><div className="map-icon large"><map.icon size={30}/></div><div><span className="map-number">MAPA {maps.findIndex(x=>x.id===map.id)+1} DE 7</span><h2>{map.label}</h2><p>{map.desc}</p></div></section><div className="form-card"><div className="form-title"><div><h3>Informações principais</h3><p>Preencha apenas o que for útil para sua família.</p></div><CheckCircle2 size={24}/></div><label>Nome / identificação<input placeholder="Ex.: Conta principal, médico de referência, responsável..."/></label><label>Onde encontrar / referência<textarea placeholder="Ex.: pasta física, aplicativo, instituição, endereço do documento..."/></label><label>Responsável<input placeholder="Quem sabe resolver ou pode orientar?"/></label><div className="form-actions"><button className="btn primary" onClick={()=>setSaved(true)}>{saved?'Salvo ✓':'Salvar informações'}</button><button className="btn secondary">Adicionar outro item</button></div></div><section className="tip"><FileText size={20}/><div><strong>Uma regra simples</strong><p>Se outra pessoa precisasse resolver isso amanhã, ela saberia por onde começar?</p></div></section></div>}

function App(){return <Layout><Routes><Route path="/" element={<Dashboard/>}/><Route path="/mapa/:id" element={<MapRoute/>}/><Route path="*" element={<Dashboard/>}/></Routes></Layout>}
function MapRoute(){const path=window.location.pathname.split('/').pop()||'pessoas'; return <MapPage id={path}/>}
export default App;
