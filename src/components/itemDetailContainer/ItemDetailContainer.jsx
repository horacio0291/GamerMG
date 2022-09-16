import React, { useEffect, useState } from "react";
import {getFirestore, doc, getDoc,} from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
// import { productDetail } from "./productDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState();
  const { detalleId } = useParams();

  useEffect(()=>{
    const querydb = getFirestore();
    const queryDoc  = doc(querydb, 'productos', detalleId);
    getDoc(queryDoc)
    .then(res => setData({id:res.id, ...res.data()}))

  },[detalleId])


  return data ? <ItemDetail data={data} setData={setData} /> : <h1>Cargando...</h1>;
};
