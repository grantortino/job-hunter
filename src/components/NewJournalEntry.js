import React, { useState } from 'react';
import jobstore from '../stores/JobStore';

const NewJournalEntry = ({ newEntry, setNewEntry }) => {
    // new onSAve funtion gets called with the new values and bring back them to journaltoday and process them into entryHandler. journal today needs to re-render when onSave is clicked

    const [entryTitle, setEntryTitle] = useState("");
    const [entryContent, setEntryContent] = useState("");

    const onEntrySave = () => {
        jobstore.addEntry(entryTitle, entryContent);
        jobstore.save();
    };

    console.log(jobstore.entries)

    return (
        <div className="new-entry-container">
            <div className="checkbox-container">
                <input className="entry-checkbox" type="checkbox"/>
                <input className="entry-title" type="text" className="small" placeholder={newEntry.entryTitle} onChange={(e) => setEntryTitle(e.target.value)}></input>
            </div>
            <textarea className="font-small" placeholder={newEntry.entryContent} onChange={(e) => setEntryContent(e.target.value)}></textarea>
            <button className="buttons small" onClick={onEntrySave}>SAVE</button>
        </div>
    );
};

export default NewJournalEntry;