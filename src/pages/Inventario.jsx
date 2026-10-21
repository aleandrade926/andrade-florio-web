import React, { useState, useEffect } from 'react';
import { Shield, BookOpen, Search, CheckCircle2, Scale, ChevronRight, ChevronDown, Building2, FileText, AlertTriangle, Clock, Landmark, Users } from 'lucide-react';
import { WhatsAppButton, StickyWhatsApp, Footer, Navbar, LinkedinIcon, handleWhatsAppClick } from '../components/Shared';

const b2bCardStyles = `
  .card-b2b {
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    align-items: flex-start;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--accent-gold) !important;
    background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(212,175,55,0.06) 100%);
  }
  .card-b2b-left {
    flex: 0 0 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-b2b-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid rgba(212,175,55,0.25);
    padding-left: 3rem;
  }
  @media (max-width: 768px) {
    .card-b2b {
      flex-direction: column;
      gap: 2rem;
    }
    .card-b2b-right {
      border-left: none;
      border-top: 1px solid rgba(212,175,55,0.25);
      padding-left: 0;
      padding-top: 2rem;
    }
    .card-b2b-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .card-b2b-label {
      font-size: 0.6rem !important;
      letter-spacing: 1px !important;
    }
  }
  .card-b2b-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }
  .card-b2b-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--accent-gold);
    margin-bottom: 1.75rem;
  }
  .faq-item {
    border-bottom: 1px solid var(--bg-surface-light);
    padding: 1.5rem 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-main);
  }
  .faq-answer {
    margin-top: 1rem;
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.7;
  }
`;

export default function InventarioPage() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleWhatsAppCustom = (msg) => {
    handleWhatsAppClick('nlxZCPiY6qAcEMzlgIgD', msg);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Management
    const originalTitle = document.title;
    document.title = "Advogado Especialista em Inventário em São Paulo | Extrajudicial e Judicial | Dra. Libia Florio";

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Advocacia especialista em Inventário Extrajudicial em Cartório e Judicial em São Paulo. Desbloqueie imóveis e heranças, evite multas de ITCMD e garanta partilha ágil. Dra. Libia Florio, Mestre pela USP.');

    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const originalKeywords = metaKeywords ? metaKeywords.getAttribute('content') : '';
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'advogado inventario sp, advogado especialista em inventario, inventario extrajudicial cartorio, inventario judicial sp, partilha de bens heranca, multa itcmd 60 dias prazo inventario, regularizacao imoveis espolio, escritorio advocacia inventario sao paulo');

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
    canonicalLink.setAttribute('href', 'https://www.andradeflorio.com.br/inventario');

    // JSON-LD Structured Data (LegalService & FAQPage Schema for Google Ads & Rich Snippets)
    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.id = 'schema-inventario-seo';
    jsonLdScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LegalService",
          "@id": "https://www.andradeflorio.com.br/#legalservice",
          "name": "Andrade & Florio Advocacia - Inventários e Partilha de Bens",
          "url": "https://www.andradeflorio.com.br/inventario",
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
            "jobTitle": "Advogada Especialista em Direito Notarial, Registral e Sucessões",
            "alumniOf": "Universidade de São Paulo (USP)"
          },
          "areaServed": "São Paulo, SP e todo o Brasil (via Cartório Digital e PJe)",
          "description": "Assessoria jurídica de excelência em Inventário Extrajudicial em Cartório, Inventário Judicial, Planejamento Sucessório e Regularização de Imóveis do Espólio."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.andradeflorio.com.br/inventario/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qual é o prazo legal para abrir o inventário e evitar multas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O prazo legal pelo Código de Processo Civil (Art. 611) é de 60 dias contados a partir da data do falecimento. Caso o inventário não seja iniciado dentro desse período, a Secretaria da Fazenda do Estado de São Paulo aplica multa sobre o valor do imposto ITCMD, além de juros de mora."
              }
            },
            {
              "@type": "Question",
              "name": "Quando é possível realizar o inventário extrajudicial em cartório?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O inventário extrajudicial pode ser realizado diretamente em Cartório de Notas quando todos os herdeiros são maiores, capazes e estão em pleno acordo quanto à partilha. Essa via é expressamente mais rápida, sendo concluída em semanas sem a necessidade de processo judicial."
              }
            },
            {
              "@type": "Question",
              "name": "É possível vender um imóvel herdado antes do término do inventário?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. É possível requerer um Alvará Judicial fundamentado ou formalizar cessão de direitos hereditários para que um imóvel seja vendido antes da partilha final, viabilizando o custeio dos impostos (ITCMD) e das taxas do próprio inventário."
              }
            },
            {
              "@type": "Question",
              "name": "O que acontece se houver testamento ou herdeiro menor de idade?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Havendo testamento ou herdeiros menores/incapazes, o procedimento tradicionalmente ocorre pela via judicial com participação do Ministério Público. Contudo, em São Paulo, com autorização judicial prévia ou sob as recentes normativas das corregedorias, já é viável em certos casos a lavratura extrajudicial com homologação célere."
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
      const existingScript = document.getElementById('schema-inventario-seo');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <>
      <style>{b2bCardStyles}</style>
      <Navbar />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '4rem', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Texto */}
            <div style={{ paddingRight: '2rem' }}>
              <div style={{ 
                display: 'inline-block', 
                padding: '0.35rem 1.1rem', 
                border: '1px solid var(--accent-gold)', 
                borderRadius: '50px',
                color: 'var(--accent-gold)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}>
                Direito das Sucessões · São Paulo
              </div>
              <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', lineHeight: 1.2 }}>
                Inventário e Partilha de Bens: Desbloqueie o patrimônio com agilidade e economia fiscal.
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Evite multas de até 20% no ITCMD e disputas familiares desgastantes. Realizamos inventários extrajudiciais em cartório e processos judiciais com a autoridade de quem é <strong>Mestre pela Faculdade de Direito da USP</strong> e especialista em Direito Notarial e Registral.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                <button 
                  className="btn-gold"
                  onClick={() => handleWhatsAppCustom('Olá, gostaria de falar com a equipe da Dra. Libia para analisar a abertura de um inventário e evitar multas.')}
                  style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontFamily: 'inherit', fontSize: '1.05rem', gap: '0.5rem', padding: '1rem 2rem' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Agendar Análise do Inventário
                </button>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  ✓ Atendimento sigiloso e direto com a equipe jurídica especializada
                </span>
              </div>
            </div>

            {/* Imagem */}
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', top: '-20px', right: '-20px', width: '100%', height: '100%', 
                border: '1px solid var(--accent-gold)', zIndex: 0 
              }}></div>
              <img 
                src="/dra-libia.png" 
                alt="Dra. Libia Florio - Advogada Especialista em Inventários e Sucessões" 
                style={{ position: 'relative', zIndex: 1, objectFit: 'cover', width: '100%', height: 'auto', border: '1px solid var(--bg-surface-light)' }} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                display: 'none', position: 'relative', zIndex: 1, width: '100%', aspectRatio: '3/4',
                backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)',
                alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-muted)'
              }}>
                <span style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>[ Dra. Libia Florio ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Gancho (Dor e Fundo de Funil: Multa ITCMD e Bloqueio) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <AlertTriangle size={42} color="var(--accent-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2.2rem' }}>
              O tempo é o maior inimigo do patrimônio herdado.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem' }}>
              A perda de um familiar traz dor emocional, mas a inércia burocrática gera prejuízos financeiros severos e bloqueios judiciais imediatos.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #ef4444' }}>
                <Clock size={28} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    A Multa dos 60 Dias (Art. 611 do CPC e Fazenda Estadual)
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    O inventário deve ser aberto em até 60 dias da data do óbito. Em São Paulo, o atraso acarreta <strong>multa automática de 10% a 20%</strong> sobre o valor do imposto estadual (ITCMD), além de juros e correção monetária.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid var(--accent-gold)' }}>
                <Landmark size={28} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Contas Bancárias e Imóveis Travados
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Sem o inventário formalizado, os herdeiros não podem movimentar saldos bancários, receber aluguéis ou vender imóveis para terceiros. O patrimônio fica paralisado enquanto IPTU, condomínios e custos de manutenção continuam vencendo.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #10b981' }}>
                <CheckCircle2 size={28} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    A Solução em Cartório: Rápida, Amigável e Econômica
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Havendo acordo entre os herdeiros, realizamos o <strong>Inventário Extrajudicial diretamente em Cartório de Notas</strong>. Em questão de semanas — e não de anos —, a escritura de partilha é lavrada e os bens são liberados de imediato.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <button 
                className="btn-outline"
                onClick={() => handleWhatsAppCustom('Olá, gostaria de entender como iniciar o inventário no cartório para evitar o prazo de multa do ITCMD.')}
                style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontFamily: 'inherit', fontSize: '1.05rem', gap: '0.5rem', padding: '1rem 2rem' }}
              >
                Evitar Multas e Desbloquear Bens Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços Estratégicos (SEO Fundo de Funil) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Soluções Jurídicas em Inventários e Sucessões</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
              Atuamos com profundidade técnica e celeridade para destravar a partilha e proteger o patrimônio da família contra ineficiências fiscais e litígios.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: <FileText size={32} color="var(--accent-gold)" />,
                title: "Inventário Extrajudicial em Cartório",
                desc: "Procedimento célere realizado diretamente em Tabelionato de Notas via escritura pública. Ideal para famílias com herdeiros maiores, capazes e em acordo mútuo, eliminando a lentidão judicial.",
              },
              {
                icon: <Scale size={32} color="var(--accent-gold)" />,
                title: "Inventário Judicial e Litigioso",
                desc: "Condução estratégica quando há herdeiros menores, testamento deixado ou divergências na partilha. Defendemos os seus direitos com equilíbrio para evitar processos que se arrastem por décadas.",
              },
              {
                icon: <Landmark size={32} color="var(--accent-gold)" />,
                title: "Planejamento Tributário do ITCMD",
                desc: "Estruturação fiscal da partilha para assegurar a menor alíquota legalmente aplicável, evitando cobranças indevidas de ganho de capital ou autuações abusivas da Secretaria da Fazenda.",
              },
              {
                icon: <CheckCircle2 size={32} color="var(--accent-gold)" />,
                title: "Alvarás Judiciais e Liberação de Valores",
                desc: "Requerimento ágil para saque de contas bancárias, saldos de FGTS, previdência privada ou autorização para venda de imóvel do espólio para custear as despesas do próprio inventário.",
              },
              {
                icon: <Building2 size={32} color="var(--accent-gold)" />,
                title: "Regularização de Imóveis do Espólio",
                desc: "Saneamento de pendências imobiliárias na herança: contratos de gaveta, ausência de habite-se, cancelamento de ônus hipotecários e retificação de matrículas para viabilizar a transferência legal.",
              },
              {
                icon: <Users size={32} color="var(--accent-gold)" />,
                title: "Sobrepartilha e Bens Omitidos",
                desc: "Abertura de sobrepartilha para regularizar bens que não foram declarados no inventário original, foram descobertos posteriormente ou estavam sujeitos a litígio prévio.",
              },
            ].map((srv, idx) => (
              <div key={idx} className="card-surface" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>{srv.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{srv.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CARD B2B / CORPORATIVO — SUCESSÃO EMPRESARIAL */}
          <div className="card-surface card-b2b">
            {/* LADO ESQUERDO */}
            <div className="card-b2b-left">
              <div>
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase', color: 'var(--accent-gold)',
                  border: '1px solid var(--accent-gold)', padding: '0.2rem 0.7rem',
                  borderRadius: '2px', marginBottom: '1.5rem',
                }}>Corporativo & Holding</div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <Building2 size={36} color="var(--accent-gold)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', lineHeight: '1.35', marginBottom: '0.4rem' }}>
                  Sucessão Empresarial & Holding Familiar
                </h3>
                <p className="card-b2b-label">
                  Quotas Societárias · Governança · Blindagem Tributária
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Quando o espólio envolve empresas ativas e quotas societárias, um inventário mal conduzido pode paralisar a folha de pagamento, bloquear contas corporativas e levar o negócio à ruína. Atuamos com engenharia societária e tributária para assegurar a continuidade da empresa sem atritos entre sócios e herdeiros.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppCustom('Olá, gostaria de falar sobre sucessão empresarial e quotas de empresas no inventário.')}
                style={{
                  background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.95rem',
                  textDecoration: 'none', letterSpacing: '0.5px', transition: 'opacity 0.2s ease',
                  fontFamily: 'inherit'
                }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}
              >
                Consultar Sucessão Empresarial <ChevronRight size={18} />
              </button>
            </div>

            {/* LADO DIREITO */}
            <div className="card-b2b-right">
              <div className="card-b2b-grid">
                {[
                  {
                    label: 'Societário',
                    items: ['Transição de quotas', 'Acordo de sócios e herdeiros', 'Apuração de haveres', 'Alteração contratual ágil'],
                  },
                  {
                    label: 'Tributário',
                    items: ['ITCMD sobre valor patrimonial', 'Prevenção de IRPF sobre ganho de capital', 'Regimes de Holding', 'Cisão estratégica'],
                  },
                  {
                    label: 'Operacional',
                    items: ['Preservação do caixa', 'Nomeação de administrador provisório', 'Liberação de contas PJ', 'Continuidade operacional'],
                  },
                ].map(({ label, items }) => (
                  <div key={label} style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px',
                      textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem',
                      display: 'flex', alignItems: 'center',
                    }}>{label}</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {items.map(i => (
                        <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.4rem', lineHeight: '1.5' }}>
                          <span style={{ color: 'var(--accent-gold)', flexShrink: 0, fontWeight: 700 }}>—</span>{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade (Bio Boutique & Formação de Elite) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                 <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Dra. Libia Florio</h2>
                 <a 
                   href="https://www.linkedin.com/in/libiaflorio/" target="_blank" rel="noopener noreferrer" 
                   style={{ color: 'var(--accent-gold)', display: 'flex', transition: 'opacity 0.2s ease' }} 
                   onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
                   onMouseOut={e => e.currentTarget.style.opacity = '1'}
                   aria-label="LinkedIn Dra. Libia Florio"
                 >
                   <LinkedinIcon size={32} />
                 </a>
               </div>
               <p style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '2rem' }}>
                 Advogada Especialista em Direito Notarial, Registral e Sucessões
               </p>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                 A Dra. Libia Cristiane Correa e Andrade e Florio é <strong>Mestre em Direito Comercial pela Faculdade de Direito da Universidade de São Paulo (USP)</strong> e pós-graduada especialista em <strong>Direito Notarial e Registral</strong> pela Legale Educacional.
               </p>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                 Com mais de 30 anos de atuação no mercado jurídico paulistano e profundo conhecimento dos procedimentos perante os Cartórios de Notas e Registros de Imóveis, é Membro Efetivo da Comissão Especial de Direito Imobiliário da OAB/SP. Sua prática é pautada na discrição, rigor técnico e foco em resultados concretos para a tranquilidade dos herdeiros.
               </p>
               
               <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', borderTop: '1px solid var(--bg-surface-light)', paddingTop: '2rem' }}>
                  <div>
                    <strong style={{ fontSize: '1.5rem', color: 'var(--text-main)', display: 'block' }}>USP</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mestrado em Direito</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: '1.5rem', color: 'var(--text-main)', display: 'block' }}>30+</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Anos de Prática Jurídica</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: '1.5rem', color: 'var(--text-main)', display: 'block' }}>OAB/SP</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Membro de Comissões Especiais</span>
                  </div>
               </div>
            </div>

            <div style={{ order: 1 }}>
               {/* Diploma USP */}
               <div 
                 style={{ 
                   position: 'relative', padding: '1rem', background: 'var(--bg-surface-light)', 
                   border: '1px solid var(--accent-gold)', cursor: 'pointer', overflow: 'hidden'
                 }}
                 onClick={() => setIsDiplomaOpen(true)}
                 onMouseOver={e => e.currentTarget.lastChild.style.opacity = '1'}
                 onMouseOut={e => e.currentTarget.lastChild.style.opacity = '0'}
               >
                 <img 
                   src="/diploma-usp.jpg" 
                   alt="Diploma de Mestrado da USP - Dra. Libia Florio" 
                   style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--bg-surface)' }}
                 />
                 <div style={{
                   position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                   background: 'rgba(17, 17, 17, 0.7)', display: 'flex', flexDirection: 'column',
                   alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none'
                 }}>
                   <Search size={40} color="var(--accent-gold)" style={{ marginBottom: '0.5rem' }} />
                   <span style={{ color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Ampliar</span>
                 </div>
               </div>
               <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
                 Mestrado em Direito Comercial - Universidade de São Paulo (USP)
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção FAQ (Perguntas Frequentes - Essencial para SEO & Fundo de Funil) */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Dúvidas Frequentes sobre Inventários</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Respostas claras e transparentes para as perguntas mais comuns de quem precisa abrir inventário.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                q: "Qual é o prazo exato para abrir o inventário sem pagar multa?",
                a: "O prazo legal determinado pelo Artigo 611 do Código de Processo Civil é de 60 (sessenta) dias corridos a partir da data do falecimento. Caso o inventário não seja iniciado nesse intervalo, o Estado de São Paulo aplica multa de 10% sobre o ITCMD (podendo chegar a 20% caso ultrapasse 180 dias), além de juros de mora. Iniciar os procedimentos a tempo preserva o patrimônio familiar."
              },
              {
                q: "Qual a diferença prática entre o Inventário em Cartório e o Judicial?",
                a: "O Inventário Extrajudicial (em Cartório) é formalizado por Escritura Pública e não passa pela fila do Poder Judiciário. Ele pode ser concluído em poucas semanas, desde que todos os herdeiros sejam maiores, capazes e estejam de acordo com a partilha. Já o Inventário Judicial é obrigatório quando há divergências entre os herdeiros, testamento formal ou filhos menores/incapazes."
              },
              {
                q: "É possível vender um imóvel da herança antes de o inventário acabar?",
                a: "Sim. Por meio de um requerimento de Alvará Judicial fundamentado ou formalização de Cessão de Direitos Hereditários, os herdeiros podem vender um bem para arrecadar os valores necessários para custear os impostos (ITCMD), custas e despesas do processo, sem precisarem desembolsar recursos próprios de imediato."
              },
              {
                q: "O que acontece com as dívidas deixadas pelo falecido?",
                a: "Pela legislação brasileira, as dívidas do falecido não são transferidas para o patrimônio pessoal dos herdeiros. As dívidas são pagas exclusivamente com as forças da herança (bens do espólio). Se as dívidas superarem o valor total dos bens, os herdeiros não respondem com seu próprio bolso."
              },
              {
                q: "Quanto custa um inventário e quais são as principais despesas?",
                a: "Os custos de um inventário envolvem: (1) O imposto sobre herança (ITCMD), cuja alíquota em São Paulo é de 4%; (2) As custas de cartório ou judiciais, tabeladas por lei com base no valor dos bens; (3) As certidões e averbações de registro de imóveis; e (4) Os honorários advocatícios. Nossa assessoria realiza o cálculo prévio exato para que a família tenha total previsibilidade orçamentária."
              },
              {
                q: "Moro fora de São Paulo ou no exterior: posso participar do inventário?",
                a: "Sim. Com a plataforma eletrônica dos cartórios (e-Notariado) e o processo judicial 100% digital, todo o procedimento de inventário e partilha pode ser assinado remotamente com certificado digital ICP-Brasil, sem a necessidade de deslocamento físico ou comparecimento presencial."
              }
            ].map((item, idx) => (
              <div key={idx} className="faq-item" onClick={() => toggleFaq(idx)}>
                <div className="faq-question">
                  <span>{item.q}</span>
                  <ChevronDown 
                    size={20} 
                    color="var(--accent-gold)" 
                    style={{ 
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                      marginLeft: '1rem'
                    }} 
                  />
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Tem uma situação específica com imóveis, herdeiros ou empresas da família?
            </p>
            <button 
              className="btn-gold"
              onClick={() => handleWhatsAppCustom('Olá, tenho uma dúvida sobre meu caso de inventário e gostaria de tirar uma dúvida com a especialista.')}
              style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontFamily: 'inherit', fontSize: '1rem', gap: '0.5rem' }}
            >
              Tirar Dúvida Diretamente no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--bg-surface-light)', borderTop: '1px solid var(--bg-surface-light)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
           <h2 style={{ marginBottom: '1.5rem' }}>Proteja a harmonia e o legado da sua família.</h2>
           <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', margin: '0 auto 2.5rem auto', lineHeight: '1.7' }}>
             Não permita que o prazo legal se esgote ou que o patrimônio acumulado por uma vida inteira seja corroído por multas e desgastes evitáveis. Conduza o inventário com agilidade, discrição e excelência jurídica.
           </p>
           <button 
             className="btn-gold"
             onClick={() => handleWhatsAppCustom('Olá, gostaria de agendar uma consulta sobre inventário com a Dra. Libia Florio.')}
             style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontFamily: 'inherit', fontSize: '1.1rem', gap: '0.5rem', padding: '1.1rem 2.2rem' }}
           >
             Falar Agora com a Especialista em Inventário
           </button>
        </div>
      </section>

      <Footer />
      <StickyWhatsApp />

      {/* Lightbox / Modal do Diploma */}
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
              style={{
                position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', 
                color: 'var(--accent-gold)', fontSize: '3rem', cursor: 'pointer', lineHeight: '1'
              }}
              aria-label="Fechar"
            >
              &times;
            </button>
            <img 
              src="/diploma-usp.jpg" alt="Diploma USP em tamanho original" 
              style={{ width: '100%', height: 'auto', border: '2px solid var(--accent-gold)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} 
            />
          </div>
        </div>
      )}
    </>
  );
}
