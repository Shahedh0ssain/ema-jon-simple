import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const {Cart} = props;

    // const Cart = (props) => {
    //   const {Cart} = props;
    //   console.log(props);
    // }   
    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items : {Cart.length}</p>
            <p>Total price :</p>
            <p>Tex :</p>
            <h5>Grand price :</h5>
        </div>
    );
};

export default Cart;