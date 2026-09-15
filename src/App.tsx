import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Clock3, Download, Gift, ShieldCheck, Sparkles, Star, Zap } from 'lucide-react';

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
          <span className="eyebrow"><Zap size={15} aria-hidden="true" /> VOCÊ NÃO PRECISA COMEÇAR DO ZERO</span>
          <h1>Seu próximo conteúdo pode estar <em>mais perto</em> do que você imagina.</h1>
          <p className="lead">Encontre referências e ideias em um só lugar para reduzir o tempo de pesquisa e transformar inspiração em ação.</p>
          <div className="hero-actions"><button onClick={goToCheckout} className="primary">QUERO VER O PACK <ArrowRight size={19} aria-hidden="true" /></button><span><ShieldCheck size={16} aria-hidden="true" /> Acesso digital</span></div>
          <div className="micro-proof"><div className="mini-icons" aria-hidden="true"><span><Sparkles size={13} /></span><span><Zap size={13} /></span><span><Check size={13} /></span></div><div><strong>Menos procura. Mais ponto de partida.</strong><small>Uma forma prática de organizar sua busca por referências.</small></div></div>
        </div>
        <div className="hero-visual"><div className="hero-card"><img src={images.hero} alt="Pessoa criando conteúdo usando um celular" fetchPriority="high" /><div className="hero-overlay" /><div className="floating-card"><span className="floating-icon"><Gift size={19} aria-hidden="true" /></span><div><b>Referências para explorar</b><small>menos procura • mais ação</small></div></div><div className="hero-badge"><Star size={14} fill="currentColor" aria-hidden="true" /> PRATICIDADE</div></div></div>
      </section>

      <section className="trust section" aria-label="Benefícios">
        <div><Star size={17} aria-hidden="true" /><span>IDEIAS PARA DESBLOQUEAR A CRIATIVIDADE</span></div><div><Clock3 size={17} aria-hidden="true" /><span>MENOS TEMPO NA PESQUISA</span></div><div><Download size={17} aria-hidden="true" /><span>ACESSO DIGITAL</span></div><div><ShieldCheck size={17} aria-hidden="true" /><span>CHECKOUT SEGURO</span></div>
      </section>

      <section className="section problem">
        <div className="section-label">O PROBLEMA NÃO É FALTA DE VONTADE.</div>
        <h2>É perder tempo procurando, salvando e organizando tudo sozinho.</h2>
        <p>Você encontra uma ideia boa, salva. Encontra outra, manda para si mesmo. Depois tenta lembrar onde estava. Quando percebe, passou mais tempo pesquisando do que criando.</p>
        <div className="pain-grid">
          <article><span>01</span><h3>Pesquisa sem fim</h3><p>Horas pulando de perfil em perfil atrás de referências que realmente façam sentido.</p></article>
          <article><span>02</span><h3>Conteúdo espalhado</h3><p>Links, vídeos e ideias ficam perdidos entre pastas, favoritos e conversas.</p></article>
          <article><span>03</span><h3>Travou na hora de usar</h3><p>Quando chega a hora de criar, falta uma referência clara para começar.</p></article>
        </div>
      </section>

      <section className="dark split">
        <div className="split-image"><img src={images.phone} alt="Celular mostrando referências visuais" loading="lazy" /><div className="image-tag">REFERÊNCIAS + IDEIAS + PRATICIDADE</div></div>
        <div className="split-copy"><span className="eyebrow light">A PROPOSTA É SIMPLES</span><h2>Troque o “o que eu vou fazer hoje?” por um ponto de partida.</h2><p>O Pack funciona como uma biblioteca de referências: você acessa, encontra o que combina com seu momento e usa aquilo como ponto de partida para criar.</p><ul><li><Check aria-hidden="true" /> Mais opções para explorar</li><li><Check aria-hidden="true" /> Menos tempo procurando referências</li><li><Check aria-hidden="true" /> Mais praticidade para sua rotina</li><li><Check aria-hidden="true" /> Acesso digital para consultar</li></ul><button onClick={goToCheckout} className="primary light-btn">QUERO CONHECER O PACK <ArrowRight size={18} aria-hidden="true" /></button></div>
      </section>

      <section className="section gallery"><div className="center"><span className="section-label">UM OUTRO JEITO DE ENXERGAR</span><h2>Não é sobre ter mais coisas salvas.<br /><em>É sobre saber o que fazer com elas.</em></h2></div><div className="gallery-grid"><div className="gallery-main"><img src={images.planning} alt="Pessoa planejando conteúdo" loading="lazy" /><span>PLANEJE</span></div><div className="gallery-creator"><img src={images.creator} alt="Criadora de conteúdo usando celular" loading="lazy" /><span>INSPIRE-SE</span></div><div className="quote-card"><Sparkles size={25} aria-hidden="true" /><p>“Uma boa referência pode ser o começo de uma ideia que você coloca em prática hoje.”</p><small>Um princípio do Pack</small></div></div></section>

      <section className="section offer"><div className="offer-inner"><div className="offer-copy"><span className="eyebrow">SEU ACESSO</span><h2>Abra a porta para uma biblioteca de possibilidades.</h2><p>Tenha o Pack como seu ponto de partida sempre que precisar de novas referências e ideias para sua rotina de conteúdo.</p><div className="offer-list"><span><Check aria-hidden="true" /> Acesso ao conteúdo do Pack</span><span><Check aria-hidden="true" /> Material digital</span><span><Check aria-hidden="true" /> Consulta prática</span><span><Check aria-hidden="true" /> Acesso após a confirmação</span></div></div><div className="price-card"><div className="price-top"><span>PACK ACHADINHOS</span><Gift size={25} aria-hidden="true" /></div><div className="price-note">ACESSO DIGITAL</div><div className="price-copy">Pare de depender de uma busca diferente toda vez que precisar de inspiração.</div><button onClick={goToCheckout} className="primary full">QUERO ACESSAR AGORA <ArrowRight size={18} aria-hidden="true" /></button><small><ShieldCheck size={14} aria-hidden="true" /> Pagamento processado pela Kiwify</small></div></div></section>

      <section className="section faq"><div className="center"><span className="section-label">AINDA TEM DÚVIDA?</span><h2>Antes de decidir, veja o essencial.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <div className="faq-item" key={question}><button onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}><span>{question}</span><ChevronDown className={isOpen ? 'rotate' : ''} size={19} aria-hidden="true" /></button>{isOpen && <p id={`faq-answer-${index}`}>{answer}</p>}</div>; })}</div></section>

      <section className="final-cta"><div><Sparkles size={22} aria-hidden="true" /><h2>Chega de começar do zero toda vez.</h2><p>Tenha um ponto de partida para sua próxima ideia.</p></div><button onClick={goToCheckout} className="primary">QUERO MEU ACESSO <ArrowRight size={19} aria-hidden="true" /></button></section>
      <footer><div className="logo"><span>PA</span><div>PACK <b>ACHADINHOS</b></div></div><p>Esta é uma página independente de divulgação de afiliado. As informações e condições finais são apresentadas no checkout.</p><small>© 2026 • Todos os direitos reservados.</small></footer>
      <div className="mobile-sticky-cta"><button onClick={goToCheckout} className="primary">QUERO ACESSAR O PACK <ArrowRight size={17} aria-hidden="true" /></button></div>
    </main>
  );
}
export default App;
