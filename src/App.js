import React,{useState} from 'react';
import Header from './componets/Header.jsx'
import Footer from './componets/Footer'
import Products from './componets/Products'
import Cart from './componets/cart'

function App() {

  //crear un listado de productos
  const [productos, setProductos] = useState([
    {id:1, nombre:'Camisa React', precio:50},
    {id:2, nombre:'Camisa VueJS', precio:40},
    {id:3, nombre:'Camisa Node.js', precio:30},
    {id:4, nombre:'Camisa Angular', precio:20},
  ]);

  const [carrito,addProductOnCart] = useState([])

  //obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <div className="App">
      <Header
        titulo = 'Tienda Virtual'
      />
      <h1>Listado de productos</h1>
      {productos.map(producto =>(
        <Products
          key = {producto.id}
          producto = {producto}
          cart = {carrito}
          addProductToCart = {addProductOnCart}
          products = {productos}
        />
      ))}

      <Cart
        cart = {carrito}
        addProductOnCart = {addProductOnCart}
      />
      <Footer
        fecha = {fecha}
      />
    </div>
  );
}

export default App;
