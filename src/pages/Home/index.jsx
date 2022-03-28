import React, { useState } from "react";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

import style from "./style.module.css";

const Home = () => {
  const [input, setInput] = useState([]);

  const [data, setData] = useState([]);

  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <Navbar />
      </div>
      <div className={style.right}>
        <Title />
        <Form input={input} data={data} setInput={setInput} setData={setData} />
      </div>
    </div>
  );
};

export default Home;
