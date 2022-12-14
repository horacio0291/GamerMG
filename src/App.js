import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/navbar/Navbar";
import { Carousel } from "./components/carousel/Carousel";
import { Ribbon } from "./components/ribbon/Ribbon";
import { Cart } from "./components/cart/Cart";
import { Footer } from "./components/footer/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
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
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/notebooks" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
