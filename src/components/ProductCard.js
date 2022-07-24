import React from 'react';

const ProductCard = ({ product }) => {
    const { name, img, price, category } = product
    return (
        <div className='border-2 rounded-md shadow-lg'>
            <img className='w-full' src={img} alt={name} />
            <div className='p-5'>
                <h2 className='text-lg font-semibold'>{name}</h2>
                <p className='my-2'>Price: ${price}</p>
                <p className='mb-4'>Category: {category}</p>
                <button className='py-2 px-4 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-md mr-2 text-slate-100'>Purchase</button>
                <button className='py-2 px-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md ml-2 text-slate-100'>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;