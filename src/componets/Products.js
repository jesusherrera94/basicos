import React from 'react';

const Products = ({producto, cart, addProductToCart, products}) => {
    const {id, nombre, precio} = producto
    //crear funcion para añadir al carrito
    const selectProduct = (id)=>{
        //TODO
        const product = products.filter(product =>product.id === id)[0]
        addProductToCart([...cart,product]);
    }
    //funcion para eliminar un producto del carrito
    const removeProduct = (id)=>{
        const products = cart.filter(product =>product.id !== id)
        addProductToCart(products)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {products?
            (<button
                type="button"
                onClick = {()=>{
                    selectProduct(id)
                }}
            >Añadir al carrito</button>)
            :
            (<button
                type="button"
                onClick = {()=>{
                    removeProduct(id)
                }}
            >Eliminar</button>)

            }
        </div>
      );
}
 
export default Products;