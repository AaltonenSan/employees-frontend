import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../pipedrive-logo.svg";

const Navigation = ({ modalRef }) => {
  const location = useLocation();
  const openModal = () => {
    if (modalRef && modalRef.current) {
      modalRef.current.showModal();
    }
  };

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
            <Button className="add-employee-button" onClick={() => openModal()}>
              + Employee
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
