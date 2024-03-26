import React, { useState, useEffect } from 'react';
import '../Modal/ModalAmbientes';
import './CadastroAmbientes.css';
import '../index.css';
import BoxImage from "../Assets/Vector.png";
import ModalAmbientes from '../Modal/ModalAmbientes';

function CadastroAmbientes({ onCadastro }) {
    const [showModal, setShowModal] = useState(false);
    const [ambienceName, setAmbienceName] = useState('');
    const [ambienceProperty, setAmbienceProperty] = useState('');

    // Estados para rastrear a validade dos campos
    const [ambienceNameValid, setAmbienceNameValid] = useState(false);
    const [ambiencePropertyValid, setAmbiencePropertyValid] = useState(false);

    useEffect(() => {
        // Verifica se os campos estão preenchidos e define a validade
        setAmbienceNameValid(ambienceName.trim() !== '');
        setAmbiencePropertyValid(ambienceProperty.trim() !== '');
    }, [ambienceName, ambienceProperty]);

    // Verifica se todos os campos são válidos
    const formValid = ambienceNameValid && ambiencePropertyValid;

    const handleCadastrar = () => {
        // Verifica se todos os campos são válidos antes de prosseguir
        if (formValid) {
            const novoAmbiente = {
                ambienceName,
                ambienceProperty
            };
            onCadastro(novoAmbiente);
            setShowModal(true);
        }
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
                <ModalAmbientes onClose={handleCloseModal} />
            ) : (
                <div className="cadastroAmbientes">
                    <h1>Cadastrar Ambiente</h1>
                    <div className="text-image">
                    <img src={BoxImage} alt="imagem em vetor de uma caixa sem tampa" className="box-image"/> 
                    <p className="warning-text">Faça upload de apenas uma imagem, nos formatos jpg ou png com no máximo de 10MB</p>         
                    </div>
                    <div className='input-ambienceName'>
                        <label htmlFor='input-ambienceName'>Nome do ambiente</label>
                        <input type="text" id="input-ambienceName" placeholder="Digite o Nome do ambiente" onChange={(e) => handleInputChange(e, setAmbienceName)} onBlur={handleInputBlur}/>
                    </div>
                    <div className='input-ambience-property'>
                        <label htmlFor='input-ambience-property'>Propriedade</label>
                        <input type="text" id="input-ambience-property" placeholder="Escolha uma propriedade" onChange={(e) => handleInputChange(e, setAmbienceProperty)} onBlur={handleInputBlur}/>
                    </div>      
                    <div className="button-container">
                <button className={`cadastrar-amb-button ${formValid ? 'valid' : ''}`} onClick={handleCadastrar} disabled={!formValid}>Cadastrar ambiente</button>
            </div>
        </div>
                
            )}
        </div>
    );
}

export default CadastroAmbientes;
