import React from 'react';
import { Col } from 'react-bootstrap';



const HomeAbout = (props) => {
    const {icon, heading, describe} = props.data;
    return (
        <Col xs={12} md={4} className="text-center">
            <i className={icon}></i>
            <h5>{heading}</h5>
            <p>{describe}</p>
        </Col>
    );
};

export default HomeAbout;