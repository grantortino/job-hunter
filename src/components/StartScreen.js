import React from 'react';
import Screen from './Screen';
import jobHunter from '../assets/job-hunter-characters/job-hunter.png';
import { Link } from 'react-router-dom';

const StartScreen = () => {
    return (
        <Screen>
        <div className="start-screen-containter">

          <div className="start-screen-header">
            <h1 className="huge">JOB</h1>
            <img src={jobHunter} className="job-hunter-png" alt="job hunter base" />
            <h1 className="huge">HUNTER</h1>
          </div>

          <div className="sections-container">

            <Link to="/tracker">
              <div className="job-tracker-card-medium">
                <div className="job-card-image-medium"></div>
                <p>Job Tracker</p>
              </div>
            </Link>

            <div className="job-journal-card-medium">
              <div className="job-card-image-medium"></div>
              <p>Job Journal</p>
            </div>

            <div className="job-interview-card-medium">
              <div className="job-card-image-medium"></div>
              <p>Job Interview</p>
            </div>
          </div>
        </div>
      </Screen>
    );
};

export default StartScreen;