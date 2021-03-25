import React from 'react';
// components
import Screen from './Screen';
// store
import jobstore from '../stores/JobStore';
// assets
// import jobPawAccepted from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-accepted.svg';
// import jobPawRejected from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-rejected.svg';
// import jobPawPending from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-pending.svg';

const JobEditor = () => {
    console.log(jobstore);

    return (
        <Screen>
            <div className="tracked-jobs-container">
                <div className="pages-header-huge">
                    <h1 className="huge">JOB EDITOR</h1>
                </div>
                <h1 className="medium">COMPANY NAME</h1>
                <h1 className="font-medium underline">Position</h1>
                <h1 className="font-medium">DATE</h1>
                <div className="job-tracker-select-container">

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

            </div>
        </Screen>
    );
};

export default JobEditor;
