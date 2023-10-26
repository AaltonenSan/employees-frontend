import { Formik, useFormik } from "formik";
import { useEffect, useState } from "react";
import { FloatingLabel, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { instance } from "../index";

function ValidationErrorMessage({ error }) {
  return <div className="form-error-message">{error}</div>;
}

export default function AddEmployeeForm({
  employees,
  setEmployees,
  handleClose,
  updateEmployee,
  setUpdateEmployee,
}) {
  const [tribes, setTribes] = useState([]);

  async function fetchData() {
    try {
      const response = await instance.get("/tribes");
      setTribes(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: updateEmployee ? updateEmployee.name : "",
      position: updateEmployee ? updateEmployee.title : "",
      tribe: updateEmployee ? updateEmployee.tribe.id : "",
      //startDate: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validate: (values) => {
      const errors = {};
      //const today = new Date();
      //const startDate = new Date(values.startDate);

      if (!values.name) {
        errors.name = "Name of the employee is needed";
      } else if (!values.name.match(/^[a-zA-Z\s]+$/)) {
        errors.name = "Name must consist only letters";
      }

      if (!values.position) {
        errors.position = "Enter position";
      } else if (!values.position.match(/^[a-zA-Z\s]+$/)) {
        errors.position = "Position must consist only letters";
      }

      if (!values.tribe) {
        errors.tribe = "Please select tribe";
      }

      /*if (!values.startDate) {
        errors.startDate = "Enter the start date";
      } else if (today < startDate) {
        errors.startDate = "Start date cannot be in the future";
      }*/

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const newEmployeeDb = {
          name: values.name.trim(),
          title: values.position.trim(),
          tribe_id: values.tribe,
          //startDate: values.startDate,
        };
        const response = await instance.post("/employees", newEmployeeDb);
        const createdEmployee = response.data.createdEmployee;
        setEmployees([...employees, createdEmployee]);
        setUpdateEmployee(undefined);
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
          {/**<FloatingLabel
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
      <ValidationErrorMessage error={formik.errors.startDate} />
        </FloatingLabel>*/}
        </FormGroup>
        <div className="row justify-content-around">
          <Button className="table-button col-5" onClick={handleClose}>
            Close
          </Button>
          <Button className="add-employee-button col-5" type="sumbit">
            Add
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
