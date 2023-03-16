import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';  

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="PROJECT" text="Some of My Recent Works"></HeroImg2>
      <Work></Work>
      <PricingCard></PricingCard> 
      <Footer></Footer>
    </div>
  )
}

export default Project;