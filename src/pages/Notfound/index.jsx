import React from "react";

/** React Router */
import { Link } from "react-router-dom";

/** Style */
import style from "./style.module.css";

const Notfound = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Page Not Found</h1>
      <p className={style.warning}>
        <strong>Opps! Something went wrong!</strong>
      </p>

      <button className={style.btnHome}>
        <Link to="/">Return To Home</Link>
      </button>
    </div>
  );
};

export default Notfound;
