import React, { useState, useEffect } from 'react';
import './ModalAmbientes.css';
import checkedimage from '../Assets/checked.png';

function ModalAmbientes({ onClose }) {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(true);
    }, []);

    const handleClose = () => {
        setModalVisible(false);
        onClose();
    };

    return (
        <div className={`modal ${modalVisible ? 'show' : ''}`}>
            <div className="image-container">
                <img src={checkedimage} alt="Ícone de Checked" className="checked-image" />
            </div>
            <div className="modal-content">
                <h2>Ambiente criado com sucesso</h2>
                
                <button onClick={handleClose}>OK</button>
            </div>
        </div>
    );
}

export default ModalAmbientes;
