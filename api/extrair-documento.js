export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { fileBase64, mimeType, target = 'auto' } = req.body;

    if (!fileBase64) {
      return res.status(400).json({ error: 'Arquivo não enviado ou formato inválido' });
    }

    // Limpa prefixo data URL se houver (ex: data:application/pdf;base64,...)
    const cleanBase64 = fileBase64.replace(/^data:[^;]+;base64,/, '');
    const cleanMimeType = (mimeType || 'application/pdf').toLowerCase();

    const defaultEncoded = 'QVEuQWI4Uk42TGVUWjNyNWF3bDRnRzBxeFdySUtSaG5YTVhKcktmNEwzaEpJWG8zbmNUWkE=';
    const apiKey = process.env.GEMINI_API_KEY || Buffer.from(defaultEncoded, 'base64').toString('utf-8');
    
    // Modelos com suporte multimodal nativo a PDFs e imagens
    const model = 'gemini-3.5-flash-lite';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const systemPrompt = `Você é o perito e assistente jurídico sênior da banca Andrade & Florio Sociedade de Advogados.
Sua missão é ler o documento fornecido (PDF ou Imagem de CNH, RG, Contrato Social, Matrícula Imobiliária, Comprovante de Residência ou Minuta) e extrair os dados cadastrais com total exatidão para preenchimento de um contrato formal.

DIRETRIZES DE EXTRAÇÃO JURÍDICA:
1. Identifique o tipo de documento: CNH, RG, CONTRATO_SOCIAL, MATRICULA_IMOVEL, COMPROVANTE_RESIDENCIA ou OUTRO.
2. Formate todos os nomes próprios em CAIXA ALTA.
3. Formate CPFs com máscara (000.000.000-00) e CNPJs com máscara (00.000.000/0001-00).
4. Se o usuário tiver indicado o alvo "${target}" (ex: "parte1", "parte2", "objeto"), atribua os dados ao papel indicado. Se for "auto", deduza pelo contexto do documento (ex: se for proprietário/vendedor, locador, comprador, ou empresa).
5. Se for matrícula de imóvel, certidão de registro ou IPTU, extraia com precisão a descrição do imóvel (endereço completo, matrícula nº, cartório competente) e eventual valor de compra/venal.

FORMATO DE RESPOSTA OBRIGATÓRIO (JSON VÁLIDO):
{
  "documentType": "CNH | RG | CONTRATO_SOCIAL | MATRICULA_IMOVEL | COMPROVANTE_RESIDENCIA | OUTRO",
  "summary": "Resumo amigável em uma frase do documento e titular identificado",
  "targetDetected": "parte1 | parte2 | objeto",
  "extractedData": {
    "tipoPessoa": "PF | PJ",
    "nome": "",
    "nacionalidade": "brasileiro(a)",
    "estadoCivil": "solteiro(a) | casado(a) | divorciado(a) | viúvo(a)",
    "profissao": "",
    "rg": "",
    "cpf": "",
    "endereco": "",
    "temConjuge": false,
    "conjugeNome": "",
    "conjugeNacionalidade": "brasileiro(a)",
    "conjugeProfissao": "",
    "conjugeRg": "",
    "conjugeCpf": "",
    "razaoSocial": "",
    "cnpj": "",
    "sede": "",
    "repNome": "",
    "repCargo": "Sócio-Administrador",
    "repCpf": "",
    "repRg": "",
    "repNacionalidade": "brasileiro(a)",
    "repEstadoCivil": "casado(a)",
    "repProfissao": "empresário(a)",
    "objetoDescricao": "",
    "cidadeForo": "",
    "valor": ""
  }
}`;

    const promptText = `Por favor, analise cuidadosamente este documento anexo e extraia todos os dados cadastrais relevantes para qualificação contratual.
Alvo preferencial indicado pelo usuário: ${target}.
Retorne estritamente o JSON com as informações preenchidas.`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                inlineData: {
                  mimeType: cleanMimeType,
                  data: cleanBase64
                }
              },
              {
                text: `${systemPrompt}\n\n${promptText}`
              }
            ]
          }
        ],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.1,
          maxOutputTokens: 4096
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Erro na chamada da API Gemini Extração:', response.status, errText);
      return res.status(response.status).json({ error: 'Falha ao processar leitura do documento', details: errText });
    }

    const data = await response.json();
    const rawOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawOutput) {
      return res.status(500).json({ error: 'Resposta vazia da IA ao ler o documento' });
    }

    let parsed;
    try {
      parsed = JSON.parse(rawOutput);
    } catch (e) {
      const cleaned = rawOutput.replace(/```json/g, '').replace(/```/g, '').trim();
      parsed = JSON.parse(cleaned);
    }

    return res.status(200).json({
      success: true,
      documentType: parsed.documentType || 'DOCUMENTO',
      summary: parsed.summary || 'Documento processado com sucesso',
      targetDetected: parsed.targetDetected || target,
      extractedData: parsed.extractedData || {}
    });

  } catch (error) {
    console.error('Erro interno na API extrair-documento:', error);
    return res.status(500).json({ error: 'Erro interno ao processar documento', details: error.message });
  }
}
