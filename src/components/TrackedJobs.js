import React from 'react';
import Screen from './Screen';
import { Link } from 'react-router-dom';
import jobHunter from '../assets/job-hunter-characters/job-hunter.png';
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
                        <>
                        <img src={jobHunter} />
                        <div className="medium">{job.companyName}</div>
                        <div className="small">{job.jobTitle}</div>
                        <a className="small" href={job.jobLink} target="_blank">LINK</a>
                        <div className="small">{job.date}</div>
                        <div className="medium" onClick={() => jobstore.remove(job.id)}>ERASE</div>
                        </>
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