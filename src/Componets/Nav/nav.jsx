import React from "react";
import { NavLink } from "react-router-dom";
import c from "./nav.module.css";

const Nav = (props) => {
  return (
    <div className={c.nav}>
      <div className={c.nav_menu}>
        <img className={c.logo_menu} src="./images/logo.png" alt="логотип" />
        <div className={c.nav_adnin}>
          <NavLink to="/" className={c.admin}>
            GO
          </NavLink>
          <NavLink to="/admin" className={c.admin}>
            A
          </NavLink>
          <NavLink to="/user" className={c.user}>
            U
          </NavLink>
        </div>
        <div className={c.bar_menu}>
          <div className={c.line}></div>
          <div className={c.line}></div>
          <div className={c.line}></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
