import React from 'react';
import { MessageCircle } from 'lucide-react';

export const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const handleWhatsAppClick = () => {
  const url = 'https://wa.me/5511945727148?text=Olá,%20vi%20seu%20anúncio%20e%20gostaria%20de%20uma%20consulta%20jurídica';
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-822096588/nlxZCPiY6qAcEMzlgIgD',
      'event_callback': () => {}
    });
  }
  window.open(url, '_blank');
};

export function WhatsAppButton({ text = "Falar com a Dra. Libia", outline = false }) {
  return (
    <button 
      className={outline ? "btn-outline" : "btn-gold"}
      onClick={handleWhatsAppClick}
      style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontFamily: 'inherit', fontSize: '1rem', gap: '0.5rem' }}
    >
      <MessageCircle size={20} />
      {text}
    </button>
  );
}

export function StickyWhatsApp() {
  return (
    <button 
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
        transition: 'transform 0.3s ease',
        border: 'none',
        cursor: 'pointer'
      }}
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      onClick={handleWhatsAppClick}
    >
      <MessageCircle size={30} fill="currentColor" />
    </button>
  );
}

export function Footer() {
  return (
    <footer style={{ padding: '4rem 0', backgroundColor: 'var(--bg-color)', textAlign: 'center', color: 'var(--text-muted)' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', letterSpacing: '2px', color: 'var(--text-main)', marginBottom: '1rem' }}>
          ANDRADE E FLORIO ESCRITÓRIO DE ADVOCACIA ESPECIALIZADO EM DIREITO IMOBILIÁRIO
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <a 
              href="https://www.linkedin.com/in/libiaflorio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }} 
              onMouseOver={e => e.currentTarget.style.color = 'var(--accent-gold)'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
              aria-label="LinkedIn Dra. Libia Florio"
            >
              <LinkedinIcon size={24} />
            </a>
            <a 
              href="mailto:libia@andradeflorio.com.br" 
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }} 
              onMouseOver={e => e.currentTarget.style.color = 'var(--accent-gold)'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              libia@andradeflorio.com.br
            </a>
        </div>
        <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>© {new Date().getFullYear()} Andrade e Florio Escritório de Advocacia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
