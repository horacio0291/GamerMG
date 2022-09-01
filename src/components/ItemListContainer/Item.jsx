import React from "react";
import { Link } from "react-router-dom";

import { ItemCounts } from "./ItemCounts";

export const Item = ({ productos }) => {
  return (
    <>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card w-100 card-border mb-5">
      <Link to={`/detalle/${productos.id}`}>
            <img
              src={productos.img}
              className="card-img-top"
              alt={productos.title}
            />
      </Link>
            <div className="card-body bg-white">
              <p className="text-black text-center">{productos.title}</p>
              <p className="text-black text-center">${productos.price}</p>
              <ItemCounts stock={productos.stock} />
            </div>
          </div>
        </div>
    </>
  );
};
