import { createSlice } from "@reduxjs/toolkit";
import { createReview, getBookings, updateReview } from "./bookingsAction";
import { BookingResponse } from "../../types/Booking";

interface BookingState {
  currentBookings: BookingResponse[];
  pastBookings: BookingResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  currentBookings: [],
  pastBookings: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    updateBookingReview: (state, action) => {
      const { bookingId, review } = action.payload;

      const bookingIndex = state.currentBookings.findIndex(
        (b) => b.id === bookingId
      );
      if (bookingIndex !== -1) {
        state.currentBookings[bookingIndex] = {
          ...state.currentBookings[bookingIndex], // Spread the old booking object
          review,
        };
      } else {
        const pastBookingIndex = state.pastBookings.findIndex(
          (b) => b.id === bookingId
        );
        if (pastBookingIndex !== -1) {
          state.pastBookings[pastBookingIndex] = {
            ...state.pastBookings[pastBookingIndex],
            review,
          };
        }
      }
    },
    updateBookingStatus: (state, action) => {
      const { bookingId, status } = action.payload;

      const bookingIndex = state.currentBookings.findIndex(
        (b) => b.id === bookingId
      );
      if (bookingIndex !== -1) {
        state.currentBookings[bookingIndex] = {
          ...state.currentBookings[bookingIndex],
          status,
        };
      } else {
        const pastBookingIndex = state.pastBookings.findIndex(
          (b) => b.id === bookingId
        );
        if (pastBookingIndex !== -1) {
          state.pastBookings[pastBookingIndex] = {
            ...state.pastBookings[pastBookingIndex],
            status,
          };
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBookings = action.payload.currentBookings;
        state.pastBookings = action.payload.pastBookings;
      })
      .addCase(getBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBookings = state.currentBookings.map((booking) =>
          booking.id === action.payload.bookingId
            ? { ...booking, review: action.payload }
            : booking
        );
        state.currentBookings = updatedBookings;
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(updateReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBookings = state.currentBookings.map((booking) =>
          booking.id === action.payload.bookingId
            ? { ...booking, review: action.payload }
            : booking
        );
        state.currentBookings = updatedBookings;
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateBookingReview, updateBookingStatus } =
  bookingSlice.actions;
export default bookingSlice.reducer;
