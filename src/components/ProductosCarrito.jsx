import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { eliminarProducto } from "../redux/store";

const ProductosCarrito = (props) => {
    const [state, setState] = useState(props.productosCarrito);
    const precioTotal = () => {
        let total = 0;
        props.productosCarrito.forEach(p => {
            total += p.precio * p.cantidad;
        });
        return total;
    }

    const clickHandler = (id) => {
        props.eliminarProducto(id);
        location.reload();
    }

    return(
        <div className="container-productos-carrito">
            <h2 className="titulo">Carrito</h2>
            <div className="productos-carrito">
                {
                    state.map(p => (
                        <div className="container-producto-carrito" key={p.id}>
                            <button title="Eliminar un producto" onClick={() => clickHandler(p.id)}>X</button>
                            <figure><img src={p.image} alt={p.name} /></figure>
                            <h4>{p.name}</h4>
                            <h5>x{p.cantidad}</h5>
                            <div>
                                <h5>
                                    Precio por unidad:
                                    ${p.precio}
                                </h5>
                                <h5>
                                    Precio total: 
                                    ${
                                        Math.floor(p.precio * p.cantidad)      
                                    }
                                </h5>
                            </div>
                        </div>
                    ))
                }
                <h2 className="precio-total">
                    Total:
                    ${
                        precioTotal()    
                    }
                </h2>
                <button className="comprar" onClick={() => alert("Esto llevaría a un link de WhatsApp.")}>Comprar</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productosCarrito: state.carrito.productosCarrito,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        eliminarProducto(id) {
            dispatch(eliminarProducto(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductosCarrito);