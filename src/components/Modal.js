import React from 'react';

const Modal = ({ onSubmit, children, modalHeaderText, modalMainObject, onClose }) => {
    return (

        <div className="modal-container">
                    {children}
            <h1 className="huge">{modalHeaderText}</h1>
            {/* <h3 className="font-medium">{`"${companyName}"`}</h3> */}
            <h3 className="font-medium">{modalMainObject}</h3>
            <div className="modal-buttons-container">
                <div className="modal-button-card">
                    <button className="buttons small" onClick={onSubmit}>YES</button>
                    <h3 className="font-small">And straight to the tracked jobs hub.</h3>
                </div>
                <div className="modal-button-card">
                    <button className="buttons small" onClick={onClose}>NO</button>
                    <h3 className="font-small">And back to the hunt.</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;