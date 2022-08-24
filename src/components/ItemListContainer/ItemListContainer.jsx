import React from "react";
import { ItemCounts } from "./ItemCounts";
import "./cards.css";

export const ItemListContainer = ({product}) => {
  return (
    <div>
      <div className="container-md p-5">
        <div className="row pt-5">
          <h3 className="text-center pb-5 pt-5 h1"> Productos</h3>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="card w-100 card-border mb-5">
              <img
                src="assets/monitor.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-white">
              <p className="text-black text-center">{product}</p>
                <ItemCounts />
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card w-100 card-border mb-5">
              <img
                src="assets/monitor.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-white">
              <p className="text-black text-center">{product}</p>
                <ItemCounts />
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card w-100 card-border mb-5">
              <img
                src="assets/monitor.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-white">
              <p className="text-black text-center">{product}</p>
                <ItemCounts />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
