import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            <img
              className="logo"
              src="../../assets/logo.png"
              alt="logo"
              width="70px"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarColor02"
          >
            <ul className="navbar-nav w-100 justify-content-evenly">
              <li className="nav-item">
                <NavLink className="nav-link" to="/componentes">
                  Equipos Armados
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/componentes">
                  Componentes
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/componentes/monitor">
                      Monitores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/componentes/gabinete">
                      Gabinetes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/componentes/teclado">
                      Teclados
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/componentes/mouse">
                      Mouse
                    </NavLink>
                  </li>
                </ul>
              </li>

              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
