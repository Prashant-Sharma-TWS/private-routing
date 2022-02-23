import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
import Form from "../Components/Form";
// import { AuthContext } from "../Contexts/AuthContext";

function Login() {
  // const { isAuth } = useContext(AuthContext);

  return (
    <div>
      <Form />
      {/* {isAuth && <Navigate to="/dashboard" />} */}
    </div>
  );
}

export default Login;
