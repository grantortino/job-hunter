import React from 'react';

const EntryComponent = ({ entryTitle, entryContent }) => {
    return (
        <div>
            <h1 className="font-medium">{entryTitle}</h1>
            <h1 className="font-small">{entryContent}</h1>
        </div>
    );
};

export default EntryComponent;