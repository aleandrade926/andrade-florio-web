import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, ChevronRight, ChevronLeft, BookOpen, ShieldCheck, 
  Download, Copy, Check, MessageCircle, FileText, ArrowLeft,
  Sparkles, Printer, RefreshCw, AlertTriangle, Scale
} from 'lucide-react';
import contratosData from '../data/contratosData.json';
import { handleWhatsAppClick } from '../components/Shared';

const Gatekeeper = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPass = password.trim().toUpperCase();
    if (cleanPass === 'CONTRATOS2026' || cleanPass === 'LIBIA2026' || cleanPass === 'AF2026') {
      sessionStorage.setItem('andrade_contratos_auth', 'true');
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      fontFamily: 'var(--font-body)'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        border: '1px solid var(--accent-gold)',
        maxWidth: '460px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <ShieldCheck size={52} color="var(--accent-gold)" style={{ margin: '0 auto' }} />
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            color: 'var(--accent-gold)', 
            fontSize: '2rem',
            marginTop: '1rem',
            lineHeight: 1.2
          }}>
            Acesso Restrito
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.6rem', fontSize: '0.95rem' }}>
            Acervo Inteligente de Contratos & Micro-SaaS Jurídico
          </p>
          <span style={{ fontSize: '0.8rem', color: '#D4AF37', display: 'block', marginTop: '0.25rem' }}>
            Andrade & Florio Sociedade de Advogados
          </span>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua Chave de Acesso"
              style={{
                width: '100%',
                padding: '1.1rem',
                backgroundColor: 'var(--bg-color)',
                border: error ? '1px solid #ef4444' : '1px solid var(--bg-surface-light)',
                borderRadius: '6px',
                color: 'var(--text-main)',
                fontSize: '1.05rem',
                outline: 'none',
                textAlign: 'center',
                letterSpacing: '2px',
                transition: 'border-color 0.3s'
              }}
            />
            {error && (
              <span style={{ color: '#ef4444', fontSize: '0.85rem', display: 'block', marginTop: '0.6rem', textAlign: 'center' }}>
                Chave incorreta. Digite CONTRATOS2026 recebida na Kiwify.
              </span>
            )}
          </div>
          <button 
            type="submit"
            className="btn-gold"
            style={{ 
              width: '100%', 
              marginTop: '0.5rem',
              padding: '1.1rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <Lock size={18} />
            Liberar Portal
          </button>
        </form>
      </div>
    </div>
  );
};

export default function AcervoContratos() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('andrade_contratos_auth') === 'true';
  });

  // visualizacao: 'gerador' ou 'templates'
  const [activeTab, setActiveTab] = useState('gerador');
  const [activeSlide, setActiveSlide] = useState(0);
  const [copied, setCopied] = useState(false);

  // Estados do Micro-SaaS Gerador
  const [tipoGerador, setTipoGerador] = useState('compra_venda');
  const [etapaGerador, setEtapaGerador] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [contratoGerado, setContratoGerado] = useState('');

  const [formData, setFormData] = useState({
    parte1Nome: '',
    parte1Cpf: '',
    parte1Endereco: '',
    parte2Nome: '',
    parte2Cpf: '',
    parte2Endereco: '',
    imovelEndereco: '',
    imovelMatricula: '',
    valorTotal: '',
    valorSinal: '',
    prazoMeses: '30',
    garantiaLocacao: 'caucao',
    temPendenciaInventario: 'nao',
    cidadeForo: 'São Paulo/SP'
  });

  const handleFormChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleGerarContrato = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const dataHoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
      let txt = '';

      if (tipoGerador === 'compra_venda') {
        txt = `INSTRUMENTO PARTICULAR DE PROMESSA DE COMPRA E VENDA DE IMÓVEL COM ARRAS E CLÁUSULA RESOLUTIVA EXPRESSA

Pelo presente instrumento particular:

VENDEDOR(A): ${formData.parte1Nome || '[NOME DO VENDEDOR]'}, brasileiro(a), portador(a) do CPF nº ${formData.parte1Cpf || '[CPF]'}, residente e domiciliado(a) na ${formData.parte1Endereco || '[ENDEREÇO DO VENDEDOR]'}; e de outro lado:

COMPRADOR(A): ${formData.parte2Nome || '[NOME DO COMPRADOR]'}, brasileiro(a), portador(a) do CPF nº ${formData.parte2Cpf || '[CPF]'}, residente e domiciliado(a) na ${formData.parte2Endereco || '[ENDEREÇO DO COMPRADOR]'};

Têm entre si, justo e contratado, o seguinte:

CLÁUSULA PRIMEIRA – DO OBJETO
O VENDEDOR promete vender ao COMPRADOR o imóvel situado na ${formData.imovelEndereco || '[ENDEREÇO DO IMÓVEL]'}, devidamente registrado sob a matrícula nº ${formData.imovelMatricula || '[Nº MATRÍCULA]'} perante o Cartório de Registro de Imóveis competente, com todas as suas benfeitorias, livre e desembaraçado de dúvidas, dívidas, hipotecas ou quaisquer gravames até a transmissão definitiva da posse.

CLÁUSULA SEGUNDA – DO PREÇO E ARRAS (SINAL)
O preço total e ajustado é de R$ ${formData.valorTotal || '[VALOR TOTAL]'}, a ser pago da seguinte forma:
a) R$ ${formData.valorSinal || '[VALOR DO SINAL]'}, pagos nesta data a título de SINAL E PRINCÍPIO DE PAGAMENTO (ARRAS CONFIRMATÓRIAS - Art. 417 do Código Civil);
b) O saldo restante será quitado no ato da lavratura da Escritura Pública Definitiva ou mediante financiamento bancário no prazo de até 45 dias.

CLÁUSULA TERCEIRA – DA CLÁUSULA RESOLUTIVA EXPRESSA (ART. 474 DO CC)
O não pagamento de qualquer parcela ou saldo final acarretará a imediata e automática resolução de pleno direito deste contrato, mediante notificação extrajudicial com prazo de 15 dias para purga da mora, com perda integral do sinal em favor do VENDEDOR.

CLÁUSULA QUARTA – DAS CERTIDÕES OBRIGATÓRIAS
O VENDEDOR apresentará em até 15 dias as certidões negativas de feitos cíveis, fiscais e trabalhistas, e certidão de ônus da matrícula. Havendo qualquer apontamento de risco de fraude contra credores, o COMPRADOR poderá rescindir o pacto com devolução de 100% dos valores.

CLÁUSULA QUINTA – DO FORO
Fica eleito o Foro da Comarca de ${formData.cidadeForo} para dirimir qualquer dúvida deste contrato.

${formData.cidadeForo}, ${dataHoje}.

___________________________________________________
VENDEDOR(A): ${formData.parte1Nome || '[VENDEDOR]'}

___________________________________________________
COMPRADOR(A): ${formData.parte2Nome || '[COMPRADOR]'}

TESTEMUNHAS:
1. ________________________ CPF: ____________________
2. ________________________ CPF: ____________________`;
      } else {
        txt = `CONTRATO DE LOCAÇÃO RESIDENCIAL COM GARANTIA E REGRAS DE VISTORIA (LEI 8.245/91)

LOCADOR(A): ${formData.parte1Nome || '[NOME DO LOCADOR]'}, CPF nº ${formData.parte1Cpf || '[CPF]'}, residente na ${formData.parte1Endereco || '[ENDEREÇO]'}.
LOCATÁRIO(A): ${formData.parte2Nome || '[NOME DO LOCATÁRIO]'}, CPF nº ${formData.parte2Cpf || '[CPF]'}, residente na ${formData.parte2Endereco || '[ENDEREÇO]'}.

CLÁUSULA PRIMEIRA – DO IMÓVEL E DESTINAÇÃO
O imóvel situado na ${formData.imovelEndereco || '[ENDEREÇO DO IMÓVEL]'} destina-se exclusivamente para moradia residencial familiar, sendo vedada a cessão ou sublocação.

CLÁUSULA SEGUNDA – DO VALOR E DO PRAZO
Locação convencionada pelo prazo de ${formData.prazoMeses} meses. Aluguel mensal de R$ ${formData.valorTotal || '[VALOR ALUGUEL]'}, com vencimento todo dia 10 de cada mês, reajustado anualmente pela variação acumulada do IPCA/IBGE.

CLÁUSULA TERCEIRA – DA GARANTIA LOCATÍCIA
É pactuada a garantia sob a modalidade de: ${formData.garantiaLocacao === 'caucao' ? 'CAUÇÃO EM DINHEIRO equivalente a 3 meses de aluguel' : 'FIADOR IDÔNEO com renúncia ao benefício de ordem'}.

CLÁUSULA QUARTA – DA MULTA RESCISÓRIA PROPORCIONAL
Multa compensatória correspondente a 03 (três) aluguéis, cobrada de forma estritamente proporcional ao período pendente do contrato (Art. 4º da Lei nº 8.245/91).

CLÁUSULA QUINTA – DO FORO
Eleito o Foro da Comarca de ${formData.cidadeForo}.

${formData.cidadeForo}, ${dataHoje}.

___________________________________________________
LOCADOR(A): ${formData.parte1Nome || '[LOCADOR]'}

___________________________________________________
LOCATÁRIO(A): ${formData.parte2Nome || '[LOCATÁRIO]'}`;
      }

      setContratoGerado(txt);
      setIsGenerating(false);
      setEtapaGerador(2);
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCopied(false);
  }, [activeSlide, activeTab]);

  if (!isAuthenticated) {
    return <Gatekeeper onLogin={() => setIsAuthenticated(true)} />;
  }

  const currentTemplate = contratosData[activeSlide];

  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-main)',
      minHeight: '100vh',
      display: 'flex',
      fontFamily: 'var(--font-body)'
    }}>
      {/* SIDEBAR */}
      <aside style={{
        width: '370px',
        backgroundColor: 'var(--bg-surface)',
        borderRight: '1px solid var(--bg-surface-light)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden'
      }}>
        {/* Header do Menu */}
        <div style={{ padding: '1.75rem 1.5rem', borderBottom: '1px solid var(--bg-surface-light)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <ChevronLeft size={14} /> Voltar para o site
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', marginTop: '1.1rem', color: 'var(--accent-gold)', lineHeight: 1.3 }}>
            Portal Andrade & Florio
          </h1>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Micro-SaaS & Acervo de 30 Contratos
          </p>

          {/* CHAVE SELETORA: GERADOR ONLINE (IA) VS TEMPLATES (.DOCX) */}
          <div style={{
            display: 'flex',
            backgroundColor: 'var(--bg-color)',
            padding: '4px',
            borderRadius: '6px',
            marginTop: '1.25rem',
            border: '1px solid var(--bg-surface-light)'
          }}>
            <button
              onClick={() => setActiveTab('gerador')}
              style={{
                flex: 1,
                padding: '0.6rem 0.5rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === 'gerador' ? 'var(--accent-gold)' : 'transparent',
                color: activeTab === 'gerador' ? '#000000' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s'
              }}
            >
              <Sparkles size={14} /> Gerador IA
            </button>

            <button
              onClick={() => setActiveTab('templates')}
              style={{
                flex: 1,
                padding: '0.6rem 0.5rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === 'templates' ? 'var(--accent-gold)' : 'transparent',
                color: activeTab === 'templates' ? '#000000' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s'
              }}
            >
              <FileText size={14} /> 30 Minutas Word
            </button>
          </div>
        </div>

        {/* LISTA DE NAVEGAÇÃO DA SIDEBAR */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '0.75rem 0' }}>
          {activeTab === 'gerador' ? (
            <div style={{ padding: '1rem 1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Modelos Disponíveis no Gerador:
              </div>
              <button
                onClick={() => { setTipoGerador('compra_venda'); setEtapaGerador(1); }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.9rem',
                  borderRadius: '6px',
                  backgroundColor: tipoGerador === 'compra_venda' ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                  color: tipoGerador === 'compra_venda' ? 'var(--accent-gold)' : 'var(--text-main)',
                  border: tipoGerador === 'compra_venda' ? '1px solid var(--accent-gold)' : '1px solid transparent',
                  cursor: 'pointer',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Sparkles size={16} /> Compra e Venda de Imóvel
              </button>

              <button
                onClick={() => { setTipoGerador('locacao'); setEtapaGerador(1); }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.9rem',
                  borderRadius: '6px',
                  backgroundColor: tipoGerador === 'locacao' ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                  color: tipoGerador === 'locacao' ? 'var(--accent-gold)' : 'var(--text-main)',
                  border: tipoGerador === 'locacao' ? '1px solid var(--accent-gold)' : '1px solid transparent',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Sparkles size={16} /> Locação Residencial (Lei 8.245)
              </button>

              <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid var(--bg-surface-light)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                  💡 Como funciona:
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '0.4rem', margin: 0 }}>
                  A IA preenche todas as cláusulas e qualificação das partes em tempo real, entregando o documento pronto para imprimir ou assinar.
                </p>
              </div>
            </div>
          ) : (
            contratosData.map((item, index) => {
              const isActive = activeSlide === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.9rem 1.5rem',
                    backgroundColor: isActive ? 'var(--bg-surface-light)' : 'transparent',
                    color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)',
                    border: 'none',
                    borderLeft: isActive ? '4px solid var(--accent-gold)' : '4px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px'
                  }}
                >
                  <span style={{ minWidth: '22px', fontWeight: 600, opacity: isActive ? 1 : 0.6 }}>{index + 1}.</span>
                  <span style={{ lineHeight: 1.4 }}>{item.title}</span>
                </button>
              );
            })
          )}
        </div>

        {/* Rodapé da Sidebar com Download Geral */}
        <div style={{ padding: '1.25rem', borderTop: '1px solid var(--bg-surface-light)', backgroundColor: 'var(--bg-color)' }}>
          <a
            href="/downloads/Acervo_30_Contratos_Andrade_Florio.zip"
            download
            className="btn-outline"
            style={{
              width: '100%',
              fontSize: '0.85rem',
              padding: '0.75rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            <Download size={16} /> Baixar 30 Arquivos (.zip)
          </a>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main style={{
        flex: 1,
        padding: '3rem 3.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {activeTab === 'gerador' ? (
          /* MODO GERADOR INTELIGENTE (MICRO-SAAS VIVO) */
          <div className="card-surface" style={{ flex: 1, padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <Sparkles size={18} />
              <span>Micro-SaaS • Gerador Inteligente de Contratos</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {tipoGerador === 'compra_venda' ? 'Compra e Venda de Imóvel Blindada' : 'Locação Residencial com Garantias'}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              Preencha os campos abaixo. O motor da Andrade & Florio calcula multas, prazos e monta o contrato formatado em segundos.
            </p>

            {etapaGerador === 1 ? (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  {/* DADOS PARTE 1 */}
                  <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--bg-surface-light)' }}>
                    <h4 style={{ color: 'var(--accent-gold)', fontSize: '1rem', marginBottom: '1rem' }}>
                      1. {tipoGerador === 'compra_venda' ? 'Vendedor' : 'Locador (Proprietário)'}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <input 
                        type="text" 
                        placeholder="Nome Completo" 
                        value={formData.parte1Nome}
                        onChange={(e) => handleFormChange('parte1Nome', e.target.value)}
                        style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                      <input 
                        type="text" 
                        placeholder="CPF (000.000.000-00)" 
                        value={formData.parte1Cpf}
                        onChange={(e) => handleFormChange('parte1Cpf', e.target.value)}
                        style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                      <input 
                        type="text" 
                        placeholder="Endereço Completo" 
                        value={formData.parte1Endereco}
                        onChange={(e) => handleFormChange('parte1Endereco', e.target.value)}
                        style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                    </div>
                  </div>

                  {/* DADOS PARTE 2 */}
                  <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--bg-surface-light)' }}>
                    <h4 style={{ color: 'var(--accent-gold)', fontSize: '1rem', marginBottom: '1rem' }}>
                      2. {tipoGerador === 'compra_venda' ? 'Comprador' : 'Inquilino (Locatário)'}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <input 
                        type="text" 
                        placeholder="Nome Completo" 
                        value={formData.parte2Nome}
                        onChange={(e) => handleFormChange('parte2Nome', e.target.value)}
                        style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                      <input 
                        type="text" 
                        placeholder="CPF (000.000.000-00)" 
                        value={formData.parte2Cpf}
                        onChange={(e) => handleFormChange('parte2Cpf', e.target.value)}
                        style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                      <input 
                        type="text" 
                        placeholder="Endereço Completo" 
                        value={formData.parte2Endereco}
                        onChange={(e) => handleFormChange('parte2Endereco', e.target.value)}
                        style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                    </div>
                  </div>
                </div>

                {/* IMÓVEL E VALORES */}
                <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--bg-surface-light)', marginBottom: '2rem' }}>
                  <h4 style={{ color: 'var(--accent-gold)', fontSize: '1rem', marginBottom: '1rem' }}>
                    3. Imóvel e Valores da Operação
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                      <input 
                        type="text" 
                        placeholder="Endereço Completo do Imóvel" 
                        value={formData.imovelEndereco}
                        onChange={(e) => handleFormChange('imovelEndereco', e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                    </div>
                    {tipoGerador === 'compra_venda' ? (
                      <>
                        <input 
                          type="text" 
                          placeholder="Nº da Matrícula no Cartório" 
                          value={formData.imovelMatricula}
                          onChange={(e) => handleFormChange('imovelMatricula', e.target.value)}
                          style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                        />
                        <input 
                          type="text" 
                          placeholder="Valor Total da Venda (R$)" 
                          value={formData.valorTotal}
                          onChange={(e) => handleFormChange('valorTotal', e.target.value)}
                          style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                        />
                        <input 
                          type="text" 
                          placeholder="Valor do Sinal / Arras (R$)" 
                          value={formData.valorSinal}
                          onChange={(e) => handleFormChange('valorSinal', e.target.value)}
                          style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                        />
                      </>
                    ) : (
                      <>
                        <input 
                          type="text" 
                          placeholder="Valor do Aluguel Mensal (R$)" 
                          value={formData.valorTotal}
                          onChange={(e) => handleFormChange('valorTotal', e.target.value)}
                          style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                        />
                        <input 
                          type="number" 
                          placeholder="Prazo em Meses (ex: 30)" 
                          value={formData.prazoMeses}
                          onChange={(e) => handleFormChange('prazoMeses', e.target.value)}
                          style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* BOTÃO GERADOR */}
                <button
                  onClick={handleGerarContrato}
                  disabled={isGenerating}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    borderRadius: '6px',
                    cursor: isGenerating ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem'
                  }}
                >
                  {isGenerating ? <RefreshCw size={20} className="spin-animate" /> : <Sparkles size={20} />}
                  {isGenerating ? 'Montando e Calibrando Cláusulas...' : 'Gerar Meu Contrato Pronto Agora'}
                </button>
              </div>
            ) : (
              /* RESULTADO DO CONTRATO GERADO */
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', backgroundColor: 'var(--bg-color)', padding: '1.25rem', borderRadius: '6px' }}>
                  <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '0.9rem' }}>
                    ✓ Contrato Personalizado Gerado com Sucesso!
                  </span>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(contratoGerado);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="btn-outline"
                      style={{ fontSize: '0.88rem', padding: '0.6rem 1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                      {copied ? 'Copiado!' : 'Copiar'}
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="btn-gold"
                      style={{ fontSize: '0.88rem', padding: '0.6rem 1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <Printer size={16} /> Imprimir / PDF
                    </button>
                    <button
                      onClick={() => setEtapaGerador(1)}
                      className="btn-outline"
                      style={{ fontSize: '0.88rem', padding: '0.6rem 1rem', cursor: 'pointer' }}
                    >
                      Editar Dados
                    </button>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#FFFFFF',
                  color: '#111827',
                  padding: '3rem 2.5rem',
                  borderRadius: '6px',
                  fontFamily: 'serif',
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                  {contratoGerado}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* MODO MINUTAS EM WORD (.DOCX) */
          <div className="card-surface" style={{ flex: 1, padding: '2.5rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              flexWrap: 'wrap', 
              gap: '1rem',
              borderBottom: '1px solid var(--bg-surface-light)',
              paddingBottom: '1.75rem',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ 
                  display: 'inline-block', 
                  backgroundColor: 'rgba(212, 175, 55, 0.15)', 
                  color: 'var(--accent-gold)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.75rem',
                  borderRadius: '4px',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase'
                }}>
                  {currentTemplate.badge}
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.7rem, 2.5vw, 2.3rem)',
                  color: 'var(--text-main)',
                  lineHeight: 1.25,
                  margin: 0
                }}>
                  {currentTemplate.title}
                </h2>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(currentTemplate.content);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2500);
                  }}
                  className="btn-outline"
                  style={{
                    fontSize: '0.9rem',
                    padding: '0.75rem 1.2rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                  {copied ? "Copiado!" : "Copiar Texto"}
                </button>

                <a
                  href={`/downloads/${currentTemplate.downloadFile}`}
                  download
                  className="btn-gold"
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    padding: '0.75rem 1.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.25)'
                  }}
                >
                  <Download size={18} />
                  {currentTemplate.downloadLabel}
                </a>
              </div>
            </div>

            {/* TEXTO FORMATADO DA MINUTA */}
            <div style={{
              lineHeight: '1.9',
              fontSize: '1.05rem',
              color: '#E0E0E0',
              whiteSpace: 'pre-line',
              flex: 1,
              backgroundColor: 'var(--bg-color)',
              padding: '2rem',
              borderRadius: '6px',
              border: '1px solid var(--bg-surface-light)'
            }}>
              {currentTemplate.content}
            </div>

            {/* NAVEGAÇÃO ENTRE AS MINUTAS */}
            <div style={{ 
              marginTop: '3rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid var(--bg-surface-light)', 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <button 
                className="btn-outline"
                disabled={activeSlide === 0}
                onClick={() => setActiveSlide(prev => prev - 1)}
                style={{ 
                  cursor: activeSlide === 0 ? 'not-allowed' : 'pointer', 
                  opacity: activeSlide === 0 ? 0.3 : 1 
                }}
              >
                <ChevronLeft size={18} /> Anterior
              </button>

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Minuta {activeSlide + 1} de {contratosData.length}
              </span>

              <button 
                className="btn-gold"
                disabled={activeSlide === contratosData.length - 1}
                onClick={() => setActiveSlide(prev => prev + 1)}
                style={{ 
                  cursor: activeSlide === contratosData.length - 1 ? 'not-allowed' : 'pointer', 
                  opacity: activeSlide === contratosData.length - 1 ? 0.3 : 1 
                }}
              >
                Próximo <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
