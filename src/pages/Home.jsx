import React, { useState } from 'react';
import { 
  Building2, 
  ScrollText, 
  Network, 
  Search,
  Briefcase,
  Users,
  ArrowRight
} from 'lucide-react';
import { Footer, Navbar, LinkedinIcon, WhatsAppButton, StickyWhatsApp } from '../components/Shared';

const customStyles = `
  /* 1. Normalização de Containers */
  .home-container {
    width: 100%;
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    .home-container {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  /* 2. Normalização de Espaçamentos de Seções */
  .home-section {
    padding: 80px 0;
  }
  @media (max-width: 768px) {
    .home-section {
      padding: 58px 0;
    }
  }

  /* 3. Limite de Largura de Parágrafos Nobres */
  .home-text-limit {
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
  }

  /* 4. Normalização Tipográfica */
  .home-h1 {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: clamp(36px, 3.4vw, 56px);
    line-height: 1.12;
    color: var(--text-main);
  }
  .home-h2 {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: clamp(30px, 2.2vw, 42px);
    line-height: 1.15;
    color: var(--text-main);
  }
  .home-h3 {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: clamp(21px, 1.5vw, 26px);
    line-height: 1.18;
    color: var(--text-main);
  }
  .home-p {
    font-family: var(--font-body);
    font-weight: 400;
    font-size: clamp(16px, 1vw, 18px);
    line-height: 1.62;
    color: rgba(255, 255, 255, 0.78);
  }
  .home-list-item {
    font-family: var(--font-body);
    font-size: 17.5px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }
  .home-aux {
    font-family: var(--font-body);
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--text-muted);
  }

  /* 5. Componentes Customizados da Home */
  .hero-btn-outline {
    padding: 0.9rem 2rem;
    border: 1px solid var(--accent-gold);
    color: var(--accent-gold);
    background: transparent;
    border-radius: 4px;
    font-weight: 550;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .hero-btn-outline:hover {
    background: rgba(212,175,55,0.1);
  }
  .hero-btn-solid {
    padding: 0.9rem 2rem;
    background: var(--accent-gold);
    color: #000;
    border: 1px solid var(--accent-gold);
    border-radius: 4px;
    font-weight: 550;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .hero-btn-solid:hover {
    background: #e6c84c;
    border-color: #e6c84c;
  }
  .frente-card {
    background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(212,175,55,0.02) 100%);
    border: 1px solid var(--bg-surface-light);
    padding: 3rem 2rem;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .frente-card:hover {
    border-color: var(--accent-gold);
    transform: translateY(-4px);
  }
  .transversal-section {
    background: linear-gradient(90deg, rgba(10,10,12,1) 0%, rgba(10,10,12,0.85) 100%), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border-top: 1px solid rgba(212,175,55,0.12);
    border-bottom: 1px solid rgba(212,175,55,0.12);
  }
  .demand-item {
    padding: 22px 0;
    border-bottom: 1px solid rgba(212, 175, 55, 0.12);
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .demand-item:last-child {
    border-bottom: none;
  }
  .atuacao-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .atuacao-block {
    border-left: 2px solid var(--accent-gold);
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .atuacao-title {
    color: var(--accent-gold);
    font-size: 1.2rem;
    font-weight: 550;
    letter-spacing: 0.5px;
  }
  @media (max-width: 768px) {
    .atuacao-grid {
      grid-template-columns: 1fr;
      gap: 2.2rem;
    }
  }
`;

export default function Home() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);

  return (
    <>
      <style>{customStyles}</style>
      <Navbar showMenu={true} />

      {/* 1. HERO INSTITUCIONAL */}
      <section className="home-section" style={{ paddingTop: '7rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        {/* Grafismos de Fundo */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40vw', height: '40vw', border: '1px solid rgba(212,175,55,0.06)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '60vw', height: '60vw', border: '1px solid rgba(212,175,55,0.03)', borderRadius: '50%', zIndex: 0 }}></div>
        
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="home-h1" style={{ marginBottom: '22px' }}>
              Advocacia estratégica para empresas, patrimônio e imóveis na nova realidade tributária.
            </h1>
            
            <p className="home-p" style={{ marginBottom: '40px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              Estruturação jurídica personalizada para decisões em que contratos, patrimônio, operações empresariais e tributação precisam ser analisados em conjunto.
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#apresentacao" className="hero-btn-outline">
                Conheça o escritório
              </a>
              <a href="#contato" className="hero-btn-solid">
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APRESENTAÇÃO */}
      <section id="apresentacao" className="home-section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="home-container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            <Briefcase size={36} color="var(--accent-gold)" style={{ margin: '0 auto 20px auto' }} />
            <h2 className="home-h2" style={{ marginBottom: '20px' }}>
              Estratégia jurídica para decisões singulares.
            </h2>
            <p className="home-p home-text-limit" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
              O Andrade e Florio integra o Direito Empresarial, Patrimonial e Imobiliário à inteligência tributária para estruturar decisões relevantes, operações complexas e relações de longo prazo. Fugimos de formatos massificados de atendimento para garantir um acompanhamento direto por sócios seniores com visão multidisciplinar e foco absoluto na segurança e perpetuidade das decisões do cliente.
            </p>
          </div>
        </div>
      </section>

      {/* 3. REFORMA TRIBUTÁRIA E A REALIDADE TRANSVERSAL */}
      <section id="reforma-tributaria" className="home-section transversal-section">
        <div className="home-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '20px' }}>
                <Network size={32} color="var(--accent-gold)" />
                <h2 className="home-h2" style={{ margin: 0 }}>Decisões jurídicas em um novo ambiente tributário.</h2>
              </div>
              <p className="home-p" style={{ marginBottom: '20px' }}>
                A Reforma Tributária (IBS e CBS) reconfigura a lógica dos negócios no Brasil. A tributação não pode mais ser analisada de forma retroativa ou isolada; ela precisa participar ativamente da concepção de contratos de longo prazo, de reorganizações societárias e de transações imobiliárias desde o início.
              </p>
              <p className="home-p">
                Unimos frentes jurídicas distintas a um olhar fiscal contínuo para mitigar riscos imprevistos e assegurar que as estruturas criadas permaneçam eficientes e resilientes.
              </p>
            </div>
            
            <div style={{ padding: '2.5rem 2.5rem', border: '1px solid var(--accent-gold)', backgroundColor: 'rgba(212,175,55,0.015)', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', backgroundColor: 'var(--accent-gold)' }}></div>
               <h3 className="home-h3" style={{ marginBottom: '16px' }}>A Visão Transversal</h3>
               <p className="home-p" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                 A transição tributária exige uma análise integrada de contratos, patrimônio familiar, titularidades e operações imobiliárias. Nenhum ativo ou relação jurídica deve ser avaliado sem considerar a nova carga econômica projetada para os próximos anos.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRÊS FRENTES INTEGRADAS */}
      <section id="frentes" className="home-section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="home-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="home-h2" style={{ marginBottom: '20px' }}>Nossas Frentes de Atuação</h2>
            <p className="home-p home-text-limit">
              Integração multidisciplinar voltada aos resultados do seu negócio e patrimônio.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="frente-card">
              <ScrollText size={32} color="var(--accent-gold)" style={{ marginBottom: '1.5rem' }} />
              <h3 className="home-h3" style={{ marginBottom: '16px' }}>Empresas e Contratos</h3>
              <p className="home-p" style={{ fontSize: '16.5px' }}>
                Estruturação de relações empresariais, elaboração de contratos comerciais de alta complexidade, planejamento de reorganizações societárias e apoio a decisões estratégicas corporativas.
              </p>
            </div>

            <div className="frente-card">
              <Users size={32} color="var(--accent-gold)" style={{ marginBottom: '1.5rem' }} />
              <h3 className="home-h3" style={{ marginBottom: '16px' }}>Patrimônio e Sucessão</h3>
              <p className="home-p" style={{ fontSize: '16.5px' }}>
                Organização, governança jurídica e estruturação inteligente de patrimônios privados. Constituição de holdings familiares e planejamento sucessório focado na preservação de longo prazo.
              </p>
            </div>

            <div className="frente-card">
              <Building2 size={32} color="var(--accent-gold)" style={{ marginBottom: '1.5rem' }} />
              <h3 className="home-h3" style={{ marginBottom: '16px' }}>Imóveis e Operações</h3>
              <p className="home-p" style={{ fontSize: '16.5px' }}>
                Estruturação jurídica de ativos e grandes operações imobiliárias, incluindo compra, venda, locação estruturada e proteção de titularidade sob rigorosa análise de riscos fiscais.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PERFIL DE CLIENTE E NATUREZA DAS DEMANDAS */}
      <section id="perfil" className="home-section">
        <div className="home-container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="home-h2" style={{ marginBottom: '20px' }}>Perfil das Nossas Demandas</h2>
            <p className="home-p home-text-limit" style={{ fontSize: '17px' }}>
              O escritório dedica sua capacidade a cenários onde a precisão jurídica e a visão multidisciplinar são fundamentais.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              "Decisões com repercussões jurídicas e tributárias de alta relevância",
              "Operações empresariais ou imobiliárias estruturadas",
              "Organização, sucessão e proteção de patrimônio familiar",
              "Estruturação de relações contratuais de longo prazo com mitigação de passivos",
              "Governança societária e alinhamento de holdings de controle",
              "Adaptação preventiva de estruturas comerciais à Reforma Tributária",
              "Demandas singulares que repelem soluções prontas e genéricas"
            ].map((item, idx) => (
              <div key={idx} className="demand-item">
                <ArrowRight color="var(--accent-gold)" size={16} style={{ flexShrink: 0, marginTop: '5px' }} />
                <span className="home-list-item">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORMA DE ATUAÇÃO */}
      <section id="atuacao" className="home-section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="home-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="home-h2">Forma de Atuação</h2>
          </div>
          
          <div className="atuacao-grid">
            <div className="atuacao-block">
              <span className="atuacao-title">Atendimento Personalizado</span>
              <p className="home-p" style={{ fontSize: '16.5px' }}>
                Dedicamos tempo exclusivo a cada estrutura que desenhamos. Cada demanda é tratada de forma cirúrgica e confidencial, respeitando o ritmo e as particularidades de cada operação.
              </p>
            </div>
            <div className="atuacao-block">
              <span className="atuacao-title">Atuação Sênior Direta</span>
              <p className="home-p" style={{ fontSize: '16.5px' }}>
                Garantimos que todas as análises e decisões sejam conduzidas diretamente por especialistas experientes, descartando qualquer forma de delegação massificada de trabalho.
              </p>
            </div>
            <div className="atuacao-block">
              <span className="atuacao-title">Compreensão Real do Negócio</span>
              <p className="home-p" style={{ fontSize: '16.5px' }}>
                Vamos além de pareceres jurídicos convencionais. Entregamos soluções contratuais e societárias de alta conformidade que respeitam a viabilidade e os objetivos do negócio.
              </p>
            </div>
            <div className="atuacao-block">
              <span className="atuacao-title">Integração Multidisciplinar</span>
              <p className="home-p" style={{ fontSize: '16.5px' }}>
                Avaliamos o Direito Societário, Imobiliário e Civil sob uma contínua avaliação tributária. Entendemos que a tributação é indissociável das relações de negócios atuais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DRA. LÍBIA FLÓRIO */}
      <section id="dra-libia" className="home-section">
        <div className="home-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Foto */}
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', top: '-16px', left: '-16px', width: '100%', height: '100%', 
                border: '1px solid var(--accent-gold)', zIndex: 0 
              }}></div>
              <img 
                src="/dra-libia.png" 
                alt="Dra. Libia Florio" 
                style={{ position: 'relative', zIndex: 1, objectFit: 'cover', width: '100%', height: 'auto', border: '1px solid var(--bg-surface-light)' }} 
              />
            </div>

            {/* Biografia */}
            <div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '8px' }}>
                 <h2 className="home-h2" style={{ margin: 0 }}>Dra. Libia Florio</h2>
                 <a 
                   href="https://www.linkedin.com/in/libiaflorio/" target="_blank" rel="noopener noreferrer" 
                   style={{ color: 'var(--accent-gold)', display: 'flex', transition: 'opacity 0.2s ease' }} 
                   onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
                   onMouseOut={e => e.currentTarget.style.opacity = '1'}
                   aria-label="LinkedIn Dra. Libia Florio"
                 >
                   <LinkedinIcon size={28} />
                 </a>
               </div>
               <p style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14.5px', marginBottom: '24px', fontWeight: '500' }}>
                 Advogada
               </p>
               <p className="home-p" style={{ marginBottom: '16px' }}>
                 A Dra. Libia Cristiane Correa e Andrade e Florio é <strong>Mestre em Direito pela Universidade de São Paulo (USP)</strong> e especialista em Direito Notarial e Registral. Lidera a estruturação de negócios imobiliários, patrimoniais e familiares do escritório com excelência técnica reconhecida.
               </p>
               <p className="home-p" style={{ marginBottom: '24px' }}>
                 Com mais de três décadas de prática profissional em estruturas contratuais, une a precisão e a profundidade acadêmica à experiência indispensável para a tomada de decisões de alto valor e complexidade jurídica.
               </p>
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '24px', borderTop: '1px solid var(--bg-surface-light)', paddingTop: '24px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    <div>
                      <strong style={{ fontSize: '1.5rem', color: 'var(--text-main)', display: 'block', fontWeight: '500' }}>USP</strong>
                      <span className="home-aux">Mestrado em Direito</span>
                    </div>
                    <div>
                      <strong style={{ fontSize: '1.5rem', color: 'var(--text-main)', display: 'block', fontWeight: '500' }}>30+</strong>
                      <span className="home-aux">Anos de Prática</span>
                    </div>
                  </div>

                  {/* Diploma USP */}
                  <div 
                    style={{ 
                      position: 'relative', padding: '0.4rem', background: 'var(--bg-surface-light)', 
                      border: '1px solid var(--accent-gold)', cursor: 'pointer', overflow: 'hidden'
                    }}
                    onClick={() => setIsDiplomaOpen(true)}
                    onMouseOver={e => e.currentTarget.lastChild.style.opacity = '1'}
                    onMouseOut={e => e.currentTarget.lastChild.style.opacity = '0'}
                  >
                    <img 
                      src="/diploma-usp.jpg" 
                      alt="Diploma de Mestrado na USP - Dra. Libia Florio" 
                      style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--bg-surface)' }}
                    />
                    <div style={{
                      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                      background: 'rgba(17, 17, 17, 0.7)', display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none'
                    }}>
                      <Search size={20} color="var(--accent-gold)" style={{ marginBottom: '0.2rem' }} />
                      <span style={{ color: 'var(--accent-gold)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.65rem' }}>Ampliar</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTATO */}
      <section id="contato" className="home-section transversal-section" style={{ textAlign: 'center' }}>
        <div className="home-container">
           <h2 className="home-h2" style={{ marginBottom: '20px' }}>Questões relevantes exigem uma análise integrada.</h2>
           <p className="home-p home-text-limit" style={{ marginBottom: '40px' }}>
             Entre em contato com o Andrade e Florio para apresentar sua demanda e entender como nossa estruturação jurídica pode proteger seus interesses.
           </p>
           <div style={{ display: 'inline-flex' }}>
              <WhatsAppButton text="Apresentar uma demanda" outline={true} />
           </div>
        </div>
      </section>

      <Footer />
      <StickyWhatsApp />

      {/* Lightbox / Modal do Diploma */}
      {isDiplomaOpen && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(5px)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
          }}
          onClick={() => setIsDiplomaOpen(false)}
        >
          <div style={{ position: 'relative', maxWidth: '900px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsDiplomaOpen(false)}
              style={{
                position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', 
                color: 'var(--accent-gold)', fontSize: '3rem', cursor: 'pointer', lineHeight: '1'
              }}
              aria-label="Fechar"
            >
              &times;
            </button>
            <img 
              src="/diploma-usp.jpg" alt="Diploma USP em tamanho original" 
              style={{ width: '100%', height: 'auto', border: '2px solid var(--accent-gold)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} 
            />
          </div>
        </div>
      )}
    </>
  )
}
