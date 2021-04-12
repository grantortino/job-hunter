import React from 'react';
import checked from '../assets/job-hunter-characters/job-hunter-svg/check-box-checked.svg';
import unchecked from '../assets/job-hunter-characters/job-hunter-svg/check-box-unchecked.svg';

const NewJournalEntry = ({ newEntry, onEntrySave, setEntryContent, setEntryTitle, onEntryClose, onCheckBox, checkbox }) => {
    // new onSAve funtion gets called with the new values and bring back them to journaltoday and process them into entryHandler. journal today needs to re-render when onSave is clicked

    return (
        <div className="new-entry-container">
            <div className="checkbox-container">
                <img src={checkbox ? checked : unchecked} alt="checkbox" className="entry-checkbox-big"/>
                <input className="entry-title font-small" type="text" placeholder={newEntry.entryTitle} onChange={(e) => setEntryTitle(e.target.value)}></input>
            </div>
            <textarea className="font-small" placeholder={newEntry.entryContent} onChange={(e) => setEntryContent(e.target.value)}></textarea>
            <div className="entry-button-container">
                <button className="shadow-small-entry-element-button font-small" onClick={onEntrySave}>SAVE</button>
                <button className="shadow-small-entry-element-button font-small" onClick={onCheckBox} >CHECK</button>
                <button className="shadow-small-entry-element-button font-small" onClick={onEntryClose}>CLOSE</button>
            </div>
        </div>
    );
};

export default NewJournalEntry;