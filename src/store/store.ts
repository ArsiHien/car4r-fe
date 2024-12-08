import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authen/authenSlice";
import filterReducer from "./Filter/filterSlice";
import carMapReducer from "./CarMap/carMapSlice";
import carsReducer from "./Car/carSlice";
import selectedCarReducer from "./Car/selectedCarSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filterReducer,
    carMap: carMapReducer,
    cars: carsReducer,
    selectedCar: selectedCarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
