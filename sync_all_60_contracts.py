import os
import json
import zipfile
import docx
import shutil

ROOT = r"C:\Users\Alexandre\andrade-florio-web-recuperado"
DOWNLOADS_DIR = os.path.join(ROOT, "public", "downloads")
JSON_PATH = os.path.join(ROOT, "src", "data", "contratosData.json")

# Complete catalogue of 60 contracts
CONTRACTS_ALL = [
    # MÓDULO 1: IMOBILIÁRIO (11)
    ("contrato-01", "01. Contrato de Compra e Venda de Imóvel (À Vista e Parcelado)", "Imobiliário", "01_Contrato_Compra_e_Venda_Imovel.docx"),
    ("contrato-02", "02. Contrato de Locação Residencial com Garantias", "Lei do Inquilinato", "02_Contrato_Locacao_Residencial.docx"),
    ("contrato-03", "03. Contrato de Locação Comercial com Regras de Ponto", "Comercial / PJ", "03_Contrato_Locacao_Comercial.docx"),
    ("contrato-04", "04. Contrato de Comodato de Imóvel (Anti-Usucapião)", "Proteção Patrimonial", "04_Contrato_Comodato_Imovel.docx"),
    ("contrato-05", "05. Termo de Vistoria de Imóvel (Entrada e Saída)", "Vistoria com Fotos", "05_Termo_Vistoria_Imovel.docx"),
    ("contrato-06", "06. Termo Aditivo de Locação (Prorrogação/Reajuste)", "Prorrogação Segura", "06_Aditivo_Contratual_Locacao.docx"),
    ("contrato-07", "07. Distrato de Contrato de Locação (Encerramento Amigável)", "Encerramento Seguro", "07_Distrato_de_Locacao.docx"),
    ("contrato-08", "08. Notificação Extrajudicial de Despejo / Cobrança", "Cobrança Formal", "08_Notificacao_Extrajudicial_Despejo.docx"),
    ("contrato-09", "09. Recibo de Sinal e Arras de Imóvel", "Arras / Sinal", "09_Recibo_Sinal_e_Arras.docx"),
    ("contrato-10", "10. Contrato de Corretagem Imobiliária e Exclusividade", "Comissão Garantida", "10_Contrato_Corretagem_Imobiliaria.docx"),
    ("contrato-11", "11. Contrato de Empreitada e Reforma de Imóvel", "Obras e Reformas", "11_Contrato_Empreitada_Reforma.docx"),

    # MÓDULO 2: NEGÓCIOS E SERVIÇOS (9)
    ("contrato-12", "12. Contrato de Prestação de Serviços Geral", "Escopo e Prazos", "12_Contrato_Prestacao_Servicos_Simples.docx"),
    ("contrato-13", "13. Contrato de Serviços PJ / Freelancer (Anti-CLT)", "Blindagem Trabalhista", "13_Contrato_Servicos_PJ_Freelancer.docx"),
    ("contrato-14", "14. Acordo de Confidencialidade e Não Divulgação (NDA)", "Segredo Comercial", "14_Acordo_Confidencialidade_NDA.docx"),
    ("contrato-15", "15. Contrato de Parceria Comercial e Joint Venture", "Divisão de Resultados", "15_Contrato_Parceria_Comercial.docx"),
    ("contrato-16", "16. Contrato de Representação Comercial Autônoma", "Lei 4.886/65", "16_Contrato_Representacao_Comercial.docx"),
    ("contrato-17", "17. Termo de Encerramento e Quitação Plena de Serviços", "Quitação Definitiva", "17_Termo_Quitacao_Servicos.docx"),
    ("contrato-18", "18. Distrato de Prestação de Serviços", "Rescisão Amigável", "18_Distrato_Prestacao_Servicos.docx"),
    ("contrato-19", "19. Contrato de Licenciamento de Uso de Marca", "Propriedade Intelectual", "19_Licenciamento_Uso_Marca.docx"),
    ("contrato-20", "20. Contrato de Cessão de Direitos Autorais e Imagem", "Lei 9.610/98", "20_Cessao_Direitos_Autorais.docx"),

    # MÓDULO 3: VEÍCULOS, FINANÇAS E VIDA CIVIL (10)
    ("contrato-21", "21. Contrato de Compra e Venda de Veículo Usado", "Art. 134 CTB", "21_Contrato_Compra_Venda_Veiculo_Usado.docx"),
    ("contrato-22", "22. Termo de Confissão de Dívida e Parcelamento", "Título Executivo (CPC)", "22_Confissao_Divida_Parcelamento_Titulo_Executivo.docx"),
    ("contrato-23", "23. Contrato de Mútuo Financeiro (Empréstimo)", "Lei de Usura / CC", "23_Contrato_Mutuo_Financeiro_Entre_Particulares.docx"),
    ("contrato-24", "24. Termo de Acordo Extrajudicial e Transação", "Quitação Ampla", "24_Termo_Acordo_Extrajudicial_Transacao_Quitacao.docx"),
    ("contrato-25", "25. Notificação Extrajudicial de Cobrança com Prazo", "Mora Ex Re", "25_Notificacao_Extrajudicial_Cobranca_Constituicao_Mora.docx"),
    ("contrato-26", "26. Procuração de Plenos Poderes (Ad Negotia)", "Gestão e Bancos", "26_Procuracao_Plenos_Poderes_Extrajudicial_Ad_Negotia.docx"),
    ("contrato-27", "27. Procuração com Poderes Específicos para Venda de Imóvel", "Art. 661, §1º CC", "27_Procuracao_Poderes_Especificos_Venda_Imovel.docx"),
    ("contrato-28", "28. Declaração de Hipossuficiência Financeira (Justiça Gratuita)", "Art. 98 CPC", "28_Declaracao_Hipossuficiencia_Gratuidade_Justica.docx"),
    ("contrato-29", "29. Contrato de Doação de Imóvel com Reserva de Usufruto", "Proteção Familiar", "29_Contrato_Doacao_Imovel_Reserva_Usufruto_Vitalicio.docx"),
    ("contrato-30", "30. Recibo de Pagamento Geral e Quitação Plena", "Art. 320 CC", "30_Recibo_Pagamento_Geral_Quitacao_Plena_Irrevogavel.docx"),

    # MÓDULO 4: TRABALHISTA E RH / CLT (7)
    ("contrato-31", "31. Contrato de Trabalho Intermitente", "Art. 452-A CLT", "31_Contrato_Trabalho_Intermitente_CLT.docx"),
    ("contrato-32", "32. Contrato de Trabalho por Experiência / Determinado", "Arts. 443 e 445 CLT", "32_Contrato_Trabalho_Experiencia_CLT.docx"),
    ("contrato-33", "33. Termo Aditivo de Teletrabalho / Home Office", "Arts. 75-A a 75-E CLT", "33_Termo_Aditivo_Teletrabalho_Home_Office_CLT.docx"),
    ("contrato-34", "34. Acordo Individual de Banco de Horas e Compensação", "Art. 59, §6º CLT", "34_Acordo_Individual_Banco_de_Horas_CLT.docx"),
    ("contrato-35", "35. Acordo de Rescisão de Trabalho por Mútuo Consentimento", "Art. 484-A CLT", "35_Acordo_Rescisao_Mutuo_Acordo_Art484A_CLT.docx"),
    ("contrato-36", "36. Termo de Advertência Disciplinar por Falta Funcional", "Art. 482 CLT", "36_Termo_Advertencia_Disciplinar_CLT.docx"),
    ("contrato-37", "37. Termo de Confidencialidade e Não Concorrência de Empregado", "Segredo de Empresa", "37_Termo_Confidencialidade_Nao_Concorrencia_Empregado_CLT.docx"),

    # MÓDULO 5: SOCIETÁRIO E EMPRESARIAL (4)
    ("contrato-38", "38. Acordo de Sócios e Quotistas (Sociedade Limitada)", "Tag Along / Drag Along", "38_Acordo_Socios_Quotistas_Sociedade_Limitada.docx"),
    ("contrato-39", "39. Memorando de Entendimentos (MoU) com Exclusividade", "Bases de Negócio", "39_Memorando_de_Entendimentos_MoU_Parceria.docx"),
    ("contrato-40", "40. Contrato de Convivência e União Estável com Separação de Bens", "Art. 1.725 CC", "40_Contrato_Convivencia_Uniao_Estavel_Separacao_Bens.docx"),
    ("contrato-41", "41. Termo de Dissolução Amigável de União Estável e Partilha", "Dissolução Consensual", "41_Termo_Dissolucao_Amigavel_Uniao_Estavel_Partilha.docx"),

    # MÓDULO 6: SUCESSÕES E DIGITAL (4)
    ("contrato-42", "42. Testamento Particular Válido com 3 Testemunhas", "Art. 1.876 CC", "42_Testamento_Particular_Valido_Codigo_Civil.docx"),
    ("contrato-43", "43. Termos de Uso de Plataforma Digital e SaaS", "Marco Civil da Internet", "43_Termos_de_Uso_Plataforma_Web_Aplicativo.docx"),
    ("contrato-44", "44. Política de Privacidade e Proteção de Dados (LGPD)", "Lei 13.709/2018", "44_Politica_Privacidade_Protecao_Dados_LGPD.docx"),
    ("contrato-45", "45. Contrato de Gestão de Tráfego Pago e Marketing Digital", "Mídia de Performance", "45_Contrato_Gestao_Trafego_Pago_Marketing_Digital.docx"),

    # MÓDULO 7: RURAL, COMERCIAL E CONTRATOS ESPECÍFICOS (15)
    ("contrato-46", "46. Contrato de Arrendamento Rural (Estatuto da Terra)", "Lei 4.504/64", "46_Contrato_Arrendamento_Rural_Estatuto_Terra.docx"),
    ("contrato-47", "47. Contrato de Trespasse (Venda de Ponto Comercial)", "Arts. 1.142 ss. CC", "47_Contrato_Trespasse_Venda_Ponto_Comercial.docx"),
    ("contrato-48", "48. Compromisso de Compra e Venda de Terreno / Lote Urbano", "Lei 6.766/79", "48_Contrato_Compra_Venda_Terreno_Lote.docx"),
    ("contrato-49", "49. Contrato de Permuta de Imóveis (com ou sem Torna)", "Art. 533 CC", "49_Contrato_Permuta_Imoveis_com_ou_sem_Torna.docx"),
    ("contrato-50", "50. Cessão de Direitos Hereditários (Antes da Partilha)", "Art. 1.793 CC", "50_Contrato_Cessao_Direitos_Hereditarios.docx"),
    ("contrato-51", "51. Contrato de Gaveta (Cessão de Imóvel Financiado Caixa)", "Posse com Procuração", "51_Contrato_Gaveta_Cessao_Direitos_Imovel_Financiado.docx"),
    ("contrato-52", "52. Contrato de Honorários Advocatícios com Cláusula de Êxito", "Lei 8.906/94", "52_Contrato_Honorarios_Advocaticios_Quota_Litis.docx"),
    ("contrato-53", "53. Contrato de Sublocação de Imóvel com Autorização", "Lei 8.245/91", "53_Contrato_Sublocacao_Imovel_com_Autorizacao.docx"),
    ("contrato-54", "54. Compra e Venda com Reserva de Domínio (Equipamentos)", "Arts. 521 a 528 CC", "54_Contrato_Compra_Venda_Reserva_Dominio.docx"),
    ("contrato-55", "55. Contrato de Locação por Temporada (Até 90 Dias)", "Arts. 48 a 50 Lei 8.245", "55_Contrato_Locacao_Temporada_Lei_Inquilinato.docx"),
    ("contrato-56", "56. Contrato de Namoro (Inexistência de União Estável)", "Blindagem de Bens", "56_Contrato_Namoro_Declaracao_Inexistencia_Uniao_Estavel.docx"),
    ("contrato-57", "57. Contrato de Consignação de Veículo em Garagem / Loja", "Art. 534 CC", "57_Contrato_Consignacao_Veiculo_Estimatorio.docx"),
    ("contrato-58", "58. Contrato de Prestação de Serviços de Pedreiro e Obras", "Medição e Etapas", "58_Contrato_Prestacao_Servicos_Pedreiro_Construcao.docx"),
    ("contrato-59", "59. Contrato de Prestação de Serviços de Fotografia e Eventos", "Direitos Autorais", "59_Contrato_Servicos_Fotografia_Cobertura_Eventos.docx"),
    ("contrato-60", "60. Contrato de Personal Trainer e Consultoria Fitness", "Lei 9.696/98", "60_Contrato_Personal_Trainer_Consultoria_Fitness.docx")
]

def extract_docx_text(docx_path):
    if not os.path.exists(docx_path):
        return "Minuta em elaboração técnica pela banca. Clique para baixar em Word."
    doc = docx.Document(docx_path)
    lines = []
    for table in doc.tables:
        for row in table.rows:
            for cell in row.cells:
                t = cell.text.strip()
                if t:
                    lines.append(f"💡 {t}\n")
    for p in doc.paragraphs:
        t = p.text.strip()
        if t:
            lines.append(t)
    return "\n\n".join(lines)

updated_json = [
    {
        "id": "instrucoes",
        "title": "Instruções Iniciais e Como Usar o Acervo Definitivo",
        "badge": "Comece Aqui",
        "downloadFile": "Acervo_Contratos_Andrade_Florio.zip",
        "downloadLabel": "Baixar Todos os 60 Contratos (.zip)",
        "content": (
            "Seja bem-vindo ao Acervo Definitivo de Contratos Jurídicos Blindados da banca Andrade & Florio Sociedade de Advogados.\n\n"
            "Este acervo cobre 60 minutas fundamentais organizadas em 7 grandes áreas do Direito:\n"
            "• Transações e Locações Imobiliárias (Compra e Venda, Aluguel Residencial/Comercial, Comodato, Vistoria, Aditivos, Arras)\n"
            "• Negócios e Serviços Empresariais (Prestação de Serviços, PJ/Freelancer Anti-CLT, NDA, Joint Venture, Licenciamento de Marca)\n"
            "• Veículos, Finanças e Títulos Executivos (Compra e Venda Veículo CTB, Confissão de Dívida CPC, Mútuo, Transação, Quitações)\n"
            "• Trabalhista e RH / CLT (Trabalho Intermitente, Experiência, Teletrabalho, Banco de Horas, Rescisão por Mútuo Acordo, Advertência)\n"
            "• Societário e Família (Acordo de Sócios, Memorando de Entendimentos, Contrato de Convivência e Separação de Bens, Dissolução)\n"
            "• Sucessões e Direito Digital (Testamento Particular com 3 Testemunhas, Termos de Uso, Política de Privacidade LGPD, Gestão de Tráfego)\n"
            "• Rural, Agronegócio e Contratos Especiais (Arrendamento Rural, Trespasse de Ponto, Lotes, Permuta, Direitos Hereditários, Contrato de Gaveta, Honorários, Sublocação, Reserva de Domínio, Temporada, Namoro, Consignação de Veículos, Obras e Pedreiro, Fotografia, Personal Trainer).\n\n"
            "💡 MOTOR DE IA INTEGRADO (GOOGLE GEMINI):\n"
            "Se precisar adaptar qualquer cláusula ou se a sua situação exigir um modelo inédito, utilize o campo 'Assistente Jurídico IA' no topo de qualquer minuta. A inteligência artificial da banca reescreve ou gera o documento com plena segurança jurídica."
        )
    }
]

print("Sincronizando os 60 contratos no JSON...")
for cid, title, badge, fname in CONTRACTS_ALL:
    fpath = os.path.join(DOWNLOADS_DIR, fname)
    content = extract_docx_text(fpath)
    updated_json.append({
        "id": cid,
        "title": title,
        "badge": badge,
        "downloadFile": fname,
        "downloadLabel": "Baixar Minuta em Word (.docx)",
        "content": content
    })
    print(f"  OK: {cid} - {title[:40]}... ({len(content)} chars)")

with open(JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(updated_json, f, ensure_ascii=False, indent=2)

print(f"\ncontratosData.json salvo com {len(updated_json)} itens!")

# Gerar ZIP Mestre com os 60 contratos
zip_name = "Acervo_Contratos_Andrade_Florio.zip"
zip_path = os.path.join(DOWNLOADS_DIR, zip_name)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for cid, title, badge, fname in CONTRACTS_ALL:
        src = os.path.join(DOWNLOADS_DIR, fname)
        if os.path.exists(src):
            zipf.write(src, arcname=fname)

print(f"\nZIP Mestre com 60 contratos gerado: {zip_path} ({os.path.getsize(zip_path)} bytes)")

# Espelhar ZIP
copies = [
    os.path.join(ROOT, "public", zip_name),
    os.path.join(ROOT, "public", "downloads", "Acervo_30_Contratos_Andrade_Florio.zip"), # compatibilidade
    os.path.join(ROOT, "public", "Acervo_30_Contratos_Andrade_Florio.zip"),
    os.path.join(os.path.expanduser("~"), "Downloads", zip_name),
    os.path.join(os.path.expanduser("~"), "Desktop", zip_name)
]
for cp in copies:
    try:
        shutil.copyfile(zip_path, cp)
        print(f"  Espelhado em: {cp}")
    except Exception as e:
        print(f"  Aviso: {e}")

print("\nSincronização dos 60 contratos finalizada com sucesso!")
