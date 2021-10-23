import React from 'react';
import { Col } from 'react-bootstrap';

const Event = (props) => {
    const {name, date, time, location} = props.event;
    return (
        <div className="container">
            <Col className="mb-3 border d-flex p-5 justify-content-evenly shadow-lg rounded">
                <h4>{name}</h4>
                <span className="me-2 text-secondary border-start p-2"><i className="fas fa-calendar-week orange"></i> {date}</span>  
                <span className="text-secondary border-start p-2"><i className="fas fa-clock orange"></i> {time}</span>
                <span className="text-secondary border-start p-2"><i className="fas fa-map-marker-alt orange"></i> {location}</span>
            </Col>
        </div>
    );
};

export default Event;