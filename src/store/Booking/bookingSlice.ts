import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CarCategoryDetail } from '../../types/CarCategoryDetail';

interface BookingState {
  selectedCar: CarCategoryDetail | null;
}

const initialState: BookingState = {
  selectedCar: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedCar: (state, action: PayloadAction<CarCategoryDetail>) => {
      state.selectedCar = action.payload;
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
    },
  },
});

export const { setSelectedCar, clearSelectedCar } = bookingSlice.actions;
export default bookingSlice.reducer;
