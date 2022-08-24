import React, { useState } from "react";

export const ItemCounts = () => {
  const monitor = {
    stock: 5,
  };

  const [count, setCount] = useState(1);
  

  const onSumar = () => {
    if (count < monitor.stock) {
      setCount(count + 1);
    } else return;
  };

  const onRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    } else return;
  };

  return (
    <>
      <div className="card-text d-flex justify-content-evenly">
        <button
          onClick={() => onSumar()}
          type="button"
          className="btn btn-outline-dark"
          disabled={
            count !== monitor.stock ? false : true
          }
        >
          +
        </button>
        <span className="text-black">{count}</span>
        <button
          onClick={() => onRestar()}
          type="button"
          className="btn btn-outline-dark"
        >
          -
        </button>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-lg btn-dark mt-2" type="button">
          Agregar al carrito
        </button>
      </div>
    </>
  );
};