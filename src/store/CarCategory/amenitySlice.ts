import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api";

interface AmenityResponse {
  id: string;
  name: string;
}

export const fetchAmenities = createAsyncThunk<AmenityResponse[]>(
  "amenities/fetchAll",
  async () => {
    const response = await axios.get(`${API_URL}/amenities`);
    return response.data;
  }
);

interface AmenitiesState {
  amenities: AmenityResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: AmenitiesState = {
  amenities: [],
  loading: false,
  error: null,
};

const amenitiesSlice = createSlice({
  name: "amenities",
  initialState,
  reducers: {
    clearAmenities: (state) => {
      state.amenities = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAmenities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAmenities.fulfilled,
        (state, action: PayloadAction<AmenityResponse[]>) => {
          state.amenities = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchAmenities.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch amenities";
        state.loading = false;
      });
  },
});

export const { clearAmenities } = amenitiesSlice.actions;
export default amenitiesSlice.reducer;
