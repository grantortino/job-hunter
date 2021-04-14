import React from 'react';
import { Link } from 'react-router-dom';

const Screen = ({ children, header, arrowLink, buttonMessage }) => {

    const backArrowSymbol = "&larr;"

    return (
        <>
        <div className="screen-main">
            <div className="screen-header" style={header === undefined ? {visibility: "hidden"} : {display: "flex"}}>
                    <h3 className="ultra-huge">{header}</h3>
            </div>
            {children}
        </div>
            <div className="screen-buttons">
                {/* <Link to={arrowLink}> */}
                <Link to={arrowLink}>
                    {/* <button className="buttons small" style={arrowLink === undefined ? {display: "none"} : {display: "inline-block"}}>&larr;</button> */}
                    <button className="buttons small" style={arrowLink === undefined ? {display: "none"} : {display: "inline-block"}}>{buttonMessage === undefined ? 'BACK' : buttonMessage}</button>
                </Link>

                <button className="buttons small">LOGIN</button>

            </div>
        </>
    );
};

export default Screen;