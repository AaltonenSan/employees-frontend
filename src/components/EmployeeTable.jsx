import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployeeId, fetchEmployees } from "../store/actions/employees";
import { showModalUpdate } from "../store/actions/modal";
import AddEmployeeModal from "./AddEmployeeModal";

export default function EmployeeTable() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  const isLoading = useSelector((state) => state.employees.loading);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <Container className="mt-3">
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Tribe</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.title}</td>
                <td>{employee.tribe.name}</td>
                <td style={{ width: "5%" }}>
                  <Button
                    className="table-button"
                    size="sm"
                    onClick={() => dispatch(deleteEmployeeId(employee.id))}
                  >
                    Delete
                  </Button>
                </td>
                <td style={{ width: "5%" }}>
                  <Button
                    className="table-button"
                    size="sm"
                    onClick={() => dispatch(showModalUpdate(employee))}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {isLoading && (
        <Row className="justify-content-center">
          <Spinner />
        </Row>
      )}
      <AddEmployeeModal />
    </Container>
  );
}
