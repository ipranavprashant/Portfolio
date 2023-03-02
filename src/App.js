import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./Routes/Home"
import Projects from "./Routes/Projects"
import About from "./Routes/About"
import Contact from "./Routes/Contact"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/> 
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
    );
}

