import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls
import os
import json
import zipfile

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    tcPr.append(parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>'))

def build_doc(title, module_name, notes, clauses, qualifications=None):
    doc = docx.Document()
    
    # Header
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_t = p_title.add_run(title.upper())
    run_t.font.name = 'Arial'
    run_t.font.size = Pt(13)
    run_t.font.bold = True
    run_t.font.color.rgb = RGBColor(26, 44, 76)
    
    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_s = p_sub.add_run(f"Acervo de Segurança Jurídica • {module_name} • Banca Andrade & Florio")
    run_s.font.name = 'Arial'
    run_s.font.size = Pt(9.5)
    run_s.font.italic = True
    run_s.font.color.rgb = RGBColor(120, 120, 120)
    
    doc.add_paragraph()
    
    if notes:
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
        run = p.add_run("💡 NOTA TÉCNICA DO ADVOGADO: " + notes)
        run.font.name = 'Arial'
        run.font.size = Pt(9.5)
        run.font.color.rgb = RGBColor(180, 130, 20)
        run.font.bold = True
        doc.add_paragraph()

    if qualifications:
        doc.add_heading("QUALIFICAÇÃO DAS PARTES", level=2)
        doc.add_paragraph(qualifications)

    for c_title, c_text in clauses:
        p_t = doc.add_paragraph()
        p_t.paragraph_format.space_before = Pt(10)
        p_t.paragraph_format.space_after = Pt(2)
        run_ct = p_t.add_run(c_title)
        run_ct.font.name = 'Arial'
        run_ct.font.size = Pt(11)
        run_ct.font.bold = True
        run_ct.font.color.rgb = RGBColor(26, 44, 76)
        
        p_b = doc.add_paragraph()
        p_b.paragraph_format.space_before = Pt(0)
        p_b.paragraph_format.space_after = Pt(6)
        p_b.paragraph_format.line_spacing = 1.15
        run_cb = p_b.add_run(c_text)
        run_cb.font.name = 'Arial'
        run_cb.font.size = Pt(10)
        run_cb.font.color.rgb = RGBColor(40, 40, 40)
        
    doc.add_paragraph("\n[CIDADE/UF], [DIA] de [MÊS] de 202[X].\n\n")
    doc.add_paragraph("_________________________________________\nPRIMEIRA PARTE / CONTRATANTE\n\n_________________________________________\nSEGUNDA PARTE / CONTRATADA\n\n")
    doc.add_paragraph("TESTEMUNHAS:\n1. Nome: ____________________ CPF: ______________\n2. Nome: ____________________ CPF: ______________")
    
    return doc

# Definição dos 30 contratos com textos jurídicos autênticos
contracts_db = [
    # MÓDULO 1: TRANSAÇÕES IMOBILIÁRIAS
    {
        "num": "01",
        "file": "01_Contrato_Compra_e_Venda_Imovel.docx",
        "title": "Contrato de Compra e Venda de Imóvel (À Vista e Parcelado)",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Mais Buscado",
        "notes": "Antes do pagamento do sinal, exija Matrícula Atualizada com Certidão de Ônus Reais vintenária e certidões negativas de ações cíveis e trabalhistas do Vendedor.",
        "qual": "VENDEDOR(A): [NOME COMPLETO], [nacionalidade], [estado civil], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO COMPLETO].\nCOMPRADOR(A): [NOME COMPLETO], [nacionalidade], [estado civil], RG nº [RG], CPF nº [CPF], residente na [ENDEREÇO COMPLETO].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DO OBJETO", "O presente contrato tem por objeto a promessa de compra e venda irrevogável e irretratável do bem imóvel situado na [ENDEREÇO COMPLETO DO IMÓVEL], Matrícula nº [NÚMERO], do Cartório de Registro de Imóveis da Comarca de [CIDADE/UF]."),
            ("CLÁUSULA SEGUNDA – DO PREÇO E CONDIÇÕES", "O preço total ajustado é de R$ [VALOR POR EXTENSO], pago da seguinte forma: Sinal de R$ [VALOR] nesta data via PIX, e o saldo restante de R$ [VALOR] no ato da Escritura Pública ou mediante financiamento bancário no prazo de [XX] dias."),
            ("CLÁUSULA TERCEIRA – DAS ARRAS (SINAL)", "As arras têm natureza confirmatória (Art. 417 do CC). A desistência pelo Comprador acarreta perda do sinal; a desistência pelo Vendedor enseja devolução em dobro com juros."),
            ("CLÁUSULA QUARTA – CLÁUSULA RESOLUTIVA EXPRESSA (ART. 474 DO CC)", "O não pagamento de qualquer parcela faculta a rescisão imediata de pleno direito, independentemente de ação judicial prévia, após notificação de 15 dias.")
        ]
    },
    {
        "num": "02",
        "file": "02_Contrato_Locacao_Residencial.docx",
        "title": "Contrato de Locação Residencial com Garantias",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Lei do Inquilinato",
        "notes": "É expressamente proibido exigir mais de uma modalidade de garantia para o mesmo contrato (Art. 37, parágrafo único, Lei 8.245/91).",
        "qual": "LOCADOR(A): [NOME COMPLETO], RG [RG], CPF [CPF], residente em [ENDEREÇO].\nLOCATÁRIO(A): [NOME COMPLETO], RG [RG], CPF [CPF], residente em [ENDEREÇO].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DO IMÓVEL E DESTINAÇÃO", "Locação exclusiva para moradia no imóvel localizado em [ENDEREÇO COMPLETO], sendo vedada cessão ou sublocação."),
            ("CLÁUSULA SEGUNDA – DO VALOR E REAJUSTE", "Aluguel mensal de R$ [VALOR], vencível todo dia [DIA], corrigido anualmente pelo IPCA/IBGE."),
            ("CLÁUSULA TERCEIRA – DA GARANTIA", "Para garantia das obrigações, o Locatário presta Caução em dinheiro correspondente a [3] meses de aluguel, totalizando R$ [VALOR], depositada em conta poupança vinculada."),
            ("CLÁUSULA QUARTA – MULTA RESCISÓRIA PROPORCIONAL", "Multa equivalente a 3 aluguéis, cobrada de forma estritamente proporcional ao período cumprido (Art. 4º da Lei 8.245/91).")
        ]
    },
    {
        "num": "03",
        "file": "03_Contrato_Locacao_Comercial.docx",
        "title": "Contrato de Locação Comercial com Regras de Ponto",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Comercial / PJ",
        "notes": "Atenção ao prazo: contratos comerciais de 5 anos ininterruptos com mesmo ramo de atividade por 3 anos dão direito à Ação Renovatória de Aluguel (Art. 51 Lei 8.245/91).",
        "qual": "LOCADOR: [RAZÃO SOCIAL OU NOME], CNPJ/CPF [NÚMERO].\nLOCATÁRIO: [RAZÃO SOCIAL OU NOME], CNPJ/CPF [NÚMERO].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA DESTINAÇÃO EMPRESARIAL", "Imóvel destinado exclusivamente à exploração comercial do ramo de [ATIVIDADE], vedada mudança sem anuência escrita."),
            ("CLÁUSULA SEGUNDA – DO VALOR E ENCARGOS", "Aluguel mensal de R$ [VALOR], respondendo o locatário por todas as tarifas, tributos municipais e alvarás inerentes à atividade."),
            ("CLÁUSULA TERCEIRA – DAS REFORMAS E BENFEITORIAS", "Qualquer alteração física exige prévia autorização e fica incorporada ao imóvel sem direito de retenção ou indenização.")
        ]
    },
    {
        "num": "04",
        "file": "04_Contrato_Comodato_Imovel.docx",
        "title": "Contrato de Comodato de Imóvel (Anti-Usucapião)",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Proteção Patrimonial",
        "notes": "Empréstimo gratuito deve comprovar Posse Precária (Art. 1.208 do CC) para impedir que o comodatário ingresse com usucapião no futuro.",
        "qual": "COMODANTE: [PROPRIETÁRIO], CPF [CPF].\nCOMODATÁRIO: [BENEFICIÁRIO], CPF [CPF].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DO OBJETO E GRATUIDADE", "Empréstimo a título estritamente gratuito do imóvel situado na [ENDEREÇO], Matrícula [Nº]."),
            ("CLÁUSULA SEGUNDA – DA POSSE PRECÁRIA ANTI-USUCAPIÃO", "O Comodatário reconhece expressamente que sua ocupação é de posse precária por mera tolerância, renunciando a qualquer pleito de usucapião."),
            ("CLÁUSULA TERCEIRA – NOTIFICAÇÃO E ALUGUEL-PENA", "O proprietário pode reaver o imóvel mediante notificação prévia de 30 dias. Findo o prazo, incidirá aluguel-pena de R$ [VALOR]/mês.")
        ]
    },
    {
        "num": "05",
        "file": "05_Termo_Vistoria_Imovel.docx",
        "title": "Termo de Vistoria de Imóvel (Entrada e Saída)",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Essencial para Locação",
        "notes": "Sem laudo de vistoria com fotos assinado no início do contrato, o locador perde 90% das ações de cobrança de danos e pintura ao final da locação.",
        "qual": "VISTORIADOR: [NOME DO LOCADOR OU IMOBILIÁRIA].\nLOCATÁRIO: [NOME DO INQUILINO].",
        "clauses": [
            ("1. ESTADO DE CONSERVAÇÃO", "Pintura nova sem manchas, piso em cerâmica intacto, portas e fechaduras em perfeito funcionamento."),
            ("2. INSTALAÇÕES ELÉTRICAS E HIDRÁULICAS", "Torneiras, descargas, registros e interruptores testados e sem vazamentos nesta data."),
            ("3. REGISTRO FOTOGRÁFICO", "Anexam-se [XX] fotografias datadas e rubricadas pelas partes comprovando o estado fático do bem.")
        ]
    },
    {
        "num": "06",
        "file": "06_Aditivo_Contratual_Locacao.docx",
        "title": "Termo Aditivo de Contrato de Locação (Prorrogação/Reajuste)",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Prorrogação Segura",
        "notes": "Aditivo serve para formalizar reajustes ou novos prazos sem necessidade de fazer um novo contrato do zero.",
        "qual": "LOCADOR E LOCATÁRIO do Contrato originário firmado em [DATA].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA PRORROGAÇÃO DO PRAZO", "O contrato originário fica prorrogado por mais [12/24/30] meses, com término fixado para [NOVA DATA]."),
            ("CLÁUSULA SEGUNDA – DA REPACTUAÇÃO DO ALUGUEL", "O novo valor mensal passa a ser de R$ [NOVO VALOR], mantidas inalteradas todas as demais cláusulas e garantias.")
        ]
    },
    {
        "num": "07",
        "file": "07_Distrato_de_Locacao.docx",
        "title": "Distrato de Contrato de Locação (Encerramento Amigável)",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Quitação Total",
        "notes": "O distrato encerra formalmente as responsabilidades e exonera o fiador ou autoriza a devolução da caução sem pendências futuras.",
        "qual": "LOCADOR E LOCATÁRIO dão plena e mútua quitação.",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA RESCISÃO E ENTREGA DE CHAVES", "As partes rescindem de pleno acordo a locação, devolvendo-se as chaves nesta data após vistoria satisfatória."),
            ("CLÁUSULA SEGUNDA – DA DEVOLUÇÃO DA CAUÇÃO E QUITAÇÃO", "Restitui-se o saldo da caução no valor de R$ [VALOR], dando-se mútua, geral e irrevogável quitação de débitos.")
        ]
    },
    {
        "num": "08",
        "file": "08_Notificacao_Extrajudicial_Despejo.docx",
        "title": "Notificação Extrajudicial para Desocupação / Cobrança de Aluguel",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Pré-Processual",
        "notes": "A notificação extrajudicial com prazo de purga de mora é a prova documental obrigatória que instrui a ação de despejo.",
        "qual": "NOTIFICANTE: [LOCADOR/PROPRIETÁRIO].\nNOTIFICADO: [LOCATÁRIO/INQUILINO].",
        "clauses": [
            ("DO DÉBITO PENDENTE", "Constata-se inadimplência referente aos aluguéis e encargos dos meses de [MESES], totalizando R$ [VALOR ATUALIZADO]."),
            ("DO PRAZO IMPRORROGÁVEL", "Fica V. Sa. notificado a purgar a mora no prazo de 15 (quinze) dias ou desocupar o imóvel, sob pena de ajuizamento imediato de Ação de Despejo.")
        ]
    },
    {
        "num": "09",
        "file": "09_Recibo_Sinal_e_Arras.docx",
        "title": "Recibo de Sinal e Princípio de Pagamento (Arras de Imóvel)",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Garantia de Negócio",
        "notes": "Usado para travar a negociação de um imóvel no mesmo dia enquanto os advogados conferem certidões e redigem a minuta principal.",
        "qual": "VENDEDOR declara receber do COMPRADOR quantia a título de sinal.",
        "clauses": [
            ("VALOR RECEBIDO", "Recebido o valor de R$ [VALOR] via PIX a título de arras confirmatórias para reserva da compra do imóvel sito em [ENDEREÇO]."),
            ("CONDIÇÃO RESOLUTIVA", "Caso as certidões de ônus e ações do vendedor apresentem impedimentos legais, o sinal será integralmente devolvido ao comprador sem penalidades.")
        ]
    },
    {
        "num": "10",
        "file": "10_Contrato_Corretagem_Imobiliaria.docx",
        "title": "Contrato de Corretagem Imobiliária e Intermediação",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Comissão de Corretor",
        "notes": "Garante o direito aos honorários do corretor (CRECI) mesmo se as partes concluírem o negócio diretamente após a apresentação (Art. 727 do CC).",
        "qual": "CONTRATANTE: [PROPRIETÁRIO].\nCORRETOR(A): [NOME COMPLETO], CRECI nº [NÚMERO].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA INTERMEDIAÇÃO", "Autorização de intermediação com exclusividade pelo prazo de [XX] dias para o imóvel sito em [ENDEREÇO], pelo valor de R$ [VALOR]."),
            ("CLÁUSULA SEGUNDA – DA COMISSÃO", "Comissão estipulada em 6% (seis por cento) sobre o valor total da venda, devida no momento do fechamento formal.")
        ]
    },
    {
        "num": "11",
        "file": "11_Contrato_Empreitada_Reforma.docx",
        "title": "Contrato de Empreitada e Reforma de Imóvel",
        "module": "Módulo 1: Transações Imobiliárias",
        "badge": "Obras e Reformas",
        "notes": "Contrato essencial para evitar que reformas estourem orçamento ou gerem acusações de vínculo trabalhista com pedreiros/mão de obra.",
        "qual": "CONTRATANTE: [PROPRIETÁRIO DO IMÓVEL].\nEMPREITEIRO: [PRESTADOR/RESPONSÁVEL PELA OBRA].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DO ESCOPO DA OBRA", "Execução da reforma conforme memorial descritivo anexo, abrangendo instalações elétricas, hidráulicas, pisos e pintura."),
            ("CLÁUSULA SEGUNDA – DOS PRAZOS E MEDIÇÕES", "Obra com início em [DATA] e entrega em [DATA], com pagamentos liberados estritamente por medição de etapas concluídas."),
            ("CLÁUSULA TERCEIRA – DA RESPONSABILIDADE TRABALHISTA", "O Empreiteiro responde civil e trabalhisticamente por todos os funcionários que alocar na obra.")
        ]
    },

    # MÓDULO 2: NEGÓCIOS E PRESTAÇÃO DE SERVIÇOS
    {
        "num": "12",
        "file": "12_Contrato_Prestacao_Servicos_Simples.docx",
        "title": "Contrato de Prestação de Serviços Geral",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Uso Geral",
        "notes": "Minuta padrão civil para contratação de qualquer tipo de serviço eventual com definição de valor e prazos.",
        "qual": "CONTRATANTE: [NOME/EMPRESA].\nCONTRATADA: [NOME/EMPRESA].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DOS SERVIÇOS", "A Contratada prestará os serviços de [DESCREVER], entregando os resultados previstos até o dia [DATA]."),
            ("CLÁUSULA SEGUNDA – DO PAGAMENTO", "Valor fixado em R$ [VALOR], pago em [X] parcelas de R$ [VALOR], mediante emissão de recibo ou nota fiscal.")
        ]
    },
    {
        "num": "13",
        "file": "13_Contrato_Servicos_PJ_Freelancer.docx",
        "title": "Contrato de Prestação de Serviços PJ / Freelancer (Anti-CLT)",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Blindagem Trabalhista",
        "notes": "Afasta os requisitos do Art. 3º da CLT (subordinação, pessoalidade e controle de jornada), evitando passivo trabalhista milionário.",
        "qual": "CONTRATANTE: [EMPRESA PJ].\nCONTRATADA: [PRESTADOR PJ / MEI].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA AUTONOMIA TÉCNICA", "A prestação de serviços ocorrerá sem qualquer subordinação jurídica, pessoalidade obrigatória ou controle de horários."),
            ("CLÁUSULA SEGUNDA – DA NÃO EXCLUSIVIDADE", "A Contratada é livre para manter outros contratos comerciais concomitantemente com quaisquer terceiros."),
            ("CLÁUSULA TERCEIRA – DA INEXISTÊNCIA DE VÍNCULO", "As partes reconhecem a natureza exclusivamente civil e comercial, sem incidência de legislação trabalhista.")
        ]
    },
    {
        "num": "14",
        "file": "14_Acordo_Confidencialidade_NDA.docx",
        "title": "Acordo de Confidencialidade e Não Divulgação (NDA)",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Segredo Comercial",
        "notes": "Protege listas de clientes, códigos-fonte, fórmulas, ideias e segredos de negócio antes de qualquer reunião ou parceria.",
        "qual": "PARTE REVELADORA: [EMPRESA/PESSOA].\nPARTE RECEPTORA: [EMPRESA/PESSOA].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DAS INFORMAÇÕES CONFIDENCIAIS", "São confidenciais todos os dados comerciais, estratégias, softwares e planos compartilhados entre as partes."),
            ("CLÁUSULA SEGUNDA – DA MULTA POR VAZAMENTO", "A violação culposa ou dolosa do sigilo ensejará multa penal de R$ [VALOR - EX: R$ 50.000,00] além de perdas e danos.")
        ]
    },
    {
        "num": "15",
        "file": "15_Contrato_Parceria_Comercial.docx",
        "title": "Contrato de Parceria Comercial e Joint Venture",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Sociedade de Projeto",
        "notes": "Permite que duas empresas ou profissionais se unam para um projeto específico dividindo lucros sem criar uma nova sociedade formal.",
        "qual": "PARCEIRO A: [EMPRESA/NOME].\nPARCEIRO B: [EMPRESA/NOME].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DO OBJETO DA PARCERIA", "União de esforços para comercialização e execução do projeto [NOME DO PROJETO]."),
            ("CLÁUSULA SEGUNDA – DA DIVISÃO DE RESULTADOS", "As receitas líquidas auferidas serão partilhadas na proporção de [50%] para o Parceiro A e [50%] para o Parceiro B.")
        ]
    },
    {
        "num": "16",
        "file": "16_Contrato_Representacao_Comercial.docx",
        "title": "Contrato de Representação Comercial Autônoma",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Lei 4.886/65",
        "notes": "Regulamenta o percentual de comissões e zona de atuação de vendedores autônomos e representantes.",
        "qual": "REPRESENTADA: [EMPRESA].\nREPRESENTANTE: [PROFISSIONAL COM CORE].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA ZONA DE ATUAÇÃO", "Atuação delimitada no território de [ESTADO OU REGIÃO], sem exclusividade territorial."),
            ("CLÁUSULA SEGUNDA – DAS COMISSÕES", "Comissão de [XX%] sobre os pedidos faturados e quitados pelos clientes intermediados.")
        ]
    },
    {
        "num": "17",
        "file": "17_Termo_Quitacao_Servicos.docx",
        "title": "Termo de Encerramento e Quitação Plena de Serviços",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Proteção contra Ações",
        "notes": "Documento assinado no fim de um projeto confirmando que tudo foi entregue satisfatoriamente e nenhum valor a mais é devido.",
        "qual": "CONTRATANTE E CONTRATADA declaram extinção contratual.",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA ENTREGA SATISFATÓRIA", "O Contratante declara ter recebido todos os entregáveis em perfeito estado técnico."),
            ("CLÁUSULA SEGUNDA – DA QUITAÇÃO PLENA", "A Contratada declara recebidos todos os pagamentos acordados, conferindo plena e irrevogável quitação.")
        ]
    },
    {
        "num": "18",
        "file": "18_Distrato_Prestacao_Servicos.docx",
        "title": "Distrato de Contrato de Prestação de Serviços",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Rescisão Amigável",
        "notes": "Encerra o contrato antes do prazo estipulado fixando eventuais indenizações ou ausência de multas recíprocas.",
        "qual": "AS PARTES ajustam a resilição consensual.",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA RESILIÇÃO BILATERAL", "Fica rescindido nesta data o contrato firmado em [DATA], cessando deveres futuros."),
            ("CLÁUSULA SEGUNDA – DO ACERTO FINANCEIRO", "As partes declaram nada mais ter a reclamar uma da outra a que título for.")
        ]
    },
    {
        "num": "19",
        "file": "19_Licenciamento_Uso_Marca.docx",
        "title": "Contrato de Licenciamento de Uso de Marca",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Propriedade Intelectual",
        "notes": "Autoriza terceiros a utilizarem sua marca em produtos, lojas ou cursos mantendo a propriedade protegida.",
        "qual": "LICENCIANTE: [TITULAR DA MARCA NO INPI].\nLICENCIATÁRIA: [EMPRESA AUTORIZADA].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA AUTORIZAÇÃO", "Licença não exclusiva e temporária de uso da marca [NOME DA MARCA], Processo INPI nº [Nº]."),
            ("CLÁUSULA SEGUNDA – DOS ROYALTIES", "Pagamento de royalties de [XX%] sobre o faturamento bruto das vendas efetuadas sob a marca.")
        ]
    },
    {
        "num": "20",
        "file": "20_Cessao_Direitos_Autorais.docx",
        "title": "Contrato de Cessão Total de Direitos Autorais e Imagem",
        "module": "Módulo 2: Negócios e Serviços",
        "badge": "Design, Código e Vídeo",
        "notes": "Sem contrato de cessão, o autor original (designer, programador, fotógrafo) continua sendo o dono dos direitos patrimoniais da obra.",
        "qual": "CEDENTE: [CRIADOR/AUTOR].\nCESSIONÁRIO: [COMPRADOR DOS DIREITOS].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA CESSÃO DEFINITIVA", "Cessão total, irrevogável e definitiva de todos os direitos patrimoniais sobre a obra [DESCRIÇÃO DA OBRA]."),
            ("CLÁUSULA SEGUNDA – DO USO IRRESTRITO", "O Cessionário poderá comercializar, reproduzir, modificar e licenciar a obra sem qualquer restrição.")
        ]
    },

    # MÓDULO 3: VIDA CIVIL, VEÍCULOS E FINANÇAS
    {
        "num": "21",
        "file": "21_Contrato_Compra_Venda_Veiculo.docx",
        "title": "Contrato de Compra e Venda de Veículo Usado (Com Vistoria)",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Carros e Motos",
        "notes": "Protege o vendedor contra multas e acidentes ocorridos após a entrega e assegura o comprador quanto a multas e bloqueios anteriores.",
        "qual": "VENDEDOR: [NOME], CPF [CPF].\nCOMPRADOR: [NOME], CPF [CPF].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DO VEÍCULO", "Veículo Marca [MARCA], Modelo [MODELO], Ano [ANO], Placa [PLACA], Renavam [RENAVAM]."),
            ("CLÁUSULA SEGUNDA – DA TRANSMISSÃO E MULTAS", "O Comprador assume total responsabilidade civil, criminal e de trânsito a partir da entrega das chaves nesta data às [HORA]."),
            ("CLÁUSULA TERCEIRA – DA COMUNICAÇÃO DE VENDA", "O Comprador obriga-se a transferir o veículo junto ao DETRAN no prazo improrrogável de 30 dias.")
        ]
    },
    {
        "num": "22",
        "file": "22_Confissao_de_Divida.docx",
        "title": "Termo de Confissão de Dívida e Parcelamento",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Título Executivo",
        "notes": "Com a assinatura de 2 testemunhas, este termo constitui Título Executivo Extrajudicial (Art. 784, III do CPC), permitindo penhora de bens direta sem anos de processo.",
        "qual": "CREDOR: [NOME/EMPRESA].\nDEVEDOR: [NOME/PESSOA], CPF/CNPJ [Nº].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DO VALOR DA DÍVIDA", "O Devedor reconhece e confessa dever a quantia líquida, certa e exigível de R$ [VALOR TOTAL]."),
            ("CLÁUSULA SEGUNDA – DO PARCELAMENTO", "A dívida será quitada em [XX] parcelas mensais de R$ [VALOR], vencendo-se a primeira em [DATA]."),
            ("CLÁUSULA TERCEIRA – DO VENCIMENTO ANTECIPADO", "O inadimplemento de qualquer parcela acarreta o vencimento antecipado de toda a dívida com multa de 10% e juros de mora.")
        ]
    },
    {
        "num": "23",
        "file": "23_Contrato_Mutuo_Emprestimo.docx",
        "title": "Contrato de Mútuo Financeiro (Empréstimo de Dinheiro)",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Empréstimo Particular",
        "notes": "Evita alegações de doação perante a Receita Federal e documenta o empréstimo legítimo entre particulares.",
        "qual": "MUTUANTE: [QUEM EMPRESTA].\nMUTUÁRIO: [QUEM RECEBE].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DO VALOR MUTUADO", "O Mutuante empresta ao Mutuário a quantia de R$ [VALOR], entregue via transferência bancária PIX nesta data."),
            ("CLÁUSULA SEGUNDA – DO PAGAMENTO E ENCARGOS", "O valor será restituído até o dia [DATA], acrescido de atualização monetária pelo IPCA.")
        ]
    },
    {
        "num": "24",
        "file": "24_Termo_Acordo_Extrajudicial.docx",
        "title": "Termo de Acordo Extrajudicial e Transação",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Fim de Litígios",
        "notes": "Coloca fim a desavenças entre vizinhos, ex-sócios ou partes com renúncia expressa a ações judiciais futuras.",
        "qual": "PRIMEIRO TRANSIGENTE E SEGUNDO TRANSIGENTE ajustam acordo.",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA TRANSAÇÃO", "As partes transacionam amigavelmente acerca da controvérsia relativa a [DESCREVER FATO]."),
            ("CLÁUSULA SEGUNDA – DA RENÚNCIA A AÇÕES", "Cumpridas as obrigações deste termo, as partes renunciam a qualquer pleito de indenização perante a Justiça.")
        ]
    },
    {
        "num": "25",
        "file": "25_Notificacao_Extrajudicial_Cobranca.docx",
        "title": "Notificação Extrajudicial de Cobrança com Prazo",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Cobrança Prévia",
        "notes": "Constitui o devedor em mora e serve como prova para protesto em cartório ou ação monitória/execução.",
        "qual": "CREDOR NOTIFICANTE notifica DEVEDOR NOTIFICADO.",
        "clauses": [
            ("DO DÉBITO", "Notifica-se da pendência de pagamento no valor de R$ [VALOR], vencido desde [DATA]."),
            ("DO PRAZO PARA QUITAÇÃO", "Concede-se o prazo impreterível de 48 (quarenta e oito) horas para regularização antes do protesto e medidas judiciais cabíveis.")
        ]
    },
    {
        "num": "26",
        "file": "26_Procuracao_Plenos_Poderes.docx",
        "title": "Procuração de Plenos Poderes (Ad Negotia)",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Representação Geral",
        "notes": "Autoriza terceiros a representarem você perante bancos, repartições públicas, concessionárias e prefeituras.",
        "qual": "OUTORGANTE: [NOME COMPLETO], CPF [CPF].\nOUTORGADO: [NOME DO PROCURADOR], CPF [CPF].",
        "clauses": [
            ("PODERES CONCEDIDOS", "Confere amplos poderes para gerir negócios, assinar documentos em repartições públicas, requerer certidões e movimentar interesses do Outorgante.")
        ]
    },
    {
        "num": "27",
        "file": "27_Procuracao_Especifica_Venda.docx",
        "title": "Procuração com Poderes Específicos para Venda de Imóvel",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Poderes Restritos",
        "notes": "Segurança máxima: limita os poderes do procurador exclusivamente para vender o imóvel descrito sem abrir mão de outros bens.",
        "qual": "OUTORGANTE confere poderes específicos ao OUTORGADO.",
        "clauses": [
            ("PODERES ESPECÍFICOS", "Poderes restritos e exclusivos para negociar, assinar escritura e dar quitação da venda do imóvel matriculado sob nº [MATRÍCULA] no CRI de [COMARCA].")
        ]
    },
    {
        "num": "28",
        "file": "28_Declaracao_Hipossuficiencia.docx",
        "title": "Declaração de Hipossuficiência Financeira (Justiça Gratuita)",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Isenção de Custas",
        "notes": "Documento necessário para requerer isenção de taxas cartorárias ou gratuidade da justiça (Art. 98 do CPC).",
        "qual": "DECLARANTE: [NOME COMPLETO], CPF [CPF], residente em [ENDEREÇO].",
        "clauses": [
            ("DECLARAÇÃO FORMAL", "Declara, sob as penas da lei (Art. 2º da Lei 1.060/50), não possuir condições financeiras de arcar com custas sem prejuízo do sustento próprio e familiar.")
        ]
    },
    {
        "num": "29",
        "file": "29_Contrato_Doacao_de_Bens.docx",
        "title": "Contrato de Doação de Bens com Reserva de Usufruto",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Planejamento Sucessório",
        "notes": "Permite doar bens para filhos ou herdeiros mantendo o direito de morar e usufruir da renda até o falecimento.",
        "qual": "DOADOR: [PROPRIETÁRIO].\nDONATÁRIO: [HERDEIRO/BENEFICIÁRIO].",
        "clauses": [
            ("CLÁUSULA PRIMEIRA – DA DOAÇÃO", "O Doador transfere gratuitamente ao Donatário o bem descrito em [DESCRIÇÃO DO BEM]."),
            ("CLÁUSULA SEGUNDA – DA RESERVA DE USUFRUTO", "Reserva-se em favor do Doador o usufruto vitalício do imóvel, assegurando a posse e rendimentos até sua morte.")
        ]
    },
    {
        "num": "30",
        "file": "30_Recibo_Geral_Quitacao_Plena.docx",
        "title": "Recibo de Pagamento Geral e Quitação Plena",
        "module": "Módulo 3: Vida Civil e Finanças",
        "badge": "Proteção Final",
        "notes": "O recibo perfeito para encerrar qualquer pagamento em dinheiro ou PIX sem dar margem a cobranças futuras.",
        "qual": "CREDOR declara ter recebido do PAGADOR quantia pecuniária integral.",
        "clauses": [
            ("DO VALOR E QUITAÇÃO", "Recebi de [NOME DO PAGADOR] a quantia de R$ [VALOR], referente a [MOTIVO DO PAGAMENTO], conferindo a mais ampla, geral e irrevogável quitação de dívida.")
        ]
    }
]

out_dir = r"C:\Users\Alexandre\andrade-florio-web-recuperado\public\downloads"
os.makedirs(out_dir, exist_ok=True)

# Gera os 30 arquivos docx
print("Gerando os 30 contratos em Word (.docx)...")
generated_files = []
for c in contracts_db:
    doc = build_doc(c["title"], c["module"], c["notes"], c["clauses"], c["qual"])
    fpath = os.path.join(out_dir, c["file"])
    doc.save(fpath)
    generated_files.append((c["file"], fpath))

# Gera o ZIP Completo com os 30 contratos
zip_path = os.path.join(out_dir, "Acervo_30_Contratos_Andrade_Florio.zip")
with zipfile.ZipFile(zip_path, 'w') as zf:
    for fname, fpath in generated_files:
        zf.write(fpath, arcname=fname)
print(f"Zip com 30 contratos criado: {zip_path}")

# Copia para Downloads e Desktop do usuário
import shutil
shutil.copy(zip_path, r"C:\Users\Alexandre\Downloads\Acervo_30_Contratos_Andrade_Florio.zip")
shutil.copy(zip_path, r"C:\Users\Alexandre\Desktop\Acervo_30_Contratos_Andrade_Florio.zip")

# Monta o contratosData.json para a Área de Membros
portal_data = [
    {
        "id": "instrucoes",
        "title": "Instruções Iniciais e Como Usar as Minutas",
        "badge": "Comece Aqui",
        "downloadFile": "Acervo_30_Contratos_Andrade_Florio.zip",
        "downloadLabel": "Baixar Todos os 30 Contratos (.zip)",
        "content": "Seja bem-vindo ao Acervo Definitivo de Contratos Imobiliários e Comerciais da banca Andrade & Florio Sociedade de Advogados.\n\nEste acervo completo contém 30 documentos essenciais organizados em 3 módulos estratégicos:\n• Módulo 1: Transações Imobiliárias (11 documentos)\n• Módulo 2: Negócios e Prestação de Serviços (9 documentos)\n• Módulo 3: Vida Civil, Veículos e Finanças (10 documentos)\n\nCOMO BAIXAR:\nVocê pode ler as cláusulas de cada contrato diretamente na tela ou clicar no botão dourado 'Baixar Minuta em Word (.docx)' no topo de cada documento.\n\nPara baixar todo o acervo zipado de uma única vez, use o botão no rodapé do menu lateral ou no botão acima."
    }
]

for c in contracts_db:
    full_content = f"{c['title'].upper()}\n\n"
    if c['notes']:
        full_content += f"💡 NOTA TÉCNICA DO ADVOGADO: {c['notes']}\n\n"
    if c['qual']:
        full_content += f"QUALIFICAÇÃO DAS PARTES:\n{c['qual']}\n\n"
    for ct, cb in c['clauses']:
        full_content += f"{ct}\n{cb}\n\n"
    full_content += "[CIDADE/UF], [DIA] de [MÊS] de 202[X].\n\n_____________________\nPRIMEIRA PARTE\n\n_____________________\nSEGUNDA PARTE"

    portal_data.append({
        "id": f"contrato-{c['num']}",
        "title": f"{c['num']}. {c['title']}",
        "badge": c["badge"],
        "downloadFile": c["file"],
        "downloadLabel": "Baixar Minuta em Word (.docx)",
        "content": full_content
    })

json_path = r"C:\Users\Alexandre\andrade-florio-web-recuperado\src\data\contratosData.json"
with open(json_path, 'w', encoding='utf-8') as jf:
    json.dump(portal_data, jf, ensure_ascii=False, indent=2)

print("contratosData.json atualizado com os 30 contratos com sucesso!")
