import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn
import os

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    tcPr.append(parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>'))

def add_header(doc, title, subtitle):
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_title = p_title.add_run(title.upper())
    run_title.font.name = 'Arial'
    run_title.font.size = Pt(14)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(26, 44, 76) # Dark Navy
    
    if subtitle:
        p_sub = doc.add_paragraph()
        p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run_sub = p_sub.add_run(subtitle)
        run_sub.font.name = 'Arial'
        run_sub.font.size = Pt(10)
        run_sub.font.italic = True
        run_sub.font.color.rgb = RGBColor(100, 100, 100)
    
    doc.add_paragraph() # Spacer

def add_callout(doc, text):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    cell = table.cell(0, 0)
    cell.width = Inches(6.5)
    set_cell_background(cell, "F4F5F7")
    
    p = cell.paragraphs[0]
    p.paragraph_format.left_indent = Inches(0.15)
    p.paragraph_format.right_indent = Inches(0.15)
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(6)
    
    run = p.add_run("💡 NOTA TÉCNICA DO ADVOGADO: " + text)
    run.font.name = 'Arial'
    run.font.size = Pt(9.5)
    run.font.color.rgb = RGBColor(180, 130, 20) # Gold/Amber
    run.font.bold = True
    doc.add_paragraph()

def add_clause(doc, number_title, text, lawyer_note=None):
    p_title = doc.add_paragraph()
    p_title.paragraph_format.space_before = Pt(10)
    p_title.paragraph_format.space_after = Pt(3)
    run_t = p_title.add_run(number_title)
    run_t.font.name = 'Arial'
    run_t.font.size = Pt(11)
    run_t.font.bold = True
    run_t.font.color.rgb = RGBColor(26, 44, 76)
    
    p_text = doc.add_paragraph()
    p_text.paragraph_format.space_before = Pt(0)
    p_text.paragraph_format.space_after = Pt(6)
    p_text.paragraph_format.line_spacing = 1.15
    run_b = p_text.add_run(text)
    run_b.font.name = 'Arial'
    run_b.font.size = Pt(10.5)
    run_b.font.color.rgb = RGBColor(40, 40, 40)
    
    if lawyer_note:
        add_callout(doc, lawyer_note)

def create_compra_venda():
    doc = docx.Document()
    add_header(doc, "Instrumento Particular de Promessa de Compra e Venda de Imóvel com Arras e Cláusula Resolutiva Expressa", 
               "Acervo de Segurança Contratual • Minuta Editável e Comentada")
    
    add_callout(doc, "Antes de assinar este instrumento ou pagar o sinal (arras), é OBRIGATÓRIA a obtenção da Matrícula Atualizada com Certidão de Ônus Reais vintenária no Cartório de Registro de Imóveis (CRI), além das certidões cíveis e de débitos fiscais do Vendedor.")
    
    doc.add_heading("DAS PARTES CONTRATANTES", level=2)
    doc.add_paragraph(
        "VENDEDOR(A): [NOME COMPLETO DO VENDEDOR], [nacionalidade], [estado civil - se casado, qualificar cônjuge e regime de bens], "
        "[profissão], portador(a) da Cédula de Identidade RG nº [NÚMERO], inscrito(a) no CPF/MF sob o nº [NÚMERO], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP], doravante denominado(a) simplesmente VENDEDOR.\n\n"
        "COMPRADOR(A): [NOME COMPLETO DO COMPRADOR], [nacionalidade], [estado civil - se casado, qualificar cônjuge], "
        "[profissão], portador(a) da Cédula de Identidade RG nº [NÚMERO], inscrito(a) no CPF/MF sob o nº [NÚMERO], residente e domiciliado(a) na [ENDEREÇO COMPLETO COM CEP], doravante denominado(a) simplesmente COMPRADOR."
    )
    
    add_clause(doc, "CLÁUSULA PRIMEIRA – DO OBJETO DO CONTRATO",
        "O presente instrumento tem por objeto a promessa de compra e venda irrevogável e irretratável do bem imóvel situado na [ENDEREÇO COMPLETO DO IMÓVEL, BAIRRO, CIDADE, ESTADO, CEP], com área total de [ÁREA] m², devidamente matriculado sob o nº [NÚMERO DA MATRÍCULA] perante o [NÚMERO DO OFÍCIO] Cartório de Registro de Imóveis da Comarca de [CIDADE/UF], com inscrição municipal de IPTU nº [NÚMERO DO IPTU].\n"
        "Parágrafo Único: O imóvel será entregue completamente livre e desembaraçado de quaisquer dúvidas, dívidas, hipotecas, penhoras, litígios judiciais, tributos, condomínio ou gravames de qualquer natureza até a data da transmissão da posse.")
    
    add_clause(doc, "CLÁUSULA SEGUNDA – DO PREÇO E CONDIÇÕES DE PAGAMENTO",
        "O preço total, certo e ajustado para a compra e venda do imóvel acima descrito é de R$ [VALOR TOTAL POR EXTENSO], a ser pago pelo COMPRADOR nas seguintes condições:\n"
        "a) SINAL E PRINCÍPIO DE PAGAMENTO (ARRAS): R$ [VALOR POR EXTENSO], pago nesta data através de [Transferência Bancária PIX / TED para a conta de titularidade do Vendedor: Banco [NOME], Agência [Nº], Conta [Nº], Chave Pix [CHAVE]], servindo o comprovante como recibo de quitação deste sinal;\n"
        "b) PARCELA RESTANTE / SALDO FINAL: O valor de R$ [VALOR DO SALDO POR EXTENSO] será pago [à vista no ato da lavratura da Escritura Pública Definitiva / mediante liberação de financiamento bancário habitacional obtido junto ao agente financeiro no prazo máximo de [30/60] dias].",
        "As arras aqui pactuadas têm natureza confirmatória (Art. 417 do Código Civil). Se o COMPRADOR desistir, perde o sinal em favor do Vendedor. Se o VENDEDOR der causa ao desfazimento, restituirá o sinal em dobro acrescido de atualização monetária.")

    add_clause(doc, "CLÁUSULA TERCEIRA – DA POSSE E DA TRANSMISSÃO DEFINITIVA",
        "A posse direta do imóvel será transferida ao COMPRADOR na data de [DATA OU CONDIÇÃO - EX: quitação integral do preço / compensação do sinal], momento no qual o VENDEDOR entregará as respectivas chaves, facultando ao COMPRADOR o direito de uso, gozo e livre disposição do bem.")
        
    add_clause(doc, "CLÁUSULA QUARTA – DA CLÁUSULA RESOLUTIVA EXPRESSA (ART. 474 DO CC)",
        "O inadimplemento culposo de quaisquer das parcelas ou a falta de pagamento do saldo final ajustado na Cláusula Segunda ensejará a imediata resolução de pleno direito deste contrato, mediante prévia notificação extrajudicial com prazo de 15 (quinze) dias para purga da mora, sem prejuízo da retenção das arras e apuração de perdas e danos.",
        "A cláusula resolutiva expressa é fundamental para proteger o Vendedor contra inadimplência: sem ela, o proprietário muitas vezes precisa entrar com uma ação judicial de rescisão de 3 a 5 anos antes de poder vender o imóvel para outro.")

    add_clause(doc, "CLÁUSULA QUINTA – DAS CERTIDÕES E GARANTIA JURÍDICA",
        "O VENDEDOR obriga-se a apresentar, no prazo de [15/30] dias a contar da assinatura deste contrato e às suas expensas, as certidões negativas de: a) Feitos ajuizados cíveis, executivos fiscais e trabalhistas; b) Débitos fiscais federais, estaduais e municipais; c) Quitação condominial emitida pelo síndico; d) Matrícula atualizada com certidão de ônus e ações reipersecutórias.\n"
        "Parágrafo Único: Caso seja apontada qualquer certidão positiva capaz de comprometer a segurança da aquisição ou ensejar risco de fraude contra credores/execução, o COMPRADOR poderá rescindir de imediato este contrato, com a devolução integral de todo e qualquer valor pago, sem ônus.")

    add_clause(doc, "CLÁUSULA SEXTA – DAS DESPESAS CARTORÁRIAS E TRIBUTÁRIAS",
        "Todas as despesas relativas à transferência definitiva do imóvel, tais como Imposto de Transmissão de Bens Imóveis (ITBI), custas e emolumentos de Cartório de Notas para a Escritura Pública e registro perante o Cartório de Imóveis, correrão exclusivamente por conta do COMPRADOR.")

    add_clause(doc, "CLÁUSULA SÉTIMA – DO FORO",
        "Para dirimir quaisquer controvérsias oriundas do presente instrumento, as partes elegem expressamente o Foro da Comarca de [CIDADE DA SITUAÇÃO DO IMÓVEL/ESTADO], com renúncia expressa a qualquer outro, por mais privilegiado que seja.\n\n"
        "E, por estarem justas e contratadas, firmam o presente instrumento em 02 (duas) vias de igual teor e forma, perante 02 (duas) testemunhas instrumentárias.")
        
    doc.add_paragraph("\n[CIDADE/UF], [DIA] de [MÊS] de 202[X].\n\n")
    doc.add_paragraph("_________________________________________\nVENDEDOR(A) / CÔNJUGE\n\n_________________________________________\nCOMPRADOR(A) / CÔNJUGE\n\n")
    doc.add_paragraph("TESTEMUNHAS:\n1. Nome: ____________________ CPF: ______________\n2. Nome: ____________________ CPF: ______________")
    
    return doc

def create_locacao():
    doc = docx.Document()
    add_header(doc, "Contrato de Locação Residencial / Comercial com Garantia e Vistoria", 
               "Acervo de Segurança Contratual • Minuta Editável e Comentada")
    
    add_callout(doc, "Em contratos de aluguel regidos pela Lei do Inquilinato (Lei nº 8.245/91), é expressamente PROIBIDO exigir mais de uma modalidade de garantia para o mesmo contrato (ex: pedir fiador E caução ao mesmo tempo constitui contravenção penal). Escolha apenas UMA garantia na Cláusula Quarta.")
    
    doc.add_heading("QUALIFICAÇÃO DAS PARTES", level=2)
    doc.add_paragraph(
        "LOCADOR(A): [NOME COMPLETO], [nacionalidade], [estado civil], [profissão], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO COMPLETO], doravante denominado simplesmente LOCADOR.\n\n"
        "LOCATÁRIO(A): [NOME COMPLETO], [nacionalidade], [estado civil], [profissão], RG nº [RG], CPF nº [CPF], doravante denominado simplesmente LOCATÁRIO."
    )
    
    add_clause(doc, "CLÁUSULA PRIMEIRA – DO OBJETO E DESTINAÇÃO",
        "O presente contrato tem por objeto a locação do imóvel localizado na [ENDEREÇO COMPLETO, BAIRRO, CIDADE, ESTADO, CEP], destinando-se [EXCLUSIVAMENTE PARA FINS RESIDENCIAIS / PARA FINS COMERCIAIS], sendo vedada a mudança de destinação, empréstimo, cessão ou sublocação total ou parcial sem o consentimento prévio e por escrito do LOCADOR.")
        
    add_clause(doc, "CLÁUSULA SEGUNDA – DO PRAZO DA LOCAÇÃO",
        "O prazo de locação é de [30 (trinta) meses / 12 (doze) meses], iniciando-se em [DATA DE INÍCIO] e terminando em [DATA DE TÉRMINO], data em que o LOCATÁRIO se obriga a restituir o imóvel completamente desocupado e nas mesmas condições em que o recebeu.\n"
        "Parágrafo Único: Findo o prazo estipulado, se o LOCATÁRIO continuar na posse do imóvel por mais de 30 (trinta) dias sem oposição do LOCADOR, presumir-se-á prorrogada a locação por tempo indeterminado.")
        
    add_clause(doc, "CLÁUSULA TERCEIRA – DO VALOR DO ALUGUEL E REAJUSTE",
        "O aluguel mensal inicial é fixado em R$ [VALOR POR EXTENSO], a ser pago impreterivelmente até o dia [DIA DO VENCIMENTO] de cada mês subsequente ao vencido, mediante [PIX / Depósito bancário / Boleto bancário].\n"
        "§ 1º: O atraso no pagamento acarretará multa moratória de 10% (dez por cento) sobre o valor do débito, juros moratórios de 1% (um por cento) ao mês e correção monetária pelo [IPCA/IBGE ou IGP-M/FGV].\n"
        "§ 2º: O valor do aluguel será reajustado anualmente com base na variação acumulada do [IPCA ou IGP-M], ou por outro índice oficial que venha a substituí-lo em caso de extinção.")

    add_clause(doc, "CLÁUSULA QUARTA – DA GARANTIA LOCATÍCIA (ESCOLHA UMA OPÇÃO)",
        "[OPÇÃO 1 - CAUÇÃO EM DINHEIRO]: Para garantia fiel das obrigações contraídas neste contrato, o LOCATÁRIO deposita, a título de caução, a quantia equivalente a [3 (três)] meses de aluguel, totalizando R$ [VALOR], que será devolvida ao término da locação após a vistoria final e quitação de eventuais débitos.\n\n"
        "[OPÇÃO 2 - FIADOR]: Assina também este contrato, na condição de FIADOR e principal pagador, com renúncia expressa ao benefício de ordem (Art. 827 do CC): [NOME DO FIADOR], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO], proprietário do imóvel matriculado sob o nº [MATRÍCULA] no CRI de [COMARCA].\n\n"
        "[OPÇÃO 3 - SEGURO FIANÇA]: A locação é garantida por Apólice de Seguro Fiança Locatícia contratada pelo LOCATÁRIO junto à seguradora [NOME DA SEGURADORA], Apólice nº [NÚMERO], cobrindo aluguéis, encargos e danos ao imóvel.",
        "Dica Prática: A caução em dinheiro em conta poupança conjunta ou depósito direto é a modalidade mais rápida para fechar negócios com inquilinos no mesmo dia sem burocracia de fiador.")

    add_clause(doc, "CLÁUSULA QUINTA – DOS ENCARGOS, TRIBUTOS E CONDOMÍNIO",
        "Além do aluguel, correrão por conta exclusiva do LOCATÁRIO durante a vigência da locação: despesas de consumo de água, energia elétrica, gás canalizado, taxa de condomínio ordinária e o IPTU proporcional.")
        
    add_clause(doc, "CLÁUSULA SEXTA – DA VISTORIA E BENFEITORIAS",
        "O imóvel é entregue nas condições descritas no Laudo de Vistoria de Entrada anexo a este instrumento, contendo registro fotográfico assinado pelas partes. Qualquer benfeitoria necessária, útil ou voluptuária dependerá de prévia autorização escrita do LOCADOR e não gerará direito de retenção ou indenização.")
        
    add_clause(doc, "CLÁUSULA SÉTIMA – DA MULTA RESCISÓRIA PROPORCIONAL",
        "Fica estipulada a multa rescisória equivalente a 03 (três) meses de aluguel para a parte que infringir qualquer cláusula deste contrato. Se a desocupação for solicitada pelo LOCATÁRIO antes do termo final, a multa será cobrada de forma estritamente proporcional ao tempo restante de cumprimento do contrato, nos termos do Art. 4º da Lei nº 8.245/91.")

    add_clause(doc, "CLÁUSULA OITAVA – DO FORO",
        "Fica eleito o Foro da Comarca de [CIDADE/UF DO IMÓVEL] para dirimir toda e qualquer questão judicial decorrente deste pacto.")
        
    doc.add_paragraph("\n[CIDADE/UF], [DIA] de [MÊS] de 202[X].\n\n")
    doc.add_paragraph("_________________________________________\nLOCADOR(A)\n\n_________________________________________\nLOCATÁRIO(A)\n\n_________________________________________\nFIADOR(A) (SE HOUVER)")
    return doc

def create_comodato():
    doc = docx.Document()
    add_header(doc, "Contrato de Comodato de Bem Imóvel com Cláusula Anti-Usucapião Expressa", 
               "Acervo de Segurança Contratual • Minuta Editável e Comentada")
    
    add_callout(doc, "ALERTA MÁXIMO DE SEGURANÇA PATRIMONIAL: Emprestar imóvel 'de boca' para parentes, caseiros ou terceiros é a causa nº 1 de perda de patrimônio por Usucapião no Brasil. Este contrato formaliza juridicamente que a posse é PRECÁRIA por ato de mera tolerância (Art. 1.208 do CC), destruindo qualquer alegação de ânimo de dono (animus domini).")
    
    doc.add_heading("QUALIFICAÇÃO DAS PARTES", level=2)
    doc.add_paragraph(
        "COMODANTE (PROPRIETÁRIO): [NOME COMPLETO], [nacionalidade], [estado civil], [profissão], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO COMPLETO], legítimo proprietário e titular do domínio do imóvel.\n\n"
        "COMODATÁRIO (BENEFICIÁRIO): [NOME COMPLETO], [nacionalidade], [estado civil], [profissão], RG nº [RG], CPF nº [CPF], doravante denominado simplesmente COMODATÁRIO."
    )
    
    add_clause(doc, "CLÁUSULA PRIMEIRA – DO OBJETO E NATUREZA GRATUITA",
        "O presente contrato tem por objeto o empréstimo gratuito (comodato) do imóvel residencial/rural de propriedade do COMODANTE, situado na [ENDEREÇO COMPLETO], matriculado sob o nº [MATRÍCULA] perante o CRI de [CIDADE/UF].\n"
        "Parágrafo Único: O presente empréstimo é realizado a título estritamente gratuito, sem qualquer cobrança pecuniária ou contraprestação onerosa pelo uso.")
        
    add_clause(doc, "CLÁUSULA SEGUNDA – DA POSSE PRECÁRIA E CLÁUSULA ANTI-USUCAPIÃO (ART. 1.208 DO CC)",
        "O COMODATÁRIO declara expressamente ter plena ciência de que sua permanência e ocupação no imóvel decorrem de mera permissão e tolerância do COMODANTE, possuindo natureza de POSSE PRECÁRIA (fâmulo da posse/detenção).\n"
        "§ 1º: Fica expressamente vedada e juridicamente ineficaz qualquer pretensão do COMODATÁRIO de pleitear a aquisição originária do imóvel por meio de USUCAPIÃO (extrajudicial ou judicial), reconhecendo a posse mansa, pacífica e exclusiva do COMODANTE sobre o domínio.\n"
        "§ 2º: O COMODATÁRIO obriga-se a não alterar as características essenciais do imóvel nem transferir a posse a outrem, mantendo a destinação original.",
        "Esta cláusula é o escudo supremo do proprietário: o Art. 1.208 do Código Civil determina expressamente que 'Não induzem posse os atos de mera permissão ou tolerância'. Ter isso assinado e com firma reconhecida encerra sumariamente qualquer tentativa de usucapião.")

    add_clause(doc, "CLÁUSULA TERCEIRA – DO PRAZO E NOTIFICAÇÃO PARA DESOCUPAÇÃO",
        "O presente comodato vigerá pelo prazo de [XX] meses, com início em [DATA] e encerramento em [DATA].\n"
        "Parágrafo Único: O COMODANTE poderá requerer a restituição do imóvel a qualquer tempo, mesmo antes do termo final, mediante simples notificação prévia (por carta registrada, Cartório de Notificações ou correio eletrônico/WhatsApp) com prazo improrrogável de 30 (trinta) dias para a integral desocupação.")
        
    add_clause(doc, "CLÁUSULA QUARTA – DO ALUGUEL-PENA POR ATRASO (ART. 582 DO CC)",
        "Caso o COMODATÁRIO não restitua o imóvel na data estipulada ou após o decurso do prazo da notificação, ficará automaticamente constituído em mora, incidindo multa diária e aluguel-pena mensal no valor de R$ [VALOR POR EXTENSO - EX: R$ 2.000,00] por todo o período que mantiver a posse indevida, além de responder por quaisquer perdas e danos e ação de reintegração de posse.")
        
    add_clause(doc, "CLÁUSULA QUINTA – DA MANUTENÇÃO, ENCARGOS E BENFEITORIAS",
        "O COMODATÁRIO obriga-se a manter o imóvel em perfeito estado de conservação e limpeza, arcando pontualmente com todas as despesas decorrentes de sua ocupação, incluindo tarifas de água, energia elétrica, gás e despesas ordinárias.\n"
        "Parágrafo Único: Nenhuma obra, reforma ou benfeitoria (útil ou necessária) poderá ser realizada sem autorização prévia por escrito do COMODANTE, ficando desde já ajustado que as benfeitorias incorporadas não darão direito a qualquer indenização ou retenção do imóvel.")

    add_clause(doc, "CLÁUSULA SEXTA – DO FORO",
        "Fica eleito o Foro da Comarca de [CIDADE/UF DO IMÓVEL] para processar e julgar quaisquer ações relativas a este contrato.")
        
    doc.add_paragraph("\n[CIDADE/UF], [DIA] de [MÊS] de 202[X].\n\n")
    doc.add_paragraph("_________________________________________\nCOMODANTE (PROPRIETÁRIO)\n\n_________________________________________\nCOMODATÁRIO\n\n")
    doc.add_paragraph("TESTEMUNHAS:\n1. Nome: ____________________ CPF: ______________\n2. Nome: ____________________ CPF: ______________")
    return doc

def create_prestacao_servicos():
    doc = docx.Document()
    add_header(doc, "Contrato de Prestação de Serviços Técnicos / Autônomos com Blindagem Trabalhista", 
               "Acervo de Segurança Contratual • Minuta Editável e Comentada")
    
    add_callout(doc, "BLINDAGEM TRABALHISTA ESSENCIAL: Para que um contrato com prestador autônomo (PJ ou PF) não gere passivo trabalhista na Justiça do Trabalho, é crucial demonstrar a ausência dos requisitos do Art. 3º da CLT (especialmente subordinação jurídica, controle estrito de horário e pessoalidade). Esta minuta foi estruturada para afastar presunções de subordinação.")
    
    doc.add_heading("DAS PARTES", level=2)
    doc.add_paragraph(
        "CONTRATANTE: [NOME OU RAZÃO SOCIAL], [CNPJ/CPF nº], com sede/domicílio na [ENDEREÇO COMPLETO], representada neste ato na forma de seus atos constitutivos por [NOME DO REPRESENTANTE LEGAL].\n\n"
        "CONTRATADA (PRESTADORA): [NOME OU RAZÃO SOCIAL], [CNPJ/CPF nº], com sede/domicílio na [ENDEREÇO COMPLETO], doravante denominada simplesmente CONTRATADA."
    )
    
    add_clause(doc, "CLÁUSULA PRIMEIRA – DO OBJETO E ESCOPO DOS SERVIÇOS",
        "O presente contrato tem por objeto a prestação, pela CONTRATADA à CONTRATANTE, dos seguintes serviços profissionais especializados: [DESCREVER DETALHADAMENTE O ESCOPO DOS SERVIÇOS E ENTREGÁVEIS].\n"
        "Parágrafo Único: A prestação de serviços se limita estritamente ao escopo previsto nesta cláusula, sendo que quaisquer serviços adicionais deverão ser objeto de aditivo contratual escrito e orçamento prévio.")
        
    add_clause(doc, "CLÁUSULA SEGUNDA – DA AUTONOMIA TÉCNICA E AUSÊNCIA DE VÍNCULO EMPREGATÍCIO",
        "A CONTRATADA executará suas atividades com total autonomia técnica, operacional e de horários, sem qualquer tipo de subordinação jurídica, pessoalidade obrigatória ou controle de jornada por parte da CONTRATANTE.\n"
        "§ 1º: A CONTRATADA poderá prestar serviços a outros clientes e empresas simultaneamente, não existindo qualquer cláusula de exclusividade, salvo disposição expressa de sigilo profissional.\n"
        "§ 2º: As partes reconhecem expressamente a natureza estritamente civil e comercial deste pacto, declarando a inocorrência de relação de emprego sob a égide da Consolidação das Leis do Trabalho (CLT).",
        "Esta cláusula é vital: ela documenta a autonomia e afasta as alegações típicas de vínculo empregatício em eventuais reclamações trabalhistas futuras.")

    add_clause(doc, "CLÁUSULA TERCEIRA – DO PREÇO, FORMA DE PAGAMENTO E NOTAS FISCAIS",
        "Pelos serviços contratados, a CONTRATANTE pagará à CONTRATADA o valor de R$ [VALOR POR EXTENSO], a ser pago na seguinte condição: [à vista / em [X] parcelas de R$ [VALOR] todo dia [XX] / conforme medição de entregáveis].\n"
        "§ 1º: O pagamento será efetuado mediante a apresentação prévia da respectiva Nota Fiscal de Prestação de Serviços emitida pela CONTRATADA.\n"
        "§ 2º: O atraso injustificado no pagamento ensejará a incidência de multa moratória de 2% (dois por cento) sobre o valor da fatura em atraso, além de juros de mora de 1% ao mês e atualização monetária.")
        
    add_clause(doc, "CLÁUSULA QUARTA – DAS OBRIGAÇÕES DAS PARTES",
        "A CONTRATADA obriga-se a fornecer mão de obra qualificada e recolher tempestivamente todos os encargos tributários e previdenciários devidos por sua atividade.\n"
        "A CONTRATANTE obriga-se a fornecer todas as informações, acessos e subsídios necessários à boa execução dos serviços ajustados.")
        
    add_clause(doc, "CLÁUSULA QUINTA – DO PRAZO E RESCISÃO IMOTIVADA",
        "Este contrato vigorará pelo prazo de [XX] meses a contar da data de sua assinatura. Qualquer das partes poderá rescindi-lo imotivadamente a qualquer tempo, mediante aviso prévio formal e escrito com antecedência mínima de 30 (trinta) dias, sem incidência de multa compensatória, quitando-se proporcionalmente os serviços até então executados.")

    add_clause(doc, "CLÁUSULA SEXTA – DO SIGILO E CONFIDENCIALIDADE (NDA)",
        "As partes comprometem-se a manter sob sigilo absoluto todas as informações técnicas, comerciais, financeiras e estratégicas a que tiverem acesso em virtude deste contrato, sob pena de responsabilização civil por perdas e danos.")

    add_clause(doc, "CLÁUSULA SÉTIMA – DO FORO",
        "As partes elegem o Foro da Comarca de [CIDADE/UF] para dirimir quaisquer litígios oriundos deste contrato.")
        
    doc.add_paragraph("\n[CIDADE/UF], [DIA] de [MÊS] de 202[X].\n\n")
    doc.add_paragraph("_________________________________________\nCONTRATANTE\n\n_________________________________________\nCONTRATADA\n\n")
    doc.add_paragraph("TESTEMUNHAS:\n1. Nome: ____________________ CPF: ______________\n2. Nome: ____________________ CPF: ______________")
    return doc

def create_guia_riscos_order_bump():
    doc = docx.Document()
    add_header(doc, "Guia de Alerta de Riscos e Cláusulas Nulas: Como Blindar Negócios Imobiliários e Comerciais", 
               "Acervo Andrade & Florio • Material de Apoio Estratégico (Order Bump)")
    
    doc.add_heading("INTRODUÇÃO: POR QUE 68% DOS CONTRATOS BAIXADOS NA INTERNET GERAM PROCESSOS?", level=2)
    doc.add_paragraph(
        "A maioria das pessoas comete o erro fatal de copiar modelos genéricos na internet sem compreender que certas cláusulas são nulas de pleno direito perante o Poder Judiciário. "
        "Este guia prático foi elaborado por advogados atuantes para proteger seu patrimônio e alertar sobre as 5 armadilhas mais graves antes de assinar qualquer documento."
    )
    
    add_clause(doc, "RISCO 1: O ERRO FATAL DO 'CONTRATO DE GAVETA' SEM CERTIDÕES PRÉVIAS",
        "Comprar imóvel apenas com contrato particular sem tirar certidões prévias do vendedor é assumir o risco de perder 100% do dinheiro investido. "
        "Se o vendedor tiver dívidas trabalhistas ou fiscais em andamento, a Justiça pode anular a venda como FRAUDE CONTRA CREDORES ou FRAUDE À EXECUÇÃO. O comprador perde o imóvel e não recupera o valor pago.\n"
        "A REGRA DE OURO: Nunca pague mais de 5% de sinal antes de ter em mãos a Matrícula Atualizada com Certidão de Ônus Reais vintenária e a Certidão Negativa de Ações Cíveis e Trabalhistas do Vendedor.")
        
    add_clause(doc, "RISCO 2: CLÁUSULAS DE DUPLA GARANTIA EM LOCAÇÃO SÃO NULAS E CONSTITUEM CONTRAVENÇÃO",
        "Muitos proprietários e imobiliárias despreparadas exigem fiador E depósito caução no mesmo contrato. "
        "O Art. 37, parágrafo único, da Lei 8.245/91 proíbe expressamente a duplicidade de garantia no mesmo contrato. Além de a segunda garantia ser sumariamente considerada nula pelo juiz, a prática configura contravenção penal punível com prisão simples de 5 dias a 6 meses ou multa.")

    add_clause(doc, "RISCO 3: COMODATO VERBAL: A PORTA ABERTA PARA A USUCAPIÃO",
        "Ceder casa, lote ou sítio para alguém morar sem contrato assinado com reconhecimento de firma cria uma brecha perigosa. "
        "Passados alguns anos, o ocupante pode alegar que cuidou do imóvel como dono, pagou contas, fez pequenas reformas e ingressar com AÇÃO DE USUCAPIÃO. "
        "O contrato escrito de comodato com cláusula explícita de POSSE PRECÁRIA destrói essa possibilidade porque comprova o ato de mera tolerância previsto no Art. 1.208 do Código Civil.")

    add_clause(doc, "RISCO 4: O FANTASMA DO VÍNCULO EMPREGATÍCIO EM CONTRATOS PJ",
        "Contratar um profissional como 'PJ' ou autônomo, mas exigir que ele cumpra horário fixo, responda a advertências internas e seja proibido de atender outros clientes gera passivo trabalhista devastador. "
        "O juiz do trabalho aplica o 'Princípio da Primazia da Realidade': se houver subordinação e horário fixo, o contrato civil é desconsiderado e a empresa é condenada a pagar FGTS, férias, 13º salário e rescisão retroativa.")

    add_clause(doc, "RISCO 5: MULTA RESCISÓRIA ABUSIVA EM LOCAÇÃO",
        "Cobrar a integralidade da multa de 3 meses de aluguel quando o inquilino sai aos 28 meses de um contrato de 30 meses é ilegal. "
        "O Art. 4º da Lei do Inquilinato exige que a multa seja cobrada proporcionalmente ao tempo restante de cumprimento do contrato. O cálculo correto deve constar expressamente na notificação de cobrança.")

    doc.add_heading("O GANCHO DA BANCA ANDRADE & FLORIO: ANÁLISE EXPRESSA E DUE DILIGENCE", level=2)
    doc.add_paragraph(
        "Você preencheu o seu modelo de contrato, mas o negócio envolve valores expressivos ou particularidades patrimoniais que exigem um olhar sob medida?\n\n"
        "A banca Andrade & Florio Sociedade de Advogados oferece o serviço de Análise Jurídica Expressa de Minutas e Due Diligence Imobiliária:\n"
        "• Auditoria completa de certidões e matrícula;\n"
        "• Revisão e adaptação das cláusulas às particularidades do seu caso;\n"
        "• Emissão de Parecer de Risco antes da assinatura.\n\n"
        "Para agendar a análise do seu caso diretamente com nossa equipe jurídica, entre em contato:\n"
        "🌐 www.andradeflorio.com.br\n"
        "📱 WhatsApp Institucional: (11) 97722-1926"
    )
    return doc

if __name__ == '__main__':
    out_dir = r"C:\Users\Alexandre\andrade-florio-web-recuperado\acervo-contratos-digitais"
    os.makedirs(out_dir, exist_ok=True)
    
    docs = [
        ("01_Contrato_Compra_e_Venda_Imovel_Blindado.docx", create_compra_venda()),
        ("02_Contrato_Locacao_Residencial_e_Comercial.docx", create_locacao()),
        ("03_Contrato_Comodato_Imovel_Anti_Usucapiao.docx", create_comodato()),
        ("04_Contrato_Prestacao_Servicos_Autonomos.docx", create_prestacao_servicos()),
        ("05_Guia_Alertas_de_Risco_e_Clausulas_Nulas_OrderBump.docx", create_guia_riscos_order_bump())
    ]
    
    for filename, d in docs:
        path = os.path.join(out_dir, filename)
        d.save(path)
        print(f"Salvo com sucesso: {path}")
