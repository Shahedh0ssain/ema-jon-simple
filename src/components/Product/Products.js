import React from 'react';
import './Products.css';

const Products = (props) => {
    const{addToCart,product} = props;
    const {name,img,seller,price,ratings} = product;
    // console.log(props.addToCart);
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <p className='product-name'>{name}</p>
             <div className="product-info">
               <p>${price}</p>
               <p><small>{seller}</small></p>
               <p><small>{ratings} Stars</small></p>
             </div>
             <button onClick={() => addToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
             </button>
        </div>
    );
};

export default Products;