import React from 'react';
import { Check, MessageCircle, Book } from 'lucide-react';

const LibiaVipOffer = () => {
  return (
    <div className="vip-page-wrapper">
      <style>{`
        .vip-page-wrapper {
          min-height: 100vh;
          background-color: #050B14;
          color: white;
          font-family: 'Inter', sans-serif;
          padding-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .vip-container {
          max-width: 800px;
          width: 100%;
          padding: 0 1.5rem;
          margin-top: 2rem;
        }

        .header-title {
          font-weight: 900;
          text-transform: uppercase;
          font-size: 2.5rem;
          margin-bottom: 0.25rem;
          color: white;
        }

        .header-subtitle {
          font-weight: 900;
          text-transform: uppercase;
          font-size: 1.5rem;
          background: linear-gradient(to right, #666, #fff, #666);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.2rem;
        }

        .headline-box {
          background-color: #0052CC;
          color: white;
          padding: 1rem 2rem;
          font-weight: 900;
          font-size: 2.5rem;
          margin: 2rem auto;
          display: inline-block;
          box-shadow: 0 0 40px rgba(0, 82, 204, 0.6);
        }

        .main-p {
          color: #A0A0A0;
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .btn-blue {
          background-color: #0052CC;
          color: white;
          font-weight: bold;
          padding: 1.25rem 2.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin: 0 auto 3.5rem;
          width: 100%;
          max-width: 400px;
          transition: background 0.3s;
        }

        .btn-blue:hover {
          background-color: #0040A0;
        }

        .upsell-text {
          color: #A0A0A0;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .btn-gold {
          background: linear-gradient(to bottom, #b88645, #8a602a);
          color: white;
          font-weight: bold;
          padding: 1.5rem;
          border: 1px solid rgba(212, 171, 113, 0.4);
          border-radius: 4px;
          font-size: 1.25rem;
          width: 100%;
          max-width: 500px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin: 0 auto 2.5rem;
          box-shadow: 0 0 30px rgba(184, 134, 69, 0.3);
        }

        .btn-gold:hover {
          background: linear-gradient(to bottom, #cfa163, #a3773b);
        }

        .bullet-list {
          text-align: left;
          max-width: 500px;
          margin: 3rem auto;
        }

        .bullet-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
          color: #A0A0A0;
        }

        .bullet-dot {
          min-width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          margin-top: 0.5rem;
        }

        .progress-container {
          width: 100%;
          max-width: 400px;
          height: 24px;
          border: 1px solid #0052CC;
          border-radius: 12px;
          margin: 1.5rem auto 3.5rem;
          padding: 2px;
          position: relative;
        }

        .progress-bar {
          background-color: #0052CC;
          height: 100%;
          width: 80%;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          font-size: 10px;
          font-weight: bold;
        }

        .insta-section {
          margin-top: 4rem;
        }

        .help-box {
          background-color: #111824;
          border: 1px solid #2A2A2A;
          border-radius: 12px;
          padding: 2rem;
          margin: 4rem auto;
          max-width: 550px;
          width: 100%;
        }

        .btn-wa {
          background-color: #128C7E;
          color: white;
          font-weight: bold;
          padding: 1rem 2rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 2rem auto 0;
        }

        .footer {
          width: 100%;
          border-top: 1px solid #1C1C1C;
          padding: 1.5rem 0;
          font-size: 12px;
          color: #444;
          background-color: black;
          margin-top: auto;
        }
      `}</style>

      {/* HEADER */}
      <div className="vip-container" style={{paddingTop: '2rem'}}>
        <h1 className="header-title">IMERSÃO BLINDAGEM</h1>
        <h2 className="header-subtitle">JURÍDICO-FISCAL</h2>
        
        <div className="headline-box">PARABÉNS!</div>

        <p className="main-p">
          Você acaba de garantir seu material e agora faz parte de um <span style={{color: '#00c3ff', fontWeight: 'bold'}}>movimento, um exército de profissionais que não aceitam mais deixar dinheiro na mesa</span> por insegurança regulatória!
        </p>

        <button className="btn-blue">
          <Book size={20} />
          RESGATE SEU PRESENTE AQUI
        </button>

        <p className="upsell-text">
          Mas existe uma diferença abissal entre ler um documento e ter direcionamento técnico. Por isso, abrimos a possibilidade de um <strong>super upgrade</strong>:
        </p>

        <button className="btn-gold">
          <Check size={24} />
          QUERO SER VIP POR R$97
        </button>

        <p style={{color: '#888', marginBottom: '2rem'}}>
          Com esse acesso, você não recebe apenas arquivos soltos.<br/>
          Você entra em um <strong style={{color: 'white'}}>ambiente de execução assistida</strong>.
        </p>

        <div className="bullet-list">
          <p style={{color: 'white', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem'}}>Veja o que você desbloqueia com o acesso VIP:</p>
          <div className="bullet-item">
            <div className="bullet-dot"></div>
            <span><strong style={{color: 'white'}}>Sessão tira-dúvidas exclusiva</strong> todos os dias com o suporte VIP e Dra. Líbia Florio</span>
          </div>
          <div className="bullet-item">
            <div className="bullet-dot"></div>
            <span><strong style={{color: 'white'}}>Acervo completo</strong> com todo o conteúdo e minutas estruturadas</span>
          </div>
          <div className="bullet-item">
            <div className="bullet-dot"></div>
            <span><strong style={{color: 'white'}}>Agente de IA</strong> com o cérebro das nossas teses para consultas rápidas 24/7</span>
          </div>
          <div className="bullet-item">
            <div className="bullet-dot"></div>
            <span><strong style={{color: 'white'}}>Grupo exclusivo no WhatsApp</strong> com acesso direto e comunicação prioritária</span>
          </div>
        </div>

        <button className="btn-gold">
          <Check size={24} />
          QUERO SER VIP
        </button>

        <div className="progress-container">
          <div className="progress-bar">
            <span>Completo</span>
            <span>80%</span>
          </div>
        </div>

        <div className="insta-section">
          <h3 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem'}}>Esteja por dentro de tudo na nossa<br/>comunidade no Instagram.</h3>
          <button className="btn-blue" style={{maxWidth: '350px'}}>ENTRAR AGORA</button>
        </div>

        <div className="help-box">
          <p style={{fontWeight: 'bold', fontSize: '1.25rem'}}>Precisa de ajuda?</p>
          <p style={{color: '#666', fontSize: '0.875rem'}}>Fale com a nossa equipe: libia@andradeflorio.com.br</p>
          <button 
            className="btn-wa"
            onClick={() => window.open('https://wa.me/5511945727148?text=Olá Dra Líbia, tenho uma dúvida sobre o acesso VIP.', '_blank')}
          >
            <MessageCircle size={20} />
            FALAR COM O TIME DA LÍBIA
          </button>
        </div>
      </div>

      <div className="footer">
        <p>Andrade Florio © 2026. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default LibiaVipOffer;
