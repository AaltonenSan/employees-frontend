import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeTable from "./components/EmployeeTable";
import Navigation from "./components/Navigation";
import TribesTable from "./components/TribesTable";

function App() {
  const modalRef = useRef();
  return (
    <BrowserRouter>
      <Navigation modalRef={modalRef} />
      <Routes>
        <Route path="/" element={<EmployeeTable modalRef={modalRef} />} />
        <Route path="/tribes" element={<TribesTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
