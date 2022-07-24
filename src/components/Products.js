import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section className='py-10'>
            <h2 className='text-center text-4xl font-bold uppercase mb-3'>Our Products</h2>
            <p className='text-center mb-8'>Here are the best tech products with affordable price and guarantee.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5 mx-3 md:mx-20'>
                {
                    products?.map((p, i) => <ProductCard key={i} product={p} />)
                }
            </div>
        </section>
    );
};

export default Products;