import React from 'react';
import PlacesCard from "./../../shared/PlacesCard";
import './../../shared/Places.css';
import placesArray from "../../TourData/placesArray";

const TourList = () => {
  return (
    <>
     <div className="mainContainer">
        {
          placesArray?.map(place => (
            <div key={place.id} className="placeContainer">
              <PlacesCard place={place} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default TourList;
