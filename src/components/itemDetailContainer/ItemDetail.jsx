import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { ItemDetailsCarousel } from "./ItemDetailsCarousel";
import { ItemCounts } from "../ItemListContainer/ItemCounts";
import { Link } from "react-router-dom";
import { getFirestore, doc,updateDoc } from "firebase/firestore";


export const ItemDetail = ({ data, setData }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addItem(data, quantity);
    data.stock = data.stock - quantity;
    // let stock = data.stock

    // const querydb = getFirestore();
    // const queryDoc  = doc(querydb, 'productos', stock);
    // updateDoc(queryDoc)
    // .then(res => setData({stock:res.id, ...res.data()}))
   
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-lg-6">
                  <ItemDetailsCarousel data={data} />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <hr />
                    <p className="card-text">
                      <strong>${data.price}</strong>
                    </p>
                    <hr />
                    <div className="card-text">
                      <small className="text-muted">
                        <ul>
                          <li>Garantia Oficial</li>
                          <li>
                            {data.stock > 0 ? "Stock Disponible" : "Sin Stock"}
                          </li>
                          <li>Envíos a todo el país</li>
                        </ul>
                      </small>
                      <hr />
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    {goToCart ? (
                      <Link
                        to="/cart"
                        className="btn btn-lg btn-dark mt-2 "
                        type="button"
                      >
                        Finalizar compra
                      </Link>
                      
                    ) : (
                      <ItemCounts
                        className="mt-5 p-5"
                        stock={data.stock}
                        onClick={onAdd}
                      />
                    )}
                    <Link
                        to="/"
                        className="btn btn-lg btn-dark mt-2 "
                        type="button"
                      >
                       Seguir Comprando
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
