import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  matches: [
    { id: 1, teamA: 'Team A', teamB: 'Team B', date: '2024-10-10' },
    { id: 2, teamA: 'Team C', teamB: 'Team D', date: '2024-10-11' },
    // Add more matches
  ],
  searchQuery: '',
  selectedDate: null,
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSearchQuery, setSelectedDate } = matchesSlice.actions;
export default matchesSlice.reducer;
