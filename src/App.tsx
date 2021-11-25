import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import cityAPI from "./api/cityAPI";

import { Admin } from "./components/Layout/Admin";
import { PrivateRoute } from "./components/Shared/PrivateRoute";
import { NotFound } from "./components/Shared/NotFound";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
  useEffect(() => {
    cityAPI.getAll().then((response) => console.log(response.pagination));
    // studentAPI.getAll().then(response=>console.log(response));
  });

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
