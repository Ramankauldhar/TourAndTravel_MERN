import React, {useEffect, useState} from 'react';
import TourList from '../components/toursList/TourList';
import Testimonial from '../components/Testimonial/Testimonials';

import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter';
import { Container, Row, Col } from 'reactstrap';

import './../styles/places.css';

const Places = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    const pages = Math.ceil(5/4)
    setPageCount(pages)
  }, [page]);



  return (
    <>
      <section>
         <Container>
            <Row> 
              <h2 className='tripsHeading'>All Trips</h2>
            </Row>
          </Container>
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
                <div className='pagination d-flex align-itrm-center justify-content-center mt-a gap-2'>
                    {[...Array(pageCount).keys()].map(number => (
                      <span key={number} 
                            onClick={() => setPage(number)} 
                            className= {page === number ? "activePage" : ""}>
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

export default Places
