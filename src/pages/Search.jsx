import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import PlacesCard from '../shared/PlacesCard';
import NewsLetter from '../shared/NewsLetter';

const Search = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchError, setSearchError] = useState(false); // New state for search error

  useEffect(() => {
    if (location.state) {
      setData(location.state);
      setLoading(false);
      setSearchError(location.state.length === 0); // Set searchError based on data length
    }
  }, [location.state]);

  return (
    <>
      <div>
        <section className='animation moveFromRight'>
          <h2 className='tripsHeading'>Tour Search Result</h2>
        </section>
        <section>
          <Container>
            <Row>
              {loading ? (
                <h3>Loading...</h3>
              ) : searchError ? (
                <h3>No match found for your tour search</h3> // Show error message
              ) : (
                data.map(place => (
                  <Col lg='3' className='mb-4' key={place._id}>
                    <PlacesCard place={place} />
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </section>
        <section>
          <NewsLetter />
        </section>
      </div>
    </>
  )
}

export default Search;