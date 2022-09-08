import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ productos }) => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card w-100 card-border mb-5">
          <Link to={`/detalle/${productos.id}`}>
            <img
              src={productos.img01}
              className="card-img-top"
              alt={productos.title}
            />
          </Link>
          <div className="card-body bg-white">
            <p className="text-black text-center">{productos.category}</p>
            <p className="text-black text-center">${productos.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
