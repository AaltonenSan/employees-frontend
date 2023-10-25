import { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Table from "react-bootstrap/Table";
import { instance } from "../index";

export default function TribesTable() {
  const [tribes, setTribes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await instance.get('/tribes')
      setTribes(response.data);
    } catch (error) {
        console.error(error)
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
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading && 
          tribes.map((tribe) => (
            <tr key={tribe.id}>
              <td>{tribe.id}</td>
              <td>{tribe.name}</td>
              <td>{tribe.department}</td>
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


