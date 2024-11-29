import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  types: string[];
  capacities: string[];
  maxPrice: number;
}

const initialState: FilterState = {
  types: [],
  capacities: [],
  maxPrice: 100,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleType: (state, action: PayloadAction<string>) => {
      const type = action.payload;
      if (state.types.includes(type)) {
        state.types = state.types.filter((t) => t !== type);
      } else {
        state.types.push(type);
      }
    },
    setType: (state, action: PayloadAction<string>) => {
      state.types = [action.payload];
    },
    toggleCapacity: (state, action: PayloadAction<string>) => {
      const capacity = action.payload;
      if (state.capacities.includes(capacity)) {
        state.capacities = state.capacities.filter((c) => c !== capacity);
      } else {
        state.capacities.push(capacity);
      }
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  toggleType,
  setType,
  toggleCapacity,
  setMaxPrice,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
