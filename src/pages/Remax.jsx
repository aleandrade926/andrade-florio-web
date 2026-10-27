import React, { useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Building2, 
  Scale, 
  Lock, 
  Users, 
  ArrowRight, 
  Sparkles,
  Search,
  Award,
  Zap,
  HelpCircle,
  FileSearch,
  BadgeCheck,
  ChevronDown,
  X
} from 'lucide-react';
import { Navbar, Footer, handleWhatsAppClick, LinkedinIcon } from '../components/Shared';

const customStyles = `
  .remax-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    border: 1px solid var(--accent-gold);
    border-radius: 50px;
    background: rgba(212, 175, 55, 0.08);
    color: var(--accent-gold);
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .remax-card {
    background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(212,175,55,0.02) 100%);
    border: 1px solid var(--bg-surface-light);
    border-radius: 10px;
    padding: 2.2rem 2rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .remax-card:hover {
    border-color: var(--accent-gold);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.35);
  }

  .remax-step-num {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(212,175,55,0.12);
    border: 1px solid var(--accent-gold);
    color: var(--accent-gold);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 18px;
  }

  .remax-cta-banner {
    background: linear-gradient(135deg, #18191b 0%, #121214 100%);
    border: 1px solid rgba(212,175,55,0.3);
    border-radius: 12px;
    padding: 3.5rem 2.5rem;
    position: relative;
    overflow: hidden;
  }

  .remax-tag {
    display: inline-block;
    background: rgba(212, 175, 55, 0.12);
    color: var(--accent-gold);
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .faq-accordion-item {
    background: var(--bg-surface);
    border: 1px solid var(--bg-surface-light);
    border-radius: 8px;
    margin-bottom: 12px;
    overflow: hidden;
    transition: border-color 0.2s ease;
  }

  .faq-accordion-item:hover {
    border-color: rgba(212,175,55,0.4);
  }

  .faq-header {
    width: 100%;
    text-align: left;
    padding: 18px 24px;
    background: none;
    border: none;
    color: var(--text-main);
    font-size: 17px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .faq-body {
    padding: 0 24px 20px 24px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    line-height: 1.6;
  }
`;

export default function Remax() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemaxWhatsApp = (origem = 'geral') => {
    let msg = 'Olá! Sou da RE/MAX e gostaria de conhecer como funciona a assessoria jurídica contratual e due diligence da Andrade & Florio para nossos corretores e fechamentos.';
    if (origem === 'broker') {
      msg = 'Olá! Sou Broker/Owner de franquia RE/MAX e gostaria de estruturar a retaguarda jurídica da nossa agência com a Andrade & Florio.';
    } else if (origem === 'corretor') {
      msg = 'Olá! Sou corretor associado RE/MAX e tenho um negócio/imóvel precisando de minuta ágil, due diligence ou regularização.';
    }
    handleWhatsAppClick('nlxZCPiY6qAcEMzlgIgD', msg);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Qual o prazo de entrega das minutas de Compra e Venda?',
      a: 'Nosso padrão operacional para minutas personalizadas de Compromisso de Compra e Venda (CCV) é de 24 a 48 horas úteis após o recebimento dos dados básicos das partes e da matrícula.'
    },
    {
      q: 'A Due Diligence apenas aponta riscos ou propõe soluções?',
      a: 'Nossa advocacia é focada em viabilizar negócios com segurança jurídica. Não somos "jurídico burocrático" que trava vendas. Quando há apontamentos ou certidões positivas, elaboramos o plano de blindagem (cláusulas resolutivas, retenções cautelares ou cauções) para permitir que a transação ocorra sem perigo de evicção ou fraude.'
    },
    {
      q: 'Como funciona o atendimento a imóveis irregulares (Usucapião e Inventário)?',
      a: 'Muitas vezes o corretor RE/MAX tem um imóvel captado de alto valor que não pode ser financiado ou vendido porque está em inventário não aberto ou posse sem matrícula registrada. Assumimos a regularização (judicial ou extrajudicial em cartório), destravar o imóvel e permitir a comercialização com valorização de até 30%.'
    },
    {
      q: 'O serviço atende também a regularização de imóveis do próprio corretor?',
      a: 'Sim! Além de atender os clientes da agência, prestamos assessoria completa para o patrimônio imobiliário pessoal dos corretores associados RE/MAX — como ações de usucapião, inventários de família e contratos particulares com honorários diferenciados de parceria.'
    },
    {
      q: 'A imobiliária precisa pagar mensalidade fixa obrigatória?',
      a: 'Não. Trabalhamos tanto no modelo flexível sob demanda (por operação/minuta fechada) quanto em pacotes mensais de retaguarda corporativa para agências de alta volumetria que preferem ter assessoria contínua com custo zero de folha CLT.'
    }
  ];

  return (
    <>
      <style>{customStyles}</style>
      <Navbar showMenu={true} />

      {/* 1. HERO SECTION */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45vw', height: '45vw', border: '1px solid rgba(212,175,55,0.06)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '55vw', height: '55vw', border: '1px solid rgba(212,175,55,0.03)', borderRadius: '50%', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div className="remax-hero-badge">
            <Sparkles size={16} /> Parceria Estratégica & Retaguarda para a Rede RE/MAX
          </div>

          <h1 style={{ marginBottom: '24px', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.15' }}>
            A retaguarda jurídica e contratual de alta velocidade para a sua agência <span style={{ color: 'var(--accent-gold)' }}>RE/MAX</span>.
          </h1>

          <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: 'clamp(17px, 1.2vw, 20px)', maxWidth: '880px', margin: '0 auto 36px auto', lineHeight: '1.65' }}>
            Minutas de Compra e Venda em <strong>24h a 48h</strong>, Due Diligence aprofundada para destravar fechamentos complexos e regularização patrimonial (Usucapião e Inventários) sob a coordenação técnica de <strong>Mestre em Direito pela USP</strong>.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button 
              onClick={() => handleRemaxWhatsApp('broker')} 
              className="btn-gold"
              style={{ padding: '1rem 2.2rem', fontSize: '16px', fontWeight: '600', cursor: 'pointer', border: 'none' }}
            >
              Falar com o Jurídico via WhatsApp
            </button>
            <a 
              href="#servicos" 
              className="btn-outline"
              style={{ padding: '1rem 2.2rem', fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              Conhecer os Serviços
            </a>
          </div>

          {/* Selos de Confiança */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '1.5rem', 
            borderTop: '1px solid rgba(212,175,55,0.15)', 
            paddingTop: '2.5rem',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Clock size={26} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px' }}>Minutas em 24h a 48h</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Velocidade para não perder a venda</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Award size={26} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px' }}>Coordenação USP</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Dra. Líbia Florio (Mestre USP)</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={26} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px' }}>Para-Raios da Agência</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Franqueado e corretores blindados</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Lock size={26} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px' }}>Sem Custo Fixo CLT</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Demanda flexível por operação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O DESAFIO DO MODELO RE/MAX */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '16px' }}>
              Por que a rede RE/MAX precisa de um jurídico com a mesma velocidade das suas vendas?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '820px', margin: '0 auto', fontSize: '16.5px' }}>
              O modelo RE/MAX é construído sobre máxima comissão e corretores associados de altíssima produtividade. Mas quando o negócio esquenta, o jurídico tradicional vira um gargalo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="remax-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Clock size={24} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>A Venda Esfria na Minuta</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                Comprador e vendedor apertaram as mãos. Cada dia que o contrato demora no Word é um dia a mais para desistências, contrapropostas ou insegurança das partes.
              </p>
            </div>

            <div className="remax-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <FileSearch size={24} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>O Jurídico que "Só Sabe Travar"</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                Muitos advogados analisam certidões e simplesmente dizem "não faça". Nosso trabalho é desenhar o caminho legal e as garantias certas para que o negócio feche com proteção total.
              </p>
            </div>

            <div className="remax-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={24} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Responsabilidade do Franqueado</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                Processos de evicção, fraudes à execução ou falhas em cláusulas de comissão recaem sobre a imobiliária. A Andrade & Florio atua como o seu para-raios legal institucional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS ESPECÍFICOS PARA A REDE RE/MAX */}
      <section id="servicos" className="section">
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="remax-tag">ESTEIRA JURÍDICA COMPLETA</span>
            <h2 style={{ fontSize: 'clamp(28px, 2.6vw, 38px)', marginBottom: '16px' }}>
              Soluções sob medida para Broker/Owners e Corretores Associados
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '780px', margin: '0 auto', fontSize: '16.5px' }}>
              Da promessa de compra e venda até a regularização mais complexa de matrícula, assumimos a operação legal de ponta a ponta.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Serviço 1 */}
            <div className="remax-card">
              <span className="remax-tag">AGILIDADE DE FECHAMENTO</span>
              <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--accent-gold)' }}>
                1. Minutas de Compra e Venda (CCV) em 24h a 48h
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                Redação jurídica personalizada de Instrumentos Particulares de Promessa de Compra e Venda, Escrituras e Opções de Venda exclusivas.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Cláusulas de sinal, arras e posse condicionada
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Blindagem expressa dos honorários de corretagem
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Alinhamento com exigências de crédito bancário
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <button 
                  onClick={() => handleRemaxWhatsApp('corretor')}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                >
                  Solicitar minuta rápida <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="remax-card">
              <span className="remax-tag">SEGURANÇA TOTAL</span>
              <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--accent-gold)' }}>
                2. Due Diligence Imobiliária & Auditoria de Certidões
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                Pesquisa aprofundada de distribuidores judiciais (cíveis, fiscais, federais, trabalhistas), protestos, situação cadastral e societária dos vendedores.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Parecer jurídico conclusivo e claro para as partes
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Plano de mitigação para processos apontados
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Proteção contra anulação por fraude à execução
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <button 
                  onClick={() => handleRemaxWhatsApp('corretor')}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                >
                  Auditar imóvel e partes <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="remax-card">
              <span className="remax-tag">DESTRAVE PATRIMONIAL</span>
              <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--accent-gold)' }}>
                3. Regularização Imobiliária (Usucapião e Inventários)
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                Transformamos imóveis travados em capturas prontas para venda. Atendemos tanto os clientes da imobiliária quanto o <strong>patrimônio pessoal dos próprios corretores</strong>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Usucapião Extrajudicial e Judicial rápida
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Inventários com cessão de direitos e alvará judicial
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Imóveis valorizados em até 30% após a escritura
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <button 
                  onClick={() => handleRemaxWhatsApp('corretor')}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                >
                  Consultar caso de regularização <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HISTÓRICO DE BASTIDORES & PROVA SOCIAL */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: '12px',
            padding: '3rem',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <BadgeCheck size={32} color="var(--accent-gold)" />
              <h3 style={{ fontSize: '24px', margin: 0 }}>Experiência Comprovada na Cultura RE/MAX</h3>
            </div>
            
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16.5px', lineHeight: '1.7', marginBottom: '24px' }}>
              Nosso escritório tem orgulho de um histórico ativo prestando suporte jurídico e consultivo a operações de franqueados e corretores da rede, incluindo unidades de referência como a <strong>RE/MAX Empire</strong> (atuando ao lado de lideranças como <strong>Renata Lara e Renata Tannus</strong>), <strong>RE/MAX Lepex</strong>, <strong>RE/MAX Front</strong> e diversos corretores associados em São Paulo e no Brasil.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', borderTop: '1px solid rgba(212,175,55,0.15)', paddingTop: '1.5rem' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '16px', marginBottom: '4px' }}>
                  Conhecimento dos Padrões
                </strong>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  Familiaridade com formulários, regras de exclusividade e fluxo de recebimento de comissão da RE/MAX.
                </span>
              </div>

              <div>
                <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '16px', marginBottom: '4px' }}>
                  Apoio ao Corretor
                </strong>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  Aconselhamento direto para destravar objeções jurídicas de compradores e seus advogados em tempo real.
                </span>
              </div>

              <div>
                <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '16px', marginBottom: '4px' }}>
                  Tranquilidade para o Franqueado
                </strong>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                  Broker/Owners livres de dor de cabeça cartorária para focar na expansão da agência e recrutamento.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AUTORIDADE TÉCNICA - DRA. LÍBIA FLORIO */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '100%', height: '100%', border: '1px solid var(--accent-gold)', zIndex: 0, borderRadius: '8px' }}></div>
              <img 
                src="/dra-libia.png" 
                alt="Dra. Líbia Florio - Mestre em Direito pela USP" 
                style={{ position: 'relative', zIndex: 1, objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--bg-surface-light)' }} 
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <div>
              <div className="remax-hero-badge" style={{ marginBottom: '16px' }}>
                <Award size={14} /> Coordenação Jurídica Especializada
              </div>

              <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 36px)', marginBottom: '16px' }}>
                Dra. Líbia Florio
              </h2>

              <p style={{ color: 'var(--accent-gold)', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
                Mestre em Direito pela Universidade de São Paulo (USP)
              </p>

              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15.5px', lineHeight: '1.7', marginBottom: '16px' }}>
                Advogada especialista com mais de duas décadas de atuação no Direito Imobiliário e Contratual de alta complexidade. Com passagens por renomadas bancas do setor (como <em>Timoner e Novaes Advogados</em>) e atuação direta em due diligence para incorporadoras e fundos.
              </p>

              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15.5px', lineHeight: '1.7', marginBottom: '28px' }}>
                Junto à equipe da <strong>Andrade & Florio</strong>, une o rigor técnico acadêmico da USP à velocidade comercial que o mercado imobiliário moderno exige.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setIsDiplomaOpen(true)}
                  className="btn-outline"
                  style={{ padding: '0.8rem 1.6rem', fontSize: '14px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Award size={16} color="var(--accent-gold)" /> Ver Diploma de Mestrado USP
                </button>
                <a 
                  href="https://www.linkedin.com/in/libia-florio-1a938634/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: '0.8rem 1.6rem', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <LinkedinIcon size={16} /> Perfil no LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ - PERGUNTAS FREQUENTES */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="remax-tag">DÚVIDAS OPERACIONAIS</span>
            <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 36px)', marginBottom: '14px' }}>
              Perguntas Frequentes de Franqueados e Corretores RE/MAX
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px' }}>
              Tudo o que você precisa saber sobre prazos, custos e modelo de parceria.
            </p>
          </div>

          <div>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-accordion-item">
                <button className="faq-header" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    color="var(--accent-gold)" 
                    style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0, marginLeft: '12px' }} 
                  />
                </button>
                {openFaq === idx && (
                  <div className="faq-body">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL BANNER */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="remax-cta-banner" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', marginBottom: '18px' }}>
              Leve a retaguarda jurídica da <span style={{ color: 'var(--accent-gold)' }}>Andrade & Florio</span> para a sua RE/MAX.
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '17px', maxWidth: '720px', margin: '0 auto 32px auto', lineHeight: '1.65' }}>
              Agende uma conversa rápida de 15 minutos pelo WhatsApp com nossa equipe para alinhar fluxos de trabalho, minutas ágeis e condições exclusivas de parceria para sua franquia ou equipe.
            </p>
            <button 
              onClick={() => handleRemaxWhatsApp('broker')}
              className="btn-gold"
              style={{ padding: '1.1rem 2.8rem', fontSize: '17px', fontWeight: '700', cursor: 'pointer', border: 'none' }}
            >
              Iniciar Alinhamento pelo WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* MODAL DO DIPLOMA USP */}
      {isDiplomaOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setIsDiplomaOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              backgroundColor: '#121214',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid var(--accent-gold)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsDiplomaOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>
            <h3 style={{ marginBottom: '16px', color: 'var(--accent-gold)' }}>
              Diploma de Mestrado em Direito - Universidade de São Paulo (USP)
            </h3>
            <img 
              src="/diploma-usp.png" 
              alt="Diploma de Mestrado em Direito USP - Dra. Líbia Florio" 
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{ display: 'none', padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Diploma arquivado institucionalmente. Dra. Líbia Florio - Faculdade de Direito do Largo São Francisco (FDUSP).
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
