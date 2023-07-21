import React from 'react';

import Header from './../Header/Header';
import Footer from "./../Footer/Footer";
import Routers from "./../../routers/Routers";

const Container = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  )
}
export default Container;

