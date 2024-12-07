import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Car {
  id: string;
  licensePlate: string;
  categoryName: string;
  categoryType: string;
  mainImage: string;
  status: string;
  currentBookingStartDate: Date;
  currentBookingReturnDate: Date;
  currentBookingLoanPlace: string;
  currentBookingReturnPlace: string;
  currentBookingTotalPrice: string;
}

export interface CarByStatusResponse {
  status: string;
  numberOfCar: number;
  cars: Car[];
}

const API_URL = "http://localhost:8080/api/cars";

export const fetchCarsByCategory = createAsyncThunk<Car[], string>(
  "cars/fetchByCategory",
  async (carCategoryId) => {
    const response = await axios.get(`${API_URL}/${carCategoryId}`);
    return response.data;
  }
);

export const fetchCarsByStatus = createAsyncThunk<
  CarByStatusResponse,
  string
>("cars/fetchByStatus", async (status) => {
  const response = await axios.get(`${API_URL}/status/${status}`);
  return response.data;
});

export const addCar = createAsyncThunk<Car, Car>(
  "cars/addCar",
  async (carData) => {
    const response = await axios.post(API_URL, carData);
    return response.data;
  }
);

export const updateCar = createAsyncThunk<Car, { id: string; carData: Car }>(
  "cars/updateCar",
  async ({ id, carData }) => {
    const response = await axios.put(`${API_URL}/${id}`, carData);
    return response.data;
  }
);

export const deleteCar = createAsyncThunk<string, string>(
  "cars/deleteCar",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
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

const carsSlice = createSlice({
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

export const { clearCarList } = carsSlice.actions;
export default carsSlice.reducer;
