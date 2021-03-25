import React from 'react';
// components
import Screen from './Screen';
// store
import jobstore from '../stores/JobStore';
// assets
// import jobPawAccepted from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-accepted.svg';
// import jobPawRejected from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-rejected.svg';
import jobPawPending from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-pending.svg';

const JobEditor = () => {
    console.log(jobstore);

    return (
        <Screen>
            <div className="job-editor-container">
                <div className="pages-header-huge">
                    <h1 className="huge">JOB EDITOR</h1>
                </div>
                <div className="job-editor-card">

                    <div className="job-editor-image">
                        <img className="job-paw-img" src={jobPawPending} alt="Job Icon"/>
                    </div>

                    <div className="job-editor-content">

                        <h1 className="medium">COMPANY NAME</h1>

                        <h1 className="font-medium underline">Position</h1>

                        <h1 className="font-medium">DATE</h1>

                    </div>
                </div>

                <div className="job-editor-select-container">
                    <div className="job-editor-status-select">
                        <div className="job-tracker-status-select">
                                <h3 className="small">STATUS:</h3>

                                <select className="select-dropdown font-small">
                                    <option value="pending">
                                        PENDING
                                    </option>
                                    <option value="rejected">
                                        REJECTED
                                    </option>
                                    <option value="accepted">
                                        ACCEPTED
                                    </option>
                                </select>
                        </div>
                    </div>
                    <div className="job-editor-relevance-select">
                        <div className="job-tracker-relevance-select">
                                    <h3 className="small">
                                        RELEVANCE DEGREE:
                                    </h3>
                                    <select className="select-dropdown font-small">
                                        <option value="low">
                                            LOW
                                        </option>
                                        <option value="medium">
                                            MEDIUM
                                        </option>
                                        <option value="high">
                                            HIGH
                                        </option>
                                    </select>
                        </div>
                    </div>
                </div>
                <div className="job-editor-buttons-container">
                    <button className="back-buttons small">&larr;</button>
                    <button className="buttons small">SAVE</button>
                </div>

            </div>
        </Screen>
    );
};

export default JobEditor;
