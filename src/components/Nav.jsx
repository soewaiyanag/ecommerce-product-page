import "./Nav.scss";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const path = useLocation().pathname;

  return (
    <nav
      className="Nav"
      onClick={() => {
        console.log(path);
      }}
    >
      <img className="Nav__menu" src={menu} alt="menu" />
      <Link to="/">
        <img className="Nav__logo" src={logo} alt="logo" />
      </Link>
      <div className="Nav__links">
        <Link to="collections">Collections</Link>

        <Link to="men">Men</Link>

        <Link to="women">Women</Link>

        <Link to="about">About</Link>

        <Link to="Contact">Collections</Link>
      </div>
      <img className="Nav__cart" src={cart} alt="cart" />
      <img className="Nav__avatar" src={avatar} alt="avatar" />
    </nav>
  );
};

export default Nav;
