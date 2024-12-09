import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IValidatePw from "../../types/IValidatePw";

const authenSlice = createSlice({
  name: "authenSlice",

  initialState: {
    email: "", // Lưu tên đăng nhập
    password: "", // Lưu mật khẩu

    accessToken: "", // Luu access token
    refreshToken: "", // luu refresh token"

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
    setUserName: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },

    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
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
  setUserName,
  setPassword,
  setAccessToken,
  setRefreshToken,
  setValidateEmail,
  setValidatePw,
} = authenSlice.actions;

// Export reducer để tích hợp vào store
export default authenSlice.reducer;
