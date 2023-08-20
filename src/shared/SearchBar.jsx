import React, { useRef, useState } from 'react';
import { Col, Form, FormGroup } from "reactstrap";

import groupIcon from "./../Images/icons/group-fill.png";
import locationIcon from "./../Images/icons/map-pin-line.png";
import priceTagIcon from "./../Images/icons/price-tag-fill.png";
import './../shared/searchBar.css';

import { BASE_URL } from './../utils/connConfig';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const placeRef = useRef('');
  const noOfPeopleRef = useRef(0);
  const priceRef = useRef(0);
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState('');

  const searchHandler = async () => {
    const place = placeRef.current.value;
    const noOfPeople = noOfPeopleRef.current.value;
    const price = priceRef.current.value;

    if (place === '' || noOfPeople === '' || price === '') {
      setErrorText("* All fields are required!");
    } else {
      try {
        const searchResult = await fetch(`${BASE_URL}/tours/search/getTourDetails?place=${place}&minPeople=${noOfPeople}&maxPrice=${price}`);
        if (!searchResult.ok) {
          setErrorText("OOPS! No match found for your search.");
        } else {
          const result = await searchResult.json();
          if (result.data.length === 0) {
            setErrorText("No match found for your search");
          } else {
            setErrorText(''); // Clear error if data is found
            navigate(`/tours/search?place=${place}&minPeople=${noOfPeople}&maxPrice=${price}`, { state: result.data });
          }
        }
      } catch (error) {
        if (error) {
          setErrorText("No match found");
        }
      }
    }
  }


  return <>
    <Col lg='12'>
      <p className='errorText'>{errorText}</p>
      <div className='searchBar'>
        <Form className='form'>
          <FormGroup className='d-flex gap-3 formGroup'>
            <span><img className='icon' src={locationIcon} alt='group' /></span>
            <div className='fieldDisplay'>
              <label>Country: </label>
              <input type="text" placeholder='Search a country name' ref={placeRef} />
            </div>
          </FormGroup>
          <FormGroup className='d-flex gap-3 formGroup'>
            <span><img className='icon' src={groupIcon} alt='group' /></span>
            <div className='fieldDisplay'>
              <label>Persons: </label>
              <input type="number" placeholder='1' ref={noOfPeopleRef} />
            </div>
          </FormGroup>
          <FormGroup className='d-flex gap-3 formGroup'>
            <span><img className='icon' src={priceTagIcon} alt='group' /></span>
            <div className='fieldDisplay'>
              <label>Price: </label>
              <input type="number" placeholder='$' ref={priceRef} />
            </div>
          </FormGroup>
          <span className='searchIcon' type="submit" onClick={searchHandler}>
            <p></p>
            <p className='searchButton'>Search</p>
          </span>

        </Form>
      </div>
    </Col>
  </>
}
export default SearchBar;