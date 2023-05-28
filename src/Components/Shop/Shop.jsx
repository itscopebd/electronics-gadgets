import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Card/ProductCard';
import { addToBD } from '../../utils/fake';

const Shop = () => {
    const pData = useLoaderData();

    const handleAddToCart = (id) => {
        addToBD(id);
       
    }


    return (
        <div className='container mx-auto gap-10 grid grid-cols-3 my-10'>
            {
                pData.map(product => <ProductCard product={product} key={product.id} handleAddToCart={handleAddToCart}></ProductCard>)
            }
        </div>
    );
};

export default Shop;