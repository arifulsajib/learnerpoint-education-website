import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pic from "../../images/about.jpg";
import pic2 from "../../images/about2.jpg"
import ContactInfo from '../ContactInfo/ContactInfo';

const About = () => {
    return (
        <div>
            <h1 className="text-center text-secondary">About us</h1>
            <hr className="w-25 mx-auto p-1 orange mb-4"/>
            <div className="container mt-4 mb-4">
                <Row>
                    <Col xs={12} md={6} className="text-center">
                        <img src={pic} alt="" className="img-fluid"/>
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
                        <p className="text-secondary">The best choice</p>
                        <h2>We Build Future with Education</h2>
                        <p className="fs-5">But I must explain to you how all this mistaken idea of denouncing pleasure 
                            and praising pain was born and I will give you a complete account of the system, and 
                            expound the actual teachings of the great explore.</p>
                    </Col>
                </Row>
            </div>
            <div className="container mt-5 mb-5">
                <Row>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
                        <h2>Get Free Consultation</h2>
                        <input type="email" className="form-control mb-2" placeholder="Name"/>
                        <input type="email" className="form-control mb-2" placeholder="Email"/>
                        <textarea className="form-control mb-2" rows="4" placeholder="Your Message"></textarea>
                        <button className="default-btn">Send</button>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <img src={pic2} alt="" className="img-fluid"/>
                    </Col>
                </Row>
            </div>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default About;