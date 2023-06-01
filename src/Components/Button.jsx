import React from 'react';

const Button = ({site,github}) => {
    return (
        <div className='mt-8'>
            <a className='md:p-4 rounded-lg border-solid bg-[#a1eacd] text-black' href={site} target='_blank' rel="noopener noreferrer">View It Here</a>
            <a className='md:p-4 rounded-lg border-solid  bg-[#a1eacd] text-black' href={github} target='_blank' rel="noopener noreferrer">View Github</a>
        </div>
    );
}

export default Button;
