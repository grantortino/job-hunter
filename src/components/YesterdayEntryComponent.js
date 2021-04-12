import React from 'react';

const YesterdayEntryComponent = ({entry}) => {
    return (
        <div className="yesterday-entry-container pointer">
            <p className="font-small">wednesday</p>
            <p className="huge">21</p>
            <p className="font-small" style={{textAlign: "center"}}>{entry.entryTitle}</p>
        </div>
    )
};

export default YesterdayEntryComponent;