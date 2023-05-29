import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div onClick={() => window.scroll(0, 0)} style={{boxShadow: "10px 6px black"}}>
            <div className='h-20  items-center fixed z-100   flex flex-row'>
                <h1>Shubham</h1>
            </div>
            <div className='p-10 w-full bg-primary h-20  items-center fixed z-100 opacity-100 flex flex-row-reverse'>
                <Link to="/"> HOME </Link> 
                <Link to="/projects" exact /*component={Project}*/> PROJECTS</Link> 
                <Link to="/achievements" exact/* component={AboutUs}*/> ACHIEVEMENTS</Link> 
                <Link to="/about-me" exact /*component={AboutUs}*/> ABOUT ME</Link> 
            </div>
        </div>
    );
}

export default Navbar;
