// AmbientesCadastrados.js
import React, { useState } from 'react';
import LupaImage from '../Assets/Lupa.png';
import './AmbientesCadastrados.css';
import CadastroAmbientes from './CadastroAmbientes'; 

function AmbientesCadastrados({ ambientes }) {
    const [searchText, setSearchText] = useState('');
    const [showCadastroAmbiente, setShowCadastroAmbiente] = useState(false);
    const [ambienteCadastrado, setAmbienteCadastrado] = useState(null);

    if (showCadastroAmbiente) {
        // Se showCadastroAmbiente for verdadeiro, renderize o componente CadastroAmbientes
        return (
            <CadastroAmbientes onCadastro={ambiente => setAmbienteCadastrado(ambiente)} />
        );
    }

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
            <ul>
                {ambienteCadastrado && (
                    <div className="ambiente-cadastrado">
                        {ambienteCadastrado.ambienceName} - {ambienteCadastrado.ambienceProperty}
                    </div>
                )}
                {ambientes.map((ambiance, index) => (
                    <li key={index}>{ambiance.ambienceName} - {ambiance.ambienceProperty}</li>
                ))}
            </ul>
            <button className="addambientes-button" onClick={() => setShowCadastroAmbiente(true)}>Cadastrar ambiente</button>
        </div>
    );
}

export default AmbientesCadastrados;
