import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { eliminarProducto } from "../redux/store";
import Modal from "./Modal";

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

    const clickHandlerComprar = () => {
        if(props.productosCarrito.length === 0) {
            setIsOpen(true);
            return;
        }
        let mensaje = "Hola, quiero comprar los siguientes productos:%0a";
        props.productosCarrito.forEach(p => {
            mensaje += `${p.name} x${p.cantidad} = $${p.cantidad * p.precio}%0a`;
        });
        mensaje += `Total: $${precioTotal()}`;
        mensaje = mensaje.replace(/ /g, "+");
        const url = `https://api.whatsapp.com/send?&text=${mensaje}`;
        let win = window.open(url, "_blank");
        win.focus();
    }

    const [isOpen, setIsOpen] = useState(false);

    
    const modalClose = () => {
        setIsOpen(false);
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
                <button className="comprar" onClick={clickHandlerComprar}>Comprar</button>
            </div>
            <Modal isOpen={isOpen} modalClose={modalClose} >
                <h4>No tiene ningún producto en el carrito.</h4>
            </Modal>
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