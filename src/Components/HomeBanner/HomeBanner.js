import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from "../../images/banner.png";
import "./HomeBanner.css"

const HomeBanner = () => {
    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <Col xs={12} md={7}>
                        <h1 className="banner-heading mb-3 mt-3">LearnersPoint-The Smarter Way to Learn <span className="orange">Anything</span></h1>
                        <p className="banner-details">Join the millions of students around the world 
                        who are already learning! Find an experienced and suitable instructor only for you.</p>
                    </Col>
                    <Col xs={12} md={5} className="text-center">
                        <img src={banner} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBanner;