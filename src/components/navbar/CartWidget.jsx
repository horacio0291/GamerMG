import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {

  const {totalProducts} = useCartContext();

  return (
    <>
      <li className="nav-item">
        <Link className="navbar-brand carrito" to="../cart/Cart.jsx">
          <img src="../../assets/carrito.png" alt="carrito" width="40px" />
        </Link>
        <span>{totalProducts()}</span>
      </li>
    </>
  );
};
