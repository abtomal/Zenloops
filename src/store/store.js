import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: null,
  selectedSound: null,
  timerStarted: false,
  timerDuration: 0,
};

const meditationSlice = createSlice({
  name: 'meditation',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    selectSound: (state, action) => {
      state.selectedSound = action.payload;
    },
    startTimer: (state, action) => {
      state.timerStarted = true;
      state.timerDuration = action.payload;
    },
    resetTimer: (state) => {
      state.timerStarted = false;
      state.timerDuration = 0;
    },
  },
});

export const { selectCategory, selectSound, startTimer, resetTimer } = meditationSlice.actions;

const store = configureStore({
  reducer: {
    meditation: meditationSlice.reducer,
  },
});

export default store;