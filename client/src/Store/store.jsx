import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./userAuthSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    user: userAuthSlice,
    filter: filterSlice,
  },
});
