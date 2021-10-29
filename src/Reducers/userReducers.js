import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "User",
  initialState: {
    userState: {
      username: "",
      email: "",
      userId: "",
      photoUrl: "",
    },
  },
  reducers: {
    updateUserState: (state, action) => {
      console.log(action);
      state.userState =action.payload;
      Object.keys(state.userState).forEach((key) => {
        localStorage.setItem(key, state.userState[key]);
      });
    },
  },
});
export const { updateUserState } = userSlice.actions;
export default userSlice.reducer;
