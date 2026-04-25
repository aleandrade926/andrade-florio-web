import React, { useEffect } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

  .op-root {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #f4f2ee;
    color: #1a1a1a;
    min-height: 100vh;
    padding: 3rem 1.5rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .op-document {
    max-width: 840px;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid #d9d5cd;
    padding: 4rem 5rem;
    box-shadow: 0 4px 40px rgba(0,0,0,0.07);
  }

  /* ── HEADER ── */
  .op-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .op-logo-row {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .op-logo-img {
    height: 120px;
    width: auto;
  }

  .op-footer-brand {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #1a1a1a;
    margin-bottom: 0.75rem;
  }

  .op-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.75rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1a1a1a;
    margin-bottom: 0.75rem;
    line-height: 1.25;
  }

  .op-subtitle {
    font-size: 1rem;
    font-weight: 400;
    color: #555;
    max-width: 640px;
    line-height: 1.7;
  }

  .op-divider {
    width: 100%;
    border: none;
    border-top: 1px solid #c9b97a;
    margin: 2rem 0;
  }

  .op-divider-thin {
    width: 100%;
    border: none;
    border-top: 1px solid #e0dbd0;
    margin: 2rem 0;
  }

  /* ── SECTIONS ── */
  .op-section {
    margin-bottom: 2.5rem;
    page-break-inside: avoid;
  }

  .op-section-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #b8a55a;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .op-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e0dbd0;
  }

  .op-section-body {
    font-size: 0.95rem;
    line-height: 1.85;
    color: #3a3a3a;
  }

  /* ── PROFILES ── */
  .op-profiles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .op-profile {
    page-break-inside: avoid;
    border-left: 2px solid #c9b97a;
    padding-left: 1rem;
  }

  .op-profile-name {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    color: #1a1a1a;
    margin-bottom: 0.25rem;
  }

  .op-profile-desc {
    font-size: 0.85rem;
    line-height: 1.65;
    color: #555;
  }

  /* ── LEGACY ── */
  .op-legacy-label {
    font-size: 0.85rem;
    font-weight: 500;
    color: #555;
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
  }

  .op-clients {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .op-client-tag {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #1a1a1a;
    border: 1px solid #c9b97a;
    padding: 0.3rem 0.8rem;
    page-break-inside: avoid;
  }

  /* ── BULLET LISTS ── */
  .op-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
  }

  .op-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.6rem;
    font-size: 0.92rem;
    line-height: 1.7;
    color: #3a3a3a;
    page-break-inside: avoid;
  }

  .op-list li::before {
    content: '—';
    color: #c9b97a;
    flex-shrink: 0;
    font-weight: 700;
    margin-top: 2px;
  }

  /* ── NUMBERED STEPS ── */
  .op-steps {
    margin-top: 1rem;
  }

  .op-step {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
    page-break-inside: avoid;
  }

  .op-step-num {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: #d9d5cd;
    line-height: 1;
    min-width: 28px;
    padding-top: 2px;
  }

  .op-step-content {}

  .op-step-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    color: #1a1a1a;
    margin-bottom: 0.25rem;
  }

  .op-step-body {
    font-size: 0.88rem;
    line-height: 1.7;
    color: #555;
  }

  .op-sub-list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0 0;
  }

  .op-sub-list li {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.6;
    padding-left: 1rem;
    position: relative;
    margin-bottom: 0.2rem;
  }

  .op-sub-list li::before {
    content: '·';
    position: absolute;
    left: 0;
    color: #c9b97a;
    font-weight: 700;
  }

  /* ── FOOTER ── */
  .op-footer {
    text-align: center;
    page-break-inside: avoid;
  }

  .op-footer-logo-wrap {
    margin-bottom: 1rem;
  }

  .op-footer-contacts {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    font-size: 0.82rem;
    color: #555;
    line-height: 1.8;
  }

  .op-footer-contacts a {
    color: #555;
    text-decoration: none;
  }

  .op-print-btn {
    display: block;
    margin: 2rem auto 0 auto;
    padding: 0.6rem 2rem;
    background: transparent;
    border: 1px solid #c9b97a;
    color: #6b5b1e;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .op-print-btn:hover {
    background: #1a1a1a;
    border-color: #1a1a1a;
    color: #c9b97a;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .op-document {
      padding: 2.5rem 1.75rem;
    }
    .op-title {
      font-size: 1.3rem;
    }
    .op-profiles {
      grid-template-columns: 1fr;
    }
    .op-footer-contacts {
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  /* ── PRINT STYLES ── */
  @media print {
    @page {
      size: A4;
      margin: 18mm 15mm;
    }

    body, html {
      background: white !important;
    }

    .op-root {
      background: white !important;
      padding: 0 !important;
    }

    .op-document {
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      max-width: 100% !important;
    }

    .op-title { font-size: 16pt !important; }
    .op-subtitle { font-size: 10pt !important; }
    .op-section-body { font-size: 9.5pt !important; }
    .op-profile-name { font-size: 9.5pt !important; }
    .op-profile-desc { font-size: 8.5pt !important; }
    .op-step-title { font-size: 9pt !important; }
    .op-step-body { font-size: 8.5pt !important; }
    .op-footer-contacts { font-size: 8pt !important; }
    .op-list li { font-size: 9pt !important; }
    .op-client-tag { font-size: 7pt !important; }

    .op-print-btn { display: none !important; }

    .op-section { page-break-inside: avoid !important; }
    .op-step { page-break-inside: avoid !important; }
    .op-profile { page-break-inside: avoid !important; }
    .op-footer { page-break-inside: avoid !important; }
  }
`;

export default function OnePagerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Diagnóstico Jurídico-Fiscal para Incorporadoras | Andrade e Florio';
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="op-root">
        <div className="op-document">

          {/* ── HEADER ── */}
          <header className="op-header">
            <div className="op-logo-row">
              <img
                src="/logo-af.png"
                alt="Andrade e Florio Advogados"
                className="op-logo-img"
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
            <h1 className="op-title">Diagnóstico Jurídico-Fiscal<br />para Incorporadoras</h1>
            <p className="op-subtitle">
              Inteligência tributária e blindagem contratual para maximização de VGV e proteção do DRE.
            </p>
          </header>

          <hr className="op-divider" />

          {/* ── SEÇÃO 1: QUEM SOMOS ── */}
          <section className="op-section">
            <div className="op-section-label">01 — Quem Somos</div>
            <p className="op-section-body">
              Uma atuação conjunta que une mais de 50 anos de experiência somada na alta advocacia e consultoria de negócios, focada exclusivamente em mitigar riscos e gerar caixa para médias empresas do setor imobiliário.
            </p>

            <div className="op-profiles">
              <div className="op-profile">
                <div className="op-profile-name">Alexandre Florio</div>
                <div className="op-profile-desc">
                  Advogado e Consultor Fiscal com mais de 20 anos de mercado. Ex-Procurador-Chefe Federal. Especialista na interseção entre engenharia tributária e viabilidade de negócios.
                </div>
              </div>
              <div className="op-profile">
                <div className="op-profile-name">Dra. Líbia Florio</div>
                <div className="op-profile-desc">
                  Advogada com mais de 30 anos de atuação, Mestre em Direito Empresarial pela Universidade de São Paulo (USP) e especialista em Direito Imobiliário.
                </div>
              </div>
            </div>

            <p className="op-legacy-label">Nosso Legado de Mercado</p>
            <div className="op-clients">
              {['Lorenge', 'Serveng', 'Electrolux', 'BRF'].map(c => (
                <span key={c} className="op-client-tag">{c}</span>
              ))}
            </div>
          </section>

          <hr className="op-divider-thin" />

          {/* ── SEÇÃO 2: CENÁRIO ATUAL ── */}
          <section className="op-section">
            <div className="op-section-label">02 — O Cenário Atual</div>
            <p className="op-section-body">
              O mercado da construção civil enfrenta uma virada de chave em 2026. A Reforma Tributária e as atualizações na Legislação Imobiliária exigem uma reestruturação imediata dos contratos de incorporação e modelos de venda.
            </p>
            <ul className="op-list">
              <li>Contratos desatualizados estão gerando passivos ocultos na entrega das chaves.</li>
              <li>A falta de planejamento fiscal na raiz do empreendimento está corroendo a margem de lucro líquido da operação.</li>
            </ul>
          </section>

          <hr className="op-divider-thin" />

          {/* ── SEÇÃO 3: PROPOSTA ── */}
          <section className="op-section">
            <div className="op-section-label">03 — Nossa Proposta</div>
            <p className="op-section-body">
              Não oferecemos serviços de prateleira. Nosso modelo de entrada nas construtoras parceiras é baseado na entrega de valor intelectual prévio, através de uma auditoria pontual e sem custo inicial, dividida em 3 etapas:
            </p>

            <div className="op-steps">
              <div className="op-step">
                <span className="op-step-num">01</span>
                <div className="op-step-content">
                  <div className="op-step-title">Reunião Executiva (15 min)</div>
                  <div className="op-step-body">
                    Alinhamento com a Diretoria Financeira (CFO) e Jurídica para mapear o momento do portfólio — obras em andamento, estoques ou futuros lançamentos.
                  </div>
                </div>
              </div>

              <div className="op-step">
                <span className="op-step-num">02</span>
                <div className="op-step-content">
                  <div className="op-step-title">Parecer Técnico Estratégico</div>
                  <div className="op-step-body">
                    Nossa equipe elabora um mapa com as oportunidades de eficiência fiscal e ajustes na blindagem dos contratos de incorporação.
                  </div>
                </div>
              </div>

              <div className="op-step">
                <span className="op-step-num">03</span>
                <div className="op-step-content">
                  <div className="op-step-title">Apresentação e Decisão</div>
                  <div className="op-step-body">
                    Entregamos o parecer para a diretoria. A construtora possui total liberdade para:
                  </div>
                  <ul className="op-sub-list">
                    <li>Absorver as teses e evoluir para uma proposta de implementação conosco.</li>
                    <li>Ajustar o escopo de acordo com a prioridade de caixa.</li>
                    <li>Encerrar o diagnóstico sem qualquer ônus ou compromisso.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <hr className="op-divider" />

          {/* ── FOOTER ── */}
          <footer className="op-footer">
            <div className="op-footer-brand">Andrade e Florio — Consultoria Estratégica e Jurídica</div>
            <div className="op-footer-contacts">
              <span>📞 11 99372-5876 / 11 97867-1067</span>
              <span>✉ alexandre.florio@andradeflorio.com.br</span>
              <a href="https://www.andradeflorio.com.br" target="_blank" rel="noopener noreferrer">
                www.andradeflorio.com.br
              </a>
            </div>
          </footer>

          <button className="op-print-btn" onClick={() => window.print()}>
            ↓ Salvar como PDF / Imprimir
          </button>

        </div>
      </div>
    </>
  );
}
