import React from "react";
import { ItemDetailsCarousel } from "./ItemDetailsCarousel";
import { ItemCounts } from "../ItemListContainer/ItemCounts";

export const ItemDetail = ({ data }) => {
  console.log(data);
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
                      <ItemCounts className="mt-5 p-5" stock={data.stock} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
