import React from 'react';
import Screen from './Screen';
import { Link } from 'react-router-dom';
import jobstore from '../stores/JobStore';

const JournalYesterday = () => {
    return (
        <Screen>
            <div className="tracker-main-screen-containter">
                <div className="pages-header-huge">
                        <h3 className="medium">YESTERDAY</h3>
                </div>

                <div className="yesterday-select-wrapper">
                        
                        <div className="yesterday-month-container">

                            <p className="font-small">Select Month: </p>

                            <select className="select-dropdown-yesterday font-small">
                                            <option value="january">
                                                JANUARY
                                            </option>
                                            <option value="february">
                                                FEBRUARY
                                            </option>
                                            <option value="march">
                                                MARCH
                                            </option>
                                            <option value="april">
                                                APRIL
                                            </option>
                                            <option value="may">
                                                MAY
                                            </option>
                                            <option value="june">
                                                JUNE
                                            </option>
                                            <option value="july">
                                                JULY
                                            </option>
                                            <option value="august">
                                                AUGUST
                                            </option>
                                            <option value="september">
                                                SEPTEMBER
                                            </option>
                                            <option value="october">
                                                OCTOBER
                                            </option>
                                            <option value="november">
                                                NOVEMBER
                                            </option>
                                            <option value="december">
                                                DECEMBER
                                            </option>
                            </select>

                        </div>

                        <div className="yesterday-year-container">
                            <p className="font-small">Enter Year:</p>
                            <input className="yesterday-year-search font-small" type="text"/>
                        </div>

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