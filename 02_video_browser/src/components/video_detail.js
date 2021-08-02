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
            <Row className="text-muted" style={{ marginLeft: '0px', fontWeight : 'bold' }}>
                {video.publishedAt}
            </Row>
            <hr></hr>

            {/* channel Info & subscribe btn  */}
            <div style={{ float: 'left' }}>
                <Image src="/images/gitlab.png" roundedCircle height="50" width="45" />
                <span style={{ marginLeft : '18px', fontWeight : 'bold' }}>{video.channelTitle}</span>
            </div>
            <div style={{ float: 'right' }}><Button className="mt-1 " variant="danger">&nbsp;&nbsp;구독&nbsp;&nbsp;</Button></div>
            
            <br>
            </br>
            <br>
            </br>
            
            <hr></hr>
            {/* comments */}
            <Row className="mb-4">
                <Col xs={1}>
                    <Image src="/images/user.png" roundedCircle height="50" width="45" />
                </Col>

                <Col xs={11}>
                    <Row style={{ fontWeight : 'bold' }}>javascriptlover</Row>
                    <Row>GitLab is a great tool for code review :) ✌ </Row>
                </Col>
            </Row>

            <Row>
                <Col xs={1}>
                    <Image src="/images/Java.jpg" roundedCircle height="50" width="45" />
                </Col>

                <Col xs={11}>
                    <Row style={{ fontWeight : 'bold' }}>javalover</Row>
                    <Row>I love java 💕💕 </Row>
                </Col>
            </Row>
        </div>
    )
}


