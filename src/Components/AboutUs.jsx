import React from 'react';

const AboutUs = ({ABOUT_ME}) => {
    return (
        <div className='flex flex-col justify-around bg-third flex-nowrap md:flex-row' id='#about-me' ref={ABOUT_ME}>
        <div className='flex flex-col p-4 mt-[5rem]'>
            <h2 className='text-[#f0535d] text-[1.5rem] font-bold'>ABOUT ME</h2>
            <h3 className='text-[#1c2273] text-[2.5rem] font-semibold'>Who is Ayushmaan?</h3>
            <img src={require('../assets/personjpg.jpg')} className='w-80 h-80 rounded-lg md:rounded-full mt-6' alt='dp'/>
        </div>
        <div className='flex flex-col w-[320px] p-3 md:mt-[8rem] md:w-full mt-3'>
            <h3 className='text-[#1c2273] text-[1.55rem] p-0 font-semibold'>
            A curiosity-driven developer with design chops.
            </h3>
            <div>
            <p className='text-black text-[1.3rem] p-0'>I am a highly motivated and passionate student pursuing a Bachelor of Technology degree from Netaji Subhas University of Technology (NSUT), East Campus (formerly AIACTR). With a strong academic background and practical experience in web development, I strive to excel in the field of technology and contribute to innovative projects.I am eager to leverage my skills and knowledge in a challenging environment, where I can contribute to cutting-edge projects and collaborate with like-minded professionals. If you are interested in discussing potential opportunities or have any questions, feel free to connect with me.</p>
            </div>
            <form action='https://drive.google.com/file/d/1kj78hkhW3SfgdIllf8uOZLLJYfdtIDZx/view?usp=drive_link' target='_blank'>
                <p className='text-[1.2rem]' >Link to <button className='text-[#bc1a45] hover:text-[#bc4d1a]'  style={{textDecoration: "underline", paddingTop: "2rem"}}>Resume</button></p>
            </form>
            <div className='flex flex-row flex-wrap mt-4 h-[5rem]'>
                <a href="https://github.com/Ayushmaan2001/" target="_blank" rel='noopener' className='hover:border-black hover:border-2 rounded-full md:w-[4rem] md:h-[4rem] w-[3.1rem] h-[3rem]'><img src={require('../assets/github-sign.png')} className='w-8 h-8 rounded-full md:h-10 md:w-10' alt='logo'/></a>
                <a href="https://leetcode.com/Killer-coder/" target="_blank" rel='noopener' className='hover:border-black hover:border-2 rounded-full md:w-[4rem] md:h-[4rem] w-[3.1rem] h-[3rem]'><img src={require('../assets/lc.png')} className='w-8 h-8 rounded-full md:h-10 md:w-10' alt='logo'/></a>
                <a href="https://www.linkedin.com/in/ayushmaan-jangid-5a567820a/" target="_blank" rel='noopener' className='hover:border-black hover:border-2 rounded-full md:w-[4rem] md:h-[4rem] w-[3.1rem] h-[3rem]'><img src={require('../assets/linkedin.png')} className='w-8 h-8 rounded-full md:h-10 md:w-10' alt='logo'/></a>
                <a href="mailto:ayushmaanjangid.e21@nsut.ac.in" rel='noopener' className='hover:border-black hover:border-2 rounded-full md:w-[4rem] md:h-[4rem] w-[3.1rem] h-[3rem]'> <img src={require('../assets/gmail.png')} className='w-8 h-8 rounded-full md:h-10 md:w-10' alt='logo'/></a>
            </div>
        </div>
    </div>
    );
}

export default AboutUs;
