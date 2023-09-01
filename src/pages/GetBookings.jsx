import React, { useEffect, useState } from 'react';

const GetBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Make an API request to fetch user bookings from your Express backend
        fetch('/booking/user', {
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
            {bookings.map((booking) => (
                <div key={booking._id}>
                    <p>Tour Name: {booking.tourName}</p>
                    <p>Date: {new Date(booking.bookAt).toLocaleDateString()}</p>
                    {/* Add more booking details here */}
                </div>
            ))}
        </div>
    );
};

export default GetBookings;