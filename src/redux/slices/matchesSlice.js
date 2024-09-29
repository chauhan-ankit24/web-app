// matchesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // All matches
  filteredItems: [], // Filtered matches based on search
  query: '', // Search query
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload; // Initially, all items are displayed
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    filterItems: (state) => {
      if (state.query.trim() === '') {
        state.filteredItems = state.items; // Show all items if query is empty
      } else {
        // Filter matches by team name or date
        state.filteredItems = state.items.filter(
          (item) =>
            item.teamA.toLowerCase().includes(state.query.toLowerCase()) ||
            item.teamB.toLowerCase().includes(state.query.toLowerCase()) ||
            item.date.toLowerCase().includes(state.query.toLowerCase())
        );
      }
    },
  },
});

export const { setItems, setQuery, filterItems } = matchesSlice.actions;

export default matchesSlice.reducer;
