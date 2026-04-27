import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ChevronRight, ChevronLeft, BookOpen, ShieldCheck } from 'lucide-react';
import manualData from '../data/manualData.json';

const Gatekeeper = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Senha universal para o MVP. Pode ser alterada livremente.
    if (password === 'LIBIA2026' || password === 'libia2026') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'var(--font-body)'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        border: '1px solid var(--accent-gold)',
        maxWidth: '450px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <ShieldCheck size={48} color="var(--accent-gold)" style={{ margin: '0 auto' }} />
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            color: 'var(--accent-gold)', 
            fontSize: '2rem',
            marginTop: '1rem'
          }}>
            Acesso Restrito
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
            Manual Prático de Usucapião Extrajudicial por Dra. Libia Florio.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua Chave de Acesso"
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'var(--bg-color)',
                border: error ? '1px solid #ef4444' : '1px solid var(--bg-surface-light)',
                borderRadius: '4px',
                color: 'var(--text-main)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            />
            {error && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.5rem', textAlign: 'left' }}>Chave incorreta. Verifique o e-mail enviado pela Hotmart.</span>}
          </div>
          <button 
            type="submit"
            className="btn-gold"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <Lock size={18} />
            Liberar Acesso
          </button>
        </form>
      </div>
    </div>
  );
};

const ManualUsucapiao = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Scroll to top when slide changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSlide]);

  if (!isAuthenticated) {
    return <Gatekeeper onLogin={() => setIsAuthenticated(true)} />;
  }

  const progress = Math.round(((activeSlide + 1) / manualData.length) * 100);

  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-main)',
      minHeight: '100vh',
      display: 'flex',
      fontFamily: 'var(--font-body)'
    }}>
      {/* Sidebar Navigation */}
      <aside style={{
        width: '350px',
        backgroundColor: 'var(--bg-surface)',
        borderRight: '1px solid var(--bg-surface-light)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden' // We'll scroll the inner list
      }}>
        {/* Sidebar Header */}
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--bg-surface-light)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <ChevronLeft size={14} /> Voltar para o site
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginTop: '1.5rem', color: 'var(--accent-gold)', lineHeight: 1.3 }}>
            Método Prático<br/>Usucapião
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Dra. Libia Florio</p>
          
          {/* Progress Bar */}
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              <span>Progresso</span>
              <span>{progress}%</span>
            </div>
            <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--bg-color)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--accent-gold)', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
        </div>

        {/* Sidebar List */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '1rem 0' }}>
          {manualData.map((slide, index) => {
            // Truncate title for sidebar
            const shortTitle = slide.title.length > 50 ? slide.title.substring(0, 47) + '...' : slide.title;
            const isActive = activeSlide === index;

            return (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1rem 1.5rem',
                  backgroundColor: isActive ? 'var(--bg-surface-light)' : 'transparent',
                  color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)',
                  border: 'none',
                  borderLeft: isActive ? '4px solid var(--accent-gold)' : '4px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span style={{ minWidth: '24px', opacity: isActive ? 1 : 0.5 }}>{index + 1}.</span>
                <span style={{ lineHeight: 1.4 }}>{shortTitle}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        padding: '3rem 4rem',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Content Card */}
        <div className="card-surface" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <BookOpen size={18} />
            <span>Capítulo {activeSlide + 1} de {manualData.length}</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3vw, 2.8rem)',
            color: 'var(--text-main)',
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--bg-surface-light)',
            paddingBottom: '1.5rem'
          }}>
            {manualData[activeSlide].title}
          </h2>
          
          {/* Formatted Text Content */}
          <div style={{
            lineHeight: '1.9',
            fontSize: '1.15rem',
            color: '#E0E0E0',
            whiteSpace: 'pre-line',
            flex: 1
          }}>
            {manualData[activeSlide].content}
          </div>
          
          {/* Navigation Controls */}
          <div style={{ 
            marginTop: '4rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid var(--bg-surface-light)', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
             <button 
                className="btn-outline"
                disabled={activeSlide === 0}
                onClick={() => setActiveSlide(prev => prev - 1)}
                style={{ 
                  cursor: activeSlide === 0 ? 'not-allowed' : 'pointer', 
                  opacity: activeSlide === 0 ? 0.3 : 1 
                }}
             >
                <ChevronLeft size={18} />
                Anterior
             </button>
             <button 
                className="btn-gold"
                disabled={activeSlide === manualData.length - 1}
                onClick={() => setActiveSlide(prev => prev + 1)}
                style={{ 
                  cursor: activeSlide === manualData.length - 1 ? 'not-allowed' : 'pointer', 
                  opacity: activeSlide === manualData.length - 1 ? 0.3 : 1 
                }}
             >
                Próximo
                <ChevronRight size={18} />
             </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManualUsucapiao;
