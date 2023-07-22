import React from 'react';
import PlacesCard from '../shared/PlacesCard';
import TourList from '../components/toursList/TourList';
import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter';
import { Container, Row } from 'reactstrap';
import './../styles/places.css';

import backgroundImg from '../Images/backgroundImg.jpeg';



const Places = () => {
  return (
    <>
       <section>
         <img src={backgroundImg} alt="background" className='topBackgroundImage'/>
       </section>

    </>
  )
}

export default Places
