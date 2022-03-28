import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        <strong>Opps! Smoething went wrong!</strong>
      </p>

      <button>
        <Link to="/">Return To Home</Link>
      </button>
    </div>
  );
};

export default Notfound;
