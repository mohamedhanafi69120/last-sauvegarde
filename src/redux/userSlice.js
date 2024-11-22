import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  firstname: "",
  lastname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;
