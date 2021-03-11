import React from 'react';

const Screen = ({ children }) => {

    return (
        <>
        <div className="screen-main">
            {children}
        </div>
        <div className="screen-buttons">
            <button><h3 className="small">LOGIN</h3></button>
        </div>
        </>
    );
};

export default Screen;