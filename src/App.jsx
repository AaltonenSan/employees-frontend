import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeTable from "./components/EmployeeTable";
import Navigation from "./components/Navigation";
import TribesTable from "./components/TribesTable";


const employeesList = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    tribe: "InternStelar",
    startDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Accountant",
    tribe: "Billing",
    startDate: "2023-04-25",
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Project Manager",
    tribe: "Gears",
    startDate: "2022-04-01",
  },
  {
    id: 4,
    name: "Alice Brown",
    position: "Marketing Specialist",
    tribe: "InternStelar",
    startDate: "2022-03-15",
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Accountant",
    tribe: "Billing",
    startDate: "2022-05-12",
  },
  {
    id: 6,
    name: "Michael Lee",
    position: "Intern",
    tribe: "InternStelar",
    startDate: "2023-06-22",
  },
];



function App() {
  const [employees, setEmployees] = useState(employeesList);

  const addEmployee = (newEmployee) => {
    const newId = employees.length + 1;
    newEmployee.id = newId;
    setEmployees([...employees, newEmployee]);
  };

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<EmployeeTable employees= {employees} setEmployees={setEmployees} />} />
        <Route path="/tribes" element={<TribesTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

