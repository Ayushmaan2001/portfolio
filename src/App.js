import './App.css';
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import AboutUs from './Components/AboutUs';
import Skills from './Components/Skills';
// import Contact from './Components/Contact';
import Project from './Components/Project';

function App() {
  const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    }

    window.addEventListener("mousemove",mouseMove);

    return () => {
      window.removeEventListener("mousemove",mouseMove)
    }
  })

  const variants = {
    default:{
      x:mousePosition.x+10,
      y:mousePosition.y+10
    }
  }
  return (
    <React.Fragment>
      <Navbar />
      <Intro />
      <AboutUs />
      <Skills />
      <Project />
      {/* <Contact /> */}
      <motion.div className='cur bg-[#111] h-[32px] w-[32px] rounded-full fixed top-0 left-0' 
      variants={variants}
      animate="default"

      />
    </React.Fragment>
  );
}

export default App;
