import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../pipedrive-logo.svg";
import AddEmployee from "./AddEmployee";

export default function Navigation({ employees, setEmployees }) {
  const location = useLocation();

  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid className="m-3">
        <Navbar.Brand>
          <img src={logo} height="45" alt="Pipedrive Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Employees
            </Nav.Link>
            <Nav.Link as={Link} to="/tribes">
              Tribes
            </Nav.Link>
          </Nav>
          {/* Only render Add Employee button on Employees site */}
          {location.pathname === "/" && (
            <AddEmployee employees={employees} setEmployees={setEmployees} />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
