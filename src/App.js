import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/navbar/Navbar";
import { Carousel } from "./components/carousel/Carousel";
import { Ribbon } from "./components/ribbon/Ribbon";
import Serccher from "./components/navbar/Serccher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Serccher />
        <Navbar />
        <Carousel />
        <Ribbon />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/componentes" element={<ItemListContainer />} />
          <Route
            path="/componentes/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/notebooks" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
