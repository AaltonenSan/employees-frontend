import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    loading: false,
    error: false,
    success: false,
    list: [],
  },
  reducers: {
    loadEmployees: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    },
    loadEmployeesSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.list = action.payload;
    },
    loadEmployeesFailure: (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    },
    deleteEmployee: (state, action) => {
      state.list = state.list.filter((x) => x.id !== action.payload);
    },
    addEmployee: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    updateEmployee: (state, action) => {
      const updatedEmployee = action.payload;
      state.list = state.list.map((x) =>
        x.id === updatedEmployee.id ? updatedEmployee : x
      );
    },
  },
});

export const {
  loadEmployees,
  loadEmployeesSuccess,
  loadEmployeesFailure,
  deleteEmployee,
  updateEmployee,
  addEmployee,
} = employeesSlice.actions;

export default employeesSlice.reducer;
