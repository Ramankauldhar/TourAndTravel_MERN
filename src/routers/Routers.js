import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Places from "./../pages/Places";
import PlacesInfo from "./../pages/PlacesInfo";
import Register from "./../pages/Register";
import Search from "./../pages/Search";
import FinalBooking from "./../pages/FinalBooking";

import TurkeyTrip from "../tripsPages/TurkeyTrip";
import IndiaTrip from "../tripsPages/IndiaTrip";
import DubaiTrip from "../tripsPages/DubaiTrip";
import JapanSouthKoreaTrip from "../tripsPages/JapanSouthKoreaTrip";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/places" element={<Places />} />
      <Route path="/places/:id" element={<PlacesInfo />} />
      <Route path="/register" element={<Register />} />
      <Route path="/places/search" element={<Search />} />
      <Route path="/turkey" element={<TurkeyTrip />} />
      <Route path="/india" element={<IndiaTrip />} />
      <Route path="/dubai" element={<DubaiTrip />} />
      <Route path="/japan" element={<JapanSouthKoreaTrip />} />
      <Route path="/finalPage" element={<FinalBooking />} />
    </Routes>
  );
};

export default Routers;
