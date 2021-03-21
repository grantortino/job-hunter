import React from 'react';

const Modal = () => {
    return (
        <div className="modal-container">
            <h1 className="huge">ARE YOU SURE YOU WANT TO SAVE:</h1>
            <h3 className="font-medium">Company Name</h3>
            <div className="modal-buttons-container">
                <div className="modal-button-card">
                    <button className="buttons">YES</button>
                    <p className="font-small">And straight to the tracked jobs hub.</p>
                </div>
                <div className="modal-button-card">
                    <button className="buttons">NO</button>
                    <p className="font-small">And back to the hunt.</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;