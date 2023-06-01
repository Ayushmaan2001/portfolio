import React from 'react';
import Techs from './Techs';
import Button from './Button';

const Projectdetails = ({title,d1,d2,d3,img,site,github}) => {
    return (
        <div className='ml-0'>
            <div className='mt-10 text-semibold text-[#eeb4aa] text-[1.4rem]'>
                {title}
            </div>
            <div className='w-[40rem] text-[1.2rem] text-black md:w-full'>
                <p className='my-4 w-[18rem] md:w-[50rem] p-1 md:p-0'>{d1}</p>
                <p className='my-4 w-[18rem] md:w-[50rem] p-1 md:p-0'>{d3}</p>
                <p className='my-4 w-[18rem] md:w-[50rem] p-1 md:p-0'>{d2}</p>
                <Techs img={img}/>
                <Button site={site} github={github}/>
            </div>
        </div>
    );
}

export default Projectdetails;
