import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './redux/slices/matchesSlice';

const store = configureStore({
  reducer: {
    matches: matchesReducer,
  },
});

export default store;
