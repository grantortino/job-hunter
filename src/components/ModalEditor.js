import React, { useState } from 'react';
// store
import jobstore from '../stores/JobStore';

const ModalEditor = ({ job }) => {
    console.log('modal editor object', job);

    // state
    const [companyHeader, setCompanyHeader] = useState(job.companyName);
    const [positionHeader, setPositionHeader] = useState(job.jobTitle);
    const [dateHeader, setDateHeader] = useState(job.date);

    // functions

    const headerHandler = () => {
        let header = "";
        
    };

    return (
        <div className="modal-container">
            <h1 className="huge">ENTER NEW: {}</h1>
            <input type="text"/>
        </div>
    );
}; 

export default ModalEditor;