import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, ChevronRight, ChevronLeft, ShieldCheck, 
  Download, Copy, Check, MessageCircle, FileText,
  Sparkles, Printer, AlertTriangle, Eye, Edit3, Sliders
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
            Acervo Oficial de 30 Contratos Jurídicos Blindados
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

  const [activeSlide, setActiveSlide] = useState(1); // Inicia no Contrato 1
  const [copied, setCopied] = useState(false);
  const [showLiveEditor, setShowLiveEditor] = useState(true);

  // IA do Gemini
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);
  const [customizedContracts, setCustomizedContracts] = useState({});

  // Dados universais que alimentam e deixam QUALQUER um dos 30 contratos vivo em tempo real!
  const [liveData, setLiveData] = useState({
    parte1Nome: '',
    parte1Cpf: '',
    parte1Endereco: '',
    parte2Nome: '',
    parte2Cpf: '',
    parte2Endereco: '',
    objetoDescricao: '',
    valor: '',
    sinalOuCondicao: '',
    prazo: '30',
    cidadeForo: 'São Paulo/SP'
  });

  const handleDataChange = (field, val) => {
    setLiveData(prev => ({ ...prev, [field]: val }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCopied(false);
  }, [activeSlide]);

  if (!isAuthenticated) {
    return <Gatekeeper onLogin={() => setIsAuthenticated(true)} />;
  }

  const currentItem = contratosData[activeSlide] || contratosData[0];
  const isInstruction = currentItem.id === 'instrucoes';

  // Motor que injeta os dados ou adaptações da IA dentro do contrato selecionado
  const contratoFormatadoAoVivo = useMemo(() => {
    if (isInstruction) return currentItem.content;
    let txt = customizedContracts[currentItem.id] || currentItem.content;

    // Substituições Dinâmicas
    if (liveData.parte1Nome) {
      txt = txt.replace(/\[NOME COMPLETO DO VENDEDOR\]|\[NOME COMPLETO DO LOCADOR\]|\[PROPRIETÁRIO\]|\[TITULAR\]|\[CREDOR\]|\[MUTUANTE\]|\[OUTORGANTE\]|\[CEDENTE\]|\[VENDEDOR\]|\[LOCADOR\]|\[CONTRATANTE\]/g, liveData.parte1Nome.toUpperCase());
    }
    if (liveData.parte1Cpf) {
      txt = txt.replace(/\[NÚMERO DO CPF DO VENDEDOR\]|\[CPF DO VENDEDOR\]|\[CPF\]/g, liveData.parte1Cpf);
    }
    if (liveData.parte1Endereco) {
      txt = txt.replace(/\[ENDEREÇO COMPLETO DO VENDEDOR\]|\[ENDEREÇO DO VENDEDOR\]|\[ENDEREÇO COMPLETO\]/g, liveData.parte1Endereco);
    }
    if (liveData.parte2Nome) {
      txt = txt.replace(/\[NOME COMPLETO DO COMPRADOR\]|\[NOME COMPLETO DO LOCATÁRIO\]|\[BENEFICIÁRIO\]|\[COMODATÁRIO\]|\[DEVEDOR\]|\[MUTUÁRIO\]|\[OUTORGADO\]|\[CESSIONÁRIO\]|\[COMPRADOR\]|\[LOCATÁRIO\]|\[CONTRATADA\]/g, liveData.parte2Nome.toUpperCase());
    }
    if (liveData.parte2Cpf) {
      txt = txt.replace(/\[NÚMERO DO CPF DO COMPRADOR\]|\[CPF DO COMPRADOR\]/g, liveData.parte2Cpf);
    }
    if (liveData.parte2Endereco) {
      txt = txt.replace(/\[ENDEREÇO COMPLETO DO COMPRADOR\]|\[ENDEREÇO DO COMPRADOR\]/g, liveData.parte2Endereco);
    }
    if (liveData.objetoDescricao) {
      txt = txt.replace(/\[ENDEREÇO COMPLETO DO IMÓVEL\]|\[ENDEREÇO DO IMÓVEL\]|\[DESCRIÇÃO DA OBRA\]|\[DESCRIÇÃO DO BEM\]|\[DESCREVER DETALHADAMENTE O ESCOPO DOS SERVIÇOS E ENTREGÁVEIS\]|\[DESCREVER\]/g, liveData.objetoDescricao);
    }
    if (liveData.valor) {
      txt = txt.replace(/\[VALOR TOTAL POR EXTENSO\]|\[VALOR POR EXTENSO\]|\[VALOR TOTAL\]|\[VALOR\]/g, `R$ ${liveData.valor}`);
    }
    if (liveData.sinalOuCondicao) {
      txt = txt.replace(/\[VALOR DO SINAL\]|\[Transferência Bancária PIX \/ TED.*?\]/g, liveData.sinalOuCondicao);
    }
    if (liveData.cidadeForo) {
      txt = txt.replace(/\[CIDADE DA SITUAÇÃO DO IMÓVEL\/ESTADO\]|\[CIDADE\/UF DO IMÓVEL\]|\[CIDADE\/UF\]/g, liveData.cidadeForo);
    }

    const dataHoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    txt = txt.replace(/\[DIA\] de \[MÊS\] de 202\[X\]/g, dataHoje);

    return txt;
  }, [currentItem, liveData, isInstruction, customizedContracts]);

  const handleAiCustomize = async () => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    setAiError(null);
    try {
      const res = await fetch('/api/personalizar-contrato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contractTitle: currentItem.title,
          contractText: currentItem.content,
          userInstructions: aiPrompt
        })
      });
      const data = await res.json();
      if (res.ok && data.customizedText) {
        setCustomizedContracts(prev => ({
          ...prev,
          [currentItem.id]: data.customizedText
        }));
        setAiPrompt('');
      } else {
        setAiError(data.error || 'Erro ao processar personalização com a IA');
      }
    } catch (err) {
      setAiError('Falha ao comunicar com o servidor da IA: ' + err.message);
    } finally {
      setAiLoading(false);
    }
  };

  const handleResetAi = () => {
    setCustomizedContracts(prev => {
      const updated = { ...prev };
      delete updated[currentItem.id];
      return updated;
    });
    setAiError(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contratoFormatadoAoVivo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-main)',
      minHeight: '100vh',
      display: 'flex',
      fontFamily: 'var(--font-body)'
    }}>
      {/* SIDEBAR NAVEGAÇÃO DOS 30 CONTRATOS VIVOS */}
      <aside style={{
        width: '360px',
        backgroundColor: 'var(--bg-surface)',
        borderRight: '1px solid var(--bg-surface-light)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden'
      }}>
        {/* Header da Sidebar */}
        <div style={{ padding: '1.75rem 1.5rem', borderBottom: '1px solid var(--bg-surface-light)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <ChevronLeft size={14} /> Voltar para o site
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Sparkles size={18} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
              Acervo de Minutas Blindadas
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', marginTop: '0.35rem', color: '#FFFFFF', lineHeight: 1.25 }}>
            Portal Andrade & Florio
          </h1>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Selecione qualquer contrato para personalizar
          </p>
        </div>

        {/* Lista com os 30 Contratos */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '0.5rem 0' }}>
          {contratosData.map((item, index) => {
            const isActive = activeSlide === index;
            return (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.85rem 1.5rem',
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
                <span style={{ minWidth: '22px', fontWeight: 600, opacity: isActive ? 1 : 0.6 }}>
                  {index === 0 ? '★' : `${index}.`}
                </span>
                <span style={{ lineHeight: 1.4, fontWeight: isActive ? 600 : 400 }}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Rodapé da Sidebar com Download Geral em Zip */}
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
            <Download size={16} /> Baixar Todos em Word (.zip)
          </a>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL: O CONTRATO VIVO SELECIONADO */}
      <main style={{
        flex: 1,
        padding: '2.5rem 3.5rem',
        maxWidth: '1150px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="card-surface" style={{ flex: 1, padding: '2.5rem' }}>
          
          {/* HEADER DO CONTRATO COM BADGE E AÇÕES */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start', 
            flexWrap: 'wrap', 
            gap: '1.25rem',
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
                {currentItem.badge}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.7rem, 2.4vw, 2.2rem)',
                color: 'var(--text-main)',
                lineHeight: 1.25,
                margin: 0
              }}>
                {currentItem.title}
              </h2>
            </div>

            {/* BOTÕES DE AÇÃO */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {!isInstruction && (
                <>
                  <button
                    onClick={() => setShowLiveEditor(!showLiveEditor)}
                    className={showLiveEditor ? "btn-gold" : "btn-outline"}
                    style={{
                      fontSize: '0.88rem',
                      padding: '0.7rem 1.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer',
                      fontWeight: 700
                    }}
                  >
                    <Sliders size={16} />
                    {showLiveEditor ? "Ocultar Personalizador" : "Personalizar ao Vivo"}
                  </button>

                  <button
                    onClick={handlePrint}
                    className="btn-outline"
                    style={{
                      fontSize: '0.88rem',
                      padding: '0.7rem 1.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer'
                    }}
                  >
                    <Printer size={16} /> Imprimir / PDF
                  </button>
                </>
              )}

              <button
                onClick={handleCopy}
                className="btn-outline"
                style={{
                  fontSize: '0.88rem',
                  padding: '0.7rem 1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer'
                }}
              >
                {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                {copied ? "Copiado!" : "Copiar"}
              </button>

              <a
                href={`/downloads/${currentItem.downloadFile}`}
                download
                className="btn-gold"
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  padding: '0.7rem 1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  textDecoration: 'none'
                }}
              >
                <Download size={16} />
                Baixar Word (.docx)
              </a>
            </div>
          </div>

          {/* ASSISTENTE JURÍDICO IA COM GOOGLE GEMINI */}
          {!isInstruction && (
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={20} color="var(--accent-gold)" />
                  <span style={{ fontWeight: 700, color: 'var(--accent-gold)', fontSize: '0.95rem', textTransform: 'uppercase' }}>
                    Assistente Jurídico IA • Google Gemini
                  </span>
                </div>
                {customizedContracts[currentItem.id] && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                      ✓ Minuta Personalizada com IA
                    </span>
                    <button
                      onClick={handleResetAi}
                      style={{
                        fontSize: '0.78rem',
                        backgroundColor: 'transparent',
                        border: '1px solid var(--text-muted)',
                        color: 'var(--text-muted)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Restaurar Original
                    </button>
                  </div>
                )}
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                Deseja adaptar cláusulas à sua realidade? Digite suas instruções em linguagem simples (ex: <em>"proibir animais"</em>, <em>"reajuste semestral"</em>, <em>"adicionar cláusula de fiador com renúncia ao benefício de ordem"</em>) e a IA da banca reescreverá a minuta mantendo a segurança jurídica.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleAiCustomize(); }}
                  placeholder="Ex: Quero adicionar exigência de seguro contra incêndio e tolerância de 5 dias no pagamento..."
                  disabled={aiLoading}
                  style={{
                    flex: 1,
                    minWidth: '280px',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--bg-surface-light)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={handleAiCustomize}
                  disabled={aiLoading || !aiPrompt.trim()}
                  className="btn-gold"
                  style={{
                    padding: '0.85rem 1.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: aiLoading || !aiPrompt.trim() ? 'not-allowed' : 'pointer',
                    opacity: aiLoading || !aiPrompt.trim() ? 0.6 : 1
                  }}
                >
                  <Sparkles size={16} />
                  {aiLoading ? 'Processando com IA...' : 'Personalizar com IA'}
                </button>
              </div>

              {aiError && (
                <div style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '0.6rem' }}>
                  ⚠️ {aiError}
                </div>
              )}
            </div>
          )}

          {/* PAINEL DE PERSONALIZAÇÃO AO VIVO (FAZ O CONTRATO FICAR VIVO!) */}
          {!isInstruction && showLiveEditor && (
            <div style={{
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '8px',
              padding: '1.75rem',
              marginBottom: '2.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase' }}>
                  <Sparkles size={18} />
                  Painel de Preenchimento em Tempo Real
                </div>
                <span style={{ fontSize: '0.8rem', color: '#4ade80' }}>
                  ● O texto abaixo se atualiza enquanto você digita
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    1ª Parte (Vendedor / Locador / Credor)
                  </label>
                  <input 
                    type="text" 
                    placeholder="Nome Completo" 
                    value={liveData.parte1Nome} 
                    onChange={(e) => handleDataChange('parte1Nome', e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    CPF da 1ª Parte
                  </label>
                  <input 
                    type="text" 
                    placeholder="000.000.000-00" 
                    value={liveData.parte1Cpf} 
                    onChange={(e) => handleDataChange('parte1Cpf', e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    2ª Parte (Comprador / Locatário / Devedor)
                  </label>
                  <input 
                    type="text" 
                    placeholder="Nome Completo" 
                    value={liveData.parte2Nome} 
                    onChange={(e) => handleDataChange('parte2Nome', e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    CPF da 2ª Parte
                  </label>
                  <input 
                    type="text" 
                    placeholder="000.000.000-00" 
                    value={liveData.parte2Cpf} 
                    onChange={(e) => handleDataChange('parte2Cpf', e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Descrição do Objeto / Imóvel / Veículo / Serviço
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ex: Apartamento 31, Rua das Flores, 120" 
                    value={liveData.objetoDescricao} 
                    onChange={(e) => handleDataChange('objetoDescricao', e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Valor Total (R$)
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ex: 350.000,00 ou 2.500,00" 
                    value={liveData.valor} 
                    onChange={(e) => handleDataChange('valor', e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Cidade e Foro da Assinatura
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ex: São Paulo/SP" 
                    value={liveData.cidadeForo} 
                    onChange={(e) => handleDataChange('cidadeForo', e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.9rem' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* O CONTRATO VIVO FORMATADO NA TELA */}
          <div style={{
            backgroundColor: isInstruction ? 'var(--bg-color)' : '#FFFFFF',
            color: isInstruction ? '#E0E0E0' : '#111827',
            padding: isInstruction ? '2rem' : '3.5rem 3rem',
            borderRadius: '6px',
            fontFamily: isInstruction ? 'var(--font-body)' : 'serif',
            fontSize: isInstruction ? '1.05rem' : '1.02rem',
            lineHeight: 1.85,
            whiteSpace: 'pre-line',
            flex: 1,
            border: isInstruction ? '1px solid var(--bg-surface-light)' : '1px solid #E5E7EB',
            boxShadow: isInstruction ? 'none' : '0 15px 35px rgba(0,0,0,0.5)'
          }}>
            {contratoFormatadoAoVivo}
          </div>

          {/* RODAPÉ DO CONTRATO COM SUPORTE DA BANCA */}
          <div style={{
            marginTop: '2.5rem',
            backgroundColor: 'rgba(212, 175, 55, 0.06)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '6px',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                Transação de alto valor ou pendência registral?
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                A equipe jurídica da Andrade & Florio realiza a Due Diligence completa e audita certidões para você.
              </div>
            </div>
            <button
              onClick={() => handleWhatsAppClick(
                'nlxZCPiY6qAcEMzlgIgD',
                `Olá! Estou personalizando o contrato "${currentItem.title}" no portal e gostaria de consultar uma análise expressa com a banca Andrade & Florio.`
              )}
              className="btn-outline"
              style={{
                fontSize: '0.88rem',
                padding: '0.65rem 1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <MessageCircle size={16} />
              Consultar Advogado da Banca
            </button>
          </div>

          {/* CONTROLES DE NAVEGAÇÃO ANTERIOR / PRÓXIMO */}
          <div style={{ 
            marginTop: '2.5rem', 
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
              Contrato {activeSlide} de {contratosData.length - 1}
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
      </main>
    </div>
  );
}
