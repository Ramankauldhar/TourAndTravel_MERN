import React, { useState, useContext } from 'react';
import '../Booking/booking.css';
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from 'react-router-dom';

import { Auth } from '../../userAuth/Auth';
import { BASE_URL } from '../../utils/connConfig';

const Booking = ({ tourData }) => {
    const { price, tour } = tourData;
    const navigate = useNavigate();

    const { user } = useContext(Auth);

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.userEmail,
        tour: tour,
        fullName: '',
        contact: '',
        people: 2,
        bookAt: ''
    })
    const handleChange = e => {
        setBooking(prev => (
            {
                ...prev, [e.target.id]: e.target.value
            }
        ))
    };

    const taxes = 10;
    const totalamount = Number(price) * Number(booking.people) + Number(taxes);

    //To send the data to the server
    const handleClick = async e => {
        e.preventDefault();

        console.log(booking);

        try {
            if (!user || user === undefined || user === null) {
                return alert('Please Login First!');
            }
            const response = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(booking)
            });
            const result = await response.json();
            alert("Booking is done." + result.message);
            if (!response.ok) {
                return alert(result.message);
            }
            navigate("/finalPage")
        }
        catch (error) {
            alert(error.message);
        }
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
