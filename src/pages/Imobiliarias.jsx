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
  Award
} from 'lucide-react';
import { Navbar, Footer, WhatsAppButton, StickyWhatsApp, handleWhatsAppClick, LinkedinIcon } from '../components/Shared';

const customStyles = 
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
    border-radius: 8px;
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
;

export default function Imobiliarias() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImobWhatsApp = () => {
    const msg = 'Olá! Sou diretor/gestor de imobiliária e gostaria de conhecer como funciona a retaguarda jurídica e contratual da Andrade & Florio para nossos corretores e fechamentos.';
    handleWhatsAppClick('nlxZCPiY6qAcEMzlgIgD', msg);
  };

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
            <Sparkles size={16} /> Parcerias & Retaguarda para Imobiliárias
          </div>

          <h1 style={{ marginBottom: '24px', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.15' }}>
            A retaguarda jurídica contratual da sua imobiliária em <span style={{ color: 'var(--accent-gold)' }}>24h a 48h</span>.
          </h1>

          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 'clamp(17px, 1.2vw, 20px)', maxWidth: '860px', margin: '0 auto 36px auto', lineHeight: '1.65' }}>
            Libere seus corretores para focar no que dá resultado: <strong>captar, atender e vender</strong>. Assumimos a redação das promessas de compra e venda, a auditoria de certidões e servimos de <strong>para-raios legal</strong> para a sua operação, sob coordenação direta de mestres em Direito pela USP.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button 
              onClick={handleImobWhatsApp} 
              className="btn-gold"
              style={{ padding: '1rem 2.2rem', fontSize: '16px', fontWeight: '600', cursor: 'pointer', border: 'none' }}
            >
              Alinhar Parceria via WhatsApp
            </button>
            <a 
              href="#como-funciona" 
              className="btn-outline"
              style={{ padding: '1rem 2.2rem', fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              Entenda o Modelo
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
                Corretores gastam dias tentando adaptar contratos de gaveta antigos no Word, correndo atrás de certidões e negociando cláusulas complexas, quando deveriam estar captando novos imóveis e atendendo clientes.
              </p>
            </div>

            <div className="imob-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={24} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>O Peso do Risco e da Culpa</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                Se qualquer pendência registral, distrato ou cláusula dúbia gerar atrito, a cobrança e o desgaste sempre recaem sobre a imobiliária e o corretor. Servimos como o para-raios jurídico que assume a fundamentação técnica.
              </p>
            </div>

            <div className="imob-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Building2 size={24} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Inviabilidade de Jurídico CLT</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                Contratar advogados internos na folha de pagamento gera custos fixos pesados e encargos constantes. Nossa parceria entrega uma banca especializada sob demanda, sem vínculo empregatício e com máxima agilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O QUE ENTREGAMOS EM CADA FECHAMENTO */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '16px' }}>
              O Escopo Completo da Retaguarda Jurídica
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '780px', margin: '0 auto', fontSize: '16.5px' }}>
              Tudo o que sua imobiliária precisa para assinar contratos com tranquilidade absoluta e velocidade comercial.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="imob-card">
              <FileText size={28} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Redação de Promessas de Venda</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14.5px', lineHeight: '1.6' }}>
                Elaboração de minutas personalizadas para cada imóvel, com regras nítidas de sinal, princípio de pagamento, condições resolutivas, posse e prazos de escritura.
              </p>
            </div>

            <div className="imob-card">
              <Search size={28} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Due Diligence & Certidões</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14.5px', lineHeight: '1.6' }}>
                Conferência e triagem de certidões pessoais (cíveis, trabalhistas, fiscais e protestos) dos vendedores e compradores, além de matrícula atualizada e ônus reais.
              </p>
            </div>

            <div className="imob-card">
              <Scale size={28} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Blindagem de Comissões</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14.5px', lineHeight: '1.6' }}>
                Cláusulas de intermediação claras e juridicamente seguras que protegem o direito aos honorários de corretagem da imobiliária e dos corretores envolvidos.
              </p>
            </div>

            <div className="imob-card">
              <Users size={28} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Suporte Direto aos Corretores</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14.5px', lineHeight: '1.6' }}>
                Canal ágil para esclarecer dúvidas documentais pontuais com a equipe jurídica da banca antes e durante as reuniões com os clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESTRAVE DE NEGÓCIOS COMPLEXOS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="imob-hero-badge">
                Destrave de Negócios
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '20px' }}>
                Não perca vendas por pendências documentais ou sucessórias.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '16.5px', lineHeight: '1.65', marginBottom: '24px' }}>
                Quantas vendas a sua imobiliária já viu esfriarem porque o imóvel pertencia a herdeiros, estava sem inventário concluído, sem habite-se ou com irregularidade de registro?
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '16.5px', lineHeight: '1.65', marginBottom: '32px' }}>
                A Andrade & Florio atua como o braço jurídico resolutivo da sua equipe para estruturar soluções viáveis e destravar negócios que a concorrência dá como perdidos:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Inventários e Partilhas Extrajudiciais Express (para liberar o imóvel à venda)',
                  'Regularização Fundiária e Usucapião Urbana e Rural',
                  'Cancelamento de penhoras, gravames e hipotecas pretéritas',
                  'Planejamento Patrimonial e Holdings Familiares para compradores investidores'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.85)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #1f2024 0%, #151618 100%)', 
              border: '1px solid var(--accent-gold)', 
              borderRadius: '12px', 
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <Scale size={42} color="var(--accent-gold)" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '22px', marginBottom: '14px' }}>Autoridade Notarial & Registral</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.65', marginBottom: '20px' }}>
                Liderada pela <strong>Dra. Líbia Florio</strong>, Mestre em Direito pela Universidade de São Paulo (USP) e com mais de três décadas de vivência registral e imobiliária.
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: '1.65', marginBottom: '28px' }}>
                Oferecemos à sua imobiliária o mesmo peso técnico que atende grandes grupos empresariais e patrimônios privados.
              </p>
              <button 
                onClick={handleImobWhatsApp} 
                className="btn-gold" 
                style={{ width: '100%', padding: '0.9rem', fontSize: '15px', cursor: 'pointer', border: 'none' }}
              >
                Falar com a Equipe de Parcerias
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMO FUNCIONA (FLUXO EM 3 PASSOS) */}
      <section id="como-funciona" className="section">
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

      {/* 6. BANNER FINAL SEM ATRITO */}
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
              onClick={handleImobWhatsApp} 
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

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
