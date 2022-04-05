import React, { useState } from "react";

// Component
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

// Style
import style from "./style.module.css";

const Home = () => {
  const [input, setInput] = useState("");

  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <Navbar />
      </div>
      <div className={style.right}>
        <Title />
        <Form input={input} setInput={setInput} />
      </div>
    </div>
  );
};

export default Home;
