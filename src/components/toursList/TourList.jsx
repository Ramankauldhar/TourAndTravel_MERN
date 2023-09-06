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
        loading && <button className="buttonload"><i className="fa fa-spinner fa-spin"></i>Loading</button>
      }
      {
        error && <h6>{error}</h6>
      }
      <div className="mainContainer">
        {
          !loading && !error &&
          allTours?.map(place => (
            <div key={place._id} className="placeContainer animation">
              <PlacesCard place={place} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default TourList;