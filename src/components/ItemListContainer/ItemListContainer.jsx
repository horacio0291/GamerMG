import { productos } from "./products";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import "./cards.css";

export const ItemListContainer = ({ product }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((res, rej) => {
      res(productos);
    });
    getData.then((res) => setData(res));
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
