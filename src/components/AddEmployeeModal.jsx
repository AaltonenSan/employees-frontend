import { FormGroup, FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddEmployeeModal = ({ modalRef }) => {
  return (
    <dialog ref={modalRef}>
      <Form>
        <FormGroup>
          <FormLabel>Name</FormLabel>
        </FormGroup>
      </Form>
    </dialog>
  );
};

export default AddEmployeeModal;
