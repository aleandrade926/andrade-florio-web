import React, { useState } from 'react';
import { 
  FileText, ShieldCheck, Download, CheckCircle2, AlertTriangle, 
  ArrowRight, Lock, Clock, HelpCircle, Star, Scale, Building2, 
  ChevronDown, MessageCircle, Sparkles, Check, FileCheck, Layers
} from 'lucide-react';
import { Navbar, Footer, handleWhatsAppClick } from '../components/Shared';

export default function KitContratos() {
  const [openFaq, setOpenFaq] = useState(null);

  // Link oficial de Checkout Kiwify
  const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/4K6NZbq"; 

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCheckout = () => {
    window.location.href = KIWIFY_CHECKOUT_URL;
  };

  const modulos = [
    {
      titulo: "MÓDULO 1: Transações Imobiliárias",
      foco: "Onde o dinheiro e o risco estão concentrados",
      itens: [
        "01. Contrato de Compra e Venda de Imóvel (à vista e parcelado com arras)",
        "02. Contrato de Locação Residencial (com 3 opções de garantia e vistoria)",
        "03. Contrato de Locação Comercial (com proteção de ponto e regras PJ)",
        "04. Contrato de Comodato de Imóvel (Blindagem anti-usucapião com posse precária)",
        "05. Termo de Vistoria de Imóvel (Laudo de Entrada e Saída)",
        "06. Aditivo Contratual de Locação (Reajuste, novo fiador ou prorrogação)",
        "07. Distrato de Locação (Encerramento amigável e devolução de caução)",
        "08. Notificação Extrajudicial para Despejo / Cobrança de Aluguel",
        "09. Recibo de Sinal e Princípio de Pagamento (Arras confirmatórias)",
        "10. Contrato de Corretagem Imobiliária (Comissão de corretor com exclusividade)",
        "11. Contrato de Empreitada / Reforma de Imóvel (Blindagem contra passivo trabalhista)"
      ]
    },
    {
      titulo: "MÓDULO 2: Negócios e Prestação de Serviços",
      foco: "Volume massivo e segurança para autônomos, PJs e empresas",
      itens: [
        "12. Contrato de Prestação de Serviços Simples e Direto",
        "13. Contrato de Prestação de Serviços PJ / Freelancer (Blindagem anti-CLT)",
        "14. Acordo de Confidencialidade e Não Divulgação (NDA com multa)",
        "15. Contrato de Parceria Comercial / Joint Venture Simples (Divisão de lucros)",
        "16. Contrato de Representação Comercial Autônoma (Lei 4.886/65)",
        "17. Termo de Quitação e Encerramento Pleno de Serviços",
        "18. Distrato de Prestação de Serviços (Rescisão bilateral sem ônus)",
        "19. Contrato de Licenciamento de Uso de Marca (Com royalties)",
        "20. Contrato de Cessão Total de Direitos Autorais e Imagem (Design, código e vídeos)"
      ]
    },
    {
      titulo: "MÓDULO 3: Vida Civil, Veículos e Finanças",
      foco: "Respaldo jurídico para o dia a dia e proteção de patrimônio",
      itens: [
        "21. Contrato de Compra e Venda de Veículo Usado (Carros e motos com vistoria)",
        "22. Termo de Confissão de Dívida e Parcelamento (Título executivo extrajudicial)",
        "23. Contrato de Mútuo Financeiro (Empréstimo particular de dinheiro)",
        "24. Termo de Acordo Extrajudicial e Transação (Fim amigável de litígios)",
        "25. Notificação Extrajudicial de Cobrança com Prazo",
        "26. Procuração de Plenos Poderes (Ad Negotia)",
        "27. Procuração com Poderes Específicos para Venda de Imóvel",
        "28. Declaração de Hipossuficiência Financeira (Isenção de taxas e justiça gratuita)",
        "29. Contrato de Doação de Bens com Reserva de Usufruto Vitalício",
        "30. Recibo de Pagamento Geral e Quitação Plena Irrevogável"
      ]
    },
    {
      titulo: "MÓDULO 4: Trabalhista e RH / CLT (Reforma Trabalhista)",
      foco: "Segurança total para contratações e rotina de funcionários",
      itens: [
        "31. Contrato de Trabalho Intermitente (Art. 452-A CLT com regras de convocação)",
        "32. Contrato de Trabalho por Experiência / Determinado (Limite de 90 dias)",
        "33. Termo Aditivo de Teletrabalho / Home Office (Equipamentos e ajuda de custo)",
        "34. Acordo Individual de Banco de Horas e Compensação Semestral",
        "35. Acordo de Rescisão de Trabalho por Mútuo Consentimento (Art. 484-A CLT)",
        "36. Termo de Advertência Disciplinar por Falta Funcional (Gradação de penas)",
        "37. Termo de Confidencialidade e Não Concorrência de Empregado"
      ]
    },
    {
      titulo: "MÓDULO 5: Societário, Startups e Família",
      foco: "Governança corporativa e blindagem de patrimônio pessoal",
      itens: [
        "38. Acordo de Sócios e Quotistas de Sociedade Limitada (Tag Along e Drag Along)",
        "39. Memorando de Entendimentos (MoU) com Cláusulas Vinculantes de Sigilo",
        "40. Contrato de Convivência e União Estável com Separação Total de Bens",
        "41. Termo de Dissolução Amigável de União Estável e Partilha de Bens"
      ]
    },
    {
      titulo: "MÓDULO 6: Sucessões e Direito Digital",
      foco: "Planejamento sucessório e conformidade digital",
      itens: [
        "42. Testamento Particular Válido com 3 Testemunhas (Art. 1.876 CC)",
        "43. Termos de Uso e Condições Gerais para Plataformas Digitais e SaaS",
        "44. Política de Privacidade e Proteção de Dados (LGPD - Lei 13.709/2018)",
        "45. Contrato de Gestão de Tráfego Pago, Mídia de Performance e Marketing"
      ]
    },
    {
      titulo: "MÓDULO 7: Rural, Agronegócio e Contratos Especiais",
      foco: "Contratos de nicho com alta demanda e proteção específica",
      itens: [
        "46. Contrato de Arrendamento Rural (Estatuto da Terra - Lei 4.504/64)",
        "47. Contrato de Trespasse e Alienação de Ponto Comercial / Estabelecimento",
        "48. Compromisso de Compra e Venda de Terreno / Lote Urbano Parcelado",
        "49. Contrato de Permuta de Imóveis (com ou sem Torna Financeira)",
        "50. Promessa de Cessão de Direitos Hereditários (Antes da Partilha)",
        "51. Contrato de Gaveta (Cessão de Imóvel Financiado Caixa com Procuração)",
        "52. Contrato de Honorários Advocatícios com Cláusula Quota Litis (Êxito)",
        "53. Contrato de Sublocação Residencial ou Comercial com Autorização",
        "54. Compra e Venda com Reserva de Domínio de Máquinas e Equipamentos",
        "55. Contrato de Locação por Temporada (Até 90 Dias com Pagamento Adiantado)",
        "56. Contrato de Namoro (Declaração Formal de Inexistência de União Estável)",
        "57. Contrato de Consignação e Venda de Veículo em Garagem / Loja",
        "58. Contrato de Prestação de Serviços de Pedreiro, Construção e Obras",
        "59. Contrato de Prestação de Serviços de Fotografia e Cobertura de Eventos",
        "60. Contrato de Personal Trainer e Consultoria Esportiva Individualizada"
      ]
    }
  ];

  const faqs = [
    {
      q: "Em qual formato recebo os 60 contratos?",
      a: "Todos os 60 documentos são entregues em formato Word (.docx) 100% editáveis no seu computador, celular ou Google Docs, além do acesso ao portal com leitor online e inteligência artificial para adaptação de cláusulas."
    },
    {
      q: "Por que esses modelos custam apenas R$ 19,90 se foram feitos por advogados?",
      a: "Porque criamos um acervo padronizado de escala para a internet. Enquanto uma única consulta para redigir um contrato individual na banca custa no mínimo R$ 800,00, este acervo digital entrega a estrutura pronta por um valor acessível e irrecusável."
    },
    {
      q: "Como funciona o acesso após a compra?",
      a: "Assim que o Pix for aprovado, a sua chave de acesso e o link do portal exclusivo (andradeflorio.com.br/acervo-contratos) ficam imediatamente disponíveis na sua área de membros. Lá você pode ler todos os 60 contratos na tela, personalizar com o assistente inteligente da banca e baixar um por um ou o pacote completo em .zip."
    },
    {
      q: "E se eu precisar de suporte jurídico individual?",
      a: "Dentro do portal você conta com um botão direto de WhatsApp com a banca Andrade & Florio para agendar análises expressas de minutas de alto valor."
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-main)', fontFamily: 'var(--font-body)' }}>
      <Navbar />

      {/* HERO SECTION DE ALTO IMPACTO */}
      <section style={{ 
        padding: '5rem 1.5rem 3.5rem', 
        maxWidth: '1100px', 
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
          Banca Andrade & Florio • 60+ Minutas Blindadas + IA Integrada
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
          O Acervo Definitivo de Contratos: 60+ Minutas Editáveis em Word + Assistente Jurídico com IA.
        </h1>

        {/* SUB-HEADLINE */}
        <p style={{ 
          fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)', 
          color: '#D1D5DB', 
          maxWidth: '880px', 
          margin: '0 auto 2.5rem',
          lineHeight: 1.6
        }}>
          Chega de amadorismo e risco jurídico. Tenha em mãos o acervo com mais de <strong>60 modelos que cobrem Imobiliário, Trabalhista/CLT, Empresarial, Rural, Digital, Família e Veículos</strong> — com assistente de IA da banca para personalizar cláusulas em segundos.
        </p>

        {/* ANCORAGEM E OFERTA R$ 19,90 */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '2px solid var(--accent-gold)',
          borderRadius: '12px',
          padding: '2.5rem 2rem',
          maxWidth: '680px',
          margin: '0 auto 3rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <span style={{ textDecoration: 'line-through', color: '#9CA3AF', fontSize: '1.3rem' }}>
            De R$ 67,00
          </span>
          <div style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', fontWeight: 800, color: 'var(--accent-gold)', margin: '0.2rem 0' }}>
            R$ 19,90
          </div>
          <p style={{ color: '#E5E7EB', fontSize: '1rem', marginBottom: '1.75rem', fontWeight: 500 }}>
            Pagamento único no Pix • Menos que um lanche para blindar todo o seu patrimônio
          </p>

          <button 
            onClick={handleCheckout}
            className="btn-gold"
            style={{
              width: '100%',
              fontSize: '1.25rem',
              padding: '1.25rem 2rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: '0 12px 35px rgba(212, 175, 55, 0.35)',
              border: 'none',
              textTransform: 'uppercase'
            }}
          >
            <Download size={24} />
            QUERO O ACERVO COMPLETO DE CONTRATOS POR R$ 19,90
          </button>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.9rem', marginBottom: 0 }}>
            (Chave de acesso imediata disponível na sua área de membros)
          </p>
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
            <CheckCircle2 size={18} color="var(--accent-gold)" /> 60 Arquivos Word (.docx) Editáveis
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold)" /> Portal com Leitor Online Interativo
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--accent-gold)" /> Download Individual ou Pacote Zip
          </span>
        </div>
      </section>

      {/* BLOCO DE AUTORIDADE */}
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
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: 1.7, margin: 0 }}>
            Contratar um advogado para redigir apenas <strong>UM</strong> destes contratos custaria no mínimo R$ 800,00. Hoje, você leva o acervo completo com <strong>60+ documentos editáveis e IA integrada por apenas R$ 19,90</strong>. É a engenharia jurídica de um escritório atuante diretamente na sua mesa.
          </p>
        </div>
      </section>

      {/* OS 60 DOCUMENTOS EM 7 MÓDULOS */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.3rem', marginBottom: '0.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
            Conheça os 60 Documentos Inclusos em 7 Grandes Módulos
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
            Organizados em 7 módulos práticos para você encontrar qualquer minuta em segundos ou personalizar via Inteligência Artificial.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {modulos.map((mod, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--bg-surface-light)',
                borderRadius: '10px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--bg-surface-light)', paddingBottom: '1rem' }}>
                <span style={{ 
                  backgroundColor: 'rgba(212, 175, 55, 0.15)', 
                  color: 'var(--accent-gold)', 
                  fontWeight: 700, 
                  fontSize: '0.8rem', 
                  padding: '0.3rem 0.75rem', 
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  {mod.foco}
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginTop: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  {mod.titulo}
                </h3>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', 
                gap: '1rem' 
              }}>
                {mod.itens.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.94rem', color: '#E5E7EB' }}>
                    <Check size={18} color="var(--accent-gold)" style={{ minWidth: '18px', marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEGUNDO CTA DE FECHAMENTO */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
          Acesso Imediato aos 60 Modelos
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
          De R$ 67,00 por apenas <strong>R$ 19,90 no Pix</strong>. Liberação instantânea da sua chave.
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
            boxShadow: '0 12px 35px rgba(212, 175, 55, 0.35)',
            border: 'none',
            textTransform: 'uppercase'
          }}
        >
          <Download size={24} />
          BAIXAR OS 60 CONTRATOS AGORA
        </button>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.9rem', marginBottom: 0 }}>
          (Chave de acesso imediata disponível na sua área de membros)
        </p>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '4rem 1.5rem 5rem', maxWidth: '850px', margin: '0 auto' }}>
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
