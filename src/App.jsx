import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import Home from './pages/Home';
import Regularizacao from './pages/Regularizacao';
import Article from './pages/Article';
import Usucapiao from './pages/Usucapiao';
import Inventarios from './pages/Inventarios';
import Atendimento from './pages/Atendimento';
import OnePager from './pages/OnePager';
import './App.css';

import ManualUsucapiao from './pages/ManualUsucapiao';
import Sammarone from './pages/Sammarone';
import LibiaVipOffer from './pages/LibiaVipOffer';
import LibiaCapture from './pages/LibiaCapture';
import HEgidio from './pages/HEgidio';
import Imobiliarias from './pages/Imobiliarias';

// Componente para rastrear mudanças de página no Google Ads (SPA)
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'AW-822096588', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  const [showLgpdBanner, setShowLgpdBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("andradeflorio_lgpd_accepted");
    if (!accepted) {
      const timer = setTimeout(() => {
        setShowLgpdBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptLgpd = () => {
    localStorage.setItem("andradeflorio_lgpd_accepted", "true");
    setShowLgpdBanner(false);
  };

  return (
    <Router>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regularizacao" element={<Regularizacao />} />
        <Route path="/inscricao" element={<LibiaCapture />} />
        <Route path="/vip-offer" element={<LibiaVipOffer />} />
        <Route path="/artigos/distrato-de-locacao" element={<Article />} />
        <Route path="/servicos/usucapiao" element={<Usucapiao />} />
        <Route path="/servicos/inventarios" element={<Inventarios />} />
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/onepager" element={<OnePager />} />
        <Route path="/manual-usucapiao" element={<ManualUsucapiao />} />
        <Route path="/proposta/sammarone" element={<Sammarone />} />
        <Route path="/proposta/hegidio" element={<HEgidio />} />
        <Route path="/imobiliarias" element={<Imobiliarias />} />
      </Routes>

      {showLgpdBanner && (
        <div className="lgpd-banner">
          <div className="lgpd-content">
            <div className="lgpd-icon-wrapper">
              <ShieldCheck size={20} />
            </div>
            <div className="lgpd-text-container">
              <h4 className="lgpd-title">Privacidade & LGPD</h4>
              <p className="lgpd-description">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>
          </div>
          <div className="lgpd-action">
            <button className="lgpd-btn" onClick={handleAcceptLgpd}>
              Aceitar e Continuar
            </button>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
