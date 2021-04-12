import React from 'react';
import Screen from './Screen';
import { Link } from 'react-router-dom';

const JournalYesterday = () => {
    return (
        <Screen>
            <div className="tracker-main-screen-containter">
                <div className="pages-header-huge">
                        <h3 className="medium">YESTERDAY</h3>
                </div>

                <div className="today-overscroll-wrapper">
                    
                </div>

                <div className="job-editor-buttons-container">
                    <Link to="/journal">
                        <button className="back-buttons small">&larr;</button>
                    </Link>
                </div>
            </div>
        </Screen>
    )
};

export default JournalYesterday;