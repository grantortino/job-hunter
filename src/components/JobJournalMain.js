import React from 'react';
import Screen from './Screen';
import {
    Link
  } from "react-router-dom";

const JobTrackerMain = () => {

    return (
        <Screen header="JOB JOURNAL" arrowLink="/">
        <div className="tracker-main-screen-containter">

            <div className="tracker-sections-container">

                <Link to="/today" style={{ textDecoration: 'none' }}>
                    <div className="job-tracker-card-big">
                        <div className="job-card-image-big"></div>
                        <p>TODAY</p>
                    </div>
                </Link>

                <Link to="/yesterday" style={{ textDecoration: 'none' }}>
                    <div>
                        <div className="job-tracker-card-big">
                            <div className="job-card-image-big"></div>
                            <p>YESTERDAY</p>
                        </div>
                    </div>
                </Link>

            </div>
                            
        </div>
        </Screen>
    );
};

export default JobTrackerMain;