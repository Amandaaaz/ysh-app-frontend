import React, { useState, useLayoutEffect } from 'react';
import './TelaScan.css';
import LupaImage from '../Assets/Lupa.png';

function TelaScan({ dispositivos }) {
    const [searchText, setSearchText] = useState('');


    useLayoutEffect(() => {
        const handleScroll = () => {
            // Lógica para determinar visibilidade do dispositivo
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        </div>
    );
}

export default TelaScan;
