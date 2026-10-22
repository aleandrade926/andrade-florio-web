import React, { useState } from 'react';
import { 
  Sparkles, FileText, Download, Copy, Printer, Check, 
  ArrowRight, ArrowLeft, ShieldCheck, AlertTriangle, Building2, 
  MessageCircle, Scale, RefreshCw
} from 'lucide-react';
import { Navbar, Footer, handleWhatsAppClick } from '../components/Shared';

export default function GeradorContratos() {
  const [tipoContrato, setTipoContrato] = useState('compra_venda');
  const [etapa, setEtapa] = useState(1);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [contratoGerado, setContratoGerado] = useState('');

  // Formulário de Dados
  const [formData, setFormData] = useState({
    // Vendedor / Locador
    parte1Nome: '',
    parte1Nacionalidade: 'brasileiro(a)',
    parte1EstadoCivil: 'casado(a)',
    parte1Profissao: '',
    parte1Rg: '',
    parte1Cpf: '',
    parte1Endereco: '',
    
    // Comprador / Locatário
    parte2Nome: '',
    parte2Nacionalidade: 'brasileiro(a)',
    parte2EstadoCivil: 'solteiro(a)',
    parte2Profissao: '',
    parte2Rg: '',
    parte2Cpf: '',
    parte2Endereco: '',

    // Imóvel / Negócio
    imovelEndereco: '',
    imovelMatricula: '',
    imovelCartorio: '',
    valorTotal: '',
    valorSinal: '',
    formaPagamentoRestante: 'à vista na lavratura da escritura pública definitiva',
    prazoMeses: '30',
    garantiaLocacao: 'caucao',
    valorCaucao: '',
    fiadorNome: '',
    temPendenciaInventario: 'nao',
    cidadeForo: 'São Paulo/SP'
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGerarContrato = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      let texto = '';
      const dataAtual = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

      if (tipoContrato === 'compra_venda') {
        texto = `INSTRUMENTO PARTICULAR DE PROMESSA DE COMPRA E VENDA DE IMÓVEL COM ARRAS E CLÁUSULA RESOLUTIVA EXPRESSA

Pelo presente instrumento particular, de um lado:

VENDEDOR(A): ${formData.parte1Nome || '[NOME DO VENDEDOR]'}, ${formData.parte1Nacionalidade}, ${formData.parte1EstadoCivil}, ${formData.parte1Profissao || '[PROFISSÃO]'}, portador(a) do RG nº ${formData.parte1Rg || '[RG]'} e inscrito(a) no CPF/MF sob o nº ${formData.parte1Cpf || '[CPF]'}, residente e domiciliado(a) na ${formData.parte1Endereco || '[ENDEREÇO DO VENDEDOR]'}; e de outro lado:

COMPRADOR(A): ${formData.parte2Nome || '[NOME DO COMPRADOR]'}, ${formData.parte2Nacionalidade}, ${formData.parte2EstadoCivil}, ${formData.parte2Profissao || '[PROFISSÃO]'}, portador(a) do RG nº ${formData.parte2Rg || '[RG]'} e inscrito(a) no CPF/MF sob o nº ${formData.parte2Cpf || '[CPF]'}, residente e domiciliado(a) na ${formData.parte2Endereco || '[ENDEREÇO DO COMPRADOR]'};

Têm entre si, justo e contratado, o presente contrato de promessa de compra e venda, que se regerá pelas seguintes cláusulas e condições:

CLÁUSULA PRIMEIRA – DO OBJETO
O VENDEDOR promete vender ao COMPRADOR o imóvel situado na ${formData.imovelEndereco || '[ENDEREÇO DO IMÓVEL]'}, devidamente registrado sob a matrícula nº ${formData.imovelMatricula || '[NÚMERO DA MATRÍCULA]'} perante o ${formData.imovelCartorio || '[CARTÓRIO DE REGISTRO DE IMÓVEIS]'}, com todas as suas benfeitorias, instalações e pertenças, livre e desembaraçado de quaisquer dívidas, tributos, penhoras ou gravames reais até a data da transmissão definitiva da posse.

CLÁUSULA SEGUNDA – DO PREÇO E FORMA DE PAGAMENTO
O preço total, certo e ajustado para a presente compra e venda é de R$ ${formData.valorTotal || '[VALOR TOTAL]'}, a ser pago da seguinte forma:
a) R$ ${formData.valorSinal || '[VALOR DO SINAL]'}, pagos nesta data a título de SINAL E PRINCÍPIO DE PAGAMENTO (ARRAS CONFIRMATÓRIAS nos termos do Art. 417 do Código Civil), via transferência bancária eletrônica ou PIX;
b) O saldo remanescente será quitado da seguinte forma: ${formData.formaPagamentoRestante}.

CLÁUSULA TERCEIRA – DA CLÁUSULA RESOLUTIVA EXPRESSA (ART. 474 DO CÓDIGO CIVIL)
O não pagamento de qualquer parcela ou do saldo final estipulado na Cláusula Segunda ensejará a imediata e automática resolução de pleno direito deste contrato, mediante notificação extrajudicial com prazo de 15 (quinze) dias para purga da mora, com a perda imediata do sinal em favor do VENDEDOR, a título de perdas e danos pré-fixados.

CLÁUSULA QUARTA – DAS CERTIDÕES OBRIGATÓRIAS E DUE DILIGENCE
O VENDEDOR obriga-se a apresentar, no prazo de até 15 (quinze) dias, as certidões negativas de feitos ajuizados (cíveis, trabalhistas e federais), certidões negativas de tributos imobiliários e a matrícula atualizada com negativa de ônus e ações. Havendo qualquer apontamento impeditivo ou risco de fraude contra credores, o COMPRADOR poderá rescindir o presente ajuste sem qualquer ônus, com devolução integral das quantias pagas.

CLÁUSULA QUINTA – DO FORO
Para dirimir quaisquer controvérsias decorrentes deste contrato, as partes elegem expressamente o Foro da Comarca de ${formData.cidadeForo}, com renúncia expressa a qualquer outro.

E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em 02 (duas) vias de igual teor e forma, na presença de 02 (duas) testemunhas.

${formData.cidadeForo}, ${dataAtual}.

___________________________________________________
VENDEDOR(A): ${formData.parte1Nome || '[NOME DO VENDEDOR]'}

___________________________________________________
COMPRADOR(A): ${formData.parte2Nome || '[NOME DO COMPRADOR]'}

TESTEMUNHAS:
1. Nome: ________________________ CPF: ____________________
2. Nome: ________________________ CPF: ____________________`;
      } else {
        texto = `CONTRATO DE LOCAÇÃO RESIDENCIAL COM GARANTIA E REGRAS DE VISTORIA

LOCADOR(A): ${formData.parte1Nome || '[NOME DO LOCADOR]'}, ${formData.parte1Nacionalidade}, ${formData.parte1EstadoCivil}, ${formData.parte1Profissao || '[PROFISSÃO]'}, portador(a) do RG nº ${formData.parte1Rg || '[RG]'} e CPF nº ${formData.parte1Cpf || '[CPF]'}, residente na ${formData.parte1Endereco || '[ENDEREÇO DO LOCADOR]'}.

LOCATÁRIO(A): ${formData.parte2Nome || '[NOME DO LOCATÁRIO]'}, ${formData.parte2Nacionalidade}, ${formData.parte2EstadoCivil}, ${formData.parte2Profissao || '[PROFISSÃO]'}, portador(a) do RG nº ${formData.parte2Rg || '[RG]'} e CPF nº ${formData.parte2Cpf || '[CPF]'}, residente na ${formData.parte2Endereco || '[ENDEREÇO DO LOCATÁRIO]'}.

CLÁUSULA PRIMEIRA – DO IMÓVEL E DESTINAÇÃO
O LOCADOR aluga ao LOCATÁRIO o imóvel situado na ${formData.imovelEndereco || '[ENDEREÇO DO IMÓVEL]'}, destinando-se exclusivamente para moradia residencial familiar, sendo vedada a sublocação ou cessão a terceiros sem prévio consentimento escrito.

CLÁUSULA SEGUNDA – DO VALOR E DO PRAZO
A locação é convencionada pelo prazo de ${formData.prazoMeses} meses. O aluguel mensal é de R$ ${formData.valorTotal || '[VALOR DO ALUGUEL]'}, com vencimento todo dia 10 de cada mês, reajustado anualmente pela variação acumulada do IPCA/IBGE.

CLÁUSULA TERCEIRA – DA GARANTIA LOCATÍCIA (LEI 8.245/91)
Para garantia integral do cumprimento deste contrato, é pactuada a garantia sob a modalidade de: ${formData.garantiaLocacao === 'caucao' ? `CAUÇÃO EM DINHEIRO no valor equivalente a 3 meses de aluguel, totalizando R$ ${formData.valorCaucao || '[VALOR CAUÇÃO]'}` : `FIADOR IDÔNEO: Sr(a). ${formData.fiadorNome || '[NOME DO FIADOR]'}, que renuncia expressamente ao benefício de ordem do Art. 827 do CC`}.

CLÁUSULA QUARTA – DA MULTA RESCISÓRIA PROPORCIONAL
A parte que der causa à rescisão antecipada arcará com multa compensatória correspondente a 03 (três) aluguéis, cobrada de forma estritamente proporcional ao período pendente do contrato, nos termos do Art. 4º da Lei nº 8.245/91.

CLÁUSULA QUINTA – DO FORO
Fica eleito o Foro da Comarca de ${formData.cidadeForo} para dirimir qualquer dúvida ou litígio deste instrumento.

${formData.cidadeForo}, ${dataAtual}.

___________________________________________________
LOCADOR(A): ${formData.parte1Nome || '[NOME DO LOCADOR]'}

___________________________________________________
LOCATÁRIO(A): ${formData.parte2Nome || '[NOME DO LOCATÁRIO]'}

TESTEMUNHAS:
1. Nome: ________________________ CPF: ____________________
2. Nome: ________________________ CPF: ____________________`;
      }

      setContratoGerado(texto);
      setIsGenerating(false);
      setEtapa(3);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contratoGerado);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-main)', fontFamily: 'var(--font-body)' }}>
      <Navbar />

      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {/* HEADER DA FERRAMENTA */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(212, 175, 55, 0.12)',
            border: '1px solid var(--accent-gold)',
            padding: '0.4rem 1.1rem',
            borderRadius: '50px',
            color: 'var(--accent-gold)',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '1.25rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <Sparkles size={16} /> Motor Inteligente de Geração Contratual
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.9rem)', fontFamily: 'var(--font-heading)', color: '#FFFFFF', marginBottom: '1rem' }}>
            Gerador Inteligente de Contratos Blindados
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Responda às perguntas simples do formulário. A inteligência jurídica da <strong>Andrade & Florio</strong> redige e calibra as cláusulas de proteção em tempo real.
          </p>
        </div>

        {/* PROGRESS TABS */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{ 
            padding: '0.6rem 1.25rem', 
            borderRadius: '6px', 
            backgroundColor: etapa === 1 ? 'var(--accent-gold)' : 'var(--bg-surface)', 
            color: etapa === 1 ? '#000' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}>
            1. Tipo de Contrato
          </div>
          <ArrowRight size={16} color="var(--text-muted)" />
          <div style={{ 
            padding: '0.6rem 1.25rem', 
            borderRadius: '6px', 
            backgroundColor: etapa === 2 ? 'var(--accent-gold)' : 'var(--bg-surface)', 
            color: etapa === 2 ? '#000' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}>
            2. Dados e Cláusulas
          </div>
          <ArrowRight size={16} color="var(--text-muted)" />
          <div style={{ 
            padding: '0.6rem 1.25rem', 
            borderRadius: '6px', 
            backgroundColor: etapa === 3 ? 'var(--accent-gold)' : 'var(--bg-surface)', 
            color: etapa === 3 ? '#000' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}>
            3. Contrato Pronto
          </div>
        </div>

        {/* ETAPA 1: ESCOLHA DO TIPO */}
        {etapa === 1 && (
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--bg-surface-light)',
            borderRadius: '10px',
            padding: '3rem 2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>
              Qual modelo você deseja gerar agora?
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div 
                onClick={() => setTipoContrato('compra_venda')}
                style={{
                  padding: '2rem',
                  borderRadius: '8px',
                  border: tipoContrato === 'compra_venda' ? '2px solid var(--accent-gold)' : '1px solid var(--bg-surface-light)',
                  backgroundColor: tipoContrato === 'compra_venda' ? 'rgba(212, 175, 55, 0.08)' : 'var(--bg-color)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Imobiliário • Mais Utilizado
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Compra e Venda de Imóvel
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Com arras (sinal), cláusula resolutiva expressa contra calote e checklist de certidões.
                </p>
              </div>

              <div 
                onClick={() => setTipoContrato('locacao')}
                style={{
                  padding: '2rem',
                  borderRadius: '8px',
                  border: tipoContrato === 'locacao' ? '2px solid var(--accent-gold)' : '1px solid var(--bg-surface-light)',
                  backgroundColor: tipoContrato === 'locacao' ? 'rgba(212, 175, 55, 0.08)' : 'var(--bg-color)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Lei do Inquilinato
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Locação Residencial
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Com escolha de caução de até 3 meses ou fiador, regras de vistoria e reajuste anual.
                </p>
              </div>
            </div>

            <button 
              onClick={() => setEtapa(2)}
              className="btn-gold"
              style={{
                padding: '1.1rem 2.8rem',
                fontSize: '1.15rem',
                fontWeight: 700,
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Continuar para os Dados <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* ETAPA 2: FORMULÁRIO DE PREENCHIMENTO */}
        {etapa === 2 && (
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--bg-surface-light)',
            borderRadius: '10px',
            padding: '2.5rem'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
              Preencha os Dados do Contrato
            </h3>

            {/* SEÇÃO 1: PRIMEIRA PARTE */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '1rem', borderBottom: '1px solid var(--bg-surface-light)', paddingBottom: '0.5rem' }}>
                1. Dados do {tipoContrato === 'compra_venda' ? 'Vendedor' : 'Locador (Proprietário)'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Ex: João da Silva"
                    value={formData.parte1Nome}
                    onChange={(e) => handleChange('parte1Nome', e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>CPF</label>
                  <input 
                    type="text" 
                    placeholder="000.000.000-00"
                    value={formData.parte1Cpf}
                    onChange={(e) => handleChange('parte1Cpf', e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Endereço Completo</label>
                  <input 
                    type="text" 
                    placeholder="Rua, Número, Bairro, Cidade/UF"
                    value={formData.parte1Endereco}
                    onChange={(e) => handleChange('parte1Endereco', e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                  />
                </div>
              </div>
            </div>

            {/* SEÇÃO 2: SEGUNDA PARTE */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '1rem', borderBottom: '1px solid var(--bg-surface-light)', paddingBottom: '0.5rem' }}>
                2. Dados do {tipoContrato === 'compra_venda' ? 'Comprador' : 'Inquilino (Locatário)'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Maria Oliveira"
                    value={formData.parte2Nome}
                    onChange={(e) => handleChange('parte2Nome', e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>CPF</label>
                  <input 
                    type="text" 
                    placeholder="000.000.000-00"
                    value={formData.parte2Cpf}
                    onChange={(e) => handleChange('parte2Cpf', e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Endereço Completo</label>
                  <input 
                    type="text" 
                    placeholder="Rua, Número, Bairro, Cidade/UF"
                    value={formData.parte2Endereco}
                    onChange={(e) => handleChange('parte2Endereco', e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                  />
                </div>
              </div>
            </div>

            {/* SEÇÃO 3: IMÓVEL E VALORES */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '1rem', borderBottom: '1px solid var(--bg-surface-light)', paddingBottom: '0.5rem' }}>
                3. Dados do Imóvel e Valores
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Endereço do Imóvel Objeto do Contrato</label>
                  <input 
                    type="text" 
                    placeholder="Rua, Número, Bairro, Cidade/UF, CEP"
                    value={formData.imovelEndereco}
                    onChange={(e) => handleChange('imovelEndereco', e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                  />
                </div>

                {tipoContrato === 'compra_venda' ? (
                  <>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Nº da Matrícula no Cartório</label>
                      <input 
                        type="text" 
                        placeholder="Ex: 45.890"
                        value={formData.imovelMatricula}
                        onChange={(e) => handleChange('imovelMatricula', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Valor Total da Venda (R$)</label>
                      <input 
                        type="text" 
                        placeholder="Ex: 450.000,00"
                        value={formData.valorTotal}
                        onChange={(e) => handleChange('valorTotal', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Valor do Sinal / Arras (R$)</label>
                      <input 
                        type="text" 
                        placeholder="Ex: 50.000,00"
                        value={formData.valorSinal}
                        onChange={(e) => handleChange('valorSinal', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Valor Mensal do Aluguel (R$)</label>
                      <input 
                        type="text" 
                        placeholder="Ex: 2.200,00"
                        value={formData.valorTotal}
                        onChange={(e) => handleChange('valorTotal', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Prazo em Meses</label>
                      <input 
                        type="number" 
                        value={formData.prazoMeses}
                        onChange={(e) => handleChange('prazoMeses', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Garantia Locatícia</label>
                      <select 
                        value={formData.garantiaLocacao}
                        onChange={(e) => handleChange('garantiaLocacao', e.target.value)}
                        style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--bg-surface-light)', borderRadius: '4px', color: '#fff' }}
                      >
                        <option value="caucao">Caução em Dinheiro (3 meses)</option>
                        <option value="fiador">Fiador</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* GATILHO INTELIGENTE HIGH-TICKET */}
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.05)',
              border: '1px dashed var(--accent-gold)',
              borderRadius: '8px',
              padding: '1.25rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.5rem' }}>
                <AlertTriangle size={18} /> Triagem Preventiva de Risco
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 0.75rem' }}>
                O imóvel possui alguma pendência de inventário, partilha de herdeiros ou restrição judicial?
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <input 
                    type="radio" 
                    name="pendencia" 
                    value="nao" 
                    checked={formData.temPendenciaInventario === 'nao'} 
                    onChange={() => handleChange('temPendenciaInventario', 'nao')}
                  /> Não, está tudo regular
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.9rem', color: '#f87171' }}>
                  <input 
                    type="radio" 
                    name="pendencia" 
                    value="sim" 
                    checked={formData.temPendenciaInventario === 'sim'} 
                    onChange={() => handleChange('temPendenciaInventario', 'sim')}
                  /> Sim, há herdeiros / pendência
                </label>
              </div>

              {formData.temPendenciaInventario === 'sim' && (
                <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '6px' }}>
                  <p style={{ fontSize: '0.88rem', color: '#fca5a5', margin: '0 0 0.5rem' }}>
                    ⚠️ <strong>Alerta de Risco Grave:</strong> Imóvel com inventário pendente não pode ser vendido por contrato simples sem autorização de alvará judicial ou cessão de direitos hereditários formalizada por escritura pública. Risco de anulação da venda!
                  </p>
                  <button 
                    onClick={() => handleWhatsAppClick(
                      'nlxZCPiY6qAcEMzlgIgD',
                      'Olá! Estou gerando um contrato no portal e detectei que o imóvel tem pendência de inventário. Gostaria de uma análise da banca Andrade & Florio.'
                    )}
                    className="btn-outline"
                    style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                  >
                    Falar com Advogado Especialista em Inventários
                  </button>
                </div>
              )}
            </div>

            {/* BOTÕES DE NAVEGAÇÃO */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                onClick={() => setEtapa(1)}
                className="btn-outline"
                style={{ padding: '0.9rem 1.75rem', cursor: 'pointer' }}
              >
                <ArrowLeft size={18} /> Voltar
              </button>

              <button 
                onClick={handleGerarContrato}
                disabled={isGenerating}
                className="btn-gold"
                style={{
                  padding: '1.1rem 2.5rem',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  cursor: isGenerating ? 'wait' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                {isGenerating ? <RefreshCw size={20} className="spin-animate" /> : <Sparkles size={20} />}
                {isGenerating ? 'Calibrando Cláusulas...' : 'Gerar Meu Contrato Blindado'}
              </button>
            </div>
          </div>
        )}

        {/* ETAPA 3: CONTRATO PRONTO */}
        {etapa === 3 && (
          <div>
            {/* BARRA DE AÇÕES */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                  ✓ Contrato Estruturado com Sucesso
                </span>
                <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', margin: '0.2rem 0 0' }}>
                  Seu Documento Personalizado Está Pronto
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={handleCopy}
                  className="btn-outline"
                  style={{ padding: '0.8rem 1.4rem', fontSize: '0.9rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {copied ? <Check size={18} color="#4ade80" /> : <Copy size={18} />}
                  {copied ? 'Copiado!' : 'Copiar Texto'}
                </button>

                <button 
                  onClick={handlePrint}
                  className="btn-gold"
                  style={{ padding: '0.8rem 1.6rem', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Printer size={18} />
                  Imprimir / Salvar em PDF
                </button>
              </div>
            </div>

            {/* PRÉVIA DO DOCUMENTO */}
            <div style={{
              backgroundColor: '#FFFFFF',
              color: '#111827',
              padding: '3.5rem 3rem',
              borderRadius: '8px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              fontFamily: 'serif',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              whiteSpace: 'pre-line',
              border: '1px solid #E5E7EB',
              marginBottom: '3rem'
            }}>
              {contratoGerado}
            </div>

            {/* BOTÃO PARA GERAR NOVO */}
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={() => setEtapa(1)}
                className="btn-outline"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem', cursor: 'pointer' }}
              >
                Gerar Outro Contrato
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
