import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoListItem = props.videos.map(video => {
        return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>
    })
    return (
        <ul className="col-md-6 col-lg-4">
            {videoListItem}
        </ul>
    )
};

export default VideoList;
