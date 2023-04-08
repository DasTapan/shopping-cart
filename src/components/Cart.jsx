import "./styles/Cart.scss";

const Cart = ({ show, toggleCart }) => {
  return (
    <>
      {show ? (
        <div className="cart">
          <button>Checkout</button> <br />
          <br />
          <br />
          <button onClick={() => toggleCart(false)}>Close</button>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
