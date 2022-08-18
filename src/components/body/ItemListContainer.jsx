import React from "react";
import "./itemListContainer.css"
import Monitor from "../../assets/monitor-01.webp";

export const ItemListContainer = ({ product, info, description }) => {
  return (
    <div className="container">
      <div className="card-group">
        <div className="card m-2">
          <img
            src={Monitor}
            className="card-img-top"
            alt="monitor"
            style={{ width: "220", height: "180" }}
          />
          <div className="card-body">
            <h5 className="card-title">{info}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card m-2">
          <img
            src={Monitor}
            className="card-img-top"
            alt="monitor"
            style={{ width: "220", height: "180" }}
          />
          <div className="card-body">
            <h5 className="card-title">{info}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card m-2">
          <img
            src={Monitor}
            className="card-img-top"
            alt="monitor"
            style={{ width: "220", height: "180" }}
          />
          <div className="card-body">
            <h5 className="card-title">{info}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
