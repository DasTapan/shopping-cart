import { useState } from "react";
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

const Card = ({ img, name }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <div className="card">
      <div className="img-box">item pic here</div>
      <span>item name</span>
      <Counter
        value={quantity}
        handleIncrement={increase}
        handleDecrement={decrease}
      />
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Card;
