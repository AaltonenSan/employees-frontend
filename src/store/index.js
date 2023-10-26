import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./slices/employeesSlice";
import modalReducer from "./slices/modalSlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
  },
});
