import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import AddEmployeeModal from "./AddEmployeeModal";

export default function AddEmployee({ employees, setEmployees }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="add-employee-button" onClick={handleShow}>
        + Employee
      </Button>
      <AddEmployeeModal
        show={show}
        handleClose={handleClose}
        employees={employees}
        setEmployees={setEmployees}
      />
    </>
  );
}
