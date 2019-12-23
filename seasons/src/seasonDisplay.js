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
    return <div><h1>{text}</h1></div>
}

export default SeasonDisplay;