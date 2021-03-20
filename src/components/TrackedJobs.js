import React from 'react';
import { Link } from 'react-router-dom';
// components
import Screen from './Screen';
import Job from './Job';
// store
import jobstore from '../stores/JobStore';

const TrackedJobs = () => {

    return (
        <Screen>
            <div className="job-tracker-form-container">
                <h1 className="medium">TRACKED JOBS</h1>

                <div className="job-card">
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
                        <Job key={job.id} job={job} />
                    ))}
                </div>

                <Link to="/tracker">
                    <button className="buttons small">&larr;</button>
                </Link>
            </div>
        </Screen>
    )
};

export default TrackedJobs;