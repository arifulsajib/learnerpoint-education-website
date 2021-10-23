import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourses from '../../Hooks/useCourses';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeBanner from '../HomeBanner/HomeBanner';
import Course from '../Course/Course';
import Event from '../Event/Event';
import useEvents from '../../Hooks/useEvents';
import ContactInfo from '../ContactInfo/ContactInfo';

const Home = () => {

    //Homeabout section data
    const aboutData = [
        {
            key: "d001",
            icon: "far fa-lightbulb fa-4x mb-3", 
            heading: "Our Mission", 
            describe: "Developing strong vision and mission statements can help stakeholders in your school reach such a common understanding."
        },
        {
            key: "d002",
            icon: "fas fa-book-open fa-4x mb-3", 
            heading: "Quality Courses",
            describe: "Choose from our professional training courses, and pay to get certified to complete a course or specialization."
        },
        {
            key: "d003",
            icon: "far fa-sun fa-4x mb-3",
            heading: "Certificate", 
            describe: "Join the millions of students around the world who are already learning! Find an experienced and suitable instructor only for you."
        }
    ];

    //Course data from custom hook
    const [courses] = useCourses();
    const [events] = useEvents();

    return (
        <div>
            <HomeBanner></HomeBanner>
            <section className="bg-light p-3 mt-5">
                <h2 className="text-center">What We Do</h2>
                <hr className="w-25 mx-auto  mb-4" />
                <Container>
                    <Row>
                        {
                            aboutData.map(data=> <HomeAbout key={data.key} data={data}></HomeAbout>)
                        }
                    </Row>
                </Container>
            </section>

            <section className="mt-4">
                <div className="text-center">
                    <h1>Our <span className="orange">Services</span></h1>
                    <p className="fs-5 w-50 mx-auto">We always try to give the best possible instructors for
                    any courses. Quality is our first priority. </p>
                </div>
                <div>
                    <Container>
                        <Row md={4} xs={1}>
                            {
                                courses.slice(0, 4).map(course => <Course key={course.key} course={course}></Course>)
                            }
                        </Row>
                        <Link to="/services"><button className="default-btn">More Course</button></Link>
                    </Container>
                </div>
            </section>

            <section className="mt-5">
                <div className="text-center">
                    <h1> Upcoming <span className="orange">Events</span></h1>
                    <hr className="w-25 mx-auto"/>
                    <p className="fs-5 w-50 mx-auto">These are the upcoming events that you can take part in.
                    We arrange these kind of events more frequently </p>
                </div>
                <div>
                    <Container>
                        <Row md={1} xs={1}>
                            {
                                events.slice(0, 3).map(event => <Event key={event.key} event={event}></Event>)
                            }
                        </Row>
                        <Link to="/events"><button className="default-btn mb-5">More Events</button></Link>
                    </Container>
                </div>
            </section>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;