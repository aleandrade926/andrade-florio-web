import os
from contract_builder_core import build_docx_contract

out_dir = r"C:\Users\Alexandre\andrade-florio-web-recuperado\public\downloads"
os.makedirs(out_dir, exist_ok=True)

# 12 - PRESTAÇÃO DE SERVIÇOS SIMPLES
build_docx_contract(
    filename="12_Contrato_Prestacao_Servicos_Simples.docx",
    title="Contrato de Prestação de Serviços Civis e Técnicos",
    subtitle="Regulado pelos Artigos 593 a 609 do Código Civil Brasileiro",
    orientacao="A delimitação precisa do escopo de serviços e dos critérios de aceite é a maior garantia do prestador para evitar retrabalhos infinitos sem cobrança adicional e garantir a remuneração integral.",
    preambulo=(
        "Pelo presente Instrumento Particular de Prestação de Serviços, celebram entre si:\n\n"
        "CONTRATANTE: [NOME OU RAZÃO SOCIAL], [CPF/CNPJ nº], com sede/domicílio na [ENDEREÇO COMPLETO];\n\n"
        "CONTRATADA: [NOME OU RAZÃO SOCIAL DA PRESTADORA], [CPF/CNPJ nº], com sede/domicílio na [ENDEREÇO COMPLETO];\n\n"
        "Ajustam as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E ESCOPO",
            "1.1. O presente contrato tem por objeto a prestação, pela CONTRATADA em benefício do CONTRATANTE, dos serviços de [DESCREVER DETALHADAMENTE AS ATIVIDADES E ENTREGAS ESPERADAS], conforme proposta comercial anexa.\n\n"
            "1.2. Quaisquer demandas excedentes ao escopo pactuado dependerão de aditivo e orçamento prévio."
        ),
        (
            "CLÁUSULA SEGUNDA – DOS HONORÁRIOS E PAGAMENTO",
            "2.1. O CONTRATANTE pagará à CONTRATADA o valor de R$ [VALOR POR EXTENSO], a ser liquidado em [XX] parcelas de R$ [VALOR] todo dia [XX], mediante transferência bancária ou PIX.\n\n"
            "2.2. O atraso no pagamento ensejará multa de 2%, juros de 1% ao mês e atualização monetária pelo IPCA."
        ),
        (
            "CLÁUSULA TERCEIRA – DO PRAZO E RESCISÃO",
            "3.1. O contrato vigerá de [DATA] até [DATA]. Qualquer das partes poderá rescindi-lo com aviso prévio formal de 30 dias, sem multa compensatória."
        ),
        (
            "CLÁUSULA QUARTA – DO FORO",
            "4.1. Fica eleito o Foro da Comarca de [CIDADE/UF] para dirimir litígios oriundos deste pacto."
        )
    ],
    out_dir=out_dir
)

# 13 - PRESTAÇÃO DE SERVIÇOS PJ (BLINDAGEM TRABALHISTA)
build_docx_contract(
    filename="13_Contrato_Servicos_PJ_Freelancer.docx",
    title="Contrato de Prestação de Serviços Técnicos Especializados com Blindagem Trabalhista (PJ / Freelancer)",
    subtitle="Regido pelo Código Civil Brasileiro (Arts. 593 a 609) com Ausência Total dos Requisitos do Art. 3º da CLT",
    orientacao="A contratação de profissionais PJ ou autônomos deve blindar a empresa contra o princípio trabalhista da 'Primazia da Realidade'. Este contrato formaliza a autonomia técnica, a inexistência de subordinação jurídica, a não obrigatoriedade de cumprimento de jornada fixa e a ampla liberdade para prestar serviços a terceiros simultaneamente.",
    preambulo=(
        "Pelo presente Instrumento Particular de Prestação de Serviços Técnicos Especializados, regido pelos artigos 593 a 609 do Código Civil Brasileiro, celebram entre si:\n\n"
        "CONTRATANTE: [RAZÃO SOCIAL DA EMPRESA], pessoa jurídica inscrita no CNPJ/MF sob o nº [NÚMERO], com sede na [ENDEREÇO COMPLETO], representada por seu representante legal [NOME COMPLETO], CPF nº [CPF];\n\n"
        "CONTRATADA: [RAZÃO SOCIAL DA PRESTADORA PJ / MEI], inscrita no CNPJ sob o nº [NÚMERO], com sede na [ENDEREÇO COMPLETO], representada por [NOME DO SÓCIO], CPF nº [CPF];\n\n"
        "Têm entre si acordadas as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E ENTREGÁVEIS",
            "1.1. O presente contrato tem por objeto a prestação, pela CONTRATADA à CONTRATANTE, de serviços de assessoria e consultoria técnica especializada em [DESCREVER ATIVIDADES E PROJETOS].\n\n"
            "1.2. Os serviços serão medidos por entregas e resultados qualitativos, inexistindo qualquer obrigação de controle ou reporte de horas trabalhadas."
        ),
        (
            "CLÁUSULA SEGUNDA – DA AUTONOMIA TÉCNICA E BLINDAGEM TRABALHISTA",
            "2.1. A CONTRATADA exercerá suas atividades com total independência técnica, operacional, de métodos e horários, sem qualquer tipo de subordinação hierárquica à estrutura da CONTRATANTE.\n\n"
            "2.2. Não há qualquer exigência de pessoalidade (podendo a Contratada alocar sócios ou prepostos qualificados) nem cláusula de exclusividade, sendo a CONTRATADA livre para prestar serviços simultaneamente a outras empresas e concorrentes.\n\n"
            "2.3. As partes atestam expressamente a natureza estritamente empresarial e civil deste contrato, declarando a inocorrência de vínculo empregatício sob a égide da CLT (Artigos 2º e 3º da CLT)."
        ),
        (
            "CLÁUSULA TERCEIRA – DA CONTRAPRESTAÇÃO E NOTA FISCAL",
            "3.1. Pelos serviços prestados, a CONTRATANTE pagará à CONTRATADA o valor de R$ [VALOR POR EXTENSO] por [mês / entrega], mediante apresentação e validação da Nota Fiscal de Prestação de Serviços correspondente."
        ),
        (
            "CLÁUSULA QUARTA – DO SIGILO E NÃO CONCORRÊNCIA",
            "4.1. A CONTRATADA compromete-se a manter absoluto sigilo sobre dados, estratégias e segredos de negócio da CONTRATANTE durante a vigência e pelo período de 02 anos após o encerramento."
        ),
        (
            "CLÁUSULA QUINTA – DA RESCISÃO E FORO",
            "5.1. O contrato poderá ser rescindido por qualquer das partes mediante aviso prévio por escrito com 30 dias de antecedência.\n\n"
            "5.2. Fica eleito o Foro da Comarca de [CIDADE/UF] para dirimir litígios oriundos deste ajuste."
        )
    ],
    out_dir=out_dir
)

# 14 - ACORDO DE CONFIDENCIALIDADE (NDA)
build_docx_contract(
    filename="14_Acordo_Confidencialidade_NDA.docx",
    title="Acordo de Confidencialidade, Não Divulgação de Informações Estratégicas (NDA) e Proteção de Segredos de Negócio",
    subtitle="Regulado pelo Código Civil Brasileiro e pela Lei nº 9.279/1996 (Propriedade Industrial)",
    orientacao="Assinar o NDA antes de qualquer apresentação comercial, rodada com investidores ou envio de propostas detalhadas protege suas fórmulas, metodologias, códigos e carteiras de clientes contra apropriação indevida ou cópia.",
    preambulo=(
        "Pelo presente Instrumento Particular de Acordo de Confidencialidade e Não Divulgação (NDA), celebram entre si:\n\n"
        "PARTE REVELADORA: [NOME OU RAZÃO SOCIAL], CNPJ/CPF nº [NÚMERO], com sede/domicílio na [ENDEREÇO];\n\n"
        "PARTE RECEPTORA: [NOME OU RAZÃO SOCIAL], CNPJ/CPF nº [NÚMERO], com sede/domicílio na [ENDEREÇO];\n\n"
        "Ajustam o compromisso de sigilo mediante as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA DEFINIÇÃO DE INFORMAÇÕES CONFIDENCIAIS",
            "1.1. Consideram-se Informações Confidenciais para todos os efeitos deste termo: dados comerciais, listas de clientes, estratégias de precificação, planos de expansão, segredos industriais, know-how, metodologias, códigos-fonte, algoritmos e qualquer informação revelada verbalmente ou por escrito em razão das tratativas entre as partes."
        ),
        (
            "CLÁUSULA SEGUNDA – DA OBRIGAÇÃO DE SIGILO E NÃO UTILIZAÇÃO",
            "2.1. A PARTE RECEPTORA obriga-se a não divulgar, publicar, repassar a terceiros ou utilizar as Informações Confidenciais para qualquer outra finalidade que não a estrita análise da parceria pretendida entre as partes.\n\n"
            "2.2. A obrigação de sigilo vigorará pelo período de 05 (cinco) anos a contar da presente assinatura."
        ),
        (
            "CLÁUSULA TERCEIRA – DA MULTA CONTRATUAL E PERDAS E DANOS",
            "3.1. A violação comprovada do dever de confidencialidade sujeitará a PARTE RECEPTORA ao pagamento imediato de multa compensatória no valor de R$ [VALOR POR EXTENSO - EX: R$ 50.000,00], sem prejuízo da apuração judicial de perdas e danos e lucros cessantes (Art. 195 da Lei 9.279/96)."
        ),
        (
            "CLÁUSULA QUARTA – DO FORO",
            "4.1. Fica eleito o Foro da Comarca de [CIDADE/UF] para dirimir controvérsias decorrentes deste acordo."
        )
    ],
    out_dir=out_dir
)

# 15 - PARCERIA COMERCIAL / JOINT VENTURE
build_docx_contract(
    filename="15_Contrato_Parceria_Comercial.docx",
    title="Contrato de Parceria Comercial Estratégica e Cooperação Operacional (Joint Venture Não Personificada)",
    subtitle="Regulado pelos Artigos 981 a 985 do Código Civil Brasileiro",
    orientacao="A parceria comercial simples permite unir forças entre empresas para vender ou executar um projeto sem a necessidade de criar um novo CNPJ e sem gerar confusão patrimonial entre os sócios.",
    preambulo=(
        "Pelo presente Instrumento Particular de Parceria Comercial e Cooperação, celebram entre si:\n\n"
        "PARCEIRO A: [NOME OU RAZÃO SOCIAL], CNPJ/CPF [NÚMERO], com sede na [ENDEREÇO];\n\n"
        "PARCEIRO B: [NOME OU RAZÃO SOCIAL], CNPJ/CPF [NÚMERO], com sede na [ENDEREÇO];\n\n"
        "Ajustam a parceria mediante as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO DA PARCERIA",
            "1.1. O presente contrato tem por objeto a cooperação e conjugação de esforços comerciais entre os PARCEIROS para a divulgação, captação e execução conjunta do projeto [NOME DO PROJETO/SERVIÇO]."
        ),
        (
            "CLÁUSULA SEGUNDA – DA DIVISÃO DE RESULTADOS FINANCEIROS",
            "2.1. O faturamento líquido apurado nas operações decorrentes desta parceria será rateado entre os parceiros na seguinte proporção: [50% (cinquenta por cento)] para o PARCEIRO A e [50% (cinquenta por cento)] para o PARCEIRO B, após a dedução dos tributos incidentes."
        ),
        (
            "CLÁUSULA TERCEIRA – DA INDEPENDÊNCIA JURÍDICA E PATRIMONIAL",
            "3.1. A celebração deste instrumento não cria sociedade empresária, consórcio formal ou vínculo societário entre as partes, respondendo cada qual exclusivamente por seus próprios custos tributários, trabalhistas e operacionais."
        ),
        (
            "CLÁUSULA QUARTA – DO PRAZO E FORO",
            "4.1. O contrato vigorará por [XX] meses, elegendo-se o Foro da Comarca de [CIDADE/UF] para solução de litígios."
        )
    ],
    out_dir=out_dir
)

# 16 - REPRESENTAÇÃO COMERCIAL
build_docx_contract(
    filename="16_Contrato_Representacao_Comercial.docx",
    title="Contrato de Representação Comercial Autônoma com Delimitação de Zona e Comissões",
    subtitle="Regido Estritamente pela Lei Federal nº 4.886/1965 com as alterações da Lei nº 8.420/1992",
    orientacao="A Lei 4.886/65 exige registro prévio no CORE e estabelece que, na rescisão sem justa causa por iniciativa da representada, o representante tem direito à indenização de no mínimo 1/12 (um doze avos) do total da retribuição auferida durante a vigência da representação.",
    preambulo=(
        "Pelo presente Instrumento Particular de Representação Comercial Autônoma, celebram entre si:\n\n"
        "REPRESENTADA: [RAZÃO SOCIAL DA EMPRESA], inscrita no CNPJ/MF sob o nº [NÚMERO], com sede na [ENDEREÇO];\n\n"
        "REPRESENTANTE: [NOME DO REPRESENTANTE OU EMPRESA], registrado no Conselho Regional dos Representantes Comerciais (CORE) sob o nº [NÚMERO DO CORE], com domicílio na [ENDEREÇO];\n\n"
        "Ajustam as cláusulas a seguir:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E ZONA DE ATUAÇÃO",
            "1.1. A REPRESENTADA confere ao REPRESENTANTE a representação comercial autônoma de seus produtos da linha [ESPECIFICAR PRODUTOS], para atuar na zona geográfica compreendida pelo [ESTADO/REGIÃO], [sem / com] exclusividade de zona."
        ),
        (
            "CLÁUSULA SEGUNDA – DA COMISSÃO E PAGAMENTO",
            "2.1. O REPRESENTANTE fará jus à comissão de [XX%] calculada sobre o valor líquido das faturas emitidas e efetivamente liquidadas pelos clientes intermediados, com pagamento até o dia 15 do mês subsequente à liquidação."
        ),
        (
            "CLÁUSULA TERCEIRA – DA INDENIZAÇÃO RESCISÓRIA (ART. 27, ALÍNEA 'J')",
            "3.1. A rescisão imotivada deste contrato pela REPRESENTADA gerará em favor do REPRESENTANTE a indenização legal correspondente a 1/12 (um doze avos) do total das comissões auferidas durante todo o período da representação, nos termos da Lei nº 4.886/1965."
        ),
        (
            "CLÁUSULA QUARTA – DO FORO",
            "4.1. Nos termos do artigo 39 da Lei nº 4.886/1965, é competente o Foro do domicílio do REPRESENTANTE para julgamento de controvérsias."
        )
    ],
    out_dir=out_dir
)

# 17 - TERMO DE QUITAÇÃO DE SERVIÇOS
build_docx_contract(
    filename="17_Termo_Quitacao_Servicos.docx",
    title="Termo de Encerramento de Projeto, Aceite de Entregáveis e Quitação Plena de Serviços",
    subtitle="Instrumento de Eficácia Liberatória Geral e Definitiva",
    orientacao="O termo de quitação formal assinado pelo cliente ao final de um serviço técnico ou de desenvolvimento extingue pretensões futuras de indenização, cancelamento de pagamento ou devolução de valores.",
    preambulo=(
        "Pelo presente Termo de Encerramento e Quitação, o CONTRATANTE [NOME/EMPRESA], CNPJ/CPF [NÚMERO], declara perante a CONTRATADA [NOME/EMPRESA], CNPJ/CPF [NÚMERO], em relação aos serviços contratados em [DATA]:"
    ),
    clausulas=[
        (
            "1. DO RECEBIMENTO E APROVAÇÃO TÉCNICA",
            "1.1. O CONTRATANTE declara haver recebido, auditado e aprovado integralmente todos os entregáveis, softwares, relatórios ou serviços contratados, conferindo o seu aceite formal e definitivo sem qualquer ressalva de qualidade."
        ),
        (
            "2. DA QUITAÇÃO PLENA E IRREVOGÁVEL",
            "2.1. As partes declaram que todos os valores ajustados foram integralmente liquidados, conferindo-se mútua, rasa, plena, geral e irrevogável quitação para nada mais reclamar a que título for, em juízo ou fora dele."
        )
    ],
    out_dir=out_dir
)

# 18 - DISTRATO DE SERVIÇOS
build_docx_contract(
    filename="18_Distrato_Prestacao_Servicos.docx",
    title="Instrumento Particular de Distrato e Resilição Bilateral de Contrato de Prestação de Serviços",
    subtitle="Regulado pelo Artigo 472 do Código Civil Brasileiro",
    orientacao="Formaliza o término amigável de contratos de assessoria, marketing, contabilidade ou TI antes do prazo final, fixando eventuais saldos residuais e garantindo a devolução de senhas, acessos e bancos de dados.",
    preambulo=(
        "Pelo presente Instrumento de Distrato, CONTRATANTE e CONTRATADA, devidamente qualificados no contrato de prestação de serviços celebrado em [DATA DO CONTRATO]:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA RESILIÇÃO CONSENSUAL",
            "1.1. As partes, de livre e espontânea vontade, decidem resilir o contrato originário a partir desta data, cessando todas as obrigações recíprocas futuras."
        ),
        (
            "CLÁUSULA SEGUNDA – DO ACERTO FINANCEIRO E TRANSIÇÃO",
            "2.1. A CONTRATADA entrega nesta data todos os arquivos, acessos e senhas pertencentes ao CONTRATANTE. O CONTRATANTE paga nesta data o valor residual proporcional de R$ [VALOR], dando-se as partes quitação plena."
        )
    ],
    out_dir=out_dir
)

# 19 - LICENCIAMENTO DE MARCA
build_docx_contract(
    filename="19_Licenciamento_Uso_Marca.docx",
    title="Contrato de Licenciamento de Uso de Marca Comercial com Fixação de Royalties",
    subtitle="Regido pela Lei nº 9.279/1996 (Lei de Propriedade Industrial - LPI)",
    orientacao="Autoriza o uso de logomarca e nome em produtos, franquias ou cursos sem transferir a propriedade intelectual definitiva, estipulando controle estrito de padrão de qualidade e pagamento de royalties.",
    preambulo=(
        "Pelo presente Contrato de Licença de Uso de Marca, celebram entre si:\n\n"
        "LICENCIANTE (PROPRIETÁRIO DA MARCA): [NOME OU RAZÃO SOCIAL], titular do registro/depósito marcário nº [NÚMERO DO PROCESSO NO INPI], Classe [CLASSE], referente à marca [NOME DA MARCA];\n\n"
        "LICENCIATÁRIA (AUTORIZADA): [RAZÃO SOCIAL DA EMPRESA], CNPJ [NÚMERO], com sede na [ENDEREÇO];\n\n"
        "Ajustam as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA LICENÇA NÃO EXCLUSIVA",
            "1.1. O LICENCIANTE concede à LICENCIATÁRIA a licença temporária e não exclusiva de uso da marca [NOME DA MARCA] para fins de identificação dos produtos/serviços [ESPECIFICAR]."
        ),
        (
            "CLÁUSULA SEGUNDA – DOS ROYALTIES E REMUNERAÇÃO",
            "2.1. Pela licença concedida, a LICENCIATÁRIA pagará royalties mensais correspondentes a [XX%] sobre o faturamento bruto auferido com os produtos identificados pela marca licenciada."
        ),
        (
            "CLÁUSULA TERCEIRA – DO CONTROLE DE QUALIDADE E RESCISÃO",
            "3.1. A LICENCIATÁRIA obriga-se a manter rigoroso padrão de qualidade nos produtos identificados pela marca. O descumprimento dos padrões acarretará revogação imediata da licença e multa."
        )
    ],
    out_dir=out_dir
)

# 20 - CESSÃO DE DIREITOS AUTORAIS
build_docx_contract(
    filename="20_Cessao_Direitos_Autorais.docx",
    title="Contrato de Cessão Total, Definitiva e Irrevogável de Direitos Patrimoniais de Autor e Imagem",
    subtitle="Regulado pela Lei Federal nº 9.610/1998 (Lei de Direitos Autorais)",
    orientacao="No Brasil, a criação intelectual (design, código-fonte, ilustrações, fotos) pertence originariamente ao autor pessoa física. Para que uma empresa possa comercializar a obra livremente sem pagar royalties perpétuos, é indispensável a cessão total expressa de direitos patrimoniais por escrito.",
    preambulo=(
        "Pelo presente Instrumento Particular de Cessão de Direitos Autorais, celebram entre si:\n\n"
        "CEDENTE (AUTOR/CRIADOR): [NOME DO PROFISSIONAL], [nacionalidade], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "CESSIONÁRIA (ADQUIRENTE): [RAZÃO SOCIAL OU NOME DA EMPRESA], CNPJ/CPF [NÚMERO], com sede na [ENDEREÇO];\n\n"
        "Ajustam as cláusulas a seguir:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA CESSÃO TOTAL E DEFINITIVA",
            "1.1. O CEDENTE cede e transfere à CESSIONÁRIA, em caráter total, definitivo, irrevogável e irretratável, a integralidade dos direitos patrimoniais de autor sobre a obra intelectual consistente em: [DESCREVER OBRA: ex. logotipo, código de software, textos, ilustrações, fotografias]."
        ),
        (
            "CLÁUSULA SEGUNDA – DA ABRANGÊNCIA E EXPLORAÇÃO ECONÔMICA",
            "1.1. A CESSIONÁRIA poderá explorar economicamente a obra no Brasil e no exterior, por qualquer meio físico ou digital, inclusive modificando, comercializando e registrando o material sem necessidade de novas anuências ou pagamento de royalties adicionais."
        ),
        (
            "CLÁUSULA TERCEIRA – DO PREÇO DA CESSÃO",
            "3.1. A cessão é realizada pelo valor total e único de R$ [VALOR POR EXTENSO], pago nesta data, conferindo o CEDENTE quitação geral e definitiva por todos os direitos patrimoniais."
        )
    ],
    out_dir=out_dir
)

print("Módulo 2 (Contratos 12 a 20) gerado com sucesso!")
