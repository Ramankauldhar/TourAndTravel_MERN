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
    const tourName = tourData.tour;
    console.log("tourData:", tourData); // Log tourData to check its structure
    console.log("tour:", tour); // Log tour to check its value
    console.log("tourName:", tourName); // Log tourName to check its value

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.userEmail,
        tour: tourName, // Assign the 'tour' value directly
        userName: '',
        people: '',
        contact: '',
        bookAt: ''
    });
    const [validation, setValidation] = useState({
        userName: true,
        contact: true,
        bookAt: true,
        people: true
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBooking(prev => ({ ...prev, [id]: value }));
        setValidation((prevValidation) => ({ ...prevValidation, [id]: value.trim() !== '' }));
    };

    const totalamount = Number(price) * Number(booking.people);

    //To send the data to the server
    const handleClick = async e => {
        e.preventDefault();

        console.log(booking);
        console.log(tourData.tour);
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
                        <label>Full Name:</label><br /><input type='text' placeholder='Full Name' id="userName" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Contact:</label><br /><input type='tel' placeholder='Contact' id="contact" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Booking Date:</label><br /><input type='date' id="bookAt" required onChange={handleChange} /><br />
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
                        <span>1 x ${price}</span>
                    </ListGroupItem>

                    <ListGroupItem className='bookingBottomDetails'>
                        <h5>Your Price</h5>
                        <span>${totalamount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button type='submit' className='btn secondaryBtn bookBtn' onClick={handleClick}>Book Now</Button>
            </div>

            {/* Error messages */}
            {!validation.userName && <p className="error">Please enter your name.</p>}
            {!validation.contact && <p className="error">Please enter a valid contact number.</p>}
            {!validation.bookAt && <p className="error">Please select a booking date.</p>}
            {!validation.people && <p className="error">Please enter the number of people.</p>}

        </div>
    )
}

export default Booking;