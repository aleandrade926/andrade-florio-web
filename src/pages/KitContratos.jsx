import React, { useState } from 'react';
import { 
  FileText, ShieldCheck, Download, CheckCircle2, AlertTriangle, 
  ArrowRight, Lock, Clock, HelpCircle, Star, Scale, Building2, 
  ChevronDown, MessageCircle, Sparkles, Check
} from 'lucide-react';
import { Navbar, Footer, handleWhatsAppClick } from '../components/Shared';

export default function KitContratos() {
  const [openFaq, setOpenFaq] = useState(null);
  const [includeOrderBump, setIncludeOrderBump] = useState(true);

  // Link para checkout da Kiwify (substituível pela URL final da campanha)
  const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/LINK_DO_SEU_PRODUTO"; 

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCheckout = () => {
    if (KIWIFY_CHECKOUT_URL.includes("LINK_DO_SEU_PRODUTO")) {
      // Se ainda não configurou o link da Kiwify, redireciona para WhatsApp de liberação direta
      handleWhatsAppClick(
        'nlxZCPiY6qAcEMzlgIgD',
        'Olá! Gostaria de adquirir o Acervo Definitivo de Contratos (R$ 67 no Pix) com liberação imediata dos arquivos Word.'
      );
    } else {
      window.open(KIWIFY_CHECKOUT_URL, '_blank');
    }
  };

  const contratos = [
    {
      title: "1. Contrato de Compra e Venda de Imóvel com Arras e Cláusula Resolutiva",
      badge: "Mais Procurado",
      desc: "Protege integralmente o comprador e o vendedor. Contém cláusula explícita de sinal (arras penitenciais/confirmatórias) e cláusula resolutiva expressa (Art. 474 do CC) que cancela a venda na hora em caso de calote sem precisar de 4 anos de processo.",
      highlights: [
        "Cláusula de Sinal e Arras com retenção legal",
        "Cláusula Resolutiva Expressa (Art. 474 CC)",
        "Exigência de certidões prévias contra fraudes",
        "Regras estritas de posse e escritura definitiva"
      ]
    },
    {
      title: "2. Contrato de Locação Residencial / Comercial com Vistoria",
      badge: "Lei 8.245/91",
      desc: "Estruturado estritamente na Lei do Inquilinato. Flexibilidade total: permite escolher Caução em dinheiro (3 meses), Fiador ou Seguro-Fiança, com regras severas de vistoria e multa proporcional legal.",
      highlights: [
        "3 opções de garantia (Caução, Fiador ou Seguro)",
        "Reajuste anual oficial (IPCA ou IGP-M)",
        "Multa rescisória estritamente proporcional",
        "Modelo de Laudo de Vistoria de Entrada incluso"
      ]
    },
    {
      title: "3. Contrato de Comodato com Cláusula Anti-Usucapião",
      badge: "Proteção Patrimonial",
      desc: "O escudo supremo para quem empresta casa, lote, sítio ou apartamento para terceiros ou parentes. Fixa posse precária (Art. 1.208 do CC) e destrói sumariamente qualquer risco de usucapião futura.",
      highlights: [
        "Cláusula Anti-Usucapião expressa (Art. 1.208 CC)",
        "Prazo determinado e notificação de 30 dias",
        "Fixação de aluguel-pena por dia de atraso",
        "Vedação de retenção por benfeitorias"
      ]
    },
    {
      title: "4. Contrato de Prestação de Serviços Autônomos (Blindagem CLT)",
      badge: "Segurança PJ",
      desc: "Ideal para contratação de autônomos, freelancers e pessoas jurídicas (PJ). Delimita o escopo fechado e comprova a inexistência de subordinação e habitualidade, blindando contra passivos na Justiça do Trabalho.",
      highlights: [
        "Vedação expressa de vínculo empregatício",
        "Autonomia técnica e flexibilidade de horários",
        "Critérios objetivos de aceite e medição",
        "Cláusula de confidencialidade e não-exclusividade"
      ]
    }
  ];

  const faqs = [
    {
      q: "Em qual formato receberei os modelos?",
      a: "Você recebe os arquivos em formato Microsoft Word (.docx) 100% editáveis e também em PDF. É só abrir no Word, celular ou Google Docs, preencher os campos destacados em amarelo e assinar."
    },
    {
      q: "Por que esses modelos são mais seguros que os modelos gratuitos do Google?",
      a: "Modelos gratuitos que circulam na internet costumam estar desatualizados, cheios de cláusulas nulas (como exigir fiador e caução ao mesmo tempo) ou sem cláusulas protetivas cruciais (como a cláusula resolutiva ou anti-usucapião). Nossos contratos foram redigidos por advogados atuantes e trazem notas técnicas explicando cada risco."
    },
    {
      q: "Como funciona a liberação do acesso após o pagamento?",
      a: "O envio é 100% automático e imediato. Assim que o pagamento via Pix ou Cartão for aprovado, você recebe no seu e-mail o link para baixar o pacote completo de minutas e o bônus."
    },
    {
      q: "E se eu precisar de uma análise personalizada para um caso de alto valor?",
      a: "A banca Andrade & Florio Sociedade de Advogados oferece consultoria de revisão expressa e Due Diligence imobiliária. Caso seu negócio envolva particularidades complexas, basta acionar nossa equipe diretamente pelo botão de WhatsApp presente nos arquivos."
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-main)' }}>
      <Navbar />

      {/* HERO SECTION */}
      <section style={{ 
        padding: '5rem 1.5rem 3.5rem', 
        maxWidth: '1100px', 
        margin: '0 auto', 
        textAlign: 'center' 
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          color: 'var(--accent-gold)',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <ShieldCheck size={16} /> Redigido e Comentado por Advogados
        </div>

        <h1 style={{ 
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', 
          lineHeight: 1.15, 
          marginBottom: '1.25rem',
          fontFamily: 'var(--font-heading)',
          color: '#FFFFFF'
        }}>
          O Acervo Definitivo de Contratos Imobiliários e Comerciais
        </h1>

        <p style={{ 
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
          color: 'var(--text-muted)', 
          maxWidth: '820px', 
          margin: '0 auto 2.5rem',
          lineHeight: 1.6
        }}>
          Minutas editáveis em Word <strong style={{ color: 'var(--text-main)' }}>prontas para preencher e assinar</strong>, com notas explicativas de segurança jurídica para você fechar negócios hoje sem riscos de litígios ou cláusulas nulas.
        </p>

        {/* TRUST BADGES */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '3rem',
          fontSize: '0.9rem',
          color: 'var(--text-muted)'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold)" /> 100% Editável no Word / Docs
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold)" /> Cláusulas Comentadas Passo a Passo
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold)" /> Download Imediato no Pix
          </span>
        </div>

        {/* CTA BUTTON */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            onClick={handleCheckout}
            className="btn-gold"
            style={{
              fontSize: '1.15rem',
              padding: '1.1rem 2.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.25)'
            }}
          >
            <Download size={22} />
            Baixar o Acervo Completo por R$ 67
          </button>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Acesso vitalício • Pagamento único e seguro via Pix ou Cartão
          </span>
        </div>
      </section>

      {/* O PERIGO DOS MODELOS DA INTERNET */}
      <section style={{ 
        backgroundColor: 'var(--bg-surface)', 
        borderTop: '1px solid var(--bg-surface-light)',
        borderBottom: '1px solid var(--bg-surface-light)',
        padding: '3.5rem 1.5rem' 
      }}>
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <div style={{ 
            backgroundColor: 'rgba(239, 68, 68, 0.08)', 
            border: '1px solid rgba(239, 68, 68, 0.25)', 
            borderRadius: '8px', 
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#f87171' }}>
              <AlertTriangle size={24} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
                O Custo Invisível de Baixar um Contrato Gratuito na Internet
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: 0, fontSize: '0.98rem' }}>
              Mais de 65% dos modelos disponíveis gratuitamente no Google contêm cláusulas flagrantemente ilegais (como dupla garantia em aluguel, ausência de cláusula resolutiva ou comodatos que facilitam a usucapião por terceiros). Em caso de litígio, um contrato mal formulado anula garantias e faz você perder anos em discussões judiciais.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO NO ACERVO */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '0.75rem', color: 'var(--accent-gold)' }}>
            As 4 Minutas de Alta Segurança Inclusas
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto' }}>
            Cada minuta vem acompanhada de notas explicativas em cada cláusula para você preencher sem dúvidas.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1.75rem' 
        }}>
          {contratos.map((item, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--bg-surface-light)',
                borderRadius: '8px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ 
                  display: 'inline-block', 
                  backgroundColor: 'rgba(212, 175, 55, 0.12)', 
                  color: 'var(--accent-gold)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}>
                  {item.badge}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#FFFFFF', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--bg-surface-light)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  Pontos Blindados:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                      <Check size={15} color="var(--accent-gold)" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORDER BUMP SECTION */}
      <section style={{ 
        backgroundColor: 'var(--bg-surface)', 
        borderTop: '1px solid var(--bg-surface-light)',
        borderBottom: '1px solid var(--bg-surface-light)',
        padding: '4.5rem 1.5rem' 
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            border: '2px dashed var(--accent-gold)',
            borderRadius: '10px',
            padding: '2rem',
            backgroundColor: 'rgba(212, 175, 55, 0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <input 
                type="checkbox" 
                id="orderBumpCheck"
                checked={includeOrderBump}
                onChange={(e) => setIncludeOrderBump(e.target.checked)}
                style={{ width: '22px', height: '22px', marginTop: '0.2rem', cursor: 'pointer', accentColor: 'var(--accent-gold)' }}
              />
              <div>
                <label htmlFor="orderBumpCheck" style={{ cursor: 'pointer' }}>
                  <span style={{ 
                    display: 'inline-block',
                    backgroundColor: 'var(--accent-gold)', 
                    color: '#000000', 
                    fontWeight: 700, 
                    fontSize: '0.75rem', 
                    padding: '0.2rem 0.5rem', 
                    borderRadius: '4px',
                    marginRight: '0.5rem',
                    textTransform: 'uppercase'
                  }}>
                    Oferta Exclusiva no Checkout (+ R$ 49,90)
                  </span>
                  <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: '0.5rem 0' }}>
                    Adicionar o "Guia de Alerta de Riscos e Cláusulas Nulas"
                  </h4>
                </label>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5, margin: '0 0 1rem' }}>
                  Um manual direto ao ponto revelando as 5 cláusulas que os juízes anulam sumariamente na Justiça e o passo a passo exato para solicitar certidões antes de transferir qualquer valor em imóveis.
                </p>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>
                  ✓ Inclusão em 1 clique na página de pagamento
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & CHECKOUT BOX */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--accent-gold)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
        }}>
          <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
            Acesso Imediato ao Acervo Completo
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            4 Minutas Editáveis em Word (.docx) + Guia de Preenchimento Passo a Passo
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              De R$ 297,00
            </span>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-gold)', margin: '0.25rem 0' }}>
              R$ 67,00
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              ou 3x de R$ 23,80 no cartão
            </span>
          </div>

          <button 
            onClick={handleCheckout}
            className="btn-gold"
            style={{
              width: '100%',
              maxWidth: '480px',
              fontSize: '1.2rem',
              padding: '1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)',
              marginBottom: '1.5rem'
            }}
          >
            <Lock size={20} />
            Liberar Acesso e Baixar Agora
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span>🔒 Pagamento 100% Criptografado</span>
            <span>⚡ Envio Imediato por E-mail</span>
          </div>
        </div>
      </section>

      {/* GANCHO HIGH-TICKET DA BANCA */}
      <section style={{ 
        backgroundColor: 'rgba(212, 175, 55, 0.05)', 
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        padding: '4rem 1.5rem' 
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <Building2 size={36} color="var(--accent-gold)" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Precisa de uma Análise Expressa para uma Operação de Alto Valor?
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto 2rem', fontSize: '1rem' }}>
            Se você está comprando um imóvel de valor expressivo, lidando com inventário ou precisa de uma auditoria registral completa (Due Diligence), a banca <strong>Andrade & Florio Sociedade de Advogados</strong> pode analisar suas certidões e minutas antes da assinatura.
          </p>
          <button 
            onClick={() => handleWhatsAppClick(
              'nlxZCPiY6qAcEMzlgIgD',
              'Olá! Gostaria de falar com um advogado especialista da Andrade & Florio para agendar uma análise expressa de contrato/imóvel.'
            )}
            className="btn-outline"
            style={{
              padding: '0.9rem 2rem',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <MessageCircle size={18} />
            Consultar Análise Expressa com a Banca
          </button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '850px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--accent-gold)' }}>
          Perguntas Frequentes
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--bg-surface-light)',
                borderRadius: '6px',
                overflow: 'hidden'
              }}
            >
              <button 
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '1.05rem',
                  fontWeight: 500
                }}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  color="var(--accent-gold)" 
                  style={{
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </button>
              {openFaq === index && (
                <div style={{ 
                  padding: '0 1.5rem 1.25rem', 
                  color: 'var(--text-muted)', 
                  lineHeight: 1.6, 
                  fontSize: '0.95rem',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  paddingTop: '1rem'
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
