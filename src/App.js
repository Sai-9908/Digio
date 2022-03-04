import "./styles.css";
import LoginPage from "./LoginPage";
import React, { useState } from "react";
import RegisterAadhar from "./RegisterAadhar";
import Sucess from "./AadharValdated";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [mailed, updatemail] = useState(null);
  const login = (check) => {
    updatemail(check);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<LoginPage logincheck={login} />} path="" />
          <Route element={<RegisterAadhar />} path="/register" />
        </Routes>
      </div>
    </Router>
  );
}
