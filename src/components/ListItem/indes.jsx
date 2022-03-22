import React from "react";
import style from "./style.module.css";

const ListItem = ({ data, handleDelete }) => {
  return (
    <ul>
      {data.map((item) => (
        <div className={style.item} key={item.id}>
          <input type="checkbox" className={style.ceked} />
          <li className={style.list}>{item.title}</li>
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
