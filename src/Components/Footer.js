import "./FooterStyles.css";
import {FaHome,FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaInstagram, FaGithub} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    
                    
                        <h4><FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>Pune</h4>               
                    
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>  7498954197  </h4>
                
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/> swaralikakade5@gmail.com </h4>
                
                
                </div>
            </div>
            <br/>
            <br/>
           
            

            <div className="right">
                <h4>About Me</h4>
                <p>This is Swarali Kakade a CSE undergraduate at MESCOE.<br/>
                    I enjoy doing new projects and solving challenges.
                </p>
                <br></br>
                <br></br>
                <div className="social">
                <h4><FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem "}}/><a href="https://www.linkedin.com/in/swarali-kakade-760bb9231">LinkedIn</a> </h4>
                <h4><FaGithub size={20} style={{color:"#fff", marginRight: "2rem"}}/><a href="https://github.com/swaralikakade">Github</a>   </h4>
                <h4><FaInstagram size={20} style={{color:"#fff", marginRight: "2rem"}}/><a href="https://instagram.com/swarali_kakade?igshid=YmMyMTA2M2Y=">Instagram</a>   </h4>   
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Footer
