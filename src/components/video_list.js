import React from 'react';

const VideoList = (props) => {
    //const videos = props.videos
    const listItems = props.videos.map((item) =>
    <li key={item.etag}>
      {item.kind}
    </li>
    );
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
            {listItems}
        </ul>
    );
};

export default VideoList;