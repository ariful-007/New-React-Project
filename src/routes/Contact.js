import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import From from '../components/From';

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="CONTACTS." text="Lest Have a Chat"></HeroImg2>
      <From></From>
      <Footer></Footer>
    </div>
  )
}

export default Contact;