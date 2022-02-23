import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export const DashboardComponent = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? navigate("/dashboard") : navigate("/login");
  }, [isAuth]);

  return <div></div>;
};
