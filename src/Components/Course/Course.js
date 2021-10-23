import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Courses = (props) => {
    const {name, pic, weekdays, time, instructor, price} = props.course;
    return (
        <Col className="mb-2">
            <Card style={{ width: '17rem' }} className="shadow-lg">
                <Card.Img variant="top" src={pic} height="200px"/>
                <Card.Body>
                    <Card.Text className="d-flex justify-content-between">
                        <span className="me-2 text-secondary"><i className="fas fa-calendar-week orange"></i> {weekdays}</span>  
                        <span className="text-secondary"><i className="fas fa-clock orange"></i> {time}</span>    
                    </Card.Text>
                    <hr />
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Footer className="border-0 bg-white d-flex justify-content-between">
                    <p><i className="fas fa-chalkboard-teacher"></i> {instructor}</p>
                    <h4 className="fw-bold orange">$<span>{price}</span></h4>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Courses;