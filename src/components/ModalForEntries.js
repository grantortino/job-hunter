import React from 'react';

const ModalForEntries = ({dataForModal}) => {


    return (
        <div className="modal-container">
            {dataForModal.map((el) => (
                <div className="huge" key={el.id}>{el.entryTitle}</div>
            ))}
        </div>
    )
};

export default ModalForEntries;