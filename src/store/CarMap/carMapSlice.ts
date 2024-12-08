import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export interface CarRoute {
  id: string;
  carId: string;
  latitude: number;
  longitude: number;
  sequenceOrder: number;
}

export const fetchCarRoute = createAsyncThunk<CarRoute[], string>(
  "cars/fetchCarRoute",
  async (carId) => {
    const response = await axios.get(
      `http://localhost:8080/api/cars/route/${carId}`
    );
    return response.data;
  }
);

interface CarMapState {
  carRoutes: CarRoute[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: CarMapState = {
  carRoutes: [],
  isLoading: false,
  isError: false,
};

export const carMapSlice = createSlice({
  name: "carMap",
  initialState,
  reducers: {
    clearCarRoutes: (state) => {
      state.carRoutes = [];
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCarRoute.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(fetchCarRoute.fulfilled, (state, action: PayloadAction<CarRoute[]>) => {
      state.carRoutes = action.payload;
      state.isLoading = false;
      state.isError = false;
    })
    .addCase(fetchCarRoute.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    })
  }
})

export const { clearCarRoutes } = carMapSlice.actions;
export default carMapSlice.reducer;
