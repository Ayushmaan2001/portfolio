import React from 'react';
import Projectdetails from './Projectdetails';

const Projects = ({title,d1,d2,d3,tech,site,github,img}) => {
    return (
        <div className='flex flex-row items-center justify-between mb-[6em]'>
            <div>
            <Projectdetails title={title} d1={d1} d2={d2} d3={d3} img={tech} site={site} github={github}/>
            </div>
            <img src={img} className='w-[30rem] h-[20rem]' alt='cover'/>
        </div>
    );
}

export default Projects;
