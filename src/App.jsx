import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ErrorBoundary from "./ErrorBoundary";
import "./App.scss";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <ErrorBoundary>
          <Nav />
        </ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
