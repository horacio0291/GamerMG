import { ItemListContainer } from "./components/body/ItemListContainer";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer product="Monitor" info="Samsung 22''" description="Monitor de 22 pulgadas marca Samsung"/>
    </div>
  );
}

export default App;
