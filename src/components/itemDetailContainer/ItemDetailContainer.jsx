import React, { useEffect, useState } from "react";
import {ItemDetail} from "./ItemDetail";
import { productDetail } from "./productDetail";

export const ItemDetailContainer = () => {
  const [datails, setDatails] = useState({});

  useEffect(() => {
    const getData = new Promise((res) => {
      res(productDetail);
    });
    
    getData
    .then((res) => setDatails(res))
    .catch((err) => console.error(`Ocurrio el siguiente error: ${err}`));
    
}, []);


  return <ItemDetail detail={datails} />;
};


