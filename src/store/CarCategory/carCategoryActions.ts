import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CarCategoryDetail } from "../../types/CarCategoryDetail";
import { CarCategoryBasic } from "../../types/CarCategoryBasic";

const API_URL = "http://localhost:8080/api/car-category";

export const fetchCarCategories = createAsyncThunk<CarCategoryDetail[]>(
  "carCategories/fetchAll",
  async () => {
    const response = await axios.get(`${API_URL}/detail`);
    return response.data;
  }
);

export const fetchCarCategory = createAsyncThunk<CarCategoryDetail, string>(
  "carCategories/fetchOne",
  async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
);

export const fetchCarCategoriesBasic = createAsyncThunk<CarCategoryBasic[]>(
  "carCategoriesBasic/fetchAll",
  async () => {
    const response = await axios.get(`${API_URL}/basic`);
    return response.data;
  }
);

export const fetchCarCategoryTypes = createAsyncThunk<string[]>(
  "carCategories/fetchTypes",
  async () => {
    const response = await axios.get(`${API_URL}/types`);
    return response.data;
  }
);

export const addCarCategory = createAsyncThunk<CarCategoryDetail, FormData>(
  "carCategories/add",
  async (carCategoryData) => {
    const response = await axios.post(API_URL, carCategoryData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data)
    return response.data;
  }
);

export const updateCarCategory = createAsyncThunk<
CarCategoryDetail,
  { id: string; carCategoryData: FormData }
>("carCategories/update", async ({ id, carCategoryData }) => {
  const response = await axios.put(`${API_URL}/${id}`, carCategoryData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
});

export const deleteCarCategory = createAsyncThunk<string, string>(
  "carCategories/delete",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);
