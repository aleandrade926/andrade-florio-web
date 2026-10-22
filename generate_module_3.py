import os
from contract_builder_core import build_docx_contract

out_dir = r"C:\Users\Alexandre\andrade-florio-web-recuperado\public\downloads"
os.makedirs(out_dir, exist_ok=True)

# -------------------------------------------------------------------------------------------------
# 21. COMPRA E VENDA DE VEÍCULO USADO
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="21_Contrato_Compra_Venda_Veiculo_Usado.docx",
    title="Contrato Particular de Compra e Venda de Veículo Automotor Usado com Laudo Cautelar e Transferência",
    subtitle="Regulado pelos Arts. 481 a 504 do Código Civil Brasileiro e Art. 134 do Código de Trânsito Brasileiro (Lei nº 9.503/1997)",
    orientacao="A compra e venda de veículos usados entre particulares exige registro da vistoria prévia e formalização expressa da Comunicação de Venda perante o DETRAN (art. 134 do CTB). Sem a comunicação de venda, o vendedor permanece solidariamente responsável por multas, acidentes e IPVA supervenientes.",
    preambulo=(
        "Pelo presente Instrumento Particular de Compra e Venda de Veículo Automotor, celebram entre si:\n\n"
        "VENDEDOR(A): [NOME COMPLETO DO VENDEDOR], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL], profissão: [PROFISSÃO], portador(a) do RG nº [RG], inscrito(a) no CPF/MF sob o nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP], telefone: [TELEFONE];\n\n"
        "COMPRADOR(A): [NOME COMPLETO DO COMPRADOR], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL], profissão: [PROFISSÃO], portador(a) do RG nº [RG], inscrito(a) no CPF/MF sob o nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP], telefone: [TELEFONE];\n\n"
        "Têm entre si, justo e contratado, o que se declara nas cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA IDENTIFICAÇÃO DO VEÍCULO E ESTADO DE CONSERVAÇÃO",
            "1.1. O VENDEDOR é o legítimo proprietário do veículo automotor com as seguintes características:\n"
            "• Marca/Modelo: [MARCA E MODELO, Ex: Toyota Corolla XEi 2.0 Flex]\n"
            "• Ano de Fabricação / Modelo: [ANO/ANO]\n"
            "• Placa: [PLACA] | Município/UF: [CIDADE/UF]\n"
            "• Renavam: [NÚMERO RENAVAM] | Chassi (VIN): [NÚMERO DO CHASSI]\n"
            "• Cor: [COR] | Combustível: [COMBUSTÍVEL] | Quilometragem: [KM] km\n\n"
            "1.2. O COMPRADOR declara haver inspecionado detalhadamente a lataria, mecânica, motor, câmbio, tapeçaria e funcionamento elétrico do veículo, inclusive realizando teste de rodagem e vistoria cautelar, aceitando-o no estado de uso e conservação em que se encontra."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PREÇO E CONDIÇÕES DE PAGAMENTO",
            "2.1. O preço total certo e ajustado da alienação é de R$ [VALOR TOTAL EM REAIS] ([VALOR POR EXTENSO]), a ser pago pelo COMPRADOR da seguinte forma:\n"
            "a) Sinal e princípio de pagamento (art. 417 do CC) de R$ [VALOR ENTRADA] ([EXTENSO]), pago neste ato via [PIX / Transferência Bancária];\n"
            "b) Saldo remanescente de R$ [VALOR RESTANTE] ([EXTENSO]), a ser liquidado em [DATA / FORMA], condicionado à entrega da ATPV-e assinada.\n\n"
            "2.2. O atraso em qualquer parcela sujeitará o COMPRADOR a multa moratória de 10% (dez por cento), juros moratórios de 1% ao mês e correção pelo IPCA."
        ),
        (
            "CLÁUSULA TERCEIRA – DA TRADIÇÃO E DA TRANSFERÊNCIA NO DETRAN (ART. 134 CTB)",
            "3.1. A posse direta e as chaves do veículo são entregues ao COMPRADOR na data de [DATA DA ENTREGA].\n\n"
            "3.2. O COMPRADOR assume a obrigação legal inescusável de transferir o registro de propriedade do veículo para o seu nome perante o DETRAN no prazo improrrogável de até 30 (trinta) dias (art. 123, § 1º, CTB).\n\n"
            "3.3. O VENDEDOR protocolará imediatamente a Comunicação de Venda perante o DETRAN, anexando cópia autenticada da ATPV-e, conforme determina o art. 134 do CTB."
        ),
        (
            "CLÁUSULA QUARTA – DA RESPONSABILIDADE POR DÉBITOS E MULTAS",
            "4.1. Todos os débitos tributários (IPVA, DPVAT/SPVAT, Taxa de Licenciamento) e infrações de trânsito ocorridas até a data e hora da efetiva entrega do veículo são de integral responsabilidade do VENDEDOR.\n\n"
            "4.2. A partir da tradição (entrega das chaves), todas as multas de trânsito, pontuações na CNH, novos tributos e acidentes automobilísticos com danos materiais ou corporais a terceiros serão de exclusiva responsabilidade civil, criminal e financeira do COMPRADOR."
        ),
        (
            "CLÁUSULA QUINTA – DA EVICÇÃO E DO FORO",
            "5.1. O VENDEDOR responde pela evicção de direito (arts. 447 e ss. do CC), garantindo que o veículo está livre de gravames fiduciários, bloqueios judiciais (Renajud) ou queixa de furto/roubo.\n\n"
            "5.2. Fica eleito o Foro da Comarca de [CIDADE/UF] para dirimir litígios oriundos do presente instrumento."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 22. CONFISSÃO DE DÍVIDA E PARCELAMENTO (TÍTULO EXECUTIVO EXTRAJUDICIAL)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="22_Confissao_Divida_Parcelamento_Titulo_Executivo.docx",
    title="Instrumento Particular de Confissão de Dívida, Parcelamento e Compromisso de Pagamento",
    subtitle="Com Eficácia de Título Executivo Extrajudicial nos Termos do Art. 784, Inciso III, do Código de Processo Civil",
    orientacao="Para que a confissão de dívida tenha eficácia de Título Executivo Extrajudicial e permita a execução judicial direta com penhora de bens (sem necessidade de ação de cobrança prévia), o valor deve ser líquido, certo e exigível, e o instrumento DEVE conter a assinatura de 2 testemunhas qualificadas.",
    preambulo=(
        "Pelo presente Instrumento Particular de Confissão de Dívida e Parcelamento, com força de Título Executivo Extrajudicial (art. 784, III, do CPC), celebram entre si:\n\n"
        "CREDOR(A): [NOME OU RAZÃO SOCIAL DO CREDOR], inscrito(a) no CPF/CNPJ sob o nº [NÚMERO], com domicílio/sede na [ENDEREÇO COMPLETO COM CEP];\n\n"
        "DEVEDOR(A): [NOME OU RAZÃO SOCIAL DO DEVEDOR], inscrito(a) no CPF/CNPJ sob o nº [NÚMERO], com domicílio/sede na [ENDEREÇO COMPLETO COM CEP];\n\n"
        "[SE HOUVER AVALISTA/COOBRIGADO]: [NOME DO AVALISTA], CPF nº [CPF], residente na [ENDEREÇO], na qualidade de principal pagador solidário;\n\n"
        "As partes têm entre si ajustado o seguinte:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO RECONHECIMENTO EXPRESSO DA DÍVIDA",
            "1.1. O DEVEDOR reconhece expressamente, de forma líquida, certa, irrevogável e irretratável, a existência de um débito em aberto perante o CREDOR no valor histórico consolidado de R$ [VALOR TOTAL CONSOLIDADO EM REAIS] ([VALOR POR EXTENSO]).\n\n"
            "1.2. A presente confissão não opera novação da dívida originária (arts. 360 e seguintes do Código Civil), subsistindo a exigibilidade das obrigações subjacentes até a integral e efetiva liquidação."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PLANO DE PAGAMENTO E PARCELAMENTO",
            "2.1. O montante confessado será adimplido pelo DEVEDOR nas seguintes condições:\n"
            "a) Entrada à vista de R$ [VALOR ENTRADA] ([EXTENSO]), paga nesta data;\n"
            "b) O saldo devedor remanescente de R$ [VALOR SALDO] será liquidado em [NÚMERO DE PARCELAS] parcelas mensais, iguais e sucessivas de R$ [VALOR PARCELA], vencendo a primeira em [DATA DO 1º VENCIMENTO] e as demais nos meses subsequentes.\n\n"
            "2.2. Os pagamentos serão realizados impreterivelmente via PIX ou TED na conta bancária de titularidade exclusiva do CREDOR: Banco [BANCO], Agência [AGÊNCIA], Conta Corrente [CONTA], Chave PIX: [CHAVE PIX]."
        ),
        (
            "CLÁUSULA TERCEIRA – DA MORA E DO VENCIMENTO ANTECIPADO DA DÍVIDA",
            "3.1. O não pagamento de qualquer prestação no vencimento sujeitará o DEVEDOR aos seguintes encargos:\n"
            "a) Multa moratória não compensatória de 10% (dez por cento) sobre o valor da prestação em atraso;\n"
            "b) Juros moratórios legais de 1% (um por cento) ao mês, pro rata die;\n"
            "c) Correção monetária pela variação positiva acumulada do IPCA/IBGE.\n\n"
            "3.2. O atraso no pagamento de qualquer parcela por prazo superior a 15 (quinze) dias acarretará o VENCIMENTO ANTECIPADO AUTOMÁTICO DE TODAS AS PARCELAS VINCENDAS, tornando exigível de imediato a totalidade do saldo devedor."
        ),
        (
            "CLÁUSULA QUARTA – DA FORÇA EXECUTIVA EXTRAJUDICIAL E PROTESTO",
            "4.1. As partes reconhecem que este contrato preenche integralmente os pressupostos do artigo 784, inciso III, do CPC, possuindo eficácia de TÍTULO EXECUTIVO EXTRAJUDICIAL.\n\n"
            "4.2. Em caso de inadimplemento, o CREDOR fica autorizado a protestar a dívida em Cartório de Protestos, negativar o nome do DEVEDOR no SPC/Serasa e ajuizar Ação de Execução de Título Extrajudicial com constrição de ativos bancários (Sisbajud) e acréscimo de honorários advocatícios de 20% (art. 827 do CPC)."
        ),
        (
            "CLÁUSULA QUINTA – DO FORO",
            "5.1. Para a execução do presente título, as partes elegem com renúncia irretratável a qualquer outro o Foro da Comarca de [CIDADE/UF]."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 23. CONTRATO DE MÚTUO FINANCEIRO
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="23_Contrato_Mutuo_Financeiro_Entre_Particulares.docx",
    title="Contrato Particular de Mútuo Financeiro com Remuneração de Capital e Cláusula Penal",
    subtitle="Regulado pelos Artigos 586 a 592 do Código Civil Brasileiro e Decreto Federal nº 22.626/1933 (Lei de Usura)",
    orientacao="O mútuo pecuniário entre particulares com destinação econômica admite a estipulação de juros remuneratórios limitados ao teto legal (art. 406 do CC c/c Decreto 22.626/33 - 1% ao mês). É terminantemente vedada a capitalização de juros com periodicidade inferior à anual (Súmula 121 do STF).",
    preambulo=(
        "Pelo presente Instrumento Particular de Mútuo Financeiro, celebram entre si:\n\n"
        "MUTUANTE (quem empresta): [NOME COMPLETO DO MUTUANTE], inscrito(a) no CPF sob o nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO];\n\n"
        "MUTUÁRIO(A) (quem toma emprestado): [NOME COMPLETO DO MUTUÁRIO], inscrito(a) no CPF sob o nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO];\n\n"
        "Celebram o presente contrato em consonância com as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E DISPONIBILIZAÇÃO DO CAPITAL",
            "1.1. O MUTUANTE dá em mútuo ao MUTUÁRIO a quantia líquida e certa de R$ [VALOR EMPRESTADO EM REAIS] ([VALOR POR EXTENSO]), em moeda corrente nacional.\n\n"
            "1.2. Os recursos foram creditados na conta corrente de titularidade do MUTUÁRIO via PIX/TED na data de [DATA DO REPASSE], transferindo-se a partir de então o domínio e os riscos da coisa fungível (art. 587 do Código Civil)."
        ),
        (
            "CLÁUSULA SEGUNDA – DA DEVOLUÇÃO E JUROS REMUNERATÓRIOS",
            "2.1. O MUTUÁRIO obriga-se irrevogavelmente a restituir o montante financiado até a data de [DATA FINAL DE DEVOLUÇÃO], em parcela única ou em [XX] parcelas mensais de R$ [VALOR PARCELA].\n\n"
            "2.2. Em consonância com o art. 591 do Código Civil, incidirão sobre o saldo principal juros remuneratórios compensatórios de 1% (um por cento) ao mês e correção pelo IPCA/IBGE a cada 12 meses."
        ),
        (
            "CLÁUSULA TERCEIRA – DO INADIMPLEMENTO E ENCARGOS MORATÓRIOS",
            "3.1. O atraso na restituição caracterizará a mora de pleno direito do MUTUÁRIO, incidindo:\n"
            "a) Multa moratória penal de 10% (dez por cento) sobre o montante em atraso;\n"
            "b) Juros moratórios de 1% (um por cento) ao mês pro rata temporis;\n"
            "c) Vencimento antecipado das parcelas futuras caso o atraso supere 15 (quinze) dias."
        ),
        (
            "CLÁUSULA QUARTA – DO FORO",
            "4.1. Fica eleito o Foro da Comarca de [CIDADE/UF] para dirimir eventuais litígios decorrentes deste contrato."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 24. TERMO DE ACORDO EXTRAJUDICIAL E TRANSAÇÃO
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="24_Termo_Acordo_Extrajudicial_Transacao_Quitacao.docx",
    title="Termo Particular de Acordo Extrajudicial, Transação e Quitação Ampla e Irrevogável",
    subtitle="Celebrado nos Termos dos Artigos 840 a 850 do Código Civil Brasileiro e Art. 784, Inciso IV, do CPC",
    orientacao="A transação é o instrumento jurídico pelo qual as partes previnem ou terminam um litígio mediante concessões recíprocas (art. 840 do CC). Para ter efeito extintivo definitivo, a quitação deve ser ampla, geral e rasa, e o instrumento assinado por 2 testemunhas adquire força de título executivo extrajudicial.",
    preambulo=(
        "Pelo presente Instrumento Particular de Acordo Extrajudicial e Transação, comparecem as partes:\n\n"
        "PRIMEIRA TRANSIGENTE: [NOME OU RAZÃO SOCIAL], inscrito(a) no CPF/CNPJ sob o nº [DOCUMENTO], com endereço na [ENDEREÇO COMPLETO];\n\n"
        "SEGUNDA TRANSIGENTE: [NOME OU RAZÃO SOCIAL], inscrito(a) no CPF/CNPJ sob o nº [DOCUMENTO], com endereço na [ENDEREÇO COMPLETO];\n\n"
        "Considerando as controvérsias decorrentes de [ESPECIFICAR A RELAÇÃO SUBJACENTE / ACIDENTE / DÍVIDA / RESCISÃO];\n"
        "Resolvem, mediante concessões mútuas, transigir nas cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DAS CONCESSÕES E COMPOSIÇÃO FINANCEIRA",
            "1.1. Para pôr fim definitivo a toda e qualquer controvérsia entre as partes, a [PRIMEIRA/SEGUNDA TRANSIGENTE] compromete-se a pagar à outra parte a quantia líquida e certa de R$ [VALOR TOTAL DO ACORDO] ([VALOR POR EXTENSO]).\n\n"
            "1.2. O pagamento será efetuado à vista até o dia [DATA], ou parcelado em [XX] parcelas de R$ [VALOR], mediante transferência para a Chave PIX: [CHAVE PIX]."
        ),
        (
            "CLÁUSULA SEGUNDA – DA CLÁUSULA PENAL POR DESCUMPRIMENTO",
            "2.1. O não adimplemento de qualquer das parcelas no vencimento acarretará o vencimento antecipado do saldo restante e incidência automática de cláusula penal cominatória de 20% (vinte por cento) sobre o valor total do acordo, autorizando a imediata execução judicial perante o Poder Judiciário (art. 784, IV, do CPC)."
        ),
        (
            "CLÁUSULA TERCEIRA – DA QUITAÇÃO AMPLA, GERAL, RASA E IRREVOGÁVEL",
            "3.1. Cumpridas as obrigações financeiras ora ajustadas, as partes conferem-se mútua, ampla, geral, rasa, irrevogável e irretratável quitação, nada mais tendo a reclamar uma da outra a qualquer título (danos materiais, lucros cessantes, perdas e danos ou danos morais).\n\n"
            "3.2. A presente transação opera os efeitos da coisa julgada civil entre as partes (art. 849 do Código Civil)."
        ),
        (
            "CLÁUSULA QUARTA – DO FORO",
            "4.1. Fica eleito o Foro da Comarca de [CIDADE/UF] para dirimir dúvidas decorrentes do presente termo."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 25. NOTIFICAÇÃO EXTRAJUDICIAL DE COBRANÇA
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="25_Notificacao_Extrajudicial_Cobranca_Constituicao_Mora.docx",
    title="Notificação Extrajudicial Formal de Cobrança e Constituição em Mora com Prazo Impreterível",
    subtitle="Expedida nos Termos dos Artigos 394 a 397 do Código Civil Brasileiro para Fins de Protesto e Ação Judicial",
    orientacao="A notificação extrajudicial comprova a ciência inequívoca do devedor e a constituição formal em mora. Serve como pressuposto processual probatório para ajuizamento de ações de cobrança, monitórias ou rescisão contratual com perdas e danos.",
    preambulo=(
        "À(AO) NOTIFICADA(O):\n"
        "Nome/Razão Social: [NOME DO DEVEDOR NOTIFICADO]\n"
        "CPF/CNPJ nº: [DOCUMENTO]\n"
        "Endereço: [ENDEREÇO COMPLETO COM CEP]\n\n"
        "NOTIFICANTE:\n"
        "Nome/Razão Social: [NOME DO CREDOR NOTIFICANTE], inscrito(a) no CPF/CNPJ sob o nº [DOCUMENTO], com domicílio na [ENDEREÇO COMPLETO];\n\n"
        "Serve a presente para NOTIFICAR FORMALMENTE V. Sa. nos seguintes termos:"
    ),
    clausulas=[
        (
            "1. DOS FATOS E DO DÉBITO DISCRIMINADO",
            "1.1. Conforme registros e instrumentos em posse do NOTIFICANTE, V. Sa. encontra-se inadimplente com o adimplemento da obrigação decorrente de [DESCREVER: contrato nº X / prestação de serviço / notas fiscais].\n\n"
            "1.2. O montante do débito em aberto perfaz a quantia consolidada de R$ [VALOR ATUALIZADO EM REAIS] ([EXTENSO]), compreendendo valor principal, atualização monetária e juros moratórios legais."
        ),
        (
            "2. DA CONSTITUIÇÃO FORMAL EM MORA (ARTS. 394 A 397 DO CÓDIGO CIVIL)",
            "2.1. Fica V. Sa. formalmente CONSTITUÍDO(A) EM MORA, para todos os efeitos previstos no ordenamento jurídico nacional, fixando o termo a quo para cômputo contínuo de encargos contratuais e perdas e danos."
        ),
        (
            "3. DO PRAZO DETERMINADO PARA PURGAÇÃO DA MORA",
            "3.1. Assina-se o prazo improrrogável de 05 (cinco) dias úteis, contados do recebimento desta, para a quitação do débito mediante pagamento via PIX: [CHAVE PIX] ou depósito na Conta Corrente nº [CONTA], Agência [AGÊNCIA], Banco [BANCO], de titularidade do NOTIFICANTE."
        ),
        (
            "4. DAS MEDIDAS COERCITIVAS E JUDICIAIS",
            "4.1. O transcurso do prazo sem o respectivo adimplemento ensejará o imediato apontamento a protesto no Tabelionato competente, inclusão de restrição cadastral perante os órgãos de proteção ao crédito (SPC/Serasa) e distribuição da competente Ação Judicial com pedido de penhora de bens e contas bancárias (Sisbajud), acrescida de honorários advocatícios sucumbenciais de 20%."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 26. PROCURAÇÃO AD NEGOTIA (PLENOS PODERES DE GESTÃO)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="26_Procuracao_Plenos_Poderes_Extrajudicial_Ad_Negotia.docx",
    title="Instrumento Particular de Procuração Extrajudicial com Amplos Poderes de Gestão e Administração Geral",
    subtitle="Outorgada com Fundamento nos Artigos 653 e Seguintes do Código Civil Brasileiro (Mandato Ad Negotia)",
    orientacao="Esta procuração confere poderes de administração geral. Para alienação de bens imóveis, hipoteca ou transação de direitos reais, a lei exige expressamente procuração por instrumento público com poderes específicos (art. 661, § 1º, do CC).",
    preambulo=(
        "OUTORGANTE:\n"
        "[NOME COMPLETO DO OUTORGANTE], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL], profissão: [PROFISSÃO], RG nº [RG], CPF nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP];\n\n"
        "OUTORGADO:\n"
        "[NOME COMPLETO DO OUTORGADO], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL], profissão: [PROFISSÃO], RG nº [RG], CPF nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP];\n\n"
        "O(A) Outorgante nomeia e constitui o Outorgado seu procurador, com os poderes a seguir transcritos:"
    ),
    clausulas=[
        (
            "PODERES GERAIS DE ADMINISTRAÇÃO E REPRESENTAÇÃO",
            "Confere amplos poderes para representar o(a) Outorgante perante quaisquer repartições públicas federais, estaduais e municipais, autarquias, Receita Federal do Brasil, INSS, Detran, concessionárias de serviços públicos (energia elétrica, água, telefonia), Cartórios de Notas e Cartórios de Registro de Imóveis, podendo assinar requerimentos, receber notificações, interpor recursos administrativos e acompanhar processos de qualquer natureza."
        ),
        (
            "PODERES BANCÁRIOS E DE GESTÃO PATRIMONIAL",
            "Poderá o procurador gerir e administrar bens móveis e imóveis, firmar e rescindir contratos de locação, emitir recibos, receber aluguéis e quitações; representá-lo(a) perante estabelecimentos bancários, movimentando contas correntes e poupança, emitindo ordens de pagamento e cadastrando senhas estritamente para a finalidade de gestão ordinária dos bens."
        ),
        (
            "RESTRIÇÕES LEGAIS E SUBSTABELECIMENTO",
            "Os poderes ora outorgados NÃO autorizam a venda, doação, hipoteca ou alienação de bens imóveis pertencentes ao Outorgante, atos privativos de procuração por instrumento público com poderes específicos (art. 661, § 1º, CC). Fica [AUTORIZADO / VEDADO] o substabelecimento."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 27. PROCURAÇÃO ESPECÍFICA PARA ALIENAÇÃO DE IMÓVEL
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="27_Procuracao_Poderes_Especificos_Venda_Imovel.docx",
    title="Instrumento de Procuração com Poderes Especiais e Expressos para Alienação e Venda de Bem Imóvel",
    subtitle="Em Cumprimento Obrigatório ao Artigo 661, § 1º, do Código Civil Brasileiro",
    orientacao="A alienação de imóvel exige mandato com poderes expressos e especiais (art. 661, § 1º, CC). O imóvel deve estar perfeitamente individualizado por sua matrícula, cartório e dados cadastrais, e as condições mínimas de preço devem constar expressamente para resguardar o patrimônio do outorgante.",
    preambulo=(
        "OUTORGANTE:\n"
        "[NOME COMPLETO DO OUTORGANTE], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL - se casado, qualificar cônjuge anuente], profissão: [PROFISSÃO], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO COMPLETO];\n\n"
        "OUTORGADO:\n"
        "[NOME COMPLETO DO OUTORGADO], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL], profissão: [PROFISSÃO], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO COMPLETO];\n\n"
        "Pelo presente instrumento, constitui o Outorgado seu bastante procurador para os seguintes fins específicos:"
    ),
    clausulas=[
        (
            "DO OBJETO E INDIVIDUALIZAÇÃO DO IMÓVEL",
            "O mandato é conferido com o PODER EXCLUSIVO de vender, alienar, prometer à venda ou transferir o seguinte imóvel de propriedade do Outorgante:\n"
            "• Imóvel: [DESCREVER O BEM, Ex: Apartamento nº X situado na Rua Y, com vaga de garagem Z]\n"
            "• Matrícula Registral nº: [NÚMERO DA MATRÍCULA]\n"
            "• Cartório de Registro: [OFICIAL DE REGISTRO DE IMÓVEIS DA COMARCA DE X]\n"
            "• Inscrição Municipal / IPTU: [NÚMERO CADASTRAL]"
        ),
        (
            "DOS PODERES ESPECIAIS E PREÇO MÍNIMO",
            "O procurador poderá fixar o preço de venda, que não poderá ser inferior a R$ [VALOR MÍNIMO EM REAIS] ([VALOR POR EXTENSO]), assinar compromisso de compra e venda preliminar, comparecer ao Cartório de Notas competente e assinar a Escritura Pública Definitiva de Compra e Venda, transmitir a posse e domínio, passar recibo e outorgar quitação, com a obrigação inescusável de depositar o numerário recebido na conta bancária de titularidade do Outorgante."
        ),
        (
            "DO DEVER DE PRESTAÇÃO DE CONTAS E PRAZO DE VALIDADE",
            "O mandatário obriga-se a prestar contas minuciosas da negociação em até 48 horas da formalização da escritura pública (art. 668 do Código Civil). O presente instrumento tem prazo de vigência de [180 DIAS], vedado o substabelecimento."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 28. DECLARAÇÃO DE HIPOSSUFICIÊNCIA FINANCEIRA
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="28_Declaracao_Hipossuficiencia_Gratuidade_Justica.docx",
    title="Declaração Formal de Hipossuficiência Financeira e Requerimento de Gratuidade de Justiça",
    subtitle="Arrimada no Art. 98 e Seguintes do Código de Processo Civil e Art. 5º, Inciso LXXIV, da CF/1988",
    orientacao="A declaração de hipossuficiência assinada pela pessoa física goza de presunção relativa de veracidade (art. 99, § 3º, do CPC), habilitando a isenção de custas iniciais, taxas judiciais, despesas periciais e honorários sucumbenciais.",
    preambulo=(
        "Eu, [NOME COMPLETO DO DECLARANTE], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL], profissão: [PROFISSÃO], RG nº [RG], inscrito(a) no CPF/MF sob o nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP], telefone: [TELEFONE];\n\n"
        "DECLARO formalmente perante o Poder Judiciário, sob as penas rigorosas da lei:"
    ),
    clausulas=[
        (
            "1. DA IMPOSSIBILIDADE ECONÔMICA E DA GRATUIDADE PROCESSUAL",
            "1.1. Que a minha condição socioeconômica contemporânea NÃO me permite suportar o pagamento de custas processuais, taxas judiciárias, preparo de recursos, despesas com peritos ou honorários de sucumbência sem o gravame irreparável ao meu sustento pessoal e de minha família.\n\n"
            "1.2. Que aufiro renda mensal líquida média de R$ [VALOR RENDA MENSAL], montante estritamente comprometido com habitação, alimentação, remédios e sobrevivência básica, fazendo jus aos benefícios da JUSTIÇA GRATUITA integral (arts. 98 e 99 do CPC)."
        ),
        (
            "2. DA CIÊNCIA DAS SANÇÕES POR FALSIDADE",
            "2.1. O(A) declarante declara ter plena ciência de que a prestação de declaração inverídica enseja responsabilidade criminal pelo delito de falsidade ideológica (artigo 299 do Código Penal) e condenação ao pagamento de até o décuplo das custas judiciais devidas (artigo 100, parágrafo único, do Código de Processo Civil)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 29. DOAÇÃO DE IMÓVEL COM RESERVA DE USUFRUTO
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="29_Contrato_Doacao_Imovel_Reserva_Usufruto_Vitalicio.docx",
    title="Contrato Particular de Doação de Imóvel com Reserva de Usufruto Vitalício e Cláusulas Restritivas",
    subtitle="Regulado pelos Artigos 538 a 564 e Artigos 1.390 a 1.411 do Código Civil Brasileiro",
    orientacao="A doação com usufruto transfere a nua-propriedade ao donatário, reservando os direitos de uso, posse e frutos ao doador até sua morte. Para proteção familiar, gravam-se as cláusulas restritivas de inalienabilidade, impenhorabilidade e incomunicabilidade, respeitada sempre a legítima dos herdeiros necessários.",
    preambulo=(
        "Pelo presente Instrumento Particular de Doação de Bem Imóvel com Reserva de Usufruto, celebram entre si:\n\n"
        "DOADOR(A) E USUFRUTUÁRIO(A): [NOME COMPLETO DO DOADOR], inscrito no CPF sob o nº [CPF], RG nº [RG], domiciliado na [ENDEREÇO COMPLETO];\n\n"
        "DONATÁRIO(A) E NU-PROPRIETÁRIO(A): [NOME COMPLETO DO DONATÁRIO], inscrito no CPF sob o nº [CPF], RG nº [RG], domiciliado na [ENDEREÇO COMPLETO];\n\n"
        "Celebram o presente negócio jurídico consoante as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA DOAÇÃO DA NUA-PROPRIEDADE",
            "1.1. O(A) DOADOR(A), senhor(a) e legítimo(a) possuidor(a) do imóvel situado na [ENDEREÇO DO IMÓVEL], objeto da Matrícula Registral nº [NÚMERO DA MATRÍCULA] do Cartório de Registro de Imóveis de [CIDADE/UF], DOA livremente ao DONATÁRIO a NUA-PROPRIEDADE do referido imóvel, o qual declara que aceita a liberalidade."
        ),
        (
            "CLÁUSULA SEGUNDA – DA RESERVA DE USUFRUTO VITALÍCIO",
            "2.1. O(A) DOADOR(A) RESERVA PARA SI O USUFRUTO VITALÍCIO do referido imóvel (art. 1.390 do Código Civil), competindo-lhe exclusivamente a posse direta, uso, gozo e percepção integral de todos os frutos e rendimentos que o bem produzir até a data de seu passamento."
        ),
        (
            "CLÁUSULA TERCEIRA – DAS CLÁUSULAS RESTRITIVAS",
            "3.1. A nua-propriedade ora transferida fica gravada com as cláusulas de INALIENABILIDADE, IMPENHORABILIDADE E INCOMUNICABILIDADE enquanto viver o doador, não respondendo o bem por dívidas do donatário nem se comunicando a eventual cônjuge ou convivente sob qualquer regime de bens."
        ),
        (
            "CLÁUSULA QUARTA – DA PRESERVAÇÃO DA LEGÍTIMA E ESCRITURA",
            "4.1. O DOADOR declara que a doação não excede a parte disponível do seu patrimônio, resguardando a legítima dos herdeiros necessários (art. 549 e 1.789 do Código Civil).\n\n"
            "4.2. As partes comprometem-se a instrumentalizar a doação por Escritura Pública para fins de registro imobiliário com força erga omnes (art. 108 do Código Civil)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 30. RECIBO DE PAGAMENTO GERAL E QUITAÇÃO PLENA IRREVOGÁVEL
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="30_Recibo_Pagamento_Geral_Quitacao_Plena_Irrevogavel.docx",
    title="Termo Particular de Recibo Formal de Pagamento e Quitação Plena, Geral, Rasa e Irrevogável",
    subtitle="Expedido em Estrita Consonância com os Artigos 319 a 326 do Código Civil Brasileiro",
    orientacao="O recibo de quitação plena é a prova cabal da extinção da obrigação pecuniária pelo adimplemento (art. 319 do CC). Uma vez assinado, impede que o credor formule reclamações judiciais ou extrajudiciais futuras acerca daquele débito.",
    preambulo=(
        "CREDOR(A) / DECLARANTE:\n"
        "[NOME COMPLETO DO CREDOR], inscrito(a) no CPF/CNPJ sob o nº [DOCUMENTO], com endereço na [ENDEREÇO COMPLETO];\n\n"
        "DECLARA, sob as penas da lei, para os devidos fins de direito, haver RECEBIDO DE:\n\n"
        "PAGADOR(A) / DEVEDOR(A):\n"
        "[NOME COMPLETO DO PAGADOR], inscrito(a) no CPF/CNPJ sob o nº [DOCUMENTO], com endereço na [ENDEREÇO COMPLETO];"
    ),
    clausulas=[
        (
            "1. DO VALOR E FORMA DE PAGAMENTO",
            "1.1. O CREDOR confessa haver recebido a quantia líquida e certa de R$ [VALOR EM REAIS] ([VALOR POR EXTENSO]), adimplida nesta data por meio de [PIX / Transferência Bancária TED / Moeda Corrente / Cheque compensado]."
        ),
        (
            "2. DA OBRIGAÇÃO ADIMPLIDA",
            "2.1. A quantia pecuniária recebida destina-se ao adimplemento e quitação integral de [DESCREVER DETALHADAMENTE A RELAÇÃO, Ex: prestação de serviços nº X / aluguel referente ao mês de Y / parcela Z do contrato de alienação]."
        ),
        (
            "3. DA QUITAÇÃO PLENA, GERAL E IRREVOGÁVEL",
            "3.1. Recebida referida quantia, o CREDOR confere ao PAGADOR a mais AMPLA, GERAL, RASA, PLENA E IRREVOGÁVEL QUITAÇÃO sobre a obrigação descrita, declarando nada mais ter a reclamar ou exigir a qualquer título, judicial ou extrajudicialmente, renunciando expressamente a quaisquer direitos residuais ou juros moratórios."
        )
    ],
    out_dir=out_dir
)

print("Módulo 3 (Contratos 21 a 30) gerado com sucesso!")
