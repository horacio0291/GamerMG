import React from "react";
import Carrito from "../../assets/carrito.png";

export const CartWidget = () => {
  return (
    <>
      <li className="nav-item">
        <a className="navbar-brand carrito" href="#">
          <img src={Carrito} alt="carrito" width="40px" />
        </a>
          <span>10</span>
      </li>
    </>
  );
};
