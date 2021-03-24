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
        console.log(jobstore.search(searchInput));
    };

    return (

        <Screen>
            <div className="tracked-jobs-container">

                {isVisible && <Modal
                modalHeaderText="ARE YOU SURE YOU WANT TO REMOVE ELEMENT:"
                onClose={onClose}
                jobId={jobId}
                onSubmit={onSubmit}
                modalMainObject={jobCompanyName === undefined ? '-Company Name Missing-?' : `"${jobCompanyName.toUpperCase()}?"`}
                />
                }

                <div className="pages-header-huge">
                    <h1 className="huge">TRACKED JOBS</h1>
                </div>

                <div className="jobs-search">
                    <input type="text" className="font-small" placeholder="search..." onChange={searchJobs} value={searchInput}/>
                </div>

                <div className="job-tracker-overscroll-container">
                    <div className="job-cards">
                        {/* <img src={jobHunter} alt="job logo" />
                        <h1 className="medium">{jobs.companyName}</h1> */}
                        {jobstore.search(searchInput).map((job) => (
                            <Job onRemove={onRemove} key={job.id} job={job} objectName={job.companyName} />
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