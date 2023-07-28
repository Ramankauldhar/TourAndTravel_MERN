import React from 'react';
import '../styles/placesInfo.css';
import {Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import placesArray from '../TourData/placesArray';
import calculateAvgRating from '../utils/avgRating';

import starIcon from '../Images/icons/star-fill.svg';
import mapIcon from '../Images/icons/map-pin-line.png';
import priceTagIcon from "../Images/icons/price-tag-fill.png";
import daysIcon from "../Images/icons/calendar-fill.png";

import AustraliaNewZealandTrip from '../tripsPages/AustraliaNewZealandTrip';
import DubaiTrip from '../tripsPages/DubaiTrip';
import GreeceTrip from '../tripsPages/GreeceTrip';
import IndiaTrip from '../tripsPages/IndiaTrip';
import JapanSouthKoreaTrip from '../tripsPages/JapanSouthKoreaTrip';
import TurkeyTrip from '../tripsPages/TurkeyTrip';

const PlacesInfo = () => {

  const {id} = useParams();
  //later API will be used
  const tourData = placesArray.find(place => place.id === id);
  const {imageUrl, tour, desc, price, reviews, days} = tourData;

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  return (
    <>
     <section>
      <div className='toursContainer'>
            <div className='tourContent'>
              <img src={imageUrl} alt="placeImg" className='tourImages' />
              <h2 className='tourName'>{tour}</h2>
              <h3>Tour Details</h3>
              <div className='tourinfo'>
                <div>
                    <p className='cardHeading'>Rating</p>
                    <p className='rating'>
                      <img src={starIcon} alt=' star rating icon' className='icon'/>
                      {calculateAvgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ):(
                      <span>({reviews?.length})</span>
                       )}
                    </p>
                </div>
                <div>
                    <p className='cardHeading'>Price/person</p>
                    <p><img src={priceTagIcon} alt='price tag' className='icon'/>${price}</p>
                </div>
                <div>
                    <p className='cardHeading'>Days</p>
                    <p><img src={daysIcon} alt="days tag" className='icon'/> {days}</p>
                </div>
              </div>
            </div>
      </div>
      <div className='tripDayPlansContainer'>
          <div className='planContainer'>
            {tour === 'Australia and New Zealand Tour' && <AustraliaNewZealandTrip />}
            {tour === 'Dubai Tour' && <DubaiTrip />}
            {tour === 'Greece Tour' && <GreeceTrip />}
            {tour === 'India Tour' && <IndiaTrip />}
            {tour === 'Japan and South Korea Tour' && <JapanSouthKoreaTrip />}
            {tour === 'Turkey Tour' && <TurkeyTrip />}
          </div>
          <div className='extraInfoContainer'>
            <div>
              <p className='titleText'>Temperature Guide</p>
              <ul>
                  <li>Minimum Temperature: 15 Degree Celsius</li>
                  <li>Max Temperature: 25 Degree Celsius</li>
              </ul>
              <i><strong>Note:</strong> You will be regularly notified in any of the changes in the temperature.</i><br/>
            </div>
            <br/>
            <div>
              <p  className='titleText'>Things Included in the Trip</p>
              <ul>
                <li>Stay at Hotel</li>
                <li>Daily Breakfast, Lunch and Dinner</li>
                <li>Free rental cars</li>
                <li>Dedicated English Speaking Professional Tour Guide</li>
                <li>All taxes included</li>
                <li>Free Wifi</li>
                <li>One travel gift</li>
                <li>Extra Services of your choice</li>
                <li>Bus Service</li>
                <li>Taxi Service</li>
                <li>Hotel stay Expenses</li>
                <li>Hotel Amenity Usage</li>
              </ul>
            </div>
            <div>
              <p  className='titleText'>Things which are not Included</p>
              <ul>
                <li>Extra meal or drinks</li>
                <li>Laundry</li>
                <li>Telephone bills</li>
                <li>International Airface</li>
                <li>Extra Advanture actvisties</li>
                <li>Shopping</li>
                <li>Short Trips in the City</li>
                <li>Snacks</li>
                <li>Tips</li>
                <li>TV access</li>
                <li>Kitchen in the Hotel</li>
              </ul>
            </div>
            <div>
              <p  className='titleText'>Suggested Things to Pack for this trip</p>
              <ul>
                <li>Pack atleast 5 winter dresses</li>
                <li>Pack atleast 5 summer dresses</li>
                <li>Keep a power bank in your bag</li>
                <li>Keep some snacks in side bag</li>
                <li>Pack a Spring Jacket for mild cold evenings</li>
                <li>4 Shirts</li>
                <li>Pack atleast 5 winter dresses</li>
                <li>Pack atleast 5 summer dresses</li>
                <li>Keep a power bank in your bag</li>
                <li>Keep some snacks in side bag</li>
                <li>Pack a Spring Jacket for mild cold evenings</li>
                <li>4 Shirts</li>
              </ul>
            </div>
          </div>
      </div>    
     </section>
    </>
  )
}

export default PlacesInfo
