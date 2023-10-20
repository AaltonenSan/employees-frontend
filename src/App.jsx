import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeTable from "./components/EmployeeTable";
import Navigation from "./components/Navigation";
import TribesTable from "./components/TribesTable";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<EmployeeTable />} />
        <Route path="/tribes" element={<TribesTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
