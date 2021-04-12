import React, { useState } from 'react';
import checked from '../assets/job-hunter-characters/job-hunter-svg/check-box-checked.svg';
import unchecked from '../assets/job-hunter-characters/job-hunter-svg/check-box-unchecked.svg';

const ModalEntry = ({ value1, value2, checkbox, name, isModalVisible, onSave, onClose, type }) => {

    const [newValue1, setNewValue1] = useState();
    const [newValue2, setNewValue2] = useState();


    const newValue1Handler = (e) => {
        setNewValue1(e.target.value);
    };

    const newValue2Handler = (e) => {
        setNewValue2(e.target.value);
    };

    if (name === isModalVisible) {

        return (
            <div className="modal-container">
                <h1 className="huge">EDIT ENTRY</h1>
                <img src={checkbox ? checked : unchecked} alt="checkbox" />
                <input className="font-small" type={type} placeholder={value1} onChange={newValue1Handler} />
                <textarea className="font-small" placeholder={value2} onChange={newValue2Handler}></textarea>
                <button className="buttons small">ACCEPT</button>
                <button className="buttons small">{checked ? "UNCHECK" : "CHECK"}</button>
                <button className="buttons small" onClick={onClose}>CLOSE</button>
            </div>
        );
    } else {
        return null;
    }
};

export default ModalEntry;