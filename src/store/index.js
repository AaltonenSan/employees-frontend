import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./slices/employeesSlice";
import modalReducer from "./slices/modalSlice";
import tribesReducer from "./slices/tribesSlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
    tribes: tribesReducer,
  },
});
