import React,{useRef, useEffect} from 'react'
import './Landing.css';
// import dove from '../assets/images/dove.png'
// import somyaimg from '../assets/images/Mask Group 6.png'
import duck from '../assets/images/Mask Group 5.png'
import { gsap,Power3 } from "gsap";

function Landing() {
  var tl = gsap.timeline();
  let h1fst = useRef(null);
  let h1scn = useRef(null);
  let h1trd = useRef(null);
  useEffect(() => {
    tl.from(h1fst,1.2,{opacity:0,y:1280,ease:Power3.easeOut})
    tl.from(h1scn,1.2,{opacity:0,y:1280,ease:Power3.easeOut},.2)
    tl.from(h1trd,1.2,{opacity:0,y:1280,ease:Power3.easeOut},.4)
    // return () => {
    //   second
    // }
  })
  

  return (
    <div className="landing">
        <h1 ref={e=>h1fst=e}>S<span><img src={duck} alt="" /></span>MYA</h1><br/>
        <h1 ref={e=>h1scn=e}>UI/UX DESIGNER</h1><br/>
        <h1 ref={e=>h1trd=e}>DEVELOPER</h1>
    </div>
  )
}

export default Landing