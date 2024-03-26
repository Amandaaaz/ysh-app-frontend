import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TelaScan from './Pages/TelaScan';
import CadastroDispositivos from './Pages/CadastroDispositivos'; 
import ModalCadastro from './Modal/ModalCadastro'; 
import DispositivosCadastrados from './Pages/DispositivosCadastrados'; // Importe o componente DispositivosCadastrados
import CadastroAmbientes from './Pages/CadastroAmbientes';
import ModalAmbientes from './Modal/ModalAmbientes';
import AmbientesCadastrados from './Pages/AmbientesCadastrados';

function App() {
  const [showCadastroDispositivos, setShowCadastroDispositivos] = useState(false);
  const [showCadastroAmbientes, setShowCadastroAmbientes] = useState(false);
  const [showTelaScan, setShowTelaScan] = useState(true);
  const [dispositivosCadastrados, setDispositivosCadastrados] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalAmbiente, setShowModalAmbiente] = useState(false);
  const [isDispositivosPageActive, setIsDispositivosPageActive] = useState(false); // Estado para rastrear se a página DispositivosCadastrados está ativa
  const [ambientesData, setAmbientesData] = useState([]);


  const adicionarDispositivo = (dispositivo) => {
    setDispositivosCadastrados([...dispositivosCadastrados, dispositivo]);
    setShowModal(true);
  };
  const adicionarAmbientes = (ambiente) => {
    setDispositivosCadastrados([...dispositivosCadastrados, ambiente]);
    setShowModalAmbiente(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShowModalAmbiente(false);
    setShowCadastroDispositivos(false);
    setShowTelaScan(true);
  };

  const handleOkButtonClick = () => {
    setShowModal(false);
    setShowModalAmbiente(false);
    setShowCadastroDispositivos(false);
    setShowCadastroAmbientes(false);
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
      {/* {showCadastroDispositivos && <CadastroDispositivos onCadastro={adicionarDispositivo} />}
      {showCadastroAmbientes && <CadastroAmbientes onCadastro={adicionarAmbientes} />}
      {showModal && <ModalCadastro onClose={handleModalClose} onOkClick={handleOkButtonClick} />}
      {showModalAmbiente && <ModalAmbientes onClose={handleModalClose} onOkClick={handleOkButtonClick} />}
      {showTelaScan && !showModal && <TelaScan dispositivos={dispositivosCadastrados} />}
      {isDispositivosPageActive && <DispositivosCadastrados dispositivos={dispositivosCadastrados} />} */}

      <AmbientesCadastrados ambientes={ambientesData} />

      
      <Footer 
        setShowCadastroDispositivos={setShowCadastroDispositivos} 
        setShowCadastroAmbientes={setShowCadastroAmbientes}
        setShowTelaScan={setShowTelaScan} 
        setIsDispositivosPageActive={setIsDispositivosPageActive} 
        isDispositivosPageActive={isDispositivosPageActive} // Passando a propriedade isDispositivosPageActive para o Footer
      />
    </div>
  );
}

export default App;