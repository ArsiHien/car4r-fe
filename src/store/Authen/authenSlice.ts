import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IValidatePw from "../../types/IValidatePw";
import Cookies from "js-cookie";

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

      Cookies.set("refreshToken", refreshToken, {
        sameSite: "None",
        path: "/",
        expires: 28,
      });
    },

    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = "";

      localStorage.clear();
      Cookies.remove("refreshToken");
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
  logout,
} = authenSlice.actions;

// Export reducer để tích hợp vào store
export default authenSlice.reducer;
