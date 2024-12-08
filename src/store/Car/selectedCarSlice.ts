import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedCarState {
  selectedCarID: string | null;
}

const initialState: SelectedCarState = {
  selectedCarID: null,
};

const selectedCarSlice = createSlice({
  name: "selectedCar",
  initialState,
  reducers: {
    setSelectedCarID: (state, action: PayloadAction<string | null>) => {
      state.selectedCarID = action.payload;
    },
  },
});

export const { setSelectedCarID } = selectedCarSlice.actions;
export default selectedCarSlice.reducer;
