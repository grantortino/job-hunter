import React, { useState } from 'react';
// store
import jobstore from '../stores/JobStore';
// assets
import jobPaw from '../assets/job-hunter-characters/job-paw.png';
import jobPawAccepted from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-accepted.svg';
import jobPawRejected from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-rejected.svg';
import jobPawPending from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-pending.svg';


const Job = ({ job, onRemove }) => {

    const textAlign = {textAlign: "center"};
    
    const convertDate = (dateString) => {
        var date = new Date(dateString);
        return date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
    };

    return (
        <div className="job-display-block">
            <div className="job-card">
                <img className="job-paw-img" src={jobPawPending} alt="Job Icon"/>
                <div className="medium underline" style={textAlign}>{job.companyName === undefined ? 'Company Name Missing' : job.companyName.toUpperCase()}</div>
                {/* <div className="font-medium">{job.jobTitle === undefined ? 'Job Title Missing' : job.jobTitle}</div> */}
                <div className="font-medium" style={textAlign}>Front-End Web Developer</div>
                <a rel="noreferrer" className="font-medium" href={job.jobLink} target="_blank">LINK</a>
                {/* <div className="font-medium">{job.date}</div> */}
                <div className="font-medium">{job.date === undefined ? <div className="medium bold">Date?</div> : convertDate(job.date)}</div>
                {/* <div className="font-medium pointer" onClick={() => {jobstore.remove(job.id); setIsRefreshed(!isRefreshed)}}>ERASE</div> */}
                <div className="font-medium pointer" onClick={() => onRemove(job.id, job.companyName)}>ERASE</div>
            </div>
        </div>
    )
};

export default Job;