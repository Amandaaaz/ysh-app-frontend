import './AmbientesCadastrados.css';
import React, { useState, useRef, useLayoutEffect } from 'react';
import LupaImage from '../Assets/Lupa.png';
import lampadaImage from '../Assets/lampada.png';
import arCondicionadoImage from '../Assets/ar condicionado.png';
import fechaduraImage from '../Assets/fechadura.png';
import FloatingButtonImage from '../Assets/floating button.png'; 


function AmbientesCadastrados({ambientes}){   
    const [searchText, setSearchText] = useState('');
    const [selectedAmbience, setSelectedAmbience] = useState(null);
    const [isambienceVisible, setIsambienceVisible] = useState(false);
    const ambienceInfoRef = useRef(null);


    const toggleAmbienceSelection = (ambienceID) => {
        if (selectedAmbience === ambienceID) {
            setSelectedAmbience(null); 
        } else {
            setSelectedAmbience(ambienceID); 
        }
    };

    
    const ambienceImages = {
        'lâmpada': lampadaImage,
        'ar condicionado': arCondicionadoImage,
        'fechadura': fechaduraImage
    };

    
    const getAmbienceImage = (ambienceName) => {
        return ambienceImages[ambienceName.toLowerCase()] || null;
    };

    
    useLayoutEffect(() => {
        const handleScroll = () => {
            if (ambienceInfoRef.current) {
                const ambienceInfoRect = ambienceInfoRef.current.getBoundingClientRect();
                setIsambienceVisible(ambienceInfoRect.top >= 0 && ambienceInfoRect.bottom <= window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleFloatingButtonClick = () => {
        // Aqui você pode adicionar a lógica que deseja quando o botão "floating" é clicado
    };

    return (
        <div className="AmbientesCadastrados">
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
            <div className='main-text'>
            <p className='p1'>Ambientes</p>
            <p className='p2'>Ambientes cadastrados</p>
            </div>
            <ul className='p3' style={{ paddingLeft: `${searchText.length * 5}px` }}>
                {ambientes && ambientes.length > 0 && ambientes.map((ambiente) => (
                    <li key={ambientes.ambienceID}>
                        <div className="ambience-info" ref={ambienceInfoRef}>
                            <input
                                type="checkbox"
                                className="checkbox-custom"
                                checked={selectedAmbience === ambientes.ambienceID}
                                onChange={() => toggleAmbienceSelection(ambientes.ambienceID)}
                                id={`checkbox-${ambientes.ambienceID}`}
                            />
                            <label htmlFor={`checkbox-${ambientes.ambienceID}`}></label>
                            <div className='ambience-size'>
                                <span className="ambience-name">#{ambientes.ambienceName}</span>
                                <span className="ambience-brand"> {ambientes.ambienceBrand}</span>
                                <span className="ambience-id">ID: {ambientes.ambienceID}</span>
                            </div>
                            <div className='ambience-img'>
                                <img src={getAmbienceImage(ambientes.ambienceName)} alt="ambience" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {isambienceVisible && (
                <div className="buttons-container-wrapper">
                    <div className="buttons-container">
                        <button className="add-button">Adicionar a um ambiente</button>
                        <button className="remove-button">Remover</button>
                    </div>
                </div>
            )}
            <div className="floating-button" onClick={handleFloatingButtonClick}>
                <img src={FloatingButtonImage} alt="Floating Button" />
            </div>
        </div>
    );
}



export default AmbientesCadastrados;