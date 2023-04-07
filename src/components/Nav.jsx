import { Link } from "react-router-dom";
import "./styles/Nav.scss";

const Nav = () => {
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
          <Link className="links" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
