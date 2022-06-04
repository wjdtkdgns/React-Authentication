import authSlice from "./slice/auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { auth: authSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
