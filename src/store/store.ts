import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authen/authenSlice";
import userReducer from "./User/userSlice";
import filterReducer from "./Filter/filterSlice";
import bookingReducer from "./Booking/bookingSlice";
import carMapReducer from "./CarMap/carMapSlice";
import carsReducer from "./Car/carSlice";
import selectedCarReducer from "./Car/selectedCarSlice";
import carCategoryReducer from "./CarCategory/carCategorySlice";
import amenityReducer from "./CarCategory/amenitySlice";
import carByStatusReducer from "./Car/carSliceByStatus";
import customerBookings from "./Customer/bookingSlice";
import carCategoryBasicReducer from "./CarCategory/carCategoryBasicSlice";
import staffReducer from "./Staff/StaffSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    booking: bookingReducer,
    filters: filterReducer,
    carMap: carMapReducer,
    carsByStatus: carByStatusReducer,
    cars: carsReducer,
    selectedCar: selectedCarReducer,
    carCategory: carCategoryReducer,
    carCategoryBasic: carCategoryBasicReducer,
    amenity: amenityReducer,
    customerBookings: customerBookings,
    staff: staffReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
