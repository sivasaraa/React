
import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title : 'song-A', duration : '4.05'},
        {title : 'song-B', duration : '3.46'},
        {title : 'song-C', duration : '3.21'},
        {title : 'song-D', duration : '2.53'}
    ]
};

const selectedSongReducers = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong

};

export default combineReducers({
    song : songReducer,
    selectedSong : selectedSongReducers
});