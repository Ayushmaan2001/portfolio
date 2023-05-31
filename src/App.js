import './App.css';
import React,{useRef} from 'react'
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

  const HOME = useRef()
  const PROJECTS = useRef()
  const ACHIEVEMENTS = useRef()
  const ABOUT_ME = useRef()
  const SKILLS = useRef();

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
        // You can also assign value "auto"
        // to the behavior parameter.
      });
      
    }

  return (
    <React.Fragment>
      <Navbar HOME={HOME} PROJECTS={PROJECTS} ACHIEVEMENTS={ACHIEVEMENTS} ABOUT_ME={ABOUT_ME} scrollToSection={scrollToSection} SKILLS={SKILLS}/>
      <Intro id="" HOME={HOME}/>
      <AboutUs id="aboutus" ABOUT_ME={ABOUT_ME}/>
      <Skills id="skills" SKILLS={SKILLS}/>
      <Project id="projects" PROJECTS={PROJECTS}/>
      <Footer />
     
    </React.Fragment>
  );
}

export default App;
