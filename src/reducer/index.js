import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    // 승욱이가 만든 리듀서
    loadData: (state, action) => {
      state = action.payload;
      return state;
    },
    revokeLiked: (state) => {
      const newState = state.map((item) => {
        item.liked = true;
        return item;
      });
      return newState;
    },
  },
});

// action creator
export const { loadData, revokeLiked } = dataSlice.actions;

export default dataSlice.reducer;
