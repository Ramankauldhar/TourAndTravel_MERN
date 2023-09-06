import React from 'react';
import './../styles/home.css';
import './../animationJs/animation.js';

import SearchBar from '../shared/SearchBar';
import TourList from '../components/toursList/TourList';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';
import OffersList from '../components/Offers/OffersList';

import TextRotator from '../components/TextAndPictureRotator/TextRotator';
import MediaRotator from '../components/TextAndPictureRotator/MediaRotator';

import memoriesImg from '../Images/memories.jpg';
import exploreWorldImg from '../Images/exploreWorld.jpg';
import captureMomentsImg from '../Images/captureMoments.jpg';

const Home = () => {
  return <>
    <section className='backgroundImage'>
      <MediaRotator />
    </section>
    <h1>Travel Around The World With Us</h1>

    <section className='firstSection'>
      <div className="introSection">
        <div className="introContainer">
          <div className="textContainer">
            <TextRotator />
          </div>
          <p className="travelingText"><b>Traveling</b> makes you happy especially when you travel with your lovedones.
            Traveling gives you a chance to make beautiful memories with others by exploring beautiful places around the world.
            We are here to make your experience even more enjoyable and meaningful by providing you the best package and travel guide to explore many places around the world.</p>
        </div>

        <div className="infoContainer animation">
          <div className='card'>
            <img src={memoriesImg} alt='Memories' className='imagesInCard' />
            <div className='cardFooter'>
              <p className='cardPara'>Travel to Create memories with your friends and family</p>
            </div>
          </div>
          <div className='card'>
            <img src={exploreWorldImg} alt='Explore the World' className='imagesInCard' />
            <div className='cardFooter'>
              <p className='cardPara'>Travel to Explore the world to enhance your knowledge</p>
            </div>
          </div>
          <div className='card'>
            <img src={captureMomentsImg} alt='Capture Moments' className='imagesInCard' />
            <div className='cardFooter'>
              <p className='cardPara'>Travel to Capture the moments on beautiful places</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='searchSection'>
      <div>
        <SearchBar />
      </div>
    </section>

    <section className='tripsSection'>
      <div>
        <h2>Special Offers</h2>
        <OffersList />
      </div>
    </section>

    <section className='allTripsSection'>
      <h3>All Trips</h3>
      <div className='tourListContainer'>
        <TourList />
      </div>
    </section>
    <br />

    <section className='animation'>
      <div className='gallerySection' id='gallery'>
        <h3>Gallery</h3>
        <div className='galleryContainer'>
          <Gallery />
        </div>
      </div>
    </section>

    <section className='testimonialSection'>
      <h3>Check our feedbacks from other customers</h3>
      <div className='testimonialContainer'>
        <Testimonials />
      </div>
    </section>
    <br />

    <section className='animation'>
      <div className="NewsSection">
        <NewsLetter />
      </div>
    </section>
  </>
};

export default Home;
