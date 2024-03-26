import React, { useState } from 'react';
import ModalCadastro from '../Modal/ModalCadastro'; 
import '../Modal/ModalCadastro.css'; 
import './CadastroDispositivos.css'; 
import '../index.css';

function CadastroDispositivos({ onCadastro }) {
    const [showModal, setShowModal] = useState(false);
    const [deviceID, setDeviceID] = useState('');
    const [deviceBrand, setDeviceBrand] = useState('');
    const [deviceAmbience, setDeviceAmbience] = useState('');
    const [deviceName, setDeviceName] = useState('');

    const handleCadastrar = () => {
        const novoDispositivo = {
            deviceID,
            deviceBrand,
            deviceAmbience,
            deviceName
        };
        onCadastro(novoDispositivo); // Chama a função para adicionar dispositivo
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e, setter) => {
        const value = e.target.value;
        setter(value);
    };

    const handleInputBlur = (e) => {
        if (e.target.value.trim() !== '') {
            e.target.style.backgroundColor = '#f5f5f5';
            e.target.style.color = '#a2a3a6';
        } else {
            e.target.style.backgroundColor = ''; 
            e.target.style.color = '';
        }
    };
    
    return (
        <div>
            {showModal ? (
                <ModalCadastro onClose={handleCloseModal} />
            ) : (
                <div className="cadastroDispositivos">
                    <h1>Cadastrar Dispositivo</h1>            
                    <div className='input-device'>
                        <label htmlFor='deviceID'>ID do dispositivo</label>
                        <input type="text" id="deviceID" placeholder="Digite o ID do dispositivo" onChange={(e) => handleInputChange(e, setDeviceID)} onBlur={handleInputBlur}/>
                    </div>
                    <div className='input-device-brand'>
                        <label htmlFor='deviceBrand'>Marca do dispositivo</label>
                        <input type="text" id="deviceBrand" placeholder="Digite a marca do dispositivo" onChange={(e) => handleInputChange(e, setDeviceBrand)} onBlur={handleInputBlur}/>
                    </div>
                    <div className='input-device-ambience'>
                        <label htmlFor='deviceAmbience'>Ambiente de instalação</label>
                        <input type="text" id="deviceAmbience" placeholder="Digite o ambiente de instalação" onChange={(e) => handleInputChange(e, setDeviceAmbience)} onBlur={handleInputBlur}/>
                    </div>
                    <div className='input-device-name'>
                        <label htmlFor='deviceName'>Nome do dispositivo</label>
                        <input type="text" id="deviceName" placeholder="Digite o nome do dispositivo" onChange={(e) => handleInputChange(e, setDeviceName)} onBlur={handleInputBlur}/>
                    </div>            
                    <div className="button-container">
                        <button className='cadastrar-dis-button' onClick={handleCadastrar}>Cadastrar dispositivo</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CadastroDispositivos;