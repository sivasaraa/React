import './SeasonDisplay.css'
import React from 'react'

const getSeason = (lat,month) => {
    if(month > 2 && month < 9)
        return lat > 0 ? 'Summer':'Winter';
    else
        return lat > 0 ? 'Winter':'Summer';
}

const seasonConfig = {
    Summer : {text : "Let's hit the Beach",icontext : 'sun'},
    Winter : {text : "Burr, it's Chilly",icontext : 'snowflake'}
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,icontext} = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icontext} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${icontext} icon`}></i>
        </div>
    );
};

export default SeasonDisplay