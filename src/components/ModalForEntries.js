import React from 'react';
import DateFormat from '../utils/DateFormat';
import checked from '../assets/job-hunter-characters/job-hunter-svg/check-box-checked.svg';
import unchecked from '../assets/job-hunter-characters/job-hunter-svg/check-box-unchecked.svg';

const ModalForEntries = ({dataForModal, onClose}) => {

    console.log(dataForModal)

    return (
        <div className="modal-for-entries-container">
            <div className="past-entry-date huge">{DateFormat.weekdays[dataForModal[0].time.getDay()].toUpperCase() + ' ' + String(dataForModal[0].time.getDate()).padStart(2, '0')}</div>
            <div className="past-entries-scroll-container">
                {dataForModal.map((el) => (
                    <div key={el.id} className="past-entry-container">
                        <div className="past-entriers-checkbox-title">
                            <img src={el.checkbox === true ? checked : unchecked} alt="entry checkbox" />
                            <div className="past-entry-title medium">{el.entryTitle.toUpperCase()}</div>
                        </div>
                        <div className="past-entry-content font-small">{el.entryContent}</div>
                    </div>
                ))}
            </div>
            <button className="past-entry-button buttons medium" onClick={onClose}>CLOSE</button>
        </div>
    )
};

export default ModalForEntries;