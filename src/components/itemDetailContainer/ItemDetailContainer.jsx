import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { productDetail } from "./productDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((res) => {
      res(productDetail);
    });

    getData
      .then((res) => setData(res.find((product) => product.id === detalleId)))
      .catch((err) => console.error(`Ocurrio el siguiente error: ${err}`));
  }, []);

  return <ItemDetail data={data} />;
};
