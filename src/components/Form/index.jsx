import React from "react";
import ListItem from "../ListItem/indes";
import style from "./style.module.css";

const Form = ({
  handleSubmit,
  todoItem,
  handleChange,
  handleDelete,
  items,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          className={style.input}
          value={todoItem}
          onChange={handleChange}
        />
        <button className={style.submit}>Submit</button>
      </form>

      {/* <ul>
        {items.map((item) => (
          <div>
            <input type="checkbox" />
            <li key={item.id}>{item.title}</li>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </ul> */}
      <ListItem handleDelete={handleDelete} items={items} />
    </div>
  );
};

export default Form;
