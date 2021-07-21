import React from 'react';

export default function VideoDetail({ selectedVideo }) {
    // console.log("video", selectedVideo);
    if (!selectedVideo) {
        return (
            <div className="text-center">
                No video! 
            </div>
        )
    } 
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe 
                className="embed-responsive-item" 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>

                </iframe>
        </div>
    )
}

