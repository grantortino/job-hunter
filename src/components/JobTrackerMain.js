import React, { useState } from 'react';
import Screen from './Screen';
import {
    Link
  } from "react-router-dom";

const JobTrackerMain = () => {

    const [companyName, setCompanyName] = useState();

    return (
        <Screen>
        <div className="tracker-main-screen-containter">

            <h3 className="huge">JOB TRACKER</h3>

            <div className="tracker-sections-container">

                <Link to="/trackerform">
                    <div className="job-tracker-section">
                        <div className="job-card-image"></div>
                        <p>Track A New Job</p>
                    </div>
                </Link>

                <div>
                    <div className="job-tracker-section">
                        <div className="job-card-image"></div>
                        <p>Tracked Jobs</p>
                    </div>
                </div>
            </div>
        </div>
        </Screen>
    );
};

export default JobTrackerMain;