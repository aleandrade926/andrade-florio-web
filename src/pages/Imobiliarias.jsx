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
  FileSearch,
  ChevronDown,
  X,
  BadgeCheck
} from 'lucide-react';
import { Navbar, Footer, handleWhatsAppClick, LinkedinIcon, StickyWhatsApp } from '../components/Shared';

const customStyles = `
  .imob-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
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

  .imob-card {
    background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(212,175,55,0.02) 100%);
    border: 1px solid var(--bg-surface-light);
    border-radius: 10px;
    padding: 2.2rem 2rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .imob-card:hover {
    border-color: var(--accent-gold);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.35);
  }

  .imob-step-num {
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

  .imob-cta-banner {
    background: linear-gradient(135deg, #18191b 0%, #121214 100%);
    border: 1px solid rgba(212,175,55,0.3);
    border-radius: 12px;
    padding: 3.5rem 2.5rem;
    position: relative;
    overflow: hidden;
  }

  .imob-tag {
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

export default function Imobiliarias() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImobWhatsApp = (origem = 'geral') => {
    let msg = 'Olá! Sou gestor/corretor de imobiliária e gostaria de conhecer como funciona a retaguarda jurídica e contratual da Andrade & Florio para nossos fechamentos.';
    if (origem === 'gestor') {
      msg = 'Olá! Sou diretor/gestor de imobiliária e gostaria de estruturar a retaguarda jurídica e de contratos da nossa agência com a Andrade & Florio.';
    } else if (origem === 'corretor') {
      msg = 'Olá! Sou corretor de imóveis e tenho um negócio precisando de minuta ágil em 24h/48h, due diligence ou regularização de imóvel travado.';
    }
    handleWhatsAppClick('nlxZCPiY6qAcEMzlgIgD', msg);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Qual o prazo de entrega das minutas de Compra e Venda?',
      a: 'Nosso padrão operacional para minutas personalizadas de Compromisso de Compra e Venda (CCV) é de 24 a 48 horas úteis após o recebimento das informações básicas das partes e da matrícula.'
    },
    {
      q: 'A Due Diligence apenas aponta riscos ou propõe soluções para fechar o negócio?',
      a: 'Nossa advocacia é orientada a viabilizar negócios com absoluta segurança jurídica. Não somos o "jurídico burocrático" que apenas trava vendas. Quando há apontamentos nas certidões, desenhamos o plano de blindagem (cláusulas resolutivas, retenções cautelares ou garantias) para permitir que a transação ocorra protegida de evicção ou fraude à execução.'
    },
    {
      q: 'Como funciona a regularização de imóveis travados (Usucapião e Inventário)?',
      a: 'Imóveis sem escritura definitiva, herdados sem inventário aberto ou com pendências registrais representam vendas represadas. Atuamos com celeridade judicial e extrajudicial em cartório para regularizar o imóvel, destravar a matrícula e permitir que a sua equipe feche a venda com até 30% de valorização patrimonial.'
    },
    {
      q: 'O escritório atende também demandas pessoais dos corretores e equipe?',
      a: 'Sim. Além do suporte às transações comerciais dos clientes da imobiliária, prestamos assessoria completa para o patrimônio pessoal dos próprios corretores e gestores — como ações de usucapião de imóvel próprio, inventários de família e contratos particulares com condições diferenciadas de parceria.'
    },
    {
      q: 'A imobiliária precisa pagar mensalidade fixa obrigatória?',
      a: 'Não. Trabalhamos tanto no modelo flexível sob demanda (por operação ou minuta fechada) quanto em pacotes mensais de retaguarda corporativa para agências de alta volumetria que preferem ter suporte jurídico contínuo com zero custo de folha CLT.'
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
          <div className="imob-hero-badge">
            <Sparkles size={16} /> Parcerias & Retaguarda Jurídica para Imobiliárias
          </div>

          <h1 style={{ marginBottom: '24px', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.15' }}>
            A retaguarda jurídica e contratual da sua imobiliária em <span style={{ color: 'var(--accent-gold)' }}>24h a 48h</span>.
          </h1>

          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 'clamp(17px, 1.2vw, 20px)', maxWidth: '880px', margin: '0 auto 36px auto', lineHeight: '1.65' }}>
            Libere seus corretores para focar no que dá resultado: <strong>captar, atender e vender</strong>. Assumimos a redação das promessas de compra e venda, a auditoria de certidões (due diligence) e servimos de <strong>para-raios legal</strong> para a sua operação, sob coordenação direta de Mestre em Direito pela USP.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button 
              onClick={() => handleImobWhatsApp('gestor')} 
              className="btn-gold"
              style={{ padding: '1rem 2.2rem', fontSize: '16px', fontWeight: '600', cursor: 'pointer', border: 'none' }}
            >
              Alinhar Parceria via WhatsApp
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
              <Clock size={24} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px' }}>Minutas em 24h a 48h</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Agilidade máxima no fechamento</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Award size={24} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px' }}>Chancela USP</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Coordenação Dra. Líbia Florio</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={24} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px' }}>Para-Raios Legal</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Sua imobiliária blindada</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Lock size={24} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '15px' }}>Zero Folha Fixa</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Retaguarda sob demanda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O PROBLEMA REAL DAS IMOBILIÁRIAS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '16px' }}>
              Por que corretores perdem tempo e imobiliárias assumem riscos desnecessários?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '780px', margin: '0 auto', fontSize: '16.5px' }}>
              No dia a dia do mercado imobiliário, a elaboração e revisão de minutas é o maior gargalo operacional entre o aperto de mãos e o recebimento da comissão.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="imob-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Clock size={24} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Tempo Perdido com Minutas</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                Corretores gastam dias tentando adaptar contratos antigos no Word, correndo atrás de certidões e negociando cláusulas complexas, quando deveriam estar captando novos imóveis e atendendo clientes.
              </p>
            </div>

            <div className="imob-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <FileSearch size={24} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>O Jurídico que "Só Trava"</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                Muitos advogados apenas apontam riscos e inviabilizam negociações. Nosso compromisso é desenhar as cláusulas de salvaguarda que protegem as partes e viabilizam o fechamento com segurança total.
              </p>
            </div>

            <div className="imob-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={24} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>O Peso do Risco e da Culpa</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                Se uma venda é anulada por fraude contra credores ou dívida fiscal não identificada, a responsabilidade civil e o desgaste recaem sobre a imobiliária. A Andrade & Florio assume esse para-raios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS & PILARES DE RETAGUARDA */}
      <section id="servicos" className="section">
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="imob-tag">ESTEIRA JURÍDICA COMPLETA</span>
            <h2 style={{ fontSize: 'clamp(28px, 2.6vw, 38px)', marginBottom: '16px' }}>
              Soluções Sob Medida para Imobiliárias e Corretores
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '780px', margin: '0 auto', fontSize: '16.5px' }}>
              Atuamos desde a minuta expressa até a regularização registral mais complexa com rigor de pós-graduação USP e velocidade de balcão de vendas.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Serviço 1: Minutas */}
            <div className="imob-card">
              <span className="imob-tag">AGILIDADE DE FECHAMENTO</span>
              <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--accent-gold)' }}>
                1. Minutas de Compra e Venda em 24h a 48h
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                Instrumentos particulares de compromisso de compra e venda (CCV), locações comerciais e residenciais, cessões de direitos e opções exclusivas.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Cláusulas resolutivas e proteção de arras/sinal
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Blindagem expressa dos honorários de corretagem
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Adequação às regras de financiamentos bancários
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <button 
                  onClick={() => handleImobWhatsApp('corretor')}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                >
                  Solicitar minuta rápida <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Serviço 2: Due Diligence */}
            <div className="imob-card">
              <span className="imob-tag">SEGURANÇA JURÍDICA</span>
              <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--accent-gold)' }}>
                2. Due Diligence Imobiliária & Auditoria
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                Auditoria minuciosa das certidões dos vendedores, empresas coligadas e do imóvel para certificar que a transação é 100% inatacável.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Parecer conclusivo em linguagem clara para o cliente
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Soluções para apontamentos e processos cíveis/trabalhistas
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Prevenção ativa de anulações por fraude ou evicção
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <button 
                  onClick={() => handleImobWhatsApp('corretor')}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                >
                  Auditar imóvel e partes <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Serviço 3: Regularização */}
            <div className="imob-card">
              <span className="imob-tag">DESTRAVE PATRIMONIAL</span>
              <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--accent-gold)' }}>
                3. Regularização Imobiliária (Usucapião e Inventários)
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                Viabilizamos a venda de imóveis represados sem matrícula ou com espólio pendente. Atendimento também para o <strong>patrimônio pessoal do próprio corretor</strong>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Usucapião Extrajudicial rápida em cartório
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Inventários com alvará e cessão de direitos hereditários
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'rgba(255,255,255,0.85)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} /> Imóveis valorizados em até 30% após a regularização
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <button 
                  onClick={() => handleImobWhatsApp('corretor')}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                >
                  Consultar caso de regularização <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA (FLUXO EM 3 PASSOS) */}
      <section id="como-funciona" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '16px' }}>
              Como Funciona a Parceria no Dia a Dia
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '700px', margin: '0 auto', fontSize: '16.5px' }}>
              Um fluxo direto, sem atritos e sem burocracia para a sua equipe.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="imob-card">
              <div className="imob-step-num">1</div>
              <h3 style={{ fontSize: '19px', marginBottom: '10px' }}>Envio dos Dados</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '15px', lineHeight: '1.6' }}>
                Fechou o acordo comercial? O corretor envia os dados básicos das partes, valores combinados e matrícula do imóvel pelo canal exclusivo da parceria.
              </p>
            </div>

            <div className="imob-card">
              <div className="imob-step-num">2</div>
              <h3 style={{ fontSize: '19px', marginBottom: '10px' }}>Redação & Checagem Express</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '15px', lineHeight: '1.6' }}>
                Em <strong>24h a 48h</strong>, nossa equipe entrega a minuta personalizada de promessa de compra e venda acompanhada do parecer de conferência de certidões.
              </p>
            </div>

            <div className="imob-card">
              <div className="imob-step-num">3</div>
              <h3 style={{ fontSize: '19px', marginBottom: '10px' }}>Assinatura Blindada</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '15px', lineHeight: '1.6' }}>
                As partes assinam com total segurança jurídica. Se houver qualquer dúvida ou questionamento de cláusula, o respaldo técnico é 100% da Andrade & Florio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AUTORIDADE TÉCNICA - DRA. LÍBIA FLORIO */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Diploma USP (Miniatura Clicável com Efeito Ampliar) */}
            <div>
              <div 
                style={{ 
                  position: 'relative', 
                  padding: '1rem', 
                  background: 'var(--bg-surface-light)', 
                  border: '1px solid var(--accent-gold)', 
                  borderRadius: '6px',
                  cursor: 'pointer', 
                  overflow: 'hidden'
                }}
                onClick={() => setIsDiplomaOpen(true)}
                onMouseOver={e => {
                  const overlay = e.currentTarget.querySelector('.diploma-hover-overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseOut={e => {
                  const overlay = e.currentTarget.querySelector('.diploma-hover-overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img 
                  src="/diploma-usp.jpg" 
                  alt="Diploma de Mestrado da USP - Dra. Líbia Florio" 
                  style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--bg-surface)', borderRadius: '4px' }}
                />
                <div 
                  className="diploma-hover-overlay"
                  style={{
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%',
                    background: 'rgba(17, 17, 17, 0.72)', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    opacity: 0, 
                    transition: 'opacity 0.3s ease', 
                    pointerEvents: 'none'
                  }}
                >
                  <Search size={40} color="var(--accent-gold)" style={{ marginBottom: '0.5rem' }} />
                  <span style={{ color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: '700' }}>Ampliar Diploma</span>
                </div>
              </div>
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
                Mestrado em Direito Comercial - Universidade de São Paulo (USP) • Clique na imagem para ampliar
              </p>
            </div>

            {/* Bio Dra. Líbia */}
            <div>
              <div className="imob-hero-badge" style={{ marginBottom: '16px' }}>
                <Award size={14} /> Coordenação Jurídica Especializada
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 36px)', margin: 0 }}>
                  Dra. Líbia Florio
                </h2>
                <a 
                  href="https://www.linkedin.com/in/libiaflorio/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--accent-gold)', display: 'flex', transition: 'opacity 0.2s ease' }} 
                  onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseOut={e => e.currentTarget.style.opacity = '1'}
                  aria-label="LinkedIn Dra. Líbia Florio"
                >
                  <LinkedinIcon size={28} />
                </a>
              </div>

              <p style={{ color: 'var(--accent-gold)', fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>
                Mestre em Direito pela Universidade de São Paulo (USP)
              </p>

              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15.5px', lineHeight: '1.7', marginBottom: '16px' }}>
                Advogada especialista com mais de três décadas de atuação no Direito Imobiliário, Notarial e Registral de alta complexidade. Com passagens por renomadas bancas do setor e atuação direta em due diligence para incorporadoras e fundos imobiliários.
              </p>

              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15.5px', lineHeight: '1.7', marginBottom: '24px' }}>
                À frente da <strong>Andrade & Florio</strong>, une o rigor técnico acadêmico da USP à velocidade que o mercado imobiliário moderno exige para não perder fechamentos.
              </p>

              <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid rgba(212,175,55,0.15)', paddingTop: '1.5rem' }}>
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
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Comissão Especial</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ - PERGUNTAS FREQUENTES */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="imob-tag">DÚVIDAS FREQUENTES</span>
            <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 36px)', marginBottom: '14px' }}>
              Perguntas Frequentes de Imobiliárias e Corretores
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px' }}>
              Tudo o que você precisa saber sobre prazos, custos e modelo de parceria sob demanda.
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

      {/* 7. BANNER FINAL SEM ATRITO */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="imob-cta-banner" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 38px)', marginBottom: '18px' }}>
              Leve uma retaguarda jurídica de elite para a sua imobiliária.
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '17px', maxWidth: '720px', margin: '0 auto 32px auto', lineHeight: '1.6' }}>
              Sem mensalidades obrigatórias, sem custos fixos de folha e com a segurança de uma banca com chancela USP para proteger cada fechamento.
            </p>

            <button 
              onClick={() => handleImobWhatsApp('gestor')} 
              className="btn-gold" 
              style={{ padding: '1.1rem 2.8rem', fontSize: '17px', fontWeight: '600', cursor: 'pointer', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              Conversar com a Equipe de Parcerias <ArrowRight size={18} />
            </button>
            <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', marginTop: '16px' }}>
              Atendimento ágil pelo WhatsApp para imobiliárias e corretores credenciados.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal do Diploma USP */}
      {isDiplomaOpen && (
        <div 
          style={{
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.92)', 
            backdropFilter: 'blur(6px)',
            zIndex: 99999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '2rem'
          }}
          onClick={() => setIsDiplomaOpen(false)}
        >
          <div style={{ position: 'relative', maxWidth: '880px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsDiplomaOpen(false)}
              style={{
                position: 'absolute', 
                top: '-45px', 
                right: '0', 
                background: 'none', 
                border: 'none', 
                color: 'var(--accent-gold)', 
                fontSize: '2.8rem', 
                cursor: 'pointer', 
                lineHeight: '1'
              }}
              aria-label="Fechar"
            >
              &times;
            </button>
            <img 
              src="/diploma-usp.jpg" 
              alt="Diploma de Mestrado da USP - Dra. Líbia Florio" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block',
                border: '2px solid var(--accent-gold)', 
                boxShadow: '0 15px 50px rgba(0,0,0,0.7)',
                borderRadius: '4px'
              }} 
            />
            <p style={{ textAlign: 'center', color: '#fff', fontSize: '0.9rem', marginTop: '1rem', letterSpacing: '0.5px' }}>
              Diploma de Mestrado em Direito - Faculdade de Direito da Universidade de São Paulo (FDUSP)
            </p>
          </div>
        </div>
      )}

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
