import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authen/authenSlice";
import filterReducer from "./Filter/filterSlice";
import carMapReducer from "./CarMap/carMapSlice";
import carsReducer from "./Car/carSlice";
import selectedCarReducer from "./Car/selectedCarSlice";
import carCategoryReducer from "./CarCategory/carCategorySlice";
import amenityReducer from "./CarCategory/amenitySlice";
import carByStatusReducer from "./Car/carSliceByStatus";
const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filterReducer,
    carMap: carMapReducer,
    carsByStatus: carByStatusReducer,
    cars: carsReducer,
    selectedCar: selectedCarReducer,
    carCategory: carCategoryReducer,
    amenity: amenityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
