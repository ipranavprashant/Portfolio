import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Img from "../Images/heroSectionImage.jpg"

export default function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection content="Hi I'm Pranav Prashant" title="A Front End Developer." img={Img}/>
        <Footer />
    </div>
  )
}
