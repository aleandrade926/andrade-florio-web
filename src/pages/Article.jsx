import React, { useEffect } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton, StickyWhatsApp, Footer } from '../components/Shared';

export default function ArticlePage() {
  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Simples */}
      <header style={{ padding: '2rem 0', borderBottom: '1px solid var(--bg-surface-light)', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.9rem' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color='var(--text-muted)'}>
            <ArrowLeft size={16} /> Voltar para o Escritório
          </Link>
          <img src="/favicon.svg" alt="Andrade e Florio" style={{ height: '40px', width: 'auto' }} />
        </div>
      </header>

      {/* Conteúdo do Artigo */}
      <main style={{ flexGrow: 1, padding: '4rem 0' }}>
        <article className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Cabeçalho do Artigo */}
          <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <div style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '1rem' }}>Direito Imobiliário • 18 de abril de 2026</div>
            <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>
              Dicas para Distrato de Locação: Segurança jurídica para uma transação imobiliária profissional
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--bg-surface-light)', border: '1px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/dra-libia.png" alt="Dra. Libia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.style.display='none'} />
                <User color="var(--accent-gold)" style={{ position: 'absolute', zIndex: -1 }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Dra. Libia Cristiane C. A. Florio</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mestre em Direito (USP) • Especialista Imobiliária</div>
              </div>
            </div>
          </header>

          {/* Corpo do Artigo (Tipografia Editorial) */}
          <div className="article-body" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
            
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.6rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>Introdução</h2>
              <p style={{ marginBottom: '1.5rem' }}>A extinção das relações locatícias por meio do distrato representa um dos momentos de maior complexidade e potencial litigiosidade no mercado imobiliário brasileiro. Diferente da rescisão unilateral, que frequentemente ocorre em um contexto de conflito ou inadimplemento, o distrato fundamenta-se na autonomia da vontade e no consenso, permitindo que as partes ajustem os termos de encerramento de forma a mitigar prejuízos e encerrar pendências financeiras e obrigacionais de maneira definitiva.</p>
              <p style={{ marginBottom: '1.5rem' }}>No entanto, a aparente simplicidade de um acordo amigável pode ocultar riscos jurídicos severos, especialmente quando o instrumento não observa os ditames da Lei do Inquilinato (Lei nº 8.245/1991) e do Código Civil, ou quando falha em documentar adequadamente o estado de conservação do imóvel e a quitação de débitos.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.6rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>1. Fundamentos jurídicos da extinção consensual</h2>
              <p style={{ marginBottom: '1.5rem' }}>O distrato, tecnicamente classificado como resilição bilateral, é o negócio jurídico pelo qual as partes, em comum acordo, resolvem por fim a um vínculo contratual anteriormente estabelecido.</p>
              <p style={{ marginBottom: '1.5rem' }}>Na esfera específica das locações urbanas, a Lei do Inquilinato prevê o distrato no seu artigo 9º, inciso I, como a primeira hipótese de desfazimento da locação.</p>
              <p style={{ marginBottom: '1.5rem' }}>Enquanto o artigo 4º da mesma lei faculta ao locatário a devolução do imóvel mediante o pagamento de multa proporcional, o distrato oferece uma camada adicional de liberdade, permitindo que locador e locatário transijam sobre o valor da multa, prazos de desocupação e eventuais reparos, criando uma regra própria que substitui as cláusulas do contrato original para aquele momento específico de encerramento.</p>
            </section>

            <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderLeft: '4px solid var(--accent-gold)', margin: '3rem 0', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Pausa Estratégica: Seu acordo é seguro?</h3>
              <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Pequenos detalhes no momento da entrega das chaves podem custar dezenas de milhares de reais em reparações não previstas.</p>
              <WhatsAppButton text="Solicitar Revisão do Meu Distrato" outline={true} />
            </div>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.6rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>2. Dicas de Ouro para o Distrato Ideal</h2>
              <p style={{ marginBottom: '1.5rem' }}>A eficácia de um distrato depende da sua capacidade de não deixar "pontas soltas" que possam motivar futuras ações judiciais de cobrança de aluguéis, danos morais ou reparação de danos materiais.</p>
              
              <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>2.1. Data da cessação dos Efeitos</h3>
              <p style={{ marginBottom: '1.5rem' }}>A primeira dica é definir quando o contrato deixará de produzir efeitos. A recomendação é que o distrato fixe uma data certa ou vincule o término das obrigações à <strong>"entrega das chaves mediante recibo"</strong>.</p>
              <p style={{ marginBottom: '1.5rem' }}>Não é prudente deixar que o contrato seja encerrado com a mera "desocupação" sem a entrega formal da posse, pois isso gera discussões sobre a continuidade da responsabilidade por IPTU, condomínio e contas de consumo.</p>

              <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>2.2. Entrega das chaves precedida de vistoria de saída</h3>
              <p style={{ marginBottom: '1.5rem' }}>Vincule a entrega do imóvel à realização de uma vistoria final num prazo estipulado (ex: 30 dias). Este é o ponto de maior atrito em distratos.</p>
              <p style={{ marginBottom: '1.5rem' }}>Um laudo de vistoria unilateral, realizado apenas pelo locador ou imobiliária sem convocação do inquilino, é considerado uma prova frágil no judiciário. O STJ é firme no sentido de que a vistoria deve ser acompanhada por ambas as partes.</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Realização de relatório fotográfico e em vídeo, datados.</li>
                <li style={{ marginBottom: '0.5rem' }}>Comparação item a item com o laudo de vistoria inicial.</li>
                <li style={{ marginBottom: '0.5rem' }}>Assinatura imediata do termo de vistoria de saída.</li>
              </ul>

              <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>2.3. O Cálculo da multa rescisória proporcional</h3>
              <p style={{ marginBottom: '1.5rem' }}>Mesmo que o distrato seja amigável, ele deve respeitar o limite máximo da multa proporcional estabelecido por lei. O locador não pode cobrar a multa "cheia" se uma parte do contrato já foi cumprida.</p>
              <p style={{ marginBottom: '1.5rem' }}>Importante ressaltar que há situações onde o inquilino pode realizar o distrato isento de multa: transferência de local de trabalho devidamente notificada, contrato em prazo indeterminado ou vícios graves no imóvel (falta de habitabilidade).</p>

              <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>2.4. Quitação mútua e responsabilidade por vícios ocultos</h3>
              <p style={{ marginBottom: '1.5rem' }}>Para o locatário, a quitação plena é a maior segurança contra a "indústria das reformas" pós-entrega de chaves. A orientação é detalhar no termo exatamente o que precisa de reparo e o que está sendo aceito como "desgaste natural".</p>

              <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>2.5. Validade das assinaturas digitais</h3>
              <p style={{ marginBottom: '1.5rem' }}>O STJ (REsp 2.159.442-PR - Out/2024) validou recentemente contratos imobiliários assinados eletronicamente mesmo sem certificado ICP-Brasil, desde que a plataforma gere um "Log de Auditoria" rigoroso registrando IP, geolocalização e carimbo de tempo.</p>

              <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>2.6. A ilegalidade da recusa das chaves</h3>
              <p style={{ marginBottom: '1.5rem' }}>Um erro gritante de muitos locadores: recusar o recebimento das chaves porque o inquilino não fez os reparos exigidos! O STJ definiu que a devolução do imóvel <strong>não</strong> pode ser impedida por pendências de reparos. O locador deve receber as chaves, fazer as ressalvas no documento e depois cobrar os reparos (usando garantia ou via judicial).</p>
            </section>
            
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ color: 'var(--text-main)', fontSize: '1.6rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>Conclusão</h2>
              <p style={{ marginBottom: '1.5rem' }}>O distrato, seguindo o passo a passo de segurança, será um documento funcional que refletirá não apenas um acordo livre de vontades, mas converterá o que seria uma rescisão traumática em uma transação fluida, profissional e intocável na justiça.</p>
            </section>

          </div>

          <hr style={{ border: 'none', borderBottom: '1px solid var(--bg-surface-light)', margin: '4rem 0' }} />

          {/* CTA Matador */}
          <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-surface)', padding: '4rem 2rem', borderRadius: '8px', border: '1px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Evite litígios e surpresas ocultas.</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Vai rescindir seu contrato de locação (como inquilino ou proprietário) e quer blindar seu patrimônio? Agende uma análise jurídica estratégica do seu distrato.
            </p>
            <WhatsAppButton text="Falar agora com a Dra. Libia" />
          </div>

        </article>
      </main>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
