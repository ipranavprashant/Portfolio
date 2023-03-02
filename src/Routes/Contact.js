import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Img from "../Images/heroSectionContactImage.jpg";

export default function Contact() {
  return (
    <div>
    <Navbar />
    <HeroSection heading="Refer the footer section below :)" img={Img}/>

    <Footer />
    </div>
  )
}
