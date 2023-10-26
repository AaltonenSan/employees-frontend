import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeTable from "./components/EmployeeTable";
import Navigation from "./components/Navigation";
import TribesTable from "./components/TribesTable";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<EmployeeTable />} />
          <Route path="/tribes" element={<TribesTable />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
