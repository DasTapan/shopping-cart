import { useState } from "react";
import INRupees from "./CurrencyFormatter";
import "./styles/Card.scss";

const Counter = ({ value, handleIncrement, handleDecrement }) => {
  return (
    <div className="counter">
      <div className="decrease" onClick={handleDecrement}>
        &#8595;
      </div>
      <div className="value">{value}</div>
      <div className="increase" onClick={handleIncrement}>
        &#8593;
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
      <span>{name}</span>
      <span>{priceLocalized}</span>
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
