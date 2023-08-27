import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const FinalBooking = () => {
  return (
    <div>
    <Container>
      <Row>
        <Col lg="12">
        <div className='messageContainer'>
          <i className="ri-shake-hands-fill icon"></i>
          <p className='thankyouText'>Thank You for your booking with us!</p>
          <p>Your Booking is confirmed</p>
          <Link to="/home"><Button className='btn secondaryBtn bookBtn2'>Back to Home</Button></Link>
        </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default FinalBooking
