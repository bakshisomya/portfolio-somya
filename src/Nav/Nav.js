import React, { useState , useEffect , useRef } from "react";
import "./Nav.css";
import { gsap,Power3 } from "gsap";

function Nav() {
  const [display, setdisplay] = useState("none");

  let name = useRef(null);
  let desc = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let mobile1 = useRef(null);

  useEffect(() => {
    gsap.from(name, .8,{opacity:0,x:40,ease:Power3.easeOut})
    gsap.from(desc, .8,{opacity:0,x:40,ease:Power3.easeOut, delay:.2})
    gsap.from(link1, .8,{opacity:0,x:40,ease:Power3.easeOut, delay:.4})
    gsap.from(link2, .8,{opacity:0,x:40,ease:Power3.easeOut, delay:.6})
    gsap.from(mobile1, .8,{opacity:0,x:40,ease:Power3.easeOut, delay:.4})

  
    // return () => {
    //   second
    // }
  }, [])
  

  return (
    <div className="nav">
      <div className="myname">
        <p ref={e=> name=e} className="name">Somya</p>
        <p ref={e=> desc=e} className="name-desc">Breathing Websites Since 2020</p>
      </div>
      <div className="nav-links">
        <a ref={e=> link1=e} className="link1" href="!/">About</a>
        <a ref={e=> link2=e} className="link2" href="!/">Projects</a>
      </div>
      <i ref={e=> mobile1=e} onClick={() => setdisplay("flex")} className="ri-menu-fill mobile-icon-1"></i>
      <div style={{ display: display }} className="nav-links-mobile">
      <i onClick={() => setdisplay("none")} className="ri-close-fill"></i>
        <a href="!/">About</a>
        <a href="!/">Projects</a>
      </div>
    </div>
  );
}

export default Nav;
