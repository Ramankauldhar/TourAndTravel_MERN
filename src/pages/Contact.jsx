import React, { useState } from 'react';
import contactBackgroundImg from '../Images/contactBackground.avif';
import { Button, Form, FormGroup } from "reactstrap";
import planeImg from '../Images/plane.png';
import contactUsImg from '../Images/contactUs.png';

const Contact = () => {
  const [credentials, setCredentials] = useState({
    email: 'rmnkaul@gmail.com',
    contact: '',
    Message: ''
  });

  const handleChange = e => {
    setCredentials(prev => (
      {
        ...prev, [e.target.id]: e.target.value
      }
    ))
  };
  const handleClick = e => {
    e.preventDefault();
  }

  return (
    <div>
      <div className='contactusDiv'>
        <img src={contactBackgroundImg} alt='Colorfull background' className="contactImage" />
      </div>
      <div className='textDiv'>
        <img src={planeImg} alt="Animated Plane" className="planeImg" />
        <h2>Contact Us</h2>
        <p className='queryText'><i>We are here to answer your all travel related queries</i></p>
        <br />
        <div className='contactFormContainer'>
          <div className='contactImageDiv'>
            <img src={contactUsImg} alt='contactus icon' />
          </div>
          <div className='bookingFormDiv'>
            <Form className='bookingForm' onSubmit={handleClick}>
              <FormGroup>
                <i className="ri-mail-open-fill frontIcon"></i><label>Email:</label><input type='email' placeholder='Enter Your Email' id="email" required onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <i className="ri-phone-fill frontIcon"></i><label>Contact:</label><input type='number' placeholder='Enter Your Contact' id="contact" required onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <i className="ri-file-text-line frontIcon"></i><label>Message:</label><textarea rows="4" cols="50" id="message" required onChange={handleChange}></textarea><br />
              </FormGroup>
              <FormGroup>
                <Button className='btn secondaryBtn bookBtn' onClick={handleClick}>Submit</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
