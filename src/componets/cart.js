import React from 'react';
import Product from './Products'
import './cart.css'
const Cart = ({cart, addProductOnCart}) => {
    return (  <div className="cart">
                    <h2>Tu carrito de compras</h2>
                    {cart.length === 0?
                    <p>No hay elementos</p>
                    :
                    cart.map(producto=>(
                        <Product
                            key = {producto.id}
                            producto = {producto}
                            cart = {cart}
                            addProductToCart = {addProductOnCart}
                        />
                    ))
                    }
                </div>
                );
}
 
export default Cart;