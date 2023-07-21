import React from 'react';
import "./ServiceCard.css";

const ServiceCard = ({item}) => {

    const {imageUrl, title, desc} = item;

  return (
    <div className='services'>
      <div className='serviceImg'>
        <img src={imageUrl} alt="icons" className='serviceImg'/>
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  )
}

export default ServiceCard
