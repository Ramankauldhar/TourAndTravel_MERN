import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.JPG';
import instaIcon from '../../Images/icons/instagram-fill.png';
import faceBookIcon from '../../Images/icons/facebook-box-fill.png';
import twitterIcon from '../../Images/icons/twitter-fill.png';

import addressIcon from '../../Images/icons/building-fill.png';
import emailIcon from '../../Images/icons/mail-fill.png';
import contactIcon from '../../Images/icons/phone-fill.png';
import faxIcon from '../../Images/icons/printer-fill.png';

const quickLinks=[
  {
    path:"/home",
    display:'Home'
  },
  {
    path:"",
    display:'About Us'
  },
  {
    path:"/places",
    display:'Places To Visit'
  },
  {
    path:"",
    display:'Contact Us'
  },
];
const otherLinks=[
  {
    path:"/gallery",
    display:'Gallery'
  },
  {
    path:"/login",
    display:'Login'
  },
  {
    path:"/register",
    display:'Register'
  },
  {
    path:"/feedbacks",
    display:"Feedbacks"
  }
]

const Footer = () => {
  return (
    <footer className='footerMainContainer'>
      <Container>
        <Row>
          <Col lg="3">
            <div className='logo'>
              <img src={logo} alt='Logo'/>
              <p>We encourage a safe trip. We give you all safety tips to make you feel safe during your journey.</p>
              <div className='socialLinks d-flex align-items-center gap-4'>
                <span>
                  <Link to="#"><img src={instaIcon} alt="insta" className='mediaIcon'/></Link>
                </span>
                <span>
                  <Link to="#"><img src={faceBookIcon} alt="facebook" className='mediaIcon'/></Link>
                </span>
                <span>
                  <Link to="#"><img src={twitterIcon} alt="twitter" className='mediaIcon'/></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='discoverTitle'>Discover</h5>
            <ListGroup className='quickLinks'>
              {
                quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='list ps-0 border-0'>
                    <Link to={item.path}> {item.display} </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='discoverTitle'>Other Links</h5>
            <ListGroup className='quickLinks'>
              {
                otherLinks.map((item, index) => (
                  <ListGroupItem key={index} className='list ps-0 border-0'>
                    <Link to={item.path}> {item.display} </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5>Contact</h5>
            <h6><img src={addressIcon} alt="icon" className='mediaIcon'/>Address: 45 Miles Road, Scarborough, M1G2L3</h6>
            <p><img src={emailIcon} alt="icon" className='mediaIcon'/>Email: RamandeepJanda@gmail.com</p>
            <p><img src={contactIcon} alt="icon" className='mediaIcon'/>Ph: 546-743-3894</p>
            <p><img src={faxIcon} alt="icon" className='mediaIcon'/>Fax: 783-433-2222</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
