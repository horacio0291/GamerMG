import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { ItemList } from "./ItemList";
import "./cards.css";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', "==", categoriaId))
      getDocs(queryFilter)
      .then(res=>setData(res.docs.map(product =>({ id: product.id, ...product.data()}))))
    }else {
      getDocs(queryCollection)
      .then(res=>setData(res.docs.map(product =>({ id: product.id, ...product.data()}))))
    }

  },[categoriaId])

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
