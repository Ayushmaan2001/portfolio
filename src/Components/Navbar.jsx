import React,{useRef} from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({HOME,PROJECTS,ACHIEVEMENTS,ABOUT_ME,scrollToSection,SKILLS}) => {
    return (
        <div style={{boxShadow: "10px 6px black"}}>
            <div className='h-20  items-center fixed z-100 flex flex-row'>
                <h1>Ayushmaan</h1>
            </div>
            <div className='p-10 w-full bg-primary h-20  items-center fixed z-100 opacity-100 flex flex-row-reverse'>
                <ul><a onClick={() => {scrollToSection(ABOUT_ME)}}>ABOUT ME</a></ul>
                <ul><a onClick={() => {scrollToSection(ACHIEVEMENTS)}}>ACHIEVEMENTS</a></ul>
                <ul><a  onClick={() => {scrollToSection(PROJECTS)}}>PROJECTS</a></ul>
                <ul><a  onClick={() => {scrollToSection(SKILLS)}}>SKILLS</a></ul>
                <ul><a  onClick={() => {scrollToSection(HOME)}}>HOME</a></ul>
            </div>
        </div>
    );
}

export default Navbar;
