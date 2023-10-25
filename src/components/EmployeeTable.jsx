import { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Table from "react-bootstrap/Table";
import { instance } from "../index";


export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  async function handleDelete(id) {
    try {
      await instance.delete(`/employees/${id}`)
      setEmployees(employees.filter((x) => x.id !== id));
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchData() {
    setIsLoading(true)
    try {
      const response = await instance.get('/employees')
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <Container className="mt-3">
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Tribe</th>
            {/* <th>Start Date</th> */}
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
              {/* <td>{employee.startDate}</td> */}
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
      {isLoading && (
        <Row className="justify-content-center">
          <Spinner />
        </Row>
      )}
    </Container>
  );
}
