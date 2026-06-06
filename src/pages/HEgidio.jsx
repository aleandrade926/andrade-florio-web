import React, { useState, useEffect } from 'react';
import { ShieldCheck, Scale, Briefcase, Clock, TrendingUp, Lock, CheckCircle, ArrowRight, ChevronRight, Check, FileText, Users, Map, AlertCircle } from 'lucide-react';
import { Footer } from '../components/Shared';
import './HEgidio.css';

const HEgidio = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('hegidio_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.toUpperCase() === 'HEGIDIO2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('hegidio_auth', 'true');
      setError('');
    } else {
      setError('Senha incorreta. Por favor, tente novamente.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="he-login-container">
        <div className="he-login-card">
          <div className="he-login-header">
            <img src="/logo-af.png" alt="Andrade e Florio" className="he-logo-img-login" />
            <div className="he-lock-icon">
              <Lock size={32} color="var(--accent-gold)" />
            </div>
            <h2>Acesso Restrito</h2>
            <p>Área exclusiva para o Sr. Heribaldo Egídio</p>
          </div>
          <form onSubmit={handleLogin} className="he-login-form">
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="he-login-input"
              autoFocus
            />
            {error && <p className="he-error-msg">{error}</p>}
            <button type="submit" className="btn-gold he-login-btn">
              Acessar Proposta <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="he-proposal-container">
      {/* Header */}
      <header className="he-header" style={{
        padding: scrolled ? '0.4rem 0' : '0.8rem 0',
        transition: 'padding 0.4s ease',
        backdropFilter: 'blur(12px)'
      }}>
        <div className="container he-header-content">
          <img 
            src="/logo-af.png" 
            alt="Andrade e Florio" 
            className="he-logo-img-header"
            style={{
              height: scrolled ? '80px' : '180px',
              transition: 'height 0.4s ease, opacity 0.3s ease'
            }}
          />
          <div className="he-client-badge">A/C SR. HERIBALDO EGÍDIO</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="he-hero">
        <div className="container he-hero-inner">
          <h1 className="he-hero-title">Inteligência Tributária e Retaguarda Jurídica</h1>
          <h2 className="he-hero-subtitle">Blindagem Fiscal e Estratégica para o Grupo H.Egídio</h2>
          <div className="he-hero-letter">
            <p className="he-letter-greeting"><strong>Prezado Sr. Heribaldo Egídio,</strong></p>
            <p>
              Observamos com admiração a trajetória do Grupo H.Egídio, consolidando-se como referência em saúde e logística através de marcas como Equiplex, Transplex e Hospdrogas. Um conglomerado deste porte exige não apenas uma contabilidade eficiente, mas uma <strong>retaguarda jurídica de elite</strong> que atue nas entrelinhas da legislação tributária farmacêutica.
            </p>
            <p>
              Tendo em vista a complexidade do regime monofásico e as constantes mudanças no CARF sobre a essencialidade de insumos e logística, apresentamos uma proposta de atuação estritamente complementar aos seus assessores atuais.
            </p>
          </div>
          <div className="he-pivot-box">
            <h3>Nossa missão é proteger a margem do Grupo.</h3>
            <p>
              Não somos uma auditoria convencional. Somos um "Snayper" jurídico focado em identificar brechas administrativas e garantir que o Grupo H.Egídio não deixe dinheiro na mesa do Fisco por interpretações conservadoras de temas já pacificados em tribunais superiores.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="he-section he-deliverables">
        <div className="container">
          <h2 className="he-section-title">Pilares da Parceria Estratégica</h2>
          <div className="he-grid">
            <div className="card-surface he-card">
              <Scale size={32} color="var(--accent-gold)" className="he-card-icon" />
              <h3>Comitê de Créditos Monofásicos</h3>
              <p>Revisão contínua da essencialidade de fretes e insumos para maximizar o creditamento de PIS/COFINS em toda a cadeia.</p>
            </div>
            <div className="card-surface he-card">
              <Briefcase size={32} color="var(--accent-gold)" className="he-card-icon" />
              <h3>Conselho de Retaguarda</h3>
              <p>Participação em reuniões estratégicas do Conselho ou Diretoria para validação jurídica de novas expansões e M&A.</p>
            </div>
            <div className="card-surface he-card">
              <TrendingUp size={32} color="var(--accent-gold)" className="he-card-icon" />
              <h3>Tese do Século Farma</h3>
              <p>Implementação administrativa da exclusão do ICMS-ST da base do PIS/COFINS para distribuidores (Hospdrogas/Equiplex).</p>
            </div>
            <div className="card-surface he-card">
              <ShieldCheck size={32} color="var(--accent-gold)" className="he-card-icon" />
              <h3>Garantia de 5 Anos</h3>
              <p>Representação jurídica sem custos adicionais em qualquer fiscalização ligada às nossas orientações por 5 anos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses and Guarantee */}
      <section className="he-section he-bonuses">
        <div className="container">
          <h2 className="he-section-title">O Diferencial de Resultados</h2>
          
          <div className="he-bonus-grid">
            <div className="he-bonus-card">
              <div className="he-bonus-header">
                <span className="he-bonus-label">Recuperação Administrativa</span>
                <h3>Identificação de Ativos Ocultos</h3>
              </div>
              <p>Nossa equipe de inteligência realiza um rastreio profundo de indébitos fiscais não aproveitados nos últimos 60 meses:</p>
              <div className="he-success-fee">
                <strong>15% a 20% sobre o êxito efetivo</strong>
                <span>(Remuneração baseada puramente em resultado real)</span>
              </div>
            </div>

            <div className="he-bonus-card he-guarantee-card">
              <div className="he-bonus-header">
                <span className="he-bonus-label he-label-gold">Segurança Absoluta</span>
                <h3>Compliance de Retaguarda</h3>
              </div>
              <AlertCircle size={48} color="var(--accent-gold)" className="he-guarantee-icon" />
              <p className="he-guarantee-text">
                "Se a Andrade e Florio der o parecer, nós assumimos a defesa."
              </p>
              <p className="he-guarantee-subtext">
                Eliminamos o medo de fiscalizações futuras ao vincular nossa responsabilidade técnica ao sucesso do Grupo por meio de representação gratuita em contencioso administrativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="he-section he-investment">
        <div className="container">
          <h2 className="he-section-title">Modelos de Engajamento</h2>
          
          <div className="he-investment-grid">
            {/* Card 1: Retainer Base */}
            <div className="he-investment-card he-card-outline">
              <h2>Apoio Estratégico</h2>
              <p className="he-card-subtitle">Retaguarda Consultiva</p>
              <div className="he-price-block">
                <span className="he-price-currency">R$</span>
                <span className="he-price-amount">3.500</span>
                <span className="he-price-period">/mês</span>
              </div>
              <ul className="he-investment-features" style={{marginTop: '2rem'}}>
                <li><Check size={20} color="var(--text-muted)" /> Canal direto para dúvidas de diretoria</li>
                <li><Check size={20} color="var(--text-muted)" /> Reunião mensal de alinhamento fiscal</li>
                <li><Check size={20} color="var(--text-muted)" /> Revisão de contratos estratégicos</li>
              </ul>
            </div>

            {/* Card 2: Full Retainer */}
            <div className="he-investment-card">
              <span className="he-recommended-badge">Proteção Total</span>
              <h2>Parceria de Retaguarda</h2>
              <p className="he-card-subtitle">Full Shield Group</p>
              <div className="he-price-block">
                <span className="he-price-currency">R$</span>
                <span className="he-price-amount">8.500</span>
                <span className="he-price-period">/mês</span>
              </div>
              <ul className="he-investment-features" style={{marginTop: '2rem'}}>
                <li><Check size={20} color="var(--accent-gold)" /> Monitoramento ativo de todas as SPEs/Marcas</li>
                <li><Check size={20} color="var(--accent-gold)" /> **Garantia Jurídica de 5 anos inclusa**</li>
                <li><Check size={20} color="var(--accent-gold)" /> Pareceres ilimitados para contabilidade</li>
              </ul>
            </div>
          </div>

          <div className="he-cta-container" style={{marginTop: '4rem'}}>
            <a 
              href="https://wa.me/5511978671067?text=Sr.%20Heribaldo%2C%20estou%20dispon%C3%ADvel%20para%20alinhar%20os%20detalhes%20da%20retaguarda%20do%20Grupo%20H.%20Eg%C3%ADdio." 
              target="_blank" 
              rel="noreferrer"
              className="btn-gold he-cta-btn"
            >
              Falar com o Especialista <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HEgidio;
