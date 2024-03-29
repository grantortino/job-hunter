import React, { useState } from 'react';
import Screen from './Screen';
import { Link, Redirect } from 'react-router-dom';
import jobs from '../stores/JobStore';
import Modal from './Modal';


    const JobTrackerForm = () => {

    // STATE
    const [companyName, setCompanyName] = useState(jobs.companyName);
    const [jobTitle, setJobTitle] = useState(jobs.jobTitle);
    const [jobLink, setJobLink] = useState(jobs.jobLink);
    const [date, setDate] = useState(jobs.date);
    const [relevanceDegree, setRelevanceDegree] = useState('low');
    const [status, setStatus] = useState('pending');
    const [isVisible, setIsVisible] = useState(false);
    const [isRedirected, setIsRedirected] = useState(false);

    // FUNCTIONS
    const companyNameHandler = (e) => {
        setCompanyName(e.target.value);
    };

    const jobTitleHandler = (e) => {
        setJobTitle(e.target.value);
    };

    const jobLinkHandler = (e) => {
        setJobLink(e.target.value);
    };

    const dateHandler = (e) => {
        setDate(e.target.value);
    };

    const relevanceSelectHandler = (e) => {
        setRelevanceDegree(e.target.value);
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    const formHandleSubmit = (e) => {
        e.preventDefault();
        setIsVisible(true);
    }

    const onSubmit = () => {
        jobs.addJob(companyName, jobTitle, jobLink, date, relevanceDegree, status);
        console.log(relevanceDegree)
        jobs.save();
        setIsVisible(false);
        setIsRedirected(true);
    };

    const onClose = () => {
        setIsVisible(false);
    };

    return (
        <Screen header="TRACK A NEW JOB" arrowLink="/tracker">

            <div className="job-tracker-form-container">

                {isRedirected && <Redirect
                    to={{
                        pathname: "/trackedjobs",
                    }}
                />}

                {isVisible && <Modal 
                companyName={companyName} 
                onSubmit={onSubmit} 
                onClose={onClose}
                modalHeaderText="ARE YOU SURE YOU WANT TO SAVE:"
                modalMainObject={companyName === undefined ? '-Company Name is Missing-?' : `"${companyName.toUpperCase()}"?`}
                modalSmallTextYes="And straight to the tracked jobs hub."
                modalSmallTextNo="And back to the hunt."
                />
                }

                <form className="job-tracker-form" onSubmit={formHandleSubmit} >

                        <h3 className="medium">
                            COMPANY NAME:
                        </h3>
                    <input className="input-bar font-small" autoComplete="off" onChange={companyNameHandler} type="text" id="cname" name="cname" placeholder={companyName} value={companyName}/>

                        <h3 className="medium">
                            JOB TITLE:
                        </h3>
                    <input className="input-bar font-small" autoComplete="off" onChange={jobTitleHandler} type="text" id="jtitle" name="jtitle" placeholder={jobTitle} value={jobTitle} />

                        <h3 className="medium">
                            DATE OF INSERTION:
                        </h3>

                    <input className="input-bar font-small" onChange={dateHandler} type="date" id="date" name="date" value={date} />

                        <h3 className="medium">
                            LINK TO JOB AD:
                        </h3>
                    <input className="input-bar font-small" autoComplete="off" onChange={jobLinkHandler} type="text" id="link" name="link" placeholder={jobLink} value={jobLink} />

                    <div className="job-tracker-select-container">

                        <div className="job-tracker-relevance-select">
                                <h3 className="medium">
                                    RELEVANCE DEGREE:
                                </h3>
                                <select className="select-dropdown font-small" onChange={relevanceSelectHandler} value={relevanceDegree}>
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

                        <div className="job-tracker-status-select">
                                <h3 className="medium">STATUS:</h3>

                                <select className="select-dropdown font-small" onChange={statusHandler} value={status}>
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

                    <div className="job-tracker-buttons-container">
                        <div>
                            <input className="buttons small" type="submit" value="SAVE" />
                        </div>
                        <Link to="/trackedjobs">
                            <button className="buttons small">JOBS</button>
                        </Link>
                    </div>

                </form>

            </div>

        </Screen>
    );
};

export default JobTrackerForm;