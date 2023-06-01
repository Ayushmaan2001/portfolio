import React from 'react';

const Navbar = ({HOME,PROJECTS,ACHIEVEMENTS,ABOUT_ME,scrollToSection,SKILLS}) => {
    return (
        <div style={{boxShadow: "10px 6px black"}}>
            <div className='h-20  items-center fixed z-100 flex flex-row'>
                <h1>Ayushmaan</h1>
            </div>
            <div className='p-10 w-full bg-primary h-20  items-center fixed z-100 opacity-100 flex flex-row-reverse'>
                <ul><a href={() => {}} onClick={() => {scrollToSection(ABOUT_ME)}}>ABOUT ME</a></ul>
                <ul><a href={() => {}} onClick={() => {scrollToSection(ACHIEVEMENTS)}}>ACHIEVEMENTS</a></ul>
                <ul><a href={() => {}} onClick={() => {scrollToSection(PROJECTS)}}>PROJECTS</a></ul>
                <ul><a href={() => {}} onClick={() => {scrollToSection(SKILLS)}}>SKILLS</a></ul>
                <ul><a href={() => {}} onClick={() => {scrollToSection(HOME)}}>HOME</a></ul>
            </div>
        </div>
    );
}

export default Navbar;
