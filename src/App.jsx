import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Employees from "./pages/employees";
import Tribes from "./pages/tribes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/tribes" element={<Tribes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
