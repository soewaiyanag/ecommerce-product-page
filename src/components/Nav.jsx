import { useRef, useEffect, useState } from "react";
import "./Nav.scss";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import capitalize from "lodash.capitalize";
import Cart from "./Cart";

const navLinks = ["collections", "men", "women", "about", "contact"];

const Nav = () => {
  const path = useLocation().pathname;
  const navLinksRef = useRef(null);
  const [isNavActive, setIsNavActive] = useState(false);
  const [numOfItems, setNumOfItems] = useState(0);

  useEffect(() => {
    navLinks.forEach((navLink, index) => {
      if (path === `/${navLink}`) {
        navLinksRef.current.childNodes[index].classList.add("current");
      } else {
        navLinksRef.current.childNodes[index].classList.remove("current");
      }
    });
  });

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <nav className="Nav">
      <img
        onClick={toggleNav}
        className="Nav__menu"
        src={isNavActive ? close : menu}
        alt="menu"
      />
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
        {navLinks.map((navLink) => (
          <Link className="Nav__link" to={"/" + navLink} key={navLink}>
            {capitalize(navLink)}
          </Link>
        ))}
      </div>
      <Link to="/cart" className="Nav__cart">
        <img src={cart} alt="cart" />
        {numOfItems ? <span className="num-of-items">{numOfItems}</span> : null}
      </Link>
      <img className="Nav__avatar" src={avatar} alt="avatar" />
      <Cart />
    </nav>
  );
};

export default Nav;
