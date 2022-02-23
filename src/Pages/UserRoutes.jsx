import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import { PrivateRoute } from "./PrivateRoute";
import Settings from "./Settings";

const Main = styled.main`
  width: 100%;
  padding: 30px 50px;
`;
const Error = styled.h1`
  min-height: 80vh;
  display: grid;
  place-content: center;
`;

const UseRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main>
            <Home />
          </Main>
        }
      />
      <Route
        path="/login"
        element={
          <Main>
            <Login />
          </Main>
        }
      />
    </Routes>
  );
};

export default UseRoutes;
