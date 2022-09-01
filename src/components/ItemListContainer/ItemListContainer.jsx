import { useEffect, useState } from "react";
import { productos } from "./products";
import { ItemList } from "./ItemList";
// import { productDetail } from "../itemDetailContainer/productDetail";
import "./cards.css";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((res) => {
      res(productos);
    });
    getData
      .then((res) => setData(res))
      .catch((err) => console.error(`Ocurrio el siguiente error: ${err}`));
  }, []);

  return (
    <div>
      <div className="container-md p-5">
        <div className="row pt-5">
          <h3 className="text-center pb-5 pt-5 h1"> Productos</h3>
        </div>
        <div className="row">
          <ItemList data={data} />
        </div>
      </div>
    </div>
  );
};
