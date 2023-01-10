import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Carrito from "./Carrito";

const Header = () => {
    return(
        <header className="header">
            <NavLink to="/">
                <h1 className="logo">
                    <img src={logo} alt="carrito app" />
                    Carrito App
                </h1>
            </NavLink>
            <Carrito />
        </header>
    )
}

export default Header;