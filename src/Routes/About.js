import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Img from "../Images/heroSectionAboutImage.jpg";
import HeroSection from '../components/HeroSection'

export default function About() {
  return (
    <div>
    <Navbar />
    <HeroSection heading="Hi I'm Pranav Prashant" content="An undergraduate student at NIT Calicut majoring in CSE" content1="A Front End Developer." content2="A foss enthusiast." img={Img}/>

    <Footer />
</div>
  )
}
