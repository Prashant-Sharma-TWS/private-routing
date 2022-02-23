import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const Settings = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? navigate("/dashboard/settings") : navigate("/login");
  }, [isAuth]);

  return <div>Settings</div>;
};

export default Settings;
