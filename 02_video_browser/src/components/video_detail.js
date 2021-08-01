import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';

export default function VideoDetail({ video, checkRegExp }) {
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
            <Row className="mt-3 ml-3" style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '0px' }}>
                {checkRegExp(video.title)}
            </Row>
            <Row style={{ marginLeft: '0px' }}>
                {video.publishedAt}
            </Row>
            <hr></hr>
            <Row>
                <Col md={11}>
                    <Image src="/images/user.png" roundedCircle height="50" width="45" />&nbsp;&nbsp;
                    {video.channelTitle}
                </Col>
                <Col md={1} style={{ paddingleft: '0px' }}>
                    <Button className="mt-1 " variant="danger">구독</Button>
                </Col>
            </Row>
           
            <hr></hr>
            <Image src="/images/user.png" roundedCircle height="50" width="45" />
        </div>
    )
}
