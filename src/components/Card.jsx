import { useState } from "react";
import "./styles/Card.scss";

const Counter = ({ value }) => {
  return (
    <div className="counter">
      <div className="decrease">&#8593;</div>
      <div className="value">{value}</div>
      <div className="increase">&#8595;</div>
    </div>
  );
};

const Card = ({ img, name }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="card">
      <div className="img-box">item pic here</div>
      <span>item name</span>
      <Counter value={quantity} />
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Card;
