import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IValidatePw from "../../types/IValidatePw";

const authenSlice = createSlice({
  name: "authenSlice",

  initialState: {
    email: "", // Lưu tên đăng nhập
    pW: "", // Lưu mật khẩu

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
      state.pW = action.payload;
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
export const { setUserName, setPassword, setValidateEmail, setValidatePw } =
  authenSlice.actions;

// Export reducer để tích hợp vào store
export default authenSlice.reducer;
