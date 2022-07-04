import React from 'react'
import './Landing.css';
import dove from '../assets/images/dove.png'
import somyaimg from '../assets/images/Mask Group 6.png'
import duck from '../assets/images/Mask Group 5.png'
import { gsap,Power3 } from "gsap";

function Landing() {
  return (
    <div className="landing">
        <h1>S<span><img src={duck} alt="" /></span>MYA</h1><br/>
        <h1>UI/UX DESIGNER</h1><br/>
        <h1>DEVELOPER</h1>
    </div>
  )
}

export default Landing