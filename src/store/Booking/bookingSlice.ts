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
}

const initialState: BookingState = {
  selectedCar: loadSelectedCarFromStorage(),
  totalPrice: loadTotalPriceFromStorage(),
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
  },
});

export const { setSelectedCar, clearSelectedCar, setTotalPrice } = bookingSlice.actions;
export default bookingSlice.reducer;
