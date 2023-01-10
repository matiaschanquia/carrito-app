import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ProductosCarrito from './components/ProductosCarrito';

function App() {
  return (
    <div className="container-app">
      <Header/>
      <div></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<ProductosCarrito />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
