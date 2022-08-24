import { Carousel } from "./components/carousel/Carousel";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

import { Navbar } from "./components/navbar/Navbar";
import { Ribbon } from "./components/ribbon/Ribbon";

function App() {
  return (
    <divi className="App">
      <Navbar />
      <Carousel />
      <Ribbon />
      <ItemListContainer product="Monitor ROG" />
    </divi>
  );
}

export default App;
