import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ErrorBoundary from "./ErrorBoundary";
import { catalog } from "./components/Catalog";
import "./App.scss";

function App() {
  const [selectedItems, setSelectedItems] = useState({ ids: [], list: [] });
  const [showCart, setShowCart] = useState(false);

  const generateCartItem = (id) => {
    return catalog.find((item) => item.id === id);
  };

  const addItems = (id, amount) => {
    const cartItem = generateCartItem(id);

    setSelectedItems({
      ids: [...selectedItems.ids, id],
      list: [
        ...selectedItems.list,
        {
          id: cartItem.id,
          name: cartItem.name,
          price: cartItem.price,
          amount: amount,
          img: cartItem.images.small,
        },
      ],
    });
  };

  const alterItems = (val, id) => {
    if (val > 0) {
      const updatedItems = selectedItems.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });
      setSelectedItems({
        ...selectedItems,
        list: [...updatedItems],
      });
    }
    if (val < 0) {
      const updatedItems = selectedItems.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });
      setSelectedItems({
        ...selectedItems,
        list: [...updatedItems],
      });
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <ErrorBoundary>
          <Nav toggleCart={setShowCart} />
        </ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop catalog={catalog} addToCart={addItems} />}
          />
        </Routes>
        <Cart
          show={showCart}
          toggleCart={setShowCart}
          items={selectedItems.list}
          alterCart={alterItems}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
