import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
  
  const [Products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect( ()=> {
    fetch('products.json')
    .then(res => res.json())
    .then(data=>setProducts(data))
  },[]);

  const addToCart = (product) => {
     const newCart = [...cart,product];
     setCart(newCart);
  }
  return (
    <div className='shop-container'>
      <div className='products-container'>
      {
         Products.map(product => 
         <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
         ></Product>)
      }
        
      </div>
       <div className='cart-container'>
        <Cart props = {Cart}></Cart>
       </div>
        
    </div>
  );
};

export default Shop;