import React from 'react';
import Screen from './Screen';
import {
    Link
  } from "react-router-dom";
  import journalTodayLogo from '../assets/job-hunter-characters/job-hunter-svg/journal-today.svg';
  import journalYesterdayLogo from '../assets/job-hunter-characters/job-hunter-svg/journal-yesterday.svg';


const JobTrackerMain = () => {

    return (
        <Screen header="JOB JOURNAL" arrowLink="/">
        <div className="tracker-main-screen-containter">

            <div className="tracker-sections-container">

                <Link to="/today" style={{ textDecoration: 'none' }}>
                    <div className="job-tracker-card-big">
                        <img className="job-card-image-big" src={journalTodayLogo} alt="job journal logo"></img>
                        <p className="small">TODAY</p>
                    </div>
                </Link>

                <Link to="/yesterday" style={{ textDecoration: 'none' }}>
                    <div>
                        <div className="job-tracker-card-big">
                        <img className="job-card-image-big" src={journalYesterdayLogo} alt="job journal logo"></img>                            
                        <p className="small">YESTERDAY</p>
                        </div>
                    </div>
                </Link>

            </div>
                            
        </div>
        </Screen>
    );
};

export default JobTrackerMain;