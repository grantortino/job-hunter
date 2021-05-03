import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalLogIn from './ModalLogIn';

const Screen = ({ children, header, arrowLink, buttonMessage }) => {

    const [radiusActive, setRadiusActive] = useState(false);

    const radiusHandler = () => {
        setRadiusActive(!radiusActive);
    };

    return (
        <>
        <ModalLogIn />
        <div className={radiusActive ? "screen-main radius" : "screen-main"}>
            <div className="screen-header" style={header === undefined ? {visibility: "hidden"} : {display: "flex"}}>
                    <h3 className="ultra-huge">{header}</h3>
            </div>
            {children}
        </div>
            <div className="screen-buttons">
                <Link to={arrowLink === undefined ? 'to="/' : arrowLink}>
                    <button className="buttons small" style={arrowLink === undefined ? {display: "none"} : {display: "inline-block"}}>{buttonMessage === undefined ? 'BACK' : buttonMessage}</button>
                </Link>

                <button className="buttons small">LOGIN</button>

                <button className="buttons small" onClick={radiusHandler}>RADIUS</button>

            </div>
        </>
    );
};

export default Screen;