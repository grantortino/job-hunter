import React, { useState } from 'react';
import Screen from './Screen';
import {
    Link
  } from "react-router-dom";

const JobTrackerMain = () => {

    const [companyName, setCompanyName] = useState();

    return (
        <Screen>
        <div>
            <h3>JOB TRACKER</h3>
            <div className="tracker-sections-container">
                <Link to="/trackerform">
                    <div>
                        image 1
                    </div>
                </Link>
                <div>
                    image 2
                </div>
            </div>
        </div>
        </Screen>
    );
};

export default JobTrackerMain;