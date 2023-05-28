import React from 'react';
import ToolsAndSkills from './ToolsAndSkills';

const Skills = () => {
    return (
        <div className='bg-fourth p-40'>
            <div className='font-semibols text-[1.4em] p-1'>Skills and Tools</div>
            <div className='text-[#1c2273] font-bold text-[2.1rem] p-1'>My Toolbox & Things I Can Do</div>
            <div className='text-black p-2'>The skills, tools and technologies I use to bring your products to life</div>
            <div className='flex flex-row flex-wrap '>
                <ToolsAndSkills img={require('../assets/c-.png')} name={"C++"}/>
                <ToolsAndSkills img={require('../assets/branch.png')} name={"GIT"}/>
                <ToolsAndSkills img={require('../assets/css.png')} name={"CSS"}/>
                <ToolsAndSkills img={require('../assets/ds.png')} name={"DATA STRUCTURE"}/>
                <ToolsAndSkills img={require('../assets/github.png')} name={"GITHUB"}/>
                <ToolsAndSkills img={require('../assets/html-5.png')} name={"HTML"}/>
                <ToolsAndSkills img={require('../assets/javascript.png')} name={"JAVASCRIPT"}/>
                <ToolsAndSkills img={require('../assets/machine-learning.png')} name={"ALGORITHM"}/>
                <ToolsAndSkills img={require('../assets/nodejs.png')} name={"NODEJS"}/>
                <ToolsAndSkills img={require('../assets/react.png')} name={"REACTJS"}/>
                <ToolsAndSkills img={require('../assets/sql.png')} name={"SQL"}/>
            </div>
            <div>
                <h1 className='text-[#7689d8] text-[2rem] mt-20'>Currently working on:</h1>
                <p className='text-black text-[1.5rem] antialiased'>Improving my skills in, understanding of JavaScript, Data Structure, Algorithms and React.</p>
            </div>
        </div>
    );
}

export default Skills;
