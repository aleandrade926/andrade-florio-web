import React, { useState } from 'react';
import { Shield, Home, Search, BookOpen, MessageCircle, CheckCircle2, GraduationCap, Scale, ChevronRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton, StickyWhatsApp, Footer, Navbar, LinkedinIcon } from '../components/Shared';

const b2bCardStyles = `
  .card-b2b {
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    align-items: flex-start;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--accent-gold) !important;
    background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(212,175,55,0.06) 100%);
  }
  .card-b2b-left {
    flex: 0 0 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-b2b-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid rgba(212,175,55,0.25);
    padding-left: 3rem;
  }
  @media (max-width: 768px) {
    .card-b2b {
      flex-direction: column;
      gap: 2rem;
    }
    .card-b2b-right {
      border-left: none;
      border-top: 1px solid rgba(212,175,55,0.25);
      padding-left: 0;
      padding-top: 2rem;
    }
  }
`;

export default function HomePage() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);

  return (
    <>
      <style>{b2bCardStyles}</style>
      <Navbar />

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
                Regularize seu patrimônio com a segurança de uma advogada especialista em Direito Imobiliário.
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                Dra. Libia Florio oferece assessoria jurídica imobiliária para transformar imóveis irregulares em ativos seguros. Conte com um escritório de advocacia especializado em direito imobiliário em São Paulo para proteger seu legado.
              </p>
              <WhatsAppButton text="Agendar Consultoria Especializada" />
            </div>

            {/* Imagem */}
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', top: '-20px', right: '-20px', width: '100%', height: '100%', 
                border: '1px solid var(--accent-gold)', zIndex: 0 
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
              <div style={{
                display: 'none', position: 'relative', zIndex: 1, width: '100%', aspectRatio: '3/4',
                backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)',
                alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-muted)'
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

          {/* Grid 4 serviços principais */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Home size={32} color="var(--accent-gold)" />, title: "Regularização de Imóveis", desc: "Transformamos contratos de gaveta em escrituras definitivas com a expertise de uma advogada especialista." },
              { icon: <Scale size={32} color="var(--accent-gold)" />, title: "Usucapião Judicial e Extra", desc: "Atuação de advogado imobiliário em usucapião judicial e extrajudicial para consolidar sua propriedade legal." },
              { icon: <Search size={32} color="var(--accent-gold)" />, title: "Assessoria Jurídica Imobiliária", desc: "Due diligence profunda de riscos para compras, vendas e contratos imobiliários." },
              { icon: <BookOpen size={32} color="var(--accent-gold)" />, title: "Inventários e Partilhas", desc: "Gestão jurídica especializada em direitos imobiliários para a transição segura do patrimônio familiar." },
            ].map((srv, idx) => (
              <div key={idx} className="card-surface">
                <div style={{ marginBottom: '1.5rem' }}>{srv.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{srv.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{srv.desc}</p>
              </div>
            ))}
          </div>

          {/* ── 5º CARD B2B — BANNER HORIZONTAL FULL-WIDTH ── */}
          <div className="card-surface card-b2b">

            {/* Etiqueta Corporativo */}
            <div style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase', color: 'var(--accent-gold)',
              border: '1px solid var(--accent-gold)', padding: '0.2rem 0.7rem', borderRadius: '2px',
            }}>Corporativo</div>

            {/* LADO ESQUERDO — identidade + proposta de valor */}
            <div className="card-b2b-left">
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <Building2 size={36} color="var(--accent-gold)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', lineHeight: '1.35', marginBottom: '0.4rem' }}>
                  Consultoria Estratégica
                </h3>
                <p style={{
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.75rem',
                }}>
                  com Diagnóstico Jurídico-Fiscal · Para Incorporadoras
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Uma atuação de dupla entrada: mapeamos os riscos contratuais <em>e</em> as ineficiências tributárias na raiz do empreendimento, entregando uma visão integrada que protege o VGV e preserva a margem líquida.
                </p>
              </div>
              <a
                href="https://wa.me/5511993725876?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20Estratégica%20para%20Incorporadoras."
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.95rem',
                  textDecoration: 'none', letterSpacing: '0.5px', transition: 'opacity 0.2s ease',
                }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}
              >
                Solicitar Diagnóstico <ChevronRight size={18} />
              </a>
            </div>

            {/* LADO DIREITO — pilares Jurídico + Fiscal */}
            <div className="card-b2b-right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {[
                  {
                    label: 'Jurídico',
                    items: ['Blindagem contratual', 'Auditoria de incorporação', 'Contratos de permuta e venda', 'Gestão de distrato e entrega'],
                  },
                  {
                    label: 'Fiscal',
                    items: ['Engenharia tributária', 'Identificação de passivos ocultos', 'Adequação à Reforma 2026', 'Regimes de apuração por SPE'],
                  },
                ].map(({ label, items }) => (
                  <div key={label} style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1.25rem' }}>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px',
                      textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem',
                    }}>{label}</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {items.map(i => (
                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', lineHeight: '1.5' }}>
                          <span style={{ color: 'var(--accent-gold)', flexShrink: 0, fontWeight: 700 }}>—</span>{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Autoridade (Bio Boutique) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                 <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Dra. Libia Florio</h2>
                 <a 
                   href="https://www.linkedin.com/in/libiaflorio/" target="_blank" rel="noopener noreferrer" 
                   style={{ color: 'var(--accent-gold)', display: 'flex', transition: 'opacity 0.2s ease' }} 
                   onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
                   onMouseOut={e => e.currentTarget.style.opacity = '1'}
                   aria-label="LinkedIn Dra. Libia Florio"
                 >
                   <LinkedinIcon size={32} />
                 </a>
               </div>
               <p style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '2rem' }}>
                 Advogada Especialista em Direito Imobiliário
               </p>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                 A Dra. Libia Cristiane Correa e Andrade e Florio é <strong>Mestre em Direito pela Universidade de São Paulo (USP)</strong> e especialista em <strong>Direito Notarial e Registral</strong> pela Legale Educacional. É referência como advogada de direito imobiliário em São Paulo, atuando com excelência.
               </p>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                 Com mais de três décadas de experiência prestando assessoria jurídica imobiliária, une a profundidade acadêmica à especialização em advocacia imobiliária. Membro Efetivo da Comissão Especial de Direito Imobiliário da OAB/SP, oferece soluções e segurança focada nos direitos imobiliários de seus clientes.
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
               {/* Diploma USP */}
               <div 
                 style={{ 
                   position: 'relative', padding: '1rem', background: 'var(--bg-surface-light)', 
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
                   <Search size={40} color="var(--accent-gold)" style={{ marginBottom: '0.5rem' }} />
                   <span style={{ color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Ampliar</span>
                 </div>
               </div>
               <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
                 Mestrado em Direito Comercial - Universidade de São Paulo (USP)
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artigos e Análises Jurídicas (NOVA SESSÃO) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Artigos e Análises Jurídicas</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Insights práticos e estratégicos sobre Direito Imobiliário.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            <Link to="/artigos/distrato-de-locacao" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div 
                className="card-surface" 
                style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent-gold)' }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--bg-surface-light)' }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Artigo Especialista • 18 Abr 2026
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                  Dicas para Distrato de Locação: Segurança Jurídica em Transações
                </h3>
                <p style={{ color: 'var(--text-muted)', flexGrow: 1, marginBottom: '2rem' }}>
                  A extinção das relações locatícias por meio do distrato representa um dos momentos de maior complexidade. Descubra como criar uma regra própria que protege seu patrimônio.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-gold)', fontWeight: 'bold', gap: '0.5rem' }}>
                  Ler Análise Completa <ChevronRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--bg-surface-light)', borderTop: '1px solid var(--bg-surface-light)' }}>
        <div className="container">
           <h2 style={{ marginBottom: '1.5rem' }}>O momento da decisão.</h2>
           <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
             Agende sua consultoria estratégica agora e dê o primeiro passo definitivo para a segurança total do seu patrimônio.
           </p>
           <WhatsAppButton text="Quero regularizar meu imóvel" />
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
