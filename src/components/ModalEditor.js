import React from 'react';

const ModalEditor = ({ job }) => {
    console.log(job)
    return (
        <div className="modal-container">
            <h1 className="huge">ENTER NEW:</h1>
            <input type="text"/>
        </div>
    );
}; 

export default ModalEditor;