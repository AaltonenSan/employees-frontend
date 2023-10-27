import { Formik, useFormik } from "formik";
import { useEffect } from "react";
import { FloatingLabel, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addNewEmployee, updateEmployeeId } from "../store/actions/employees";
import { fetchTribes } from "../store/actions/tribes";

function ValidationErrorMessage({ error }) {
  return <div className="form-error-message">{error}</div>;
}

export default function AddEmployeeForm({ handleClose }) {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.modal.employee);
  const employeeId = useSelector((state) => state.modal.updateEmployeeId);
  const isUpdate = useSelector((state) => state.modal.update);
  const tribes = useSelector((state) => state.tribes.list);

  useEffect(() => {
    dispatch(fetchTribes());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: employee.name,
      position: employee.position,
      tribe: employee.tribe,
    },
    validateOnChange: false,
    validateOnBlur: true,
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name of the employee is needed";
      } else if (values.name.match(/^[0-9\s]+$/)) {
        errors.name = "Name must consist only letters";
      }

      if (!values.position) {
        errors.position = "Enter position";
      } else if (values.position.match(/^[0-9\s]+$/)) {
        errors.position = "Position must consist only letters";
      }

      if (!values.tribe) {
        errors.tribe = "Please select tribe";
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const newEmployeeDb = {
          name: values.name.trim(),
          title: values.position.trim(),
          tribe_id: values.tribe,
        };
        if (isUpdate) {
          dispatch(updateEmployeeId(employeeId, newEmployeeDb));
        } else {
          dispatch(addNewEmployee(newEmployeeDb));
        }
        resetForm();
        handleClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Formik>
      <Form className="p-4" onSubmit={formik.handleSubmit}>
        <FormGroup className="mb-3">
          <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder=""
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <ValidationErrorMessage error={formik.errors.name} />
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
            <ValidationErrorMessage error={formik.errors.position} />
          </FloatingLabel>
          <FloatingLabel label="Tribe" className="mb-3">
            <Form.Select
              onChange={formik.handleChange}
              value={formik.values.tribe}
              name="tribe"
            >
              <option disabled value="">
                Choose Tribe
              </option>
              {tribes.map((tribe) => (
                <option key={tribe.id} value={tribe.id}>
                  {tribe.name}
                </option>
              ))}
            </Form.Select>
            <ValidationErrorMessage error={formik.errors.tribe} />
          </FloatingLabel>
        </FormGroup>
        <div className="row justify-content-around">
          <Button className="table-button col-5" onClick={handleClose}>
            Close
          </Button>
          <Button className="add-employee-button col-5" type="sumbit">
            {isUpdate ? "Save" : "Add"}
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
