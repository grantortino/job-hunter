import React, { useState } from 'react';
// store
import jobstore from '../stores/JobStore';
// assets
import jobPaw from '../assets/job-hunter-characters/job-paw.png';

const Job = ({ job }) => {

    // when I modify the state, consequentially the component re-renders and displays the filtered jobs - it is a dirty hack
    const [quickHack, setQuickHack] = useState(false);

    console.log(job.job)
    return (
        <div>
            <img className="job-paw-img" src={jobPaw} alt="Job Icon"/>
            <div className="small">{job.companyName === undefined ? 'Company Name Missing' : job.companyName.toUpperCase()}</div>
            <div className="font-small">{job.jobTitle === undefined ? 'Job Title Missing' : job.jobTitle}</div>
            <a rel="noreferrer" className="font-small" href={job.jobLink} target="_blank">LINK</a>
            <div className="font-small">{job.date}</div>
            <div className="font-small pointer" onClick={() => {jobstore.remove(job.id); console.log('click!'); setQuickHack(!quickHack)}}>ERASE</div>
        </div>
    )
};

export default Job;