import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  idToken: "",
  expirationTime: "",
  logoutTimer: false,
};

const calRemainTime = (time) => {
  const cur = new Date().getTime();
  const expiration = new Date(time).getTime();

  return expiration - cur;
};

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload.idToken);
      localStorage.setItem("expirationTime", action.payload.expirationTime);

      const remainTime = calRemainTime(action.payload.expirationTime);
      state.logoutTimer = setTimeout(authSlice.actions.logout, remainTime);
      state.expirationTime = action.payload.expirationTime;
      state.idToken = action.payload.idToken;
    },
    logout(state, action) {
      localStorage.setItem("token", "");
      localStorage.setItem("expirationTime", "");

      if (state.logoutTimer) {
        clearTimeout(state.logoutTimer);
      }
      state.expirationTime = "";
      state.idToken = "";
    },
    signIn(state, action) {
      localStorage.setItem("token", action.payload.idToken);
      localStorage.setItem("expirationTime", action.payload.expirationTime);

      const remainTime = calRemainTime(action.payload.expirationTime);
      state.logoutTimer = setTimeout(authSlice.actions.logout, remainTime);
      state.expirationTime = action.payload.expirationTime;
      state.idToken = action.payload.idToken;
    },
    changePassword(state, action) {
      localStorage.setItem("token", action.payload.idToken);

      state.expirationTime = action.payload.expirationTime;
      state.idToken = action.payload.idToken;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
