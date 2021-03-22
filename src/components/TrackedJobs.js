import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// components
import Screen from './Screen';
import Job from './Job';
import Modal from './Modal';
// store
import jobstore from '../stores/JobStore';

const TrackedJobs = () => {

    // state
    const [isRefreshed, setIsRefreshed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // functions
    const onClose = () => {
        setIsVisible(false);
    };

    const onSubmit = () => {
        setIsVisible(true);
    }



    return (

        <Screen>
            <div className="tracked-jobs-container">

                {isVisible && <Modal
                modalHeaderText="ARE YOU SURE YOU WANT TO REMOVE ELEMENT"
                onClose={onClose}
                onSubmit={onSubmit}
                />
                }

                <div className="pages-header-huge">
                    <h1 className="huge">TRACKED JOBS</h1>
                </div>

                <div className="job-tracker-overscroll-container">
                    <div className="job-cards">
                        {/* <img src={jobHunter} alt="job logo" />
                        <h1 className="medium">{jobs.companyName}</h1> */}
                        {jobstore.jobs.map((job) => (
                            <Job key={job.id} job={job} isRefreshed={isRefreshed} setIsRefreshed={setIsRefreshed} objectName={job.companyName}/>
                        ))}
                    </div>
                </div>

                <Link to="/tracker">
                    <button className="buttons small">&larr;</button>
                </Link>
            </div>
        </Screen>
    )
};

export default TrackedJobs;