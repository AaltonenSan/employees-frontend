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
  return async (dispatch, getState) => {
    /* 
      use redux store as cache and don't make api call if employees already exist
      this would need extra logic to handle pagination
    */
    const { employees } = getState();
    if (employees.list.length > 0) return;

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
