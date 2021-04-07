import React from 'react';
import checked from '../assets/job-hunter-characters/job-hunter-svg/check-box-checked.svg';
import unchecked from '../assets/job-hunter-characters/job-hunter-svg/check-box-unchecked.svg';

const EntryComponent = ({ entry, entryTitle, entryContent, onEntryEdit, setIsModalVisible, entryTime, checkbox }) => {

    const convertDate = (dateString) => {
        var date = new Date(dateString);
        return date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
    };

    console.log(entry)

    return (
        // <div className="entry-element-container pointer" onClick={() => {onEntryEdit(entryTitle, entryContent, checkbox); setIsModalVisible("Visualize Modal")}} >
        <div className="entry-element-container">
            <div className="entry-element-checkbox-title">
                <img src={checkbox ? checked : unchecked} alt="checkbox" className="entry-checkbox-small"/>
                <h1 className="entry-element-title small">{entryTitle.toUpperCase()}</h1>
            </div>
            <h1 className="entry-element-content font-small">{entryContent}</h1>
            <div className="entry-component-small-buttons">
                <button className="shadow-small-entry-element-button font-small">EDIT</button>
                <button className="shadow-small-entry-element-button font-small">REMOVE</button>
            </div>
        </div>
    );
};

export default EntryComponent;