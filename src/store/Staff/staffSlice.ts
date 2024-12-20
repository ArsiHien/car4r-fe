import { createSlice } from "@reduxjs/toolkit";

import { StaffReponse } from "../../types/Staff";
import { createStaff, deleteStaff, fetchStaffById, fetchStaffs } from "./StaffAction";

interface StaffState {
  staffList: StaffReponse[];
  selectedStaff: StaffReponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: StaffState = {
  staffList: [],
  selectedStaff: null,
  loading: false,
  error: null,
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedStaff: (state) => {
      state.selectedStaff = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all staff
      .addCase(fetchStaffs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStaffs.fulfilled, (state, action) => {
        state.loading = false;
        state.staffList = action.payload;
      })
      .addCase(fetchStaffs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch a specific staff
      .addCase(fetchStaffById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStaffById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedStaff = action.payload;
      })
      .addCase(fetchStaffById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Create a new staff
      .addCase(createStaff.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStaff.fulfilled, (state, action) => {
        state.loading = false;
        state.staffList.push(action.payload);
      })
      .addCase(createStaff.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete a staff
      .addCase(deleteStaff.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStaff.fulfilled, (state, action) => {
        state.loading = false;
        state.staffList = state.staffList.filter(
          (staff) => staff.id !== action.meta.arg
        );
      })
      .addCase(deleteStaff.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearSelectedStaff } = staffSlice.actions;

export default staffSlice.reducer;
