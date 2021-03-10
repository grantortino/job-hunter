import React from 'react';
import Screen from './Screen';

const StartScreen = () => {
    return (
        <Screen>
        <div className="start-screen-containter">
          <h1 className="huge">JOB HUNTER</h1>

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