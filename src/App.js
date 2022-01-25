import React, {useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";
import CartProvider from './store/cart-provider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
      setShowCart(true)
  }

  const hideCartHandler = () => {
      setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart key='cart-model' hideCartHandler={hideCartHandler} /> }
      <Header showCartHandler={showCartHandler} />
        <main>
            <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
