import React from "react";
import { NavLink } from "react-router-dom";

const Serccher = () => {
  return (
    <>
      <nav className="navbar bg-secondary d-flex justify-content-center">
        <NavLink className="navbar-brand" to="/">
          <img
            className="logo"
            src="../../assets/logo.png"
            alt="logo"
            width="70px"
          />
        </NavLink>
        <div className="container-fluid row w-50 ">
          <form role="search">
            <input
              className="form-control me-2 text-center"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
          <button type="button" className="btn btn-outline-primary">
            Iniciar Sesión
          </button>
      </nav>
    </>
  );
};

export default Serccher;
