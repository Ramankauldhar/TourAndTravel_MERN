import React, { useEffect, useState, useContext } from 'react';
import { Auth } from '../userAuth/Auth';
import { BASE_URL } from '../utils/connConfig';

const GetBookings = () => {
    const { user } = useContext(Auth);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                    setLoading(false);
                    setError(null);
                } else {
                    // Handle error here
                    setLoading(false);
                    setError(data.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching user bookings:', error);
                setError('Error fetching user bookings');
                setLoading(false);
            });
    }, [user._id]);

    return (
        <div>
            {loading && <button className="buttonload"><i className="fa fa-spinner fa-spin"></i>Loading</button>}
            {error && <h6>{error}</h6>}
            <h2>Your Bookings</h2>
            <div className='textNumber'>
                <p className='totalTextOnUserBookingPage'>Total Bookings: ({bookings.length})</p>
            </div>
            {!loading && !error &&
                bookings.map((booking, index) => (
                    <div key={booking._id} className='bookingInfoDiv'>
                        <h5>Booking No: {index + 1}</h5>
                        <h5> Your Email: {booking.userEmail}</h5>
                        <p><i className="ri-user-line"></i> Booked Under Name: {booking.userName}</p>
                        <p><i className="ri-map-pin-line"></i> Tour: {booking.tour}</p>
                        <p><i className="ri-group-line"></i> No of People: {booking.people}</p>
                        <p><i className="ri-calendar-line"></i> Booked for Date: {new Date(booking.bookAt).toLocaleDateString()}</p>
                        <i>{booking.createdAt}</i>
                    </div>
                ))}
        </div>
    );
};

export default GetBookings;