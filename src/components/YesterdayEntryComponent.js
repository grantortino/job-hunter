import React from 'react';
import DateFormat from '../utils/DateFormat';

const YesterdayEntryComponent = ({entriesForToday, modalForEntriesHandler}) => {

    const dayOfTheWeek = DateFormat.weekdays[entriesForToday[0].time.getDay()];
    const numberOfDay = String(entriesForToday[0].time.getDate()).padStart(2, '0');
    
    return (
        <div className="yesterday-entry-container pointer" onClick={() => modalForEntriesHandler(entriesForToday)}>
            <p className="font-small">{dayOfTheWeek}</p>
            <p className="ultra-huge">{numberOfDay}</p>
            <div></div>
            <p className="font-small">ENTRIES: {entriesForToday.length}</p>
        </div>
    )
};

export default YesterdayEntryComponent;