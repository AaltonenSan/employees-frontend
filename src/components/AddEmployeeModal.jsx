import { Formik, useFormik } from "formik";
import { FloatingLabel, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { tribes } from "./TribesTable";

function ErrorMessage({ error }) {
  return <div className="form-error-message">{error}</div>;
}

export default function AddEmployeeModal({
  show,
  handleClose,
  employees,
  setEmployees,
}) {
  const currentDate = new Date().toISOString().split("T")[0];

  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      tribe: tribes[0].name,
      startDate: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validate: (values) => {
      const errors = {};
      const today = new Date();
      const startDate = new Date(values.startDate);

      if (!values.name) {
        errors.name = "Name of the employee is needed";
      } else if (!values.name.match(/^[a-zA-Z]+$/)) {
        errors.name = "Name must consist only letters";
      }

      if (!values.position) {
        errors.position = "Enter position";
      } else if (!values.position.match(/^[a-zA-Z]+$/)) {
        errors.position = "Position must consist only letters";
      }

      if (!values.startDate) {
        errors.startDate = "Enter the start date";
      } else if (today < startDate) {
        errors.startDate = "Start date cannot be in the future";
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const newEmployee = {
          id: employees.length + 1,
          name: values.name,
          position: values.position,
          tribe: values.tribe,
          startDate: values.startDate,
        };
        setEmployees([...employees, newEmployee]);
        resetForm();
        handleClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Formik>
        <Form className="p-4" onSubmit={formik.handleSubmit}>
          <FormGroup className="mb-3">
            <FloatingLabel
              controlId="floatingName"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                placeholder=""
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <ErrorMessage error={formik.errors.name} />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPosition"
              label="Position"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="position"
                placeholder=""
                value={formik.values.position}
                onChange={formik.handleChange}
              />
              <ErrorMessage error={formik.errors.position} />
            </FloatingLabel>
            <FloatingLabel label="Tribe" className="mb-3">
              <Form.Select
                onChange={formik.handleChange}
                value={formik.values.tribe}
                name="tribe"
              >
                {tribes.map((tribe) => (
                  <option key={tribe.id} value={tribe.name}>
                    {tribe.name}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingDate"
              label="Start date"
              className="mb-3"
            >
              <Form.Control
                type="date"
                max={currentDate}
                name="startDate"
                value={formik.values.startDate}
                onChange={formik.handleChange}
              />
              <ErrorMessage error={formik.errors.startDate} />
            </FloatingLabel>
          </FormGroup>
          <div className="row justify-content-around">
            <Button className="delete-button col-5" onClick={handleClose}>
              Close
            </Button>
            <Button className="add-employee-button col-5" type="sumbit">
              Add
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}
