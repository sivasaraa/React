import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return (<div>Select a Song</div>);
    }
    
    return (<div>
        <h3>Details for:</h3>
        <p>title : {song.title}<br/>
        Duration : {song.duration} mins</p>
    </div>);
}

const mapStateToProps = (state) => {
    console.log(state);
    return {song : state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)