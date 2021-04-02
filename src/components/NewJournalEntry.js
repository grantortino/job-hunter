import React from 'react';
import jobstore from '../stores/JobStore';

const NewJournalEntry = ({ newEntry, setNewEntry }) => {
    // new onSAve funtion gets called with the new values and bring back them to journaltoday and process them into entryHandler. journal today needs to re-render when onSave is clicked
    return (
        <div className="new-entry-container">
            <h1 className="small">{newEntry.entryTitle}</h1>
            <p className="font-small">{newEntry.entryContent}</p>
            <button className="buttons small" onClick={() => {setNewEntry({...newEntry, entryTitle: newEntry.entryTitle, entryContent: newEntry.entryContent}); jobstore.addEntry()}}>SAVE</button>
        </div>
    );
};

export default NewJournalEntry;