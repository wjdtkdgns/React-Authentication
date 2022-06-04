import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  idToken: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload.idToken);

      state.idToken = action.payload.idToken;
      state.isLoggedIn = !!state.idToken;
    },
    logout(state, action) {
      localStorage.setItem("token", "");

      state.idToken = "";
      state.isLoggedIn = !state.isLoggedIn;
    },
    signIn(state, action) {
      localStorage.setItem("token", action.payload.idToken);

      state.idToken = action.payload.idToken;
      state.isLoggedIn = !!state.idToken;
    },
    changePassword(state, action) {
      localStorage.setItem("token", action.payload.idToken);

      state.idToken = action.payload.idToken;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
