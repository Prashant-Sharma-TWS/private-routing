import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../Contexts/AuthContext";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
const Main = styled.main`
  width: 100%;
  padding: 30px 50px;
`;
const PrivateRoute = (path, children) => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Main>
              <Dashboard />
            </Main>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <Main>
              <Settings />
            </Main>
          }
        />
      </Routes>
    </>
  );
};

export { PrivateRoute };
