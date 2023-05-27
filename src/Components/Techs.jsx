import React from 'react';

const Techs = (img) => {
    return (
        <div className='w-12 h-12 flex flex-row'>
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
