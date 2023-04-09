import INRupees from "./CurrencyFormatter";
import "./styles/Cart.scss";

const Counter = ({ value, id, alterCart }) => {
  return (
    <div className="counter">
      <div
        className="decrease"
        onClick={() => {
          if (value > 1) {
            alterCart(-1, id);
          }
        }}
      >
        &#8595;
      </div>
      <div className="value">{value}</div>
      <div
        className="increase"
        onClick={() => {
          alterCart(1, id);
        }}
      >
        &#8593;
      </div>
    </div>
  );
};

const Card = ({ info, alterCart }) => {
  return (
    <div className="card">
      <img src={info.img} alt={info.name} />
      <span>{info.name}</span>
      <Counter value={info.amount} id={info.id} alterCart={alterCart} />
      <button>remove</button>
    </div>
  );
};

const Cart = ({ show, toggleCart, items, alterCart }) => {
  const totalItems = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const grandTotal = items.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  const grandTotalInRupees = INRupees.format(grandTotal).slice(0, -3);

  return (
    <>
      {show ? (
        <div className="cart">
          <div className="banner">
            <span>{totalItems}</span> Items
          </div>
          {items.map((item) => (
            <Card key={item.id} info={item} alterCart={alterCart} />
          ))}
          <span>Grand Total: {grandTotalInRupees}</span>
          <button>Checkout</button>
          <button onClick={() => toggleCart(false)}>Close</button>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
