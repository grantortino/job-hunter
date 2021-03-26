import React, { useState } from 'react';
// components
import Screen from './Screen';
import ModalEditor from './ModalEditor';
// store
import jobstore from '../stores/JobStore';
// assets
// import jobPawAccepted from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-accepted.svg';
// import jobPawRejected from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-rejected.svg';
import jobPawPending from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-pending.svg';
// router
import { useParams, Link } from 'react-router-dom';

const JobEditor = () => {

    let { id } = useParams();

    jobstore.findJob(id);

    const job = jobstore.findJob(id);

    // State

    const [isVisible, setIsVisible] = useState(false);

    // functions 

    const editorModalHandler = () => {
        setIsVisible(true);
    };

    return (
        <Screen>
            <div className="job-editor-container">
            {isVisible && <ModalEditor job={job}/>}
                <div className="pages-header-huge">
                    <h1 className="huge">JOB EDITOR</h1>
                </div>
                <div className="job-editor-card">

                    <div className="job-editor-image">
                        <img className="job-paw-img" src={jobPawPending} alt="Job Icon"/>
                    </div>

                    <div className="job-editor-content">

                        <h1 className="medium pointer" onClick={editorModalHandler}>{job.companyName}</h1>

                        <h1 className="font-small underline pointer">Lallo Bistallo</h1>

                        <h1 className="font-small pointer">{job.date}</h1>

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
                    <Link to="/trackedjobs">
                    <button className="back-buttons small">&larr;</button>
                    </Link>
                    <button className="buttons small">SAVE</button>
                </div>

            </div>
        </Screen>
    );
};

export default JobEditor;
