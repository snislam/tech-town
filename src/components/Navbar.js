import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-slate-50 text-blue-900 py-5 flex  flex-row justify-between items-center md:px-12 px-2'>
            <Link to='/' className='text-3xl font-bold'>Shopping Zone</Link>
            <nav>
                <Link className='px-4 font-semibold text-lg hover:text-[#FF338A] duration-300' to='/'>Dashboard</Link>
                <Link className='px-4 font-semibold text-lg hover:text-[#FF338A] duration-300' to='/'>Cart</Link>
            </nav>
        </div>
    );
};

export default Navbar;