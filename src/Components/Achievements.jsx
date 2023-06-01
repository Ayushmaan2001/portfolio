import React from 'react';

const Achievements = ({ACHIEVEMENTS}) => {
    return (
        <div className='p-3 md:p-14 bg-third ' ref={ACHIEVEMENTS}>
            <h1 className='text-[2.1rem] my-2 text-[#1c2273]'>Achievements</h1>
                <p className='text-[1.2rem] mb-4 md:m-auto'>I am a passionate problem solver with a strong background in computer science. I have successfully solved over 300+ problems on LeetCode, demonstrating my proficiency in algorithmic problem-solving. Additionally, I actively participated in Hacktoberfest 2020. I also took part in NGFS and Olympiad, where I received certificates of appreciation and participation for my exceptional performance. These experiences have honed my skills in teamwork, critical thinking, and creativity. With a proven track record of excellence, I am eager to apply my expertise and contribute to challenging projects in the field of technology.
                </p>
        </div>
    );
}

export default Achievements;
