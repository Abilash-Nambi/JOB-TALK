import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  // Check if token is present in local storage
  const token = localStorage.getItem("authToken");
  const userString = localStorage.getItem("user");
  const user = userString && JSON.parse(userString);

  return {
    isAuthenticated: !!token, // Convert token to boolean
    user: user || null,
  };
};

const userAuthSlice = createSlice({
  name: "user",
  initialState: initialState(),
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

export const { logOut, login: logIn } = userAuthSlice.actions;
export default userAuthSlice.reducer;
