import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, ChevronRight, ChevronLeft, BookOpen, ShieldCheck, 
  Download, Copy, Check, MessageCircle, FileText, ArrowLeft
} from 'lucide-react';
import contratosData from '../data/contratosData.json';
import { handleWhatsAppClick } from '../components/Shared';

const Gatekeeper = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPass = password.trim().toUpperCase();
    // Chaves de acesso válidas
    if (cleanPass === 'CONTRATOS2026' || cleanPass === 'LIBIA2026' || cleanPass === 'AF2026') {
      sessionStorage.setItem('andrade_contratos_auth', 'true');
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
      padding: '1.5rem',
      fontFamily: 'var(--font-body)'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        border: '1px solid var(--accent-gold)',
        maxWidth: '460px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <ShieldCheck size={52} color="var(--accent-gold)" style={{ margin: '0 auto' }} />
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            color: 'var(--accent-gold)', 
            fontSize: '2rem',
            marginTop: '1rem',
            lineHeight: 1.2
          }}>
            Acesso Restrito
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.6rem', fontSize: '0.95rem' }}>
            Acervo Definitivo de Contratos Imobiliários & Comerciais
          </p>
          <span style={{ fontSize: '0.8rem', color: '#D4AF37', display: 'block', marginTop: '0.25rem' }}>
            Andrade & Florio Sociedade de Advogados
          </span>
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
                padding: '1.1rem',
                backgroundColor: 'var(--bg-color)',
                border: error ? '1px solid #ef4444' : '1px solid var(--bg-surface-light)',
                borderRadius: '6px',
                color: 'var(--text-main)',
                fontSize: '1.05rem',
                outline: 'none',
                textAlign: 'center',
                letterSpacing: '2px',
                transition: 'border-color 0.3s'
              }}
            />
            {error && (
              <span style={{ color: '#ef4444', fontSize: '0.85rem', display: 'block', marginTop: '0.6rem', textAlign: 'center' }}>
                Chave incorreta. Verifique o código recebido na Kiwify.
              </span>
            )}
          </div>
          <button 
            type="submit"
            className="btn-gold"
            style={{ 
              width: '100%', 
              marginTop: '0.5rem',
              padding: '1.1rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <Lock size={18} />
            Liberar Acervo
          </button>
        </form>
      </div>
    </div>
  );
};

export default function AcervoContratos() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('andrade_contratos_auth') === 'true';
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCopied(false);
  }, [activeSlide]);

  if (!isAuthenticated) {
    return <Gatekeeper onLogin={() => setIsAuthenticated(true)} />;
  }

  const currentItem = contratosData[activeSlide];
  const progress = Math.round(((activeSlide + 1) / contratosData.length) * 100);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentItem.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-main)',
      minHeight: '100vh',
      display: 'flex',
      fontFamily: 'var(--font-body)'
    }}>
      {/* SIDEBAR NAVIGATION (Idêntica ao Manual de Usucapião) */}
      <aside style={{
        width: '360px',
        backgroundColor: 'var(--bg-surface)',
        borderRight: '1px solid var(--bg-surface-light)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden'
      }}>
        {/* Header do Menu Lateral */}
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--bg-surface-light)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <ChevronLeft size={14} /> Voltar para o site
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', marginTop: '1.25rem', color: 'var(--accent-gold)', lineHeight: 1.3 }}>
            Acervo Definitivo de Contratos
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Andrade & Florio Sociedade de Advogados
          </p>
          
          {/* Barra de Progresso */}
          <div style={{ marginTop: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              <span>Navegação</span>
              <span>{activeSlide + 1} de {contratosData.length}</span>
            </div>
            <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--bg-color)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--accent-gold)', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
        </div>

        {/* Lista de Contratos */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '0.75rem 0' }}>
          {contratosData.map((item, index) => {
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
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <span style={{ minWidth: '22px', fontWeight: 600, opacity: isActive ? 1 : 0.6 }}>{index + 1}.</span>
                <span style={{ lineHeight: 1.4 }}>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Rodapé da Sidebar com Download Geral */}
        <div style={{ padding: '1.25rem', borderTop: '1px solid var(--bg-surface-light)', backgroundColor: 'var(--bg-color)' }}>
          <a
            href="/downloads/Acervo_Contratos_Andrade_Florio.zip"
            download
            className="btn-outline"
            style={{
              width: '100%',
              fontSize: '0.88rem',
              padding: '0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            <Download size={16} />
            Baixar Pacote Completo (.zip)
          </a>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL DE LEITURA E DOWNLOAD */}
      <main style={{
        flex: 1,
        padding: '3rem 4rem',
        maxWidth: '1050px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="card-surface" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2.5rem' }}>
          
          {/* Header do Contrato com Badge e Botão de Download */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start', 
            flexWrap: 'wrap', 
            gap: '1rem',
            borderBottom: '1px solid var(--bg-surface-light)',
            paddingBottom: '1.75rem',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ 
                display: 'inline-block', 
                backgroundColor: 'rgba(212, 175, 55, 0.15)', 
                color: 'var(--accent-gold)',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '0.3rem 0.75rem',
                borderRadius: '4px',
                marginBottom: '0.75rem',
                textTransform: 'uppercase'
              }}>
                {currentItem.badge}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.7rem, 2.5vw, 2.3rem)',
                color: 'var(--text-main)',
                lineHeight: 1.25,
                margin: 0
              }}>
                {currentItem.title}
              </h2>
            </div>

            {/* AÇÕES: DOWNLOAD DOCX E COPIAR */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleCopy}
                className="btn-outline"
                style={{
                  fontSize: '0.9rem',
                  padding: '0.75rem 1.2rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                {copied ? "Copiado!" : "Copiar Texto"}
              </button>

              <a
                href={`/downloads/${currentItem.downloadFile}`}
                download
                className="btn-gold"
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  padding: '0.75rem 1.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.25)'
                }}
              >
                <Download size={18} />
                {currentItem.downloadLabel}
              </a>
            </div>
          </div>

          {/* CORPO DO TEXTO FORMATADO */}
          <div style={{
            lineHeight: '1.9',
            fontSize: '1.08rem',
            color: '#E0E0E0',
            whiteSpace: 'pre-line',
            flex: 1,
            backgroundColor: 'var(--bg-color)',
            padding: '2rem',
            borderRadius: '6px',
            border: '1px solid var(--bg-surface-light)'
          }}>
            {currentItem.content}
          </div>

          {/* BANNER DE SUPORTE DA BANCA */}
          <div style={{
            marginTop: '2.5rem',
            backgroundColor: 'rgba(212, 175, 55, 0.06)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '6px',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                Dúvidas no preenchimento ou negócio de alto valor?
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                A equipe jurídica da Andrade & Florio pode auditar suas certidões e minutas antes da assinatura.
              </div>
            </div>
            <button
              onClick={() => handleWhatsAppClick(
                'nlxZCPiY6qAcEMzlgIgD',
                `Olá! Estou na área de membros do Acervo de Contratos e gostaria de uma orientação jurídica sobre o contrato: ${currentItem.title}`
              )}
              className="btn-outline"
              style={{
                fontSize: '0.88rem',
                padding: '0.65rem 1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <MessageCircle size={16} />
              Falar com Advogado
            </button>
          </div>

          {/* NAVEGAÇÃO ENTRE OS CONTRATOS */}
          <div style={{ 
            marginTop: '3rem', 
            paddingTop: '1.5rem', 
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

            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Contrato {activeSlide + 1} de {contratosData.length}
            </span>

            <button 
              className="btn-gold"
              disabled={activeSlide === contratosData.length - 1}
              onClick={() => setActiveSlide(prev => prev + 1)}
              style={{ 
                cursor: activeSlide === contratosData.length - 1 ? 'not-allowed' : 'pointer', 
                opacity: activeSlide === contratosData.length - 1 ? 0.3 : 1 
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
}
