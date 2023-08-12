import React, { useState } from 'react';
import '../styles/loginRegister.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import registerImg from '../Images/register.png';
import userIcon from '../Images/userIcon.png';

const Register = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userEmail: undefined,
    userPswd: undefined
  })

  const handleChange = e => {
    setCredentials(prev => (
      {
        ...prev, [e.target.id]: e.target.value
      }
    ))
  };
  const handleClick = e => {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='loginRegisterContainer'>
              <div className='loginRegisterImage'>
                <img src={registerImg} alt='register a new user background image' className='registerImage'/>
              </div>
              <div className='loginRegisterForm'>
                <h2>Register</h2>
                <div>
                  <img src={userIcon} alt="user icon" />
                </div>
                <Form>
                  <FormGroup>
                    <i class="ri-user-fill frontIcon"></i><input type='text' placeholder='Enter your username here' id="userEmail" onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <i class="ri-mail-open-fill frontIcon"></i><input type='email' placeholder='Enter your email here' id="userEmail" onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <i class="ri-lock-unlock-fill frontIcon"></i><input type='password' placeholder='Enter your password here' id="userPswd" onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <Button className='btn secondaryBtn' type='submit'>Register</Button>
                  </FormGroup>
                </Form>
                <p>Already have an account?<Link to='/login'>Login here</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;

