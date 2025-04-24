// src/features/todos/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
  id: number;
  text: string;
  date: string;
  time: string;
  completed: boolean;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; date: string; time: string }>) => {
      const { text, date, time } = action.payload;
      state.list.push({
        id: Date.now(),
        text,
        date,
        time,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.list.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
