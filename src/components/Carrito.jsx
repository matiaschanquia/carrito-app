import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Carrito = (props) => {
    const totalProductos = () => {
        let total = 0;
        props.productosCarrito.forEach(p => {
            total += p.cantidad;
        });
        return total;
    }
    return (
        <div className="container-carrito">
            <NavLink to="/carrito">
                <h3 className="carrito">
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                    Carrito
                    {
                        props.productosCarrito.length > 0 && <span>{totalProductos()}</span>
                    }
                </h3>
            </NavLink>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        productosCarrito: state.carrito.productosCarrito,
    }
}

export default connect(mapStateToProps, null)(Carrito);
