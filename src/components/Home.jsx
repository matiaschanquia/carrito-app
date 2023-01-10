import React from "react";
import products from "../data";
import Producto from "./Producto";

const Home = () => {
    return(
        <div className="container-home">
            <figure className="container-img-principal">
                <img src="https://img.freepik.com/fotos-premium/supermercado-online-global-carro-compras-teclado-computadora-portatil_175682-14757.jpg?w=2000" alt="supermercado online" />
                <h2>Las compras, desde tu casa!</h2>
            </figure>
            <h2 className="titulo">Productos:</h2>
            <div className="container-productos">
                {
                    products.map(p => (
                        <Producto key={p.id} id={p.id} name={p.name} image={p.image} precio={p.precio}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Home;