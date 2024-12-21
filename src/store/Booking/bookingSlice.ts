import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";

const loadSelectedCarFromStorage = () => {
  try {
    const savedCar = localStorage.getItem("selectedCar");
    return savedCar ? JSON.parse(savedCar) : null;
  } catch (error) {
    return null;
  }
};

// const loadTotalPriceFromStorage = () => {
//   try {
//     const savedPrice = localStorage.getItem("totalPrice");
//     return savedPrice ? JSON.parse(savedPrice) : 0;
//   } catch (error) {
//     return 0;
//   }
// };

interface BookingState {
  selectedCar: CarCategoryDetail | null;
  totalPrice: number;
  startDate: string | null;
  returnDate: string | null;
  pickupPlace: string | null;
  dropOffPlace: string | null;
  paymentMethod: string;
}

const initialState: BookingState = {
  selectedCar: loadSelectedCarFromStorage(),
  totalPrice: 0,
  startDate: null,
  returnDate: null,
  pickupPlace: null,
  dropOffPlace: null,
  paymentMethod: "Cash",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setSelectedCar: (state, action: PayloadAction<CarCategoryDetail>) => {
      state.selectedCar = action.payload;
      localStorage.setItem("selectedCar", JSON.stringify(action.payload));
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
      localStorage.removeItem("selectedCar");
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
      localStorage.setItem("totalPrice", JSON.stringify(action.payload));
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<string>) => {
      state.returnDate = action.payload;
    },
    setPickupPlace: (state, action: PayloadAction<string>) => {
      state.pickupPlace = action.payload;
    },
    setDropOffPlace: (state, action: PayloadAction<string>) => {
      state.dropOffPlace = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
    resetBookingState: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("selectedCar");
      localStorage.removeItem("totalPrice");
    },
  },
});

export const {
  setSelectedCar,
  clearSelectedCar,
  setTotalPrice,
  setStartDate,
  setReturnDate,
  setPickupPlace,
  setDropOffPlace,
  setPaymentMethod,
  resetBookingState,
} = bookingSlice.actions;

export default bookingSlice.reducer;
