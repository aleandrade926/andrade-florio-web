import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, ChevronRight, ChevronLeft, ShieldCheck, 
  Download, Copy, Check, MessageCircle, FileText,
  Sparkles, Printer, AlertTriangle, Eye, Edit3, Sliders, CheckCircle2,
  Building, User, Users
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
            Acervo Oficial de 60 Contratos Jurídicos Blindados
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
                Chave de acesso incorreta. Verifique a chave disponível na sua área de membros.
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
  const [searchQuery, setSearchQuery] = useState('');

  // Assistente Jurídico Inteligente da Banca
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);
  const [customizedContracts, setCustomizedContracts] = useState({});
  const [customizedSummaries, setCustomizedSummaries] = useState({});
  const [showHighlights, setShowHighlights] = useState(true);

  // Dados universais que alimentam e deixam QUALQUER um dos 60 contratos vivo em tempo real!
  const [liveData, setLiveData] = useState({
    // 1ª Parte
    parte1Tipo: 'PF', // 'PF' ou 'PJ'
    parte1Nome: '',
    parte1Nacionalidade: 'brasileiro(a)',
    parte1EstadoCivil: 'casado(a) sob o regime de comunhão parcial de bens',
    parte1Profissao: '',
    parte1Rg: '',
    parte1Cpf: '',
    parte1Endereco: '',
    parte1TemConjuge: false,
    parte1ConjugeNome: '',
    parte1ConjugeNacionalidade: 'brasileiro(a)',
    parte1ConjugeProfissao: '',
    parte1ConjugeRg: '',
    parte1ConjugeCpf: '',
    // Se PJ 1ª Parte
    parte1RazaoSocial: '',
    parte1Cnpj: '',
    parte1Sede: '',
    parte1RepNome: '',
    parte1RepCargo: 'Sócio-Administrador',
    parte1RepNacionalidade: 'brasileiro(a)',
    parte1RepEstadoCivil: 'casado(a)',
    parte1RepProfissao: 'empresário(a)',
    parte1RepRg: '',
    parte1RepCpf: '',

    // 2ª Parte
    parte2Tipo: 'PF', // 'PF' ou 'PJ'
    parte2Nome: '',
    parte2Nacionalidade: 'brasileiro(a)',
    parte2EstadoCivil: 'solteiro(a)',
    parte2Profissao: '',
    parte2Rg: '',
    parte2Cpf: '',
    parte2Endereco: '',
    parte2TemConjuge: false,
    parte2ConjugeNome: '',
    parte2ConjugeNacionalidade: 'brasileiro(a)',
    parte2ConjugeProfissao: '',
    parte2ConjugeRg: '',
    parte2ConjugeCpf: '',
    // Se PJ 2ª Parte
    parte2RazaoSocial: '',
    parte2Cnpj: '',
    parte2Sede: '',
    parte2RepNome: '',
    parte2RepCargo: 'Sócio-Administrador',
    parte2RepNacionalidade: 'brasileiro(a)',
    parte2RepEstadoCivil: 'casado(a)',
    parte2RepProfissao: 'empresário(a)',
    parte2RepRg: '',
    parte2RepCpf: '',

    // Negócio
    objetoDescricao: '',
    valor: '',
    sinalOuCondicao: '',
    prazo: '30',
    cidadeForo: 'São Paulo/SP'
  });

  const handleDataChange = (field, val) => {
    setLiveData(prev => ({ ...prev, [field]: val }));
  };

  if (!isAuthenticated) {
    return <Gatekeeper onLogin={() => setIsAuthenticated(true)} />;
  }

  const currentItem = contratosData[activeSlide] || contratosData[0];
  const isInstruction = currentItem.id === 'instrucoes';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCopied(false);
    if (currentItem && currentItem.title) {
      document.title = currentItem.title;
    } else {
      document.title = "Acervo Oficial de Contratos Jurídicos";
    }
  }, [activeSlide, currentItem]);

  // Montagem da Qualificação Completa da 1ª Parte (PF ou PJ)
  const qualifParte1 = useMemo(() => {
    if (liveData.parte1Tipo === 'PJ') {
      if (!liveData.parte1RazaoSocial.trim()) return '';
      let s = `${liveData.parte1RazaoSocial.trim().toUpperCase()}, pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº ${liveData.parte1Cnpj.trim() || '[CNPJ]'}`;
      if (liveData.parte1Sede.trim()) s += `, com sede na ${liveData.parte1Sede.trim()}`;
      if (liveData.parte1RepNome.trim()) {
        s += `, neste ato representada por seu ${liveData.parte1RepCargo.trim() || 'Administrador'}, ${liveData.parte1RepNome.trim().toUpperCase()}`;
        if (liveData.parte1RepNacionalidade.trim()) s += `, ${liveData.parte1RepNacionalidade.trim()}`;
        if (liveData.parte1RepEstadoCivil.trim()) s += `, ${liveData.parte1RepEstadoCivil.trim()}`;
        if (liveData.parte1RepProfissao.trim()) s += `, ${liveData.parte1RepProfissao.trim()}`;
        if (liveData.parte1RepRg.trim()) s += `, portador(a) da cédula de identidade RG nº ${liveData.parte1RepRg.trim()}`;
        if (liveData.parte1RepCpf.trim()) s += `, inscrito(a) no CPF/MF sob o nº ${liveData.parte1RepCpf.trim()}`;
      }
      return s;
    } else {
      if (!liveData.parte1Nome.trim()) return '';
      let s = `${liveData.parte1Nome.trim().toUpperCase()}`;
      if (liveData.parte1Nacionalidade.trim()) s += `, ${liveData.parte1Nacionalidade.trim()}`;
      if (liveData.parte1EstadoCivil.trim()) s += `, ${liveData.parte1EstadoCivil.trim()}`;
      if (liveData.parte1Profissao.trim()) s += `, ${liveData.parte1Profissao.trim()}`;
      if (liveData.parte1Rg.trim()) s += `, portador(a) da cédula de identidade RG nº ${liveData.parte1Rg.trim()}`;
      if (liveData.parte1Cpf.trim()) s += `, inscrito(a) no CPF/MF sob o nº ${liveData.parte1Cpf.trim()}`;
      if (liveData.parte1TemConjuge && liveData.parte1ConjugeNome.trim()) {
        s += `, e seu(sua) cônjuge/companheiro(a) ${liveData.parte1ConjugeNome.trim().toUpperCase()}`;
        if (liveData.parte1ConjugeNacionalidade.trim()) s += `, ${liveData.parte1ConjugeNacionalidade.trim()}`;
        if (liveData.parte1ConjugeProfissao.trim()) s += `, ${liveData.parte1ConjugeProfissao.trim()}`;
        if (liveData.parte1ConjugeRg.trim()) s += `, RG nº ${liveData.parte1ConjugeRg.trim()}`;
        if (liveData.parte1ConjugeCpf.trim()) s += `, CPF nº ${liveData.parte1ConjugeCpf.trim()}`;
        if (liveData.parte1Endereco.trim()) s += `, ambos residentes e domiciliados na ${liveData.parte1Endereco.trim()}`;
      } else if (liveData.parte1Endereco.trim()) {
        s += `, residente e domiciliado(a) na ${liveData.parte1Endereco.trim()}`;
      }
      return s;
    }
  }, [liveData]);

  // Montagem da Qualificação Completa da 2ª Parte (PF ou PJ)
  const qualifParte2 = useMemo(() => {
    if (liveData.parte2Tipo === 'PJ') {
      if (!liveData.parte2RazaoSocial.trim()) return '';
      let s = `${liveData.parte2RazaoSocial.trim().toUpperCase()}, pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº ${liveData.parte2Cnpj.trim() || '[CNPJ]'}`;
      if (liveData.parte2Sede.trim()) s += `, com sede na ${liveData.parte2Sede.trim()}`;
      if (liveData.parte2RepNome.trim()) {
        s += `, neste ato representada por seu ${liveData.parte2RepCargo.trim() || 'Administrador'}, ${liveData.parte2RepNome.trim().toUpperCase()}`;
        if (liveData.parte2RepNacionalidade.trim()) s += `, ${liveData.parte2RepNacionalidade.trim()}`;
        if (liveData.parte2RepEstadoCivil.trim()) s += `, ${liveData.parte2RepEstadoCivil.trim()}`;
        if (liveData.parte2RepProfissao.trim()) s += `, ${liveData.parte2RepProfissao.trim()}`;
        if (liveData.parte2RepRg.trim()) s += `, portador(a) da cédula de identidade RG nº ${liveData.parte2RepRg.trim()}`;
        if (liveData.parte2RepCpf.trim()) s += `, inscrito(a) no CPF/MF sob o nº ${liveData.parte2RepCpf.trim()}`;
      }
      return s;
    } else {
      if (!liveData.parte2Nome.trim()) return '';
      let s = `${liveData.parte2Nome.trim().toUpperCase()}`;
      if (liveData.parte2Nacionalidade.trim()) s += `, ${liveData.parte2Nacionalidade.trim()}`;
      if (liveData.parte2EstadoCivil.trim()) s += `, ${liveData.parte2EstadoCivil.trim()}`;
      if (liveData.parte2Profissao.trim()) s += `, ${liveData.parte2Profissao.trim()}`;
      if (liveData.parte2Rg.trim()) s += `, portador(a) da cédula de identidade RG nº ${liveData.parte2Rg.trim()}`;
      if (liveData.parte2Cpf.trim()) s += `, inscrito(a) no CPF/MF sob o nº ${liveData.parte2Cpf.trim()}`;
      if (liveData.parte2TemConjuge && liveData.parte2ConjugeNome.trim()) {
        s += `, e seu(sua) cônjuge/companheiro(a) ${liveData.parte2ConjugeNome.trim().toUpperCase()}`;
        if (liveData.parte2ConjugeNacionalidade.trim()) s += `, ${liveData.parte2ConjugeNacionalidade.trim()}`;
        if (liveData.parte2ConjugeProfissao.trim()) s += `, ${liveData.parte2ConjugeProfissao.trim()}`;
        if (liveData.parte2ConjugeRg.trim()) s += `, RG nº ${liveData.parte2ConjugeRg.trim()}`;
        if (liveData.parte2ConjugeCpf.trim()) s += `, CPF nº ${liveData.parte2ConjugeCpf.trim()}`;
        if (liveData.parte2Endereco.trim()) s += `, ambos residentes e domiciliados na ${liveData.parte2Endereco.trim()}`;
      } else if (liveData.parte2Endereco.trim()) {
        s += `, residente e domiciliado(a) na ${liveData.parte2Endereco.trim()}`;
      }
      return s;
    }
  }, [liveData]);

  // Motor que injeta os dados ou adaptações da IA dentro do contrato selecionado
  const contratoFormatadoAoVivo = useMemo(() => {
    if (isInstruction) return currentItem.content;
    let txt = customizedContracts[currentItem.id] || currentItem.content;

    // 1. Substituição do Bloco da Qualificação da 1ª Parte
    if (qualifParte1) {
      txt = txt.replace(/\[NOME COMPLETO DO VENDEDOR\][\s\S]*?(?=doravante denominad|;\n\nE, de outro lado)/i, qualifParte1 + ', ');
      txt = txt.replace(/(?:LOCADOR\(A\):|CONTRATANTE:|VENDEDOR\(A\):|CEDENTE\(A\):|MUTUANTE\(A\):|PARCEIRO A:)\s*(\[NOME[^;]+;|\[RAZÃO[^;]+;)/i, (m, p) => m.replace(p, qualifParte1 + ';'));
    }

    // 2. Substituição do Bloco da Qualificação da 2ª Parte
    if (qualifParte2) {
      txt = txt.replace(/\[NOME COMPLETO DO COMPRADOR\][\s\S]*?(?=doravante denominad|;\n\nTêm as partes)/i, qualifParte2 + ', ');
      txt = txt.replace(/(?:LOCATÁRIO\(A\):|CONTRATADA:|COMPRADOR\(A\):|CESSIONÁRIO\(A\):|MUTUÁRIO\(A\):|PARCEIRO B:)\s*(\[NOME[^;]+;|\[RAZÃO[^;]+;)/i, (m, p) => m.replace(p, qualifParte2 + ';'));
    }

    // 3. Fallbacks e substituições pontuais
    const nome1 = liveData.parte1Tipo === 'PJ' ? liveData.parte1RazaoSocial : liveData.parte1Nome;
    const doc1 = liveData.parte1Tipo === 'PJ' ? liveData.parte1Cnpj : liveData.parte1Cpf;
    const end1 = liveData.parte1Tipo === 'PJ' ? liveData.parte1Sede : liveData.parte1Endereco;

    const nome2 = liveData.parte2Tipo === 'PJ' ? liveData.parte2RazaoSocial : liveData.parte2Nome;
    const doc2 = liveData.parte2Tipo === 'PJ' ? liveData.parte2Cnpj : liveData.parte2Cpf;
    const end2 = liveData.parte2Tipo === 'PJ' ? liveData.parte2Sede : liveData.parte2Endereco;

    if (nome1) {
      txt = txt.replace(/\[NOME COMPLETO DO VENDEDOR\]|\[NOME COMPLETO DO LOCADOR\]|\[RAZÃO SOCIAL DA EMPRESA\]|\[PROPRIETÁRIO\]|\[TITULAR\]|\[CREDOR\]|\[MUTUANTE\]|\[OUTORGANTE\]|\[CEDENTE\]|\[VENDEDOR\]|\[LOCADOR\]|\[CONTRATANTE\]/g, nome1.toUpperCase());
    }
    if (doc1) {
      txt = txt.replace(/\[NÚMERO DO CPF DO VENDEDOR\]|\[CPF DO VENDEDOR\]|\[CPF\]|\[CNPJ\]/g, doc1);
    }
    if (end1) {
      txt = txt.replace(/\[ENDEREÇO COMPLETO DO VENDEDOR\]|\[ENDEREÇO DO VENDEDOR\]|\[ENDEREÇO DA SEDE\]|\[ENDEREÇO COMPLETO\]/g, end1);
    }

    if (nome2) {
      txt = txt.replace(/\[NOME COMPLETO DO COMPRADOR\]|\[NOME COMPLETO DO LOCATÁRIO\]|\[RAZÃO SOCIAL DA PRESTADORA PJ \/ MEI\]|\[BENEFICIÁRIO\]|\[COMODATÁRIO\]|\[DEVEDOR\]|\[MUTUÁRIO\]|\[OUTORGADO\]|\[CESSIONÁRIO\]|\[COMPRADOR\]|\[LOCATÁRIO\]|\[CONTRATADA\]/g, nome2.toUpperCase());
    }
    if (doc2) {
      txt = txt.replace(/\[NÚMERO DO CPF DO COMPRADOR\]|\[CPF DO COMPRADOR\]/g, doc2);
    }
    if (end2) {
      txt = txt.replace(/\[ENDEREÇO COMPLETO DO COMPRADOR\]|\[ENDEREÇO DO COMPRADOR\]/g, end2);
    }

    // 4. Assinaturas no Rodapé
    if (nome1) {
      txt = txt.replace(/PRIMEIRA PARTE\nCPF\/CNPJ nº \[NÚMERO\]/g, `${nome1.toUpperCase()}\nCPF/CNPJ nº ${doc1 || '[DOCUMENTO]'}`);
    }
    if (nome2) {
      txt = txt.replace(/SEGUNDA PARTE\nCPF\/CNPJ nº \[NÚMERO\]/g, `${nome2.toUpperCase()}\nCPF/CNPJ nº ${doc2 || '[DOCUMENTO]'}`);
    }

    // 5. Dados do Negócio e Objeto
    if (liveData.objetoDescricao) {
      txt = txt.replace(/\[ENDEREÇO COMPLETO DO IMÓVEL.*?\]|\[ENDEREÇO DO IMÓVEL\]|\[DESCRIÇÃO DA OBRA\]|\[DESCRIÇÃO DO BEM\]|\[DESCREVER.*?\]/g, liveData.objetoDescricao);
    }
    if (liveData.valor) {
      txt = txt.replace(/\[VALOR TOTAL POR EXTENSO\]|\[VALOR POR EXTENSO\]|\[VALOR TOTAL\]|\[VALOR\]/g, `R$ ${liveData.valor}`);
    }
    if (liveData.sinalOuCondicao) {
      txt = txt.replace(/\[VALOR DO SINAL.*?\]|\[Transferência Bancária PIX \/ TED.*?\]/g, liveData.sinalOuCondicao);
    }
    if (liveData.cidadeForo) {
      txt = txt.replace(/\[CIDADE DA SITUAÇÃO DO IMÓVEL\/ESTADO\]|\[CIDADE\/UF DO IMÓVEL\]|\[CIDADE\/UF\]/g, liveData.cidadeForo);
    }

    const dataHoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    txt = txt.replace(/\[DIA\] de \[MÊS\] de 202\[X\]/g, dataHoje);

    return txt;
  }, [currentItem, liveData, isInstruction, customizedContracts, qualifParte1, qualifParte2]);

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
        if (data.summaryOfChanges && data.summaryOfChanges.length > 0) {
          setCustomizedSummaries(prev => ({
            ...prev,
            [currentItem.id]: data.summaryOfChanges
          }));
        }
        setShowHighlights(true);
        setAiPrompt('');
      } else {
        setAiError(data.error || 'Erro ao processar personalização da minuta');
      }
    } catch (err) {
      setAiError('Falha ao comunicar com o servidor: ' + err.message);
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
    setCustomizedSummaries(prev => {
      const updated = { ...prev };
      delete updated[currentItem.id];
      return updated;
    });
    setAiError(null);
  };

  const handleCopy = () => {
    // Copia o texto limpo para assinatura (sem os marcadores visuais internos)
    const cleanText = contratoFormatadoAoVivo.replace(/\[CLÁUSULA ADAPTADA\]\s*/g, '');
    navigator.clipboard.writeText(cleanText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    document.title = currentItem?.title || "Instrumento Contratual";
    window.print();
  };

  const filteredContracts = useMemo(() => {
    if (!searchQuery.trim()) {
      return contratosData.map((item, idx) => ({ ...item, originalIndex: idx }));
    }
    const q = searchQuery.toLowerCase();
    return contratosData
      .map((item, idx) => ({ ...item, originalIndex: idx }))
      .filter(item => item.title.toLowerCase().includes(q) || (item.badge && item.badge.toLowerCase().includes(q)));
  }, [searchQuery]);

  return (
    <div className="portal-layout" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-main)',
      minHeight: '100vh',
      display: 'flex',
      fontFamily: 'var(--font-body)'
    }}>
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 20mm 15mm 20mm 15mm;
          }
          html, body {
            background-color: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            overflow: visible !important;
          }
          .no-print,
          .bloco-orientacao-tecnica,
          .portal-sidebar,
          .portal-header,
          .portal-ai-box,
          .portal-live-panel,
          .portal-support-footer,
          .portal-nav-footer,
          .lgpd-banner,
          button,
          input,
          select,
          nav,
          header,
          footer {
            display: none !important;
          }
          .portal-layout {
            display: block !important;
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: auto !important;
          }
          main.portal-main {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .portal-card {
            display: block !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .contrato-print-area {
            display: block !important;
            background-color: #ffffff !important;
            color: #111827 !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            font-family: "Times New Roman", Times, Georgia, serif !important;
            font-size: 11pt !important;
            line-height: 1.6 !important;
            text-align: justify !important;
            width: 100% !important;
          }
          .badge-adaptada,
          .print-hide {
            display: none !important;
          }
          .bloco-adaptado {
            background-color: transparent !important;
            border-left: none !important;
            padding: 0 !important;
            margin: 0 0 1.25rem 0 !important;
            box-shadow: none !important;
          }
          .bloco-adaptado div {
            color: #111827 !important;
            font-weight: normal !important;
          }
          p, .bloco-adaptado {
            page-break-inside: avoid;
            break-inside: avoid;
            margin-bottom: 1.25rem !important;
          }
        }
      `}</style>
      {/* SIDEBAR NAVEGAÇÃO DOS 60 CONTRATOS VIVOS */}
      <aside className="no-print portal-sidebar" style={{
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
            Acervo Completo de 60 Minutas com IA
          </p>
        </div>

        {/* Campo de Busca Rápida */}
        <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--bg-surface-light)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <input 
            type="text" 
            placeholder="🔍 Buscar contratos (ex: intermitente, aluguel)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 0.85rem',
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--bg-surface-light)',
              borderRadius: '6px',
              color: '#FFFFFF',
              fontSize: '0.82rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Lista com os Contratos */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '0.5rem 0' }}>
          {filteredContracts.map((item) => {
            const index = item.originalIndex;
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
            href="/downloads/Acervo_Contratos_Andrade_Florio.zip"
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
            <Download size={16} /> Baixar Todos os 60 Contratos (.zip)
          </a>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL: O CONTRATO VIVO SELECIONADO */}
      <main className="portal-main" style={{
        flex: 1,
        padding: '2.5rem 3.5rem',
        maxWidth: '1150px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="card-surface portal-card" style={{ flex: 1, padding: '2.5rem' }}>
          
          {/* HEADER DO CONTRATO COM BADGE E AÇÕES */}
          <div className="no-print portal-header" style={{ 
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

          {/* ASSISTENTE JURÍDICO INTELIGENTE DA BANCA */}
          {!isInstruction && (
            <div className="no-print portal-ai-box" style={{
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
                    Assistente Jurídico Inteligente • Andrade & Florio
                  </span>
                </div>
                {customizedContracts[currentItem.id] && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                      ✓ Minuta Personalizada
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
                Deseja adaptar cláusulas à sua realidade? Digite suas instruções em linguagem simples (ex: <em>"proibir animais"</em>, <em>"reajuste semestral"</em>, <em>"adicionar cláusula de fiador com renúncia ao benefício de ordem"</em>) e o assistente da banca reescreverá a minuta mantendo a segurança jurídica.
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
                  {aiLoading ? 'Processando Adaptação...' : 'Adaptar Minuta'}
                </button>
              </div>

              {aiError && (
                <div style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '0.6rem' }}>
                  ⚠️ {aiError}
                </div>
              )}

              {/* QUADRO DE RESUMO DAS ALTERAÇÕES REALIZADAS */}
              {customizedSummaries[currentItem.id] && customizedSummaries[currentItem.id].length > 0 && (
                <div style={{
                  marginTop: '1.25rem',
                  backgroundColor: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid var(--accent-gold)',
                  borderRadius: '6px',
                  padding: '1.15rem 1.25rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.92rem' }}>
                      <CheckCircle2 size={18} color="var(--accent-gold)" />
                      Alterações Incorporadas na Minuta:
                    </div>
                    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        checked={showHighlights} 
                        onChange={(e) => setShowHighlights(e.target.checked)} 
                        style={{ cursor: 'pointer' }}
                      />
                      Destacar alterações no texto abaixo
                    </label>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#E0E0E0', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {customizedSummaries[currentItem.id].map((change, idx) => (
                      <li key={idx} style={{ marginBottom: '0.25rem' }}>
                        {change}
                      </li>
                    ))}
                  </ul>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.6rem' }}>
                    💡 As cláusulas adaptadas estão identificadas abaixo com o selo <strong>✦ Cláusula Adaptada</strong>. Ao copiar, o texto é copiado limpo para assinatura formal.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* PAINEL DE QUALIFICAÇÃO E PERSONALIZAÇÃO AO VIVO (COM SUPORTE A PF E PJ) */}
          {!isInstruction && showLiveEditor && (
            <div className="no-print portal-live-panel" style={{
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '8px',
              padding: '1.75rem',
              marginBottom: '2.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase' }}>
                  <Sparkles size={18} />
                  Painel de Qualificação em Tempo Real (PF e PJ)
                </div>
                <span style={{ fontSize: '0.8rem', color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)', padding: '0.25rem 0.65rem', borderRadius: '4px', fontWeight: 600 }}>
                  ● Qualificação completa de cartório sem colchetes sobrando
                </span>
              </div>

              {/* GRID 2 COLUNAS: 1ª PARTE E 2ª PARTE */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                
                {/* 1ª PARTE (PF OU PJ) */}
                <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '6px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.85rem' }}>
                      1ª PARTE (Vendedor / Locador / Credor)
                    </span>
                    <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: 'var(--bg-color)', padding: '0.2rem', borderRadius: '4px' }}>
                      <button
                        type="button"
                        onClick={() => handleDataChange('parte1Tipo', 'PF')}
                        style={{
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.72rem',
                          borderRadius: '3px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 700,
                          backgroundColor: liveData.parte1Tipo === 'PF' ? 'var(--accent-gold)' : 'transparent',
                          color: liveData.parte1Tipo === 'PF' ? '#000' : 'var(--text-muted)'
                        }}
                      >
                        Pessoa Física (PF)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDataChange('parte1Tipo', 'PJ')}
                        style={{
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.72rem',
                          borderRadius: '3px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 700,
                          backgroundColor: liveData.parte1Tipo === 'PJ' ? 'var(--accent-gold)' : 'transparent',
                          color: liveData.parte1Tipo === 'PJ' ? '#000' : 'var(--text-muted)'
                        }}
                      >
                        Pessoa Jurídica (PJ)
                      </button>
                    </div>
                  </div>

                  {liveData.parte1Tipo === 'PF' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.6rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Nome Completo</label>
                          <input type="text" placeholder="Nome Completo" value={liveData.parte1Nome} onChange={e => handleDataChange('parte1Nome', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>CPF</label>
                          <input type="text" placeholder="000.000.000-00" value={liveData.parte1Cpf} onChange={e => handleDataChange('parte1Cpf', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>RG / Órgão</label>
                          <input type="text" placeholder="RG nº e Órgão" value={liveData.parte1Rg} onChange={e => handleDataChange('parte1Rg', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Nacionalidade</label>
                          <input type="text" placeholder="brasileiro(a)" value={liveData.parte1Nacionalidade} onChange={e => handleDataChange('parte1Nacionalidade', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Profissão</label>
                          <input type="text" placeholder="Ex: Empresário" value={liveData.parte1Profissao} onChange={e => handleDataChange('parte1Profissao', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Estado Civil e Regime de Bens</label>
                        <input type="text" placeholder="Ex: casado sob comunhão parcial de bens / solteiro(a)" value={liveData.parte1EstadoCivil} onChange={e => handleDataChange('parte1EstadoCivil', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Endereço Residencial Completo (com CEP)</label>
                        <input type="text" placeholder="Rua, nº, Complemento, Bairro, Cidade/UF, CEP" value={liveData.parte1Endereco} onChange={e => handleDataChange('parte1Endereco', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                      </div>

                      <div style={{ borderTop: '1px dashed var(--bg-surface-light)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-gold)', cursor: 'pointer' }}>
                          <input type="checkbox" checked={liveData.parte1TemConjuge} onChange={e => handleDataChange('parte1TemConjuge', e.target.checked)} />
                          Incluir Cônjuge / Companheiro(a)
                        </label>
                        {liveData.parte1TemConjuge && (
                          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <input type="text" placeholder="Nome Completo do Cônjuge" value={liveData.parte1ConjugeNome} onChange={e => handleDataChange('parte1ConjugeNome', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                            <input type="text" placeholder="CPF do Cônjuge" value={liveData.parte1ConjugeCpf} onChange={e => handleDataChange('parte1ConjugeCpf', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                            <input type="text" placeholder="RG do Cônjuge" value={liveData.parte1ConjugeRg} onChange={e => handleDataChange('parte1ConjugeRg', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                            <input type="text" placeholder="Profissão do Cônjuge" value={liveData.parte1ConjugeProfissao} onChange={e => handleDataChange('parte1ConjugeProfissao', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* SE FOR PJ 1ª PARTE */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.6rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Razão Social / Nome Empresarial</label>
                          <input type="text" placeholder="Ex: EMPRESA ALFA PARTICIPAÇÕES LTDA." value={liveData.parte1RazaoSocial} onChange={e => handleDataChange('parte1RazaoSocial', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>CNPJ</label>
                          <input type="text" placeholder="00.000.000/0001-00" value={liveData.parte1Cnpj} onChange={e => handleDataChange('parte1Cnpj', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Endereço da Sede com CEP</label>
                        <input type="text" placeholder="Avenida, nº, Conjunto, Bairro, Cidade/UF, CEP" value={liveData.parte1Sede} onChange={e => handleDataChange('parte1Sede', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                      </div>

                      <div style={{ borderTop: '1px dashed var(--bg-surface-light)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                          Representante Legal da Empresa
                        </span>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <input type="text" placeholder="Nome do Sócio/Administrador" value={liveData.parte1RepNome} onChange={e => handleDataChange('parte1RepNome', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                          <input type="text" placeholder="Cargo (Sócio-Administrador)" value={liveData.parte1RepCargo} onChange={e => handleDataChange('parte1RepCargo', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                          <input type="text" placeholder="CPF do Representante" value={liveData.parte1RepCpf} onChange={e => handleDataChange('parte1RepCpf', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                          <input type="text" placeholder="RG do Representante" value={liveData.parte1RepRg} onChange={e => handleDataChange('parte1RepRg', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                          <input type="text" placeholder="Profissão/Nacionalidade" value={liveData.parte1RepProfissao} onChange={e => handleDataChange('parte1RepProfissao', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2ª PARTE (PF OU PJ) */}
                <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '6px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.85rem' }}>
                      2ª PARTE (Comprador / Locatário / Devedor)
                    </span>
                    <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: 'var(--bg-color)', padding: '0.2rem', borderRadius: '4px' }}>
                      <button
                        type="button"
                        onClick={() => handleDataChange('parte2Tipo', 'PF')}
                        style={{
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.72rem',
                          borderRadius: '3px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 700,
                          backgroundColor: liveData.parte2Tipo === 'PF' ? 'var(--accent-gold)' : 'transparent',
                          color: liveData.parte2Tipo === 'PF' ? '#000' : 'var(--text-muted)'
                        }}
                      >
                        Pessoa Física (PF)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDataChange('parte2Tipo', 'PJ')}
                        style={{
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.72rem',
                          borderRadius: '3px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 700,
                          backgroundColor: liveData.parte2Tipo === 'PJ' ? 'var(--accent-gold)' : 'transparent',
                          color: liveData.parte2Tipo === 'PJ' ? '#000' : 'var(--text-muted)'
                        }}
                      >
                        Pessoa Jurídica (PJ)
                      </button>
                    </div>
                  </div>

                  {liveData.parte2Tipo === 'PF' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.6rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Nome Completo</label>
                          <input type="text" placeholder="Nome Completo" value={liveData.parte2Nome} onChange={e => handleDataChange('parte2Nome', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>CPF</label>
                          <input type="text" placeholder="000.000.000-00" value={liveData.parte2Cpf} onChange={e => handleDataChange('parte2Cpf', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>RG / Órgão</label>
                          <input type="text" placeholder="RG nº e Órgão" value={liveData.parte2Rg} onChange={e => handleDataChange('parte2Rg', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Nacionalidade</label>
                          <input type="text" placeholder="brasileiro(a)" value={liveData.parte2Nacionalidade} onChange={e => handleDataChange('parte2Nacionalidade', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Profissão</label>
                          <input type="text" placeholder="Ex: Comerciante" value={liveData.parte2Profissao} onChange={e => handleDataChange('parte2Profissao', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Estado Civil e Regime de Bens</label>
                        <input type="text" placeholder="Ex: solteiro(a) / casado sob comunhão..." value={liveData.parte2EstadoCivil} onChange={e => handleDataChange('parte2EstadoCivil', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Endereço Residencial Completo (com CEP)</label>
                        <input type="text" placeholder="Rua, nº, Complemento, Bairro, Cidade/UF, CEP" value={liveData.parte2Endereco} onChange={e => handleDataChange('parte2Endereco', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                      </div>

                      <div style={{ borderTop: '1px dashed var(--bg-surface-light)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-gold)', cursor: 'pointer' }}>
                          <input type="checkbox" checked={liveData.parte2TemConjuge} onChange={e => handleDataChange('parte2TemConjuge', e.target.checked)} />
                          Incluir Cônjuge / Companheiro(a)
                        </label>
                        {liveData.parte2TemConjuge && (
                          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <input type="text" placeholder="Nome Completo do Cônjuge" value={liveData.parte2ConjugeNome} onChange={e => handleDataChange('parte2ConjugeNome', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                            <input type="text" placeholder="CPF do Cônjuge" value={liveData.parte2ConjugeCpf} onChange={e => handleDataChange('parte2ConjugeCpf', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                            <input type="text" placeholder="RG do Cônjuge" value={liveData.parte2ConjugeRg} onChange={e => handleDataChange('parte2ConjugeRg', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                            <input type="text" placeholder="Profissão do Cônjuge" value={liveData.parte2ConjugeProfissao} onChange={e => handleDataChange('parte2ConjugeProfissao', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* SE FOR PJ 2ª PARTE */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.6rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Razão Social / Nome Empresarial</label>
                          <input type="text" placeholder="Ex: EMPRESA BETA SERVIÇOS LTDA." value={liveData.parte2RazaoSocial} onChange={e => handleDataChange('parte2RazaoSocial', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>CNPJ</label>
                          <input type="text" placeholder="00.000.000/0001-00" value={liveData.parte2Cnpj} onChange={e => handleDataChange('parte2Cnpj', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Endereço da Sede com CEP</label>
                        <input type="text" placeholder="Avenida, nº, Conjunto, Bairro, Cidade/UF, CEP" value={liveData.parte2Sede} onChange={e => handleDataChange('parte2Sede', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                      </div>

                      <div style={{ borderTop: '1px dashed var(--bg-surface-light)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                          Representante Legal da Empresa
                        </span>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <input type="text" placeholder="Nome do Sócio/Administrador" value={liveData.parte2RepNome} onChange={e => handleDataChange('parte2RepNome', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                          <input type="text" placeholder="Cargo (Sócio-Administrador)" value={liveData.parte2RepCargo} onChange={e => handleDataChange('parte2RepCargo', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                          <input type="text" placeholder="CPF do Representante" value={liveData.parte2RepCpf} onChange={e => handleDataChange('parte2RepCpf', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                          <input type="text" placeholder="RG do Representante" value={liveData.parte2RepRg} onChange={e => handleDataChange('parte2RepRg', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                          <input type="text" placeholder="Profissão/Nacionalidade" value={liveData.parte2RepProfissao} onChange={e => handleDataChange('parte2RepProfissao', e.target.value)} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.78rem' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* DADOS DO NEGÓCIO, OBJETO & VALORES */}
              <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-surface-light)', borderRadius: '6px', padding: '1.25rem' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.85rem', display: 'block', marginBottom: '0.75rem' }}>
                  DADOS DO NEGÓCIO, OBJETO & VALORES
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Descrição do Objeto / Imóvel / Veículo / Serviço</label>
                    <input type="text" placeholder="Ex: Apartamento 31, Edifício Solar, Rua das Flores, 120, Matrícula 123.456" value={liveData.objetoDescricao} onChange={e => handleDataChange('objetoDescricao', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Valor Total da Transação (R$)</label>
                    <input type="text" placeholder="Ex: 450.000,00" value={liveData.valor} onChange={e => handleDataChange('valor', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Sinal / Arras / Condição de Pagamento</label>
                    <input type="text" placeholder="Ex: R$ 50.000,00 via Pix nesta data" value={liveData.sinalOuCondicao} onChange={e => handleDataChange('sinalOuCondicao', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Cidade e Foro Competente</label>
                    <input type="text" placeholder="Ex: São Paulo/SP" value={liveData.cidadeForo} onChange={e => handleDataChange('cidadeForo', e.target.value)} style={{ width: '100%', padding: '0.6rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff', fontSize: '0.82rem' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* O CONTRATO VIVO FORMATADO NA TELA */}
          <div 
            className="contrato-print-area"
            style={{
              backgroundColor: isInstruction ? 'var(--bg-color)' : '#FFFFFF',
              color: isInstruction ? '#E0E0E0' : '#111827',
              padding: isInstruction ? '2rem' : '3.5rem 3rem',
              borderRadius: '6px',
              fontFamily: isInstruction ? 'var(--font-body)' : 'serif',
              fontSize: isInstruction ? '1.05rem' : '1.02rem',
              lineHeight: 1.85,
              flex: 1,
              border: isInstruction ? '1px solid var(--bg-surface-light)' : '1px solid #E5E7EB',
              boxShadow: isInstruction ? 'none' : '0 15px 35px rgba(0,0,0,0.5)'
            }}
          >
            {isInstruction ? (
              <div style={{ whiteSpace: 'pre-line' }}>
                {contratoFormatadoAoVivo}
              </div>
            ) : (
              contratoFormatadoAoVivo.split('\n\n').map((paragraph, pIdx) => {
                const isOrientacao = paragraph.includes('ORIENTAÇÃO TÉCNICA');
                const isAdapted = paragraph.includes('[CLÁUSULA ADAPTADA]');
                const cleanParagraph = paragraph.replace(/\[CLÁUSULA ADAPTADA\]\s*/g, '');

                if (isOrientacao) {
                  return (
                    <div 
                      key={pIdx} 
                      className="bloco-orientacao-tecnica no-print"
                      style={{ 
                        backgroundColor: 'rgba(212, 175, 55, 0.08)', 
                        borderLeft: '4px solid var(--accent-gold)', 
                        padding: '1rem 1.25rem', 
                        margin: '0 0 1.75rem 0',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        color: '#92400E',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {cleanParagraph}
                    </div>
                  );
                }

                if (isAdapted && showHighlights) {
                  return (
                    <div 
                      key={pIdx} 
                      className="bloco-adaptado"
                      style={{ 
                        backgroundColor: 'rgba(212, 175, 55, 0.12)', 
                        borderLeft: '4px solid var(--accent-gold)', 
                        padding: '1.1rem 1.4rem', 
                        margin: '1.25rem 0',
                        borderRadius: '0 6px 6px 0',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div 
                        className="badge-adaptada print-hide"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          backgroundColor: 'var(--accent-gold)',
                          color: '#000',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          marginBottom: '0.5rem'
                        }}
                      >
                        ✦ Cláusula Adaptada
                      </div>
                      <div style={{ color: '#111827', fontWeight: 500, whiteSpace: 'pre-line' }}>
                        {cleanParagraph}
                      </div>
                    </div>
                  );
                }

                return (
                  <p key={pIdx} style={{ margin: '0 0 1.25rem 0', whiteSpace: 'pre-line' }}>
                    {cleanParagraph}
                  </p>
                );
              })
            )}
          </div>

          {/* RODAPÉ DO CONTRATO COM SUPORTE DA BANCA */}
          <div className="no-print portal-support-footer" style={{
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
          <div className="no-print portal-nav-footer" style={{ 
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
