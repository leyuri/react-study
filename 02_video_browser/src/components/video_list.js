import React from 'react';
import VideoItem from './video_item';

export default function VideoList({ videos, onItemSelect }) {
    return (
        <div className="videoList"> {
            videos.map(item => (
                <VideoItem key={item.id} video={item} onItemSelect={onItemSelect} />
            ))}
        </div>);
}