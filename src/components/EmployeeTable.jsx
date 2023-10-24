import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

export default function EmployeeTable({ employees, setEmployees }) {
  function handleDelete(id) {
    setEmployees(employees.filter((x) => x.id !== id));
  }

  return (
    <Container className="mt-3">
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Tribe</th>
            <th>Start Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.tribe}</td>
              <td>{employee.startDate}</td>
              <td>
                <Button
                  className="delete-button"
                  size="sm"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
