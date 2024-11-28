import authReducer from "./Authen/authenSlice";
import filterReducer from "./Filter/filterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
