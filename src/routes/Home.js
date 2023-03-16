import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg"
import Work from "../components/Work" 
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroImg></HeroImg>
        <Work></Work>
        <Footer></Footer>
    </div>
  )
}

export default Home;