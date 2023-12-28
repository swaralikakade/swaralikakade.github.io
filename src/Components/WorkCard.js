import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

import React from 'react'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src="https://tse2.mm.bing.net/th?id=OIP.9hcYP50JdeToVNfyGHfoPAHaE7&pid=Api&P=0&h=180" alt="image"/>
                <h2 className="project-title">Cab Company</h2><br></br>
                <div className="pro-details">
                  <p>This is a cab company project in which sql and some cloud concepts are used</p><br></br><br></br>
                  <div className="pro-btns">
                    <NavLink to="https://github.com/codewiths15/new-front?search=1" className="btn" >Source</NavLink>
                    <NavLink to="https://comforting-macaron-6976f7.netlify.app/" className="btn" >View</NavLink>
                    
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard