import React from 'react';
import Techs from './Techs';
import Button from './Button';

const Projectdetails = ({title,d1,d2,d3,img,site,github}) => {
    return (
        <div>
            <div className='mt-10 text-semibold text-[#eeb4aa] text-[1.4rem] p-2'>
                {title}
            </div>
            <div className='w-[40rem] p-2 text-[1.2rem] text-black'>
                <p className='my-4'>{d1}</p>
                <p className='my-4'>{d2}</p>
                <p className='my-4'>{d3}</p>
                <Techs img={img}/>
                <Button site={site} github={github}/>
            </div>
        </div>
    );
}

export default Projectdetails;
