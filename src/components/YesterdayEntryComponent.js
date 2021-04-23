import React from 'react';

const YesterdayEntryComponent = ({entry}) => {

    
    // per poter visualizzare le entrate raggruppandole in giorni, devo creare un array diverso per ciascuna data delle entries

    // const displayNameOfDay = (d) => {

    //     const weekday = new Array(7);

    //     weekday[0] = "Sunday";
    //     weekday[1] = "Monday";
    //     weekday[2] = "Tuesday";
    //     weekday[3] = "Wednesday";
    //     weekday[4] = "Thursday";
    //     weekday[5] = "Friday";
    //     weekday[6] = "Saturday";
      
    //     return weekday[d.getDay()];
    // };

    // const dd = String(entry.time.getDate()).padStart(2, '0');

    console.log('entry', entry)


    return (
        <div className="yesterday-entry-container pointer">
            <p className="font-small"></p>
            <p className="ultra-huge"></p>
            <div></div>
            <p className="font-small" style={{textAlign: "center"}}></p>
        </div>
    )
};

export default YesterdayEntryComponent;