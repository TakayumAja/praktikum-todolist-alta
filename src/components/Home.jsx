import React, { useState } from "react";
import Form from "./Form";
import Title from "./Title";

const Home = () => {
  const [input, setInput] = useState([]);

  const [data, setData] = useState([]);

  return (
    <div>
      <Title />
      <Form input={input} data={data} setInput={setInput} setData={setData} />
    </div>
  );
};

export default Home;
