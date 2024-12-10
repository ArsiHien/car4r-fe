import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Car,addCarApi } from "../../types/Car";

export interface CarByStatusResponse {
  status: string;
  numberOfCar: number;
  cars: Car[];
}

const API_URL = "http://localhost:8080/api/cars";

export const fetchCarsByStatus = createAsyncThunk<
  CarByStatusResponse,
  string
>("cars/fetchByStatus", async (status) => {
  const response = await axios.get(`${API_URL}/status/${status}`);
  return response.data;
});

export const addCar = createAsyncThunk<Car,addCarApi>(
  "cars/addCar",
  async (carData) => {
    const response = await axios.post(API_URL, carData);
    return response.data;
  }
);

interface CarsState {
    cars: Car[];
    numberOfCar: number;
    status: string;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: CarsState = {
    cars: [],
    numberOfCar: 0,
    status: "",
    loading: false,
    error: null,
  };
  
  const carSliceByStatus = createSlice({
    name: "cars",
    initialState,
    reducers: {
      clearCarList: (state) => {
        state.cars = [];
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCarsByStatus.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(
          fetchCarsByStatus.fulfilled,
          (state, action: PayloadAction<CarByStatusResponse>) => {
            state.cars = action.payload.cars;
            state.numberOfCar = action.payload.numberOfCar;
            state.status = action.payload.status;
            state.loading = false;
          }
        )
        .addCase(fetchCarsByStatus.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to fetch cars";
        });
    },
  });
  
  export const { clearCarList } = carSliceByStatus.actions;
  export default carSliceByStatus.reducer;