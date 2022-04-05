import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Form";

// Create Store

export default configureStore({
  reducer: {
    todolist: todoReducer,
  },
});
