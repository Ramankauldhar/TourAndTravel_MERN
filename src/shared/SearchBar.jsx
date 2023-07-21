import React, {useRef, useState} from 'react';
import { Col, Form, FormGroup } from "reactstrap";
import searchIcon from "./../Images/icons/search-line.png";
import groupIcon from "./../Images/icons/group-fill.png";
import locationIcon from "./../Images/icons/map-pin-line.png";
import priceTagIcon from "./../Images/icons/price-tag-fill.png";
import './../shared/searchBar.css';

const SearchBar = () => {

  const placeRef = useRef('');
  const noOfPeopleRef = useRef(0);
  const priceRef = useRef(0);

  const [errorText, seterrortext] = useState('');

  const searchHandler = () =>{
    const place = placeRef.current.value;
    const noOfPeople = noOfPeopleRef.current.value;
    const price = priceRef.current.value;

    if(place === '' || noOfPeople === '' || price === ''){
      seterrortext("* All field are required!");
    }
  }

  return <>
  <Col lg='12'>
    <div className='searchBar'>
      <Form className='form'>
        <FormGroup className='d-flex gap-3 formGroup'>
          <span><img className='icon' src={locationIcon} alt='group' /></span>
          <div>
            <p>Country: </p>
            <input type="text" placeholder='Search a country name' ref={placeRef}/>
          </div>
        </FormGroup>
        <FormGroup className='d-flex gap-3 formGroup'>
          <span><img className='icon' src={groupIcon} alt='group' /></span>
          <div>
            <p>No of Person: </p>
            <input type="number" placeholder='1' ref={noOfPeopleRef}/>
          </div>
        </FormGroup>
        <FormGroup className='d-flex gap-3 formGroup'>
          <span><img className='icon' src={priceTagIcon} alt='group' /></span>
          <div>
            <p>Price: </p>
            <input type="number" placeholder='$' ref={priceRef}/>
          </div>
        </FormGroup>
        <span className='searchIcon' type="submit" onClick={searchHandler}>
          <p></p>
         <p className='searchButton'>Search</p>
        </span>
        <p className='errorText'>{errorText}</p>
      </Form>
    </div>
  </Col>
  </>
}
export default SearchBar;
