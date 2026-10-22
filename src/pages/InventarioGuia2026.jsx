import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Shield, Clock, AlertTriangle, FileText, CheckCircle2, 
  HelpCircle, ChevronDown, ChevronRight, Scale, Landmark, Building2, 
  Search, Users, BookOpen, FileCheck, Phone, CheckSquare, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton, StickyWhatsApp, Footer, Navbar, LinkedinIcon, handleWhatsAppClick } from '../components/Shared';

const customStyles = `
  .guia-table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.95rem;
    background-color: var(--bg-surface);
    border: 1px solid var(--bg-surface-light);
    border-radius: 6px;
    overflow: hidden;
  }
  .guia-table th {
    background-color: rgba(212, 175, 55, 0.12);
    color: var(--accent-gold);
    text-align: left;
    padding: 1rem 1.25rem;
    font-weight: 600;
    border-bottom: 1px solid var(--accent-gold);
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
  .guia-table td {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--bg-surface-light);
    color: var(--text-muted);
    line-height: 1.6;
  }
  .guia-table tr:last-child td {
    border-bottom: none;
  }
  .guia-table td strong {
    color: var(--text-main);
  }
  @media (max-width: 768px) {
    .guia-table-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .guia-table {
      min-width: 600px;
    }
  }
  .doc-card {
    background: var(--bg-surface);
    border: 1px solid var(--bg-surface-light);
    border-radius: 6px;
    padding: 1.75rem;
    transition: border-color 0.3s ease;
  }
  .doc-card:hover {
    border-color: var(--accent-gold);
  }
  .doc-card h4 {
    color: var(--accent-gold);
    font-size: 1.15rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .doc-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .doc-list li {
    font-size: 0.92rem;
    color: var(--text-muted);
    padding: 0.45rem 0;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    border-bottom: 1px dashed rgba(255,255,255,0.06);
  }
  .doc-list li:last-child {
    border-bottom: none;
  }
  .faq-accordion-item {
    border-bottom: 1px solid var(--bg-surface-light);
    padding: 1.25rem 0;
    cursor: pointer;
    transition: background 0.2s;
  }
  .faq-accordion-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-main);
  }
  .faq-accordion-a {
    margin-top: 0.9rem;
    color: var(--text-muted);
    font-size: 0.98rem;
    line-height: 1.7;
  }
  .cta-banner-inline {
    background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(212,175,55,0.08) 100%);
    border: 1px solid var(--accent-gold);
    border-radius: 6px;
    padding: 2.5rem;
    margin: 3.5rem 0;
    text-align: center;
  }
`;

export default function InventarioGuia2026Page() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleWhatsApp = (msg) => {
    handleWhatsAppClick('nlxZCPiY6qAcEMzlgIgD', msg);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Management
    const originalTitle = document.title;
    document.title = "Inventário: Guia Completo 2026 | Tipos, Prazos, Custos e Cartório | Dra. Libia Florio (USP)";

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Guia definitivo e atualizado de Inventário em 2026 por Dra. Libia Florio (Mestre USP). Tudo sobre inventário extrajudicial em cartório, judicial, multa de 60 dias do ITCMD, documentos necessários e herança de imóveis irregulares.');

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
    canonicalLink.setAttribute('href', 'https://www.andradeflorio.com.br/artigos/inventario-guia-completo-2026');

    // Schema.org JSON-LD (Article + LegalService + FAQPage)
    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.id = 'schema-inventario-guia-2026';
    jsonLdScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://www.andradeflorio.com.br/artigos/inventario-guia-completo-2026/#article",
          "headline": "Inventário: Guia Completo 2026 - Tipos, Prazos, Custos e Procedimentos em Cartório e Judiciais",
          "description": "Manual completo e prático sobre a sucessão e partilha de bens no Brasil. Descubra como funciona o inventário extrajudicial em cartório, os prazos fatais da multa do ITCMD e como regularizar imóveis do espólio.",
          "author": {
            "@type": "Person",
            "name": "Dra. Libia Cristiane Correa e Andrade e Florio",
            "jobTitle": "Mestre em Direito pela USP e Especialista em Direito Notarial e Registral",
            "url": "https://www.linkedin.com/in/libiaflorio/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Andrade & Florio Advocacia",
            "url": "https://www.andradeflorio.com.br"
          },
          "datePublished": "2026-10-22",
          "dateModified": "2026-10-22",
          "mainEntityOfPage": "https://www.andradeflorio.com.br/artigos/inventario-guia-completo-2026"
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.andradeflorio.com.br/artigos/inventario-guia-completo-2026/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qual é o prazo legal para abrir o inventário e qual a multa por atraso?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O prazo estabelecido pelo Código de Processo Civil (Art. 611) é de 60 dias contados a partir da data do óbito. Em caso de descumprimento, a Secretaria da Fazenda aplica multa progressiva de 10% a 20% sobre o ITCMD, além de juros moratórios."
              }
            },
            {
              "@type": "Question",
              "name": "É possível fazer o inventário sem advogado?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não. Tanto pela via judicial quanto no inventário extrajudicial em cartório (Lei 11.441/2007), a presença e assinatura de advogado legalmente habilitado na OAB é obrigatória por lei."
              }
            },
            {
              "@type": "Question",
              "name": "O que acontece com imóveis sem escritura ou contratos de gaveta?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Os direitos possessórios são transmitidos aos herdeiros e devem ser partilhados no inventário. Posteriormente ou concomitantemente, procede-se à regularização da propriedade definitiva mediante usucapião ou adjudicação compulsória."
              }
            },
            {
              "@type": "Question",
              "name": "Os herdeiros herdam as dívidas do falecido?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não. Os herdeiros respondem pelas dívidas exclusivamente dentro das forças da herança (patrimônio deixado pelo falecido). Se o passivo superar o ativo, o patrimônio pessoal dos herdeiros jamais é atingido."
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
      if (canonicalLink) {
        if (createdCanonical) {
          canonicalLink.remove();
        } else {
          canonicalLink.setAttribute('href', originalCanonical || '');
        }
      }
      const existing = document.getElementById('schema-inventario-guia-2026');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{customStyles}</style>

      {/* Header Fixo Editorial */}
      <header style={{ padding: '1rem 0', borderBottom: '1px solid var(--bg-surface-light)', backgroundColor: 'var(--bg-color)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.9rem' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}>
            <ArrowLeft size={16} /> Voltar ao Início
          </Link>
          <a href="/" aria-label="Andrade e Florio Advogados">
            <img src="/logo-af.png" alt="Andrade e Florio Advogados" style={{ height: '52px', width: 'auto' }} />
          </a>
          <button 
            onClick={() => handleWhatsApp('Olá, estou lendo o Guia de Inventário 2026 e gostaria de tirar uma dúvida com a especialista.')}
            className="btn-gold"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: 'none' }}
          >
            <Phone size={14} /> Falar com Especialista
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main style={{ flexGrow: 1, padding: '4rem 0' }}>
        <article className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Cabeçalho do Artigo */}
          <header style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
            <div style={{ 
              display: 'inline-block',
              padding: '0.35rem 1rem',
              border: '1px solid var(--accent-gold)',
              borderRadius: '50px',
              color: 'var(--accent-gold)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontSize: '0.78rem',
              fontWeight: 700,
              marginBottom: '1.5rem'
            }}>
              Guia Definitivo 2026 • Direito Sucessório e Registral
            </div>

            <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', lineHeight: '1.25', marginBottom: '1.8rem', fontFamily: 'var(--font-heading)' }}>
              Inventário: Guia Completo 2026 – Tipos, Prazos, Custos e Procedimentos em Cartório
            </h1>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
              Um manual prático e aprofundado para herdeiros e famílias. Compreenda as diferenças entre as vias judicial e extrajudicial, como se defender da multa do ITCMD e como destravar patrimônios complexos e imóveis irregulares.
            </p>

            {/* Assinatura do Autor */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.25rem', background: 'var(--bg-surface)', padding: '0.85rem 1.75rem', borderRadius: '50px', border: '1px solid var(--bg-surface-light)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-surface-light)', border: '1px solid var(--accent-gold)', overflow: 'hidden' }}>
                <img src="/dra-libia.png" alt="Dra. Libia Florio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.style.display='none'} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--text-main)', fontSize: '0.95rem' }}>Dra. Libia Cristiane C. Andrade e Florio</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Mestre em Direito pela USP • Membro da Comissão de Dir. Imobiliário da OAB/SP</div>
              </div>
            </div>
          </header>

          {/* Sumário Rápido de Navegação */}
          <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: '6px', borderLeft: '4px solid var(--accent-gold)', marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} color="var(--accent-gold)" /> Índice do Guia Prático
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.6rem', fontSize: '0.92rem' }}>
              <a href="#o-que-e" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>1. O que é o Inventário e Obrigatoriedade</a>
              <a href="#prazo-multa" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>2. Prazo de 60 Dias e a Multa do ITCMD</a>
              <a href="#tabela-comparativa" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>3. Tabela: Judicial vs. Cartório</a>
              <a href="#imoveis-irregulares" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>4. Imóveis Irregulares e Usucapião</a>
              <a href="#situacoes-especiais" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>5. Dívidas, Alvarás e Casos Especiais</a>
              <a href="#checklist-documentos" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>6. Checklist Completo de Documentos</a>
              <a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>7. Perguntas Frequentes (FAQ 15 Dúvidas)</a>
            </div>
          </div>

          {/* Corpo do Artigo */}
          <div style={{ fontSize: '1.12rem', lineHeight: '1.85', color: 'var(--text-muted)' }}>

            {/* SEÇÃO 1: O QUE É O INVENTÁRIO */}
            <section id="o-que-e" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.85rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                1. O que é o Inventário e por que ele é inegociável?
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                O falecimento de um ente querido, além do luto emocional inevitável, inaugura um estado de comunhão forçada sobre todo o acervo patrimonial deixado. Esse conjunto de bens, valores e obrigações recebe o nome técnico de <strong>Espólio</strong>.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                O <strong>Inventário</strong> é o procedimento legal indispensável pelo qual se apura a totalidade do patrimônio do falecido, liquidam-se eventuais passivos e formaliza-se a transferência líquida e individualizada dos bens aos herdeiros legais ou testamentários, mediante a <strong>partilha</strong>.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Sem o inventário formalizado:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.6rem' }}><strong>Imóveis ficam bloqueados:</strong> Nenhum imóvel pode ser vendido regularmente, transferido, financiado ou registrado no Cartório de Registro de Imóveis;</li>
                <li style={{ marginBottom: '0.6rem' }}><strong>Contas e aplicações bancárias são congeladas:</strong> O sistema financeiro retém saldos de contas correntes, poupanças e investimentos;</li>
                <li style={{ marginBottom: '0.6rem' }}><strong>Empresas entram em paralisia operacional:</strong> Quotas societárias ficam sem representação formal, impedindo assinaturas contratuais bancárias e deliberações de sócios;</li>
                <li style={{ marginBottom: '0.6rem' }}><strong>As dívidas continuam correndo:</strong> IPTU, taxas condominiais e juros permanecem onerando o patrimônio deixado.</li>
              </ul>
            </section>

            {/* SEÇÃO 2: O RELÓGIO DO ITCMD (URGÊNCIA) */}
            <section id="prazo-multa" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.85rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                2. O Prazo Fatal de 60 Dias e a Multa do ITCMD
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                O ponto de maior fricção e prejuízo para famílias desavisadas é a inobservância do calendário tributário. O Código de Processo Civil, em seu <strong>Artigo 611</strong>, estabelece uma regra estrita:
              </p>

              <div style={{ background: 'var(--bg-surface)', padding: '1.5rem 2rem', borderLeft: '4px solid #ef4444', borderRadius: '4px', margin: '2rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.5rem' }}>
                  <Clock size={20} /> Art. 611 do CPC (Lei Federal nº 13.105/2015)
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: 0, fontSize: '1.05rem' }}>
                  "O processo de inventário e de partilha deve ser instaurado dentro de 2 (dois) meses, a contar da abertura da sucessão, ultimando-se nos 12 (doze) meses subsequentes..."
                </p>
              </div>

              <p style={{ marginBottom: '1.25rem' }}>
                Embora o prazo de conclusão (12 meses) possa ser prorrogado pelo juiz ou pelo tabelião, o <strong>prazo de abertura (60 dias corridos)</strong> é vigiado de perto pelas Secretarias da Fazenda Estadual. 
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Em São Paulo e na maioria dos estados brasileiros, a não abertura tempestiva enseja a aplicação de <strong>multa punitiva de 10% a 20% sobre o ITCMD devido</strong>, cumulada com juros moratórios calculados pela taxa SELIC. Em um patrimônio de médio ou alto padrão, a inércia burocrática de poucas semanas pode representar dezenas ou centenas de milhares de reais perdidos em penalidades fiscais puras.
              </p>
            </section>

            {/* CTA 1: Diagnóstico de Prazos */}
            <div className="cta-banner-inline">
              <AlertTriangle size={36} color="var(--accent-gold)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                Seu prazo de 60 dias está próximo de vencer?
              </h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 1.75rem auto', fontSize: '1.05rem' }}>
                Instauramos a abertura protocolar imediata em cartório ou no judiciário para estancar o relógio fiscal e blindar sua família contra as multas do ITCMD.
              </p>
              <button 
                onClick={() => handleWhatsApp('Olá Dra. Libia, preciso verificar o prazo de 60 dias do inventário da minha família para evitar multas da Fazenda.')}
                className="btn-gold"
                style={{ border: 'none', cursor: 'pointer', fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                Analisar Prazo do Meu Inventário via WhatsApp
              </button>
            </div>

            {/* SEÇÃO 3: TABELA COMPARATIVA JUDICIAL VS EXTRAJUDICIAL */}
            <section id="tabela-comparativa" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.85rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                3. Inventário em Cartório (Extrajudicial) vs. Inventário Judicial
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Desde a promulgação da <strong>Lei Federal nº 11.441/2007</strong>, os herdeiros não são mais obrigados a enfrentar as filas infindáveis dos fóruns judiciais, desde que preenchidos certos requisitos objetivos.
              </p>

              <div className="guia-table-wrapper">
                <table className="guia-table">
                  <thead>
                    <tr>
                      <th style={{ width: '22%' }}>Critério</th>
                      <th style={{ width: '39%' }}>Inventário Extrajudicial (Cartório)</th>
                      <th style={{ width: '39%' }}>Inventário Judicial</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Onde Tramita</strong></td>
                      <td>Tabelionato de Notas (livre escolha, em qualquer cidade ou 100% digital).</td>
                      <td>Vara de Família e Sucessões do domicílio do falecido.</td>
                    </tr>
                    <tr>
                      <td><strong>Tempo Médio</strong></td>
                      <td><strong>30 a 90 dias</strong> (podendo ser ainda mais célere com certidões em mãos).</td>
                      <td><strong>1 a 5 anos</strong> (ou mais, caso haja litígio severo entre herdeiros).</td>
                    </tr>
                    <tr>
                      <td><strong>Requisitos</strong></td>
                      <td>Herdeiros maiores, capazes e em <strong>pleno acordo</strong> quanto à partilha.</td>
                      <td>Obrigatório quando há divergência, herdeiro menor/incapaz ou testamento não homologado.</td>
                    </tr>
                    <tr>
                      <td><strong>Custo e Taxas</strong></td>
                      <td>Emolumentos de cartório tabelados por lei estadual (geralmente menores).</td>
                      <td>Custas processuais estaduais calculadas sobre o monte-mor total.</td>
                    </tr>
                    <tr>
                      <td><strong>Presença de Advogado</strong></td>
                      <td><strong>Obrigatória por lei</strong> (um único advogado comum ou advogados distintos).</td>
                      <td><strong>Obrigatória por lei</strong>.</td>
                    </tr>
                    <tr>
                      <td><strong>Documento Final</strong></td>
                      <td><strong>Escritura Pública de Inventário</strong> (com a mesma força jurídica de uma sentença).</td>
                      <td><strong>Formal de Partilha</strong> expedido pelo juiz de direito.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ background: 'var(--bg-surface)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid var(--accent-gold)', marginTop: '1.5rem' }}>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.4rem' }}>
                  Avanço Recente (e-Notariado): Inventário 100% Digital no Brasil
                </strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: 0 }}>
                  Hoje, mesmo que os herdeiros residam em cidades, estados ou países distintos, todo o procedimento de inventário em cartório pode ser assinado digitalmente através da plataforma e-Notariado (com certificado digital ICP-Brasil gratuito fornecido pelo cartório), dispensando deslocamentos físicos.
                </p>
              </div>
            </section>

            {/* SEÇÃO 4: O DIFERENCIAL DRA. LIBIA - BENS NÃO REGISTRADOS E USUCAPIÃO */}
            <section id="imoveis-irregulares" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.85rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                4. O Ponto Cego: Bens Não Registrados, Contratos de Gaveta e Usucapião
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Um dos erros mais comuns na advocacia generalista é travar o inventário porque um ou mais imóveis do falecido "não têm escritura definitiva" ou foram adquiridos por meio de <strong>compromissos de compra e venda não registrados (contratos de gaveta)</strong>.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Pela sistemática do Código Civil, a posse e os direitos possessórios possuem valor econômico autônomo e integram formalmente a herança. Portanto, os direitos sobre esses imóveis <strong>devem ser inventariados e partilhados</strong>.
              </p>

              <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: '6px', border: '1px solid var(--accent-gold)', margin: '2rem 0' }}>
                <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Scale size={24} /> A Condução de Alta Precisão (Direito Notarial e Registral)
                </h3>
                <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                  A Dra. Libia Florio, aliando o Mestrado na USP à especialização em Direito Registral, atua articulando duas frentes complementares:
                </p>
                <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong>Partilha formal dos Direitos Possessórios:</strong> Garante que nenhum bem fique de fora do espólio, prevenindo nulidades e autuações por omissão de bens;
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong>Regularização Fundiária ou Usucapião Concomitante:</strong> Promove a ação de usucapião (extrajudicial em cartório ou judicial) em favor dos herdeiros ou cessionários, convertendo a posse em matrícula de propriedade plena e valorizando o bem em até 30% a 40% no mercado.
                  </li>
                </ol>
              </div>
            </section>

            {/* SEÇÃO 5: SITUAÇÕES ESPECIAIS E DÚVIDAS CRÍTICAS */}
            <section id="situacoes-especiais" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.85rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                5. Situações Especiais e Questões de Alta Complexidade
              </h2>

              {/* 5.1 Venda de Bens Durante o Inventário */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  5.1 É possível vender um imóvel antes do término do inventário?
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Sim. Muitas famílias não dispõem de liquidez imediata para arcar com as custas processuais, emolumentos e o imposto ITCMD. A legislação autoriza duas soluções legítimas:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Alvará Judicial:</strong> No inventário judicial, o inventariante requer ao juiz autorização expressa para alienar determinado bem, depositando o produto da venda em juízo para saldar tributos e despesas;</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Cessão Onerosa de Direitos Hereditários:</strong> No inventário em cartório, os herdeiros transferem por escritura pública seus direitos sobre determinado bem a um terceiro adquirente, gerando recursos imediatos para quitação das obrigações do espólio.</li>
                </ul>
              </div>

              {/* 5.2 Dívidas do Falecido */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  5.2 As dívidas deixadas pelo falecido passam para os filhos?
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Não. Esse é um mito que gera pânico desnecessário.</strong> O Artigo 1.792 do Código Civil estabelece o chamado <em>benefício de inventário</em>: o herdeiro não responde por encargos superiores às forças da herança.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  As dívidas legítimas do falecido são pagas exclusivamente com os bens do próprio espólio. Se o falecido deixou R$ 200 mil em patrimônio e R$ 500 mil em dívidas, todo o patrimônio será usado para pagar os credores, mas a dívida remanescente de R$ 300 mil é extinta, sem jamais atingir a conta bancária ou o patrimônio pessoal dos filhos.
                </p>
              </div>

              {/* 5.3 Testamento e Herdeiros Menores */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  5.3 Havendo testamento ou herdeiro menor, o cartório é proibido?
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Historicamente sim, mas o cenário mudou. No Estado de São Paulo e conforme jurisprudência pacificada pelo STJ, havendo testamento válido, é possível realizar a abertura, registro e cumprimento do testamento em juízo e, em seguida, havendo consenso e capacidade de todos os envolvidos, <strong>lavrar a partilha extrajudicialmente no cartório</strong> mediante expressa autorização do magistrado.
                </p>
              </div>

              {/* 5.4 Sucessão de Quotas Empresariais */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  5.4 Sucessão de Empresas e Holdings Familiares
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Quando o espólio abrange quotas de sociedades limitadas (LTDA) ou ações de S/A, a condução exige profunda visão de Direito Societário e Empresarial. Deve-se analisar rigorosamente o <strong>Contrato Social</strong> da sociedade: ele prevê a entrada automática dos herdeiros ou a apuração e liquidação de haveres?
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  A ausência de assessoria técnica pode acarretar o bloqueio judicial das contas da empresa, inadimplemento de folha salarial e severos atritos entre os sócios remanescentes e a família do falecido.
                </p>
              </div>
            </section>

            {/* SEÇÃO 6: CHECKLIST COMPLETO DE DOCUMENTOS (O IMÃ DE RETENÇÃO) */}
            <section id="checklist-documentos" style={{ marginBottom: '4rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.85rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                6. Checklist Completo de Documentos para o Inventário
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Reunir a documentação correta é 80% do caminho para um procedimento célere. Utilize a nossa lista estruturada abaixo para organizar a pasta do espólio:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
                
                {/* Card 1: Do Falecido e Cônjuge */}
                <div className="doc-card">
                  <h4><Users size={20} /> Do Falecido e Cônjuge</h4>
                  <ul className="doc-list">
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Certidão de Óbito original</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> RG e CPF do falecido e viúvo(a)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Certidão de Casamento atualizada (com pacto antenupcial, se houver)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Escritura pública de União Estável (se aplicável)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Certidão de Inexistência de Testamento (CENSEC)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Certidões Negativas de Débitos Tributários (Federal, Estadual e Municipal)</li>
                  </ul>
                </div>

                {/* Card 2: Dos Herdeiros */}
                <div className="doc-card">
                  <h4><FileText size={20} /> Dos Herdeiros</h4>
                  <ul className="doc-list">
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> RG e CPF de todos os herdeiros</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Certidão de Nascimento (se solteiros)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Certidão de Casamento atualizada (se casados)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Documentos pessoais dos cônjuges dos herdeiros</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Comprovante de endereço atualizado</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Informação de profissão e estado civil</li>
                  </ul>
                </div>

                {/* Card 3: Dos Imóveis */}
                <div className="doc-card">
                  <h4><Building2 size={20} /> Dos Bens Imóveis</h4>
                  <ul className="doc-list">
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Matrícula atualizada com certidão de ônus e ações (expedida há menos de 30 dias)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Carnê de IPTU do ano do óbito (folha com valor venal)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Certidão Negativa de Tributos Imobiliários da Prefeitura</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Para imóveis rurais: CCIR, ITR dos últimos 5 anos e CAR</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Contratos de compra e venda (se imóvel não registrado)</li>
                  </ul>
                </div>

                {/* Card 4: Veículos, Contas e Empresas */}
                <div className="doc-card">
                  <h4><Landmark size={20} /> Veículos, Contas e PJ</h4>
                  <ul className="doc-list">
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Documento de veículos (CRLV digital ou DUT)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Tabela FIPE do veículo na data do falecimento</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Extratos de contas bancárias e investimentos na data do óbito</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Contrato Social consolidado de empresas (se sócio de PJ)</li>
                    <li><CheckSquare size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} /> Balanço especial ou demonstração patrimonial da empresa</li>
                  </ul>
                </div>

              </div>

              <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <button 
                  onClick={() => handleWhatsApp('Olá Dra. Libia, vi o checklist de documentos do guia e gostaria de auxílio para levantar as certidões do inventário da minha família.')}
                  className="btn-outline"
                  style={{ cursor: 'pointer', padding: '0.85rem 2rem', fontSize: '0.98rem' }}
                >
                  Solicitar Levantamento e Auditoria de Documentos
                </button>
              </div>
            </section>

            {/* SEÇÃO 7: FAQ 15 PERGUNTAS E RESPOSTAS */}
            <section id="faq" style={{ marginBottom: '4rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  7. Perguntas Frequentes sobre Inventário (FAQ)
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                  Respostas jurídicas objetivas para as 15 dúvidas mais recorrentes de herdeiros no Brasil.
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--bg-surface-light)' }}>
                {[
                  {
                    q: "1. O que acontece se a família simplesmente não fizer o inventário?",
                    a: "O patrimônio entra em estado de bloqueio perpétuo. Os imóveis perdem valor de mercado (podendo desvalorizar até 30% ou mais por falta de matrícula regular), contas bancárias ficam inacessíveis, a Fazenda Estadual acumula multas e juros astronômicos sobre o ITCMD e, havendo falecimento posterior de outros herdeiros, os inventários se acumulam gerando uma burocracia exponencial."
                  },
                  {
                    q: "2. É obrigatório contratar advogado para o inventário em cartório?",
                    a: "Sim. A Lei Federal nº 11.441/2007 determina expressamente que os herdeiros devem estar obrigatoriamente assistidos por advogado habilitado. O tabelião de notas não pode lavrar a escritura sem a presença e assinatura do advogado assistente."
                  },
                  {
                    q: "3. Quanto tempo demora para concluir um inventário em cartório?",
                    a: "Estando toda a documentação reunida e emitidas as certidões negativas fiscais, a minuta da escritura de partilha é lavrada no cartório em prazo de 30 a 90 dias, sendo o procedimento mais rápido existente no direito brasileiro."
                  },
                  {
                    q: "4. E quanto tempo leva um inventário judicial?",
                    a: "Na via judicial, o tempo depende da comarca e da complexidade. Se for um arrolamento sumário consensual, pode levar de 6 meses a 1 ano. Em casos com divergências entre herdeiros, perícias de avaliação de bens ou disputas patrimoniais, o processo pode se arrastar por 3 a 10 anos."
                  },
                  {
                    q: "5. Quem deve ser o inventariante?",
                    a: "O Artigo 617 do CPC estabelece uma ordem de preferência: 1º o cônjuge ou companheiro sobrevivente; 2º o herdeiro que estiver na posse e administração dos bens; 3º qualquer herdeiro; 4º o testamenteiro. No cartório, os herdeiros de comum acordo podem indicar livremente quem representará o espólio para os atos necessários."
                  },
                  {
                    q: "6. Quanto custa fazer um inventário e quem paga?",
                    a: "Os custos compreendem: (1) O ITCMD (imposto estadual de 4% a 8%, conforme o estado); (2) Os emolumentos de cartório ou custas judiciais; (3) As certidões cartorárias e averbações de imóveis; e (4) Os honorários advocatícios. Por regra, essas despesas são custeadas pelo próprio espólio (dinheiro do falecido ou venda de um bem)."
                  },
                  {
                    q: "7. O cônjuge sobrevivente (viúvo/a) tem que fazer inventário?",
                    a: "Sim. Mesmo que haja casamento em comunhão universal ou parcial com meação clara, o inventário é indispensável para individualizar a meação do cônjuge e transmitir a herança aos demais herdeiros necessários."
                  },
                  {
                    q: "8. É possível fazer inventário negativo?",
                    a: "Sim. O inventário negativo é realizado quando o falecido não deixou bens a partilhar, mas a família necessita comprovar formalmente a ausência de patrimônio perante credores ou para viabilizar um novo casamento do viúvo sem a imposição de separação obrigatória de bens."
                  },
                  {
                    q: "9. Um dos herdeiros pode se recusar a assinar o inventário?",
                    a: "Ninguém é obrigado a assinar o inventário em cartório. Caso um único herdeiro discorde da partilha, o inventário em cartório fica inviabilizado e deve-se recorrer obrigatoriamente à via judicial, onde o juiz decidirá a divisão com base na lei, independentemente da vontade arbitrária de qualquer herdeiro."
                  },
                  {
                    q: "10. Como funciona se um dos herdeiros morar no exterior?",
                    a: "O herdeiro no exterior pode participar normalmente emitindo uma Procuração Pública (feita no Consulado Brasileiro do país onde reside ou apostilada via Convenção de Haia) conferindo poderes específicos a um procurador no Brasil, ou assinar eletronicamente via e-Notariado com certificado digital."
                  },
                  {
                    q: "11. Como funciona quando há bens em diferentes estados do Brasil?",
                    a: "O inventário é Uno e indivisível: tramita no foro do último domicílio do falecido. Porém, o imposto ITCMD referente a cada bem imóvel é recolhido a favor do estado onde o imóvel está fisicamente situado."
                  },
                  {
                    q: "12. Um herdeiro pode renunciar à sua herança?",
                    a: "Sim. A renúncia deve ser manifestada expressamente por Escritura Pública em cartório ou termo judicial. A renúncia é irrevogável e deve ser total (não se pode renunciar apenas às dívidas e ficar com os bens)."
                  },
                  {
                    q: "13. O que é Arrolamento Sumário?",
                    a: "É um procedimento simplificado de inventário judicial previsto nos arts. 659 a 663 do CPC, aplicável quando os herdeiros são capazes e concordam com a partilha. Dispensa avaliações periciais e formalidades custosas, acelerando a decisão do magistrado."
                  },
                  {
                    q: "14. A pensão por morte depende do inventário?",
                    a: "Não. A pensão por morte é um benefício previdenciário (INSS ou regime próprio) devido aos dependentes legais, decorrente do vínculo previdenciário do falecido, e não integra a partilha do inventário."
                  },
                  {
                    q: "15. O que fazer se for descoberto um bem após o término do inventário?",
                    a: "Realiza-se a chamada **Sobrepartilha**, que segue as mesmas regras do inventário original e pode ser feita rapidamente em cartório, sem anular o que já foi partilhado anteriormente."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="faq-accordion-item" onClick={() => toggleFaq(idx)}>
                    <div className="faq-accordion-q">
                      <span>{item.q}</span>
                      <ChevronDown 
                        size={18} 
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
                      <div className="faq-accordion-a">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SEÇÃO 8: AUTORIDADE INSTITUCIONAL BOUTIQUE (Dra. Libia Florio) */}
            <section style={{ background: 'var(--bg-surface)', padding: '3.5rem 2.5rem', borderRadius: '8px', border: '1px solid var(--accent-gold)', marginBottom: '3.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                
                {/* Imagem / Diploma USP */}
                <div style={{ textAlign: 'center' }}>
                  <div 
                    style={{ position: 'relative', border: '1px solid var(--accent-gold)', padding: '0.75rem', background: 'var(--bg-surface-light)', cursor: 'pointer', borderRadius: '4px', overflow: 'hidden' }}
                    onClick={() => setIsDiplomaOpen(true)}
                  >
                    <img 
                      src="/diploma-usp.jpg" 
                      alt="Diploma de Mestrado da USP - Dra. Libia Florio" 
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                      <Search size={14} /> Clique para Ampliar Diploma USP
                    </div>
                  </div>
                </div>

                {/* Texto Autoridade */}
                <div>
                  <div style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Autoridade Técnica & Acadêmica
                  </div>
                  <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                    Dra. Libia Cristiane C. Andrade e Florio
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                    A Dra. Libia é <strong>Mestre em Direito Comercial pela Faculdade de Direito do Largo São Francisco (Universidade de São Paulo - USP)</strong> e pós-graduada especialista em <strong>Direito Notarial e Registral</strong> pela Legale Educacional.
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    Membro Efetivo da Comissão Especial de Direito Imobiliário da OAB/SP, possui mais de 30 anos de atuação especializada, sendo referência em desatar nós cartorários e viabilizar inventários complexos em todo o território nacional.
                  </p>

                  <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid var(--bg-surface-light)', paddingTop: '1.5rem' }}>
                    <div>
                      <strong style={{ fontSize: '1.4rem', color: 'var(--text-main)', display: 'block' }}>USP</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mestrado em Direito</span>
                    </div>
                    <div>
                      <strong style={{ fontSize: '1.4rem', color: 'var(--text-main)', display: 'block' }}>30+ Anos</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Prática Jurídica</span>
                    </div>
                    <div>
                      <strong style={{ fontSize: '1.4rem', color: 'var(--text-main)', display: 'block' }}>OAB/SP</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Comissões Especiais</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* SEÇÃO 9: CONCLUSÃO E CTA FINAL */}
            <section style={{ textAlign: 'center', margin: '4rem 0 2rem 0' }}>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                Dê o primeiro passo para proteger o patrimônio da sua família.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: '1.7' }}>
                Não permita que desentendimentos familiares ou o relógio das multas fiscais consumam o patrimônio construído por uma vida inteira. Converse com uma equipe jurídica de excelência.
              </p>
              
              <button 
                onClick={() => handleWhatsApp('Olá Dra. Libia Florio, li o Guia Completo de Inventário 2026 e gostaria de agendar uma consulta inicial para o caso da minha família.')}
                className="btn-gold"
                style={{ border: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '1.1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <Phone size={18} /> Iniciar Atendimento com a Dra. Libia Florio
              </button>
            </section>

          </div>
        </article>
      </main>

      <Footer />
      <StickyWhatsApp />

      {/* Modal / Lightbox do Diploma USP */}
      {isDiplomaOpen && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.92)', backdropFilter: 'blur(6px)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
          }}
          onClick={() => setIsDiplomaOpen(false)}
        >
          <div style={{ position: 'relative', maxWidth: '900px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsDiplomaOpen(false)}
              style={{
                position: 'absolute', top: '-45px', right: '0', background: 'none', border: 'none', 
                color: 'var(--accent-gold)', fontSize: '3rem', cursor: 'pointer', lineHeight: '1'
              }}
              aria-label="Fechar"
            >
              &times;
            </button>
            <img 
              src="/diploma-usp.jpg" alt="Diploma USP Original - Dra. Libia Florio" 
              style={{ width: '100%', height: 'auto', border: '2px solid var(--accent-gold)', boxShadow: '0 10px 40px rgba(0,0,0,0.6)', borderRadius: '4px' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
