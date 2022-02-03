import { useRef, useState, useContext } from "react";
import "./Nav.scss";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import capitalize from "lodash.capitalize";
import Cart from "./Cart";
import store from "../store";

const navLinks = ["collections", "men", "women", "about", "contact"];

const Nav = () => {
  const navLinksRef = useRef(null);
  const [isNavActive, setIsNavActive] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { items } = store.getState();

  const activeNav = () => {
    setIsNavActive(true);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  return (
    <nav className="Nav">
      <img onClick={activeNav} className="Nav__menu" src={menu} alt="menu" />
      <Link to="/">
        <img className="Nav__logo" src={logo} alt="logo" />
      </Link>
      <div
        style={{
          transform: isNavActive ? "translateX(0)" : null,
        }}
        className="Nav__links"
        ref={navLinksRef}
      >
        <img
          className="Nav__links--close"
          src={close}
          alt="close"
          onClick={closeNav}
        />
        {navLinks.map((navLink) => (
          <NavLink
            className={({ isActive }) => {
              return `Nav__link ${isActive ? "current" : ""}`;
            }}
            to={"/" + navLink}
            key={navLink}
          >
            {capitalize(navLink)}
          </NavLink>
        ))}
      </div>
      <div
        className="Nav__cart"
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        <img src={cart} alt="cart" />
        {!!items.length ? (
          <span className="num-of-items">{items.length}</span>
        ) : null}
      </div>
      <img className="Nav__avatar" src={avatar} alt="avatar" />
      {showCart ? <Cart /> : null}
    </nav>
  );
};

export default Nav;
