import React from 'react';

const Button = ({site,github}) => {
    return (
        <div className='mt-8'>
            <a className='p-4 rounded-lg border-solid bg-[#a1eacd] text-black' href={site} target='_blank' rel="noopener noreferrer">View It Here</a>
            <a className='p-4 rounded-lg border-solid  bg-[#a1eacd] text-black' href={github} target='_blank' rel="noopener noreferrer">View Github Repo</a>
        </div>
    );
}

export default Button;
