import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex flex-row justify-around bg-third' id='#about-me flex-nowrap'>
            <div className='flex flex-col p-4 mt-[5rem]'>
                <h2 className='text-[#f0535d] text-[1rem] font-bold'>ABOUT</h2>
                <h3 className='text-[#1c2273] text-[2.1rem] font-semibold'>Who is Ayushmaan?</h3>
                <img src={require('../assets/personjpg.jpg')} className='w-80 h-80 rounded-full mt-6'/>
            </div>
            <div className='flex flex-col w-[50rem] p-4 mt-[9rem]'>
                <h3 className='text-[#7689d8] text-[1.55rem] p-2 font-semibold'>
                A curiosity-driven Reactjs Developer with design chops.
                </h3>
                <div>
                <p className='text-black text-[1.3rem] p-2'>I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. And as a follower of John Maeda’s Laws Of Simplicity, I agree that less is more.</p>
                <p className='text-black text-[1.3rem] p-2'>I have a BA in Multimedia Design from Curtin University 🇦🇺, a Certificate of Web Development Immersive from Juno College (Formerly HackerYou) 🇨🇦, (and an Advanced Scuba Diving License from PADI 🇵🇭!)</p>
                <p className='text-black text-[1.3rem] p-2'>I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. Currently solving deceptively simple problems at UsePastel.Com. I'm not available for any freelance work, but feel free to reach out and say hello! I promise I don't bite </p>
                </div>
                
            </div>
        </div>
    );
}

export default AboutUs;
