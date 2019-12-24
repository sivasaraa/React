import React from 'react'

const seasonConfig = {
    summer :{
        text : "It is hot",
        img : "sun"
    },
    winter :{
        text : "It is chilly",
        img : "snowflake"
    }
}

const getseason = (lat,month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getseason(props.lat, new Date().getMonth());
    const {text,img} = seasonConfig[season];
    return (<div>
        <i className={`${img} icon`} />
        <h1>{text}</h1>
        <i className={`${img} icon`} />
        </div>
        );
}

export default SeasonDisplay;