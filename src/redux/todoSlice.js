import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todoStore",
  initialState,
  reducers: {
    addTodoAction: (state, action) => {
      const todo = action.payload;
      state.todoList.push(todo);
    },
    removeTodoAction: (state, action) => {
      const todoId = action.payload;
      state.todoList = state.todoList.filter((todo) => todo?.id !== todoId);
    },
    completeTodoAction: (state, action) => {
      const todoId = action.payload;
      state.todoList = state.todoList.map((todo) => {
        if (todo?.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo?.isCompleted,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodoAction, removeTodoAction, completeTodoAction } = todoSlice.actions;

export default todoSlice.reducer;
