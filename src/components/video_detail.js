import React from 'react';

const videoDetail = ({video}) => {
    if(!video) {
        return <div>LOADING ...</div>
    } else {
        const { videoId } = video.id;
        const url = `https://www.youtube.com/embed/${videoId}`;
        const { title, description } = video.snippet;
        return (
            <div className='video-detail col-md-6 col-lg-8'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe src={url} className='embed-responsive-item'/>
                </div>
                <div className="details">
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
        );
    }
}

export default videoDetail;
