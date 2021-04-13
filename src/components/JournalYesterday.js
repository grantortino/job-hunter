import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//components
import Screen from './Screen';
import YesterdayEntryComponent from './YesterdayEntryComponent.js';
//store
import jobstore from '../stores/JobStore';

const JournalYesterday = () => {

    const [month, setMonth] = useState(4);

    console.log(month);

    // filter entries but how?

    return (
        <Screen>
            <div className="tracker-main-screen-containter">
                <div className="pages-header-huge">
                        <h3 className="medium">YESTERDAY</h3>
                </div>

                <div className="yesterday-select-wrapper">
                        
                        <div className="yesterday-month-container">

                            <p className="font-small">Select Month: </p>

                            <select className="select-dropdown-yesterday font-small" defaultValue={month} onChange={(e) => setMonth(e.target.value)}>
                                            <option value="1">
                                                JANUARY
                                            </option>
                                            <option value="2">
                                                FEBRUARY
                                            </option>
                                            <option value="3">
                                                MARCH
                                            </option>
                                            <option value="4">
                                                APRIL
                                            </option>
                                            <option value="5">
                                                MAY
                                            </option>
                                            <option value="6">
                                                JUNE
                                            </option>
                                            <option value="7">
                                                JULY
                                            </option>
                                            <option value="8">
                                                AUGUST
                                            </option>
                                            <option value="9">
                                                SEPTEMBER
                                            </option>
                                            <option value="10">
                                                OCTOBER
                                            </option>
                                            <option value="11">
                                                NOVEMBER
                                            </option>
                                            <option value="12">
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
                    <div className="yesterday-entries">
                        {jobstore.findEntriesByMonth(month).map((entry) => (
                            <YesterdayEntryComponent entry={entry} key={entry.id} />
                        ))}
                    </div>
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