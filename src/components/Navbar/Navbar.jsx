import styles from "./Navbar.module.css";
import Logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = function () {
    setShowNav((lastPrev) => !lastPrev);
  };

  const hideNav = function () {
    setShowNav(false);
  };

  return (
    <nav>
      <div className={`container ${styles.nav_container}`}>
        <Link to="/" className={styles.logo} onClick={hideNav}>
          <img src={Logo} alt="Nav Logo" />
        </Link>

        <ul
          className={`${styles.nav_links} ${
            showNav ? styles.nav_show : styles.hidden
          }`}
        >
          {links.map((link) => (
            <li key={Math.random().toString()}>
              <NavLink
                to={link.path}
                className={(NavData) =>
                  NavData.isActive ? `${styles.active_nav}` : ""
                }
                onClick={hideNav}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button onClick={showNavHandler}>
          {showNav ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
