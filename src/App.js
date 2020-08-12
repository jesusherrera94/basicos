import React from 'react';
import Header from './componets/Header.jsx'
import Footer from './componets/Footer'

function App() {
  //obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <div className="App">
      <Header
        titulo = 'Tienda Virtual'
      />
      <Footer
        fecha = {fecha}
      />
    </div>
  );
}

export default App;
