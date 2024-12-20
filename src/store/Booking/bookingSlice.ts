import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CarCategoryDetail } from '../../types/CarCategoryDetail';

const loadSelectedCarFromStorage = () => {
  try {
    const savedCar = localStorage.getItem('selectedCar');
    return savedCar ? JSON.parse(savedCar) : null;
  } catch (error) {
    return null;
  }
};

const loadTotalPriceFromStorage = () => {
  try {
    const savedPrice = localStorage.getItem('totalPrice');
    return savedPrice ? JSON.parse(savedPrice) : 0;
  } catch (error) {
    return 0;
  }
};

interface BookingState {
  selectedCar: CarCategoryDetail | null;
  totalPrice: number;
  startDate: string | null;
  returnDate: string | null;
}

const initialState: BookingState = {
  selectedCar: loadSelectedCarFromStorage(),
  totalPrice: loadTotalPriceFromStorage(),
  startDate: null,
  returnDate: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedCar: (state, action: PayloadAction<CarCategoryDetail>) => {
      state.selectedCar = action.payload;
      localStorage.setItem('selectedCar', JSON.stringify(action.payload));
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
      localStorage.removeItem('selectedCar');
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
      localStorage.setItem('totalPrice', JSON.stringify(action.payload));
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<string>) => {
      state.returnDate = action.payload;
    },
  },
});

export const { setSelectedCar, clearSelectedCar, setTotalPrice, setStartDate, setReturnDate } = bookingSlice.actions;
export default bookingSlice.reducer;
