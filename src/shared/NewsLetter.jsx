import React from 'react';
import './newsLetter.css';
import { Container, Row, Col } from 'reactstrap';
import subscribeImg from '../Images/subscribe.gif';

const NewsLetter = () => {
  return <section>
    <Container className='newletterContainer'>
        <Row>
            <Col lg='6' className='leftText'>
                <div className='newsletter'>
                    <h2>Subscribe us to get latest traveling information. </h2>
                    <div className='newsLetterInput'>
                        <label>Email:</label>
                         <input type='email' placeholder='Enter your email' />
                         <button className='newsletterBtn'>Subscribe</button>
                    </div>
                    <br/>
                    <i>We will send daily travelling news according to the weather consitions and season.<br/> If you want to get touch with us, subscribe us today.
                    </i>
                </div>
                
            </Col>
            <Col lg='6' className='rightText'>
                <div className='newsLetterImg'>
                    <img src={subscribeImg} alt="subsrcibe"/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default NewsLetter
