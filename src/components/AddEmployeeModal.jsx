import Modal from "react-bootstrap/Modal";
// import { tribes } from "./TribesTable";
import AddEmployeeForm from "./AddEmployeeForm";

export default function AddEmployeeModal({
  show,
  handleClose,
  employees,
  setEmployees,
  updateEmployee,
  setUpdateEmployee,
}) {
  //validation starts here
  //const currentDate = new Date().toISOString().split("T")[0];
  return (
    <Modal show={show} onHide={handleClose}>
      <AddEmployeeForm
        employees={employees}
        setEmployees={setEmployees}
        handleClose={handleClose}
        updateEmployee={updateEmployee}
        setUpdateEmployee={setUpdateEmployee}
      />
    </Modal>
  );
}
