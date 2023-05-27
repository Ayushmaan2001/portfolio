import React from 'react';

const Intro = () => {
    return (
        <div id='intro' className='h-[40rem]'>
            <div className='w-[16rem] h-[10rem] p-2'>
                <img src={require('../assets/Laptop.jpg')} className='mt-14'/>
            </div>
            <div className='flex flex-row justify-around items-baseline'>
            <div className='flex flex-col m-[3rem] p-[6rem] text-6xl'>
                <div>
                    <h1>G'Day, I'm Ayush!</h1>
                    <h1>I am a <b>Reactjs Developer.</b></h1>
                </div>
            </div>
            <div>
            <div className='w-[16rem] h-[8rem]'>
                <img src={require('../assets/Devjpg.jpg')} />
            </div>
            </div>
            </div>
        </div>
    );
}

export default Intro;
