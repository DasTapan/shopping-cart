import "./styles/Cart.scss";

const Card = () => {
  return <div className="card">Jay Jagannath</div>;
};

const Cart = ({ show, toggleCart, items }) => {
  const totalItems = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

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
          <button>Checkout</button>
          <button onClick={() => toggleCart(false)}>Close</button>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
