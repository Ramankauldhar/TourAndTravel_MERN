import React, { useState } from 'react';
import contactBackgroundImg from '../Images/contactBackground.avif';
import { Button, Form, FormGroup , ListGroup, ListGroupItem} from "reactstrap";
import planeImg from '../Images/plane.png';

const Contact = () => {
  const [credentials, setCredentials] = useState({
    email: 'rmnkaul@gmail.com',
    contact:'',
    Message:''
  });

  const handleChange = e => {
    setCredentials(prev => (
        {
            ...prev, [e.target.id]:e.target.value
        }
    ))
  };
  const handleClick = e => {
    e.preventDefault();
  } 

  return (
    <div>
      <div className='contactusDiv'>
        <img src={contactBackgroundImg} className="contactImage" />
      </div>
      <div className='textDiv'>
        <img src={planeImg} className="planeImg" />
        <h2>Contact Us</h2>
        <div className='contactFormContainer'>
          <div className='openingHoursDiv'>
            <p>Our Opening Hours</p>
            <ListGroup>
               <ListGroupItem>
                <p>Monday</p><span>09:00-09:00</span>
               </ListGroupItem>
               <ListGroupItem>
                <p>Tuesday</p><span>09:00-09:00</span>
               </ListGroupItem>
               <ListGroupItem>
                <p>Wednesday</p><span>09:00-09:00</span>
               </ListGroupItem>
               <ListGroupItem>
                <p>Thursday</p><span>09:00-09:00</span>
               </ListGroupItem>
               <ListGroupItem>
                <p>Friday</p><span>09:00-09:00</span>
               </ListGroupItem>
            </ListGroup>   
          </div>
          <div className='bookingFormDiv'>
           <Form className='bookingForm' onSubmit={handleClick}>
            <FormGroup>
                <label>Email:</label><br/><input type='email' placeholder='Email' id="email" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <label>Contact:</label><br/><input type='number' placeholder='Contact' id="contact" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <label>Message:</label><br/><textarea rows="4" cols="50" id="message" required onChange={handleChange}></textarea><br/>
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

export default Contact
