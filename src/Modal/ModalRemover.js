import React, { useState, useEffect } from 'react';
import './ModalRemover.css';
import checkedimage from '../Assets/checked.png';

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
                <img src={checkedimage} alt="Ícone de Checked" className="checked-image" />
            </div>
            <div className="modal-content">
                <h2>Dispositivo cadastrado com sucesso</h2>
                <h4>O dispositivo foi cadastrado com o nome “#Device3309”.</h4>
                <button onClick={handleClose}>OK</button>
            </div>
        </div>
    );
}

export default ModalRemover;