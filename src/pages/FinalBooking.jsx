import React from 'react';
import {Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const FinalBooking = () => {
  return (
    <div className='messageContainer'>
        <div>
          <i className="ri-shake-hands-fill icon"></i>
          <p className='thankyouText'>Thank You for your booking with us!</p>
          <p>Your Booking is confirmed</p>
          <Link to="/userBookings"><Button className='btn secondaryBtn bookBtn2'>Go to Bookings Page</Button></Link>
        </div>
  </div>
  )
}

export default FinalBooking
