import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { createSlice, configureStore } from "redux-toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: (state) => {
      return {};
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});