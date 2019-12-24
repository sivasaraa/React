import React from 'react'

const getseason = (lat,month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getseason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'It is chilly' : 'It is hot' ;
    const img = season === 'winter' ? 'snowflake' : 'sun'
    return (<div>
        <i className={`${img} icon`} />
        <h1>{text}</h1>
        <i className={`${img} icon`} />
        </div>
        );
}

export default SeasonDisplay;