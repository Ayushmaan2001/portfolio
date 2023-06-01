import React from 'react';

const Techs = (img) => {
    return (
        <div className='w-9 h-9 flex flex-row my-3 md:w-12 md:h-12 ml-1'>
            {
                Object.entries(img).map(([key,value]) => {
                    return (
                        Object.entries(value).map(([k1,imgUrl]) => {
                            return (
                                <img src={imgUrl} key={k1} className='mr-4' alt='Tools'/>
                            )
                        })
                    )
                })
            }
        </div>
    );
}

export default Techs;
