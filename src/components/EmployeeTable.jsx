import { forwardRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import AddEmployeeModal from "./AddEmployeeModal";

const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    tribe: "InternStelar",
    startDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Accountant",
    tribe: "Billing",
    startDate: "2023-04-25",
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Project Manager",
    tribe: "Gears",
    startDate: "2022-04-01",
  },
  {
    id: 4,
    name: "Alice Brown",
    position: "Marketing Specialist",
    tribe: "InternStelar",
    startDate: "2022-03-15",
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Accountant",
    tribe: "Billing",
    startDate: "2022-05-12",
  },
  {
    id: 6,
    name: "Michael Lee",
    position: "Intern",
    tribe: "InternStelar",
    startDate: "2023-06-22",
  },
];

const EmployeeTable = forwardRef((modalRef) => {
  return (
    <Container className="mt-3">
      <AddEmployeeModal ref={modalRef} />
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
                <Button className="delete-button" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
});

export default EmployeeTable;
