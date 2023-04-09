import INRupees from "./CurrencyFormatter";
import "./styles/Cart.scss";

const Card = ({ info }) => {
  return (
    <div className="card">
      <img src={info.img} alt={info.name} />
      <span>{info.name}</span>
      <span>counter</span>
      <button>remove</button>
    </div>
  );
};

const Cart = ({ show, toggleCart, items }) => {
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
            <Card key={item.id} info={item} />
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
