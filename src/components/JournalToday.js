import React, { useState } from 'react';
// components
import Screen from './Screen';
import Modal from './Modal';
import NewJournalEntry from './NewJournalEntry';
import EntryComponent from './EntryComponent';
import ModalEntry from './ModalEntry';
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
    const [checkbox, setCheckbox] = useState(false);
    const [removeModalVisibile, setRemoveModalVisible] = useState("");
    const [entryId, setEntryId] = useState();


    const dateOfToday = new Date();
    // const dd = String(dateOfToday.getDate()).padStart(2, '0');
    // const mm = String(dateOfToday.getMonth() + 1).padStart(2, '0'); //January is 0!
    // const yyyy = dateOfToday.getFullYear();
    // const dateString = dd + '/' + mm + '/' + yyyy;

    const entryHandler = () => {
        setNewEntry({
            entryTitle: "Click to edit entry title",
            entryContent: "Enter new commentary here"
        });
        setNewButtonVisible(false);
    };

    const onEntrySave = () => {
        jobstore.addEntry(entryTitle, entryContent, checkbox);
        jobstore.save();
        setNewEntry(!newEntry);
        setNewButtonVisible(!newButtonVisible);
    };

    const onEntryClose = () => {
        setNewEntry(!newEntry);
        setNewButtonVisible(!newButtonVisible);
    };

    const onRemove = (id, title) => {
        setRemoveModalVisible(!removeModalVisibile);
        setEntryTitle(title);
        setEntryId(id);
    };

    const onSubmit = () => {
        jobstore.removeEntry(entryId);
        setRemoveModalVisible(!removeModalVisibile);
    }

    const onClose = () => {
        setRemoveModalVisible(!removeModalVisibile);
    }


    // onClick event to edit entry

    const onCheckBox = () => {
        setCheckbox(!checkbox);
    };

    const sameDay = (date1, date2) => date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();

    const visibleEntries = jobstore.entries.filter((entry) => sameDay(entry.time, dateOfToday));

    return (
        <Screen header="TODAY" arrowLink="/journal">
            <div className="tracker-main-screen-containter">

            {removeModalVisibile &&
            <Modal
            onRemove={onRemove}
            modalMainObject={entryTitle}
            modalHeaderText="REMOVE:"
            onSubmit={onSubmit}
            onClose={onClose}
            />
            }

            <ModalEntry
            value1={editTitle}
            value2={editContent}
            setValue1={setEditTitle}
            setValue2={setEditContent}
            name="Visualize Modal"
            isModalVisible={isModalVisible}
            onClose={() => setIsModalVisible("")}
            type="text"
            checkbox={checkbox}
            />

            <button className={newButtonVisible ? 'buttons small' : 'buttons small invisible'} onClick={entryHandler}>NEW</button>
            {newEntry && <NewJournalEntry checkbox={checkbox} onCheckBox={onCheckBox} onEntryClose={onEntryClose} setEntryTitle={setEntryTitle} setEntryContent={setEntryContent} onEntrySave={onEntrySave} newEntry={newEntry} setNewEntry={setNewEntry} />}

            <div className="today-overscroll-wrapper">
                <div className="entry-card">
                    {visibleEntries.map((entry) => (
                        <EntryComponent entry={entry} onRemove={onRemove} key={entry.id} />
                    ))}

                </div>
            </div>

            </div>

        </Screen>
    );
};

export default JournalToday;