import React from 'react';
import Slider from 'react-slick';

import person1Img from '../../Images/person1.jpg';
import person2Img from '../../Images/person2.jpg';
import person3Img from '../../Images/person3.jpg';
import person4Img from '../../Images/person4.jpg';
import person5Img from '../../Images/person5.jpg';
import person6Img from '../../Images/person6.jpg';

const Testimonials = () => {

    const settings ={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinte:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            }
        ]
    }

  return (
  <Slider {...settings}>
        <div className='testimonialDiv py-4 px-3'>
            <p>I took an Indian trip last month and it was a fantastic trip with Tour and Travel Company.
               The tour guide was a fantastic man, who helped us to explore and understand the importance of places.
               I highly recommend this company to everyone, who wants to enjoy their trip.
               DO not forget to check the offers on some of the trip, that would be the best thing.
            </p>
            <div className='slider d-flex align-items-center gap-4 mt-3'>
                <img src={person1Img} className='peopleImg' alt="person"/>
                <div>
                    <h6 className='mb-0 mt-3'>Ramandeep</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className='testimonialDiv py-4 px-3'>
            <p>I took an Indian trip last month and it was a fantastic trip with Tour and Travel Company.
               The tour guide was a fantastic man, who helped us to explore and understand the importance of places.
               I highly recommend this company to everyone, who wants to enjoy their trip.
               DO not forget to check the offers on some of the trip, that would be the best thing.
            </p>
            <div className='slider d-flex align-items-center gap-4 mt-3'>
                <img src={person2Img} className='peopleImg' alt="person"/>
                <div>
                    <h6 className='mb-0 mt-3'>Hi Hu</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className='testimonialDiv py-4 px-3'>
            <p>I took an Indian trip last month and it was a fantastic trip with Tour and Travel Company.
               The tour guide was a fantastic man, who helped us to explore and understand the importance of places.
               I highly recommend this company to everyone, who wants to enjoy their trip.
               DO not forget to check the offers on some of the trip, that would be the best thing.
            </p>
            <div className='slider d-flex align-items-center gap-4 mt-3'>
                <img src={person3Img} className='peopleImg' alt="person"/>
                <div>
                    <h6 className='mb-0 mt-3'>Fitooni Huio</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>  
        
        <div className='testimonialDiv py-4 px-3'>
            <p>I took an Indian trip last month and it was a fantastic trip with Tour and Travel Company.
               The tour guide was a fantastic man, who helped us to explore and understand the importance of places.
               I highly recommend this company to everyone, who wants to enjoy their trip.
               DO not forget to check the offers on some of the trip, that would be the best thing.
            </p>
            <div className='slider d-flex align-items-center gap-4 mt-3'>
                <img src={person4Img} className='peopleImg' alt="person"/>
                <div>
                    <h6 className='mb-0 mt-3'>Fitooni Huio</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>  
        
        <div className='testimonialDiv py-4 px-3'>
            <p>I took an Indian trip last month and it was a fantastic trip with Tour and Travel Company.
               The tour guide was a fantastic man, who helped us to explore and understand the importance of places.
               I highly recommend this company to everyone, who wants to enjoy their trip.
               DO not forget to check the offers on some of the trip, that would be the best thing.
            </p>
            <div className='slider d-flex align-items-center gap-4 mt-3'>
                <img src={person5Img} className='peopleImg' alt="person"/>
                <div>
                    <h6 className='mb-0 mt-3'>Fitooni Huio</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>  
        
        <div className='testimonialDiv py-4 px-3'>
            <p>I took an Indian trip last month and it was a fantastic trip with Tour and Travel Company.
               The tour guide was a fantastic man, who helped us to explore and understand the importance of places.
               I highly recommend this company to everyone, who wants to enjoy their trip.
               DO not forget to check the offers on some of the trip, that would be the best thing.
            </p>
            <div className='slider d-flex align-items-center gap-4 mt-3'>
                <img src={person6Img} className='peopleImg' alt="person"/>
                <div>
                    <h6 className='mb-0 mt-3'>Fitooni Huio</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>  
    </Slider>
  )
}

export default Testimonials
