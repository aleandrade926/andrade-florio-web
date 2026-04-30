import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Mail, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

const LibiaCapture = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    profissao: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Salva no Supabase
      const { error } = await supabase
        .from('leads_libia')
        .insert([
          { 
            nome: formData.nome, 
            email: formData.email, 
            whatsapp: formData.whatsapp, 
            profissao: formData.profissao 
          }
        ]);

      if (error) throw error;

      // 2. Redireciona para a página de VIP (Thank You Page)
      window.location.href = '/vip-offer';
      
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      alert('Ocorreu um erro ao processar seu cadastro. Por favor, tente novamente ou entre em contato via WhatsApp.');
      setLoading(false);
    }
  };

  return (
    <div className="capture-page-wrapper">
      <style>{`
        .capture-page-wrapper {
          min-height: 100vh;
          background-color: #0A0F16;
          color: white;
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }

        .capture-container {
          max-width: 1000px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          margin-top: 4rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .capture-container {
            grid-template-columns: 1fr;
            text-align: center;
            margin-top: 2rem;
          }
        }

        .headline {
          font-size: clamp(2.25rem, 4vw, 3.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .highlight-blue {
          color: #0052CC;
        }

        .subheadline {
          font-size: 1.25rem;
          color: #A0A0A0;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .form-card {
          background-color: #111824;
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid #1C1C1C;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .input-group {
          margin-bottom: 1.25rem;
          text-align: left;
        }

        .input-group label {
          display: block;
          font-size: 0.875rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .input-group input, .input-group select {
          width: 100%;
          background-color: #050B14;
          border: 1px solid #2A2A2A;
          color: white;
          padding: 0.875rem;
          border-radius: 6px;
          outline: none;
          transition: border-color 0.3s;
        }

        .input-group input:focus {
          border-color: #0052CC;
        }

        .btn-submit {
          width: 100%;
          background-color: #0052CC;
          color: white;
          font-weight: 900;
          padding: 1.25rem;
          border: none;
          border-radius: 6px;
          font-size: 1.125rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s;
          margin-top: 1rem;
        }

        .btn-submit:hover {
          background-color: #0040A0;
          transform: translateY(-2px);
        }

        .btn-submit:disabled {
          background-color: #333;
          cursor: not-allowed;
          transform: none;
        }

        .trust-badges {
          display: flex;
          gap: 2rem;
          margin-top: 4rem;
          color: #444;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>

      {/* HEADER LOGO */}
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
        <h1 style={{fontSize: '1.5rem', fontWeight: '900', letterSpacing: '0.2rem'}}>ANDRADE FLORIO</h1>
      </div>

      <div className="capture-container">
        {/* TEXT SIDE */}
        <div className="text-side">
          <h1 className="headline">
            Proteja sua <span className="highlight-blue">Comissão</span> e seus <span className="highlight-blue">Negócios</span> em 2026.
          </h1>
          <p className="subheadline">
            Baixe o <strong>Checklist Tático de Due Diligence Imobiliária</strong> e tenha em mãos o guia definitivo para validar matrículas, tributos e documentos antes de assinar qualquer contrato.
          </p>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <ShieldCheck size={20} color="#0052CC" />
              <span>Validado por Mestre pela USP</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <ShieldCheck size={20} color="#0052CC" />
              <span>Atualizado com a Reforma Tributária 2026</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <ShieldCheck size={20} color="#0052CC" />
              <span>Pronto para aplicação imediata</span>
            </div>
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="form-side">
          <form className="form-card" onSubmit={handleSubmit}>
            <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center'}}>
              Acesse o Material Agora
            </h3>
            
            <div className="input-group">
              <label>Seu nome completo</label>
              <input 
                required
                type="text" 
                placeholder="Como quer ser chamado?" 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>Seu melhor e-mail</label>
              <input 
                required
                type="email" 
                placeholder="nome@email.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>WhatsApp com DDD</label>
              <input 
                required
                type="text" 
                placeholder="(00) 00000-0000" 
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>Sua profissão</label>
              <select 
                required
                value={formData.profissao}
                onChange={(e) => setFormData({...formData, profissao: e.target.value})}
              >
                <option value="" disabled>Selecione...</option>
                <option value="corretor">Corretor de Imóveis</option>
                <option value="advogado">Advogado</option>
                <option value="investidor">Investidor</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <button className="btn-submit" type="submit" disabled={loading}>
              {loading ? 'PROCESSANDO...' : 'BAIXAR MATERIAL GRATUITO'}
              {!loading && <ChevronRight size={20} />}
            </button>
            
            <p style={{fontSize: '10px', color: '#444', marginTop: '1rem', textAlign: 'center'}}>
              Seus dados estão seguros e de acordo com a LGPD.
            </p>
          </form>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div className="trust-badges">
        <div className="trust-badge">
          <Mail size={16} />
          <span>Acesso Imediato</span>
        </div>
        <div className="trust-badge">
          <Users size={16} />
          <span>+5.000 Profissionais</span>
        </div>
        <div className="trust-badge">
          <ShieldCheck size={16} />
          <span>Conformidade OAB</span>
        </div>
      </div>

    </div>
  );
};

export default LibiaCapture;
