import React, { useEffect, useState, useContext } from 'react';
import { Auth } from '../userAuth/Auth';
import { BASE_URL } from '../utils/connConfig';

const GetBookings = () => {
    const { user} = useContext(Auth);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Make an API request to fetch user bookings from your Express backend
        fetch(`${BASE_URL}/booking/user/${user._id}`, {
            method: 'GET',
            credentials: 'include', // Send cookies with the request
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setBookings(data.data);
                } else {
                    // Handle error here
                    console.error(data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching user bookings:', error);
            });
    }, []);

    return (
        <div>
            <h2>Your Bookings</h2>
            <div className='textNumber'>
              <p className='totalTextOnUserBookingPage'>Total Bookings: ({bookings.length})</p>
            </div>
            {bookings.map((booking) => (
                <div key={booking._id} className='bookingInfoDiv'>
                    <h5>Your Email: {booking.userEmail}</h5>
                    <p>Booked Under Name: {booking.userName}</p>
                    <p>Tour Name: {booking.tourName}</p>
                    <p>No of People: {booking.people}</p>
                    <p>Booked for Date: {new Date(booking.bookAt).toLocaleDateString()}</p>
                    {/* Add more booking details here */}
                </div>
            ))}
        </div>
    );
};

export default GetBookings;