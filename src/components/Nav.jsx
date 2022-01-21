import { useRef, useEffect } from "react";
import "./Nav.scss";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import capitalize from "lodash.capitalize";

const navLinks = ["collections", "men", "women", "about", "contact"];

const Nav = () => {
  const path = useLocation().pathname;
  const navLinksRef = useRef(null);

  useEffect(() => {
    navLinks.forEach((navLink, index) => {
      if (path === `/${navLink}`) {
        navLinksRef.current.childNodes[index].classList.add("current");
      } else {
        navLinksRef.current.childNodes[index].classList.remove("current");
      }
    });
  });

  return (
    <nav className="Nav">
      <img className="Nav__menu" src={menu} alt="menu" />
      <Link to="/">
        <img className="Nav__logo" src={logo} alt="logo" />
      </Link>
      <div className="Nav__links" ref={navLinksRef}>
        {navLinks.map((navLink) => (
          <Link className="Nav__link" to={"/" + navLink} key={navLink}>
            {capitalize(navLink)}
          </Link>
        ))}
      </div>
      <Link to="/cart" className="Nav__cart">
        <img src={cart} alt="cart" />
      </Link>
      <img className="Nav__avatar" src={avatar} alt="avatar" />
    </nav>
  );
};

export default Nav;
