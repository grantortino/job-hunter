import React from 'react';

const NewJournalEntry = ({ newEntry, onEntrySave, setEntryContent, setEntryTitle }) => {
    // new onSAve funtion gets called with the new values and bring back them to journaltoday and process them into entryHandler. journal today needs to re-render when onSave is clicked


    return (
        <div className="new-entry-container">
            <div className="checkbox-container">
                <input className="entry-checkbox" type="checkbox"/>
                <input className="entry-title small" type="text" placeholder={newEntry.entryTitle} onChange={(e) => setEntryTitle(e.target.value)}></input>
            </div>
            <textarea className="font-small" placeholder={newEntry.entryContent} onChange={(e) => setEntryContent(e.target.value)}></textarea>
            <button className="buttons small" onClick={onEntrySave}>SAVE</button>
        </div>
    );
};

export default NewJournalEntry;