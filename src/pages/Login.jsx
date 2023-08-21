import React, { useState, useContext } from 'react';
import '../styles/loginRegister.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import loginImg from '../Images/login.jpeg';
import userIcon from '../Images/userIcon.png';

import { BASE_URL } from '../utils/connConfig';
import { Auth } from '../userAuth/Auth';

const Login = () => {

  const [credentials, setCredentials] = useState({
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

    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (!response.ok) alert(result.message);

      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
      navigate('/')
    }
    catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.message })
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='loginRegisterContainer'>
              <div className='loginRegisterImage'>
                <img src={loginImg} alt='login background' className='loginImage' />
              </div>
              <div className='loginRegisterForm'>
                <h2>Login</h2>
                <div>
                  <img src={userIcon} alt="user icon" />
                </div>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <i class="ri-mail-open-fill frontIcon"></i><input type='email' placeholder='Enter your email here' id="userEmail" onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <i class="ri-lock-unlock-fill frontIcon"></i><input type='password' placeholder='Enter your password here' id="pswd" onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <Button className='btn secondaryBtn' type='submit'>Login</Button>
                  </FormGroup>
                </Form>
                <p>Don't you have an account?<Link to='/register'>Register here</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;