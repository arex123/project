import Header from "./components/Layout/Header";
import List from "./components/Meals/List";
import Banner from "./components/UI/Banner";
import OrderModal from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Banner />
      <List />
    </CartProvider>
  );
}

export default App;
