import "./Nav.scss";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const path = useLocation().pathname;

  return (
    <nav className="Nav">
      <img className="Nav__menu" src={menu} alt="menu" />
      <Link to="/">
        <img className="Nav__logo" src={logo} alt="logo" />
      </Link>
      <div className="Nav__links">
        <Link className="Nav__link current" to="collections">
          Collections
        </Link>

        <Link className="Nav__link" to="men">
          Men
        </Link>

        <Link className="Nav__link" to="women">
          Women
        </Link>

        <Link className="Nav__link" to="about">
          About
        </Link>

        <Link className="Nav__link" to="Contact">
          Collections
        </Link>
      </div>
      <Link to="/cart" className="Nav__cart">
        <img src={cart} alt="cart" />
      </Link>
      <img className="Nav__avatar" src={avatar} alt="avatar" />
    </nav>
  );
};

export default Nav;
