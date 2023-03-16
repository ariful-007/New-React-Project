import "./HeroImgStyle.css"
import React from 'react'
import IntoImg from "../assets/bk.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="bk.jpg" />
        </div>
        <div className="content">
            <p>HE,I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn"> Projects</Link>
                <Link to="/contact" className="btn btn-light"> Contact</Link> 
            </div>
        </div>
    </div>
  )
}

export default HeroImg;