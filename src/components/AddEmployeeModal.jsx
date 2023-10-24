import { FloatingLabel, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddEmployeeModal({ show, handleClose, handleShow }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form className="p-4">
        <FormGroup className="mb-3">
          <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
            <Form.Control required type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPosition"
            label="Position"
            className="mb-3"
          >
            <Form.Control required type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel label="Tribe" className="mb-3">
            <Form.Select>
              <option>Gears</option>
              <option>InternStelar</option>
              <option>Other Engineering</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDate"
            label="Start date"
            className="mb-3"
          >
            <Form.Control required type="date" />
          </FloatingLabel>
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
