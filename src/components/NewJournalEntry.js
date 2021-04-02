import React from 'react';
import jobstore from '../stores/JobStore';

const NewJournalEntry = ({ newEntry, setNewEntry }) => {
    // new onSAve funtion gets called with the new values and bring back them to journaltoday and process them into entryHandler. journal today needs to re-render when onSave is clicked
    return (
        <div className="new-entry-container">
            <div className="checkbox-container">
                <input className="entry-checkbox" type="checkbox"/>
                <input className="entry-title" type="text" className="small" placeholder={newEntry.entryTitle}></input>
            </div>
            <textarea className="font-small" placeholder={newEntry.entryContent}></textarea>
            <button className="buttons small" onClick={() => {setNewEntry({...newEntry, entryTitle: newEntry.entryTitle, entryContent: newEntry.entryContent}); jobstore.addEntry()}}>SAVE</button>
        </div>
    );
};

export default NewJournalEntry;