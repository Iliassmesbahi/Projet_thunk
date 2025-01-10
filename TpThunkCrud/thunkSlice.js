import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createStagiaire = createAsyncThunk("thunk/createStagiaire", async (data) => {
  const response = await axios.post("http://localhost:5000/stagiaires", data);
  return response.data;
});

export const modifierStagiaire = createAsyncThunk("thunk/modifierStagiaire", async (data) => {
  const response = await axios.put(`http://localhost:5000/stagiaires/${data.id}`, data);
  return response.data;
});

export const deleteStagiaire = createAsyncThunk("thunk/deleteStagiaire", async (id) => {
  await axios.delete(`http://localhost:5000/stagiaires/${id}`);
  return id;
});

export const afficheStagiaire = createAsyncThunk("thunk/afficheStagiaire", async () => {
  const response = await axios.get("http://localhost:5000/stagiaires");
  return response.data;
});

export const slice = createSlice({
  name: "tutoo",
  initialState: {
    loading: false,
    list: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(afficheStagiaire.pending, (state) => {
        state.loading = true;
      })
      .addCase(afficheStagiaire.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(afficheStagiaire.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createStagiaire.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(modifierStagiaire.fulfilled, (state, action) => {
        const index = state.list.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteStagiaire.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload);
      });
  },
});

export default slice.reducer;
