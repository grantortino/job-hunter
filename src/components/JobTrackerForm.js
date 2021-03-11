import React from 'react';
import Screen from './Screen';

const JobTrackerForm = () => {
    return (
        <Screen>
            <div className="job-tracker-form-container">

                <h1 className="medium">TRACK A NEW JOB</h1>

                <form action="">

                    <label for="cname">
                        <h3 className="small">
                            COMPANY NAME:
                        </h3>
                    </label>
                    <input type="text" id="cname" name="cname" />

                    <label for="jtitle">
                        <h3 className="small">
                            JOB TITLE:
                        </h3>
                    </label>
                    <input type="text" id="jtitle" name="jtitle" />

                    <label for="date">
                        <h3 className="small">
                            DATE OF INSERTION:
                        </h3>
                    </label>
                    <input type="date" id="date" name="date" value="DD.MM.YYYY"/>

                    <label for="link">
                        <h3 className="small">
                            LINK TO JOB AD:
                        </h3>
                    </label>
                    <input type="text" id="link" name="link" />

                    <div className="job-tracker-select-container">

                        <div className="job-tracker-relevance-select">

                            <label for="relevance">
                                <h3 className="small">
                                    RELEVANCE DEGREE:
                                </h3>


                                <select name="relevance" id="relevance">
                                    <option value="small">
                                        <p>SMALL</p>
                                    </option>
                                    <option value="medium">
                                        <p>MEDIUM</p>
                                    </option>
                                    <option value="high">
                                        <p>HIGH</p>
                                    </option>
                                </select>

                            </label>

                        </div>

                        <div className="job-tracker-status-select">

                            <label for="cars">

                                <h3 className="small">STATUS:</h3>

                                <select name="status" id="status">
                                    <option value="pending">
                                        <p>PENDING</p>
                                    </option>
                                    <option value="rejected">
                                        <p>REJECTED</p>
                                    </option>
                                    <option value="accepted">
                                        <p>ACCEPTED</p>
                                    </option>
                                </select>

                            </label>

                        </div>

                    </div>

                    <div className="job-tracker-buttons-container">

                        <button className="small">
                            <h3 className="small">SAVE</h3>
                        </button>

                        <button className="small">
                            <h3 className="small">DISCARD</h3>
                        </button>

                    </div>

                </form>

            </div>
        </Screen>
    );
};

export default JobTrackerForm;