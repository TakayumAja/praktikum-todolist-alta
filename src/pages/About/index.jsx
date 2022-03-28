import React from "react";
import style from "./style.module.css";
import NavbarSide from "../../components/NavbarSide";
import AboutApp from "../AboutApp";

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <NavbarSide />
      </div>
      <div className={style.right}>
        <AboutApp />
      </div>
    </div>
  );
};

export default About;
