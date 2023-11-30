import React from "react";
import { Routes, Route } from "react-router-dom";
import Forum from "../pages/Forum";
import Answer from "../pages/Answer";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Forum />
          </PrivateRoute>
        }
      />
      <Route
        path="/answer"
        element={
          <PrivateRoute>
            <Answer />
          </PrivateRoute>
        }
      />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
