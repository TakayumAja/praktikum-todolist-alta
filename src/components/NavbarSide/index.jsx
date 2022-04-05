import React from "react";

/** React Router */
import { Link } from "react-router-dom";

/** Style */
import style from "./style.module.css";

const NavbarSide = () => {
  return (
    <div className={style.navbar}>
      <ul className={style.list}>
        <li className={style.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={style.item}>
          <Link to="/about-app">About App</Link>
        </li>
        <li className={style.item}>
          <Link to="/about-author">About Author</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSide;
