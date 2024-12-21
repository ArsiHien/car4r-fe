import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StaffRequest, StaffReponse } from "../../types";
import { StaffCreationResponse } from "../../types/Staff";

// Base URL for the staff API
const BASE_URL = "http://localhost:8080/api/staffs";

// Fetch all staff
export const fetchStaffs = createAsyncThunk<StaffReponse[], void>(
  "staff/fetchStaffs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<StaffReponse[]>(BASE_URL);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch staff list");
    }
  }
);

// Fetch a specific staff by ID
export const fetchStaffById = createAsyncThunk<StaffReponse, string>(
  "staff/fetchStaffById",
  async (staffId, { rejectWithValue }) => {
    try {
      const response = await axios.get<StaffReponse>(`${BASE_URL}/${staffId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || `Failed to fetch staff with ID ${staffId}`);
    }
  }
);

// Create a new staff
export const createStaff = createAsyncThunk<StaffCreationResponse, StaffRequest>(
  "staff/createStaff",
  async (staffData, { rejectWithValue }) => {
    try {
      const response = await axios.post<StaffCreationResponse>(BASE_URL, staffData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to create new staff");
    }
  }
);

// Delete a staff by ID
export const deleteStaff = createAsyncThunk<string, string>(
  "staff/deleteStaff",
  async (staffId, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/${staffId}`);
      return staffId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || `Failed to delete staff with ID ${staffId}`);
    }
  }
);
