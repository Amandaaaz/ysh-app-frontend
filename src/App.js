import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TelaScan from './Pages/TelaScan';
import CadastroDispositivos from './Pages/CadastroDispositivos'; 
import ModalCadastro from './Modal/ModalCadastro'; 
import FloatingButtonImage from './Assets/floating button.png'; 
import DispositivosCadastrados from './Pages/DispositivosCadastrados'; 
import AmbientesCadastrados from './Pages/AmbientesCadastrados';

function App() {
  const [showCadastroDispositivos, setShowCadastroDispositivos] = useState(false);
  const [showTelaScan, setShowTelaScan] = useState(true);
  const [dispositivosCadastrados, setDispositivosCadastrados] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isDispositivosPageActive, setIsDispositivosPageActive] = useState(false); 
  const [showAmbientes, setShowAmbientes] = useState(false);
  const [ambientes, setAmbientes] = useState([]);

  const adicionarDispositivo = (dispositivo) => {
    setDispositivosCadastrados([...dispositivosCadastrados, dispositivo]);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShowCadastroDispositivos(false);
    setShowTelaScan(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Atualizando o estado para mostrar a página de ambientes cadastrados
    setShowAmbientes(true);
  };

  const handleOkButtonClick = () => {
    setShowModal(false);
    setShowCadastroDispositivos(false);
    setShowTelaScan(false);
    setIsDispositivosPageActive(true); 
  };

  const handleFloatingButtonClick = () => {
    setShowCadastroDispositivos(true);
    setShowTelaScan(false);
    setIsDispositivosPageActive(false); 
  };

  const handleCadastro = (ambianceData) => {
    setAmbientes([...ambientes, ambianceData]);
  };
  
  return (
    <div className="App">
      <div className="content-wrapper">
        <Navbar />
        <div className="main-content">
          <div className="company-name">
            Yolo Smart Home
          </div>
        </div>
      </div>
      {showCadastroDispositivos && <CadastroDispositivos onCadastro={adicionarDispositivo} />}
      {showModal && <ModalCadastro onClose={handleModalClose} onOkClick={handleOkButtonClick} />}
      {showTelaScan && !showModal && <TelaScan dispositivos={dispositivosCadastrados} />}
      {isDispositivosPageActive && !showAmbientes && <DispositivosCadastrados dispositivos={dispositivosCadastrados} />}
      {showAmbientes && !isDispositivosPageActive && <AmbientesCadastrados ambientes={ambientes} onCadastro={handleCadastro} onCloseModal={handleCloseModal} />}
      <Footer 
        setShowAmbientes={setShowAmbientes} 
        setShowCadastroDispositivos={setShowCadastroDispositivos} 
        setShowTelaScan={setShowTelaScan} 
        setIsDispositivosPageActive={setIsDispositivosPageActive} 
        isDispositivosPageActive={isDispositivosPageActive} 
      />
      {showTelaScan && (
        <div className="floating-button" onClick={handleFloatingButtonClick}>
          <img src={FloatingButtonImage} alt="Floating Button" />
        </div>
      )}
    </div>
  );
}

export default App;
