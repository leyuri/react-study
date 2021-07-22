import React from 'react'

export default function ViedoItem({ video, onItemSelect }) {

    return (
        <div className="video-item" onClick={() => {
            onItemSelect(video);
        }}>
            <div className="row">
                <div className="col mr-0">
                    <img src={video.thumbnails.default.url} alt={video.title} />
                </div>
                <div className="col pl-0" style={{ fontSize: '11px' }}>
                    {video.title} </div>
            </div>
        </div>
    )
}