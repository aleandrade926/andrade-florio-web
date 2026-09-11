import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const trackConversion = (eventLabel, callback) => {
  if (!eventLabel) {
    if (callback) callback();
    return;
  }
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': `AW-822096588/${eventLabel}`,
      'event_callback': () => {
        console.log(`Conversion ${eventLabel} tracked successfully`);
        if (callback) callback();
      }
    });
    
    // Fallback caso o callback do Google não dispare (timeout de 1s)
    if (callback) {
      setTimeout(callback, 1000);
    }
  } else if (callback) {
    callback();
  }
};

export const handleWhatsAppClick = (eventLabel = 'nlxZCPiY6qAcEMzlgIgD', customMessage = '') => {
  const defaultMsg = 'Olá, vi a página da Andrade & Florio e gostaria de falar com a equipe comercial para alinhar uma consulta jurídica.';
  const msg = customMessage || defaultMsg;
  const url = `https://wa.me/5511978671067?text=${encodeURIComponent(msg)}`;
  
  if (eventLabel) trackConversion(eventLabel);
  window.open(url, '_blank');
};

export function WhatsAppButton({ text = "Falar com a Dra. Libia", outline = false }) {
  return (
    <button 
      className={outline ? "btn-outline" : "btn-gold"}
      onClick={handleWhatsAppClick}
      style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontFamily: 'inherit', fontSize: '1rem', gap: '0.5rem' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
      {text}
    </button>
  );
}

export function StickyWhatsApp() {
  return (
    <button 
      className="sticky-wa-btn"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        backgroundColor: '#25D366',
        color: '#fff',
        width: '56px',
        height: '56px',
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
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    </button>
  );
}

export function Navbar({ showMenu = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Escritório', href: '/#apresentacao' },
    { label: 'Atuação', href: '/#frentes' },
    { label: 'Para Imobiliárias', href: '/imobiliarias' },
    { label: 'Dra. Líbia', href: '/#dra-libia' },
    { label: 'Contato', href: '/#contato' }
  ];

  return (
    <header 
      className={`site-header ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: showMenu ? 'space-between' : 'center', 
        alignItems: 'center',
        flexWrap: 'nowrap',
        position: 'relative',
        maxWidth: '1240px',
        margin: '0 auto',
        paddingLeft: '32px',
        paddingRight: '32px'
      }}>
        {showMenu ? (
          <a href="/" aria-label="Andrade e Florio Advogados - Página Inicial" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo-horizontal.png"
              alt="Andrade & Florio Advogados"
              style={{
                height: scrolled ? '40px' : '65px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                transition: 'height 0.4s ease, opacity 0.3s ease',
              }}
              onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
              onMouseOut={e => e.currentTarget.style.opacity = '1'}
            />
          </a>
        ) : (
          <a href="/" aria-label="Andrade e Florio Advogados - Página Inicial" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo-af.png"
              alt="Andrade e Florio Advogados"
              className={`nav-logo ${scrolled ? 'scrolled' : ''}`}
            />
          </a>
        )}

        {showMenu && (
          <>
            {/* Botão Menu Mobile */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-gold)',
                fontSize: '1.8rem',
                cursor: 'pointer',
                display: 'none',
                padding: '0.5rem',
                zIndex: 102
              }}
              className="nav-hamburger"
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            {/* Links de Navegação */}
            <nav 
              className={`nav-links-container ${menuOpen ? 'open' : ''}`}
              style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              {navLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    textDecoration: 'none',
                    fontSize: '12.5px',
                    fontWeight: '550',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={e => e.currentTarget.style.color = 'var(--accent-gold)'}
                  onMouseOut={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </>
        )}
      </div>
      
      <style>{`
        .site-header {
          padding: 0.8rem 0;
          background-color: transparent;
          border-bottom: 1px solid transparent;
          backdrop-filter: blur(0px);
        }
        .site-header.scrolled {
          padding: 0.3rem 0;
          background-color: rgba(18, 18, 18, 0.96);
          border-bottom: 1px solid var(--bg-surface-light);
          backdrop-filter: blur(12px);
        }

        .nav-logo {
          height: 260px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: height 0.4s ease, opacity 0.3s ease;
        }
        .nav-logo.scrolled {
          height: 80px;
        }
        .nav-logo.with-menu {
          height: 130px;
        }
        .nav-logo.with-menu.scrolled {
          height: 65px;
        }

        @media (max-width: 768px) {
          .site-header {
            background-color: rgba(18, 18, 18, 0.96) !important;
            border-bottom: 1px solid var(--bg-surface-light) !important;
            backdrop-filter: blur(12px) !important;
            padding: 0.4rem 0;
          }
          .nav-hamburger {
            display: block !important;
          }
          .nav-links-container {
            display: none !important;
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: rgba(18, 18, 18, 0.98);
            padding: 1.5rem 0;
            border-bottom: 1px solid var(--bg-surface-light);
            gap: 1.2rem !important;
            z-index: 101;
          }
          .nav-links-container.open {
            display: flex !important;
          }
          .nav-logo {
            height: 120px !important;
          }
          .nav-logo.scrolled {
            height: 65px !important;
          }
          .nav-logo.with-menu {
            height: 75px !important;
          }
          .nav-logo.with-menu.scrolled {
            height: 50px !important;
          }
        }

        @media (max-width: 768px) {
          .sticky-wa-btn {
            width: 52px !important;
            height: 52px !important;
            bottom: 24px !important;
            right: 24px !important;
          }
        }
      `}</style>
    </header>
  );
}


export function Footer() {
  return (
    <footer style={{ padding: '4rem 0', backgroundColor: 'var(--bg-color)', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--bg-surface-light)' }}>
      <div className="container">
        {/* Logo no footer */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <img
            src="/logo-af.png"
            alt="Andrade e Florio Advogados"
            style={{ height: '182px', width: 'auto', opacity: 0.7 }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a 
              href="https://www.linkedin.com/in/libiaflorio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center' }} 
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
            <span style={{ color: 'var(--bg-surface-light)' }}>|</span>
            <a 
              href="mailto:alexandre.florio@andradeflorio.com.br" 
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }} 
              onMouseOver={e => e.currentTarget.style.color = 'var(--accent-gold)'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              alexandre.florio@andradeflorio.com.br
            </a>
        </div>
        <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>© {new Date().getFullYear()} Andrade e Florio Escritório de Advocacia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
