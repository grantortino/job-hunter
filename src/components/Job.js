import React from 'react';
// store
// import jobstore from '../stores/JobStore';
// assets
import jobPawAccepted from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-accepted.svg';
import jobPawRejected from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-rejected.svg';
import jobPawPending from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-pending.svg';
// router
import { Link } from 'react-router-dom';


const Job = ({ job, onRemove }) => {

    const textAlign = {textAlign: "center"};
    
    const convertDate = (dateString) => {
        var date = new Date(dateString);
        return date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
    };

    const jobStatusImageHandler = () => {

        let image = "";

        if (job.status === 'pending') {
            image = jobPawPending;
            return image;
        } else if (job.status === 'accepted') {
            return image = jobPawAccepted;
        } else if (job.status === 'rejected') {
            return image = jobPawRejected;
        }

        return image;

    };

    return (
        <div className="job-display-block">
            <div className="job-card">
                <img className="job-paw-img" src={jobStatusImageHandler()} alt="Job Icon"/>
                <div className="medium underline" style={textAlign}>{job.companyName === undefined ? 'Company Name Missing' : job.companyName.toUpperCase()}</div>
                <div className="font-small" style={textAlign}>Front-End Web Developer</div>
                <div className="font-small">{job.date === undefined ? <div className="medium bold">Date?</div> : convertDate(job.date)}</div>
                <div className="small-buttons-container">
                    <a rel="noreferrer" className="font-small pointer" href={job.jobLink} target="_blank" style={{ textDecoration: 'none'}}>LINK</a>
                    <div className="font-small pointer" onClick={() => onRemove(job.id, job.companyName)}>REMOVE</div>
                    <Link to={`/jobs/${job.id}`} style={{ textDecoration: 'none' }}>
                        <div className="font-small pointer" >EDIT</div>
                    </Link>
                </div>
                {/* <div className="font-medium pointer" onClick={() => console.log(objectName)}>ERASE</div> */}
            </div>
        </div>
    )
};

export default Job;