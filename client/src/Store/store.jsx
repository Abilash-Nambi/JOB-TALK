import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./userAuthSlice";

export const store = configureStore({
  reducer: {
    user: userAuthSlice,
  },
});
