import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Car, addCarApi } from "../../types/Car";

export interface CarByCategoryResponse {
  categoryId: string;
  numberOfCar: number;
  cars: Car[];
}

const API_URL = "http://localhost:8080/api/cars";

export const fetchCarsByCategory = createAsyncThunk<CarByCategoryResponse, string>(
  "cars/fetchByCategory",
  async (carCategoryId) => {
    const response = await axios.get(`${API_URL}/${carCategoryId}`);
    console.log("Fetched cars:", response.data); // Log the response for debugging
    return response.data; // Ensure this matches the expected structure
  }
);

export const fetchCarsByStatus = createAsyncThunk<
  CarByCategoryResponse,
  string
>("cars/fetchByStatus", async (status) => {
  const response = await axios.get(`${API_URL}/status/${status}`);
  return response.data;
});

export const addCar = createAsyncThunk<Car, addCarApi>(
  "cars/addCar",
  async (carData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, carData);
      return response.data;
    } catch (error: any) {
      // Handle the error and return a rejected value
      return rejectWithValue(error.response?.data || "Failed to add car");
    }
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

// const carsSlice = createSlice({
//   name: "cars",
//   initialState,
//   reducers: {
//     clearCarList: (state) => {
//       state.cars = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCarsByStatus.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         fetchCarsByStatus.fulfilled,
//         (state, action: PayloadAction<CarByStatusResponse>) => {
//           state.cars = action.payload.cars;
//           state.loading = false;
//           state.error = null;
//         }
//       )
//       .addCase(fetchCarsByStatus.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Failed to fetch cars";
//       });
//   },
// });

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
      .addCase(fetchCarsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCarsByCategory.fulfilled,
        (state, action: PayloadAction<CarByCategoryResponse>) => {
          state.cars = action.payload.cars; // Update the cars state
          state.loading = false;
          state.error = null; // Clear any previous errors
        }
      )
      .addCase(fetchCarsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cars";
      });
  },
});

export const { clearCarList } = carsSlice.actions;
export default carsSlice.reducer;