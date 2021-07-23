import React from 'react';
import { Row } from 'react-bootstrap';

export default function VideoDetail({ video }) {
    if (!video) {
        return (
            <div className="text-center">
                No video!
            </div>
        )
    }
    return (
        <div>
            <Row>
                <iframe
                    className="embed-responsive-item"
                    height="500"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </Row>
            <Row className="mt-3">
            {video.title}
            </Row>
            <Row>
            {video.publishedAt}
            </Row>
            <hr></hr>
            <Row>
            {video.channelTitle}
            </Row>
        </div>



    )
}

