import os
from contract_builder_core import build_docx_contract

out_dir = r"C:\Users\Alexandre\andrade-florio-web-recuperado\public\downloads"
os.makedirs(out_dir, exist_ok=True)

# -------------------------------------------------------------------------------------------------
# 46. CONTRATO DE ARRENDAMENTO RURAL (ESTATUTO DA TERRA)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="46_Contrato_Arrendamento_Rural_Estatuto_Terra.docx",
    title="Contrato de Arrendamento Rural para Exploração Agrícola ou Pecuária com Direito de Preferência",
    subtitle="Regulado pela Lei Federal nº 4.504/1964 (Estatuto da Terra) e Decreto Federal nº 59.566/1966",
    orientacao="O arrendamento rural transfere o uso temporário da terra mediante retribuição certa em dinheiro. O arrendatário goza de direito de preferência legal para aquisição do imóvel em igualdade de condições (art. 92, § 3º, Estatuto da Terra) e prazos mínimos legais de vigência (3 anos para lavouras temporárias).",
    preambulo=(
        "Pelo presente Instrumento Particular de Arrendamento Rural, celebram:\n\n"
        "ARRENDADOR(A): [NOME COMPLETO DO PROPRIETÁRIO], CPF nº [CPF], RG nº [RG], residente na [ENDEREÇO];\n\n"
        "ARRENDATÁRIO(A): [NOME COMPLETO DO PRODUTOR], CPF nº [CPF], RG nº [RG], residente na [ENDEREÇO];\n\n"
        "Têm entre si justo e contratado o que se segue:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO IMÓVEL RURAL E DESTINAÇÃO",
            "1.1. O ARRENDADOR cede em arrendamento ao ARRENDATÁRIO a área de [XX] hectares da Fazenda/Sítio denominado [NOME DA PROPRIEDADE], Matrícula nº [NÚMERO], CAR nº [NÚMERO DO CAR], situada no Município de [CIDADE/UF], destinada exclusivamente à exploração de [LAVOURA DE SOJA / MILHO / PECUÁRIA]."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PREÇO E PAGAMENTO",
            "2.1. O preço anual do arrendamento é fixado em R$ [VALOR EM REAIS] (ou o equivalente a [XX] sacas de soja de 60kg segundo cotação da data do vencimento), a ser liquidado todo dia [DATA DE VENCIMENTO] de cada ano agrícola."
        ),
        (
            "CLÁUSULA TERCEIRA – DO PRAZO LEGAL E DIREITO DE PREFERÊNCIA",
            "3.1. O prazo de vigência é de [3/5] anos agrícolas. Em caso de alienação do imóvel a terceiros, o ARRENDADOR obriga-se a notificar o ARRENDATÁRIO para exercer o direito de preferência no prazo legal de 30 dias (art. 92, § 3º do Estatuto da Terra)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 47. CONTRATO DE TRESPASSE (VENDA DE PONTO COMERCIAL / ESTABELECIMENTO)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="47_Contrato_Trespasse_Venda_Ponto_Comercial.docx",
    title="Contrato de Trespasse e Alienação de Estabelecimento Empresarial e Fundo de Comércio (Ponto Comercial)",
    subtitle="Regulado pelos Artigos 1.142 a 1.149 do Código Civil Brasileiro",
    orientacao="No trespasse, a alienação só produz efeitos perante terceiros após averbação na Junta Comercial. O alienante responde solidariamente pelas dívidas anteriores regularmente contabilizadas pelo prazo de 1 ano (art. 1.146 CC), sendo obrigatória a cláusula de não concorrência (art. 1.147 CC).",
    preambulo=(
        "Pelo presente Instrumento Particular de Trespasse de Estabelecimento Comercial, celebram:\n\n"
        "TRESPASSANTE (VENDEDOR): [RAZÃO SOCIAL DA EMPRESA], CNPJ nº [CNPJ], representada por [NOME DO SÓCIO];\n\n"
        "TRESPASSÁRIO (COMPRADOR): [RAZÃO SOCIAL OU NOME DO ADQUIRENTE], CNPJ/CPF nº [DOCUMENTO];\n\n"
        "Celebram o presente trespasse nas cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E ELEMENTOS DO ESTABELECIMENTO",
            "1.1. O presente instrumento tem por objeto a alienação definitiva do complexo de bens corpóreos e incorpóreos (fundo de comércio, ponto comercial, maquinários, instalações e carteira de clientes) do estabelecimento situado na [ENDEREÇO COMPLETO DO PONTO COMERCIAL], conforme inventário anexo."
        ),
        (
            "CLÁUSULA SEGUNDA – DA CLÁUSULA DE NÃO CONCORRÊNCIA",
            "2.1. Em consonância com o art. 1.147 do Código Civil, o ALIENANTE/TRESPASSANTE obriga-se a não fazer concorrência ao ADQUIRENTE no mesmo ramo de atividade econômica, em um raio de [XX] quilômetros, pelo prazo improrrogável de 05 (cinco) anos a contar desta data."
        ),
        (
            "CLÁUSULA TERCEIRA – DAS DÍVIDAS E DA REGULARIDADE NA JUNTA COMERCIAL",
            "3.1. O ADQUIRENTE responde pelos débitos anteriores à transferência desde que regularmente contabilizados no livro diário, continuando o devedor primitivo solidariamente obrigado pelo prazo de um ano (art. 1.146 CC)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 48. CONTRATO DE COMPROMISSO DE COMPRA E VENDA DE TERRENO / LOTE
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="48_Contrato_Compra_Venda_Terreno_Lote.docx",
    title="Instrumento Particular de Promessa de Compra e Venda de Terreno / Lote Urbano Parcelado",
    subtitle="Regulado pela Lei Federal nº 6.766/1979 (Parcelamento do Solo Urbano) e Artigos 462 a 466 do Código Civil",
    orientacao="A venda de lotes e terrenos urbanos exige comprovação de que o loteamento está devidamente registrado no Cartório de Imóveis (art. 37 da Lei 6.766/79 veda venda de loteamento não registrado). Cláusula de demarcação e posse imediata são fundamentais.",
    preambulo=(
        "Pelo presente Instrumento Particular de Compromisso de Compra e Venda de Lote de Terreno, celebram:\n\n"
        "PROMITENTE VENDEDOR: [NOME DO PROPRIETÁRIO], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "PROMISSÁRIO COMPRADOR: [NOME DO COMPRADOR], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "Ajustam as condições seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO LOTE E IDENTIFICAÇÃO TOPOGRÁFICA",
            "1.1. O VENDEDOR promete vender ao COMPRADOR o Lote de Terreno nº [NÚMERO], da Quadra nº [NÚMERO], do Loteamento denominado [NOME], situado na [ENDEREÇO], Matrícula nº [NÚMERO], com área total de [XX] metros quadrados, medindo [XX]m de frente por [XX]m de fundos."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PAGAMENTO PARCELADO E CLÁUSULA RESOLUTIVA",
            "2.1. O preço de R$ [VALOR TOTAL] será liquidado com entrada de R$ [ENTRADA] e o saldo em [XX] parcelas mensais corrigidas pelo IPCA. O atraso superior a 30 dias na parcela autoriza a rescisão com retenção de arras e indenização por fruição (art. 32-A da Lei 6.766/79)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 49. CONTRATO DE PERMUTA DE IMÓVEIS (COM OU SEM TORNA)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="49_Contrato_Permuta_Imoveis_com_ou_sem_Torna.docx",
    title="Contrato Particular de Permuta e Troca de Bens Imóveis com Composição de Torna Financeira",
    subtitle="Regulado pelo Artigo 533 e Artigos 481 e Seguintes do Código Civil Brasileiro",
    orientacao="Na permuta (troca), aplicam-se as disposições da compra e venda, com despesas de escritura rateadas igualmente entre as partes, salvo convenção em contrário. Se houver diferença de valores, estipula-se a 'torna' financeira em moeda corrente.",
    preambulo=(
        "Pelo presente Instrumento Particular de Permuta de Imóveis, comparecem:\n\n"
        "PRIMEIRO PERMUTANTE: [NOME], CPF nº [CPF], legítimo proprietário do Imóvel A;\n\n"
        "SEGUNDO PERMUTANTE: [NOME], CPF nº [CPF], legítimo proprietário do Imóvel B;\n\n"
        "Resolvem permutar entre si os referidos imóveis nas cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DOS IMÓVEIS OBJETO DA TROCA",
            "1.1. O PRIMEIRO PERMUTANTE cede e transfere o imóvel situado na [ENDEREÇO IMÓVEL A, MATRÍCULA X], avaliado em R$ [VALOR A].\n\n"
            "1.2. O SEGUNDO PERMUTANTE cede e transfere o imóvel situado na [ENDEREÇO IMÓVEL B, MATRÍCULA Y], avaliado em R$ [VALOR B]."
        ),
        (
            "CLÁUSULA SEGUNDA – DA TORNA FINANCEIRA E DESPESAS",
            "2.1. Havendo diferença de valor entre os imóveis de R$ [VALOR DA DIFERENÇA], o [SEGUNDO PERMUTANTE] pagará a título de 'torna' a referida quantia mediante transferência bancária na data da escritura.\n\n"
            "2.2. Cada permutante arcará com o ITBI e certidões relativas ao imóvel que passar a titularizar (art. 533, II CC)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 50. CESSÃO DE DIREITOS HEREDITÁRIOS (ART. 1.793 CC)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="50_Contrato_Cessao_Direitos_Hereditarios.docx",
    title="Instrumento Particular de Promessa de Cessão e Transferência de Direitos Hereditários",
    subtitle="Regulado pelo Artigo 1.793 e Seguintes do Código Civil Brasileiro (Antes da Partilha do Inventário)",
    orientacao="A cessão de direitos hereditários formaliza a transferência do quinhão hereditário antes da homologação da partilha no inventário. O herdeiro cedente responde pela existência do crédito da herança mas não pelo valor exato final.",
    preambulo=(
        "Pelo presente Instrumento Particular de Promessa de Cessão de Direitos Hereditários, comparecem:\n\n"
        "CEDENTE (HERDEIRO): [NOME COMPLETO], CPF nº [CPF], herdeiro legítimo do falecido [NOME DO DE CUJUS];\n\n"
        "CESSIONÁRIO: [NOME DO ADQUIRENTE], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "Ajustam as cláusulas a seguir:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO QUINHÃO E DIREITOS HEREDITÁRIOS",
            "1.1. O CEDENTE, na qualidade de sucessor legal nos autos do Inventário nº [NÚMERO DO PROCESSO / OU EXTRAJUDICIAL] em trâmite perante [VARA / CARTÓRIO], cede e transfere ao CESSIONÁRIO a totalidade de sua fração ideal nos bens deixados pelo falecido."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PREÇO E HABILITAÇÃO PROCESSUAL",
            "2.1. O preço certo da cessão é de R$ [VALOR EM REAIS], ficando o CESSIONÁRIO desde já autorizado a habilitar-se nos autos do inventário para adjudicar o respectivo quinhão (art. 1.793 do Código Civil)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 51. CONTRATO DE GAVETA BLINDADO (CESSÃO DE DIREITOS DE IMÓVEL FINANCIADO)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="51_Contrato_Gaveta_Cessao_Direitos_Imovel_Financiado.docx",
    title="Instrumento Particular de Cessão de Direitos Possessórios e Obrigações de Imóvel Financiado (Contrato de Gaveta)",
    subtitle="Com Previsão de Procuração Pública Irrevogável e Responsabilidade por Parcelas e Tributos",
    orientacao="O contrato de gaveta transfere a posse e a responsabilidade pelas parcelas de financiamento bancário perante as partes. Para ter segurança, o cedente deve outorgar procuração pública com poderes irrevogáveis para transferência futura perante o agente financeiro (Caixa, etc.).",
    preambulo=(
        "Pelo presente Instrumento Particular de Cessão de Direitos e Obrigações de Financiamento Imobiliário, celebram:\n\n"
        "CEDENTE: [NOME COMPLETO DO TITULAR DO FINANCIAMENTO], CPF nº [CPF];\n\n"
        "CESSIONÁRIO: [NOME COMPLETO DO COMPRADOR DE GAVETA], CPF nº [CPF];\n\n"
        "Ajustam as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO IMÓVEL E DO FINANCIAMENTO BANCÁRIO",
            "1.1. O CEDENTE é titular do Contrato de Financiamento Habitacional nº [NÚMERO], firmado perante a [CAIXA ECONÔMICA FEDERAL / BANCO], referente ao imóvel situado na [ENDEREÇO COMPLETO, MATRÍCULA X].\n\n"
            "1.2. Pelo presente, o CEDENTE cede ao CESSIONÁRIO todos os seus direitos aquisitivos e posse direta sobre o bem."
        ),
        (
            "CLÁUSULA SEGUNDA – DA ASSUNÇÃO DAS PRESTAÇÕES E IPTU",
            "2.1. O CESSIONÁRIO assume a obrigação inescusável de pagar tempestivamente todas as prestações vincendas do financiamento, taxas condominiais e IPTU diretamente perante o agente financeiro, respondendo por perdas e danos em caso de inadimplemento que gere restrição cadastral ao CEDENTE."
        ),
        (
            "CLÁUSULA TERCEIRA – DA PROCURAÇÃO EM CARÁTER IRREVOGÁVEL",
            "3.1. O CEDENTE outorga ao CESSIONÁRIO procuração pública em causa própria ou com poderes amplos e irrevogáveis para que este possa, liquidado o saldo devedor, obter a quitação e transferir a propriedade definitiva para o seu nome."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 52. CONTRATO DE HONORÁRIOS ADVOCATÍCIOS (COM ÊXITO / COTA LITIS)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="52_Contrato_Honorarios_Advocaticios_Quota_Litis.docx",
    title="Contrato de Prestação de Serviços Jurídicos e Honorários Advocatícios com Cláusula Quota Litis (Êxito)",
    subtitle="Regulado pela Lei Federal nº 8.906/1994 (Estatuto da OAB) e Código de Ética e Disciplina da OAB",
    orientacao="O contrato de honorários advocatícios constitui título executivo extrajudicial (art. 24 da Lei 8.906/94). A cláusula de êxito (quota litis) permite que parte dos honorários seja cobrada sobre a vantagem econômica auferida pelo cliente ao final da demanda.",
    preambulo=(
        "Pelo presente Instrumento de Contrato de Honorários Advocatícios, celebram:\n\n"
        "CONTRATANTE (CLIENTE): [NOME COMPLETO], CPF/CNPJ nº [DOCUMENTO], domiciliado na [ENDEREÇO];\n\n"
        "CONTRATADOS: [NOME DO ADVOGADO OU SOCIEDADE DE ADVOGADOS], inscrita na OAB/[UF] sob o nº [NÚMERO], com escritório profissional na [ENDEREÇO];\n\n"
        "Convencionam as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO DA ATUAÇÃO JURÍDICA",
            "1.1. O presente contrato tem por objeto a prestação de serviços jurídicos pelos CONTRATADOS para patrocinar os interesses do CONTRATANTE na [DESCREVER: Ação de Cobrança / Inventário / Defesa Trabalhista / Assessoria Tributária]."
        ),
        (
            "CLÁUSULA SEGUNDA – DOS HONORÁRIOS INICIAIS E DE ÊXITO (QUOTA LITIS)",
            "2.1. Ficam pactuados a título de honorários advocatícios contratuais:\n"
            "a) Honorários Iniciais / Pró-labore: R$ [VALOR] pagos no ato da contratação;\n"
            "b) Honorários de Êxito (Quota Litis): o percentual de [20%] incidente sobre o proveito econômico bruto auferido pelo cliente, quitado no momento do efetivo recebimento do crédito (art. 50 do Código de Ética da OAB).\n\n"
            "2.2. Os honorários de sucumbência arbitrados judicialmente pertencem exclusivamente aos advogados contratados (art. 23 do Estatuto da OAB)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 53. CONTRATO DE SUBLOCAÇÃO RESIDENCIAL OU COMERCIAL
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="53_Contrato_Sublocacao_Imovel_com_Autorizacao.docx",
    title="Instrumento Particular de Sublocação de Bem Imóvel com Anuência Expressa do Locador Proprietário",
    subtitle="Regulado pelos Artigos 14 a 16 e Artigo 21 da Lei Federal nº 8.245/1991 (Lei do Inquilinato)",
    orientacao="A sublocação é expressamente VEDADA sem autorização prévia e escrita do locador proprietário (art. 13 da Lei 8.245/91). O aluguel da sublocação não pode exceder o valor do aluguel principal (art. 21).",
    preambulo=(
        "Pelo presente Instrumento Particular de Sublocação, comparecem:\n\n"
        "SUBLOCADOR: [NOME DO INQUILINO PRINCIPAL], titular da locação originária;\n\n"
        "SUBLOCATÁRIO: [NOME DO SUBLOCATÁRIO], CPF nº [CPF];\n\n"
        "Com a interveniência anuente do LOCADOR PROPRIETÁRIO, celebram:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E AUTORIZAÇÃO ESCRITA",
            "1.1. O SUBLOCADOR cede em sublocação ao SUBLOCATÁRIO o imóvel (ou parte das dependências) situado na [ENDEREÇO], com a expressa anuência do proprietário, vigorando pelo prazo correspondente ao contrato principal."
        ),
        (
            "CLÁUSULA SEGUNDA – DO VALOR E RESPONSABILIDADE SUBSIDIÁRIA",
            "2.1. O subaluguel mensal será de R$ [VALOR], respeitado o limite legal do art. 21 da Lei 8.245/91.\n\n"
            "2.2. O SUBLOCATÁRIO responde subsidiariamente perante o proprietário pelo cumprimento dos encargos da locação (art. 16 da Lei do Inquilinato)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 54. COMPRA E VENDA COM RESERVA DE DOMÍNIO (ARTS. 521 A 528 CC)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="54_Contrato_Compra_Venda_Reserva_Dominio.docx",
    title="Contrato Particular de Compra e Venda de Bem Móvel ou Equipamento com Cláusula de Reserva de Domínio",
    subtitle="Regulado pelos Artigos 521 a 528 do Código Civil Brasileiro e Artigos 562 e Seguintes do CPC",
    orientacao="Na venda com reserva de domínio, o vendedor transfere a posse direta ao comprador mas RETÉM A PROPRIEDADE do bem até que o preço seja integralmente pago. Se o comprador inadimplir, o vendedor pode apreender judicialmente o bem de imediato.",
    preambulo=(
        "Pelo presente Instrumento Particular de Compra e Venda com Reserva de Domínio, celebram:\n\n"
        "VENDEDOR: [NOME / RAZÃO SOCIAL], CNPJ/CPF nº [DOCUMENTO];\n\n"
        "COMPRADOR: [NOME / RAZÃO SOCIAL], CNPJ/CPF nº [DOCUMENTO];\n\n"
        "Ajustam as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E DA RESERVA DE DOMÍNIO",
            "1.1. O VENDEDOR aliena ao COMPRADOR o seguinte bem: [DESCREVER EQUIPAMENTO / MÁQUINA / VEÍCULO, MARCA, CHASSI/SÉRIE].\n\n"
            "1.2. O VENDEDOR RESERVA PARA SI A PROPRIEDADE DO BEM ALIENADO (art. 521 do Código Civil), transferindo apenas a posse direta ao COMPRADOR, consolidando-se a propriedade plena somente após a quitação da última parcela."
        ),
        (
            "CLÁUSULA SEGUNDA – DO INADIMPLEMENTO E APREENSÃO JUDICIAL",
            "2.1. Em caso de atraso em qualquer das parcelas, o VENDEDOR poderá, após protesto do título, mover Ação de Apreensão e Depósito judicial do bem ou cobrar as prestações vencidas e vincendas (art. 525 e 526 do Código Civil)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 55. CONTRATO DE LOCAÇÃO POR TEMPORADA (ATÉ 90 DIAS)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="55_Contrato_Locacao_Temporada_Lei_Inquilinato.docx",
    title="Contrato de Locação de Imóvel Residencial para Fins de Temporada com Pagamento Antecipado",
    subtitle="Regulado pelos Artigos 48 a 50 da Lei Federal nº 8.245/1991 (Prazo Máximo de 90 Dias)",
    orientacao="A locação por temporada destina-se a lazer, férias ou cursos por prazo não superior a 90 dias. É a ÚNICA modalidade de locação imobiliária em que a lei permite exigir o pagamento integral do aluguel antecipado.",
    preambulo=(
        "Pelo presente Instrumento Particular de Locação por Temporada, celebram:\n\n"
        "LOCADOR: [NOME COMPLETO], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "LOCATÁRIO: [NOME COMPLETO], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "Ajustam as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO IMÓVEL E PRAZO IMPRORROGÁVEL",
            "1.1. O LOCADOR cede em locação para fins exclusivamente de TEMPORADA (lazer/férias) o imóvel mobiliado situado na [ENDEREÇO COMPLETO COM CEP], pelo prazo de [XX] dias, iniciando-se em [DATA/HORA CHECK-IN] e encerrando-se impreterivelmente em [DATA/HORA CHECK-OUT], quando o locatário desocupará o bem sem necessidade de aviso prévio."
        ),
        (
            "CLÁUSULA SEGUNDA – DO PAGAMENTO ADIANTADO E CAUÇÃO DE DANOS",
            "2.1. Em estrita conformidade com o art. 49 da Lei 8.245/91, o valor total do aluguel no montante de R$ [VALOR] é pago integralmente de forma antecipada pelo LOCATÁRIO.\n\n"
            "2.2. É prestada caução de R$ [VALOR] para garantia de eventuais avarias no mobiliário ou utensílios listados no laudo de vistoria."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 56. CONTRATO DE NAMORO (DECLARAÇÃO DE INEXISTÊNCIA DE UNIÃO ESTÁVEL)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="56_Contrato_Namoro_Declaracao_Inexistencia_Uniao_Estavel.docx",
    title="Instrumento Particular de Declaração de Relação de Namoro Qualificado e Inexistência de União Estável",
    subtitle="Fundamentado no Artigo 1.723 do Código Civil Brasileiro para Afastamento de Efeitos Sucessórios e Patrimoniais",
    orientacao="O contrato de namoro serve para comprovar formalmente que o relacionamento afetivo entre as partes não possui o objetivo contemporâneo de constituir família (animus constituendi familiae), impedindo pleitos judiciais de partilha de bens, pensão alimentícia ou herança decorrentes de união estável.",
    preambulo=(
        "Pelo presente Instrumento Particular de Declaração de Namoro, comparecem:\n\n"
        "PRIMEIRO(A) NAMORADO(A): [NOME COMPLETO], CPF nº [CPF], RG nº [RG], residente na [ENDEREÇO];\n\n"
        "SEGUNDO(A) NAMORADO(A): [NOME COMPLETO], CPF nº [CPF], RG nº [RG], residente na [ENDEREÇO];\n\n"
        "Declarando livremente o teor de sua convivência afetiva, pactuam:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DA NATUREZA DO RELACIONAMENTO (NAMORO)",
            "1.1. As partes reconhecem expressamente que mantêm relacionamento afetivo sob a modalidade estrita de NAMORO, compartilhando momentos de lazer e convivência sem o propósito contemporâneo, público e definitivo de constituir entidade familiar (animus familiae).\n\n"
            "1.2. O fato de eventuais pernoites ou viagens em conjunto não descaracteriza a condição de namorados independentes."
        ),
        (
            "CLÁUSULA SEGUNDA – DA INCOMUNICABILIDADE PATRIMONIAL ABSOLUTA",
            "2.1. As partes declaram que inexiste qualquer comunhão ou confusão patrimonial presente ou futura, permanecendo os bens adquiridos por cada qual sob exclusiva propriedade individual, renunciando a qualquer pleito de partilha, alimentos ou direitos sucessórios."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 57. CONTRATO DE CONSIGNAÇÃO DE VEÍCULO EM LOJA / GARAGEM (ART. 534 CC)
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="57_Contrato_Consignacao_Veiculo_Estimatorio.docx",
    title="Contrato Estimatório de Consignação de Veículo Automotor para Venda com Preço Mínimo",
    subtitle="Regulado pelos Artigos 534 a 537 do Código Civil Brasileiro",
    orientacao="No contrato estimatório (consignação), o proprietário entrega o veículo ao comerciante (loja/garagem), que se obriga a pagar o preço estimado ajustado ou restituir o automóvel intacto no prazo. O comerciante responde pelos riscos e deterioração do bem enquanto estiver em sua posse.",
    preambulo=(
        "Pelo presente Instrumento Particular de Consignação de Veículo Automotor, celebram:\n\n"
        "CONSIGNANTE (PROPRIETÁRIO): [NOME COMPLETO], CPF nº [CPF], proprietário do veículo;\n\n"
        "CONSIGNATÁRIO (ESTABELECIMENTO / LOJA): [RAZÃO SOCIAL DA LOJA / REVENDEDORA], CNPJ nº [CNPJ];\n\n"
        "Ajustam as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO VEÍCULO CONSIGNADO E PREÇO LÍQUIDO",
            "1.1. O CONSIGNANTE entrega em consignação o veículo Marca [MARCA], Modelo [MODELO], Ano [ANO], Placa [PLACA], Renavam [RENAVAM], Chassi [CHASSI], fixando o PREÇO LÍQUIDO MÍNIMO de R$ [VALOR LÍQUIDO] a ser repassado ao proprietário na venda."
        ),
        (
            "CLÁUSULA SEGUNDA – DA COMISSÃO, GUARDA E RISCOS (ART. 535 CC)",
            "2.1. O CONSIGNATÁRIO poderá vender o veículo por valor superior ao preço estimado, retendo o excedente como comissão de intermediação.\n\n"
            "2.2. O CONSIGNATÁRIO responde pela guarda, conservação, multas de trânsito e riscos de furto, roubo ou colisão do veículo enquanto este permanecer em suas dependências (art. 535 do Código Civil)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 58. CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE PEDREIRO / OBRAS
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="58_Contrato_Prestacao_Servicos_Pedreiro_Construcao.docx",
    title="Contrato de Prestação de Serviços de Alvenaria, Construção Civil e Mão de Obra de Pedreiro",
    subtitle="Regulado pelos Artigos 593 a 609 do Código Civil com Pagamento por Medição e Etapas Concluídas",
    orientacao="A prestação de serviços de pedreiro deve vincular os pagamentos à conclusão e aprovação de etapas físicas da obra (ex: fundação, alvenaria, cobertura, reboco, acabamento). O profissional autônomo responde pela qualidade técnica da execução e reparação de defeitos.",
    preambulo=(
        "Pelo presente Instrumento Particular de Prestação de Serviços de Mão de Obra de Construção, celebram:\n\n"
        "CONTRATANTE: [NOME DO PROPRIETÁRIO DA OBRA], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "CONTRATADO (PEDREIRO / MESTRE DE OBRAS): [NOME DO PROFISSIONAL AUTÔNOMO], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "Ajustam as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO ESCOPO DA OBRA E ETAPAS",
            "1.1. O CONTRATADO executará os serviços de alvenaria e construção civil no imóvel situado na [ENDEREÇO DA OBRA], compreendendo as etapas de [FUNDAÇÃO / PAREDES / PISOS / REBOCO], conforme cronograma anexo."
        ),
        (
            "CLÁUSULA SEGUNDA – DOS PAGAMENTOS POR ETAPA CONCLUÍDA",
            "2.1. O valor total de R$ [VALOR TOTAL] será pago em parcelas liberadas estritamente após a conclusão e vistoria aprovada de cada etapa da obra, sendo vedado adiantamento financeiro sem avanço físico correspondente."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 59. CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE FOTOGRAFIA E EVENTOS
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="59_Contrato_Servicos_Fotografia_Cobertura_Eventos.docx",
    title="Contrato de Prestação de Serviços Fotográficos, Cobertura de Evento e Licença de Uso de Imagem",
    subtitle="Regulado pela Lei Federal nº 9.610/1998 (Direitos Autorais) e Código Civil Brasileiro",
    orientacao="O contrato de fotografia deve fixar a quantidade mínima de imagens tratadas, prazos de entrega do material digital e delimitar a cessão dos direitos autorais para fins pessoais do cliente e uso em portfólio profissional pelo fotógrafo.",
    preambulo=(
        "Pelo presente Instrumento Particular de Prestação de Serviços Fotográficos, celebram:\n\n"
        "CONTRATANTE: [NOME DO CLIENTE], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "CONTRATADO (FOTÓGRAFO): [NOME DO PROFISSIONAL / ESTÚDIO], CNPJ/CPF nº [DOCUMENTO];\n\n"
        "Ajustam as cláusulas seguintes:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO EVENTO E QUANTITATIVO DE FOTOS",
            "1.1. O FOTÓGRAFO realizará a cobertura fotográfica do evento [CASAMENTO / ANIVERSÁRIO / FORMATURA / ENSAIO], no dia [DATA] no local [ENDEREÇO DO EVENTO], com carga horária de [XX] horas.\n\n"
            "1.2. O material final compreenderá no mínimo [XX] fotografias em alta resolução, tratadas digitalmente e disponibilizadas via galeria online protegida por senha em até [30] dias."
        ),
        (
            "CLÁUSULA SEGUNDA – DOS DIREITOS AUTORAIS E PORTFÓLIO",
            "2.1. O CONTRATANTE recebe licença ampla de uso pessoal e reprodução das imagens. Fica o FOTÓGRAFO autorizado a divulgar as imagens em seu portfólio profissional e redes sociais para demonstração técnica de trabalho (art. 49 da Lei 9.610/98)."
        )
    ],
    out_dir=out_dir
)

# -------------------------------------------------------------------------------------------------
# 60. CONTRATO DE PERSONAL TRAINER E CONSULTORIA FITNESS
# -------------------------------------------------------------------------------------------------
build_docx_contract(
    filename="60_Contrato_Personal_Trainer_Consultoria_Fitness.docx",
    title="Contrato de Prestação de Serviços de Treinamento Físico Individualizado (Personal Trainer)",
    subtitle="Em Cumprimento à Lei Federal nº 9.696/1998 (Regulamentação da Educação Física) e Código Civil",
    orientacao="O contrato de Personal Trainer deve exigir atestado de aptidão médica prévia (PAR-Q) do aluno, estabelecer regras para cancelamento de aulas com antecedência mínima de 24 horas e delimitar as responsabilidades sobre riscos de lesão física.",
    preambulo=(
        "Pelo presente Instrumento Particular de Prestação de Serviços de Personal Trainer, celebram:\n\n"
        "CONTRATANTE (ALUNO): [NOME DO ALUNO], CPF nº [CPF], residente na [ENDEREÇO];\n\n"
        "PERSONAL TRAINER (PROFISSIONAL): [NOME DO PROFISSIONAL], CREF nº [NÚMERO DO CREF], CPF nº [CPF];\n\n"
        "Ajustam as seguintes cláusulas:"
    ),
    clausulas=[
        (
            "CLÁUSULA PRIMEIRA – DO OBJETO E FREQUÊNCIA DOS TREINOS",
            "1.1. O CONTRATADO ministrará sessões individualizadas de treinamento físico e condicionamento, na frequência de [XX] sessões semanais com duração de [60] minutos cada, em local previamente acordado (academia, condomínio ou ao ar livre)."
        ),
        (
            "CLÁUSULA SEGUNDA – DO CANCELAMENTO DE AULAS E ATESTADO MÉDICO",
            "2.1. O ALUNO poderá remarcar aulas avisando com no mínimo 24 (vinte e quatro) horas de antecedência. Cancelamentos em prazo inferior serão considerados como aula realizada e cobrada normalmente.\n\n"
            "2.2. O ALUNO declara sob sua responsabilidade possuir aptidão médica para a prática esportiva, apresentando atestado médico prévio de capacitação cardiovascular."
        )
    ],
    out_dir=out_dir
)

print("Módulo de Expansão B (Contratos 46 a 60) gerado com sucesso!")
