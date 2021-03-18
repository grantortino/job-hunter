import React, { useState } from 'react';
import Screen from './Screen';
import { Link } from 'react-router-dom';
import jobHunter from '../assets/job-hunter-characters/job-hunter.png';
import jobstore from '../stores/JobStore';

const TrackedJobs = () => {

    // when I modify the state, consequentially the component re-renders and displays the filtered jobs - it is a dirty hack
    const [quickHack, setQuickHack] = useState(false);

    return (
        <Screen>
            <div className="job-tracker-form-container">
                <h1 className="medium">TRACKED JOBS</h1>

                <div className="job-card">
                    {/* <img src={jobHunter} alt="job logo" />
                    <h1 className="medium">{jobs.companyName}</h1> */}
                    {jobstore.jobs.map((job) => (
                        <div key={job.id} >
                            <img src={jobHunter} alt="Job Icon"/>
                            <div className="medium">{job.companyName}</div>
                            <div className="small">{job.jobTitle}</div>
                            <a rel="noreferrer" className="small" href={job.jobLink} target="_blank">LINK</a>
                            <div className="small">{job.date}</div>
                            <div className="medium" onClick={() => {jobstore.remove(job.id); setQuickHack(!quickHack)}}>ERASE</div>
                        </div>
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