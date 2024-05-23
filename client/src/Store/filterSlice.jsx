import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experience: "",
  employment: "",
  salary: null,
};

const userFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setEmployment: (state, action) => {
      state.employment = action.payload;
    },
    setSalary: (state, action) => {
      state.salary = action.payload;
    },
  },
});

export const { setExperience, setEmployment, setSalary } =
  userFilterSlice.actions;
export default userFilterSlice.reducer;
