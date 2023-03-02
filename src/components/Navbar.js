import React from 'react'
import {NavLink } from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'
import "./Navbar.css"
import { useState } from 'react'

export default function Navbar() {
    const [click,setClick]=useState(false);
    function handleClick()
    {
        if(click===false)
        setClick(true);
        else
        setClick(false);
    }

    const [navbarColour, setNavbarColour]=useState(false);
    function handleNavbarWhileScrolling()
    {
        if(window.scrollY>=100)
        setNavbarColour(true);
        else
        setNavbarColour(false);
    };

    window.addEventListener("scroll",handleNavbarWhileScrolling);

  return (
    <div>
        <div className={navbarColour?"heading heading-bg":"heading"}>
            {/* <NavLink to="/"><h1>Portfolio.</h1></NavLink> */}
            <ul className={click?"nav-menu active":"nav-menu"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
            {click?
                (<FaTimes size={20} style={{color:"white"}}/>):
                (<FaBars size={20} style={{color:"white"}}/>)
            }
            </div>
            
        </div>
    </div>
  )
}
