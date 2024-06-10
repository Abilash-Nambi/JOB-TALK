import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experience: " ",
  employment: " ",
  salary: " ",
  datePosted: " ",
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
    setDatePosted: (state, action) => {
      state.datePosted = action.payload;
    },
  },
});

export const { setExperience, setEmployment, setSalary, setDatePosted } =
  userFilterSlice.actions;
export default userFilterSlice.reducer;
