import './App.css';
import React,{useRef} from 'react'
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Footer from './Components/Footer';
import Achievements from './Components/Achievements';


function App() {
  const HOME = useRef()
  const PROJECTS = useRef()
  const ACHIEVEMENTS = useRef()
  const ABOUT_ME = useRef()
  const SKILLS = useRef();

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
      
    }

  return (
    <div className='w-screen md:w-full'>
      {/* <Navbar HOME={HOME} PROJECTS={PROJECTS} ACHIEVEMENTS={ACHIEVEMENTS} ABOUT_ME={ABOUT_ME} scrollToSection={scrollToSection} SKILLS={SKILLS}/> */}
      <AboutUs id="aboutus" ABOUT_ME={ABOUT_ME}/>
      <Skills id="skills" SKILLS={SKILLS}/>
      <Project id="projects" PROJECTS={PROJECTS}/>
      <Achievements ACHIEVEMENTS={ACHIEVEMENTS}/>
      <Footer /> 
    </div>
  );
}

export default App;
