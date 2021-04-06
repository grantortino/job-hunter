import React from 'react';

const EntryComponent = ({ entryTitle, entryContent, onEntryEdit, setIsModalVisible, entryTime }) => {

    const convertDate = (dateString) => {
        var date = new Date(dateString);
        return date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
    };

    return (
        <div className="pointer" onClick={() => onEntryEdit(entryTitle, entryContent)} >
            <h1 className="font-medium" onClick={() => setIsModalVisible("Entry Title")}>{entryTitle}</h1>
            <h1 className="font-small" onClick={() => setIsModalVisible("Entry Content")}>{entryContent}</h1>
            <p className="small">{convertDate(entryTime)}</p>
        </div>
    );
};

export default EntryComponent;