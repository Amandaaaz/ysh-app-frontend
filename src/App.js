import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TelaScan from './Pages/TelaScan';
import CadastroDispositivos from './Pages/CadastroDispositivos'; 
import ModalCadastro from './Modal/ModalCadastro'; 
import FloatingButtonImage from './Assets/floating button.png'; // Importe a imagem aqui
import DispositivosCadastrados from './Pages/DispositivosCadastrados'; // Importe o componente DispositivosCadastrados

function App() {
  const [showCadastroDispositivos, setShowCadastroDispositivos] = useState(false);
  const [showTelaScan, setShowTelaScan] = useState(true);
  const [dispositivosCadastrados, setDispositivosCadastrados] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isDispositivosPageActive, setIsDispositivosPageActive] = useState(false); // Estado para rastrear se a página DispositivosCadastrados está ativa

  const adicionarDispositivo = (dispositivo) => {
    setDispositivosCadastrados([...dispositivosCadastrados, dispositivo]);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShowCadastroDispositivos(false);
    setShowTelaScan(true);
  };

  const handleOkButtonClick = () => {
    setShowModal(false);
    setShowCadastroDispositivos(false);
    setShowTelaScan(false);
    setIsDispositivosPageActive(true); // Ativa a página DispositivosCadastrados
  };

  const handleFloatingButtonClick = () => {
    setShowCadastroDispositivos(true);
    setShowTelaScan(false);
    setIsDispositivosPageActive(false); // Desativa a página DispositivosCadastrados
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
      {isDispositivosPageActive && <DispositivosCadastrados dispositivos={dispositivosCadastrados} />}
      <Footer 
        setShowCadastroDispositivos={setShowCadastroDispositivos} 
        setShowTelaScan={setShowTelaScan} 
        setIsDispositivosPageActive={setIsDispositivosPageActive} 
        isDispositivosPageActive={isDispositivosPageActive} // Passando a propriedade isDispositivosPageActive para o Footer
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