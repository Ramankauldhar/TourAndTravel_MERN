import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import serviceIcon from "../Images/icons/service-fill.png";
import cloudIcon from "../Images/icons/cloud-fill.png";
import guideIcon from "../Images/icons/guide-fill.png";

const sericesArray = [
    {
        imageUrl: cloudIcon,
        title: "Weather Guide",
        desc: "We plan the trips according to the weather and in case if the weather conditions changes, we tries our best to give you enjoyable trip as per your wish. We are here to help you always.",
    },
    {
        imageUrl: guideIcon,
        title: "Excellent Tour Guide",
        desc: "We provide you day be day guidance of the trip before we start it and we consider it as responsibility to give you all correct information about the trip to avoid any dissatisfaction.",
    },
    {
        imageUrl: serviceIcon,
        title: "Excellent Customer Service",
        desc: "Your satisfaction is our first priority, therefore we put our heart down to give you a great experience while travelling with us as we value you and your money.",
    },
    {
        imageUrl: serviceIcon,
        title: "Travel Insurance",
        desc: "We also provide travel insurance to our customers. This benifit help you stay safe and in case of any enjoy you an claim some money and this insurance covers almost everything you need.",
    },
]

const ServiceList = () => {
  return (
    <>
    {
        sericesArray.map((item,index) =>(
            <Col lg="3" key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))
    }
    </>
  )
}

export default ServiceList
