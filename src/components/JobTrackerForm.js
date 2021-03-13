import React, { useState } from 'react';
import Screen from './Screen';

const jobs = {
    companyName: "",
    jobTitle: "",
    date: "",

    save: () => {
        localStorage.setItem('savedCompanyName', jobs.companyName);
        localStorage.setItem('savedJobTitle', jobs.jobTitle);        
    },

    load: () => {
        // gets the element from storage saved under "savedCompanyName"
        const savedCompanyName = localStorage.getItem('savedCompanyName');
        const savedJobTitle = localStorage.getItem('savedJobTitle');
        // sets value in jobs.companyName key
        jobs.companyName = savedCompanyName;
        jobs.jobTitle = savedJobTitle;
    }
}; 

jobs.load();

    const JobTrackerForm = () => {

    // STATE
    const [companyName, setCompanyName] = useState(jobs.companyName);
    const [jobTitle, setJobTitle] = useState(jobs.jobTitle);

    // FUNCTIONS
    const companyNameHandler = (e) => {
        setCompanyName(e.target.value);
    };

    const jobTitleHandler = (e) => {
        setJobTitle(e.target.value);
    };

    const formHandleSubmit = (e) => {
        e.preventDefault(); 
        jobs.companyName = companyName; 
        jobs.jobTitle = jobTitle; 
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
                    <input onChange={companyNameHandler} type="text" id="cname" name="cname" placeholder={companyName} />

                    <label>
                        <h3 className="small">
                            JOB TITLE:
                        </h3>
                    </label>
                    <input onChange={jobTitleHandler} type="text" id="jtitle" name="jtitle" placeholder={jobTitle} />

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
                    <input type="text" id="link" name="link" />

                    <div className="job-tracker-select-container">

                        <div className="job-tracker-relevance-select">
                                <h3 className="small">
                                    RELEVANCE DEGREE:
                                </h3>
                                <select>
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

                                <select value={"pending"}>
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