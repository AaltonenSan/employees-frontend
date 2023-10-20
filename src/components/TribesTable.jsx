import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const tribes = [
  {
    id: 1,
    name: "InternStelar",
    department: "Other Engineering",
  },
  {
    id: 2,
    name: "Billing",
    department: "Gears",
  },
  {
    id: 3,
    name: "Gear",
    department: "Billing",
  },
];

export default function TribesTable() {
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
          {tribes.map((tribe) => (
            <tr key={tribe.id}>
              <td>{tribe.id}</td>
              <td>{tribe.name}</td>
              <td>{tribe.department}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
