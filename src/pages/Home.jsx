import React from 'react';
import './../styles/home.css';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import TourList from '../components/toursList/TourList';
import {Link} from "react-router-dom";
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';

import TextRotator from '../components/TextAndPictureRotator/TextRotator';
import MediaRotator from '../components/TextAndPictureRotator/MediaRotator';

import memoriesImg from '../Images/memories.jpg';
import exploreWorldImg from '../Images/exploreWorld.jpg';
import captureMomentsImg from '../Images/captureMoments.jpg';

import dubaiImg from '../Images/dubai.jpg';
import indiaImg from '../Images/india.jpg';
import japanImg from '../Images/japan.jpg';
import turkeyImg from '../Images/turkey.jpg';
import experienceImg from '../Images/experience.png';


const Home = () => {
return <> 
  <section data-scroll data-scroll-speed="-5" id='main' className='backgroundImage'>
       <MediaRotator />
  </section>
  <h1>Travel Around The World With Us</h1>

    <section className='firstSection'>
          <div className="introSection">
            <div className="introContainer">
              <div class="textContainer">
                <TextRotator  />
              </div>
              <p className="travelingText"><b>Traveling</b> makes you happy especially when you travel with your lovedones. 
                Traveling gives you a chance to make beautiful memories with others by exploring beautiful places around the world.
                We are here to make your experience even more enjoyable and meaningful by providing you the best package and travel guide to explore many places around the world.</p>
  
            </div>
            
            <div className="infoContainer">
              <div className='card'>
                <img src={memoriesImg} alt='Memories' className='imagesInCard'/>
                <div className='cardFooter'>
                  <p className='cardPara'>Travel to Create memories with your friends and family</p>
                </div>
              </div>
              <div className='card'>
                <img src={exploreWorldImg} alt='Explore the World' className='imagesInCard'/>
                <div className='cardFooter'>
                  <p className='cardPara'>Travel to Explore the world to enhance your knowledge</p>
                </div>
              </div>
              <div  className='card'>
                <img src={captureMomentsImg} alt='Capture Moments' className='imagesInCard'/>
                <div className='cardFooter'>
                  <p className='cardPara'>Travel to Capture the moments on beautiful places</p>
                </div>
              </div>
            </div>
          </div>
    </section>

    <section className='searchSection'>
      <div>
         <SearchBar/>
      </div>
    </section> 

    <section className='tripsSection'>
      <div>
        <h2>Special Offers</h2>
           <div className="containerTop">
              <div className='cardContainer'>
                <div className='imgContainer'>
                    <Link to="/turkey">
                       <img src={turkeyImg} alt='Memories' className='images'/>
                    </Link>
                    <span className='offerText'>Offer</span>
                </div>
                 <div className='cardFooter2'>
                    <p className='cardParaHeading'>Turkey Trip</p>
                    <div className='MoreDetails'>
                        <p>Length: 7 Days </p>
                        <p>was <del>$20,000</del> <ins className='priceText'>$10,000</ins></p>
                    </div>
                    <p>Package for 4 people</p>
                 </div>
              </div>
              <div  className='cardContainer'>
                <div className='imgContainer'>
                  <Link to="/india">
                   <img src={indiaImg} alt='Capture Moments' className='images'/>
                  </Link>
                  <span className='offerText'>Offer</span>
                </div>
                <div className='cardFooter2'>
                  <p className='cardParaHeading'>India Trip</p>
                  <div className='MoreDetails'>
                    <p>Length: 7 Days </p>
                    <p>was <del>$25,000</del> <ins className='priceText'>$15,000</ins></p>
                  </div>
                  <p>Package for 5 people</p>
                </div>
              </div>
              <div className='cardContainer'>
                 <div className='imgContainer'>
                    <Link to="/dubai">
                      <img src={dubaiImg} alt='Explore the World' className='images'/>
                    </Link>
                    <span className='offerText'>Offer</span>
                 </div>
                <div className='cardFooter2'>
                  <p className='cardParaHeading'>Dubai Trip</p>
                  <div className='MoreDetails'>
                    <p>Length: 7 Days </p>
                    <p>was <del>$8,000</del> <ins className='priceText'>$6,000</ins></p>
                  </div>
                  <p>Package for 2 people</p>
                </div>
              </div>
              <div  className='cardContainer'>
                <div className='imgContainer'>
                  <Link to="/japan">
                      <img src={japanImg} alt='Capture Moments' className='images'/>
                  </Link>
                  <span className='offerText'>Offer</span>
                </div>
                <div className='cardFooter2'>
                  <p className='cardParaHeading'>Japan and South Korea Trip</p>
                  <div className='MoreDetails'>
                    <p>Length: 13 Days </p>
                    <p>was <del>$24,000</del> <ins className='priceText'>$20,000</ins></p>
                  </div>
                  <p>Package for 4 people</p>
                </div>
              </div>
        </div>
      </div>
    </section>

    <section className='allTripsSection'>
        <h3>All Trips</h3>
        <div className='tourListContainer'>
           <TourList/>
        </div>
    </section>
    <br/>

     <section>
            <h3 className='serviceTitle'>Our Services</h3>
            <div className='servicesContainer'>
               <ServiceList/>
            </div>
    </section>

    <section>
        <div className='experinceMainDiv'>
          <div className='experienceSection'>
           <div className='experienceContent'>
              <h3>Our Experience</h3>
              <p class="expText">We will help you to make your trip more enjoyable with our 20 years experience in the industry.
               We are the most expeienced in the world. We value your money and time.
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
        <img src={experienceImg} alt='travelexperience' className='expImg'/>
      </div>
    </div>
    </section>
    <br/>
  
    <section>
      <div className='gallerySection'>
        <h3>Gallery</h3>
        <div className='galleryContainer'>
          <Gallery/>
        </div>
      </div>
    </section>

    <section className='testimonialSection'>
      <h3>Check our feedbacks from other customers</h3>
      <div className='testimonialContainer'>
        <Testimonials/>
      </div>
    </section>
    <br />

    <section>
      <div class="NewsSection">
        <NewsLetter/>
      </div>
    </section>
  </>
};

export default Home;
