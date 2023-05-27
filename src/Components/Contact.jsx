import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-row bg-seventh p-2'>
            <div className='w-[30rem] p-2'>
                <h2 className='text-[#f0535d] text-[1.4em]'>CONTACT</h2>
                <h3 className='text-[#1c2273] text-[2.1rem]'>Get In Touch</h3>
                <div className='p-2'>
                    <p className='text-black'>
                    Dropping a line to say g’day, ask for my resume or see if we can build something amazing together? I’d love to hear from you!
                    </p>
                    <p className='text-black'>
                    Fill in your info in the form below and I look forward to hearing from you!
                    </p>
                    <form className='flex flex-col mt-6 text-black'>
                        <input placeholder='Enter the Name' className='p-2 w-[40rem]'/>
                        <input placeholder='Email' className='p-2 w-[40rem]'/>
                        <input placeholder='Message' className='p-2 w-[40rem] h-[14rem]'/>
                    </form>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Contact;
