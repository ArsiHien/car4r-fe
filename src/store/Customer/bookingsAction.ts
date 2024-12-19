import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBookings = async (customerId: string) => {
  const response = await axios.get(
    `http://localhost:8080/api/customers/${customerId}/bookings`
  );
  return response.data;
};

export const getBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async (customerId: string, thunkAPI) => {
    try {
      return await fetchBookings(customerId);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createReview = createAsyncThunk(
  "reviews/createReview",
  async (
    {
      customerId,
      bookingId,
      review,
      rating,
      reviewDate,
    }: {
      customerId: string;
      bookingId: string;
      review: string;
      rating: number;
      reviewDate: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/reviews`, {
        customerId,
        bookingId,
        review,
        rating,
        reviewDate,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  "reviews/updateReview",
  async (
    {
      reviewId,
      review,
      rating,
      reviewDate,
    }: { reviewId: string; review: string; rating: number; reviewDate: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/reviews/${reviewId}`,
        { review, rating, reviewDate }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const cancelBooking = createAsyncThunk(
  "bookings/cancelBooking",
  async (
    { bookingId, status }: { bookingId: string; status: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/bookings/${bookingId}/status`,
        null,
        {
          params: { status },
        }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
