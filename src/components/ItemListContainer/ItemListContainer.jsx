import React from "react";
import "./itemListContainer.css";
import Monitor from "../../assets/monitor-01.webp";
import { ItemCounts } from "./ItemCounts";

export const ItemListContainer = ({ product, info, description }) => {
  return (
    <div className="container w-25">
      <div className="card-group">
        <div className="card m-2">
          <img
            src={Monitor}
            className="card-img-top"
            alt="monitor"
          />
          <div className="card-body">
            <h5 className="card-title">{info}</h5>
            <p className="card-text">{description}</p>
           <ItemCounts/>
          </div>
        </div>
      </div>
    </div>
  );
};
