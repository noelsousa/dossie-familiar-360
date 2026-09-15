import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Clock3, Download, Gift, ShieldCheck, Sparkles, Star, Target, Zap } from 'lucide-react';

const CHECKOUT = 'https://kiwify.app/4mdLtXM?afid=BGL2tzwi';
const images = {
  hero: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=78',
  phone: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=78',
  creator: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=78',
  planning: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=78',
};
const faqs = [
  ['Como recebo o acesso?', 'Depois da confirmação da compra, as instruções de acesso são apresentadas no próprio fluxo de entrega.'],
  ['O material é digital?', 'Sim. O acesso acontece de forma digital, sem necessidade de receber um produto físico.'],
  ['Posso consultar o material novamente?', 'A proposta é ter o conteúdo disponível para consultar quando precisar de novas referências.'],
  ['Onde faço o pagamento?', 'O pagamento é realizado no checkout da Kiwify, plataforma responsável pelo processamento da compra.'],
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const goToCheckout = () => { window.location.href = CHECKOUT; };

  return (
    <main>
      <div className="top-strip"><Sparkles size={14} aria-hidden="true" /> ACESSO DIGITAL • ENTREGA ONLINE • COMECE HOJE</div>
      <header className="nav">
        <a className="logo" href="#top" aria-label="Pack Achadinhos"><span>PA</span><div>PACK<br /><b>ACHADINHOS</b></div></a>
        <button onClick={goToCheckout} className="nav-cta">QUERO ACESSAR <ArrowRight size={16} aria-hidden="true" /></button>
      </header>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow"><Zap size={15} aria-hidden="true" /> PARA QUEM CANSOU DE PROCURAR SOZINHO</span>
          <h1>Menos tempo procurando. <em>Mais tempo colocando ideias em prática.</em></h1>
          <p className="lead">O Pack Achadinhos reúne referências e possibilidades em um único ponto de partida para você não precisar reconstruir sua pesquisa toda vez.</p>
          <div className="hero-actions"><button onClick={goToCheckout} className="primary">QUERO VER O PACK <ArrowRight size={19} aria-hidden="true" /></button><span><ShieldCheck size={16} aria-hidden="true" /> Acesso digital</span></div>
          <div className="micro-proof"><div className="mini-icons" aria-hidden="true"><span><Sparkles size={13} /></span><span><Target size={13} /></span><span><Check size={13} /></span></div><div><strong>Uma biblioteca para consultar quando precisar.</strong><small>Você escolhe o que faz sentido e transforma referência em ponto de partida.</small></div></div>
        </div>
        <div className="hero-visual"><div className="hero-card"><img src={images.hero} alt="Pessoa criando conteúdo usando um celular" fetchPriority="high" /><div className="hero-overlay" /><div className="floating-card"><span className="floating-icon"><Gift size={19} aria-hidden="true" /></span><div><b>Pack Achadinhos</b><small>referências • ideias • praticidade</small></div></div><div className="hero-badge"><Star size={14} fill="currentColor" aria-hidden="true" /> ACESSO DIGITAL</div></div></div>
      </section>

      <section className="trust section" aria-label="Características"><div><Star size={17} aria-hidden="true" /><span>REFERÊNCIAS PARA EXPLORAR</span></div><div><Clock3 size={17} aria-hidden="true" /><span>MENOS PESQUISA MANUAL</span></div><div><Download size={17} aria-hidden="true" /><span>ACESSO DIGITAL</span></div><div><ShieldCheck size={17} aria-hidden="true" /><span>CHECKOUT SEGURO</span></div></section>

      <section className="section problem">
        <div className="section-label">SE ISSO ACONTECE COM VOCÊ, PRESTE ATENÇÃO</div>
        <h2>Você não precisa de mais uma pasta cheia de links. Precisa de um ponto de partida.</h2>
        <p>Pesquisar pode consumir energia antes mesmo de você começar. O objetivo aqui é encurtar esse caminho: acessar referências, identificar o que combina com você e partir para a ação.</p>
        <div className="pain-grid"><article><span>01</span><h3>Você procura demais</h3><p>Abre dezenas de páginas, salva várias opções e ainda fica sem saber por onde começar.</p></article><article><span>02</span><h3>Você perde o que encontrou</h3><p>Uma boa referência aparece hoje e amanhã já está enterrada entre outros favoritos.</p></article><article><span>03</span><h3>Você adia a execução</h3><p>Quanto mais difícil encontrar um ponto de partida, mais fácil deixar a ideia para depois.</p></article></div>
      </section>

      <section className="dark split"><div className="split-image"><img src={images.phone} alt="Celular mostrando referências visuais" loading="lazy" /><div className="image-tag">PESQUISE MENOS • EXPLORE MAIS</div></div><div className="split-copy"><span className="eyebrow light">O MECANISMO É SIMPLES</span><h2>Você entra com uma necessidade. Sai com referências para explorar.</h2><p>Em vez de depender de uma pesquisa nova a cada momento, você usa o Pack como uma fonte de consulta e escolhe o que faz sentido para a sua próxima ação.</p><ul><li><Check aria-hidden="true" /> Um ponto de partida organizado</li><li><Check aria-hidden="true" /> Mais possibilidades para comparar</li><li><Check aria-hidden="true" /> Menos tempo perdido na busca</li><li><Check aria-hidden="true" /> Acesso digital para consultar</li></ul><button onClick={goToCheckout} className="primary light-btn">QUERO CONHECER O PACK <ArrowRight size={18} aria-hidden="true" /></button></div></section>

      <section className="section steps"><div className="center"><span className="section-label">COMO USAR</span><h2>Três movimentos. <em>Sem complicar.</em></h2></div><div className="step-grid"><article><b>01</b><Target size={22} aria-hidden="true" /><h3>Entre</h3><p>Acesse o material depois da confirmação da compra.</p></article><article><b>02</b><Sparkles size={22} aria-hidden="true" /><h3>Explore</h3><p>Procure entre as referências aquilo que conversa com sua necessidade.</p></article><article><b>03</b><ArrowRight size={22} aria-hidden="true" /><h3>Coloque em prática</h3><p>Use a referência como ponto de partida para sua próxima ideia.</p></article></div></section>

      <section className="section gallery"><div className="center"><span className="section-label">MUDANDO A FORMA DE PESQUISAR</span><h2>Não é sobre acumular referências.<br /><em>É sobre encontrar uma que destrave a próxima ação.</em></h2></div><div className="gallery-grid"><div className="gallery-main"><img src={images.planning} alt="Pessoa planejando conteúdo" loading="lazy" /><span>PLANEJE</span></div><div className="gallery-creator"><img src={images.creator} alt="Criadora de conteúdo usando celular" loading="lazy" /><span>INSPIRE-SE</span></div><div className="quote-card"><Sparkles size={25} aria-hidden="true" /><p>“Uma boa referência não precisa entregar tudo pronto. Ela precisa ajudar você a começar.”</p><small>Um princípio do Pack</small></div></div></section>

      <section className="section audience"><div className="audience-inner"><div><span className="section-label">FAZ SENTIDO PARA VOCÊ?</span><h2>Para quem quer <em>encurtar o caminho</em> entre procurar e fazer.</h2></div><div className="audience-list"><span><Check aria-hidden="true" /> Você gosta de trabalhar com referências</span><span><Check aria-hidden="true" /> Você perde tempo pesquisando ideias</span><span><Check aria-hidden="true" /> Você quer uma fonte de consulta prática</span><span><Check aria-hidden="true" /> Você prefere explorar antes de decidir</span></div></div></section>

      <section className="section offer"><div className="offer-inner"><div className="offer-copy"><span className="eyebrow">SEU ACESSO</span><h2>Quando surgir a próxima ideia, você já sabe onde começar.</h2><p>Tenha o Pack como uma fonte de consulta para sua rotina e volte a ele sempre que precisar de novas referências.</p><div className="offer-list"><span><Check aria-hidden="true" /> Acesso ao conteúdo do Pack</span><span><Check aria-hidden="true" /> Material digital</span><span><Check aria-hidden="true" /> Consulta prática</span><span><Check aria-hidden="true" /> Acesso após a confirmação</span></div></div><div className="price-card"><div className="price-top"><span>PACK ACHADINHOS</span><Gift size={25} aria-hidden="true" /></div><div className="price-note">ACESSO DIGITAL</div><div className="price-copy">Se você já perdeu tempo demais procurando, talvez esteja na hora de mudar o ponto de partida.</div><button onClick={goToCheckout} className="primary full">QUERO ACESSAR AGORA <ArrowRight size={18} aria-hidden="true" /></button><small><ShieldCheck size={14} aria-hidden="true" /> Pagamento processado pela Kiwify</small></div></div></section>

      <section className="section faq"><div className="center"><span className="section-label">AINDA TEM DÚVIDA?</span><h2>O essencial antes de acessar.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <div className="faq-item" key={question}><button onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}><span>{question}</span><ChevronDown className={isOpen ? 'rotate' : ''} size={19} aria-hidden="true" /></button>{isOpen && <p id={`faq-answer-${index}`}>{answer}</p>}</div>; })}</div></section>

      <section className="final-cta"><div><Sparkles size={22} aria-hidden="true" /><h2>Seu próximo passo não precisa começar com mais uma busca.</h2><p>Abra o Pack e encontre um novo ponto de partida.</p></div><button onClick={goToCheckout} className="primary">QUERO MEU ACESSO <ArrowRight size={19} aria-hidden="true" /></button></section>
      <footer><div className="logo"><span>PA</span><div>PACK <b>ACHADINHOS</b></div></div><p>Esta é uma página independente de divulgação de afiliado. As informações e condições finais são apresentadas no checkout.</p><small>© 2026 • Todos os direitos reservados.</small></footer>
      <div className="mobile-sticky-cta"><button onClick={goToCheckout} className="primary">QUERO ACESSAR O PACK <ArrowRight size={17} aria-hidden="true" /></button></div>
    </main>
  );
}
export default App;
