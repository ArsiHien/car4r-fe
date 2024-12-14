import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IValidatePw from "../../types/IValidatePw";

const authenSlice = createSlice({
  name: "authenSlice",

  initialState: {
    email: "", // Lưu tên đăng nhập
    password: "", // Lưu mật khẩu

    accessToken: localStorage.getItem("accessToken") || "", // Load access token from localStorage
    refreshToken: "", // luu refresh token"
    role: "",

    validateEmail: false,
    validatePw: {
      length: false,
      uLCase: false,
      num: false,
      symbol: false,
      general: false,
    },
    isLoading: true,
  },

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setAccessToken: (state, action) => {
      const accessToken = action.payload;
      state.accessToken = accessToken;

      // save in localStorage
      localStorage.setItem("accessToken", accessToken);
    },

    setRefreshToken: (state, action) => {
      const refreshToken = action.payload;
      state.refreshToken = refreshToken;
      document.cookie = `refreshToken=${refreshToken}, path=/, domain=localhost, HttpOnly, SameSite=Lax`;
    },

    setRole: (state, action) => {
      state.role = action.payload;
    },

    setValidateEmail: (state, action) => {
      state.validateEmail = action.payload;
    },

    setValidatePw: (state, action: PayloadAction<IValidatePw>) => {
      state.validatePw = action.payload;
    },
    logout: (state) => {
      state.accessToken = ""; // Clear access token
      state.refreshToken = ""; // Clear refresh token
      localStorage.removeItem("accessToken"); // Remove from localStorage
      document.cookie = "refreshToken=; expires=; path=/;"; // Clear refresh token cookie
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// export actions
export const {
  setEmail,
  setPassword,
  setAccessToken,
  setRefreshToken,
  setRole,
  setValidateEmail,
  setValidatePw,
  setLoading,
  logout
} = authenSlice.actions;

// Export reducer để tích hợp vào store
export default authenSlice.reducer;
