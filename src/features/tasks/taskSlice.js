import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
  filter: 'all', // Default filter
  searchQuery: '', // Search query
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: uuidv4(), ...action.payload });
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    reorderTasks: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.tasks.splice(startIndex, 1);
      state.tasks.splice(endIndex, 0, removed);
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion, setFilter, setSearchQuery, reorderTasks } = taskSlice.actions;
export default taskSlice.reducer;
