import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full bg-primary h-20 flex flex-row-reverse items-center fixed z-40 opacity-70'>
            <div className='p-10 '>
                <a href='#'>Home</a>
                <a href='#'>Projects</a>
                <a href='#'>Experience</a>
                <a href='#'>Achievements</a>
                <a href='#'>About Us</a>
            </div>
        </div>
    );
}

export default Navbar;
