import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useEvents from '../../Hooks/useEvents';
import Event from '../Event/Event';

const Events = () => {
    const [events] = useEvents();
    return (
        <div>
            <h1 className="text-center text-secondary">Events</h1>
            <p className="text-center text-secondary">Checkout Our latest events. You are invited to participate. </p>
            <hr className="w-25 mx-auto p-1 orange mb-4"/>
            <Container>
                <Row md={1} xs={1}>
                    {
                        events.map(event => <Event key={event.key} event={event}></Event>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Events;<h1>Events</h1>