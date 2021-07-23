import React from 'react'
import { Col, Row, Image } from 'react-bootstrap';

export default function ViedoItem({ video, onItemSelect, checkRegExp}) {

    return (
        <div className="video-item" onClick={() => {
            onItemSelect(video);
        }}>
            <Row className="mb-2">
                <Col>
                    <Image
                        src={video.thumbnails.default.url}
                        alt={video.title}
                        width="196"
                        height="120"
                    />
                </Col>
                <Col >
                    <Row style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        {checkRegExp(video.title)}
                    </Row>
                    <Row style={{ fontSize: '13px' }}>
                        {video.channelTitle}
                    </Row>
                    <Row style={{ fontSize: '13px' }}>
                        {video.publishedAt}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}