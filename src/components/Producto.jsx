import React from "react";
import { connect } from "react-redux";
import { agregarProducto } from "../redux/store";

const Producto = (props) => {
    return(
        <div className="container-producto">
            <figure>
                <img src={props.image} alt={props.name} />
            </figure>
            <h3>{props.name}</h3>
            <div>
                <h4>${props.precio}</h4>
                <button onClick={() => props.agregarProducto(props)}>Agregar al carrito <i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        agregarProducto(obj) {
            dispatch(agregarProducto(obj));
        }
    }
}


export default connect(null, mapDispatchToProps)(Producto);