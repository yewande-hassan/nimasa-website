import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: null,
};

 const signInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInPending: (state) => {
      state.isLoading = true;
    },
    signInSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    signInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});



const { reducer, actions } = signInSlice;
export const { signInPending, signInSuccess, signInFailed } = actions;
export default reducer;
