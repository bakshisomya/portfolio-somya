import React,{useRef,useEffect} from "react";
import Landing from "./Landing/Landing";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import './App.css';
import {gsap} from "gsap";

function App() {
  let app = useRef(null);
  useEffect(() => {
    gsap.to(app,0,{css: {visibility:'visible'}})
  
    // return () => {
    //   second
    // }
  }, [])
  
  return (
    <div ref={e=> app=e} className="app">
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
