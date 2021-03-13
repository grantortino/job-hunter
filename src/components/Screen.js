import React from 'react';

const Screen = ({ children }) => {

    return (
        <>
        <div className="screen-main">
            {children}
        </div>
        <div className="screen-buttons">
            <button className="buttons small">LOGIN</button>
        </div>
        </>
    );
};

export default Screen;