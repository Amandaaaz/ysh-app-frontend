import React, { useState, useRef, useLayoutEffect } from 'react';
import './DispositivosCadastrados.css';
import LupaImage from '../Assets/Lupa.png';
import lampadaImage from '../Assets/lampada.png';
import arCondicionadoImage from '../Assets/ar condicionado.png';
import fechaduraImage from '../Assets/fechadura.png';
import FloatingButtonImage from '../Assets/floating button.png'; // Importe a imagem aqui

function DispositivosCadastrados({ dispositivos }) {
    const [searchText, setSearchText] = useState('');
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [isDeviceVisible, setIsDeviceVisible] = useState(false);
    const deviceInfoRef = useRef(null);

    const toggleDeviceSelection = (deviceID) => {
        if (selectedDevice === deviceID) {
            setSelectedDevice(null); // Desmarca o checkbox se já estiver selecionado
        } else {
            setSelectedDevice(deviceID); // Marca o checkbox selecionado
        }
    };

    // Mapeamento dos nomes de dispositivos para as respectivas imagens
    const deviceImages = {
        'lâmpada': lampadaImage,
        'ar condicionado': arCondicionadoImage,
        'fechadura': fechaduraImage
    };

    // Função para obter a imagem do dispositivo com base no nome
    const getDeviceImage = (deviceName) => {
        return deviceImages[deviceName.toLowerCase()] || null;
    };

    // Atualiza o estado isDeviceVisible com base na visibilidade da device-info
    useLayoutEffect(() => {
        const handleScroll = () => {
            if (deviceInfoRef.current) {
                const deviceInfoRect = deviceInfoRef.current.getBoundingClientRect();
                setIsDeviceVisible(deviceInfoRect.top >= 0 && deviceInfoRect.bottom <= window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Chamada inicial para verificar a visibilidade no carregamento da página
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleFloatingButtonClick = () => {
        // Aqui você pode adicionar a lógica que deseja quando o botão "floating" é clicado
    };

    return (
        <div className="TelaScan">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Digite o ID ou nome do dispositivo"
                    className="search-input"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <img src={LupaImage} alt="Ícone de Lupa" className="lupa-image" />
            </div>
            <p className='p1'>Dispositivos disponíveis</p>
            <p className='p2'>Escolha o dispositivo que deseja cadastrar</p>
            <ul className='p3' style={{ paddingLeft: `${searchText.length * 5}px` }}>
                {dispositivos.map((dispositivo) => (
                    <li key={dispositivo.deviceID}>
                        <div className="device-info" ref={deviceInfoRef}>
                            <input
                                type="checkbox"
                                className="checkbox-custom"
                                checked={selectedDevice === dispositivo.deviceID}
                                onChange={() => toggleDeviceSelection(dispositivo.deviceID)}
                                id={`checkbox-${dispositivo.deviceID}`}
                            />
                            <label htmlFor={`checkbox-${dispositivo.deviceID}`}></label>
                            <div className='device-size'>
                                <span className="device-name">#{dispositivo.deviceName}</span>
                                <span className="device-brand"> {dispositivo.deviceBrand}</span>
                                <span className="device-id">ID: {dispositivo.deviceID}</span>
                            </div>
                            <div className='device-img'>
                                <img src={getDeviceImage(dispositivo.deviceName)} alt="Device" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {isDeviceVisible && (
                <div className="buttons-container-wrapper">
                    <div className="buttons-container">
                        <button className="add-button">Adicionar a um ambiente</button>
                        <button className="remove-button">Remover</button>
                    </div>
                </div>
            )}
            {/* Botão Floating */}
            <div className="floating-button" onClick={handleFloatingButtonClick}>
                <img src={FloatingButtonImage} alt="Floating Button" />
            </div>
        </div>
    );
}

export default DispositivosCadastrados;