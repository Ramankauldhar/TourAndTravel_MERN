import React from 'react';
import '../../shared/Offers.css';
import OffersCard from '../../shared/OffersCard';

import FetchData from '../../hooks/FetchData';
import { BASE_URL } from '../../utils/connConfig';


const OffersList = () => {
    const { data: offers, loading, error } = FetchData(`${BASE_URL}/tours/offers/getTourOnOffer`);

    return (
        <>
            {loading && <button className="buttonload"><i className="fa fa-spinner fa-spin"></i>Loading</button>}
            {error && <h6>{error}</h6>}
            <div className="mainContainer">
                {!loading && !error &&
                    offers?.map(place => (
                        <div key={place._id} className="offerDetailsContainer">
                            <OffersCard place={place} />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default OffersList;

