import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";

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
