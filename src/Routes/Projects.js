import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Img from "../Images/heroSectionProjectImage.jpg";

export default function Projects() {
  return (
    <div>
        <Navbar />
        <HeroSection heading="Some of my recent works include:" content="(i)A Portfolio website" content1="(ii)An API based Weather App" content2="(iii)An API based News App" content3="(iv)A Quiz App"  img={Img}/>
        <Footer />
    </div>
  )
}
