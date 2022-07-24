import React from 'react';
import bg from '../Images/banner.jpg'
import cover from '../Images/cover-phone.png'

const Banner = () => {
    return (
        <div className='h-[500px] flex justify-center items-center' style={{ background: `url(${bg})`, opacity: 0.9, backgroundSize: `cover` }}>
            <div className='px-20 text-slate-100 flex flex-row justify-center items-center'>
                <div className='flex-1'>
                    <h1 className='text-5xl font-semibold'>Best Tech Products <br /> Market in Asia</h1>
                    <p className='text-lg py-5'>Shopping Zone is providing the best and original brand products to the Asian zone. Best market for the last 10 years.</p>
                    <button className='bg-slate-100 hover:bg-blue-900 py-3 px-5 rounded-md text-blue-900 hover:text-slate-100 font-semibold duration-700'>Visit Shop</button>
                </div>
                <div className='flex-1 hidden md:block'>
                    <img className='' src={cover} alt="best smartphone market" />
                </div>
            </div>
        </div>
    );
};

export default Banner;