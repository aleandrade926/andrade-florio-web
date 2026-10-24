import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  KeyRound, 
  Clock, 
  AlertOctagon, 
  TrendingDown, 
  CheckCircle2, 
  Gavel, 
  Building2, 
  FileText, 
  ChevronDown, 
  DollarSign, 
  Send, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { Navbar, Footer, StickyWhatsApp, handleWhatsAppClick } from '../components/Shared';

const customPageStyles = `
  .despejo-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1.2rem;
    border: 1px solid var(--accent-gold);
    border-radius: 50px;
    color: var(--accent-gold);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    background: rgba(212, 175, 55, 0.05);
  }

  .action-card {
    background: var(--bg-surface);
    border: 1px solid var(--bg-surface-light);
    border-radius: 8px;
    padding: 2.25rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .action-card:hover {
    border-color: var(--accent-gold);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  .action-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .action-card:hover::before {
    opacity: 1;
  }

  .timeline-step {
    position: relative;
    padding-left: 2.5rem;
    border-left: 2px solid rgba(212, 175, 55, 0.3);
    margin-bottom: 2rem;
  }

  .timeline-step:last-child {
    margin-bottom: 0;
    border-left-color: transparent;
  }

  .timeline-dot {
    position: absolute;
    left: -9px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--accent-gold);
    border: 3px solid var(--bg-color);
  }

  .calc-container {
    background: linear-gradient(135deg, var(--bg-surface) 0%, #151515 100%);
    border: 1px solid rgba(212, 175, 55, 0.35);
    border-radius: 12px;
    padding: 2.5rem;
    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
  }

  .faq-item-despejo {
    border-bottom: 1px solid var(--bg-surface-light);
    padding: 1.5rem 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .faq-question-despejo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .faq-answer-despejo {
    margin-top: 1rem;
    color: var(--text-muted);
    font-size: 0.98rem;
    line-height: 1.7;
  }

  .stat-box {
    background: rgba(28, 28, 28, 0.7);
    border: 1px solid var(--bg-surface-light);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    .hero-grid {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
    .stats-grid {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }
  }
`;

export default function DespejoPage() {
  const [openFaq, setOpenFaq] = useState(null);

  // Estado do Simulador de Prejuízo do Proprietário
  const [aluguelValor, setAluguelValor] = useState(3000);
  const [condominioIptu, setCondominioIptu] = useState(800);
  const [mesesAtraso, setMesesAtraso] = useState(3);
  const [tipoGarantia, setTipoGarantia] = useState('sem-garantia');

  // Cálculos dinâmicos
  const perdaMensal = Number(aluguelValor) + Number(condominioIptu);
  const prejuizoAcumulado = perdaMensal * Number(mesesAtraso);
  const multaJurosEstimados = prejuizoAcumulado * 0.12;
  const prejuizoTotal = prejuizoAcumulado + multaJurosEstimados;

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Management
    const originalTitle = document.title;
    document.title = "Ação de Despejo por Falta de Pagamento SP | Retomada Liminar do Imóvel em 15 Dias | Andrade & Florio";

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Advocacia especializada para Proprietários e Locadores em São Paulo. Ação de Despejo por Falta de Pagamento com pedido liminar em 15 dias, cobrança executiva de aluguéis, condomínio, IPTU e penhora de bens do fiador. Dra. Libia Florio, Mestre pela USP.'
    );

    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const originalKeywords = metaKeywords ? metaKeywords.getAttribute('content') : '';
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'acao de despejo proprietario, despejo por falta de pagamento sao paulo, advogado imobiliario locador, liminar despejo 15 dias, cobrar aluguel atrasado e despejar, execucao fiador aluguel, retomar imovel alugado sp, divida condominio inquilino despejo'
    );

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    let createdCanonical = false;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
      createdCanonical = true;
    }
    const originalCanonical = canonicalLink.getAttribute('href');
    canonicalLink.setAttribute('href', 'https://www.andradeflorio.com.br/despejo');

    // JSON-LD Structured Data
    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.id = 'schema-despejo-proprietario-seo';
    jsonLdScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LegalService",
          "@id": "https://www.andradeflorio.com.br/#legalservice",
          "name": "Andrade & Florio Advocacia - Ação de Despejo e Recuperação de Imóveis para Locadores",
          "url": "https://www.andradeflorio.com.br/despejo",
          "telephone": "+55-11-97867-1067",
          "priceRange": "$$$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "addressCountry": "BR"
          },
          "founder": {
            "@type": "Person",
            "name": "Dra. Libia Cristiane Correa e Andrade e Florio",
            "jobTitle": "Advogada Especialista em Direito Notarial, Registral e Imobiliário",
            "alumniOf": "Universidade de São Paulo (USP)"
          },
          "areaServed": "São Paulo, Grande SP e todo o Brasil (via PJe/TJSP)",
          "description": "Assessoria jurídica de excelência exclusiva para proprietários, locadores e administradores de imóveis: Ação de Despejo por falta de pagamento com pedido liminar em 15 dias, cobrança e execução de débitos locatícios e penhora de fiadores."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.andradeflorio.com.br/despejo/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Como funciona o despejo liminar em 15 dias para o proprietário?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O artigo 59, § 1º, IX da Lei do Inquilinato (Lei nº 8.245/1991) autoriza o juiz a conceder ordem liminar para desocupação voluntária do imóvel em 15 dias, sem audiência prévia com o inquilino, nos contratos desprovidos de garantia ou com garantias já exauridas pelo montante da dívida."
              }
            },
            {
              "@type": "Question",
              "name": "O inquilino parou de pagar condomínio e IPTU. Quem responde pela dívida perante o condomínio e a prefeitura?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Perante o condomínio e o Fisco municipal, a obrigação é 'propter rem' e recai sobre o proprietário do imóvel, que corre risco de sofrer penhora do próprio bem caso o condomínio execute. Por isso, a ação de despejo cumulada com cobrança executiva deve ser proposta com a máxima celeridade para estancar essa sangria financeira."
              }
            },
            {
              "@type": "Question",
              "name": "Posso cobrar todos os aluguéis atrasados e penhorar bens do fiador no mesmo processo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim! O artigo 62, I da Lei 8.245/91 autoriza expressamente a cumulação do pedido de rescisão e despejo com a cobrança executiva dos aluguéis e encargos. O fiador pode ser incluído no polo passivo e, conforme jurisprudência pacífica do STJ (Súmula 549) e do STF, o seu imóvel residencial pode ser penhorado para quitar o débito locatício."
              }
            },
            {
              "@type": "Question",
              "name": "Preciso depositar 3 meses de aluguel como caução judicial para ter a liminar de despejo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Embora a lei preveja caução de 3 meses, nossos especialistas utilizam precedentes modernos do Tribunal de Justiça de São Paulo (TJSP) que admitem a oferta dos próprios aluguéis vencidos e não pagos pelo inquilino como caução idônea, desonerando o proprietário de desembolsos desnecessários."
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(jsonLdScript);

    return () => {
      document.title = originalTitle;
      if (metaDesc) metaDesc.setAttribute('content', originalDesc);
      if (metaKeywords) metaKeywords.setAttribute('content', originalKeywords);
      if (canonicalLink) {
        if (createdCanonical) {
          canonicalLink.remove();
        } else {
          canonicalLink.setAttribute('href', originalCanonical || '');
        }
      }
      const existingScript = document.getElementById('schema-despejo-proprietario-seo');
      if (existingScript) existingScript.remove();
    };
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleWhatsAppAction = (customMsg = '') => {
    const defaultMsg = 'Olá, Dra. Libia. Sou proprietário/locador e preciso iniciar uma Ação de Despejo por falta de pagamento com urgência para retomar meu imóvel e cobrar os aluguéis atrasados.';
    handleWhatsAppClick('nlxZCPiY6qAcEMzlgIgD', customMsg || defaultMsg);
  };

  const handleSimuladorSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá, Dra. Libia! Simulei meu prejuízo de locação no site da Andrade & Florio:
- Aluguel Mensal: R$ ${Number(aluguelValor).toLocaleString('pt-BR')}
- Condomínio + IPTU: R$ ${Number(condominioIptu).toLocaleString('pt-BR')}
- Tempo em Atraso: ${mesesAtraso} meses
- Prejuízo Total Estimado: R$ ${prejuizoTotal.toLocaleString('pt-BR')}
- Garantia no Contrato: ${tipoGarantia}

Preciso do apoio do escritório para entrar com a Ação de Despejo e estancar esse prejuízo imediatamente.`;
    handleWhatsAppClick('nlxZCPiY6qAcEMzlgIgD', msg);
  };

  return (
    <>
      <style>{customPageStyles}</style>
      <Navbar />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '3.5rem', alignItems: 'center' }}>
            {/* Coluna de Texto Principal */}
            <div>
              <div className="despejo-badge">
                <KeyRound size={16} /> Assessoria Exclusiva para Proprietários & Locadores
              </div>
              <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)', lineHeight: 1.15 }}>
                Ação de Despejo por Falta de Pagamento: Retome seu Imóvel e Estanque o Prejuízo.
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.2rem', lineHeight: 1.7 }}>
                Cada mês de inércia é mais condomínio e IPTU acumulando no <strong>seu nome</strong>. Atuamos com pedido de <strong>liminar em até 15 dias</strong> para desocupação do imóvel e execução imediata de bens do inquilino e fiadores na Justiça de São Paulo.
              </p>

              {/* Botão de Alta Conversão */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'flex-start', marginBottom: '2.2rem' }}>
                <button
                  onClick={() => handleWhatsAppAction()}
                  className="btn-gold"
                  style={{
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.1rem 2.2rem',
                    fontSize: '1.08rem',
                    fontWeight: 700
                  }}
                >
                  <Send size={19} />
                  Retomar Meu Imóvel: Falar com Especialista
                </button>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  ✓ Plantão direto com a equipe jurídica da Dra. Libia Florio · Atuação imediata no TJSP
                </span>
              </div>

              {/* Prova de Autoridade / Métricas Legais */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', borderTop: '1px solid var(--bg-surface-light)', paddingTop: '1.75rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-gold)' }}>Art. 59 § 1º IX</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Liminar de Despejo em 15 Dias</div>
                </div>
                <div style={{ width: '1px', height: '35px', background: 'var(--bg-surface-light)' }}></div>
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>Súmula 549 STJ</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Penhora do Imóvel do Fiador</div>
                </div>
                <div style={{ width: '1px', height: '35px', background: 'var(--bg-surface-light)' }}></div>
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>Mestre USP</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Coordenação Dra. Libia Florio</div>
                </div>
              </div>
            </div>

            {/* Imagem de Autoridade / Card Lateral */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '100%',
                  height: '100%',
                  border: '1px solid var(--accent-gold)',
                  zIndex: 0
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-surface-light)',
                  padding: '2.5rem',
                  borderRadius: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <img
                    src="/dra-libia.png"
                    alt="Dra. Libia Florio - Advogada Especialista em Direito Imobiliário"
                    style={{ width: '75px', height: '75px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-gold)' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>Dra. Libia Florio</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--accent-gold)' }}>Mestre pela Faculdade de Direito da USP</p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Especialista em Direito Imobiliário e Notarial</p>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.35)', padding: '1.25rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.65 }}>
                    "Esperar a boa vontade do inquilino inadimplente é o maior erro do locador. As dívidas de condomínio e IPTU são obrigações propter rem que recaem sobre o proprietário. A única forma de salvar o imóvel é o despejo liminar ágil combinado com o bloqueio patrimonial dos devedores."
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-gold)" /> Mandado de desocupação com força policial se necessário
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-gold)" /> Penhora eletrônica em contas correntes (SISBAJUD)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-gold)" /> Notificação extrajudicial premonitória prévia formal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerta de Urgência: O Risco Real para o Proprietário */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--bg-surface-light)', borderBottom: '1px solid var(--bg-surface-light)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            <div className="despejo-badge" style={{ borderColor: '#ff4d4d', color: '#ff6b6b', background: 'rgba(255,77,77,0.08)' }}>
              <AlertOctagon size={16} /> Risco Patrimonial Imediato
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', marginBottom: '1rem' }}>
              Por que você não pode adiar a Ação de Despejo?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              O inquilino sem dinheiro não sofre as consequências financeiras finais. A lei brasileira responsabiliza diretamente o patrimônio de quem é dono do imóvel.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem' }}>
            <div className="action-card">
              <div style={{ color: '#ff6b6b', marginBottom: '1.2rem' }}>
                <TrendingDown size={36} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>1. Dívida de Condomínio Penhora o Imóvel</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                A taxa de condomínio é dívida <em>propter rem</em>. Se o inquilino parar de pagar, o condomínio processará você e o próprio apartamento ou casa pode ir a leilão para quitar o condomínio atrasado.
              </p>
            </div>

            <div className="action-card">
              <div style={{ color: '#ff6b6b', marginBottom: '1.2rem' }}>
                <Building2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>2. Execução Fiscal de IPTU na Prefeitura</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                O IPTU é cobrado da matrícula do imóvel. Quando o inquilino deixa de pagar, o seu CPF é protestado na dívida ativa do município e as suas contas bancárias particulares sofrem risco de bloqueio judicial.
              </p>
            </div>

            <div className="action-card">
              <div style={{ color: '#ff6b6b', marginBottom: '1.2rem' }}>
                <Clock size={36} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>3. Deterioração e Depreciação do Bem</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Quem não tem dinheiro para pagar o aluguel tampouco mantém o imóvel conservado. A demora para retomar a posse resulta em reformas pesadas de pisos, hidráulica e elétrica no momento da vistoria de saída.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* As 4 Armas Jurídicas da Andrade & Florio para Locadores */}
      <section className="section" style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div className="despejo-badge">
              <Gavel size={16} /> Estratégia Jurídica de Ataque
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>
              Como recuperamos seu imóvel e seu dinheiro
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Processamos a desocupação forçada e a cobrança dos aluguéis atrasados utilizando todo o arsenal da Lei do Inquilinato (Lei 8.245/91) e do Código de Processo Civil.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="action-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                <KeyRound size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Liminar em 15 Dias (Art. 59 § 1º IX)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                Para contratos sem garantia ou com garantia esgotada, pleiteamos ordem de desocupação imediata inaudita altera parte, sem ter que aguardar a contestação do inquilino.
              </p>
            </div>

            <div className="action-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                <DollarSign size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Execução Cumulada com Bloqueio</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                Cobramos todos os aluguéis vencidos, condomínios, IPTU, multas contratuais e contas de consumo, ativando penhoras via SISBAJUD (contas) e RENAJUD (veículos).
              </p>
            </div>

            <div className="action-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                <Shield size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Penhora de Bens do Fiador</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                Se o inquilino estiver insolvente, acionamos solidariamente o fiador. Pela Súmula 549 do STJ, até mesmo o imóvel residencial do fiador responde pela dívida do aluguel.
              </p>
            </div>

            <div className="action-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                <FileText size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Caução Idônea no Próprio Crédito</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                Construímos tese no TJSP para utilizar os próprios meses de aluguel não pagos como caução judicial para a liminar, evitando que você precise tirar dinheiro do bolso para depositar em juízo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador Interativo: Calcule o Rombo da Inadimplência */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--bg-surface-light)', borderBottom: '1px solid var(--bg-surface-light)', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="calc-container">
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div className="despejo-badge" style={{ marginBottom: '1rem' }}>
                  <TrendingDown size={16} /> Calculadora de Impacto Financeiro
                </div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginBottom: '0.75rem' }}>
                  Simulador de Prejuízo do Locador
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                  Veja quanto a inércia em entrar com a ação de despejo está tirando do seu patrimônio:
                </p>
              </div>

              <form onSubmit={handleSimuladorSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
                  {/* Valor Aluguel */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      Valor Mensal do Aluguel (R$)
                    </label>
                    <input
                      type="number"
                      value={aluguelValor}
                      onChange={(e) => setAluguelValor(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '6px',
                        border: '1px solid var(--bg-surface-light)',
                        background: 'var(--bg-color)',
                        color: 'var(--text-main)',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  {/* Condomínio + IPTU */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      Condomínio + IPTU Mensal (R$)
                    </label>
                    <input
                      type="number"
                      value={condominioIptu}
                      onChange={(e) => setCondominioIptu(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '6px',
                        border: '1px solid var(--bg-surface-light)',
                        background: 'var(--bg-color)',
                        color: 'var(--text-main)',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  {/* Meses em Atraso */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      Meses em Atraso
                    </label>
                    <select
                      value={mesesAtraso}
                      onChange={(e) => setMesesAtraso(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '6px',
                        border: '1px solid var(--bg-surface-light)',
                        background: 'var(--bg-color)',
                        color: 'var(--text-main)',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    >
                      <option value="1">1 mês</option>
                      <option value="2">2 meses</option>
                      <option value="3">3 meses</option>
                      <option value="4">4 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses (crítico)</option>
                    </select>
                  </div>
                </div>

                {/* Tipo de Garantia */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Qual a garantia do contrato de locação?
                  </label>
                  <select
                    value={tipoGarantia}
                    onChange={(e) => setTipoGarantia(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      borderRadius: '6px',
                      border: '1px solid var(--bg-surface-light)',
                      background: 'var(--bg-color)',
                      color: 'var(--text-main)',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="sem-garantia">Sem garantia (Direito a Liminar em 15 Dias - Art. 59 § 1º IX)</option>
                    <option value="fiador">Fiador (Com possibilidade de penhora do imóvel residencial do fiador)</option>
                    <option value="caucao-dinheiro">Caução em dinheiro (Débito já ultrapassou os 3 meses de caução)</option>
                    <option value="seguro-fianca">Seguro-Fiança ou Título de Capitalização</option>
                    <option value="verbal">Contrato verbal / Sem formalização escrita</option>
                  </select>
                </div>

                {/* Resultado do Rombo */}
                <div style={{ background: 'rgba(255, 77, 77, 0.08)', border: '1px solid rgba(255, 77, 77, 0.35)', borderRadius: '8px', padding: '1.75rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Sangria Mensal</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                        R$ {perdaMensal.toLocaleString('pt-BR')} / mês
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Prejuízo Acumulado Total</div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ff6b6b', marginTop: '0.2rem' }}>
                        R$ {prejuizoTotal.toLocaleString('pt-BR')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão de Envio */}
                <button
                  type="submit"
                  className="btn-gold"
                  style={{
                    border: 'none',
                    cursor: 'pointer',
                    padding: '1.15rem',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <Send size={18} />
                  Estancar Este Prejuízo: Iniciar Despejo no WhatsApp
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  ✓ Dados enviados diretamente para a análise jurídica da Dra. Libia Florio
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo da Retomada: Do Protocolo à Chave na Mão */}
      <section className="section" style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div className="despejo-badge">
                <Clock size={16} /> Fases do Procedimento
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: 1.25 }}>
                Como o escritório conduz a retomada da sua posse?
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Não perdemos tempo com negociações infrutíferas de quem já comprovou que não vai pagar. Seguimos o rito processual mais agressivo previsto na lei:
              </p>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                  <Shield size={22} />
                  <strong style={{ fontSize: '1.05rem' }}>Vistoria e Imissão Forçada na Posse</strong>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Acompanhamos o oficial de justiça com chaveiro e força policial caso o locatário se recuse a sair, lavrando auto circunstanciado de constatação para certificar danos físicos causados ao imóvel.
                </p>
              </div>
            </div>

            {/* Steps Timeline */}
            <div>
              <div className="timeline-step">
                <div className="timeline-dot"></div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '0.3rem' }}>1. Notificação Premonitória Estratégica</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Constituição formal em mora por Cartório ou via extrajudicial imediata, fixando o marco temporal da má-fé e instruindo o pedido liminar em juízo.
                </p>
              </div>

              <div className="timeline-step">
                <div className="timeline-dot"></div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '0.3rem' }}>2. Distribuição da Ação com Pedido de Liminar</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Protocolo eletrônico no Tribunal de Justiça de São Paulo exigindo a expedição do mandado de desocupação em 15 dias sem necessidade de esperar o réu se manifestar.
                </p>
              </div>

              <div className="timeline-step">
                <div className="timeline-dot"></div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '0.3rem' }}>3. Cumprimento do Mandado de Despejo</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Intimação do ocupante pelo oficial de justiça para entrega voluntária das chaves sob pena de desocupação compulsória com imissão de posse do proprietário.
                </p>
              </div>

              <div className="timeline-step">
                <div className="timeline-dot"></div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '0.3rem' }}>4. Penhora e Bloqueio de Bens (Execução)</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Imóvel recuperado e colocado para nova locação. Em paralelo, rastreamento via SISBAJUD e RENAJUD para receber cada centavo de aluguel e encargos devidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes (FAQ) Exclusivo para Proprietários */}
      <section className="section" style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--bg-surface-light)', borderBottom: '1px solid var(--bg-surface-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="despejo-badge">
                <HelpCircle size={16} /> Respostas aos Locadores
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', marginBottom: '0.75rem' }}>
                Perguntas Frequentes de Proprietários
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                Esclarecimentos técnicos fundamentados na Lei nº 8.245/1991 e nas decisões recentes do TJSP.
              </p>
            </div>

            <div>
              {/* FAQ 1 */}
              <div className="faq-item-despejo" onClick={() => toggleFaq(0)}>
                <div className="faq-question-despejo">
                  <span>Com quantos meses de aluguel atrasado já posso entrar com a ação de despejo?</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === 0 ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: 'var(--accent-gold)'
                    }}
                  />
                </div>
                {openFaq === 0 && (
                  <div className="faq-answer-despejo">
                    Legalmente, basta <strong>1 dia de atraso</strong> após o vencimento sem pagamento para que o locador já tenha direito de propor a ação de despejo por falta de pagamento (art. 9º, II e III da Lei 8.245/91). Não existe exigência legal de esperar 3 ou 6 meses. Quanto mais rápido o proprietário agir, menor será o prejuízo com condomínio e IPTU acumulados.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="faq-item-despejo" onClick={() => toggleFaq(1)}>
                <div className="faq-question-despejo">
                  <span>Como conseguir a liminar de desocupação em 15 dias sem audiência?</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === 1 ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: 'var(--accent-gold)'
                    }}
                  />
                </div>
                {openFaq === 1 && (
                  <div className="faq-answer-despejo">
                    O artigo 59, § 1º, IX da Lei do Inquilinato garante a concessão de liminar para desocupação em 15 dias quando o contrato está sem garantia (ex: não teve fiador, ou a garantia foi exonerada, ou o valor da dívida ultrapassou a caução prestada). O juiz expede a ordem imediatamente, sem que o réu seja ouvido previamente.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="faq-item-despejo" onClick={() => toggleFaq(2)}>
                <div className="faq-question-despejo">
                  <span>O inquilino pode ser despejado se pagar o aluguel mas deixar de pagar condomínio e IPTU?</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === 2 ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: 'var(--accent-gold)'
                    }}
                  />
                </div>
                {openFaq === 2 && (
                  <div className="faq-answer-despejo">
                    Sim! Os encargos locatícios (condomínio, IPTU, água, luz e gás) são acessórios inseparáveis do aluguel. O inadimplemento de qualquer um desses encargos autoriza a rescisão imediata do contrato e a ação de despejo com cobrança cumulada de todos os débitos em aberto.
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="faq-item-despejo" onClick={() => toggleFaq(3)}>
                <div className="faq-question-despejo">
                  <span>Se o inquilino não tiver dinheiro em conta, como recebo o valor dos aluguéis?</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === 3 ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: 'var(--accent-gold)'
                    }}
                  />
                </div>
                {openFaq === 3 && (
                  <div className="faq-answer-despejo">
                    Na fase de execução, utilizamos ferramentas avançadas de constrição judicial: penhora de veículos via RENAJUD, bloqueio de faturamento de empresas (caso seja pessoa jurídica), penhora de recebíveis de cartão e, prioritariamente, a execução solidária dos bens do fiador. Pela Súmula 549 do STJ, o imóvel residencial do fiador pode ser levado a leilão judicial para pagar os débitos da locação.
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="faq-item-despejo" onClick={() => toggleFaq(4)}>
                <div className="faq-question-despejo">
                  <span>O que acontece se o inquilino danificar o imóvel antes de sair?</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === 4 ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: 'var(--accent-gold)'
                    }}
                  />
                </div>
                {openFaq === 4 && (
                  <div className="faq-answer-despejo">
                    No momento da imissão na posse, o oficial de justiça realiza a constatação do estado do bem. Comparamos o auto com o laudo de vistoria inicial do contrato e incluímos todos os custos de reparo, pintura e substituição de materiais diretamente no pedido indenizatório da execução contra o inquilino e o fiador.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Final de Fechamento: Chamada Direta no WhatsApp */}
      <section className="section" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Não espere seu prejuízo dobrar no próximo mês
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.18rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Cada dia com o imóvel ocupado por quem não paga é um dia a menos de renda no seu bolso e mais dívidas acumulando no seu nome. Fale agora com nossa equipe de especialistas e ingresse com a ação de despejo.
          </p>
          <button
            onClick={() => handleWhatsAppAction('Olá, Dra. Libia. Sou proprietário e preciso iniciar a Ação de Despejo por falta de pagamento imediatamente para retomar meu imóvel.')}
            className="btn-gold"
            style={{
              border: 'none',
              cursor: 'pointer',
              padding: '1.2rem 2.8rem',
              fontSize: '1.12rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <KeyRound size={22} />
            Retomar Meu Imóvel Agora via WhatsApp
          </button>
          <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Atendimento imediato em todo o Estado de São Paulo · Sigilo e agilidade jurídica
          </div>
        </div>
      </section>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
