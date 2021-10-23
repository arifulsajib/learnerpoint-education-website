import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactInfo = () => {
    return (
            <section className="mt-4 mb-5 bg-light">
                <h2 className="text-center">Visit Us Today</h2>
                <hr className="w-25 mx-auto mb-4"/>
                <Container>
                    <Row md={3} xs={2}>
                        <Col className="text-center">
                            <i className="fas fa-mobile-alt fa-2x mb-2"></i>
                            <p>Call us on</p>
                            <p className="text-primary">0132321321</p>
                        </Col>
                        <Col className="text-center">
                            <i className="fas fa-map-marker-alt fa-2x mb-2"></i>
                            <p>Come find us at</p>
                            <p className="text-primary">9 Grafton St, Worcester, USA</p>
                        </Col>
                        <Col className="text-center">
                            <i className="fas fa-envelope fa-2x mb-2"></i>
                            <p>Email us</p>
                            <p className="text-primary">learninpoint@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default ContactInfo;