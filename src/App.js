import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/navbar/Navbar";
import { Carousel } from "./components/carousel/Carousel";
import { Ribbon } from "./components/ribbon/Ribbon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Carousel />
        <Ribbon />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/componentes" element={<ItemListContainer />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
