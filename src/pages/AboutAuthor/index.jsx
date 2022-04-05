import React from "react";

/** Component */
import NavbarSide from "../../components/NavbarSide";

/** Style */
import style from "./style.module.css";

const AboutAuthor = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <NavbarSide />
      </div>
      <div className={style.right}>
        <h1>About The Author</h1>
        <p>
          This app was developed by someone, self-taught web developer and
          technical writer
        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
