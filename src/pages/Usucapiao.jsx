import React, { useState, useEffect } from 'react';
import { Shield, Home, Search, BookOpen, MessageCircle, CheckCircle2, GraduationCap, Scale } from 'lucide-react';
import { WhatsAppButton, StickyWhatsApp, Footer, Navbar, LinkedinIcon } from '../components/Shared';

export default function UsucapiaoPage() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <section className="section" style={{ paddingTop: '4rem', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ paddingRight: '2rem' }}>
              <div style={{ 
                display: 'inline-block', padding: '0.3rem 1rem', border: '1px solid var(--accent-gold)', 
                borderRadius: '50px', color: 'var(--accent-gold)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem'
              }}>
                Direito Imobiliário Avançado
              </div>
              <h1 style={{ marginBottom: '1.5rem' }}>
                Conquiste a escritura definitiva do seu imóvel através da Usucapião Judicial e Extrajudicial.
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                Tenha a segurança da propriedade legal. Como advogada especialista, atuo estrategicamente para regularizar imóveis urbanos e rurais garantindo o futuro do seu patrimônio.
              </p>
              <WhatsAppButton text="Análise de Viabilidade Imobiliária" />
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100%', height: '100%', border: '1px solid var(--accent-gold)', zIndex: 0 }}></div>
              <img 
                src="/dra-libia.png" alt="Dra. Libia Florio - Advogada Especialista em Usucapião" 
                style={{ position: 'relative', zIndex: 1, objectFit: 'cover', width: '100%', height: 'auto', border: '1px solid var(--bg-surface-light)' }} 
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div style={{
                display: 'none', position: 'relative', zIndex: 1, width: '100%', aspectRatio: '3/4', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-muted)'
              }}>
                <span style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>[ Coloque a foto como "dra-libia.jpg" na pasta public ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Scale size={40} color="var(--accent-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h2 style={{ marginBottom: '2rem', fontSize: '2.2rem' }}>O fim do medo da perda da posse.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
              <p style={{ fontSize: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong style={{color: 'var(--text-main)'}}>Propriedade Legal:</strong> Transformamos a posse prolongada na documentação definitiva (matrícula no Cartório de Imóveis).</span>
              </p>
              <p style={{ fontSize: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong style={{color: 'var(--text-main)'}}>Valorização Oculta:</strong> Imóveis com escritura valorizam instantaneamente até 30% em seu preço de mercado.</span>
              </p>
              <p style={{ fontSize: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span><strong style={{color: 'var(--text-main)'}}>Direito Blindado:</strong> Apenas com a matrícula os seus herdeiros estarão livres de conflitos litigiosos.</span>
              </p>
            </div>
            <div style={{ marginTop: '3rem' }}>
              <WhatsAppButton text="Dar entrada no meu processo" outline={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social / Legal */}
      <section className="section" style={{ borderTop: '1px solid var(--bg-surface-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Resultados Comprovados</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
              Nosso escritório atua ativamente no registro definitivo de propriedades, garantindo o direito à moradia e ao investimento de nossos clientes.
            </p>
            <div style={{ padding: '1rem', background: 'var(--bg-surface-light)', border: '1px solid var(--accent-gold)', borderRadius: '8px' }}>
              <img 
                src="/prova-usucapiao.png" 
                alt="Registro de Usucapião Extrajudicial Concedido" 
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} 
              />
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
                * Trecho real de matrícula imobiliária com registro de Usucapião Extrajudicial garantido pela Dra. Libia. Dados pessoais preservados por sigilo profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade (Bio Boutique) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                 <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Dra. Libia Florio</h2>
                 <a href="https://www.linkedin.com/in/libiaflorio/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', display: 'flex', transition: 'opacity 0.2s ease' }} onMouseOver={e => e.currentTarget.style.opacity = '0.7'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                   <LinkedinIcon size={32} />
                 </a>
               </div>
               <p style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '2rem' }}>
                 Especialista em Direito Imobiliário & Usucapião
               </p>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                 A Dra. Libia é <strong>Mestre em Direito Comercial pela (USP)</strong> e especialista em <strong>Direito Notarial e Registral</strong>, atuando ativamente em reconhecimento de posses.
               </p>
            </div>
            <div style={{ order: 1 }}>
               <div 
                 style={{ 
                   position: 'relative', padding: '1rem', background: 'var(--bg-surface-light)', 
                   border: '1px solid var(--accent-gold)', cursor: 'pointer', overflow: 'hidden'
                 }}
                 onClick={() => setIsDiplomaOpen(true)}
                 onMouseOver={e => e.currentTarget.lastChild.style.opacity = '1'}
                 onMouseOut={e => e.currentTarget.lastChild.style.opacity = '0'}
               >
                 <img src="/diploma-usp.jpg" alt="Diploma USP" style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--bg-surface)' }} />
                 <div style={{
                   position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(17, 17, 17, 0.7)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none'
                 }}>
                   <Search size={40} color="var(--accent-gold)" style={{ marginBottom: '0.5rem' }} />
                   <span style={{ color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Ampliar</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--bg-surface-light)', borderTop: '1px solid var(--bg-surface-light)' }}>
        <div className="container" style={{ margin: '0 auto' }}>
           <h2 style={{ marginBottom: '1.5rem' }}>Sua posse transformada em propriedade.</h2>
           <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>Agende sua consultoria agora e inicie o projeto de blindagem final do seu terreno ou construção.</p>
           <WhatsAppButton text="Agendar Consultoria de Usucapião" />
        </div>
      </section>

      <Footer />
      <StickyWhatsApp />

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
              style={{ position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', color: 'var(--accent-gold)', fontSize: '3rem', cursor: 'pointer', lineHeight: '1' }}
            >
              &times;
            </button>
            <img src="/diploma-usp.jpg" alt="Diploma USP" style={{ width: '100%', height: 'auto', border: '2px solid var(--accent-gold)' }} />
          </div>
        </div>
      )}
    </>
  )
}
