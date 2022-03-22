import React from "react";
import ListItem from "../ListItem/indes";
import style from "./style.module.css";

const Form = ({ input, data, setInput, setData }) => {
  const handleChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      const titleInput = {
        id: Math.random(),
        title: input,
        complited: false,
      };

      const titleNew = [...data];
      titleNew.push(titleInput);

      setData(titleNew);

      setInput([]);
    } else {
      alert("Masukkan Inputan");
    }
  };

  const handleDelete = (id) => {
    const items = [...data];
    const ItemUpdate = items.filter((item) => item.id !== id);

    setData(ItemUpdate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          className={style.input}
          value={input}
          onChange={handleChange}
        />
        <button className={style.submit}>Submit</button>
      </form>
      <ListItem data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default Form;
