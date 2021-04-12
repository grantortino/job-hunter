import React from 'react';

const Modal = ({ onSubmit, children, modalHeaderText, modalMainObject, onClose, modalSmallTextYes, modalSmallTextNo }) => {
    return (

        <div className="modal-container">
                    {children}
            <h1 className="huge">{modalHeaderText}</h1>
            <h3 className="font-medium">{modalMainObject}</h3>
            <div className="modal-buttons-container">
                <div className="modal-button-card">
                    <button className="buttons small" onClick={onSubmit}>YES</button>
                    <h3 className="font-small">{modalSmallTextYes}</h3>
                </div>
                <div className="modal-button-card">
                    <button className="buttons small" onClick={onClose}>NO</button>
                    <h3 className="font-small">{modalSmallTextNo}</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;