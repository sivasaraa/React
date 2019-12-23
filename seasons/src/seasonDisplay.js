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
    console.log(season);
    return <div>Season Display</div>
}

export default SeasonDisplay;