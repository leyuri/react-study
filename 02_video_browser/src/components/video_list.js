import React from 'react';
import VideoItem from './video_item';

export default function VideoList({ videos, onItemSelect, checkRegExp }) {

    return (
        <div className="videoList"> {
            videos.map(item => (
                <VideoItem 
                    key={item.id} 
                    video={item} 
                    onItemSelect={onItemSelect} 
                    checkRegExp={checkRegExp}
                />
                // onItemSelect props 내려받기 
            ))}
        </div>);
}