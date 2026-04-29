import React, { useState, useEffect } from 'react';
import { ShieldCheck, Scale, Briefcase, Clock, TrendingUp, Lock, CheckCircle, ArrowRight, ChevronRight, Check, FileText, Users, Map, AlertCircle } from 'lucide-react';
import { Footer } from '../components/Shared';
import './Sammarone.css';

const Sammarone = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Check session storage on mount
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('sammarone_auth');
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
    if (password.toUpperCase() === 'SAMMARONE2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('sammarone_auth', 'true');
      setError('');
    } else {
      setError('Senha incorreta. Por favor, tente novamente.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="s-login-container">
        <div className="s-login-card">
          <div className="s-login-header">
            <img src="/logo-af.png" alt="Andrade Florio" className="s-logo-img-login" />
            <div className="s-lock-icon">
              <Lock size={32} color="var(--accent-gold)" />
            </div>
            <h2>Acesso Restrito</h2>
            <p>Área exclusiva para Cristiano Sammarone</p>
          </div>
          <form onSubmit={handleLogin} className="s-login-form">
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="s-login-input"
              autoFocus
            />
            {error && <p className="s-error-msg">{error}</p>}
            <button type="submit" className="btn-gold s-login-btn">
              Acessar Proposta <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="s-proposal-container">
      {/* Header */}
      <header className="s-header" style={{
        padding: scrolled ? '0.4rem 0' : '0.8rem 0',
        transition: 'padding 0.4s ease',
        backdropFilter: 'blur(12px)'
      }}>
        <div className="container s-header-content">
          <img 
            src="/logo-af.png" 
            alt="Andrade Florio" 
            className="s-logo-img-header"
            style={{
              height: scrolled ? '80px' : '180px',
              transition: 'height 0.4s ease, opacity 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          />
          <div className="s-client-badge">A/C SR. CRISTIANO SAMMARONE</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="s-hero">
        <div className="container s-hero-inner">
          <h1 className="s-hero-title">Proposta de Parceria Jurídica Estratégica</h1>
          <h2 className="s-hero-subtitle">Retaguarda Tributária, Imobiliária e Patrimonial para a Sammarone</h2>
          <div className="s-hero-letter">
            <p className="s-letter-greeting"><strong>Prezado Sr. Cristiano Sammarone,</strong></p>
            <p>
              É com grata satisfação que nos dirigimos a V. Sa. para formalizar o entendimento alcançado em nossa recente reunião. Compreendemos profundamente a visão da Sammarone, bem como a sua louvável preocupação com a perenidade dos negócios, a responsabilidade nas execuções e, sobretudo, a segurança nas decisões estratégicas.
            </p>
            <p>
              Tendo em vista que a vossa conceituada empresa já conta com capacitados profissionais nas frentes contábeis e operacionais, servimo-nos da presente para apresentar uma proposta de atuação estritamente complementar. Não visamos, portanto, substituir vossos atuais parceiros, tampouco oferecer serviços genéricos de "revisão fiscal" comumente encontrados no mercado.
            </p>
          </div>
          <div className="s-pivot-box">
            <h3>A nossa proposta é diferente.</h3>
            <p>
              Queremos atuar como uma <strong>retaguarda jurídico-tributária estratégica</strong>, trabalhando a quatro mãos com a Sammarone e seus assessores. O foco é simples: ajudar a Sammarone a seguir crescendo com segurança, preservar margem, evitar problemas com o Fisco e ter advogados comprometidos com o que recomendam.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="s-section s-deliverables">
        <div className="container">
          <h2 className="s-section-title">O que está incluído na parceria</h2>
          <div className="s-grid">
            <div className="card-surface s-card">
              <Scale size={32} color="var(--accent-gold)" className="s-card-icon" />
              <h3>Acompanhamento Estratégico</h3>
              <p>Atuação consultiva contínua para estruturação de empreendimentos, constituição de SPEs e enquadramento no RET.</p>
            </div>
            <div className="card-surface s-card">
              <Briefcase size={32} color="var(--accent-gold)" className="s-card-icon" />
              <h3>Reunião Mensal de Diretoria</h3>
              <p>Encontro mensal com os sócios para alinhamento, análise de novos projetos e antecipação de riscos do período.</p>
            </div>
            <div className="card-surface s-card">
              <Clock size={32} color="var(--accent-gold)" className="s-card-icon" />
              <h3>Plantão Jurídico Sensível</h3>
              <p>Canal direto para dúvidas urgentes. Uma segunda opinião técnica imediata antes de qualquer decisão crítica.</p>
            </div>
            <div className="card-surface s-card">
              <TrendingUp size={32} color="var(--accent-gold)" className="s-card-icon" />
              <h3>Comitê Reforma Tributária</h3>
              <p>Monitoramento ativo dos impactos da Reforma sobre custos de materiais, preços finais e margem dos projetos.</p>
            </div>
            <div className="card-surface s-card">
              <FileText size={32} color="var(--accent-gold)" className="s-card-icon" />
              <h3>Notas Técnicas e Pareceres</h3>
              <p>Documentação executiva de orientações para registrar posições jurídicas e dar total segurança à contabilidade.</p>
            </div>
            <div className="card-surface s-card">
              <Users size={32} color="var(--accent-gold)" className="s-card-icon" />
              <h3>Interação com Contabilidade</h3>
              <p>Trabalho a quatro mãos com a equipe contábil da Sammarone para revisão de entendimento e mitigação de erros.</p>
            </div>
            <div className="card-surface s-card">
              <Map size={32} color="var(--accent-gold)" className="s-card-icon" />
              <h3>Planejamento de Operações</h3>
              <p>Avaliação prévia de riscos e vantagens na compra de terrenos, permutas e formatação de parcerias imobiliárias.</p>
            </div>
            <div className="card-surface s-card">
              <AlertCircle size={32} color="var(--accent-gold)" className="s-card-icon" />
              <h3>Análise de Comunicações</h3>
              <p>Análise técnica preliminar de qualquer comunicação ou questionamento do Fisco, direcionando o caminho seguro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses and Guarantee */}
      <section className="s-section s-bonuses">
        <div className="container">
          <h2 className="s-section-title">Os Diferenciais</h2>
          
          <div className="s-bonus-grid">
            <div className="s-bonus-card">
              <div className="s-bonus-header">
                <span className="s-bonus-label">Bônus</span>
                <h3>Identificação de Oportunidades</h3>
              </div>
              <p>Caso, no curso da parceria, seja identificada oportunidade concreta de recuperação, compensação, redução ou aproveitamento econômico, a Andrade Florio poderá conduzir a estratégia mediante honorários de êxito de:</p>
              <div className="s-success-fee">
                <strong>15% sobre o benefício econômico efetivo</strong>
              </div>
            </div>

            <div className="s-bonus-card s-guarantee-card">
              <div className="s-bonus-header">
                <span className="s-bonus-label s-label-gold">O Grande Diferencial</span>
                <h3>Garantia Jurídica de 5 Anos</h3>
              </div>
              <ShieldCheck size={48} color="var(--accent-gold)" className="s-guarantee-icon" />
              <p className="s-guarantee-text">
                Se a Andrade Florio orientar, estruturar ou assinar uma posição jurídica dentro do escopo contratado, a Sammarone não ficará sozinha caso o Fisco questione essa posição. Durante o prazo legal de fiscalização, <strong>atuaremos sem novos honorários advocatícios</strong> para defender administrativamente ou judicialmente aquilo que foi recomendado por nós.
              </p>
              <p className="s-guarantee-subtext" style={{fontSize: '0.8rem', marginTop: '1rem', color: 'var(--text-muted)', fontStyle: 'normal'}}>
                *Não estão incluídos tributos, multas, juros, custas, perícias, garantias judiciais, despesas de terceiros ou situações decorrentes de informações incompletas, fatos omitidos ou execução em desacordo com a orientação fornecida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Reference (Anchoring) */}
      <section className="s-section s-anchoring">
        <div className="container">
          <h2 className="s-section-title">Transparência: Valores de Referência</h2>
          <p className="s-anchoring-intro">A título de transparência, caso a Sammarone optasse por contratar nossos serviços pontualmente, estes seriam os honorários estimados:</p>
          
          <div className="s-table-wrapper">
            <table className="s-table">
              <tbody>
                <tr><td>Reunião estratégica com análise prévia</td><td className="s-value">R$ 2.500</td></tr>
                <tr><td>Parecer ou nota técnica objetiva</td><td className="s-value">R$ 4.000 a 8.000</td></tr>
                <tr><td>Análise de estrutura tributária de SPE/RET</td><td className="s-value">R$ 8.000</td></tr>
                <tr><td>Análise de operação imobiliária específica</td><td className="s-value">R$ 8.000 a 15.000</td></tr>
                <tr><td>Comitê Reforma Tributária para diretoria</td><td className="s-value">R$ 6.000</td></tr>
                <tr><td>Interação com contabilidade e revisão técnica</td><td className="s-value">R$ 3.000 / mês</td></tr>
                <tr><td>Análise de intimação ou questionamento fiscal</td><td className="s-value">R$ 5.000</td></tr>
                <tr><td>Organização de matriz de riscos tributários/imob.</td><td className="s-value">R$ 10.000</td></tr>
                <tr><td>Defesa em questionamentos do Fisco (Garantia)</td><td className="s-value">R$ 20.000 a 40.000</td></tr>
                <tr><td>Monitoramento jurídico por 5 anos</td><td className="s-value"><em>Inestimável</em></td></tr>
              </tbody>
            </table>
          </div>
          <p className="s-anchoring-outro">
            Contratados separadamente, esses entregáveis poderiam superar facilmente <strong>R$ 60.000 a R$ 100.000</strong> ao longo de 6 meses.<br/>
            Nesta proposta, a Sammarone não está contratando atos isolados, mas uma retaguarda estratégica contínua por R$ 30.000 no período.
          </p>
        </div>
      </section>

      {/* Why is this different */}
      <section className="s-section s-different">
        <div className="container">
          <h2 className="s-section-title">Por que essa proposta é diferente?</h2>
          <div className="s-different-content">
            <ul className="s-not-list">
              <li><strong style={{color: '#ff6b6b'}}>Não é</strong> uma proposta de revisão fiscal genérica.</li>
              <li><strong style={{color: '#ff6b6b'}}>Não é</strong> uma proposta para substituir a sua contabilidade.</li>
              <li><strong style={{color: '#ff6b6b'}}>Não é</strong> uma proposta para substituir os advogados que já atendem a Sammarone em contratos, incorporação ou trabalhista.</li>
            </ul>
            <div className="s-is-box">
              <p>É uma proposta para preencher uma lacuna específica:</p>
              <h3>Ter uma retaguarda jurídico-tributária especializada, disponível, comprometida e responsável pelo que recomenda.</h3>
              <p className="s-is-subtext">A Sammarone passa a ter uma segunda camada de segurança para decisões relevantes, com a tranquilidade adicional de que, se houver questionamento futuro sobre aquilo que orientamos, nós permaneceremos ao lado da empresa sem cobrança de novos honorários.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="s-section s-investment">
        <div className="container">
          
          <div className="s-investment-card" style={{maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem'}}>
            <span className="s-recommended-badge">Parceria Recomendada</span>
            <h2>Parceria Estratégica</h2>
            <p className="s-card-subtitle" style={{marginBottom: '2rem'}}>Retaguarda Jurídico-Tributária</p>
            
            <div className="s-price-block">
              <span className="s-price-currency">R$</span>
              <span className="s-price-amount">30.000</span>
              <span className="s-price-period">total</span>
            </div>
            <p className="s-installments">em 6 parcelas mensais de R$ 5.000,00</p>
            
            <ul className="s-investment-features" style={{maxWidth: '450px'}}>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> Retaguarda jurídico-tributária estratégica.</li>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> Reunião mensal.</li>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> Plantão para dúvidas sensíveis.</li>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> Notas técnicas objetivas.</li>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> Interação com contabilidade.</li>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> Comitê Reforma Tributária.</li>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> Análise de oportunidades como bônus.</li>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> Success fee de 15% apenas se houver benefício econômico efetivo.</li>
              <li><Check size={20} color="var(--accent-gold)" style={{flexShrink: 0}} /> <strong>Garantia jurídica de 5 anos sobre as posições orientadas.</strong></li>
            </ul>

            <div className="s-cta-container" style={{marginTop: '3rem'}}>
              <p className="s-cta-subtext" style={{marginBottom: '1.5rem', color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.5'}}>
                Recomendamos iniciar pela parceria de 6 meses, pois esse prazo permite conhecer a operação, acompanhar decisões reais e construir uma rotina estratégica com a diretoria e a contabilidade.
              </p>
              <a 
                href="https://wa.me/5511978671067?text=Ol%C3%A1%20Alexandre%2C%20analisei%20a%20p%C3%A1gina%20da%20Sammarone%20e%20podemos%20dar%20o%20pr%C3%B3ximo%20passo." 
                target="_blank" 
                rel="noreferrer"
                className="btn-gold s-cta-btn"
                style={{width: '100%', maxWidth: '100%'}}
              >
                Dar o Próximo Passo <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sammarone;
