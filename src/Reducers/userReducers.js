import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "User",
  initialState: {
    username: "",
    email: "",
    userId: "",
    photoUrl: "",
  },
  reducers: {
    updateUserState: (state, action) => {
      state = { ...state, action };
    },
  },
});
export const { updateUserState } = userSlice.actions;
export default userSlice.reducer;
