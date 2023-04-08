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

  const addItems = (id) => {
    const cartItem = generateCartItem(id);

    setSelectedItems({
      ids: [...selectedItems.ids, id],
      list: [
        ...selectedItems.list,
        {
          id: cartItem.id,
          name: cartItem.name,
          price: cartItem.price,
          img: cartItem.images.small,
        },
      ],
    });
  };

  const generateCartItem = (id) => {
    return catalog.find((item) => item.id === id);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <ErrorBoundary>
          <Nav />
        </ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop catalog={catalog} addToCart={addItems} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
