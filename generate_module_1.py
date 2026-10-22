import os
from contract_builder_core import build_docx_contract

out_dir = r"C:\Users\Alexandre\andrade-florio-web-recuperado\public\downloads"
os.makedirs(out_dir, exist_ok=True)

# 01 - COMPRA E VENDA DE IMÓVEL
build_docx_contract(
    filename="01_Contrato_Compra_e_Venda_Imovel.docx",
    title="Instrumento Particular de Promessa de Compra e Venda de Bem Imóvel com Arras e Cláusula Resolutiva Expressa",
    subtitle="Regido pelos Artigos 417 a 420, 462 a 466 e 474 do Código Civil Brasileiro",
    orientacao="Antes de efetuar o pagamento de qualquer sinal (arras), é dever inescusável do adquirente exigir: 1) Matrícula imobiliária atualizada com certidão de ônus e ações reais (vintenária); 2) Certidões negativas de distribuidores cíveis, fiscais e trabalhistas do vendedor e de seus antecessores; 3) Certidão negativa de tributos municipais e de débitos condominiais emitida pelo síndico com ata de eleição.",
    preambulo=(
        "Pelo presente Instrumento Particular de Promessa de Compra e Venda de Bem Imóvel, celebrado com fundamento na legislação civil em vigor, têm entre si, de um lado, como PROMITENTE(S) VENDEDOR(ES):\n\n"
        "[NOME COMPLETO DO VENDEDOR], [nacionalidade], [estado civil - se casado, indicar regime de bens e existência de pacto antenupcial], [profissão], portador(a) da cédula de identidade RG nº [NÚMERO], inscrito(a) no CPF/MF sob o nº [NÚMERO], e seu cônjuge/companheiro(a) [NOME DO CÔNJUGE], [nacionalidade], [profissão], RG nº [NÚMERO], CPF nº [NÚMERO], ambos residentes e domiciliados na [ENDEREÇO COMPLETO COM CEP], doravante denominados conjuntamente VENDEDORES;\n\n"
        "E, de outro lado, como PROMISSÁRIO(S) COMPRADOR(ES):\n\n"
        "[NOME COMPLETO DO COMPRADOR], [nacionalidade], [estado civil], [profissão], portador(a) da cédula de identidade RG nº [NÚMERO], inscrito(a) no CPF/MF sob o nº [NÚMERO], e seu cônjuge/companheiro(a) [NOME DO CÔNJUGE], [nacionalidade], [profissão], RG nº [NÚMERO], CPF nº [NÚMERO], ambos residentes e domiciliados na [ENDEREÇO COMPLETO COM CEP], doravante denominados conjuntamente COMPRADORES;\n\n"
        "Têm as partes entre si justo, convencionado e contratado o que se expressa mediante as cláusulas e condições seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E CARACTERIZAÇÃO REGISTRAL",
            "1.1. O presente contrato tem por objeto a promessa de compra e venda irrevogável e irretratável do bem imóvel urbano [ou rural] situado na [ENDEREÇO COMPLETO DO IMÓVEL, BAIRRO, CIDADE, ESTADO, CEP], com área privativa de [XX] m², área comum de [XX] m², totalizando [XX] m², com as confrontações e limites descritos na matrícula imobiliária nº [NÚMERO DA MATRÍCULA], registrada perante o [NÚMERO DO OFÍCIO] Cartório de Registro de Imóveis da Comarca de [CIDADE/UF], com inscrição cadastral de IPTU nº [NÚMERO DO IPTU].\n\n"
            "1.2. O imóvel será transferido completamente livre e desembaraçado de quaisquer ônus judiciais ou extrajudiciais, hipotecas legais ou convencionais, penhoras, cauções, arrestos, ações reais ou reipersecutórias, bem como de tributos ou taxas de qualquer espécie, até a data da transmissão da posse direta."
        ),
        (
            "CLÁUSULA SEGUNDA – DA MODALIDADE 'AD CORPUS' E ESTADO DE CONSERVAÇÃO",
            "2.1. O presente negócio jurídico é estipulado na modalidade 'ad corpus' (Art. 500, § 3º do Código Civil), tendo o COMPRADOR examinado previamente o imóvel, suas medidas, dependências e instalações, aceitando-o no estado em que se encontra, sendo meramente enunciativas as referências às dimensões constantes deste contrato.\n\n"
            "2.2. O VENDEDOR declara, sob as penas da lei, inexistir vício redibitório oculto ou defeito estrutural grave de seu conhecimento que comprometa a habitualidade, solidez ou valor econômico do bem."
        ),
        (
            "CLÁUSULA TERCEIRA – DO PREÇO E CRONOGRAMA DE PAGAMENTO",
            "3.1. O preço total, certo e ajustado para a compra e venda do imóvel é de R$ [VALOR TOTAL POR EXTENSO], a ser integralmente pago pelo COMPRADOR nas seguintes condições:\n\n"
            "a) SINAL E PRINCÍPIO DE PAGAMENTO (ARRAS): R$ [VALOR DO SINAL POR EXTENSO], pago nesta data via [Transferência Bancária PIX / TED para a conta bancária de titularidade do Vendedor: Banco [NOME], Agência [Nº], Conta [Nº], Chave Pix [CHAVE]], servindo o comprovante como quitação deste sinal;\n\n"
            "b) PARCELA DO SALDO DEVEDOR: O valor restante de R$ [VALOR DO SALDO POR EXTENSO] será pago impreterivelmente no ato da outorga da Escritura Pública Definitiva de Compra e Venda perante o Tabelião de Notas [ou mediante liberação de carta de crédito / financiamento imobiliário bancário no prazo máximo de [45] dias]."
        ),
        (
            "CLÁUSULA QUARTA – DA NATUREZA DAS ARRAS E IRRETRATABILIDADE",
            "4.1. As arras ora pactuadas possuem natureza confirmatória (Art. 417 do Código Civil). Havendo inexecução ou desistência culposa por parte do COMPRADOR, este perderá o sinal pago em favor do VENDEDOR. Caso a inexecução ou desistência decorra de culpa exclusiva do VENDEDOR, este restituirá o sinal recebido em dobro ao COMPRADOR, acrescido de correção monetária pelo IPCA e juros legais.\n\n"
            "4.2. Salvo as exceções expressas de impedimento registral decorrentes de certidões positivas na Cláusula Sétima, o contrato é irrevogável e irretratável (Art. 420 CC)."
        ),
        (
            "CLÁUSULA QUINTA – DA CLÁUSULA RESOLUTIVA EXPRESSA (ART. 474 DO CC)",
            "5.1. O inadimplemento no pagamento de qualquer parcela ou do saldo final estipulado na Cláusula Terceira operará a imediata e automática resolução de pleno direito deste contrato.\n\n"
            "5.2. Para efeito de desocupação e reintegração de posse, o VENDEDOR notificará extrajudicialmente o COMPRADOR para purgar a mora em 15 (quinze) dias corridos. Não purgada a mora, o contrato considerar-se-á rescindido de pleno direito, autorizando a retenção das arras a título de indenização pré-fixada e medidas liminares possessórias."
        ),
        (
            "CLÁUSULA SEXTA – DA IMISSÃO NA POSSE E ENCARGOS",
            "6.1. A posse direta do imóvel será transferida ao COMPRADOR na data de [DATA OU CONDIÇÃO - EX: quitação integral do sinal / lavratura da escritura], momento em que receberá as chaves.\n\n"
            "6.2. A partir da imissão na posse, todas as despesas ordinárias de condomínio, parcelas de IPTU e tarifas de consumo (água, luz, gás) serão de inteira responsabilidade do COMPRADOR."
        ),
        (
            "CLÁUSULA SÉTIMA – DAS CERTIDÕES OBRIGATÓRIAS E DUE DILIGENCE",
            "7.1. O VENDEDOR obriga-se a apresentar aos COMPRADORES, no prazo de 15 (quinze) dias a contar desta assinatura e às suas expensas, as seguintes certidões negativas emitidas há menos de 30 dias:\n"
            "a) Matrícula imobiliária atualizada com certidão de ônus reais vintenária e de ações reipersecutórias emitida pelo CRI competente;\n"
            "b) Certidão negativa de tributos municipais e declaração de quitação condominial assinada pelo síndico;\n"
            "c) Certidões negativas de distribuidores cíveis e executivos fiscais (Estadual e Federal) da Comarca do imóvel e do domicílio do Vendedor;\n"
            "d) Certidão Negativa de Débitos Trabalhistas (CNDT) e da Justiça do Trabalho;\n"
            "e) Consulta à Central Nacional de Indisponibilidade de Bens (CNIB).\n\n"
            "7.2. Havendo certidão positiva que aponte risco de fraude contra credores ou penhora sobre o bem, assistirá ao COMPRADOR o direito de rescindir o contrato com devolução de 100% dos valores pagos, sem retenção."
        ),
        (
            "CLÁUSULA OITAVA – DA EVICÇÃO DE DIREITO",
            "8.1. O VENDEDOR responde pela evicção de direito nos termos do artigo 447 e seguintes do Código Civil, obrigando-se a indenizar os COMPRADORES por eventuais prejuízos decorrentes de evicção judicial."
        ),
        (
            "CLÁUSULA NONA – DAS DESPESAS CARTORÁRIAS E REGISTRAIS",
            "9.1. Todas as despesas referentes à lavratura da Escritura Pública Definitiva de Compra e Venda, ITBI (Imposto de Transmissão de Bens Imóveis) e emolumentos do Cartório de Registro de Imóveis correrão por conta exclusiva dos COMPRADORES."
        ),
        (
            "CLÁUSULA DÉCIMA – DA CLÁUSULA PENAL",
            "10.1. A infração a qualquer cláusula deste contrato ensejará a aplicação de multa penal de 10% (dez por cento) sobre o valor total do negócio em desfavor da parte infratora, sem prejuízo de perdas e danos."
        ),
        (
            "CLÁUSULA DÉCIMA PRIMEIRA – DO FORO",
            "11.1. As partes elegem o Foro da Comarca de [CIDADE/UF DO IMÓVEL] para dirimir quaisquer litígios deste instrumento, renunciando a qualquer outro."
        )
    ],
    out_dir=out_dir
)

# 02 - LOCAÇÃO RESIDENCIAL
build_docx_contract(
    filename="02_Contrato_Locacao_Residencial.docx",
    title="Contrato de Locação Residencial com Garantias e Regras de Vistoria",
    subtitle="Regido Integralmente pela Lei Federal nº 8.245/1991 (Lei do Inquilinato)",
    orientacao="O locador que exige mais de uma modalidade de garantia para o mesmo contrato comete contravenção penal expressa (Art. 43, II da Lei 8.245/91). Escolha estritamente UMA opção de garantia na Cláusula Quinta (ou caução em dinheiro, ou fiador, ou seguro fiança).",
    preambulo=(
        "Pelo presente Instrumento Particular de Contrato de Locação Residencial, regido pela Lei Federal nº 8.245/1991, têm entre si, de um lado:\n\n"
        "LOCADOR(A): [NOME COMPLETO DO LOCADOR], [nacionalidade], [estado civil], [profissão], RG nº [RG], CPF nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP];\n\n"
        "E, de outro lado, como LOCATÁRIO(A):\n\n"
        "[NOME COMPLETO DO LOCATÁRIO], [nacionalidade], [estado civil], [profissão], RG nº [RG], CPF nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP];\n\n"
        "Ajustam entre si as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E DESTINAÇÃO",
            "1.1. O presente contrato tem por objeto a locação do imóvel residencial situado na [ENDEREÇO COMPLETO DO IMÓVEL, BAIRRO, CIDADE, ESTADO, CEP], com suas dependências e pertences descritos no Laudo de Vistoria anexo.\n\n"
            "1.2. O imóvel destina-se EXCLUSIVAMENTE para fins residenciais unifamiliares do LOCATÁRIO, sendo expressamente proibida a mudança de destinação, sublocação, cessão a terceiros no todo ou em parte, ou locação por temporada (estilo Airbnb), sem prévia autorização escrita do LOCADOR."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PRAZO E PRORROGAÇÃO",
            "2.1. A locação vigerá pelo prazo determinado de [30 (trinta) meses / 12 (doze) meses], iniciando-se em [DATA DE INÍCIO] e encerrando-se em [DATA DE TÉRMINO], quando o LOCATÁRIO desocupará o bem.\n\n"
            "2.2. Permanecendo o LOCATÁRIO no imóvel por mais de 30 dias após o termo final sem oposição, a locação considerar-se-á prorrogada por prazo indeterminado, mantidas todas as garantias."
        ),
        (
            "CLÁUSULA TERCEIRA – DO VALOR DO ALUGUEL E DA MORA",
            "3.1. O aluguel mensal inicial é de R$ [VALOR POR EXTENSO], a ser pago impreterivelmente até o dia [DIA DO VENCIMENTO] de cada mês subsequente ao vencido, mediante PIX ou depósito para o LOCADOR: Banco [NOME], Agência [Nº], Conta [Nº], Chave Pix [CHAVE].\n\n"
            "3.2. A impontualidade implicará multa moratória de 10% (dez por cento) sobre o débito, juros de mora de 1% ao mês e correção monetária pelo IPCA/IBGE, além de honorários de cobrança."
        ),
        (
            "CLÁUSULA QUARTA – DO REAJUSTE ANUAL",
            "4.1. O aluguel será reajustado anualmente com base na variação acumulada do IPCA/IBGE nos 12 meses anteriores ou, na sua ausência, pelo IGP-M/FGV."
        ),
        (
            "CLÁUSULA QUINTA – DA GARANTIA LOCATÍCIA (MODALIDADE ÚNICA)",
            "5.1. Para a garantia das obrigações contratuais, é estipulada expressamente UMA das modalidades abaixo (Art. 37 da Lei 8.245/91):\n\n"
            "[OPÇÃO 1 - CAUÇÃO EM DINHEIRO]: Depósito de [3 (três)] meses de aluguel, totalizando R$ [VALOR], em caderneta de poupança vinculada, devolvida ao término do contrato após vistoria final e quitação de débitos.\n\n"
            "[OPÇÃO 2 - FIADOR SOLIDÁRIO]: Assina na condição de FIADOR e principal pagador solidário, com renúncia ao benefício de ordem (Art. 827 do CC): [NOME DO FIADOR], RG nº [RG], CPF nº [CPF], proprietário do imóvel matriculado sob nº [MATRÍCULA] no CRI de [COMARCA].\n\n"
            "[OPÇÃO 3 - SEGURO FIANÇA]: Contratação de apólice de seguro fiança locatícia mantida vigente pelo LOCATÁRIO perante a seguradora [SEGURADORA]."
        ),
        (
            "CLÁUSULA SEXTA – DOS ENCARGOS, CONDOMÍNIO E IPTU",
            "6.1. Além do aluguel, correrão por conta do LOCATÁRIO: condomínio ordinário, parcelas de IPTU e despesas de água, luz e gás durante todo o período em que mantiver a posse."
        ),
        (
            "CLÁUSULA SÉTIMA – DAS BENFEITORIAS E RETENÇÃO",
            "7.1. Benfeitorias necessárias ou úteis dependerão de consentimento prévio e por escrito do LOCADOR e não gerarão qualquer direito de indenização ou retenção, nos termos do Art. 35 da Lei 8.245/91 e Súmula 335 do STJ."
        ),
        (
            "CLÁUSULA OITAVA – DA MULTA RESCISÓRIA PROPORCIONAL (ART. 4º DA LEI 8.245/91)",
            "8.1. Fica estipulada a multa rescisória de 03 (três) meses de aluguel para a infração contratual. Na desocupação antecipada pelo inquilino, a multa será cobrada de forma estritamente proporcional ao tempo restante do contrato."
        ),
        (
            "CLÁUSULA NONA – DO FORO",
            "9.1. Fica eleito o Foro da Comarca de [CIDADE/UF DO IMÓVEL] para dirimir qualquer dúvida ou litígio deste instrumento."
        )
    ],
    out_dir=out_dir
)

# 03 - LOCAÇÃO COMERCIAL
build_docx_contract(
    filename="03_Contrato_Locacao_Comercial.docx",
    title="Contrato de Locação Comercial Não Residencial com Proteção de Ponto e Regras Corporativas",
    subtitle="Regido pela Lei Federal nº 8.245/1991 (Arts. 51 a 57) e Código Civil",
    orientacao="Atenção à Ação Renovatória de Aluguel: contratos comerciais escritos celebrados por prazo determinado de 5 anos ininterruptos e exploração do mesmo ramo de comércio por no mínimo 3 anos concedem ao locatário o direito potestativo à renovação compulsória do ponto comercial (Art. 51 da Lei do Inquilinato).",
    preambulo=(
        "Pelo presente Instrumento Particular de Contrato de Locação Comercial, celebram entre si:\n\n"
        "LOCADOR: [RAZÃO SOCIAL OU NOME DO PROPRIETÁRIO], CNPJ/CPF nº [NÚMERO], com sede/domicílio na [ENDEREÇO COMPLETO];\n\n"
        "LOCATÁRIO: [RAZÃO SOCIAL DA EMPRESA LOCATÁRIA], pessoa jurídica inscrita no CNPJ/MF sob o nº [NÚMERO], com sede na [ENDEREÇO COMPLETO], representada por [NOME DO SÓCIO ADMINISTRADOR], RG nº [RG], CPF nº [CPF];\n\n"
        "Têm entre si acordadas as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO IMÓVEL E ATIVIDADE COMERCIAL",
            "1.1. O LOCADOR dá em locação ao LOCATÁRIO o imóvel comercial situado na [ENDEREÇO COMPLETO DO PONTO COMERCIAL], para a exploração exclusiva do ramo de atividade de [DESCREVER RAMO: ex. comércio varejista, escritório administrativo, clínica, restaurante], sendo expressamente vedada a cessão do ponto, cessão de quotas societárias simuladas ou sublocação sem anuência escrita."
        ),
        (
            "CLÁUSULA SEGUNDA – DOS ALVARÁS, AVCB E LICENÇAS PÚBLICAS",
            "2.1. Correrão por conta exclusiva do LOCATÁRIO a obtenção, pagamento e renovação de todas as licenças operacionais, Auto de Vistoria do Corpo de Bombeiros (AVCB), alvarás de funcionamento da Prefeitura e vigilância sanitária necessários para o exercício de sua atividade econômica, assumindo total responsabilidade por eventuais autos de infração."
        ),
        (
            "CLÁUSULA TERCEIRA – DO PRAZO E RENOVAÇÃO",
            "3.1. O prazo de locação é de [XX] meses, com início em [DATA] e término em [DATA]. A renovação dependerá de novo instrumento formal ou dos estritos requisitos legais da Lei nº 8.245/1991."
        ),
        (
            "CLÁUSULA QUARTA – DO ALUGUEL, REAJUSTE E ENCARGOS",
            "4.1. O aluguel mensal é fixado em R$ [VALOR POR EXTENSO], vencível todo dia [DIA] de cada mês, reajustado anualmente pela variação acumulada do IPCA/IBGE.\n\n"
            "4.2. A mora acarretará multa de 10%, juros de 1% ao mês e correção monetária integral."
        ),
        (
            "CLÁUSULA QUINTA – DAS REFORMAS E ADEQUAÇÃO DE PONTO",
            "5.1. Quaisquer obras de adequação física exigirão prévia aprovação técnica do LOCADOR. As benfeitorias necessárias e úteis aderirão ao imóvel sem direito de retenção ou indenização."
        ),
        (
            "CLÁUSULA SEXTA – DA RESCISÃO E MULTA PROPORCIONAL",
            "6.1. A infração contratual sujeitará a parte inadimplente à multa compensatória equivalente a 03 (três) aluguéis vigentes, calculada de forma proporcional ao período restante nos termos do Art. 4º da Lei 8.245/91."
        ),
        (
            "CLÁUSULA SÉTIMA – DO FORO",
            "7.1. Fica eleito o Foro da Comarca de [CIDADE/UF DO IMÓVEL] para processar quaisquer medidas decorrentes deste contrato."
        )
    ],
    out_dir=out_dir
)

# 04 - COMODATO
build_docx_contract(
    filename="04_Contrato_Comodato_Imovel.docx",
    title="Contrato de Comodato de Bem Imóvel com Cláusula Peremptória Anti-Usucapião",
    subtitle="Empréstimo Gratuito com Comprovação Formal de Posse Precária (Art. 1.208 do Código Civil)",
    orientacao="Emprestar imóveis verbalmente ou sem contrato para familiares, caseiros ou terceiros é o fator nº 1 de perda definitiva de propriedades no Brasil por Usucapião. Este contrato formaliza a posse precária por ato de mera tolerância, afastando o animus domini perante os tribunais.",
    preambulo=(
        "Pelo presente Instrumento Particular de Contrato de Comodato de Bem Imóvel, regido pelos artigos 579 a 585 do Código Civil Brasileiro, celebram entre si:\n\n"
        "COMODANTE (PROPRIETÁRIO): [NOME COMPLETO], [nacionalidade], [estado civil], [profissão], RG nº [RG], CPF nº [CPF], residente e domiciliado na [ENDEREÇO COMPLETO];\n\n"
        "COMODATÁRIO (BENEFICIÁRIO): [NOME COMPLETO], [nacionalidade], [estado civil], [profissão], RG nº [RG], CPF nº [CPF], residente e domiciliado na [ENDEREÇO COMPLETO];\n\n"
        "Ajustam o presente pacto mediante as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E DA NATUREZA ESTRITAMENTE GRATUITA",
            "1.1. O presente instrumento tem por objeto o empréstimo gratuito (comodato) do bem imóvel situado na [ENDEREÇO COMPLETO DO IMÓVEL, BAIRRO, CIDADE, ESTADO, CEP], matrícula nº [NÚMERO DA MATRÍCULA] perante o Cartório de Registro de Imóveis da Comarca de [CIDADE/UF].\n\n"
            "1.2. O empréstimo é concedido em caráter pessoal (intuitu personae) e estritamente gratuito, inexistindo qualquer cobrança pecuniária, aluguel ou contraprestação onerosa."
        ),
        (
            "CLÁUSULA SEGUNDA – DA POSSE PRECÁRIA E CLÁUSULA PEREMPTÓRIA ANTI-USUCAPIÃO",
            "2.1. O COMODATÁRIO declara expressamente ter ciência inequívoca de que sua ocupação no imóvel decorre de mera permissão, tolerância e beneplácito do COMODANTE, consubstanciando típica POSSE PRECÁRIA e detenção dependente.\n\n"
            "2.2. Nos estritos termos do Artigo 1.208 do Código Civil Brasileiro ('Não induzem posse os atos de mera permissão ou tolerância...'), FICA SUMARIAMENTE VEDADA E JURIDICAMENTE INEFICAZ QUALQUER TENTATIVA DO COMODATÁRIO OU DE SEUS SUCESSORES DE PLEITEAR AQUISIÇÃO ORIGINÁRIA POR MEIO DE USUCAPIÃO (seja judicial, extrajudicial, urbana, rural, especial ou ordinária).\n\n"
            "2.3. O COMODATÁRIO reconhece o direito de propriedade pleno, exclusivo e perpétuo do COMODANTE."
        ),
        (
            "CLÁUSULA TERCEIRA – DO PRAZO E NOTIFICAÇÃO DE DESOCUPAÇÃO",
            "3.1. O comodato vigorará pelo prazo de [XX] meses, com início em [DATA] e término em [DATA].\n\n"
            "3.2. Fica resguardado ao COMODANTE o direito de reaver o imóvel a qualquer tempo mediante simples notificação prévia de 30 (trinta) dias para a restituição das chaves."
        ),
        (
            "CLÁUSULA QUARTA – DO ALUGUEL-PENA POR MORA (ART. 582 DO CÓDIGO CIVIL)",
            "4.1. Findo o prazo da notificação sem a devida desocupação, o COMODATÁRIO incorrerá automaticamente em mora 'ex re'.\n\n"
            "4.2. Durante todo o período em que mantiver a posse indevida, pagará ao COMODANTE um aluguel-pena mensal no valor fixado em R$ [VALOR POR EXTENSO - EX: R$ 3.000,00], nos termos do Art. 582 do CC, além de responder por perdas e danos e reintegração de posse liminar."
        ),
        (
            "CLÁUSULA QUINTA – DA MANUTENÇÃO E RENÚNCIA A BENFEITORIAS",
            "5.1. O COMODATÁRIO custeará todas as tarifas de consumo (água, luz, gás e condomínio ordinário). Nenhuma obra poderá ser feita sem autorização escrita do COMODANTE, renunciando o comodatário a indenização ou retenção."
        ),
        (
            "CLÁUSULA SEXTA – DO FORO",
            "6.1. Fica eleito o Foro da Comarca de [CIDADE/UF DO IMÓVEL] para dirimir litígios decorrentes deste contrato."
        )
    ],
    out_dir=out_dir
)

# 05 - TERMO DE VISTORIA
build_docx_contract(
    filename="05_Termo_Vistoria_Imovel.docx",
    title="Laudo Descritivo de Vistoria de Imóvel (Entrada e Saída) com Registro Fotográfico",
    subtitle="Anexo Integrante e Indissociável do Contrato de Locação Residencial / Comercial",
    orientacao="A vistoria de entrada com fotos detalhadas é a prova documental decisiva para exigir a restituição do imóvel com pintura nova e reparos de danos no encerramento da locação. Sem este documento assinado, o locador perde a maioria das ações de ressarcimento.",
    preambulo=(
        "Pelo presente Termo e Laudo Descritivo de Vistoria de Imóvel, que integra o Contrato de Locação firmado entre as partes em [DATA DO CONTRATO], procedeu-se à minuciosa vistoria do imóvel situado na [ENDEREÇO COMPLETO DO IMÓVEL], com a presença e anuência expressa do LOCADOR e do LOCATÁRIO.\n\n"
        "As condições físicas apuradas são descritas a seguir:"
    ),
    clausulas=[
        (
            "1. PINTURA, PAREDES E TETOS",
            "1.1. Salas e dormitórios com pintura nova na cor [COR/TIPO DE TINTA], sem manchas, furos ou descascamento.\n"
            "1.2. Cozinha e banheiros com azulejos cerâmicos intactos, rejuntes limpos, sem rachaduras ou trincas."
        ),
        (
            "2. INSTALAÇÕES HIDRÁULICAS E SANITÁRIAS",
            "2.1. Torneiras, chuveiros, registros e descargas testados na presença das partes e em perfeito estado de estanqueidade, sem vazamentos ou infiltrações ativas."
        ),
        (
            "3. INSTALAÇÕES ELÉTRICAS",
            "3.1. Interruptores, tomadas, disjuntores e fiação testados e energizados em perfeita funcionalidade.\n"
            "3.2. Quadro geral de distribuição limpo e devidamente identificado."
        ),
        (
            "4. ESQUADRIAS, PORTAS E FECHADURAS",
            "4.1. Todas as portas de madeira envernizadas e fechaduras com respectivas chaves entregues funcionando suavemente.\n"
            "4.2. Janelas de alumínio com vidros perfeitos, sem quebras ou trincas, e trincos em funcionamento."
        ),
        (
            "5. REGISTRO FOTOGRÁFICO E PRAZO DE RESSALVA",
            "5.1. Integram este laudo [XX] fotografias datadas e rubricadas pelas partes.\n"
            "5.2. O LOCATÁRIO disporá do prazo de 48 (quarenta e oito) horas a contar do recebimento das chaves para apontar por escrito eventuais vícios ocultos de funcionamento, findo o qual concordará plenamente com a vistoria."
        )
    ],
    out_dir=out_dir
)

# 06 - ADITIVO LOCAÇÃO
build_docx_contract(
    filename="06_Aditivo_Contratual_Locacao.docx",
    title="Termo Aditivo de Contrato de Locação (Prorrogação de Prazo e Reajuste)",
    subtitle="Instrumento de Modificação e Consolidação de Obrigações Contratuais",
    orientacao="Sempre que alterar o valor do aluguel ou prorrogar o prazo, exija a assinatura também dos fiadores originários para evitar a extinção da garantia (Súmula 214 do STJ: 'O fiador na locação não responde por obrigações resultantes de aditamento ao qual não anuiu').",
    preambulo=(
        "Pelo presente Termo Aditivo de Contrato de Locação, celebrado entre LOCADOR, LOCATÁRIO e FIADORES devidamente qualificados no Contrato de Locação originário firmado em [DATA DO CONTRATO ORIGINÁRIO], referente ao imóvel situado na [ENDEREÇO COMPLETO]:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA PRORROGAÇÃO DO PRAZO CONTRATUAL",
            "1.1. As partes acordam em prorrogar o prazo de vigência da locação por mais [XX] meses, iniciando-se o novo período em [DATA] e terminando em [DATA]."
        ),
        (
            "CLÁUSULA SEGUNDA – DA REPACTUAÇÃO DO VALOR DO ALUGUEL",
            "2.1. O valor do aluguel mensal passa a ser de R$ [NOVO VALOR POR EXTENSO], a ser pago na mesma conta bancária e data de vencimento ajustadas originariamente."
        ),
        (
            "CLÁUSULA TERCEIRA – DA RATIFICAÇÃO DA GARANTIA E DEMAIS CLÁUSULAS",
            "3.1. O FIADOR comparece a este ato e anui expressamente com a prorrogação e novo valor, mantendo sua responsabilidade solidária até a entrega efetiva das chaves.\n\n"
            "3.2. Ficam integralmente ratificadas todas as demais cláusulas e condições do contrato originário que não colidirem com este aditivo."
        )
    ],
    out_dir=out_dir
)

# 07 - DISTRATO LOCAÇÃO
build_docx_contract(
    filename="07_Distrato_de_Locacao.docx",
    title="Instrumento Particular de Distrato de Locação com Quitação Recíproca e Entrega de Chaves",
    subtitle="Resilição Bilateral Consensual nos Termos do Artigo 472 do Código Civil",
    orientacao="O distrato formal com entrega de chaves e termo de quitação mútua é o documento indispensável para impedir que inquilinos ou proprietários ingressem com ações judiciais posteriores cobrando contas antigas ou alegando continuidade do contrato.",
    preambulo=(
        "Pelo presente Instrumento Particular de Distrato de Contrato de Locação, de um lado LOCADOR e de outro lado LOCATÁRIO, qualificados no Contrato de Locação referente ao imóvel da [ENDEREÇO DO IMÓVEL]:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA RESILIÇÃO E ENTREGA DEFINITIVA DE CHAVES",
            "1.1. As partes, de comum acordo, resilientes e plenamente satisfeitas, declaram formalmente rescindido nesta data o contrato de locação celebrado em [DATA].\n\n"
            "1.2. O LOCATÁRIO devolve formalmente a posse direta e todas as chaves do imóvel ao LOCADOR nesta data, tendo sido realizada a vistoria final de saída com aprovação."
        ),
        (
            "CLÁUSULA SEGUNDA – DA DEVOLUÇÃO DA GARANTIA / EXONERAÇÃO DO FIADOR",
            "2.1. Em virtude do adimplemento integral das obrigações, o LOCADOR devolve nesta data o saldo da caução depositada no valor de R$ [VALOR DEVOLVIDO] [ou declara integralmente exonerado de responsabilidade o FIADOR]."
        ),
        (
            "CLÁUSULA TERCEIRA – DA QUITAÇÃO PLENA, GERAL E IRREVOGÁVEL",
            "3.1. As partes conferem-se mútua, ampla, geral e irrevogável quitação de todas as obrigações contratuais, tributárias, locatícias e condominiais, declarando nada mais ter a reclamar uma da outra a qualquer tempo perante o Poder Judiciário."
        )
    ],
    out_dir=out_dir
)

# 08 - NOTIFICAÇÃO EXTRAJUDICIAL DE DESPEJO
build_docx_contract(
    filename="08_Notificacao_Extrajudicial_Despejo.docx",
    title="Notificação Extrajudicial de Desocupação e Cobrança com Prazo Legal para Purga da Mora",
    subtitle="Documento Pré-Processual de Constituição em Mora para Fins da Lei nº 8.245/1991",
    orientacao="A notificação extrajudicial com discriminação do débito e concessão de prazo para purgar a mora comprova a ciência inequívoca do inquilino perante o juiz, fundamentando pedidos liminares em Ações de Despejo por Falta de Pagamento.",
    preambulo=(
        "À(Ao) NOTIFICADA(O):\n"
        "[NOME DO LOCATÁRIO / INQUILINO]\n"
        "Endereço do Imóvel: [ENDEREÇO COMPLETO DO IMÓVEL LOCADO]\n\n"
        "Pelo presente instrumento, o NOTIFICANTE [NOME DO LOCADOR / PROPRIETÁRIO], por intermédio de seus procuradores legais, NOTIFICA formalmente V. Sa. nos seguintes termos:"
    ),
    clausulas=[
        (
            "1. DA INADIMPLÊNCIA CONTRATUAL",
            "1.1. Constata-se até a presente data o inadimplemento injustificado dos aluguéis e encargos referentes aos meses de [MESES EM ATRASO: ex. Julho, Agosto e Setembro de 2026], perfazendo o montante total corrigido de R$ [VALOR TOTAL CORRIGIDO COM MULTA E JUROS]."
        ),
        (
            "2. DO PRAZO LEGAL PARA PURGA DA MORA OU DESOCUPAÇÃO",
            "2.1. Fica V. Sa. formalmente NOTIFICADO a efetuar a quitação integral do débito no prazo improrrogável de 15 (quinze) dias corridos a contar do recebimento desta notificação, ou desocupar voluntariamente o imóvel, entregando as chaves livres de pessoas e coisas."
        ),
        (
            "3. DA ADVERTÊNCIA SOBRE MEDIDAS JUDICIAIS",
            "3.1. O não atendimento da presente notificação ensejará o ajuizamento imediato da competente AÇÃO DE DESPEJO POR FALTA DE PAGAMENTO CUMULADA COM COBRANÇA, requerendo-se liminar de desocupação e incidência de custas judiciais e honorários advocatícios sucumbenciais de 20% (vinte por cento)."
        )
    ],
    out_dir=out_dir
)

# 09 - RECIBO DE SINAL E ARRAS
build_docx_contract(
    filename="09_Recibo_Sinal_e_Arras.docx",
    title="Recibo Formal de Sinal e Princípio de Pagamento (Arras Confirmatórias de Negócio Imobiliário)",
    subtitle="Regulado pelos Artigos 417 a 420 do Código Civil Brasileiro",
    orientacao="O recibo de arras vincula as partes e garante exclusividade para o comprador travar a compra do imóvel no mesmo dia enquanto os advogados conferem certidões e confeccionam a minuta definitiva de compra e venda.",
    preambulo=(
        "Pelo presente Recibo de Sinal e Princípio de Pagamento, o VENDEDOR [NOME COMPLETO DO VENDEDOR], CPF nº [CPF], declara que recebeu do COMPRADOR [NOME COMPLETO DO COMPRADOR], CPF nº [CPF], quantia pecuniária para a garantia da transação imobiliária:"
    ),
    clausulas=[
        (
            "1. DO VALOR RECEBIDO E IDENTIFICAÇÃO DO BEM",
            "1.1. Declaro haver recebido nesta data a importância certa de R$ [VALOR DO SINAL POR EXTENSO], paga via PIX/TED para a conta [DADOS DA CONTA], a título de SINAL E PRINCÍPIO DE PAGAMENTO (Arras Confirmatórias) para aquisição do imóvel situado na [ENDEREÇO DO IMÓVEL], matrícula nº [MATRÍCULA] do CRI de [COMARCA], pelo preço total ajustado de R$ [VALOR TOTAL DO IMÓVEL]."
        ),
        (
            "2. DA CONDIÇÃO RESOLUTIVA DE AUDITORIA DE CERTIDÕES",
            "2.1. O negócio é celebrado sob a condição suspensiva de idoneidade das certidões negativas do VENDEDOR e do imóvel. Apontada certidão positiva com risco de constrição ou fraude, o sinal será integralmente restituído ao Comprador em até 48 horas, sem retenção."
        ),
        (
            "3. DA APLICAÇÃO DOS ARTIGOS 417 E 418 DO CÓDIGO CIVIL",
            "3.1. Estando as certidões idôneas, a desistência injustificada do COMPRADOR implicará perda das arras; a desistência do VENDEDOR implicará devolução em dobro acrescida de atualização."
        )
    ],
    out_dir=out_dir
)

# 10 - CORRETAGEM IMOBILIÁRIA
build_docx_contract(
    filename="10_Contrato_Corretagem_Imobiliaria.docx",
    title="Contrato de Corretagem Imobiliária e Autorização de Venda com Exclusividade",
    subtitle="Regulado pelos Artigos 722 a 729 do Código Civil Brasileiro e Lei nº 6.530/1978",
    orientacao="O artigo 727 do Código Civil garante a comissão do corretor mesmo se o negócio se ultimar diretamente entre as partes após a vigência do contrato, caso a aproximação tenha decorrido do trabalho de mediação do profissional.",
    preambulo=(
        "Pelo presente Contrato de Corretagem e Mediação Imobiliária, celebram entre si:\n\n"
        "CONTRATANTE (PROPRIETÁRIO): [NOME DO PROPRIETÁRIO], CPF [CPF], residente na [ENDEREÇO];\n\n"
        "CORRETOR(A) / IMOBILIÁRIA: [NOME DO CORRETOR OU IMOBILIÁRIA], inscrito no CRECI sob o nº [CRECI/UF], com endereço profissional na [ENDEREÇO];\n\n"
        "Ajustam as cláusulas a seguir:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E EXCLUSIVIDADE",
            "1.1. O CONTRATANTE autoriza o CORRETOR, com exclusividade pelo prazo de [XX] dias, a intermediar a venda do imóvel situado na [ENDEREÇO COMPLETO DO IMÓVEL], pelo valor mínimo de R$ [VALOR DA VENDA]."
        ),
        (
            "CLÁUSULA SEGUNDA – DOS HONORÁRIOS DE CORRETAGEM",
            "2.1. Pela mediação exitosa, o CONTRATANTE pagará ao CORRETOR a comissão de [6% (seis por cento)] sobre o valor total da transação, devida no ato do fechamento formal (assinatura do recibo de sinal ou compromisso de compra e venda).\n\n"
            "2.2. O CONTRATANTE pagará a comissão integral caso o negócio se concretize diretamente com cliente apresentado pelo corretor durante o prazo da autorização (Art. 727 do CC)."
        )
    ],
    out_dir=out_dir
)

# 11 - EMPREITADA E REFORMA
build_docx_contract(
    filename="11_Contrato_Empreitada_Reforma.docx",
    title="Contrato de Empreitada de Obra e Reforma de Imóvel com Responsabilidade Técnica",
    subtitle="Regido pelos Artigos 610 a 626 do Código Civil Brasileiro",
    orientacao="O empreiteiro de materiais e mão de obra responde durante 5 anos pela solidez e segurança da obra (Art. 618 do CC). Este contrato afasta qualquer responsabilidade trabalhista do proprietário do imóvel perante os operários e serventes contratados pelo empreiteiro.",
    preambulo=(
        "Pelo presente Instrumento Particular de Contrato de Empreitada e Reforma, celebram entre si:\n\n"
        "DONO DA OBRA (CONTRATANTE): [NOME DO PROPRIETÁRIO], CPF [CPF], residente na [ENDEREÇO];\n\n"
        "EMPREITEIRO (CONTRATADA): [RAZÃO SOCIAL OU NOME DO EMPREITEIRO], CNPJ/CPF [NÚMERO], com sede na [ENDEREÇO];\n\n"
        "Ajustam as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO ESCOPO DA EMPREITADA",
            "1.1. A CONTRATADA obriga-se a executar a reforma no imóvel do CONTRATANTE situado na [ENDEREÇO DA OBRA], abrangendo as etapas de alvenaria, pisos, pintura e instalações elétricas/hidráulicas descritas no Memorial Descritivo anexo."
        ),
        (
            "CLÁUSULA SEGUNDA – DO CRONOGRAMA, PREÇO E MEDIÇÕES",
            "2.1. O valor total da empreitada é de R$ [VALOR POR EXTENSO], a ser pago estritamente por medição física de etapas aprovadas pelo CONTRATANTE, vedado o adiantamento de valores sem contraprestação concluída."
        ),
        (
            "CLÁUSULA TERCEIRA – DA BLINDAGEM TRABALHISTA E PREVIDENCIÁRIA",
            "3.1. A CONTRATADA assume inteira responsabilidade pelo pagamento de salários, FGTS, INSS e equipamentos de proteção individual (EPIs) de todos os trabalhadores que alocar na obra, isentando o Dono da Obra de qualquer passivo."
        ),
        (
            "CLÁUSULA QUARTA – DA GARANTIA LEGAL DE SOLIDEZ (ART. 618 DO CC)",
            "4.1. A CONTRATADA responde durante 05 (cinco) anos pela solidez e segurança da obra executada e dos materiais fornecidos."
        )
    ],
    out_dir=out_dir
)

print("Módulo 1 (Contratos 01 a 11) gerado com sucesso!")
