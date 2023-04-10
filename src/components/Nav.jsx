import { Link } from "react-router-dom";
import "./styles/Nav.scss";

const val = 9;

const Nav = ({ toggleCart, totalItems }) => {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link
            className="links to-cart"
            onClick={() => toggleCart(true)}
            data-count={totalItems}
          >
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
export { val };
