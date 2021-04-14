import React from 'react';
import Screen from './Screen';
import {
    Link
  } from "react-router-dom";
// assets
import trackNewJobSvg from '../assets/job-hunter-characters/job-hunter-svg/track-new-job.svg';
import trackedJobsSvg from '../assets/job-hunter-characters/job-hunter-svg/tracked-jobs.svg';


const JobTrackerMain = () => {

    return (
        <Screen header="JOB TRACKER" arrowLink="/">
        <div className="tracker-main-screen-containter">

            {/* <div className="pages-header-huge">
                <h3 className="huge">JOB TRACKER</h3>
            </div> */}

            <div className="tracker-sections-container">

                <Link to="/trackerform" style={{ textDecoration: 'none' }}>
                    <div className="job-tracker-card-big">
                        <img className="job-card-image-big" src={trackNewJobSvg} alt="track new job svg"></img>
                        <p className="small">TRACK A NEW JOB</p>
                    </div>
                </Link>

                <Link to="/trackedjobs" style={{ textDecoration: 'none' }}>
                    <div>
                        <div className="job-tracker-card-big">
                            <img className="job-card-image-big" src={trackedJobsSvg} alt="tracked jobs svg"></img>
                            <p className="small">TRACKED JOBS</p>
                        </div>
                    </div>
                </Link>

            </div>
                            
        </div>
        </Screen>
    );
};

export default JobTrackerMain;