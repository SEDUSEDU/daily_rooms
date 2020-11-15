import React from "react";
import c from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={c.footer}>
      <div className={c.container}>
        <div className={c.phone}>
          <p>+37529 348-92-29</p>
          <p>+37529 348-92-29</p>
        </div>
        <div className={c.card}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className={c.network}>
          <p>Fasebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
