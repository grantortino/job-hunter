import React from 'react';

const Modal = ({ companyName }) => {
    return (
        <div className="modal-container">
            <h1 className="huge">ARE YOU SURE YOU WANT TO SAVE:</h1>
            <h3 className="font-medium">{companyName}</h3>
            <div className="modal-buttons-container">
                <div className="modal-button-card">
                    <button className="buttons small">YES</button>
                    <h3 className="font-small">And straight to the tracked jobs hub.</h3>
                </div>
                <div className="modal-button-card">
                    <button className="buttons small">NO</button>
                    <h3 className="font-small">And back to the hunt.</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;