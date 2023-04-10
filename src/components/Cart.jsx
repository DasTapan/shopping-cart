import INRupees from "./CurrencyFormatter";
import "./styles/Cart.scss";
import downArrow from "./assets/util-icons/sort-down.png";
import upArrow from "./assets/util-icons/sort-up.png";

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
        <img
          src={downArrow}
          alt="decrease"
          style={{ height: "15px", width: "15px" }}
        />
      </div>
      <div className="value">{value}</div>
      <div
        className="increase"
        onClick={() => {
          alterCart(1, id);
        }}
      >
        <img
          src={upArrow}
          alt="increase"
          style={{ height: "15px", width: "15px" }}
        />
      </div>
    </div>
  );
};

const Card = ({ info, alterCart, deleteItem }) => {
  return (
    <div className="card">
      <img src={info.img} alt={info.name} className="item-icon" />
      <span className="cart-item-name">{info.name}</span>
      <Counter value={info.amount} id={info.id} alterCart={alterCart} />
      <button onClick={() => deleteItem(info.id)}>Remove</button>
    </div>
  );
};

const Cart = ({ show, toggleCart, items, alterCart, deleteItem }) => {
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
            <Card
              key={item.id}
              info={item}
              alterCart={alterCart}
              deleteItem={deleteItem}
            />
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
