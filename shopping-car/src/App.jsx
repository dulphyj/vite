import { Products } from "./components/Products";
import { products } from "./moocks/products.json";

function App() {
  return (
    <>
      <h1>shopping car</h1>
      <Products products={products} />
    </>
  );
}

export default App;
