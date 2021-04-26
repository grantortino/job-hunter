import React from 'react';
import Screen from './Screen';
import { Link } from 'react-router-dom';
// assets
import jhLogo from '../assets/job-hunter-characters/job-hunter-svg/job-hunter-logo.svg';
import handSelector from '../assets/job-hunter-characters/job-hunter-svg/hand-selector.svg';

const StartScreen = () => {

    return (
        <Screen header="IN PAIN-DEMIC TIMES:">
        
        <div className="start-screen-containter">

          <img src={jhLogo} alt="Job Hunter Logo" className="start-screen-jhlogo"/>

          <div className="main-sections-container">

            <Link to="/tracker" style={{ textDecoration: 'none' }}>
              <div className="main-section">
                <img className='tracker-hand-selector' src={handSelector} alt="hand selector"   />
                <h1 className="start-screen-option huge">TRACKER</h1>
              </div>
            </Link>

            <Link to="/journal" style={{ textDecoration: 'none' }}>
              <div className="main-section">
              <img className='tracker-hand-selector' src={handSelector} alt="hand selector" />
              <h1 className="start-screen-option huge">JOURNAL</h1>
              </div>
            </Link>

          </div>
        </div>
      </Screen>
    );
};

export default StartScreen;