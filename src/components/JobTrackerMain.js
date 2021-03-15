import React from 'react';
import Screen from './Screen';
import {
    Link
  } from "react-router-dom";

const JobTrackerMain = () => {

    return (
        <Screen>
        <div className="tracker-main-screen-containter">

            <h3 className="huge">JOB TRACKER</h3>

            <div className="tracker-sections-container">

                <Link to="/trackerform">
                    <div className="job-tracker-card-big">
                        <div className="job-card-image-big"></div>
                        <p>Track A New Job</p>
                    </div>
                </Link>

                <Link to="/trackedjobs">
                    <div>
                        <div className="job-tracker-card-big">
                            <div className="job-card-image-big"></div>
                            <p>Tracked Jobs</p>
                        </div>
                    </div>
                </Link>

            </div>
                            
            <Link to="/">
                <button className="buttons small">&larr;</button>
            </Link>
        </div>
        </Screen>
    );
};

export default JobTrackerMain;