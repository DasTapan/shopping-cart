import { Link } from "react-router-dom";
import "./styles/Nav.scss";

const Nav = ({ toggleCart }) => {
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
          <Link className="links" onClick={() => toggleCart(true)}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
