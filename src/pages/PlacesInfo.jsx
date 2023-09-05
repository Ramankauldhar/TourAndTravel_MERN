import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/placesInfo.css';
import { Form, Button, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import Booking from '../components/Booking/Booking';

import starIcon from '../Images/icons/star-fill.svg';
import priceTagIcon from "../Images/icons/price-tag-fill.png";
import daysIcon from "../Images/icons/calendar-fill.png";
import temeratureColdIcon from '../Images/icons/temp-cold-fill.png';
import temeratureHotIcon from '../Images/icons/temp-hot-line.png';
import cloudIcon from '../Images/icons/cloud-fill.png';
import minusIcon from '../Images/icons/indeterminate-circle-fill.png';
import addIcon from '../Images/icons/add-circle-fill.png';
import bagIcon from '../Images/icons/briefcase-4-fill.png';

import AustraliaNewZealandTrip from '../tripsPages/AustraliaNewZealandTrip';
import DubaiTrip from '../tripsPages/DubaiTrip';
import GreeceTrip from '../tripsPages/GreeceTrip';
import IndiaTrip from '../tripsPages/IndiaTrip';
import JapanSouthKoreaTrip from '../tripsPages/JapanSouthKoreaTrip';
import TurkeyTrip from '../tripsPages/TurkeyTrip';

import AvatarImg from '../Images/avatar.png';

import FetchData from '../hooks/FetchData';
import { BASE_URL } from '../utils/connConfig';
import { Auth } from '../userAuth/Auth';

const PlacesInfo = () => {

  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [reviewState, setReviews] = useState([]);
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(Auth);

  // API to fetch the particular tour's details
  const { data: tourData } = FetchData(`${BASE_URL}/tours/${id}`)
  const { imageUrl, tour, price, reviews, days } = tourData;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        return alert('Please Login First!');
      }

      const reviewObj = {
        userName: user?.userName,
        reviewText,
        rating: tourRating
      }

      const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      });
      const result = await response.json();
      alert(result.message);
      //update reviews state to show the new review that the user added
      setReviews(result);
      //Clear the input field
      reviewMsgRef.current.value = '';
      setTourRating(0);
    }
    catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tourData]);

  return (
    <>
      <section>
        <div className='toursContainer'>
          <div className='tourContent'>
            <img src={imageUrl} alt="place" className='tourImages' />
            <h2 className='tourName'>{tour}</h2>
            <h3>Tour Details</h3>
            <div className='tourinfo'>
              <div>
                <p className='cardHeading'>Rating</p>
                <p className='rating'>
                  <img src={starIcon} alt=' star rating icon' className='icon' />
                  {calculateAvgRating === 0 ? null : avgRating}
                  {totalRating === 0 ? (
                    "Not Rated"
                  ) : (
                    <span>({reviews?.length})</span>
                  )}
                </p>
              </div>
              <div>
                <p className='cardHeading'>Price/person</p>
                <p><img src={priceTagIcon} alt='price tag' className='icon' />${price}</p>
              </div>
              <div>
                <p className='cardHeading'>Days</p>
                <p><img src={daysIcon} alt="days tag" className='icon' /> {days}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='tripDayPlansContainer'>
          <div className='planContainer'>
            <h2>Iternary Summery</h2>
            {tour === 'Australia and New Zealand Tour' && <AustraliaNewZealandTrip />}
            {tour === 'Dubai Tour' && <DubaiTrip />}
            {tour === 'Greece Tour' && <GreeceTrip />}
            {tour === 'India Tour' && <IndiaTrip />}
            {tour === 'Japan and South Korea Tour' && <JapanSouthKoreaTrip />}
            {tour === 'Turkey Tour' && <TurkeyTrip />}
            {tour === 'India Royal and Heritage Tour' && <IndiaTrip />}
            {tour === 'Turkey beautiful Places Tour' && <TurkeyTrip />}
            {tour === 'Dubai Night View Tour' && <DubaiTrip />}
            {tour === 'Japan and Korea Magic Tour' && <JapanSouthKoreaTrip />}
          </div>
          <div className='extraInfoContainer'>
            <div>
              <Booking tourData={tourData} />
            </div>
            <div>
              <p className='titleText'><img src={cloudIcon} alt="temp in celsius icon" className='icon' /> Weather Guide</p>
              <ul>
                <li><img src={temeratureColdIcon} alt="minimum temperature icon" className='icon' /> Minimum Temperature: 15 Degree Celsius</li>
                <li><img src={temeratureHotIcon} alt="maximum temperature icon" className='icon' /> Max Temperature: 25 Degree Celsius</li>
              </ul>
            </div>
            <div>
              <p className='titleText'><img src={addIcon} alt="add icon" className='icon' /> Things Included in the Trip</p>
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
              <p className='titleText'><img src={minusIcon} alt="minus icon" className='icon' />Things which are not Included</p>
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
              <p className='titleText'><img src={bagIcon} alt="suitcase icon" className='icon' /> Suggested Things to Pack for this trip</p>
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
                <i><strong>Note:</strong> You will be regularly notified in any of the changes in the plan.</i><br />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='reviewsSection'>
        <div>
          <h4>
            Add your feedback here
          </h4>
          <Form onSubmit={submitHandler} className='formData'>
            <div className='rating'>
              <span onClick={() => setTourRating(1)} className={tourRating >= 1 ? 'star-filled' : ''}>1<i className="ri-star-fill"></i></span>
              <span onClick={() => setTourRating(2)} className={tourRating >= 2 ? 'star-filled' : ''}>2<i className="ri-star-fill"></i></span>
              <span onClick={() => setTourRating(3)} className={tourRating >= 3 ? 'star-filled' : ''}>3<i className="ri-star-fill"></i></span>
              <span onClick={() => setTourRating(4)} className={tourRating >= 4 ? 'star-filled' : ''}>4<i className="ri-star-fill"></i></span>
              <span onClick={() => setTourRating(5)} className={tourRating >= 5 ? 'star-filled' : ''}>5<i className="ri-star-fill"></i></span>
            </div>
            <div className='inputArea'>
              <input type="text" placeholder='Write your reviews about this trip' ref={reviewMsgRef} required className='inputField' /><br />
              <Button className='btn secondaryBtn reviewSubmitButton'>Submit</Button>
            </div>
          </Form>
          <h5>
            Reviews ({reviews?.length})
          </h5>
          <hr />
          <ListGroup className="userRview">
            {reviews?.map((review, index) => (
              <div key={index}>
                <div className='reviewContainer'>
                  <div className="reviewContent">
                    <div>
                      <img src={AvatarImg} alt="user" />
                    </div>
                    <div>
                      <h5>{review.userName}</h5>
                      <div className='starRating'>
                        {Array.from({ length: review.rating }).map((_, index) => (
                          <img key={index} src={starIcon} alt='star rating icon' className='starIcon' />
                        ))}
                        <span>({review.rating}/5)</span>
                      </div>
                      <p>{review.reviewText}</p>
                      <p>{new Date(review.createdAt).toLocaleDateString("en-Ca", options)}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            ))
            }
          </ListGroup>
        </div>
      </section>
    </>
  )
}

export default PlacesInfo;