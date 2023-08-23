import React, { useEffect, useState } from 'react';
import TourList from '../components/toursList/TourList';
import Testimonial from '../components/Testimonial/Testimonials';

import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter';
import { Container, Row, Col } from 'reactstrap';

import FetchData from '../hooks/FetchData';
import { BASE_URL } from '../utils/connConfig';

import './../styles/places.css';
import './../styles/home.css';

const Places = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours } = FetchData(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = FetchData(`${BASE_URL}/counts/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 6)
    setPageCount(pages);
    window.scrollTo(0, 0)
  }, [page, tourCount, tours]);


  return (
    <>
      <section className='animation moveFromRight'>
        <h2 className='tripsHeading'>All Trips</h2>
      </section>
      <section className='SearhSection'>
        <Container>
          <Row>
            < SearchBar />
          </Row>
        </Container>
      </section>

      <section className='tourListSection'>
        <Container>
          <Row>
            <TourList />
            <Col lg="12">
              <div className='pagination d-flex align-item-center justify-content-center mt-a gap-2'>
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "activePage" : ""}>
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Testimonial />
          </Row>
        </Container>
      </section>

      <section>
        <NewsLetter />
      </section>
    </>
  )
}

export default Places;
