import React from 'react';
import './../../shared/Places.css';
import PlacesCard from "./../../shared/PlacesCard";

import FetchData from '../../hooks/FetchData';
import { BASE_URL } from '../../utils/connConfig';

const TourList = () => {
  const { data: allTours, loading, error } = FetchData(`${BASE_URL}/tours`);

  return (
    <>
      {
        loading && <h6>Loading ...</h6>
      }
      {
        error && <h6>{error}</h6>
      }
      <div className="mainContainer">
        {
          !loading && !error &&
          allTours?.map(place => (
            <div key={place._id} className="placeContainer">
              <PlacesCard place={place} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default TourList;