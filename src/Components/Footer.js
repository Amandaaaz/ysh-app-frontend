import React, { useState } from 'react';
import './Footer.css';
import home from '../Assets/home.png'; 
import dispositivo from '../Assets/dispositivo.png'; 
import dispositivoActive from '../Assets/dispositivoActive.png'; 
import ambientes from '../Assets/ambientes.png'; 
import notification from '../Assets/notification.png';
import homeActive from '../Assets/homeActive.png'; 

function Footer({ setShowCadastroDispositivos, setShowCadastroAmbientes, setShowTelaScan, setIsDispositivosPageActive, isDispositivosPageActive }) { // Adicione isDispositivosPageActive como propriedade
  const [inicioAtivo, setInicioAtivo] = useState(false);

  const handleInicioClick = () => {
    setShowCadastroDispositivos(false);
    setShowTelaScan(true);
    setIsDispositivosPageActive(false);
    setInicioAtivo(true);
  };

  const handleAmbientesClick = () => {
    setShowCadastroAmbientes(true);
  };
  

  const handleDispositivosClick = () => {
    setShowCadastroDispositivos(false); // Evita mostrar a tela de cadastro de dispositivos quando clicado no footer "Dispositivos"
    setShowTelaScan(false);
    setIsDispositivosPageActive(true);
    setInicioAtivo(false);
  };

  return (
    <footer className="footer">
      <div className={`footer-item ${inicioAtivo ? 'active' : ''}`} onClick={handleInicioClick}>
        <img src={inicioAtivo ? homeActive : home} alt="Ícone 1" />
        <p style={{ color: inicioAtivo ? '#FF3097' : '' }}>Início</p>
      </div>
      <div className={`footer-item ${isDispositivosPageActive ? 'active' : ''}`} onClick={handleDispositivosClick}>
        <img src={isDispositivosPageActive ? dispositivoActive : dispositivo} alt="Ícone 2" />
        <p style={{ color: isDispositivosPageActive ? '#FF3097' : '' }}>Dispositivos</p>
      </div>
      <div className="footer-item" onClick={handleAmbientesClick}>
        <img src={ambientes} alt="Ícone 3" />
        <p style={{ color: isDispositivosPageActive ? '#FF3097' : '' }}>Ambientes</p>
      </div>

      <div className="footer-item">
        <img src={notification} alt="Ícone 4" />
        <p>Notificações</p>
      </div>
    </footer>
  );
}

export default Footer;