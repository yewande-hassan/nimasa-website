import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: null,
  user:null,
  token:null
};

 const signInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInPending: (state) => {
      state.isLoading = true;
    },
    signInSuccess: (state,{payload}) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
      state.user=payload.user;
      state.token= payload.token;

    },
    signInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.isLoading = null;
      state.isAuth = null;
      state.error = null;
      state.user=null;
      state.token= null;

    },
  },
});



const { reducer, actions } = signInSlice;
export const { signInPending, signInSuccess, signInFailed,clearUser } = actions;
export default reducer;
