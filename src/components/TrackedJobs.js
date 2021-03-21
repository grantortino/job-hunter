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
    const [isVisible, setIsVisible] = useState(true);
    // functions
    const onClose = () => {
        setIsVisible(false);
    };
    const onSubmit = () => {

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
                            // <div key={job.id} >
                            //     <img className="job-paw-img" src={jobPaw} alt="Job Icon"/>
                            //     <div className="small">{job.companyName === undefined ? 'Company Name Missing' : job.companyName.toUpperCase()}</div>
                            //     <div className="font-small">{job.jobTitle === undefined ? 'Job Title Missing' : job.jobTitle}</div>
                            //     <a rel="noreferrer" className="font-small" href={job.jobLink} target="_blank">LINK</a>
                            //     <div className="font-small">{job.date}</div>
                            //     <div className="font-small pointer" onClick={() => {jobstore.remove(job.id); setQuickHack(!quickHack)}}>ERASE</div>
                            // </div>
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