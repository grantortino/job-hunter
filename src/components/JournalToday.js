import React, { useState } from 'react';
// components
import Screen from './Screen';
import NewJournalEntry from './NewJournalEntry';
import EntryComponent from './EntryComponent';
import ModalEditor from './ModalEditor';
// store
import jobstore from '../stores/JobStore';

const JournalToday = () => {

    const [newEntry, setNewEntry] = useState(null);
    const [newButtonVisible, setNewButtonVisible] = useState(true);
    const [entryTitle, setEntryTitle] = useState("");
    const [entryContent, setEntryContent] = useState("");
    const [isModalVisible, setIsModalVisible] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");


    const dateOfToday = new Date();
    const dd = String(dateOfToday.getDate()).padStart(2, '0');
    const mm = String(dateOfToday.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = dateOfToday.getFullYear();
    const dateString = mm + '/' + dd + '/' + yyyy;

    const entryHandler = () => {
        setNewEntry({
            entryTitle: "Click to edit new entry",
            entryContent: "Enter new commentary here"
        });
        setNewButtonVisible(false);
    };

    const onEntrySave = () => {
        jobstore.addEntry(entryTitle, entryContent);
        jobstore.save();
        setNewEntry(!newEntry);
        setNewButtonVisible(!newButtonVisible);
    };

    const onEntryClose = () => {
        setNewEntry(!newEntry);
        setNewButtonVisible(!newButtonVisible);
    };

    // onClick event to edit entry

    const onEntryEdit = (entryTitle, entryContent) => {
        setEditTitle(entryTitle);
        setEditContent(entryContent);
    };

    const sameDay = (date1, date2) => date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();

    const visibleEntries = jobstore.entries.filter((entry) => sameDay(entry.time, dateOfToday));

    return (
        <Screen>
            <div className="tracker-main-screen-containter">

            <ModalEditor
            value={editTitle}
            name="Entry Title"
            isModalVisible={isModalVisible}
            // onSave={(obj) => {job.companyName = obj; jobstore.save(); setIsModalVisible("")}}
            onClose={() => setIsModalVisible("")}
            type="text"
            />

            <ModalEditor
            value={editContent}
            name="Entry Content"
            isModalVisible={isModalVisible}
            // onSave={(obj) => {job.companyName = obj; jobstore.save(); setIsModalVisible("")}}
            onClose={() => setIsModalVisible("")}
            type="text"
            />

                <div className="pages-header-huge">
                    <h3 className="huge">TODAY {dateString}</h3>
                </div>
                <div className="entry-card">
                    {newButtonVisible && <button className="buttons medium" onClick={entryHandler}>NEW</button>}
                    {/* {newEntry === null ? null : <NewJournalEntry newEntry={newEntry} setNewEntry={setNewEntry} />} */}
                    {newEntry && <NewJournalEntry onEntryClose={onEntryClose} setEntryTitle={setEntryTitle} setEntryContent={setEntryContent} onEntrySave={onEntrySave} newEntry={newEntry} setNewEntry={setNewEntry} />}
                    {/* {jobstore.entries.map((entry) => (
                        <EntryComponent entryTime={entry.time} setIsModalVisible={setIsModalVisible} onEntryEdit={onEntryEdit} entryTitle={entry.entryTitle} entryContent={entry.entryContent} key={entry.id} />
                    ))} */}
                    {visibleEntries.map((entry) => (
                        <EntryComponent entryTime={entry.time} setIsModalVisible={setIsModalVisible} onEntryEdit={onEntryEdit} entryTitle={entry.entryTitle} entryContent={entry.entryContent} key={entry.id} />
                    ))}
                </div>
            </div>
        </Screen>
    );
};

export default JournalToday;