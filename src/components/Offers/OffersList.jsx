import React from 'react';
import '../../shared/Offers.css';
import OffersCard from '../../shared/OffersCard';

import FetchData from '../../hooks/FetchData';
import { BASE_URL } from '../../utils/connConfig';


const OffersList = () => {
    const { data: offers, loading, error } = FetchData(`${BASE_URL}/tours/offers/getTourOnOffer`);
 
    return (
        <>
            {loading && <h6>Loading ...</h6>}
            {error && <h6>{error}</h6>}
            <div className="containerTop">
                {!loading && !error &&
                    offers?.map(place => (
                        <div className="cardContainer">
                            <OffersCard key={place._id} place={place} />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default OffersList;

