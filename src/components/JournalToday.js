import React, { useState } from 'react';
import Screen from './Screen';
import NewJournalEntry from './NewJournalEntry';
import jobstore from '../stores/JobStore';

const JournalToday = () => {

    const [newEntry, setNewEntry] = useState(null);

    const entryHandler = () => {
        setNewEntry({
            entryTitle: "Click to edit new entry",
            entryContent: "Enter new commentary here"
        });
    };

    return (
        <Screen>
            <div className="tracker-main-screen-containter">

                <div className="pages-header-huge">
                    <h3 className="huge">TODAY</h3>
                </div>
                <div className="entry-card">
                    <button className="buttons medium" onClick={entryHandler}>NEW</button>
                    {/* {newEntry === null ? null : <NewJournalEntry newEntry={newEntry} setNewEntry={setNewEntry} />} */}
                    {newEntry && <NewJournalEntry newEntry={newEntry} setNewEntry={setNewEntry} />}
                </div>
            </div>
        </Screen>
    );
};

export default JournalToday;