import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')!) : null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      // Store user data in cookie with 7 days expiration
      Cookies.set('user', JSON.stringify(action.payload), { expires: 7 });
    },

    clearUser: (state) => {
      state.user = null;
      // Remove user data from cookie
      Cookies.remove('user');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
