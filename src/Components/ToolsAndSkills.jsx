import React from 'react';

const ToolsAndSkills = ({img,name}) => {
    return (
        <div className='flex flex-col p-2 m-5 w-[6rem] h-[6rem] items-center'>
            <img src={img}/>
            <p className='text-[#656565] text-[1rem]'>{name}</p>
        </div>
    );
}

export default ToolsAndSkills;
