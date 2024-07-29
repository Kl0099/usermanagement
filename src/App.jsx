import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        {/* here first route for login route  and second for registration */}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Registration />}
        />
      </Routes>
    </div>
  );
}

export default App;
