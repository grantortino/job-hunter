import React, {useState} from 'react';

const ModalEditor = ({ value, name, isModalVisible, onSave, onClose, type }) => {

    const [newValue, setNewValue] = useState(value);

    const newValueHandler = (e) => {
        setNewValue(e.target.value);
    };

    const convertDate = (dateString) => {
        var date = new Date(dateString);
        return date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
    };

    

    if (name === isModalVisible) {
        return (
            <div className="modal-container">
                <h1 className="huge">ENTER NEW:</h1>
                <h1 className="font-medium">{type === "date" ? convertDate(value) : value}</h1>
                {/* <h1 className="font-medium">{value}</h1> */}
                <input type={type} onChange={newValueHandler} />
                <button className="buttons small" onClick={() => onSave(newValue)}>ACCEPT</button>
                <button className="buttons small" onClick={onClose}>CLOSE</button>
            </div>
        );
    } else {
        return null;
    }

}; 

export default ModalEditor;