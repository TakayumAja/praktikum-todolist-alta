import React from "react";

/** React Redux */
import { useDispatch, useSelector } from "react-redux";

/** Action Remove */
import { removeTodo } from "../../store/Form";

/** Style */
import style from "./style.module.css";

const ListItem = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todolist.value);
  console.log(todos);

  return (
    <ul>
      {todos.map((item) => (
        <div className={style.item} key={item.id}>
          <input type="checkbox" className={style.ceked} />
          <li className={style.list}>{item.title}</li>
          <button
            className={style.delete}
            onClick={() => dispatch(removeTodo({ id: item.id }))}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default ListItem;
