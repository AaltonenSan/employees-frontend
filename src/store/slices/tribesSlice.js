import { createSlice } from "@reduxjs/toolkit";

export const tribesSlice = createSlice({
  name: "tribes",
  initialState: {
    loading: false,
    error: false,
    list: [],
  },
  reducers: {
    loadTribes: (state) => {
      state.loading = true;
      state.error = false;
    },
    loadTribesSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.list = action.payload;
    },
    loadTribesFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { loadTribes, loadTribesSuccess, loadTribesFailure } =
  tribesSlice.actions;
export default tribesSlice.reducer;
