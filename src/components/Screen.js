import React from 'react';

const Screen = ({ children, header }) => {

    return (
        <>
        <div className="screen-main">
            <div className="screen-header">
                    <h3 className="ultra-huge">{header}</h3>
            </div>
            {children}
        </div>
        <div className="screen-buttons">
            <button className="buttons small">LOGIN</button>
        </div>
        </>
    );
};

export default Screen;