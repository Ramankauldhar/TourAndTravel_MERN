import React, { useState } from 'react';
import '../Booking/booking.css';
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const Booking = ({ tourData }) => {
    const { price } = tourData;
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'rmnkaul@gmail.com',
        fullName: '',
        contact: '',
        people: 2,
        bookAt: ''
    })
    const handleChange = e => {
        setCredentials(prev => (
            {
                ...prev, [e.target.id]: e.target.value
            }
        ))
    };

    const taxes = 10;
    const totalamount = Number(price) * Number(credentials.people) + Number(taxes);

    //To send the data to the server
    const handleClick = e => {
        e.preventDefault();
        navigate("/finalPage");
    }

    return (
        <div className='bookingContainer'>
            <div className='bookingHeader'>
                <i className="ri-bookmark-fill bookingIcon"></i> <span className='titleText'>Booking Information</span>
                <Form className='bookingForm' onSubmit={handleClick}>
                    <FormGroup>
                        <label>Full Name:</label><br /><input type='text' placeholder='Full Name' id="fullName" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Contact:</label><br /><input type='number' placeholder='Contact' id="contact" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Booking Date:</label><br /><input type='date' id="date" required onChange={handleChange} /><br />
                    </FormGroup>
                    <FormGroup>
                        <label>Number of People:</label><br /><input type='number' placeholder='Number of People' id="people" required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            <div className='bookingBottom'>
                <ListGroup>
                    <ListGroupItem className='bookingBottomDetails'>
                        <h5>Price per person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='bookingBottomDetails'>
                        <h5>Taxes:</h5>
                        <span>${taxes}</span>
                    </ListGroupItem>
                    <ListGroupItem className='bookingBottomDetails'>
                        <h5>Total:</h5>
                        <span>${totalamount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn secondaryBtn bookBtn' onClick={handleClick}>Book Now</Button>
            </div>
        </div>
    )
}

export default Booking;
