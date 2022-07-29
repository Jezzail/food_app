import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Order from "./components/Orders/Orders";
import { CartProvider } from "./store/cart-context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderIsShown, setOrderIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showOrderHandler = () => {
    setOrderIsShown(true);
  };

  const hideOrderHandler = () => {
    setOrderIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {orderIsShown && <Order onClose={hideOrderHandler} />}
      <Header onShowCart={showCartHandler} onShowOrder={showOrderHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
