import React, { useState } from 'react';
import { 
  FileText, ShieldCheck, Download, CheckCircle2, AlertTriangle, 
  ArrowRight, Lock, Clock, HelpCircle, Star, Scale, Building2, 
  ChevronDown, MessageCircle, Sparkles, Check, FileCheck
} from 'lucide-react';
import { Navbar, Footer, handleWhatsAppClick } from '../components/Shared';

export default function KitContratos() {
  const [openFaq, setOpenFaq] = useState(null);
  const [includeOrderBump, setIncludeOrderBump] = useState(true);

  // Link da Kiwify ou Checkout direto (pode ser substituído pela URL final gerada)
  const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/LINK_DO_SEU_PRODUTO"; 

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCheckout = () => {
    if (KIWIFY_CHECKOUT_URL.includes("LINK_DO_SEU_PRODUTO")) {
      handleWhatsAppClick(
        'nlxZCPiY6qAcEMzlgIgD',
        'Olá! Quero baixar agora o Acervo Definitivo de Contratos da Andrade & Florio (R$ 67 no Pix) com liberação imediata dos arquivos Word.'
      );
    } else {
      window.open(KIWIFY_CHECKOUT_URL, '_blank');
    }
  };

  const arquivos = [
    {
      title: "Contrato de Compra e Venda de Imóvel",
      badge: "Blindagem Total",
      desc: "Com cláusulas de proteção contra fraudes e vícios ocultos. Inclui cláusula de arras/sinal, exigência de certidões prévias obrigatórias e cláusula resolutiva expressa contra calote.",
      tags: ["Proteção contra Fraudes", "Cláusula de Sinal e Arras", "Cláusula Resolutiva Expressa"]
    },
    {
      title: "Contratos de Locação (Residencial e Comercial)",
      badge: "Lei 8.245/91",
      desc: "Estrutura blindada para garantias e despejo rápido, se necessário. Opções flexíveis para caução, fiador ou seguro, com laudo de vistoria e regras de conservação.",
      tags: ["3 Opções de Garantias", "Despejo Rápido sem Brechas", "Laudo de Vistoria de Entrada"]
    },
    {
      title: "Contrato de Comodato de Imóvel",
      badge: "Anti-Usucapião",
      desc: "Empréstimo de bens com segurança total de devolução. Fixa posse precária (Art. 1.208 do CC) e destrói sumariamente qualquer alegação de usucapião por parte do ocupante.",
      tags: ["Posse Precária Comprovada", "Segurança Total de Devolução", "Aluguel-Pena por Retenção"]
    },
    {
      title: "Contrato de Prestação de Serviços",
      badge: "Blindagem Trabalhista",
      desc: "Escopo definido, multas de rescisão e segurança de recebimento. Blindagem contra subordinação jurídica e passivos na Justiça do Trabalho.",
      tags: ["Escopo e Medição Fechados", "Multas de Rescisão", "Segurança de Recebimento"]
    }
  ];

  const faqs = [
    {
      q: "Em qual formato recebo os contratos?",
      a: "Você recebe todos os arquivos em formato Word (.docx) 100% editáveis no computador ou celular, além do formato PDF de consulta rápida. É só abrir, preencher os campos sinalizados e imprimir para assinar."
    },
    {
      q: "Por que esses modelos são superiores aos modelos genéricos da internet?",
      a: "Modelos gratuitos do Google estão repletos de cláusulas nulas que a jurisprudência derruba no primeiro mês de processo. Este acervo foi estruturado, revisado e validado pela banca Andrade & Florio diretamente para a prática jurídica real."
    },
    {
      q: "Como é feita a entrega dos arquivos após o pagamento?",
      a: "A liberação é 100% imediata. Assim que o Pix ou Cartão for aprovado, o link para baixar o acervo completo é enviado para o seu e-mail e liberado na tela."
    },
    {
      q: "E se eu precisar de uma análise ou suporte jurídico individual?",
      a: "Os compradores contam com canal direto de WhatsApp com a banca Andrade & Florio para agendamento de análises expressas de minutas e due diligence de imóveis."
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-main)', fontFamily: 'var(--font-body)' }}>
      <Navbar />

      {/* HERO SECTION DE ALTO IMPACTO */}
      <section style={{ 
        padding: '5rem 1.5rem 3.5rem', 
        maxWidth: '1050px', 
        margin: '0 auto', 
        textAlign: 'center' 
      }}>
        {/* SELO DE AUTORIDADE */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          backgroundColor: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid var(--accent-gold)',
          padding: '0.5rem 1.25rem',
          borderRadius: '50px',
          color: 'var(--accent-gold)',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '1.75rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <ShieldCheck size={18} />
          Banca Andrade & Florio
        </div>

        {/* HEADLINE */}
        <h1 style={{ 
          fontSize: 'clamp(2.1rem, 4.8vw, 3.4rem)', 
          lineHeight: 1.15, 
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          color: '#FFFFFF'
        }}>
          O Acervo Definitivo de Contratos Imobiliários e Comerciais: Minutas Editáveis Prontas para Preencher, Assinar e Fechar Negócio.
        </h1>

        {/* SUB-HEADLINE */}
        <p style={{ 
          fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)', 
          color: '#D1D5DB', 
          maxWidth: '850px', 
          margin: '0 auto 2.5rem',
          lineHeight: 1.6
        }}>
          Chega de amadorismo e risco jurídico. Baixe agora os modelos exatos utilizados por especialistas para blindar locações, compra e venda e prestação de serviços. Arquivos em Word (.docx) liberados imediatamente.
        </p>

        {/* CALL TO ACTION PRINCIPAL */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <button 
            onClick={handleCheckout}
            className="btn-gold"
            style={{
              fontSize: '1.25rem',
              padding: '1.2rem 2.8rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 12px 35px rgba(212, 175, 55, 0.35)',
              border: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            <Download size={24} />
            QUERO BAIXAR OS CONTRATOS AGORA
          </button>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            (Acesso imediato enviado para o seu e-mail)
          </span>
        </div>

        {/* TRUST ICONS */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          fontSize: '0.92rem',
          color: 'var(--text-muted)'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold)" /> 100% Editável no Word e Docs
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold)" /> Notas Técnicas de Preenchimento
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold)" /> Pagamento Único via Pix de R$ 67
          </span>
        </div>
      </section>

      {/* BLOCO DE AUTORIDADE - O FATOR DE CONVERSÃO */}
      <section style={{ 
        backgroundColor: 'var(--bg-surface)', 
        borderTop: '1px solid var(--bg-surface-light)',
        borderBottom: '1px solid var(--bg-surface-light)',
        padding: '3.5rem 1.5rem' 
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <Scale size={42} color="var(--accent-gold)" style={{ margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontSize: '1.9rem', color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Segurança Jurídica de Alto Nível
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
            Você não está baixando um modelo genérico da internet. Todos os contratos deste acervo foram estruturados, revisados e validados pela banca <strong>Andrade e Florio</strong>. É a engenharia jurídica de um escritório atuante diretamente na sua mesa, por uma fração do custo.
          </p>
        </div>
      </section>

      {/* OS ARQUIVOS QUE VOCÊ VAI RECEBER AGORA */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '0.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
            Os Arquivos que Você Vai Receber Agora
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
            Minutas completas com campos destacados para preenchimento ágil e seguro.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {arquivos.map((item, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--bg-surface-light)',
                borderRadius: '8px',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
            >
              <div>
                <div style={{ 
                  display: 'inline-block', 
                  backgroundColor: 'rgba(212, 175, 55, 0.15)', 
                  color: 'var(--accent-gold)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.75rem',
                  borderRadius: '4px',
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase'
                }}>
                  {item.badge}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#FFFFFF', lineHeight: 1.3, fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--bg-surface-light)', paddingTop: '1.25rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.tags.map((tag, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                      <Check size={16} color="var(--accent-gold)" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ANCORAGEM E PREÇO */}
      <section style={{ 
        backgroundColor: 'var(--bg-surface)', 
        borderTop: '1px solid var(--bg-surface-light)',
        borderBottom: '1px solid var(--bg-surface-light)',
        padding: '5rem 1.5rem' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Proteção Jurídica Imediata sem Custos Excessivos
          </h2>
          
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            borderRadius: '8px',
            padding: '1.75rem',
            marginBottom: '2.5rem',
            textAlign: 'left'
          }}>
            <p style={{ color: '#F87171', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
              Um único erro em um contrato imobiliário pode custar dezenas de milhares de reais e anos de litígio na justiça. Uma consulta básica de revisão contratual não sai por menos de R$ 800,00.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-color)',
            border: '2px solid var(--accent-gold)',
            borderRadius: '12px',
            padding: '3rem 2rem',
            boxShadow: '0 20px 45px rgba(0,0,0,0.6)'
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
              Hoje, você leva o acervo completo, pronto para uso imediato, por apenas:
            </p>

            <div style={{ fontSize: '3.8rem', fontWeight: 800, color: 'var(--accent-gold)', margin: '0.5rem 0' }}>
              R$ 67,00
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Pagamento único • Sem mensalidades • Acesso vitalício aos arquivos
            </p>

            <button 
              onClick={handleCheckout}
              className="btn-gold"
              style={{
                width: '100%',
                maxWidth: '520px',
                fontSize: '1.3rem',
                padding: '1.25rem 2rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                boxShadow: '0 12px 30px rgba(212, 175, 55, 0.35)',
                border: 'none',
                textTransform: 'uppercase'
              }}
            >
              <Download size={24} />
              QUERO BAIXAR OS CONTRATOS AGORA
            </button>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
              (Acesso imediato enviado para o seu e-mail)
            </p>
          </div>
        </div>
      </section>

      {/* ORDER BUMP - APRESENTAÇÃO */}
      <section style={{ padding: '4.5rem 1.5rem', maxWidth: '850px', margin: '0 auto' }}>
        <div style={{
          border: '2px dashed var(--accent-gold)',
          borderRadius: '10px',
          padding: '2.25rem',
          backgroundColor: 'rgba(212, 175, 55, 0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
            <input 
              type="checkbox" 
              id="bumpBox"
              checked={includeOrderBump}
              onChange={(e) => setIncludeOrderBump(e.target.checked)}
              style={{ width: '24px', height: '24px', marginTop: '0.2rem', cursor: 'pointer', accentColor: 'var(--accent-gold)' }}
            />
            <div>
              <label htmlFor="bumpBox" style={{ cursor: 'pointer' }}>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: 'var(--accent-gold)', 
                  color: '#000000', 
                  fontWeight: 800, 
                  fontSize: '0.8rem', 
                  padding: '0.25rem 0.65rem', 
                  borderRadius: '4px',
                  marginBottom: '0.6rem',
                  textTransform: 'uppercase'
                }}>
                  ⚠️ Adicionar o Guia de Alerta de Riscos e Cláusulas Nulas (+ R$ 49,90)
                </span>
                <h4 style={{ fontSize: '1.3rem', color: '#FFFFFF', margin: '0.25rem 0 0.75rem', fontFamily: 'var(--font-heading)' }}>
                  O Guia de Alerta de Riscos e Cláusulas Nulas
                </h4>
              </label>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
                Não corra riscos na hora de preencher. Leve também nosso guia rápido mostrando os maiores erros fatais que anulam contratos no Brasil e saiba exatamente o que nunca alterar nas minutas.
              </p>
              <span style={{ fontSize: '0.88rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                ✓ Ative na tela de pagamento da Kiwify em 1 clique
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BACK-END HIGH TICKET DA BANCA */}
      <section style={{ 
        backgroundColor: 'rgba(212, 175, 55, 0.05)', 
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        padding: '4rem 1.5rem' 
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <Building2 size={36} color="var(--accent-gold)" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Precisa de Revisão Expressa ou Auditoria de Imóvel?
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Caso você esteja fechando um imóvel de alto valor, enfrentando partilha/inventário ou queira uma auditoria completa de certidões (Due Diligence), a banca <strong>Andrade e Florio</strong> analisa sua documentação com agilidade executiva.
          </p>
          <button 
            onClick={() => handleWhatsAppClick(
              'nlxZCPiY6qAcEMzlgIgD',
              'Olá! Comprei o Acervo de Contratos e gostaria de agendar uma análise expressa / auditoria de imóvel com a banca Andrade & Florio.'
            )}
            className="btn-outline"
            style={{
              padding: '1rem 2.2rem',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontWeight: 600
            }}
          >
            <MessageCircle size={20} />
            Falar com a Banca para Análise Expressa
          </button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '850px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.1rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>
          Dúvidas Frequentes
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
