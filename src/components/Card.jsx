import { useState } from "react";
import INRupees from "./CurrencyFormatter";
import "./styles/Card.scss";
import sortDownIcon from "./assets/util-icons/sort-down.png";
import sortUpIcon from "./assets/util-icons/sort-up.png";

const Counter = ({ value, handleIncrement, handleDecrement }) => {
  return (
    <div className="counter">
      <div className="decrease" onClick={handleDecrement}>
        <img
          src={sortDownIcon}
          alt="decrease"
          style={{ height: "20px", width: "20px" }}
        />
      </div>
      <div className="value">{value}</div>
      <div className="increase" onClick={handleIncrement}>
        <img
          src={sortUpIcon}
          alt="increase"
          style={{ height: "20px", width: "20px" }}
        />
      </div>
    </div>
  );
};

const Card = ({ id, imgSrc, name, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const priceLocalized = INRupees.format(price).slice(0, -3);

  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <span className="item-name">{name}</span>
      <span className="item-price">{priceLocalized}</span>
      <Counter
        value={quantity}
        handleIncrement={increase}
        handleDecrement={decrease}
      />
      <button className="add-to-cart" onClick={() => addToCart(id, quantity)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
