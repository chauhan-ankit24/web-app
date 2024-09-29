// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './redux/slices/matchesSlice';

const store = configureStore({
  reducer: {
    search: matchesReducer,
  }
});

export default store;
