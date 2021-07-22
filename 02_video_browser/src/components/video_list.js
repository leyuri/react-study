import React, { Component } from 'react';
import ViedoItem from './video_item';

class VideoList extends Component {

    render() {
        return (
            <div className="videoList">
                {this.props.videos.map(item => (
                    <ViedoItem key={item.id} videos={item} />
                ))}
            </div>

        )
    }
}
export default VideoList;