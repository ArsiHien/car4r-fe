import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCarCategories,
  fetchCarCategoryTypes,
  addCarCategory,
  updateCarCategory,
  deleteCarCategory,
  fetchCarCategory,
} from "./carCategoryActions";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";

interface CarCategoriesState {
  carCategories: CarCategoryDetail[];
  carCategoryTypes: string[];
  loading: boolean;
  error: string | null;
}

const initialState: CarCategoriesState = {
  carCategories: [],
  carCategoryTypes: [],
  loading: false,
  error: null,
};

const handlePending = (state: CarCategoriesState) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (
  state: CarCategoriesState,
  action: PayloadAction<unknown>
) => {
  state.loading = false;
  state.error =
    (action.payload as { message?: string })?.message || "An error occurred";
};

const carCategorySlice = createSlice({
  name: "carCategories",
  initialState,
  reducers: {
    clearCarCategoryList: (state) => {
      state.carCategories = [];
      state.carCategoryTypes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarCategories.pending, handlePending)
      .addCase(
        fetchCarCategories.fulfilled,
        (state, action: PayloadAction<CarCategoryDetail[]>) => {
          state.carCategories = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCarCategories.rejected, handleRejected)
      .addCase(fetchCarCategoryTypes.pending, handlePending)
      .addCase(
        fetchCarCategoryTypes.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.carCategoryTypes = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCarCategoryTypes.rejected, handleRejected)
      .addCase(addCarCategory.pending, handlePending)
      .addCase(
        addCarCategory.fulfilled,
        (state, action: PayloadAction<CarCategoryDetail>) => {
          state.carCategories.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(addCarCategory.rejected, handleRejected)
      .addCase(updateCarCategory.pending, handlePending)
      .addCase(
        updateCarCategory.fulfilled,
        (state, action: PayloadAction<CarCategoryDetail>) => {
          const index = state.carCategories.findIndex(
            (category) => category.id === action.payload.id
          );
          if (index !== -1) {
            state.carCategories[index] = action.payload;
          }
          state.loading = false;
        }
      )
      .addCase(updateCarCategory.rejected, handleRejected)
      .addCase(deleteCarCategory.pending, handlePending)
      .addCase(
        deleteCarCategory.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.carCategories = state.carCategories.filter(
            (category) => category.id !== action.payload
          );
          state.loading = false;
        }
      )
      .addCase(deleteCarCategory.rejected, handleRejected)
      .addCase(fetchCarCategory.pending, handlePending)
      .addCase(fetchCarCategory.fulfilled, (state, action: PayloadAction<CarCategoryDetail>) => {
        state.carCategories.push(action.payload);
        state.loading = false;
      })
      .addCase(fetchCarCategory.rejected, handleRejected);
  },
});

export const { clearCarCategoryList } = carCategorySlice.actions;
export default carCategorySlice.reducer;
