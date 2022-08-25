import { CartWidget } from "./CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img
              className="logo"
              src="assets/logo.png"
              alt="logo"
              width="70px"
            />
          </a>

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
                <a className="nav-link" href="#">
                  Equipos Armados
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Componentes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Extras
                </a>
              </li>
              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
