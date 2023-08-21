import React, { useState, useContext } from 'react';
import '../styles/loginRegister.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import registerImg from '../Images/register.png';
import userIcon from '../Images/userIcon.png';

import { BASE_URL } from '../utils/connConfig';
import { Auth } from '../userAuth/Auth';

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName: undefined,
    userEmail: undefined,
    pswd: undefined
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(Auth);

  const handleChange = e => {
    setCredentials(prev => (
      {
        ...prev, [e.target.id]: e.target.value
      }
    ))
  };
  const handleClick = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (!response.ok) alert(result.message);

      dispatch({ type: 'REGISTER_SUCCESS' })
      navigate('/login')
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='loginRegisterContainer'>
              <div className='loginRegisterImage'>
                <img src={registerImg} alt='register a new user background' className='registerImage' />
              </div>
              <div className='loginRegisterForm'>
                <h2>Register</h2>
                <div>
                  <img src={userIcon} alt="user icon" />
                </div>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <i class="ri-user-fill frontIcon"></i><input type='text' placeholder='Enter your username here' id="userName" onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <i class="ri-mail-open-fill frontIcon"></i><input type='email' placeholder='Enter your email here' id="userEmail" onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <i class="ri-lock-unlock-fill frontIcon"></i><input type='password' placeholder='Enter your password here' id="pswd" onChange={handleChange} required />
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