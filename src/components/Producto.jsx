import React, { useState } from "react";
import { connect } from "react-redux";
import { agregarProducto } from "../redux/store";
import "../css/check.css";

const Producto = (props) => {
    const [check, setCheck] = useState(false);
    const clickHandler = (obj) => {
        props.agregarProducto(obj);
        setCheck(true);
        setTimeout(() => {
            setCheck(false);
        }, 2000)
    };
    return (
        <div className="container-producto">
            {
                <div className={check ? "wrapper" : "wrapper display-none"}>
                    <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            className="checkmark__circle"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                        />
                        <path
                            className="checkmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                    </svg>
                </div>
            }
            <figure>
                <img src={props.image} alt={props.name} />
            </figure>
            <h3>{props.name}</h3>
            <div>
                <h4>${props.precio}</h4>
                <button onClick={() => clickHandler(props)}>
                    Agregar al carrito <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        agregarProducto(obj) {
            dispatch(agregarProducto(obj));
        },
    };
};

export default connect(null, mapDispatchToProps)(Producto);
