import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import AboutUs from './Components/AboutUs';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Footer from './Components/Footer';
import  {Routes, Route} from 'react-router-dom';


function App() {
  // const [mousePosition,setMousePosition] = useState({
  //   x:0,
  //   y:0
  // })

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x:e.clientX,
  //       y:e.clientY
  //     })
  //   }

  //   window.addEventListener("mousemove",mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove",mouseMove)
  //   }
  // })


  return (
    <React.Fragment>
      <Navbar/>
      <Intro id=""/>
      <AboutUs id="aboutus"/>
      <Skills id="skills"/>
      <Project id="projects"/>
       <Routes>
              <Route exact path='/about-me' element={<AboutUs/>}></Route>
              <Route exact path='/skills' element={<AboutUs/>}></Route>
             <Route exact path='/projects' element={<Project/>}></Route>  
      </Routes>
      <Footer />
     
    </React.Fragment>
  );
}

export default App;
