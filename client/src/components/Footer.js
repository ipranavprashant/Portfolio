import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>National Institute of Technology, Calicut, Kerala.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="tel:+918877237996">+91-8877237996</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:ipranavprashant@gmail.com">ipranavprashant@gmail.com</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>More about me</h4>
          <p>
            This is Pranav Prashant. A pre-final year UG student at NIT Calicut, majoring in Computer Science.
          </p>
          <div className="social">
            <a href="https://www.facebook.com/Prazz51/" target="_blank" rel="noopener noreferrer">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://instagram.com/ipranavprashant" target="_blank" rel="noopener noreferrer">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
            <a href="https://twitter.com/ipranavprashant" target="_blank" rel="noopener noreferrer">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/pranavprashant/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.github.com/ipranavprashant/" target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
