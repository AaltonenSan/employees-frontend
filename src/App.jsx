import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeTable from "./components/EmployeeTable";
import Navigation from "./components/Navigation";
import TribesTable from "./components/TribesTable";

function App() {
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [updateEmployee, setUpdateEmployee] = useState(undefined);

  const handleCloseEmployeeModal = () => setShowEmployeeModal(false);
  const handleShowEmployeeModal = () => setShowEmployeeModal(true);

  return (
    <BrowserRouter>
      <Navigation
        setShowEmployeeModal={setShowEmployeeModal}
        setUpdateEmployee={setUpdateEmployee}
        updateEmployee={updateEmployee}
      />
      <Routes>
        <Route
          path="/"
          element={
            <EmployeeTable
              showModal={showEmployeeModal}
              handleCloseModal={handleCloseEmployeeModal}
              handleShowModal={handleShowEmployeeModal}
              updateEmployee={updateEmployee}
              setUpdateEmployee={setUpdateEmployee}
            />
          }
        />
        <Route path="/tribes" element={<TribesTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
