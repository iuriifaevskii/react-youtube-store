import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //const videos = props.videos

    //example map!
    //var array = [1,2,3];
    //array.map(function(number){ return number *2 });

    //in react we have JSX and we can 
    //var array = [1,2,3];
    //array.map(function(number){ return '<div>' + number + '</div>' });
    //result: (3) ["<div>1</div>", "<div>2</div>", "<div>3</div>"]
    const videoItems = props.videos.map((video)=> {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;