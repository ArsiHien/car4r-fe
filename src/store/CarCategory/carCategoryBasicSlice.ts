import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCarCategoriesBasic,
  fetchCarCategoryTypes,
  addCarCategory,
  updateCarCategory,
  deleteCarCategory,
} from "./carCategoryActions";
import { CarCategoryBasic } from "../../types/CarCategoryBasic";

interface CarCategoriesBasicState {
  carCategories: CarCategoryBasic[];
  carCategoryTypes: string[];
  loading: boolean;
  error: string | null;
}

const initialState: CarCategoriesBasicState = {
  carCategories: [],
  carCategoryTypes: [],
  loading: false,
  error: null,
};

const handlePending = (state: CarCategoriesBasicState) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (
  state: CarCategoriesBasicState,
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
      .addCase(fetchCarCategoriesBasic.pending, handlePending)
      .addCase(
        fetchCarCategoriesBasic.fulfilled,
        (state, action: PayloadAction<CarCategoryBasic[]>) => {
          console.log('action: ', action.payload)
          state.carCategories = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCarCategoriesBasic.rejected, handleRejected)
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
        (state, action: PayloadAction<CarCategoryBasic>) => {
          state.carCategories.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(addCarCategory.rejected, handleRejected)
      .addCase(updateCarCategory.pending, handlePending)
      .addCase(
        updateCarCategory.fulfilled,
        (state, action: PayloadAction<CarCategoryBasic>) => {
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
      .addCase(deleteCarCategory.rejected, handleRejected);
  },
});

export const { clearCarCategoryList } = carCategorySlice.actions;
export default carCategorySlice.reducer;
