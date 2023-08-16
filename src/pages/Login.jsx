import React, { useState } from 'react';
import '../styles/loginRegister.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import loginImg from '../Images/login.jpeg';
import userIcon from '../Images/userIcon.png';

const Login = () => {

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
                <img src={loginImg} alt='login background' className='loginImage' />
              </div>
              <div className='loginRegisterForm'>
                <h2>Login</h2>
                <div>
                  <img src={userIcon} alt="user icon" />
                </div>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <i className="ri-mail-open-fill frontIcon"></i><input type='email' placeholder='Enter your email here' id="userEmail" onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <i className="ri-lock-unlock-fill frontIcon"></i><input type='password' placeholder='Enter your password here' id="userPswd" onChange={handleChange} required />
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
