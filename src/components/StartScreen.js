import React from 'react';
import Screen from './Screen';
import jobHunter from '../assets/job-hunter-characters/job-hunter.png';

const StartScreen = () => {
    return (
        <Screen>
        <div className="start-screen-containter">

          <h1 className="huge">JOB HUNTER</h1>

          <div className="job-hunter-png-container">
          <img src={jobHunter} className="job-hunter-png" alt="job hunter base" />
          </div>

          <div className="sections-container">

            <div className="job-tracker-section">
              <div className="job-card-image"></div>
              <p>Job Tracker</p>
            </div>

            <div className="job-journal-section">
              <div className="job-card-image"></div>
              <p>Job Journal</p>
            </div>

            <div className="job-interview-section">
              <div className="job-card-image"></div>
              <p>Job Interview</p>
            </div>
          </div>
        </div>
      </Screen>
    );
};

export default StartScreen;