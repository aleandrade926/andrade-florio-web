import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Usucapiao from './pages/Usucapiao';
import Inventarios from './pages/Inventarios';
import Atendimento from './pages/Atendimento';
import OnePager from './pages/OnePager';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos/distrato-de-locacao" element={<Article />} />
        <Route path="/servicos/usucapiao" element={<Usucapiao />} />
        <Route path="/servicos/inventarios" element={<Inventarios />} />
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/onepager" element={<OnePager />} />
      </Routes>
    </Router>
  );
}

export default App;
