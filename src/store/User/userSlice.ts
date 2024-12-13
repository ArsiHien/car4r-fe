import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
  },

  reducers: {
    // Action cập nhật user
    setUser: (state, action) => {
      state.user = action.payload;
    },

    // Action để logout
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
