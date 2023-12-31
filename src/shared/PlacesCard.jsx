import React from 'react';
import {Link} from "react-router-dom";
import starIcon from '../Images/icons/star-fill.svg';
import './Places.css';
import calculateAvgRating from '../utils/avgRating';

const PlacesCard = ({place}) => {
  const {
        _id,
        tour,
        imageUrl,
        price,
        days,
        reviews,
        people
       } = place;

  const {totalRating, 
          avgRating} = calculateAvgRating(reviews);    

  return (
   <div className="mainContainer">
      <div className='offersContainer'>
        <div className='imgContainer'>
            <Link to={`/places/${_id}`}>
              <img src={imageUrl} alt='tourplaces' className='images'/>
            </Link> 
            <span className='featuredText'>Featured</span>
         </div>
         <div className='cardFooterP'>
           <p className='cardParaHeading'>{tour}</p>
           <span>
             {Array.from({length: avgRating}).map((_, index) => (
                <img key={index} src={starIcon} alt='icon' className='icon'/>
              ))}
              {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                    "Not Rated"
                     ):(
                     <span>({reviews.length})</span>
                     )}
          </span>
          <div className='MoreDetails'>
              <p>Length: {days} Days </p>
              <p className='priceText'>${price}</p>
          </div>
          <p>< i className="ri-group-line"></i> Trip for {people} People</p>
        </div>
      </div>
   </div>
  );
}

export default PlacesCard;
