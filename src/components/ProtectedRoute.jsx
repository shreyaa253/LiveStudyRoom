import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;

// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";
// import Login from "../pages/Login";
// function ProtectedRoute({ children }) {
//   const { token } = useContext(AuthContext);
//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default ProtectedRoute;
