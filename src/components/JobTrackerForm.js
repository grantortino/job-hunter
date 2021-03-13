import React, { useState } from 'react';
import Screen from './Screen';

const jobs = {
    companyName: "",
    jobTitle: "",
    date: "",
    jobLink: "",
    relevanceDegree: "",

    save: () => {
        localStorage.setItem('savedCompanyName', jobs.companyName);
        localStorage.setItem('savedJobTitle', jobs.jobTitle);
        localStorage.setItem('savedJobLink', jobs.jobLink);
        localStorage.setItem('savedRelevanceDegree', jobs.relevanceDegree);
    },

    load: () => {
        // gets the element from storage saved under "savedCompanyName"
        const savedCompanyName = localStorage.getItem('savedCompanyName');
        const savedJobTitle = localStorage.getItem('savedJobTitle');
        const savedJobLink = localStorage.getItem('savedJobLink');
        const savedRelevanceDegree = localStorage.getItem('savedRelevanceDegree');
        // sets value in jobs.companyName key
        jobs.companyName = savedCompanyName;
        jobs.jobTitle = savedJobTitle;
        jobs.jobLink = savedJobLink;
        jobs.relevanceDegree = savedRelevanceDegree;
    }
}; 

jobs.load();

    const JobTrackerForm = () => {

    // STATE
    const [companyName, setCompanyName] = useState(jobs.companyName);
    const [jobTitle, setJobTitle] = useState(jobs.jobTitle);
    const [jobLink, setJobLink] = useState(jobs.jobLink);
    const [relevanceDegree, setRelevanceDegree] = useState(jobs.relevanceDegree);

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

    const relevanceSelectHandler = (e) => {
        setRelevanceDegree(e.target.value);
    };

    const formHandleSubmit = (e) => {
        e.preventDefault(); 
        jobs.companyName = companyName; 
        jobs.jobTitle = jobTitle; 
        jobs.jobLink = jobLink;
        jobs.relevanceDegree = relevanceDegree;
        jobs.save();
    }

    return (
        <Screen>
            <div className="job-tracker-form-container">

                <h1 className="medium">TRACK A NEW JOB</h1>

                <form onSubmit={formHandleSubmit} >

                    <label>
                        <h3 className="small">
                            COMPANY NAME: {jobs.companyName}
                        </h3>
                    </label>
                    <input autoComplete="off" onChange={companyNameHandler} type="text" id="cname" name="cname" placeholder={companyName} />

                    <label>
                        <h3 className="small">
                            JOB TITLE:
                        </h3>
                    </label>
                    <input autoComplete="off" onChange={jobTitleHandler} type="text" id="jtitle" name="jtitle" placeholder={jobTitle} />

                    <label>
                        <h3 className="small">
                            DATE OF INSERTION:
                        </h3>
                    </label>
                    <input type="date" id="date" name="date" value="DD.MM.YYYY"/>

                    <label>
                        <h3 className="small">
                            LINK TO JOB AD:
                        </h3>
                    </label>
                    <input autoComplete="off" onChange={jobLinkHandler} type="text" id="link" name="link" placeholder={jobLink} />

                    <div className="job-tracker-select-container">

                        <div className="job-tracker-relevance-select">
                                <h3 className="small">
                                    RELEVANCE DEGREE:
                                </h3>
                                <select onChange={relevanceSelectHandler} value={relevanceDegree}>
                                    <option value="small">
                                        SMALL
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
                                <h3 className="small">STATUS:</h3>

                                <select>
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

                        <input type="submit" value="SAVE" />
                            {/* <h3 className="small">SAVE</h3> */}
                        
                        <input type="submit" value="DISCARD" />
                            {/* <h3 className="small">DISCARD</h3> */}

                    </div>

                </form>

            </div>
        </Screen>
    );
};

export default JobTrackerForm;