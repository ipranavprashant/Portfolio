import React from 'react'
import "./Footer.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="footer">
    <div className="footer-container">
<div className="leftSection">
<div className="location">
<FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
<div>
<p>National Institute of Technology, Calicut.</p>
<p>Kerala.</p>
</div>
</div>
<div className="contactNumber">
<h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />
+91-xxxxxxxxxx</h4>
</div>
<div className="contactMail">
<h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />
pranavprashant@outlook.in</h4>
</div>
</div>
<div className="rightSection">
<h4>More about me</h4>
<p>Myself Pranav, a second year ug engineering student at NIT Calicut. I love developing web pages and discussing new project ideas in the web dev domain. Feel free to reach me out via any of the following social handles.</p>
<div className="socials">
<a href="https://www.facebook.com/Prazz51/" rel="noreferrer" target="_blank"><FaFacebook size={20} style={{color:"white",marginRight:"1rem"}} /></a>
<a href="https://twitter.com/ipranavprashant" rel="noreferrer" target="_blank"><FaTwitter size={20} style={{color:"white",marginRight:"1rem"}} /></a>
<a href="https://www.instagram.com/ipranavprashant/" rel="noreferrer" target="_blank"><FaInstagram size={20} style={{color:"white",marginRight:"1rem"}} /></a>
<a href="https://www.linkedin.com/in/pranavprashant/" rel="noreferrer" target="_blank"><FaLinkedinIn size={20} style={{color:"white",marginRight:"1rem"}} /></a>
</div>
</div>
    </div>
    </div>
  )
}
