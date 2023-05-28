import React from 'react';

const ProductCard = ({ product,handleAddToCart }) => {
    const { title, id, category, price, image } = product;
   
    return (
        <div className="card bg-base-100 shadow-md">
            <figure><img className='hover:translate-x-2 duration-150 h-44' src={image} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold'>Category: {category}</p>
                <h4 className='text-3xl my-2'>Price: ${price}</h4>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary" onClick={()=>handleAddToCart(id)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;