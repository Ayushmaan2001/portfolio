import React from 'react';

const Navbar = ({HOME,PROJECTS,ACHIEVEMENTS,ABOUT_ME,scrollToSection,SKILLS}) => {
    const open = () => {
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }
    return (
        <React.Fragment>
            <div
    className="
    antiliased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
      fixed w-full
    "
  >
  <header>
     <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
             
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke='black'
            onClick={open}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400 text-black" href={null} onClick={() => scrollToSection(ABOUT_ME)}
                >Home</a
              >
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400 text-black" href={null} onClick={() => scrollToSection(SKILLS)}
                >Skills</a
              >
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400 text-black" href={null} onClick={() => scrollToSection(PROJECTS)}
                >Projects</a
              >
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400 text-black" href={null} onClick={() => scrollToSection(ACHIEVEMENTS)}
                >Achievemets</a
              >
            </li>
          </ul>
        </div>
    </nav>
  </header>
</div>
        </React.Fragment>
    );
}

export default Navbar;
