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
    const [isVisible, setIsVisible] = useState(false);
    const [jobId, setJobId] = useState();
    const [jobCompanyName, setJobCompanyName] = useState("");
    const [searchInput, setSearchInput] = useState("");

    // functions
    const onClose = () => {
        setIsVisible(false);
    };

    const onRemove = (id, name) => {
        setIsVisible(true);
        // WHY?!?!
        setJobCompanyName(name)
        // WORKS
        setJobId(id);
    }

    const onSubmit = () => {
        jobstore.remove(jobId);
        setIsVisible(false);
    };

    const searchJobs = (e) => {
        setSearchInput(e.target.value);
    };

    return (

        <Screen header="TRACKED JOBS" arrowLink="/tracker">
            <div className="tracked-jobs-container">

                {isVisible && <Modal
                modalHeaderText="ARE YOU SURE YOU WANT TO REMOVE ELEMENT:"
                onClose={onClose}
                jobId={jobId}
                onSubmit={onSubmit}
                modalMainObject={jobCompanyName === undefined ? '-Company Name Missing-?' : `"${jobCompanyName.toUpperCase()}?"`}
                />
                }

                <Link to="/trackerform">
                    <button className="buttons small">NEW</button>
                </Link>

                <div>
                    <input type="text" className="font-small jobs-search" placeholder="search here..." onChange={searchJobs} value={searchInput}/>
                </div>

                <div className="job-tracker-overscroll-container">
                    <div className="job-cards">
                        {jobstore.searchJob(searchInput).map((job) => (
                            <Job onRemove={onRemove} key={job.id} job={job} />
                        ))}
                    </div>
                </div>

            </div>
        </Screen>
    )
};

export default TrackedJobs;