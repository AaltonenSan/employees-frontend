import { FormGroup, FormLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddEmployeeModal({ show, handleClose, handleShow }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form className="p-3">
        <FormGroup className="mb-3">
          <FormLabel>Name</FormLabel>
          <Form.Control
            required
            type="text"
            placeholder="Employee name"
            className="mb-3"
          />

          <FormLabel>Position</FormLabel>
          <Form.Control
            required
            type="text"
            placeholder="Employee position"
            className="mb-3"
          />

          <FormLabel>Tribe</FormLabel>
          <Form.Select className="mb-3">
            <option>Gears</option>
            <option>InternStelar</option>
            <option>Other Engineering</option>
          </Form.Select>

          <FormLabel>Start date</FormLabel>
          <Form.Control required type="date" className="mb-3" />
        </FormGroup>
        <div className="row justify-content-around">
          <Button className="delete-button col-5" onClick={handleClose}>
            Close
          </Button>
          <Button className="add-employee-button col-5"> Add </Button>
        </div>
      </Form>
    </Modal>
  );
}
