import React from 'react';
import aboutUsImg from "../Images/aboutUs.jpeg";
import experienceImg from '../Images/experience.png';
import ServiceList from '../services/ServiceList';
import Map from '../pages/Map';
import { ListGroup, ListGroupItem } from "reactstrap";

const About = () => {
  return (
    <div>
      <div className='BackgroundDiv'>
        <img src={aboutUsImg} alt='office background picture' className="aboutBackgroundImage" />
      </div>
      <div className='textDiv'>
        <section className='animation fadeBottom'>
          <div className='experinceMainDiv'>
            <div className='experienceSection'>
              <div className='experienceContent'>
                <h2>About Us</h2>
                <p className="expText">We are master in making your trip fantastic. We are helping people to stay healthy and possitive during their travel journey as it is important to create good memories on beautiful places.
                  We have 10,000 of people who took out great trip and their feedback can tell you their experince with us.
                  We value our customers as your travel journey becomes our responsibility to make it best with the best guide.
                </p>
              </div>
              <div className='counterWrapper'>
                <div className='counterBox'>
                  <span>15K+</span>
                  <p>Sucessful Trip</p>
                </div>
                <div className='counterBox'>
                  <span>1K+</span>
                  <p>Regular Clients</p>
                </div>
                <div className='counterBox'>
                  <span>20+</span>
                  <p>Year Experience</p>
                </div>
              </div>
            </div>
            <div className='expImgContainer'>
              <img src={experienceImg} alt='travelexperience' className='expImg' />
            </div>
          </div>
        </section>
      </div>

      <section className='animation fadeRight'>
        <h3 className='serviceTitle'>Our Services</h3>
        <div className='servicesContainer'>
          <ServiceList />
        </div>
      </section>

      <section className='openingHoursSection animation fadeRight'>
        <div>
          <h3 className='openingHourTitle'>Our Opening Hours</h3>
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
      </section>

      <section className="mapSection">
        <h3>Our Location</h3>
        <Map />
      </section>
    </div>
  )
}

export default About;
