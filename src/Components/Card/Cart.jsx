import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeSpecificCart } from '../../utils/fake';


const Cart = () => {

    const {cart}=useLoaderData();
    console.log(cart)

    const cartRemoveHandler=id=>{
        removeSpecificCart(id)
    }

let total=0;
for (const qty of cart) {
    total=total+qty.price * qty.quantity;
}

    // const cart = [];
    // const getCart = getSavedData();

    // const pData = useLoaderData();

    // for (const id in getCart) {
    //     const foundProduct = pData.find(product => product.id === id)
    //     if (foundProduct) {
    //         foundProduct.quantity = getCart[id];
    //         cart.push(foundProduct)
    //     }
    // }
    // console.log(cart)
    return (
        <div className='container mx-auto'>
            {
                cart.map(cartProduct => {
                    return (
                        <div key={cartProduct.id} className='w-4/12 mx-auto my-8 py-5 px-3'>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={cartProduct.image} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{cartProduct.title}</h2>
                                    <p>Quantity: {cartProduct.quantity}</p>
                                    <p className='text-2xl'>Price: {cartProduct.price * cartProduct.quantity}</p>
                                  <button className='bg-gray-600 text-white py-3 rounded-md' onClick={()=>cartRemoveHandler(cartProduct.id)}>Remove</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
            <p>{total}</p>
        </div>
    );
};

export default Cart;