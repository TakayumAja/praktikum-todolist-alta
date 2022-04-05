import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/Form";
import ListItem from "../ListItem/indes";
import style from "./style.module.css";

const Form = ({ input, setInput }) => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todolist.value);

  const handleChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const titleInput = {
      id: todoList[todoList.length - 1].id + 1,
      title: input,
      complited: false,
    };

    dispatch(addTodo(titleInput));

    setInput("");
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
      <ListItem />
    </div>
  );
};

export default Form;
