import { instance } from "../../index";
import {
  addEmployee,
  deleteEmployee,
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
  updateEmployee,
} from "../slices/employeesSlice";

export function fetchEmployees() {
  return async (dispatch) => {
    dispatch(loadEmployees());

    try {
      const response = await instance.get("/employees");
      dispatch(loadEmployeesSuccess(response.data));
    } catch (error) {
      dispatch(loadEmployeesFailure());
    }
  };
}

export function deleteEmployeeId(id) {
  return async (dispatch) => {
    try {
      await instance.delete(`/employees/${id}`);
      dispatch(deleteEmployee(id));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addNewEmployee(employee) {
  return async (dispatch) => {
    try {
      const response = await instance.post("/employees", employee);
      const createdEmployee = response.data.createdEmployee;
      dispatch(addEmployee(createdEmployee));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateEmployeeId(id, employee) {
  return async (dispatch) => {
    try {
      const response = await instance.put(`/employees/${id}`, employee);
      const updatedEmployee = await response.data;
      dispatch(updateEmployee(updatedEmployee));
    } catch (error) {
      console.log(error);
    }
  };
}
