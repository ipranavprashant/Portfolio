import React from 'react'
import "./HeroSection.css"

export default function HeroSection(props) {
  return (
    <div className="heroSection">
        <div className="mask">
            <img className="intro-img" src={props.img} alt="HeroSectionImage"/>
        </div>
        <div className="heroSectionContent">
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
        <p>{props.content1}</p>
        <p>{props.content2}</p>
        <p>{props.content3}</p>
        <p>{props.content4}</p>
        <h1>{props.title}</h1>
        <a href="https://www.github.com/ipranavprashant" rel="noreferrer" target="_blank"><button className="btn">GitHub</button></a>
        <a><button className="btn">Live</button></a>
        </div>
    </div>
  )
}
