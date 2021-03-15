import React from 'react';
import Screen from './Screen';
import { Link } from 'react-router-dom';

const TrackedJobs = () => {
    return (
        <Screen>
            <div className="job-tracker-form-container">
                <h1 className="medium">TRACKED JOBS</h1>

                <Link to="/tracker">
                    <button className="buttons small">&larr;</button>
                </Link>
            </div>
        </Screen>
    )
};

export default TrackedJobs;