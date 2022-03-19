import React from "react";
import style from "./style.module.css";

const ListItem = ({ items, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <div className={style.item}>
          <input type="checkbox" className={style.ceked} />
          <li key={item.id} className={style.list}>
            {item.title}
          </li>
          <button
            className={style.delete}
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default ListItem;
