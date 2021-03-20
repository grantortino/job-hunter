import React, { useState } from 'react';
// store
import jobstore from '../stores/JobStore';
// assets
import jobPaw from '../assets/job-hunter-characters/job-paw.png';
import jobPawAccepted from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-accepted.svg';
import jobPawRejected from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-rejected.svg';
import jobPawPending from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-pending.svg';


const Job = ({ job, status }) => {

    // when I modify the state, consequentially the component re-renders and displays the filtered jobs - it is a dirty hack
    const [quickHack, setQuickHack] = useState(false);
    const [image, setImage] = useState();

    // const setImageHandler = () => {
    //     if (job.status === "rejected") {
    //         setImage(jobPawRejected);
    //         return image;
    //     } else if (job.status === "accepted") {
    //         setImage(jobPawAccepted);
    //         return image;
    //     } else {
    //         setImage(jobPawPending);
    //         return image;
    //     }
    // };

    console.log(status)
    
    return (
        <div className="job-card">
            <img className="job-paw-img" src={jobPawPending} alt="Job Icon"/>
            <div className="small">{job.companyName === undefined ? 'Company Name Missing' : job.companyName.toUpperCase()}</div>
            <div className="font-small">{job.jobTitle === undefined ? 'Job Title Missing' : job.jobTitle}</div>
            <a rel="noreferrer" className="font-small" href={job.jobLink} target="_blank">LINK</a>
            <div className="font-small">{job.date}</div>
            <div className="font-small pointer" onClick={() => {jobstore.remove(job.id); console.log('click!'); setQuickHack(!quickHack)}}>ERASE</div>
        </div>
    )
};

export default Job;