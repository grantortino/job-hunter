import React from 'react';
import Screen from './Screen';
import { Link } from 'react-router-dom';

const StartScreen = () => {
    return (
        <Screen header="JOB HUNTER">
        <div className="start-screen-containter">

          <div className="sections-container">

            <Link to="/tracker" style={{ textDecoration: 'none' }}>
              <div className="job-tracker-card-medium">
                <div className="job-card-image-medium"></div>
                <p>Job Tracker</p>
              </div>
            </Link>

            <Link to="/journal" style={{ textDecoration: 'none' }}>
            <div className="job-tracker-card-medium">
              <div className="job-card-image-medium"></div>
              <p>Job Journal</p>
            </div>
            </Link>

            <div className="job-tracker-card-medium">
              <div className="job-card-image-medium"></div>
              <p>Job Interview</p>
            </div>
          </div>
        </div>
      </Screen>
    );
};

export default StartScreen;