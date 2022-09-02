import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { productDetail } from "./productDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState();
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((res) => {
     setTimeout(()=> res(productDetail),2000) 
    });

    getData
      .then((res) => setData(res.find((product) => product.id === detalleId)))
      .catch((err) => console.error(`Ocurrio el siguiente error: ${err}`));
  }, []);

  return data ? <ItemDetail data={data} /> : <h1>Cargando...</h1>;
};
