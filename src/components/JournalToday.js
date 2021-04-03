import React, { useState } from 'react';
// components
import Screen from './Screen';
import NewJournalEntry from './NewJournalEntry';
import EntryComponent from './EntryComponent';
// store
import jobstore from '../stores/JobStore';

const JournalToday = () => {

    const [newEntry, setNewEntry] = useState(null);
    const [newButtonVisible, setNewButtonVisible] = useState(true);

    const entryHandler = () => {
        setNewEntry({
            entryTitle: "Click to edit new entry",
            entryContent: "Enter new commentary here"
        });
        setNewButtonVisible(false);
    };

    return (
        <Screen>
            <div className="tracker-main-screen-containter">

                <div className="pages-header-huge">
                    <h3 className="huge">TODAY</h3>
                </div>
                <div className="entry-card">
                    {newButtonVisible && <button className="buttons medium" onClick={entryHandler}>NEW</button>}
                    {/* {newEntry === null ? null : <NewJournalEntry newEntry={newEntry} setNewEntry={setNewEntry} />} */}
                    {newEntry && <NewJournalEntry newEntry={newEntry} setNewEntry={setNewEntry} />}
                    {jobstore.entries.map((entry) => (
                        <EntryComponent entryTitle={entry.entryTitle} entryContent={entry.entryContent} />
                    ))}
                </div>
            </div>
        </Screen>
    );
};

export default JournalToday;