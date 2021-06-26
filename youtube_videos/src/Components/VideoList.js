import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onSelect}) => {
    const renderList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onvideoselect={onSelect}/>
    })
    return <div className="ui relaxed divided list">{renderList}</div>
}

export default VideoList