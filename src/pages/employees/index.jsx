import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEmployeeModal from "../../components/AddEmployeeModal";
import EmployeeTable from "../../components/EmployeeTable";
import { fetchEmployees } from "../../store/actions/employees";

export default function Employees() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  const isLoading = useSelector((state) => state.employees.loading);
  const errorLoading = useSelector((state) => state.employees.error);
  const show = useSelector((state) => state.modal.show);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <>
      <EmployeeTable
        employees={employees}
        isLoading={isLoading}
        errorLoading={errorLoading}
      />
      <AddEmployeeModal show={show} />
    </>
  );
}
