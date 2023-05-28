import React from 'react';

const openLinkedIn = () => {
    // window.open("www.google.com")
    console.log(window.open)
}
const AboutUs = () => {
    return (
        <div className='flex flex-row justify-around bg-third h-[40rem]' id='#about-me flex-nowrap'>
            <div className='flex flex-col p-4 mt-[5rem]'>
                <h2 className='text-[#f0535d] text-[1rem] font-bold'>ABOUT</h2>
                <h3 className='text-[#1c2273] text-[2.1rem] font-semibold'>Who is Ayushmaan?</h3>
                <img src={require('../assets/personjpg.jpg')} className='w-80 h-80 rounded-full mt-6'/>
            </div>
            <div className='flex flex-col w-[50rem] p-4 mt-[9rem]'>
                <h3 className='text-[#7689d8] text-[1.55rem] p-2 font-semibold'>
                A curiosity-driven Reactjs Developer.
                </h3>
                <div>
                <p className='text-black text-[1.3rem] p-2'>I am a highly motivated and passionate student pursuing a Bachelor of Technology degree from Netaji Subhas University of Technology (NSUT), East Campus (formerly AIACTR). With a strong academic background and practical experience in web development, I strive to excel in the field of technology and contribute to innovative projects.</p>
                <p className='text-black text-[1.3rem] p-2'>I am eager to leverage my skills and knowledge in a challenging environment, where I can contribute to cutting-edge projects and collaborate with like-minded professionals. If you are interested in discussing potential opportunities or have any questions, feel free to connect with me on<span>
                    <button className='text-black' onClick={openLinkedIn}>Linkedin</button>
                    </span></p>
                <p className='text-black text-[1.3rem] p-2'>Let's connect and explore the exciting possibilities of the tech world together!</p>
                </div>
                
            </div>
        </div>
    );
}

export default AboutUs;
