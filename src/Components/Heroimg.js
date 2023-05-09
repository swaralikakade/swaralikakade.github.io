import "./HeroimgStyles.css";
import IntroImg from "../assets/wp6819191.jpg";
import {Link} from "react-router-dom";


import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg"/>  
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
                
            </div>

        </div>

    </div>
  )
}

export default Heroimg