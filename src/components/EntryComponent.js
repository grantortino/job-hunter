import React, { useState } from 'react';
import checked from '../assets/job-hunter-characters/job-hunter-svg/check-box-checked.svg';
import unchecked from '../assets/job-hunter-characters/job-hunter-svg/check-box-unchecked.svg';
import jobstore from '../stores/JobStore';

const EntryComponent = ({ entry }) => {

    const [editActive, setEditActive] = useState(false);
    const [isChecked, setIsChecked] = useState(entry.checkbox);
    const [newEntryTitle, setNewEntryTitle] = useState(entry.entryTitle);
    const [newEntryContent, setNewEntryContent] = useState(entry.entryContent);

    const entrySaveHandler = (title, content) => {
        setEditActive(!editActive);
        entry.entryTitle = title;
        entry.entryContent = content;
        jobstore.save();
    };

    const checkBoxHandler = () => {
        setIsChecked(!isChecked);
        entry.checkbox = isChecked;
        jobstore.save();
    };

    if (editActive === false) {
        return (
            <div className="entry-element-container">
                <div className="entry-element-checkbox-title">
                    <img src={entry.checkbox ? checked : unchecked} alt="checkbox" className="entry-checkbox-small pointer" onClick={() => checkBoxHandler()}/>
                    <h1 className="entry-element-title small">{entry.entryTitle.toUpperCase()}</h1>
                </div>
                <h1 className="entry-element-content font-small">{entry.entryContent}</h1>
                <div className="entry-component-small-buttons">
                    <button className="shadow-small-entry-element-button font-small" onClick={() => setEditActive(!editActive)}>EDIT</button>
                    <button className="shadow-small-entry-element-button font-small">REMOVE</button>
                </div>
            </div>
        );    
    } else {

    return (
        <div className="entry-element-container">
            <div className="entry-element-checkbox-title">
                <img src={entry.checkbox ? checked : unchecked} alt="checkbox" className="entry-checkbox-small pointer" onClick={() => checkBoxHandler()}/>
                <input className="entry-element-title small" value={newEntryTitle} onChange={(e) => setNewEntryTitle(e.target.value)}/>
            </div>
            <textarea className="entry-element-content font-small" onChange={(e) => setNewEntryContent(e.target.value)}>{newEntryContent}</textarea>
            <div className="entry-component-small-buttons">
                <button className="shadow-small-entry-element-button font-small" onClick={() => entrySaveHandler(newEntryTitle, newEntryContent)}>SAVE</button>
                <button className="shadow-small-entry-element-button font-small">REMOVE</button>
            </div>
        </div>
    );
}
};

export default EntryComponent;