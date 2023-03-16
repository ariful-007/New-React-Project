import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./NavbarStyle.css"
import {FaBars, FaTimes} from "react-icons/fa" 

const Navbar = () => {
   
    const [click, setClick] = useState(false);
    const handelClick =() => setClick(!click);

    const[color, setColor] = useState(false);
    const chengeColor =()=>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",chengeColor);

  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
            <h1>Protfolio.</h1>
        </Link>
        <ul className={click ? "nav-manu active" : "nav-manu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handelClick }>
            {click ? (<FaTimes size={20} style={{color:"#fff"}} />):

            (<FaBars size={20} style={{color:"#fff"}} />) }
        </div>
    </div>
  )
}

export default Navbar;