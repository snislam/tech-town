import React from 'react';

const Features = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-8 mx-3 md:mx-20'>
            {/* div 1 */}
            <div className='flex flex-row justify-between items-center py-4 px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md shadow-lg shadow-slate-100'>
                <div>
                    <img className='w-32' src="https://i.ibb.co/hFDtwds/img3.jpg" alt="" />
                </div>
                <div className='ml-4'>
                    <h1 className='text-2xl text-slate-50 font-semibold'>Quality Headphone</h1>
                    <p className='text-slate-900'>We are collecting the best quality headphones from USA.</p>
                </div>
            </div>
            {/* div 2 */}
            <div className='flex flex-row justify-between items-center py-4 px-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-lg shadow-slate-100'>
                <div>
                    <img className='w-32' src="https://i.ibb.co/HN1ds9T/img2.jpg" alt="" />
                </div>
                <div className='ml-4'>
                    <h1 className='text-2xl text-slate-50 font-semibold'>Branded Watches</h1>
                    <p className='text-slate-900'>We are collecting the best quality headphones from USA.</p>
                </div>
            </div>
            {/* div 3 */}
            <div className='flex flex-row justify-between items-center py-4 px-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-md shadow-lg shadow-slate-100'>
                <div>
                    <img className='w-32' src="https://i.ibb.co/XSPThXY/img5.jpg" alt="" />
                </div>
                <div className='ml-4'>
                    <h1 className='text-2xl text-slate-50 font-semibold'>Smart Phones</h1>
                    <p className='text-slate-900'>We are collecting the best quality headphones from USA.</p>
                </div>
            </div>

        </div>
    );
};

export default Features;