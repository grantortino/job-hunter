import React, { useState } from 'react';
// components
import Screen from './Screen';
import ModalEditor from './ModalEditor';
// store
import jobstore from '../stores/JobStore';
// assets
import jobPawAccepted from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-accepted.svg';
import jobPawRejected from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-rejected.svg';
import jobPawPending from '../assets/job-hunter-characters/job-hunter-svg/tracked-job-paw-pending.svg';
// router
import { useParams, Link } from 'react-router-dom';

const JobEditor = () => {

    let { id } = useParams();
    const job = jobstore.findJob(id);

    // State

    const [isModalVisible, setIsModalVisible] = useState("");

    // functions 

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
        <Screen>
            <div className="job-editor-container">
            <ModalEditor
            value={job.companyName}
            name="Company Name"
            isModalVisible={isModalVisible}
            onSave={(obj) => {job.companyName = obj; jobstore.save(); setIsModalVisible("")}}
            onClose={() => setIsModalVisible("")}
            />
            
            <ModalEditor
            value={job.jobTitle}
            name="Position"
            isModalVisible={isModalVisible}
            onSave={(obj) => {job.jobTitle = obj; jobstore.save(); setIsModalVisible("")}}
            onClose={() => setIsModalVisible("")}
            />
            
            <ModalEditor
            value={job.date}
            name="Date"
            isModalVisible={isModalVisible}
            onSave={(obj) => {job.date = obj; jobstore.save(); setIsModalVisible("")}}
            onClose={() => setIsModalVisible("")}
            />
            
                <div className="pages-header-huge">
                    <h1 className="huge">JOB EDITOR</h1>
                </div>
                <div className="job-editor-card">

                    <div className="job-editor-image">
                        <img className="job-paw-img" src={jobStatusImageHandler()} alt="Job Icon"/>
                    </div>

                    <div className="job-editor-content">

                        <h1 className="medium pointer" onClick={() => setIsModalVisible("Company Name")}>{job.companyName}</h1>

                        <h1 className="font-small underline pointer" onClick={() => setIsModalVisible("Position")}>Front-End Developer</h1>

                        <h1 className="font-small pointer" onClick={() => setIsModalVisible("Date")}>{job.date}</h1>

                    </div>

                </div>

                <div className="job-editor-select-container">
                    <div className="job-editor-status-select">
                        <div className="job-tracker-status-select">
                                <h3 className="small">STATUS:</h3>

                                <select className="select-dropdown font-small" onChange={(e) => {job.status = e.target.value; jobstore.save()}}>
                                    <option value="pending">
                                        PENDING
                                    </option>
                                    <option value="rejected">
                                        REJECTED
                                    </option>
                                    <option value="accepted">
                                        ACCEPTED
                                    </option>
                                </select>
                        </div>
                    </div>
                    <div className="job-editor-relevance-select">
                        <div className="job-tracker-relevance-select">
                                    <h3 className="small">
                                        RELEVANCE DEGREE:
                                    </h3>
                                    <select className="select-dropdown font-small" onChange={(e) => {job.relevanceDegree = e.target.value; jobstore.save()}}>
                                        <option value="low">
                                            LOW
                                        </option>
                                        <option value="medium">
                                            MEDIUM
                                        </option>
                                        <option value="high">
                                            HIGH
                                        </option>
                                    </select>
                        </div>
                    </div>
                </div>
                <div className="job-editor-buttons-container">
                    <Link to="/trackedjobs">
                        <button className="back-buttons small">&larr;</button>
                    </Link>
                </div>

            </div>
        </Screen>
    );
};

export default JobEditor;
