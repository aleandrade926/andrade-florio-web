import React, { useEffect } from 'react';
import { MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import { WhatsAppButton, Footer, LinkedinIcon } from '../components/Shared';

export default function AtendimentoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <header style={{ padding: '2rem 0', borderBottom: '1px solid var(--bg-surface-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
            DRA. LIBIA FLORIO<span style={{color: 'var(--text-main)'}}>.</span>
          </h1>
        </div>
      </header>

      <main style={{ flexGrow: 1, padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            Atendimento Estratégico
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '4rem' }}>
            A discrição e o alto nível técnico exigidos pelo seu patrimônio.<br />
            Fale diretamente com nossa equipe jurídica.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem', textAlign: 'left' }}>
            <div className="card-surface" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ backgroundColor: 'var(--bg-surface-light)', borderRadius: '50%', padding: '1rem', marginBottom: '1.5rem', border: '1px solid var(--accent-gold)' }}>
                 <MessageCircle size={32} color="var(--accent-gold)" />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>WhatsApp VIP</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Agende sua consultoria diretamente via mensagem para um filtro rápido de viabilidade.</p>
              <WhatsAppButton text="Iniciar Conversa Segura" />
            </div>

            <div className="card-surface" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ backgroundColor: 'var(--bg-surface-light)', borderRadius: '50%', padding: '1rem', marginBottom: '1.5rem', border: '1px solid var(--accent-gold)' }}>
                 <MapPin size={32} color="var(--accent-gold)" />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Escritório Especializado</h3>
              <p style={{ color: 'var(--text-muted)' }}>São Paulo - SP</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Consultoria técnica disponível sob agendamento.</p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--bg-surface-light)', paddingTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
               <Clock size={20} color="var(--accent-gold)" /> Segunda a Sexta, 09h às 18h
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
               <Mail size={20} color="var(--accent-gold)" /> contato@andradeflorio.com.br
             </div>
             <a href="https://www.linkedin.com/in/libiaflorio/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
               <LinkedinIcon size={20} /> Perfil Oficial
             </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
