import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Clock3, Download, Gift, Instagram, Play, ShieldCheck, Sparkles, Star, Zap } from 'lucide-react';

const CHECKOUT = 'https://kiwify.app/4mdLtXM?afid=BGL2tzwi';

const images = {
  hero: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85',
  creator: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85',
  phone: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85',
  lifestyle: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
};

function App() {
  const [open, setOpen] = useState<number | null>(null);

  const go = () => window.location.assign(CHECKOUT);

  return (
    <main>
      <div className="top-strip"><Sparkles size={15}/> ACESSO DIGITAL • ENTREGA ONLINE • COMECE HOJE</div>
      <nav className="nav"><div className="logo"><span>PA</span><div>PACK<br/><b>ACHADINHOS</b></div></div><button onClick={go} className="nav-cta">QUERO ACESSAR <ArrowRight size={17}/></button></nav>

      <section className="hero section">
        <div className="hero-copy">
          <span className="eyebrow"><Zap size={15}/> VOCÊ NÃO PRECISA COMEÇAR DO ZERO</span>
          <h1>Seu próximo conteúdo pode estar <em>mais perto</em> do que você imagina.</h1>
          <p className="lead">Uma seleção prática de conteúdos e ideias para quem quer encontrar referências, ganhar tempo e parar de passar horas procurando o que publicar.</p>
          <div className="hero-actions"><button onClick={go} className="primary">QUERO VER O PACK <ArrowRight size={19}/></button><span><ShieldCheck size={16}/> Acesso digital</span></div>
          <div className="micro-proof"><div className="avatars"><span>1</span><span>2</span><span>3</span></div><div><strong>Feito para quem quer praticidade</strong><small>Organização, variedade e acesso em um só lugar.</small></div></div>
        </div>
        <div className="hero-visual"><div className="hero-card"><img src={images.hero} alt="Pessoa criando conteúdo no celular"/><div className="floating-card"><Gift size={20}/><div><b>Conteúdo pronto para explorar</b><small>menos procura • mais ação</small></div></div></div></div>
      </section>

      <section className="trust section narrow"><div><Star fill="currentColor" size={17}/><span>IDEIAS PARA DESBLOQUEAR SUA CRIATIVIDADE</span></div><div><Clock3 size={17}/><span>ECONOMIZE TEMPO NA PESQUISA</span></div><div><Download size={17}/><span>ACESSO DIGITAL</span></div><div><ShieldCheck size={17}/><span>COMPRA PROCESSADA COM SEGURANÇA</span></div></section>

      <section className="section problem"><div className="section-label">O problema não é falta de vontade.</div><h2>É perder tempo procurando, salvando e organizando tudo sozinho.</h2><p>Você vê uma ideia boa, salva. Vê outra, manda para si mesmo. Depois tenta lembrar onde estava. Quando percebe, passou mais tempo pesquisando do que criando.</p><div className="pain-grid"><article><span>01</span><h3>Pesquisa sem fim</h3><p>Horas pulando de perfil em perfil atrás de referências.</p></article><article><span>02</span><h3>Conteúdo espalhado</h3><p>Links, vídeos e ideias ficam perdidos em vários lugares.</p></article><article><span>03</span><h3>Travou na hora de usar</h3><p>Quando chega a hora de criar, falta uma referência clara para começar.</p></article></div></section>

      <section className="section dark split"><div className="split-image"><img src={images.phone} alt="Celular com referências de conteúdo"/><div className="image-tag">REFERÊNCIAS + IDEIAS + PRATICIDADE</div></div><div className="split-copy"><span className="eyebrow light">A PROPOSTA É SIMPLES</span><h2>Troque o “o que eu vou fazer hoje?” por um ponto de partida.</h2><p>O Pack foi pensado para funcionar como uma biblioteca de referências: você acessa, encontra o que faz sentido para o seu momento e transforma a inspiração em ação.</p><ul><li><Check/> Mais opções para explorar</li><li><Check/> Menos tempo procurando referências</li><li><Check/> Mais praticidade para sua rotina</li><li><Check/> Acesso digital para consultar quando quiser</li></ul><button onClick={go} className="primary light-btn">QUERO CONHECER O PACK <ArrowRight size={18}/></button></div></section>

      <section className="section gallery"><div className="center"><span className="section-label">UM OUTRO JEITO DE ENXERGAR</span><h2>Não é sobre ter mais coisas salvas.<br/><em>É sobre saber o que fazer com elas.</em></h2></div><div className="gallery-grid"><div className="gallery-main"><img src={images.lifestyle} alt="Pessoa planejando conteúdo"/><span>PLANEJE</span></div><div><img src={images.creator} alt="Criadora de conteúdo"/><span>INSPIRE-SE</span></div><div className="quote-card"><Sparkles size={25}/><p>“A melhor ideia nem sempre é a mais complicada. Às vezes, é a que você consegue colocar em prática hoje.”</p><small>— princípio do Pack</small></div></div></section>

      <section className="section offer"><div className="offer-inner"><div><span className="eyebrow">SEU ACESSO</span><h2>Abra a porta para uma biblioteca de possibilidades.</h2><p>Tenha o Pack como seu ponto de partida sempre que precisar de novas referências e ideias.</p><div className="offer-list"><span><Check/> Acesso ao conteúdo do Pack</span><span><Check/> Material digital</span><span><Check/> Consulta prática</span><span><Check/> Acesso imediato após a compra</span></div></div><div className="price-card"><div className="price-top"><span>PACK ACHADINHOS</span><Gift size={25}/></div><div className="price-note">ACESSO DIGITAL</div><div className="price-copy">Você não está comprando mais uma coisa para deixar esquecida.</div><button onClick={go} className="primary full">QUERO ACESSAR AGORA <ArrowRight size={18}/></button><small><ShieldCheck size={14}/> Pagamento processado pela Kiwify</small></div></div></section>

      <section className="section faq"><div className="center"><span className="section-label">AINDA TEM DÚVIDA?</span><h2>Antes de decidir, veja o essencial.</h2></div>{['Como recebo o acesso?','O acesso é digital?','Posso consultar o material depois?','O pagamento é seguro?'].map((q,i)=><div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?null:i)}><span>{q}</span><ChevronDown className={open===i?'rotate':''} size={19}/></button>{open===i&&<p>{i===0?'Após a confirmação da compra, as instruções de acesso são apresentadas no fluxo de entrega.':i===1?'Sim. A proposta é ter o conteúdo disponível de forma digital.':i===2?'Sim. O material foi pensado para ser consultado sempre que você precisar de novas referências.':'O processamento do pagamento é realizado pela Kiwify, plataforma de checkout.'}</p>}</div>)}</section>

      <section className="final-cta"><div><Sparkles size={22}/><h2>Chega de começar do zero toda vez.</h2><p>Tenha um ponto de partida para sua próxima ideia.</p></div><button onClick={go} className="primary">QUERO MEU ACESSO <ArrowRight size={19}/></button></section>
      <footer><div className="logo"><span>PA</span><div>PACK <b>ACHADINHOS</b></div></div><p>Este site é uma página independente de divulgação de afiliado. Informações e condições finais são apresentadas no checkout.</p><small>© 2026 • Todos os direitos reservados.</small></footer>
    </main>
  );
}

export default App;
