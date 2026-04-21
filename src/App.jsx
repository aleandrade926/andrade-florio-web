import React from 'react';
import { Shield, Home, Search, BookOpen, MessageCircle, ArrowRight, CheckCircle2, GraduationCap, Scale } from 'lucide-react';
import './App.css';

const WHATSAPP_NUMBER = "5511945727148"; 
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20Dra.%20Libia.%20Gostaria%20de%20agendar%20uma%20consultoria%20sobre%20regulariza%C3%A7%C3%A3o%20imobili%C3%A1ria.`;

function WhatsAppButton({ text = "Falar com a Dra. Libia", outline = false }) {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={outline ? "btn-outline" : "btn-gold"}
    >
      <MessageCircle size={20} />
      {text}
    </a>
  );
}

function App() {
  return (
    <>
      {/* Header - Navegação Cega */}
      <header style={{ padding: '2rem 0', borderBottom: '1px solid var(--bg-surface-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
            DRA. LIBIA FLORIO<span style={{color: 'var(--text-main)'}}>.</span>
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '4rem', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Texto */}
            <div style={{ paddingRight: '2rem' }}>
              <div style={{ 
                display: 'inline-block', 
                padding: '0.3rem 1rem', 
                border: '1px solid var(--accent-gold)', 
                borderRadius: '50px',
                color: 'var(--accent-gold)',
                fontSize: '0.8rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}>
                Consultoria Premium
              </div>
              
              <h1 style={{ marginBottom: '1.5rem' }}>
                Regularize seu patrimônio com a segurança de quem entende o Direito Imobiliário na <span style={{ color: 'var(--accent-gold)', fontStyle: 'italic' }}>USP</span>.
              </h1>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                Dra. Libia Florio oferece consultoria jurídica especializada para transformar imóveis irregulares em ativos seguros e valorizados. Proteja seu legado com agilidade e rigor técnico.
              </p>
              
              <WhatsAppButton text="Agendar Consultoria Especializada" />
            </div>

            {/* Imagem */}
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                right: '-20px', 
                width: '100%', 
                height: '100%', 
                border: '1px solid var(--accent-gold)', 
                zIndex: 0 
              }}></div>
              <img 
                src="/dra-libia.png" 
                alt="Dra. Libia Florio - Advogada Especialista em Direito Imobiliário" 
                style={{ position: 'relative', zIndex: 1, objectFit: 'cover', width: '100%', height: 'auto', border: '1px solid var(--bg-surface-light)' }} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback caso a imagem não exista ainda na pasta public */}
              <div style={{
                display: 'none',
                position: 'relative',
                zIndex: 1,
                width: '100%',
                aspectRatio: '3/4',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--bg-surface-light)',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'var(--text-muted)'
              }}>
                <span style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>[ Coloque a foto como "dra-libia.jpg" na pasta public ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Gancho (Dor e Oportunidade) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Shield size={40} color="var(--accent-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h2 style={{ marginBottom: '2rem', fontSize: '2.2rem' }}>
              A irregularidade ameaça o seu legado.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
              <p style={{ fontSize: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong style={{color: 'var(--text-main)'}}>Risco silencioso:</strong> Um imóvel irregular não é apenas um papel faltando; é um patrimônio que perde liquidez a cada dia e gera conflitos iminentes para sua família.</span>
              </p>
              <p style={{ fontSize: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong style={{color: 'var(--text-main)'}}>Valorização Oculta:</strong> A regularização imediata pode valorizar seu imóvel em até 30% no mercado imobiliário.</span>
              </p>
              <p style={{ fontSize: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong style={{color: 'var(--text-main)'}}>Sucessão Segura:</strong> Não deixe que burocracias impeçam a venda ou a sucessão pacífica do seu bem. Resolva hoje o que se tornará um litígio amanhã.</span>
              </p>
            </div>
            <div style={{ marginTop: '3rem' }}>
              <WhatsAppButton text="Proteger meu Patrimônio Hoje" outline={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços ("Peixe Assado") */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Soluções Estratégicas</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Atuamos com precisão cirúrgica nos gargalos jurídicos que impedem a consolidação da sua propriedade.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: <Home size={32} color="var(--accent-gold)" />,
                title: "Regularização de Imóveis",
                desc: "Transformamos contratos de gaveta em escrituras definitivas, garantindo a propriedade plena."
              },
              {
                icon: <Scale size={32} color="var(--accent-gold)" />,
                title: "Usucapião Judicial e Extra",
                desc: "O caminho mais seguro para quem possui a posse, mas ainda não tem o registro legal."
              },
              {
                icon: <Search size={32} color="var(--accent-gold)" />,
                title: "Due Diligence Imobiliária",
                desc: "Análise profunda de riscos para compras e vendas, evitando surpresas desagradáveis."
              },
              {
                icon: <BookOpen size={32} color="var(--accent-gold)" />,
                title: "Inventários e Partilhas",
                desc: "Gestão jurídica humanizada e técnica para a transição segura do patrimônio familiar."
              }
            ].map((srv, idx) => (
              <div key={idx} className="card-surface">
                <div style={{ marginBottom: '1.5rem' }}>{srv.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{srv.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridade (Bio Boutique) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
               <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Dra. Libia Florio</h2>
               <p style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '2rem' }}>
                 Excelência Jurídica desde 1989
               </p>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                 A Dra. Libia Cristiane Correa e Andrade e Florio possui sólida formação acadêmica pela Universidade de São Paulo (USP) e é Membro Efetivo da Comissão Especial de Direito Imobiliário da OAB/SP.
               </p>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                 Com uma carreira forjada na prática rigorosa e no alto desempenho técnico há mais de três décadas, une a excelência acadêmica à prática jurídica de boutique. A entrega é uma solução personalizada para clientes que não abrem mão de segurança, discrição e sofisticação para os seus bens.
               </p>
               
               <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', borderTop: '1px solid var(--bg-surface-light)', paddingTop: '2rem' }}>
                  <div>
                    <strong style={{ fontSize: '1.5rem', color: 'var(--text-main)', display: 'block' }}>USP</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Formação de Excelência</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: '1.5rem', color: 'var(--text-main)', display: 'block' }}>30+</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Anos de Prática</span>
                  </div>
               </div>
            </div>
            <div style={{ order: 1 }}>
               {/* Fundo decorativo */}
               <div style={{ background: 'var(--bg-surface-light)', padding: '2rem', border: '1px solid var(--accent-gold)' }}>
                 <GraduationCap size={40} color="var(--text-muted)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
                 <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                   "O verdadeiro luxo é deitar a cabeça no travesseiro sabendo que o seu legado está absolutamente blindado e intocável."
                 </h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--bg-surface-light)' }}>
        <div className="container">
           <h2 style={{ marginBottom: '1.5rem' }}>O momento da decisão.</h2>
           <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
             Agende sua consultoria estratégica agora e dê o primeiro passo definitivo para a segurança total do seu patrimônio.
           </p>
           <WhatsAppButton text="Quero regularizar meu imóvel" />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', backgroundColor: 'var(--bg-color)', textAlign: 'center', color: 'var(--text-muted)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', letterSpacing: '2px', color: 'var(--text-main)', marginBottom: '1rem' }}>
            ANDRADE E FLORIO ESCRITÓRIO DE ADVOCACIA
          </h2>
          <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>© {new Date().getFullYear()} Andrade e Florio Escritório de Advocacia. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Botão Sticky WhatsApp */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#25D366',
          color: '#fff',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'transform 0.3s ease'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={30} fill="currentColor" />
      </a>
    </>
  )
}

export default App;
