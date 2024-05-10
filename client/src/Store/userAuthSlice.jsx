import { createSlice } from "@reduxjs/toolkit";

//const auth = localStorage.getItem("authToken");

const initialState = {
  isAuthenticated: false, //auth ? true : false,
  user: null,
};

const userAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});
console.log("🚀 + initialState:", initialState);
export const { logOut, login: logIn } = userAuthSlice.actions;
export default userAuthSlice.reducer;
