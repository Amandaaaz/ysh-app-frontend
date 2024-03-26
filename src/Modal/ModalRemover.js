import React, { useState, useEffect } from 'react';
import './ModalRemover.css';
import lixeiraimage from '../Assets/lixeira.png';

function ModalRemover({ onClose }) {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(true); // Define modalVisible como true após a montagem do componente
    }, []);

    const handleClose = () => {
        setModalVisible(false);
        onClose();
    };

    return (
        <div className={`modal ${modalVisible ? 'show' : ''}`}>
            <div className="image-container">
                <img src={lixeiraimage} alt="Ícone de Checked" className="checked-image" />
            </div>
            <div className="modal-content">
                <h2>Tem certeza que deseja remover o dispositivo:</h2>
                <h4>"Nome do dispositivo"</h4>
                <button onClick={handleClose}>OK</button>
            </div>
        </div>
    );
}

export default ModalRemover;
