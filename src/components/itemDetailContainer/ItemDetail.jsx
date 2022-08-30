import React from "react";
import { ItemDetailsCarousel } from "./ItemDetailsCarousel";

export const ItemDetail = ({ detail }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-6">
                  <ItemDetailsCarousel detail={detail} />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <hr />
                    <p className="card-text">
                      <strong>${detail.price}</strong>
                    </p>
                    <hr />
                    <div className="card-text">
                      <small className="text-muted">
                        <ul>
                          <li>Garantia Oficial</li>
                          <li>
                            {detail.stock > 0
                              ? "Stock Disponible"
                              : "Sin Stock"}
                          </li>
                          <li>Envíos a todo el país</li>
                        </ul>
                      </small>
                      <button
                        className="btn btn-lg btn-dark mt-2"
                        type="button"
                      >
                        Agregar al carrito
                      </button>
                    </div>
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
