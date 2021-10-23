import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import Course from '../Course/Course';

const Services = () => {
    const [courses] = useCourses();

    return (
        <div>
            <h1 className="text-center text-secondary">Services</h1>
            <p className="text-center text-secondary">Checkout all our latest courses Here</p>
            <hr className="w-25 mx-auto p-1 orange mb-4"/>
            <Container>
                <Row md={4} xs={1} className="g-4">
                    {
                        courses.map(course => <Course key={course.key} course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;