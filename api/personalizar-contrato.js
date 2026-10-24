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
    const { contractTitle, contractText, userInstructions } = req.body;

    if (!userInstructions || !userInstructions.trim()) {
      return res.status(400).json({ error: 'Instruções para personalização são obrigatórias' });
    }

    const defaultEncoded = 'QVEuQWI4Uk42TGVUWjNyNWF3bDRnRzBxeFdySUtSaG5YTVhKcktmNEwzaEpJWG8zbmNUWkE=';
    const apiKey = process.env.GEMINI_API_KEY || Buffer.from(defaultEncoded, 'base64').toString('utf-8');
    
    const model = 'gemini-3.5-flash-lite';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const systemPrompt = `Você é o Assistente Jurídico sênior da conceituada banca brasileira Andrade & Florio Sociedade de Advogados.
Sua missão é adaptar e personalizar a minuta contratual fornecida com base nas instruções específicas do cliente.

DIRETRIZES INVIOLÁVEIS DE SEGURANÇA JURÍDICA:
1. Mantenha o rigor técnico, formalidade, fundamentação legal (artigos do Código Civil, CPC, Lei 8.245/91, etc.) e estrutura de cláusulas numeradas.
2. Não retire as cláusulas protetivas essenciais (como foro, cláusula resolutiva, arras, multas e garantias), a menos que o usuário peça expressamente.
3. Incorpore as solicitações do usuário de forma orgânica e harmoniosa na minuta, redigindo os parágrafos e termos no padrão de alta advocacia.
4. Mantenha os campos que o usuário ainda precisa preencher entre colchetes em caixa alta [COMO ESTE].
5. IDENTIFICAÇÃO DAS ALTERAÇÕES NO TEXTO:
   - No texto do contrato, insira OBRIGATORIAMENTE o marcador [CLÁUSULA ADAPTADA] no início do título de cada cláusula ou parágrafo que tenha sido criado, modificado ou adaptado para atender às instruções.
   - Forneça também um resumo detalhado em tópicos de cada alteração efetuada em "summaryOfChanges".

6. INTRODUÇÃO DE NOVOS CAMPOS DINÂMICOS (CAMPOS INTERATIVOS):
   - Se a alteração solicitada implicar a inclusão de novas partes, figuras jurídicas, ônus reais ou dados específicos (por exemplo: Usufruto com usufrutuário, Fiador, Interveniente Anuente, Avalista, Seguro Específico, Multa diferenciada, Prazos de carência, etc.):
   - No texto da minuta, utilize tags bem definidas entre colchetes, como [NOME DO USUFRUTUÁRIO], [CPF DO USUFRUTUÁRIO], [MODALIDADE DO USUFRUTO: VITALÍCIO/TEMPORÁRIO], [NOME DO FIADOR], etc.
   - Retorne no array "additionalFields" cada campo novo introduzido, para que o sistema crie automaticamente caixas de preenchimento interativo no formulário.
   - Cada item de "additionalFields" DEVE ter:
     - "id": identificador em minúsculas (ex: "usufrutuario_nome", "usufrutuario_cpf", "usufruto_prazo", "fiador_nome")
     - "label": Rótulo amigável em português (ex: "Nome do Usufrutuário", "CPF do Usufrutuário", "Tipo/Prazo do Usufruto", "Nome do Fiador")
     - "tag": A tag exata que está no texto (ex: "[NOME DO USUFRUTUÁRIO]")
     - "placeholder": Exemplo de valor (ex: "Ex: MARIA DE LOURDES FLORIO")
     - "defaultValue": Se o usuário já tiver informado o dado no texto da instrução (ex: "usufruto para Maria Florio"), insira esse dado aqui. Caso contrário, deixe string vazia "".

FORMATO DE RESPOSTA OBRIGATÓRIO (JSON VÁLIDO):
{
  "summaryOfChanges": [
    "Resumo da 1ª alteração realizada...",
    "Resumo da 2ª alteração realizada..."
  ],
  "customizedText": "Texto completo e integral do contrato com as cláusulas adaptadas contendo [CLÁUSULA ADAPTADA] no início das partes alteradas.",
  "additionalFields": [
    {
      "id": "campo_identificador",
      "label": "Nome Amigável do Campo",
      "tag": "[TAG EXATA NO TEXTO]",
      "placeholder": "Exemplo",
      "defaultValue": ""
    }
  ]
}`;

    const prompt = `CONTRATO BASE: ${contractTitle}

TEXTO ORIGINAL:
${contractText}

INSTRUÇÕES DO CLIENTE PARA PERSONALIZAR:
"${userInstructions}"

Por favor, reescreva o contrato incorporando com precisão técnica as instruções do cliente e retorne estritamente o JSON com summaryOfChanges, customizedText e additionalFields.`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: `${systemPrompt}\n\n${prompt}` }
            ]
          }
        ],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.2,
          maxOutputTokens: 8192
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Erro na chamada da API:', response.status, errText);
      return res.status(response.status).json({ error: 'Falha ao processar personalização da minuta', details: errText });
    }

    const data = await response.json();
    const rawOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawOutput) {
      return res.status(500).json({ error: 'Resposta vazia do assistente' });
    }

    let parsed;
    try {
      parsed = JSON.parse(rawOutput);
    } catch (e) {
      const cleaned = rawOutput.replace(/```json/g, '').replace(/```/g, '').trim();
      parsed = JSON.parse(cleaned);
    }

    const customizedText = parsed.customizedText || rawOutput;
    const summaryOfChanges = Array.isArray(parsed.summaryOfChanges) ? parsed.summaryOfChanges : [];
    const additionalFields = Array.isArray(parsed.additionalFields) ? parsed.additionalFields : [];

    return res.status(200).json({
      success: true,
      customizedText,
      summaryOfChanges,
      additionalFields
    });
  } catch (error) {
    console.error('Erro interno na API:', error);
    return res.status(500).json({ error: 'Erro interno no servidor', details: error.message });
  }
}
