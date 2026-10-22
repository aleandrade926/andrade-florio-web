import os
from contract_builder_core import build_docx_contract

out_dir = r"C:\Users\Alexandre\andrade-florio-web-recuperado\public\downloads"
os.makedirs(out_dir, exist_ok=True)

# -------------------------------------------------------------------------------------------------
# 31. CONTRATO DE TRABALHO INTERMITENTE (ART. 452-A DA CLT)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="31_Contrato_Trabalho_Intermitente_CLT.docx",
    title="Contrato Individual de Trabalho em Regime Intermitente com Previsão de Convocação e Quitação Periódica",
    subtitle="Regulado pelo Artigo 452-A da Consolidação das Leis do Trabalho (CLT) introduzido pela Lei Federal nº 13.467/2017",
    orientacao="O contrato de trabalho intermitente deve ser celebrado OBRIGATORIAMENTE por escrito e conter especificamente o valor da hora de trabalho, que não pode ser inferior ao valor horário do salário mínimo ou àquele devido aos demais empregados do estabelecimento que exerçam a mesma função. A convocação deve ocorrer com pelo menos 3 dias corridos de antecedência, e a cada período prestado o empregador deve liquidar imediatamente as parcelas remuneratórias e reflexos de férias e 13º salário proporcionais.",
    preambulo=(
        "Pelo presente Instrumento Particular de Contrato Individual de Trabalho Intermitente, regido pelos artigos 442 e 452-A da CLT (com redação dada pela Lei nº 13.467/2017), comparecem e celebram as partes:\n\n"
        "EMPREGADOR(A): [RAZÃO SOCIAL DA EMPRESA / NOME DO EMPREGADOR], inscrito(a) no CNPJ/CPF sob o nº [DOCUMENTO], com sede/endereço na [ENDEREÇO COMPLETO COM CEP], doravante denominado EMPREGADOR;\n\n"
        "EMPREGADO(A): [NOME COMPLETO DO TRABALHADOR], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL], portador(a) da CTPS nº [NÚMERO], Série [SÉRIE], inscrito(a) no PIS sob o nº [PIS], RG nº [RG], inscrito(a) no CPF/MF sob o nº [CPF], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP], doravante denominado EMPREGADO;\n\n"
        "Têm entre si, justo e contratado, o que se expressa mediante as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA FUNÇÃO E CARACTERÍSTICA DA INTERMITÊNCIA",
            "1.1. O EMPREGADO é admitido para exercer as funções inerentes ao cargo de [NOME DO CARGO / EX: Atendente de Eventos / Garçom / Operador de Produção / Suporte Operacional], desempenhando todas as tarefas típicas e complementares afetas à referida função.\n\n"
            "1.2. A prestação de serviços não será contínua, ocorrendo com alternância de períodos de prestação de serviços e de inatividade, determinados em horas, dias ou meses, independentemente do tipo de atividade do EMPREGADOR (art. 452-A da CLT)."
        ),
        (
            "CLÁUSULA SEGUNDA – DA REMUNERAÇÃO E FORMA DE PAGAMENTO",
            "2.1. O EMPREGADO perceberá o salário horário de R$ [VALOR POR HORA EM REAIS] ([VALOR POR EXTENSO]), não sendo este valor inferior ao valor horário do salário mínimo nacional ou ao piso salarial da categoria profissional, nem inferior ao pago aos empregados que exercem função idêntica na empresa.\n\n"
            "2.2. Ao final de cada período de prestação de serviços efetivos, o EMPREGADO receberá o pagamento imediato e discriminado das seguintes parcelas no respectivo recibo de pagamento:\n"
            "a) Remuneração das horas efetivamente trabalhadas;\n"
            "b) Repouso Semanal Remunerado (DSR) proporcional;\n"
            "c) Décimo terceiro salário proporcional;\n"
            "d) Férias proporcionais acrescidas do terço constitucional;\n"
            "e) Adicionais legais devidos (noturno, insalubridade, periculosidade ou horas extras), se houverem incidido no período."
        ),
        (
            "CLÁUSULA TERCEIRA – DA CONVOCAÇÃO E PERÍODO DE RESPOSTA",
            "3.1. O EMPREGADOR convocará o EMPREGADO, por qualquer meio de comunicação eficaz (WhatsApp, e-mail, telefone ou mensagem de texto), informando a jornada de trabalho, data de início e término estimado do chamado, com pelo menos 3 (três) dias corridos de antecedência.\n\n"
            "3.2. Recebida a convocação, o EMPREGADO terá o prazo de 1 (um) dia útil para responder ao chamado, presumindo-se a recusa caso permaneça em silêncio. A recusa da convocação não descaracteriza a subordinação para fins do contrato de trabalho intermitente."
        ),
        (
            "CLÁUSULA QUARTA – DOS PERÍODOS DE INATIVIDADE",
            "4.1. Durante o período de inatividade (quando o EMPREGADO não estiver prestando serviços nem tiver aceitado convocação), este não estará à disposição do EMPREGADOR, sendo livre para prestar serviços a outros contratantes ou empregadores, inclusive concorrentes, sob qualquer modalidade de contrato.\n\n"
            "4.2. Os períodos de inatividade não são remunerados, não constituem tempo à disposição e não geram contagem para fins de indenização rescisória."
        ),
        (
            "CLÁUSULA QUINTA – DO FGTS, PREVIDÊNCIA SOCIAL E BENEFÍCIOS",
            "5.1. O EMPREGADOR efetuará o recolhimento das contribuições previdenciárias (INSS) e do Fundo de Garantia do Tempo de Serviço (FGTS) com base nos valores pagos em cada período de prestação de serviços, fornecendo ao EMPREGADO os respectivos comprovantes de cumprimento dessas obrigações fiscais e trabalhistas."
        ),
        (
            "CLÁUSULA SEXTA – DAS FÉRIAS E FORO",
            "6.1. A cada 12 (doze) meses trabalhados, o EMPREGADO adquire direito a usufruir, nos 12 (doze) meses subsequentes, 1 (um) mês de férias, período no qual não poderá ser convocado para prestar serviços pelo mesmo empregador.\n\n"
            "6.2. Para dirimir quaisquer divergências resultantes da execução do presente pacto laboral, fica eleita a Vara do Trabalho da Comarca de [CIDADE/UF]."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 32. CONTRATO DE TRABALHO POR EXPERIÊNCIA / PRAZO DETERMINADO
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="32_Contrato_Trabalho_Experiencia_CLT.docx",
    title="Contrato Individual de Trabalho por Prazo Determinado a Título de Experiência",
    subtitle="Regulado pelos Artigos 443, 445 e 451 da Consolidação das Leis do Trabalho (CLT)",
    orientacao="O contrato de experiência tem limite máximo improrrogável de 90 dias (art. 445, parágrafo único, da CLT) e só admite uma única prorrogação dentro desse teto (ex: 45 + 45 dias). Se continuar após o 90º dia ou sofrer mais de uma prorrogação, convolar-se-á compulsoriamente em contrato por prazo indeterminado.",
    preambulo=(
        "Pelo presente Instrumento Particular de Contrato de Trabalho a Título de Experiência, celebram entre si:\n\n"
        "EMPREGADOR: [RAZÃO SOCIAL DA EMPRESA], inscrita no CNPJ sob o nº [CNPJ], com sede na [ENDEREÇO COMPLETO];\n\n"
        "EMPREGADO: [NOME DO TRABALHADOR], portador da CTPS nº [NÚMERO], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO COMPLETO];\n\n"
        "Ajustam as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA FUNÇÃO E OBJETO",
            "1.1. O EMPREGADO é admitido em caráter de experiência para exercer a função de [CARGO/FUNÇÃO], mediante a remuneração mensal de R$ [VALOR SALÁRIO], cumprindo jornada de trabalho semanal de [44] horas nos termos da CLT."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PRAZO E PRORROGAÇÃO",
            "2.1. O presente contrato vigorará pelo prazo de [45] dias, iniciando-se em [DATA INÍCIO] e encerrando-se em [DATA TÉRMINO].\n\n"
            "2.2. O contrato poderá ser prorrogado uma única vez por igual período (ou por até 45 dias adicionais), totalizando o limite máximo improrrogável de 90 (noventa) dias."
        ),
        (
            "CLÁUSULA TERCEIRA – DA RESCISÃO ANTECIPADA",
            "3.1. Havendo rescisão antecipada imotivada por iniciativa do EMPREGADOR, este indenizará o EMPREGADO na metade da remuneração a que teria direito até o termo final (art. 479 da CLT). Se a iniciativa for do EMPREGADO, indenizará o prejuízo causado (art. 480 da CLT)."
        ),
        (
            "CLÁUSULA QUARTA – DA PRORROGAÇÃO AUTOMÁTICA EM INDETERMINADO",
            "4.1. Transcorrido o prazo fixado sem manifestação expressa de rescisão, o presente contrato permanecerá em vigor, convolando-se automaticamente em contrato de trabalho por prazo indeterminado com todos os efeitos legais."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 33. TERMO ADITIVO DE TELETRABALHO / HOME OFFICE (ARTS. 75-A A 75-E CLT)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="33_Termo_Aditivo_Teletrabalho_Home_Office_CLT.docx",
    title="Termo Aditivo ao Contrato de Trabalho para Migração ao Regime de Teletrabalho / Home Office",
    subtitle="Fundamentado nos Artigos 75-A a 75-F da CLT (com alterações das Leis 13.467/2017 e 14.442/2022)",
    orientacao="A alteração do trabalho presencial para teletrabalho exige mútuo acordo registrado em aditivo contratual. O contrato deve disciplinar expressamente quem fornece computadores e internet, e esclarecer que ajudas de custo para utilidades não possuem natureza salarial.",
    preambulo=(
        "Pelo presente Termo Aditivo ao Contrato Individual de Trabalho, celebram EMPREGADOR e EMPREGADO devidamente qualificados no contrato de trabalho principal:\n\n"
        "Resolvem, de comum acordo, estipular as seguintes cláusulas de migração para o regime de teletrabalho:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA MODALIDADE E LOCAL DE PRESTAÇÃO",
            "1.1. O EMPREGADO passa a desempenhar suas atividades predominantemente fora das dependências do EMPREGADOR, em regime de teletrabalho / trabalho remoto (home office), no endereço residencial informado em seu cadastro funcional.\n\n"
            "1.2. O comparecimento às dependências do EMPREGADOR para reuniões, treinamentos ou atividades presenciais eventuais não descaracteriza o regime de teletrabalho (art. 75-C, § 1º da CLT)."
        ),
        (
            "CLÁUSULA SEGUNDA – DOS EQUIPAMENTOS E INFRAESTRUTURA",
            "2.1. O EMPREGADOR fornecerá em comodato [computador portátil / notebook / periféricos] de sua propriedade para uso estrito nas tarefas de serviço.\n\n"
            "2.2. A ajuda de custo mensal fornecida para ressarcimento de despesas de energia e internet tem natureza estritamente indenizatória, não integrando a remuneração para qualquer efeito trabalhista ou previdenciário (art. 75-D, § 2º da CLT)."
        ),
        (
            "CLÁUSULA TERCEIRA – DA SAÚDE, SEGURANÇA E RETORNO AO PRESENCIAL",
            "3.1. O EMPREGADO compromete-se a seguir as instruções ergonômicas e de saúde e segurança do trabalho fornecidas pela empresa.\n\n"
            "3.2. O EMPREGADOR poderá determinar o retorno ao regime presencial garantindo prazo de transição mínimo de 15 (quinze) dias (art. 75-C, § 2º da CLT)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 34. ACORDO INDIVIDUAL DE BANCO DE HORAS E COMPENSAÇÃO (ART. 59 CLT)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="34_Acordo_Individual_Banco_de_Horas_CLT.docx",
    title="Acordo Individual de Compensação de Horas e Banco de Horas com Validade Semestral",
    subtitle="Celebrado nos Termos do Artigo 59, §§ 5º e 6º, da Consolidação das Leis do Trabalho (CLT)",
    orientacao="A Reforma Trabalhista permite expressamente a pactuação de banco de horas por acordo individual escrito, desde que a compensação ocorra no período máximo de 6 (seis) meses. Horas não compensadas ao término do período devem ser pagas com acréscimo de 50%.",
    preambulo=(
        "Pelo presente Instrumento de Acordo Individual de Compensação e Banco de Horas, celebram entre si EMPREGADOR e EMPREGADO:\n\n"
        "Convencionam as cláusulas a seguir transcritas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA INSTITUIÇÃO DO BANCO DE HORAS",
            "1.1. Fica instituído o regime de banco de horas individual, pelo qual o excesso de horas trabalhadas em um dia poderá ser compensado pela diminuição correspondente em outro dia, de modo que não exceda a média semanal nem o limite diário de 10 horas de trabalho (art. 59, § 2º da CLT)."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PRAZO DE LIQUIDAÇÃO E RESCISÃO",
            "2.1. O prazo máximo para compensação das horas acumuladas no banco é de até 6 (seis) meses a contar do mês de realização.\n\n"
            "2.2. Não ocorrendo a compensação no prazo semestral ou em caso de rescisão do contrato de trabalho, o saldo positivo de horas será quitado como hora extraordinária com o adicional mínimo de 50% (art. 59, § 3º da CLT)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 35. ACORDO DE RESCISÃO DE TRABALHO POR MÚTUO ACORDO (ART. 484-A CLT)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="35_Acordo_Rescisao_Mutuo_Acordo_Art484A_CLT.docx",
    title="Termo de Extinção do Contrato de Trabalho por Mútuo Acordo entre Empregador e Empregado",
    subtitle="Lavrado com Arrimo no Artigo 484-A da Consolidação das Leis do Trabalho (Lei nº 13.467/2017)",
    orientacao="A rescisão por acordo bilateral formaliza o fim do vínculo com recolhimento de metade do aviso prévio indenizado e metade da indenização rescisória do FGTS (20%), permitindo ao empregado movimentar até 80% do saldo do FGTS sem acesso ao seguro-desemprego.",
    preambulo=(
        "Pelo presente Instrumento Particular de Rescisão Contratual por Mútuo Consentimento, celebram:\n\n"
        "EMPREGADOR: [RAZÃO SOCIAL DA EMPRESA], CNPJ nº [CNPJ];\n\n"
        "EMPREGADO: [NOME DO TRABALHADOR], CPF nº [CPF], CTPS nº [NÚMERO];\n\n"
        "Manifestam a vontade bilateral e irrevogável de extinguir a relação laboral nas condições seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA EXTINÇÃO BILATERAL",
            "1.1. As partes, de livre e espontânea vontade, acordam rescindir o contrato de trabalho havido desde [DATA ADMISSÃO], com termo final em [DATA TÉRMINO], nos exatos termos do artigo 484-A da CLT."
        ),
        (
            "CLÁUSULA SEGUNDA – DAS VERBAS RESCISÓRIAS ESPECÍFICAS",
            "2.1. Em estrita observância à legislação, serão devidas ao empregado:\n"
            "a) Metade do aviso prévio (15 dias), se indenizado;\n"
            "b) Metade da multa rescisória do FGTS (20% sobre o saldo da conta vinculada);\n"
            "c) Na integralidade: saldo de salários, 13º salário proporcional e férias vencidas e proporcionais com 1/3 constitucional.\n\n"
            "2.2. A extinção por mútuo acordo autoriza o saque de até 80% (oitenta por cento) do saldo da conta do FGTS, não conferindo habilitação ao seguro-desemprego (art. 484-A, § 2º da CLT)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 36. TERMO DE ADVERTÊNCIA DISCIPLINAR (ART. 482 CLT)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="36_Termo_Advertencia_Disciplinar_CLT.docx",
    title="Comunicação Formal de Advertência Disciplinar por Falta Funcional com Advertência de Justa Causa",
    subtitle="Expedida nos Termos do Poder Diretivo do Empregador e Artigo 482 da Consolidação das Leis do Trabalho",
    orientacao="A advertência formal constrói o histórico da gradação pedagógica da sanção disciplinar (advertência escrita, suspensão e demissão por justa causa). A recusa do empregado em assinar o ciente pode ser suprida pela assinatura de 2 testemunhas que presenciaram a leitura.",
    preambulo=(
        "AO(À) COLABORADOR(A):\n"
        "Nome: [NOME COMPLETO DO EMPREGADO]\n"
        "Cargo: [FUNÇÃO] | CTPS/CPF: [DOCUMENTO]\n\n"
        "EMPREGADOR:\n"
        "[RAZÃO SOCIAL DA EMPRESA], CNPJ nº [CNPJ];\n\n"
        "Serve a presente notificação disciplinar para registrar o que segue:"
    ),
    clausulas=[
        (
            "1. DA CONDUTA FALTOSA E DESCRIÇÃO DO FATO",
            "Vimos pela presente aplicar-lhe a sanção disciplinar de ADVERTÊNCIA ESCRITA pelo seguinte fato ocorrido no dia [DATA] às [HORÁRIO]: [DESCREVER OBJETIVAMENTE A FALTA: atrasos reiterados injustificados / desídia / insubordinação / descumprimento de procedimento interno de segurança]."
        ),
        (
            "2. DA GRADAÇÃO DA PENA E ADVERTÊNCIA DE JUSTA CAUSA",
            "Fica V. Sa. formalmente advertido(a) de que a reiteração da conduta faltosa ensejará a aplicação de penas disciplinares mais severas (suspensão de até 30 dias sem remuneração) e a rescisão do contrato de trabalho por Demissão com Justa Causa, nos termos do artigo 482 da CLT."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 37. TERMO DE CONFIDENCIALIDADE E NÃO CONCORRÊNCIA DO EMPREGADO
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="37_Termo_Confidencialidade_Nao_Concorrencia_Empregado_CLT.docx",
    title="Termo de Compromisso de Confidencialidade, Proteção de Segredos de Negócio e Não Concorrência",
    subtitle="Celebrado em Caráter Acessório ao Contrato de Trabalho nos Termos dos Arts. 444 e 482, 'g', da CLT",
    orientacao="A quebra de segredo da empresa é falta gravíssima punida com demissão por justa causa (art. 482, 'g', da CLT) e responsabilidade civil/penal por perdas e danos e violação de sigilo profissional (art. 154 do CP e Lei 9.279/96).",
    preambulo=(
        "Pelo presente Termo de Confidencialidade e Proteção de Informações, o(a) EMPREGADO(A) [NOME], CPF nº [CPF], compromete-se formalmente perante o EMPREGADOR [RAZÃO SOCIAL DA EMPRESA], CNPJ nº [CNPJ]:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO DEVER DE SIGILO E NÃO DIVULGAÇÃO",
            "1.1. O EMPREGADO obriga-se a manter estrito sigilo de todas as informações confidenciais, listas de clientes, estratégias de precificação, código-fonte, dados contábeis e segredos industriais a que tiver acesso em razão de suas funções, vedada qualquer cópia ou transmissão a terceiros."
        ),
        (
            "CLÁUSULA SEGUNDA – DA NÃO CONCORRÊNCIA E PENALIDADES",
            "2.1. O EMPREGADO não poderá utilizar as informações da empresa em proveito próprio ou de terceiros concorrentes durante e após a vigência do contrato, sujeitando-se às penalidades do art. 482 da CLT e indenização por perdas e danos."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 38. ACORDO DE SÓCIOS / QUOTISTAS (SOCIEDADE LIMITADA)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="38_Acordo_Socios_Quotistas_Sociedade_Limitada.docx",
    title="Acordo Parassocial de Sócios e Quotistas de Sociedade Empresária Limitada",
    subtitle="Celebrado nos Termos do Artigo 1.053, Parágrafo Único, do Código Civil c/c Artigo 118 da Lei nº 6.404/1976",
    orientacao="O acordo de sócios disciplina as regras internas de governança, quóruns de deliberação qualificada, direito de preferência, direito de saída conjunta (Tag Along) e obrigação de venda conjunta (Drag Along), vinculando a sociedade assim que arquivado na sua sede.",
    preambulo=(
        "Pelo presente Acordo de Sócios e Quotistas, celebram os sócios titulares da totalidade do capital social da sociedade [RAZÃO SOCIAL DA EMPRESA LTDA], com sede na [ENDEREÇO COMPLETO]:\n\n"
        "Convencionam as cláusulas que disciplinarão o exercício de seus direitos corporativos e patrimoniais:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO DIREITO DE PREFERÊNCIA",
            "1.1. Se qualquer dos sócios desejar alienar suas quotas sociais a terceiros, deverá notificar previamente os demais sócios concedendo prazo improrrogável de 30 (trinta) dias para o exercício do direito de preferência nas mesmas condições e preço oferecidos."
        ),
        (
            "CLÁUSULA SEGUNDA – DAS CLÁUSULAS DE TAG ALONG E DRAG ALONG",
            "2.1. (Tag Along): Na hipótese de alienação do controle da sociedade, os sócios minoritários terão o direito de exigir a inclusão de suas quotas na negociação pelo mesmo preço unitário.\n\n"
            "2.2. (Drag Along): Se os titulares de mais de [75%] do capital receberem proposta de compra de 100% da empresa, poderão obrigar os demais sócios a venderem suas quotas nas mesmas condições."
        ),
        (
            "CLÁUSULA TERCEIRA – DA APURAÇÃO DE HAVERES POR MORTE OU RETIRADA",
            "3.1. Ocorrendo morte ou recesso de sócio, os haveres serão apurados por balanço especial com base no valor patrimonial real dos ativos e pagos em [24] parcelas mensais corrigidas pelo IPCA."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 39. MEMORANDO DE ENTENDIMENTOS (MOU)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="39_Memorando_de_Entendimentos_MoU_Parceria.docx",
    title="Memorando de Entendimentos (MoU) com Cláusulas Vinculantes de Exclusividade e Sigilo",
    subtitle="Regulado pelos Artigos 421 e Seguintes do Código Civil Brasileiro para Fixação de Bases Preliminares de Negócio",
    orientacao="O Memorando de Entendimentos fixa as premissas e intenções preliminares antes da assinatura dos contratos definitivos de fusão, sociedade ou joint venture. Suas cláusulas de confidencialidade e exclusividade de negociação têm plena eficácia vinculante.",
    preambulo=(
        "Pelo presente Memorando de Entendimentos (Memorandum of Understanding - MoU), celebram:\n\n"
        "PARTE A: [NOME / RAZÃO SOCIAL], CNPJ/CPF nº [DOCUMENTO];\n\n"
        "PARTE B: [NOME / RAZÃO SOCIAL], CNPJ/CPF nº [DOCUMENTO];\n\n"
        "Considerando que as partes mantêm negociações para [DESCREVER O NEGÓCIO ESPERADO], firmam as premissas preliminares:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO PROPÓSITO E NÃO VINCULAÇÃO GERAL",
            "1.1. Este Memorando reflete a intenção recíproca das partes de negociar os termos dos instrumentos jurídicos definitivos, não constituindo obrigação de celebração do negócio final caso a auditoria (Due Diligence) aponte inconsistências materiais."
        ),
        (
            "CLÁUSULA SEGUNDA – DAS CLÁUSULAS VINCULANTES (EXCLUSIVIDADE E SIGILO)",
            "2.1. Permanecem estritamente VINCULANTES e com eficácia obrigatória imediata entre as partes as cláusulas de confidencialidade das informações trocadas e o compromisso de exclusividade de negociação pelo prazo de [60] dias corridos."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 40. CONTRATO DE CONVIVÊNCIA E UNIÃO ESTÁVEL (COM SEPARAÇÃO TOTAL DE BENS)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="40_Contrato_Convivencia_Uniao_Estavel_Separacao_Bens.docx",
    title="Instrumento Particular de Contrato de Convivência e União Estável com Estipulação de Regime de Separação Total de Bens",
    subtitle="Fundamentado no Artigo 1.725 do Código Civil Brasileiro e Jurisprudência do Superior Tribunal de Justiça",
    orientacao="Na união estável, caso não haja contrato escrito estipulando regime diverso, aplica-se o regime da comunhão parcial de bens. O contrato de convivência com separação de bens blinda o patrimônio adquirido individualmente antes e durante a convivência.",
    preambulo=(
        "Pelo presente Instrumento Particular de Reconhecimento de União Estável e Contrato de Convivência, comparecem:\n\n"
        "PRIMEIRO(A) CONVIVENTE: [NOME COMPLETO], CPF nº [CPF], RG nº [RG], domiciliado(a) na [ENDEREÇO];\n\n"
        "SEGUNDO(A) CONVIVENTE: [NOME COMPLETO], CPF nº [CPF], RG nº [RG], domiciliado(a) na [ENDEREÇO];\n\n"
        "Declarando viverem em união pública, contínua e duradoura com o objetivo de constituir família, ajustam o seguinte:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA ADOÇÃO DO REGIME DE SEPARAÇÃO TOTAL DE BENS",
            "1.1. Em consonância com o art. 1.725 do Código Civil, os conviventes convencionam que a presente união será regida pelo REGIME DA SEPARAÇÃO TOTAL DE BENS.\n\n"
            "1.2. Todos os bens móveis, imóveis, contas bancárias, quotas societárias e investimentos adquiridos por cada convivente antes ou durante a vigência desta união permanecerão sob a propriedade, administração e livre disposição exclusiva de quem os adquiriu, sem qualquer direito à meação ou comunicabilidade patrimonial."
        ),
        (
            "CLÁUSULA SEGUNDA – DA INDEPENDÊNCIA DAS DÍVIDAS E ALIMENTOS",
            "2.1. Cada convivente responderá com seu próprio patrimônio pelas dívidas e encargos que assumir individualmente.\n\n"
            "2.2. Em caso de dissolução futura da união estável, ambos renunciam reciprocamente à prestação de alimentos, reconhecendo que ambos possuem plena capacidade laborativa para seu próprio sustento."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 41. TERMO DE DISSOLUÇÃO AMIGÁVEL DE UNIÃO ESTÁVEL E PARTILHA
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="41_Termo_Dissolucao_Amigavel_Uniao_Estavel_Partilha.docx",
    title="Instrumento Particular de Dissolução Consensual de União Estável com Partilha de Bens e Alimentos",
    subtitle="Celebrado nos Termos dos Artigos 1.723 a 1.727 e Artigo 840 do Código Civil Brasileiro",
    orientacao="A dissolução consensual por instrumento particular tem plena validade jurídica quando inexistem filhos menores ou incapazes, formalizando a partilha de eventuais bens comuns e a cessação de deveres conjugais.",
    preambulo=(
        "Pelo presente Instrumento Particular de Dissolução Consensual de União Estável, comparecem os Conviventes [NOME PARTE A] e [NOME PARTE B], ambos devidamente qualificados:\n\n"
        "Declaram dissolvida a convivência e estipulam a partilha dos haveres:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA EXTINÇÃO CONSENSUAL DA UNIÃO",
            "1.1. Os celebrantes declaram extinta e dissolvida a união estável mantida entre ambos, cessando a partir desta data todos os deveres recíprocos de coabitação, mútua assistência e fidelidade."
        ),
        (
            "CLÁUSULA SEGUNDA – DA PARTILHA DE BENS E QUITAÇÃO",
            "2.1. O patrimônio adquirido durante a constância da união fica partilhado da seguinte forma: [DESCREVER DESTINAÇÃO DE CADA BEM OU VEÍCULO].\n\n"
            "2.2. Cumprida a partilha, as partes outorgam-se mútua, plena e irrevogável quitação patrimonial."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 42. TESTAMENTO PARTICULAR COM 3 TESTEMUNHAS
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="42_Testamento_Particular_Valido_Codigo_Civil.docx",
    title="Cédula Testamentária Particular com Disposição de Última Vontade e Nomeação de Testamenteiro",
    subtitle="Lavrado em Rigorosa Observância ao Artigo 1.876 e Seguintes do Código Civil Brasileiro",
    orientacao="O testamento particular deve ser lido e assinado pelo testador na presença obrigatória de pelo menos 3 (três) testemunhas desimpedidas, respeitando sempre a legítima de 50% dos herdeiros necessários (art. 1.846 CC).",
    preambulo=(
        "Eu, [NOME COMPLETO DO TESTADOR], nacionalidade: [NACIONALIDADE], estado civil: [ESTADO CIVIL], profissão: [PROFISSÃO], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO COMPLETO], achando-me em perfeito juízo e no pleno gozo das minhas faculdades mentais, de livre vontade lavro este meu TESTAMENTO PARTICULAR na presença de 3 testemunhas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DOS HERDEIROS NECESSÁRIOS E PARTE DISPONÍVEL",
            "1.1. Declaro que respeito integralmente a legítima dos meus herdeiros necessários (art. 1.846 do Código Civil), recaindo as disposições testamentárias exclusivamente sobre a metade disponível de meus bens."
        ),
        (
            "CLÁUSULA SEGUNDA – DAS DISPOSIÇÕES DE ÚLTIMA VONTADE",
            "2.1. De minha parte disponível, deixo por minha morte para [NOME DO LEGATÁRIO/BENEFICIÁRIO], CPF nº [CPF], o seguinte bem: [DESCREVER O BEM DESTINADO].\n\n"
            "2.2. Nomeio como meu Testamenteiro [NOME DO TESTAMENTEIRO] para dar fiel cumprimento a estas disposições."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 43. TERMOS DE USO DE PLATAFORMA DIGITAL / APLICATIVO
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="43_Termos_de_Uso_Plataforma_Web_Aplicativo.docx",
    title="Termos e Condições Gerais de Uso de Plataforma Digital, E-commerce e Software como Serviço (SaaS)",
    subtitle="Em Conformidade com a Lei Federal nº 12.965/2014 (Marco Civil da Internet) e Código de Defesa do Consumidor",
    orientacao="Os Termos de Uso constituem o contrato de adesão eletrônico entre a plataforma e os usuários, delimitando responsabilidades, regras de propriedade intelectual e vedações de uso indevido.",
    preambulo=(
        "Estes Termos de Uso regulam a utilização dos serviços digitais disponibilizados por [RAZÃO SOCIAL DA PLATAFORMA / BANCA], CNPJ nº [CNPJ], acessível via website e aplicações móveis:\n\n"
        "O usuário aceita e concorda com as cláusulas seguintes ao navegar ou cadastrar-se:"
    ),
    clausulas=[
        (
            "1. DO OBJETO E ACEITE DOS TERMOS",
            "1.1. A plataforma disponibiliza [DESCREVER OS SERVIÇOS / ACERVO / INTERMEDIAÇÃO]. O acesso aos serviços implica a concordância plena e irrestrita com as presentes condições de uso."
        ),
        (
            "2. DA PROPRIEDADE INTELECTUAL E VEDAÇÕES",
            "2.1. Todos os textos, marcas, códigos-fonte e materiais são de titularidade exclusiva da empresa detentora, sendo expressamente vedada a reprodução, comercialização, engenharia reversa ou distribuição não autorizada."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 44. POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS (LGPD)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="44_Politica_Privacidade_Protecao_Dados_LGPD.docx",
    title="Política Institucional de Privacidade, Segurança da Informação e Tratamento de Dados Pessoais",
    subtitle="Elaborada em Estrito Cumprimento à Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD)",
    orientacao="A Política de Privacidade deve esclarecer as bases legais do tratamento (consentimento, execução de contrato, cumprimento legal), os direitos dos titulares (acesso, correção, exclusão) e o canal do Encarregado de Dados (DPO).",
    preambulo=(
        "A empresa [RAZÃO SOCIAL], inscrita no CNPJ sob o nº [CNPJ], na qualidade de Controladora de Dados, adota a presente Política de Privacidade:"
    ),
    clausulas=[
        (
            "1. DOS DADOS COLETADOS E FINALIDADE DO TRATAMENTO",
            "1.1. Coletamos dados cadastrais (nome, e-mail, telefone, CPF) estritamente necessários para a emissão de cobranças, execução de contratos solicitados e cumprimento de obrigações tributárias legais (art. 7º, II e V da LGPD)."
        ),
        (
            "2. DOS DIREITOS DO TITULAR E CANAL DO ENCARREGADO (DPO)",
            "2.1. O titular poderá solicitar a qualquer momento a confirmação da existência de tratamento, correção de dados incompletos ou eliminação de dados dispensáveis através do e-mail do Encarregado: [E-MAIL DPO]."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 45. CONTRATO DE GESTÃO DE TRÁFEGO PAGO E MARKETING DIGITAL
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="45_Contrato_Gestao_Trafego_Pago_Marketing_Digital.docx",
    title="Contrato de Prestação de Serviços de Gestão de Tráfego Pago, Mídia de Performance e Otimização de Campanhas",
    subtitle="Regulado pelos Artigos 593 e Seguintes do Código Civil com Delimitação de Responsabilidade por Resultados",
    orientacao="O contrato de tráfego pago deve deixar explícito que a atividade é de meio (geração e otimização de visitas qualificadas) e não de resultado garantido de vendas, delimitando que o orçamento de anúncios no Google/Meta é pago diretamente pelo cliente.",
    preambulo=(
        "Pelo presente Instrumento Particular de Prestação de Serviços de Gestão de Mídia de Performance, celebram:\n\n"
        "CONTRATANTE: [NOME / RAZÃO SOCIAL], CNPJ/CPF nº [DOCUMENTO];\n\n"
        "GESTOR DE TRÁFEGO (CONTRATADA): [NOME / RAZÃO SOCIAL], CNPJ/CPF nº [DOCUMENTO];\n\n"
        "Ajustam as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO ESCOPO DOS SERVIÇOS DE TRÁFEGO",
            "1.1. A CONTRATADA prestará serviços de planejamento, configuração, veiculação e otimização de campanhas de anúncios nas plataformas [Google Ads / Meta Ads / TikTok Ads], emitindo relatórios periódicos de métricas (CPC, CTR, conversões)."
        ),
        (
            "CLÁUSULA SEGUNDA – DA OBRIGAÇÃO DE MEIO E ORÇAMENTO DE ANÚNCIOS",
            "2.1. Os serviços ora contratados configuram estritamente OBRIGAÇÃO DE MEIO, não garantindo faturamento ou vendas mínimas, variáveis que dependem do produto, preço e atendimento comercial do CONTRATANTE.\n\n"
            "2.2. A verba financeira destinada ao pagamento dos cliques e veiculação dos anúncios será paga diretamente pelo CONTRATANTE às plataformas de mídia."
        )
    ],
    out_dir=out_dir
)

print("Módulo de Expansão (Contratos 31 a 45) gerado com sucesso!")
