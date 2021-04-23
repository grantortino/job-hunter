import React from 'react';
import DateFormat from '../utils/DateFormat';

const YesterdayEntryComponent = ({entriesForToday}) => {
    
    console.log(entriesForToday);
    return (
        <div className="yesterday-entry-container pointer">
            <p className="font-small">{DateFormat.weekdays[entriesForToday[0].time.getDay()]}</p>
            <p className="ultra-huge">{String(entriesForToday[0].time.getDate()).padStart(2, '0')}</p>
            <div></div>
            <p className="font-small">ENTRIES: {entriesForToday.length}</p>
        </div>
    )
};

export default YesterdayEntryComponent;