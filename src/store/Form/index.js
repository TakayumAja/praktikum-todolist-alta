import { createSlice } from "@reduxjs/toolkit";

const todoData = [
  { id: 1, title: "Memasak", complited: false },
  { id: 2, title: "Mengaji", complited: false },
  { id: 3, title: "Belajar", complited: false },
  { id: 4, title: "Menggambar", complited: false },
];

const initialState = {
  value: todoData,
};

// Create Reducer
const todoReducer = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    // Tambahkan TodoList
    addTodo: (state, action) => {
      // Peringatan Jika title Masih Kosong
      if (action.payload.title === "") {
        alert("Masukkan Data Inputan");
      } else {
        state.value.push(action.payload);
      }
    },
    // Hapus TodoList
    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoReducer.actions;
export default todoReducer.reducer;
